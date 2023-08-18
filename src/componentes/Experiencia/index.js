import Encriptador from "../../assets/images/encriptador.png"
import { Link } from "react-router-dom"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"


const Experiencia = () => {
    return (
        <CajaPrincipal>
            <H2Descripcion>Experiencia profesional</H2Descripcion>
            <div>
                <img src={Encriptador} alt="Foto Encriptador" />
                <Link to="https://github.com/Cfonta1986/challenge-encriptador">Repositorio</Link>
                <Link to="https://cfonta1986.github.io/challenge-encriptador/">Ver DEMO</Link>
            </div>
        </CajaPrincipal>
    )
}

export default Experiencia