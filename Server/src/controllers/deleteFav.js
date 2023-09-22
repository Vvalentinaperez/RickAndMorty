const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
      const { id } = req.params;

      //Elimina el personaje favorito con el id proporcionado
      const user = await Favorite.destroy({
        where: id
      });
      
      //Si no se elimino ningun registro, devuelve un mensaje indicando que no se encontro ningun personaje
      if(user === 0){
        res.status(404).send("Personaje favorito no encontrado");
      }

      //Sirve para obtener todos los personajes favoritos restantes
      const allUsers = await Favorite.findAll();

      //Devuelve los personajes favoritos restantes
      return res.json(allUsers);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}


module.exports = { deleteFav }