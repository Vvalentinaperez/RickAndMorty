const  axios  = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const  getCharById = async (request, response)=>{
  try {
    const { id } = request.params
     
    const { data } = await axios(`${URL}${id}`)
       
    let character = new Object;
        
        if(data){ 
          character = {
          id : data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          gender: data.gender
        }
            return response.status(200).json(character)
        }

  }catch (error) {
          return response.status(404).send(JSON.stringify("not found"))
      }
     
} 

module.exports = { getCharById };