import Sobre_mi from "../Sobre_mi";
import Skills from "../Skills";
import Formacion from "../Formacion";
import Experiencia from "../Experiencia";
import Contacto from "../Contacto"


function Home() {
    return(
        <div>
            <Sobre_mi />
            <Skills />
            <Formacion />
            <Experiencia />
            <Contacto />
        </div>
);
}

export default Home;