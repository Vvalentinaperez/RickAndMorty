const { Favorite  } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;

        if(!id || !name || !origin || !status || !image || !species || !gender){
            res.status(401).send("Faltan datos");
        }

        await Favorite.findOrCreate({
            where: {
                name, 
                id, 
                origin,
                status, 
                image, 
                species, 
                gender
            }
        })

        const allFavorites = await Favorite.findAll();

        res.status(200).json(allFavorites);
        

    } catch (error) {
      res.status(500).send({error: error.message});
    }
}


module.exports = { postFav }