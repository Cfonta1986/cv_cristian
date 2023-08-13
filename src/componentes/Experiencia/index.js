import Encriptador from "../../assets/images/encriptador.png"
import { Link } from "react-router-dom"



const Experiencia = () => {
    return (
        <div>
            <h2>Experiencia profesional</h2>
            <div>
                <img src={Encriptador} alt="Foto Encriptador" />
                <Link to="https://github.com/Cfonta1986/challenge-encriptador">Repositorio</Link>
                <Link to="https://cfonta1986.github.io/challenge-encriptador/">Ver DEMO</Link>
            </div>
        </div>
    )
}

export default Experiencia