import styled from "@emotion/styled"
import Encriptador from "../../assets/images/encriptador.png"
import { Link } from "react-router-dom"
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
    width: 60%;
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
    }
`



const Experiencia = () => {
    return (
        <CajaPrincExperiencia>
            <H2Descripcion>Experiencia profesional</H2Descripcion>
            <CajaExperiencia>
                <img src={Encriptador} alt="Foto Encriptador" />
                <div>
                    <ContainedButton type="submit" size="large" variant="contained">Enviar</ContainedButton>
                    <ContainedButton type="submit" size="large" variant="contained">Enviar</ContainedButton>
                    
                </div>                
            </CajaExperiencia>
        </CajaPrincExperiencia>
    )
}

export default Experiencia


/*<Link to="https://github.com/Cfonta1986/challenge-encriptador">Repositorio</Link>
                    <Link to="https://cfonta1986.github.io/challenge-encriptador/">Ver DEMO</Link>*/