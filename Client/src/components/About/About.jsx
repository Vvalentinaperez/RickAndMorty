import "./About.css"
import yoo from '../imagenes/yocaricatura.jpg'

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
            <p>Soy Valentina Perez, pero me dicen Valen Pe. Tengo 22 años, naci el 23 de julio del 2001. Siempre fui amante de la tecnologia, pero siempre me enfoque en estudiar diseño y marketing. Cuando entre a Henry, me empece a apasionar por todo este mundo, el cual es tan amplio y hermoso.</p>
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