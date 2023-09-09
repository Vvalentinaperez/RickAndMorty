const  axios  = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById =  (req, res) => {
//     const {id} = req.params;

//      axios(`${URL}${id}`).then(res => res.data)
//     .then(({name, gender, species, origin, image, status}) => {
//        if(name){
//         const character = {
//             id, 
//             name, 
//             species, 
//             origin, 
//             image, 
//             gender, 
//             status
//         }
//         return res.status(200).json(character)
//        }

//     return res.status(404).send("Not found");
//     })
//     .catch(error => res.status(500).send(error.message))
// }



// module.exports = {
//     getCharById
// }

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
            return response.status(200).send(character)
        }

  }catch (error) {
          return response.status(404).send(JSON.stringify("not found"))
      }
     
} 

module.exports = { getCharById };