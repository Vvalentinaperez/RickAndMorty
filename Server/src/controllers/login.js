const {users} = require("../utils/users")

const validateForm = (req, res) => {
    const {email, password} = req.query;

    const userValidate = users.some((user) => user.email === email && user.password === password)
    
    return (userValidate 
    ? res.status(200).send({"access": true})
    : res.status(404).send({"access": false}))
};


module.exports = {
    validateForm
} 