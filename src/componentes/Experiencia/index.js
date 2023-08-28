import styled from "@emotion/styled"
import Encriptador from "../../assets/images/encriptador.png"
import { Link } from "react-router-dom"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"
import {CajaSkill} from "../Skills"


const CajaPrincExperiencia = styled(CajaPrincipal)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CajaExperiencia = styled(CajaSkill)`
    margin-top: 3rem;
    width: 400px;
    height: 300px;
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
                    <Link to="https://github.com/Cfonta1986/challenge-encriptador">Repositorio</Link>
                    <Link to="https://cfonta1986.github.io/challenge-encriptador/">Ver DEMO</Link>
                </div>                
            </CajaExperiencia>
        </CajaPrincExperiencia>
    )
}

export default Experiencia