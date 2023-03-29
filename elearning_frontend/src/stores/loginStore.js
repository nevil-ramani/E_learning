import { create } from 'zustand'
// import axios from 'axios'


const loginStore = create((set) => ({

    loggedIn: null,
    user: null,
    token: null,



    // formData: {
    //     email: "",
    //     password: "",
    //   },



      
  // updateLoginFormFileldChange: (e) => {
  //   const { name, value } = e.target;
  //   console.log({[name] : value});


  //   set((state) => {
  //     const {formData} = loginStore.getState()
  //     console.log(formData);
  //     return {
  //       formData: {
  //         ...state.formData,
  //         [name]: value
  //       }
  //     }
  //   })

  // },


  
  loginSubmit: async (data) => {
    // e.preventDefault();

    // const { formData,loggedIn } = loginStore.getState();
    // const res = await axios.post('http://localhost:3001/notes/login', formData);
    // console.log(res);
    // console.log(formData)


    set({ loggedIn: true})
    console.log(data)

    set({ email: data.email})
    set({ token: data.token })

    // set({
    //   formData: {
    //     email: da,
    //     password: ""
    //   }
    // })
  },


  // checkAuth: async() => {
  //   try{
  //   await axios.get('http://localhost:3001/checkauth',{withCredentials: true})
  //   set({ loggedIn: true})

  //   }catch(err){
  //     set({ loggedIn: false})
  //   }
  // }
    
})
)

export default loginStore;