const { User } = require("../DB_connection")

const postUser = async (req, res) => {
   try {
    //Aca me traigo las propiedades 

       const { email, password } = req.body;


    //Verifico si existen, y si no lo hacen lanzo un error

       if(!email || !password){
          res.status(400).send("Faltan datos");
       }

    //Ahora, me traigo mi modelo de mi BD, y utilizo el metodo findOrCreate que lo que hace es verificar si existe un usuario registrado con ese usuario, y si no lo crea. 

        const [user, created] = await User.findOrCreate({ 
            where: {
               email, 
               password
        }
        });

    //Si el email esta ocupado, me lanza un error
        if(!created){
            res.status(400).send("El email ya esta en uso");
        }
    //Si esta libre, me crea el nuevo usuario y me lo devuelve
        return res.status(200).json(user);
        

} catch (error) {
    res.status(400).json({error: error.message})
}
}


module.exports = { postUser }
