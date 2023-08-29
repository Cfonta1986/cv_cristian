import styled from "@emotion/styled"
import Encriptador from "../../assets/images/encriptador.png"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"
import {CajaSkill} from "../Skills"
import {ContainedButton} from "../FormContacto"


const CajaPrincExperiencia = styled(CajaPrincipal)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CajaExperiencia = styled(CajaSkill)`
    margin-top: 3rem;
    width: 65%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 100%;
        height: auto;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`



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