import "./About.css"
import yoo from '../imagenes/yoo.jpeg'

const About = () => {
    return(
    <div className="contenedorPrincipal" >
        <div className="contenedorAbout" >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <img src={yoo} width="180" alt="" className="box-img" />
            <div className="contenedorText">
            <h1>Valentina Perez</h1>
            <h2>Estudiante de Full Stack Developer</h2>
            <div className="parraforContenedor" >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi aliquam doloribus autem in fugit nemo qui iure. Dolore placeat aperiam quo, quasi ipsam qui doloremque repudiandae repellat. Est, atque minus.</p>
            </div>
            

            <ul>
                <li><a href="#" ><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            </ul></div> 
            
        </div>
    </div>
        
    )
}


export default About;