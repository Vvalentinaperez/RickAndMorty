import {useState} from "react"
import validation from "../Validation"
import './Form.css'
import logo from '../imagenes/logo2.png'
import fondologin from "../imagenes/fondologin.png"



const Form = ({login}) => {

    const [userData, setUserData] = useState({
           email: "",
           password: ""
        })

    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name] : event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }

 

    return(
    <div className="contenedorForm">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contenedorFormulario">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <label htmlFor="email" ></label>
              <input name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange} />
              {errors.email && <p style={{color: "blue"}} >{errors.email}</p>} 
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">         
              <label htmlFor="password"></label>
              <input name="password" type="password" placeholder="Password" value={userData.password} onChange={handleChange} />
              {errors.password && <p style={{color: "red"}} >{errors.password}</p>} 
              <i className="bx bxs-lock"></i>
              </div>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
       <div className="creditos" >CREATED BY VALEN PEREZ</div>
    </div>
    )
}

export default Form;