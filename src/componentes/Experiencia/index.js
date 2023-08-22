import styled from "@emotion/styled"
import Encriptador from "../../assets/images/encriptador.png"
import { Link } from "react-router-dom"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"


const CajaExperiencia = styled.div`
    margin-top: 3rem
`


const Experiencia = () => {
    return (
        <CajaPrincipal>
            <H2Descripcion>Experiencia profesional</H2Descripcion>
            <CajaExperiencia>
                <img src={Encriptador} alt="Foto Encriptador" />
                <div>
                    <Link to="https://github.com/Cfonta1986/challenge-encriptador">Repositorio</Link>
                    <Link to="https://cfonta1986.github.io/challenge-encriptador/">Ver DEMO</Link>
                </div>
            </CajaExperiencia>
        </CajaPrincipal>
    )
}

export default Experiencia