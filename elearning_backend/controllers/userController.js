const UserModel = require('../model/userModel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//users list
const getallUsers =  async (req, res) =>{
    const userList = await UserModel.find().select('-passwordHash');

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
}


//user 
const getUser = async(req,res)=>{
    const user = await  UserModel.findById(req.params.id).select('-passwordHash');

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
}




// update user
const updateUser = async (req, res)=> {

    const userExist = await UserModel.findById(req.params.id);
    let newPassword
    if(req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10)
    } else {
        newPassword = userExist.passwordHash;
    }

    const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
            username: req.body.username,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            isAdmin: req.body.isAdmin,
            isStudent: req.body.isStudent,
            isTutor: req.body.isTutor,
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
}



//login user
const loginUser =  async (req,res) => {
    const user = await UserModel.findOne({email: req.body.email})
    // const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
                isStudent: user.isStudent,
                isTutor: user.isTutor
            },
            'secret',
            {expiresIn : '1d'}
        )
       
        res.status(200).send({user: user.email , token: token}) 

        // res.status(400).send('login sucessfull');
    } else {
       res.status(400).send('password is wrong!');
    }

    
}


//register user
const registerUser = async (req,res)=>{
    let user = new UserModel({
        // name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        isAdmin: req.body.isAdmin,
        isStudent: req.body.isAdmin,
        isTutor: req.body.isAdmin
    })
    user = await user.save();

    

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
}


//delete user
const deleteUser = (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "user not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}


//totel users
const totelUser = async (req, res) =>{
    const userCount = await User.countDocuments((count) => count)

    if(!userCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        userCount: userCount
    });
}


module.exports = {
    getallUsers,
    getUser,
    updateUser,
    loginUser,
    registerUser,
    deleteUser,
    totelUser

};