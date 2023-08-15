import SobreMi from "../SobreMi";
import Skills from "../Skills";
import Formacion from "../Formacion";
import Experiencia from "../Experiencia";
import Contacto from "../Contacto"


function Home() {
    return(
        <div>
            <SobreMi />
            <Skills />
            <Formacion />
            <Experiencia />
            <Contacto />
        </div>
);
}

export default Home;