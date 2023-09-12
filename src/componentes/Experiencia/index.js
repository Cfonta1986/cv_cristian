import Encriptador from "../../assets/images/encriptador.png"
import { H2Descripcion, CajaPrincExperiencia, CajaExperiencia, ContainedButton } from "../UI"


const Experiencia = () => {
    return (
        <CajaPrincExperiencia id="experiencia">
            <H2Descripcion>Experiencia profesional</H2Descripcion>
            <CajaExperiencia>
                <img src={Encriptador} alt="Foto Encriptador" />
                <div>
                    <a href="https://github.com/Cfonta1986/challenge-encriptador" target="_blank" rel="noopener noreferrer" ><ContainedButton >Repositorio</ContainedButton></a>
                    <a href="https://cfonta1986.github.io/challenge-encriptador/" target="_blank" rel="noopener noreferrer" ><ContainedButton >Ver DEMO</ContainedButton></a>
                </div>                
            </CajaExperiencia>
        </CajaPrincExperiencia>
    )
}

export default Experiencia