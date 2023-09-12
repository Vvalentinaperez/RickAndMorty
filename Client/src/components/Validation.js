const validation = (userData) => {
    const errors = {};
    
    // Validación para email
    if (!userData.email) {
        errors.email = "Debe ingresar un email";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(userData.email)) {
        errors.email = "email invalido";
    } else if (userData.email.length > 35) {
        errors.email = "El email no debe superar los 35 caracteres";
    } else {
        errors.email = "";
    }
    
    // Validación para password
    if (!userData.password) {
        errors.password = "Debe ingresar una contraseña";
    } else if (!/^(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres y al menos un dígito";
    } else {
        errors.password = "";
    }

    return errors;
}

export default validation;

