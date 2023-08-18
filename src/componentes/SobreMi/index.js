import styled  from "styled-components"
import Foto_cv from "../../assets/images/foto_cv_redonda.png"
import { Link } from "react-router-dom"
import FotoGitHub from "../../assets/images/github.png"
import FotoLinkedIn from "../../assets/images/linkedin.png"
import FotoLogoCF from "../../assets/images/LOGO_CF_limpio_ch.png"



export const CajaPrincipal = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 3rem;
`

const CajaFotoH3 = styled.div`
    display: flex;
`

const CajaSobre = styled.div`
    margin-top: 2rem;
`

export const H2Descripcion = styled.h2`
    text-align: center;
`

const TextoDescripcion = styled.p`
    font-style: italic;
    font-weight: bold;
`


const SobreMi = () => {
    return (
        <CajaPrincipal>
            <CajaFotoH3>
                <div>
                    <img src={Foto_cv} alt="Foto de Cristian Fontanini"/>
                </div>
                <div>
                    <h1>Hola!!! Mi nombre es Cristián Fontanini.</h1>
                    <TextoDescripcion>Construyo PAGINAS WEB, me encanta la DATA SCIENCE y soy bombero. Me formé en Marketing Digital en Google Activate, Diseño de Páginas Web con Wordpress, Desarrollador FRONT-END y Python para Data Science en Alura / Oracle y Argentina Programa 4.0. </TextoDescripcion>
                     <div>
                    <Link to="https://www.linkedin.com/in/cristian-fontanini/"><img src={FotoLinkedIn} alt="Foto LikedIn"/></Link>
                    <Link to="https://github.com/Cfonta1986"><img src={FotoGitHub} alt="Foto GitHub"/></Link>
                    <Link to="#"><img src={FotoLogoCF} alt="Logo CF" /></Link>
                </div>
                </div>
               
            </CajaFotoH3>
            <CajaSobre>
                <H2Descripcion>Sobre mi</H2Descripcion>
                <TextoDescripcion>Con 36 años de edad y residencia en la ciudad de Rosario, Argentina, soy un apasionado por el emprendimiento y con una visión de negocio excepcional. Me siento atraído por los desafíos y poseo una naturaleza detallista y autodidacta que me impulsa constantemente a buscar oportunidades para el crecimiento personal y profesional.

                Mi enfoque principal está en el ámbito del Desarrollo Web y Data Science. Considero que el aprendizaje continuo es esencial y siempre estoy en busca de nuevas formas de expandir mi conjunto de habilidades. Mi objetivo primordial es contribuir y prosperar en un entorno laboral que fomente el desarrollo de proyectos innovadores y que esté alineado con mis valores y aspiraciones.

                Estoy entusiasmado por la posibilidad de unirme a una empresa dinámica donde pueda aportar mi pasión por el desarrollo web y la ciencia de datos. Aspirando a alinearme con los objetivos estratégicos de la organización, espero desplegar mi potencial y contribuir al éxito mutuo.

                Siendo un emprendedor de corazón y un buscador incansable de soluciones, estoy listo para enfrentar nuevos desafíos y crear un impacto significativo en el mundo del desarrollo tecnológico.</TextoDescripcion>
            </CajaSobre>
        </CajaPrincipal>
    )
}

export default SobreMi