import Hola from "../Hola"
import SobreMi from "../SobreMi";
import Skills from "../Skills";
import Formacion from "../Formacion";
import Experiencia from "../Experiencia";
import Contacto from "../Contacto"
import styled from "styled-components";


const CajaHome = styled.div`
    margin-top: 7rem;
`


function Home() {
    return(
        <CajaHome>
            <Hola />
            <SobreMi />
            <Skills />
            <Formacion />
            <Experiencia />
            <Contacto />
        </CajaHome>
);
}

export default Home;