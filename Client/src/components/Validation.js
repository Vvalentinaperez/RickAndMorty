const validation = (userData) => {
    const errors = {}
    
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/.test(userData.email)){
            errors.email = "email invalido"
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email"
    }
    if(userData.email.length > 35){
        errors.email = "El email no debe superar los 35 caracteres"
    }
    
    if(!/^(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)){
        errors.password = "debe ingresar una contraseña"
    }
    if(!userData.password.length > 6 || !userData.password.length <= 10 ){
        errors.password = "la contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;

