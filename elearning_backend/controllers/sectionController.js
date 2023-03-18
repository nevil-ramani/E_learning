const SectionModel = require('../model/sectionModel');

const createSection = async (req, res) => {

    const title = req.body.title;
    const maincourse_id = req.body.maincourse_id;

    const section = await SectionModel.create({
        title: title,
        maincourse_id: maincourse_id,
    })

    //respond with the new note
    res.send(section);
   
}

module.exports = {createSection: createSection};