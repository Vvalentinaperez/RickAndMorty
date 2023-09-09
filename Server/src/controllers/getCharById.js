const  axios  = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    const {id} = req.params;

    await axios(`${URL}${id}`).then(res => res.data)
    .then(({name, gender, species, origin, image, status}) => {
       if(name){
        const character = {
            id, 
            name, 
            species, 
            origin, 
            image, 
            gender, 
            status
        }
        return res.status(200).json(character)
       }

    return res.status(404).send("Not found");
    })
    .catch(error => res.status(500).send(error.message))
}



module.exports = {
    getCharById
}