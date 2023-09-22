const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        if(!email || !password){
           res.status(400).send("Faltan datos");
        }
    
        
        const usuario = await User.findOne({ where: {email}});

        if(!usuario){
            res.status(404).send("Usuario no encontrado");
        }

        if(!password){
            res.status(403).send("Contraseña Incorrecta");
        }else{
            return res.status(200).json({access: true});
        }
       
        
    } catch (error) {
        res.status(500).send(error.message);
    }

}


module.exports = { login }