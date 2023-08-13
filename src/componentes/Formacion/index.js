import styled from "styled-components";
import FotoAlura from "../../assets/images/alura_logo.png"
import FotoGoogle from "../../assets/images/google2.png"
import FotoArgProg from "../../assets/images/arg_prog.png"

const CajaCursos = styled.div`
    display: flex;
    justify-content: space-around;
`


const Formacion = () => {
    return (
        <div>
            <div>
                <h1>Formación académica</h1>
            </div>
            <CajaCursos>
                <div>
                    <img src={FotoAlura} alt="Foto Alura" />
                    <h5>Especialización en Front-End. Programa ONE</h5>
                    <p>2023 - Alura/Oracle</p>
                </div>
                <div>
                    <img src={FotoGoogle} alt="Foto Google" />
                    <h5>Introducción al Marketing Digital</h5>
                    <p>2018 - Google Activate</p>
                </div>
                <div>
                    <img src={FotoArgProg} alt="Foto Argentina Programa 4.0" />
                    <h5>Principiante en Programación</h5>
                    <p>2023 - Argentina Programa 4.0</p>
                </div>
            </CajaCursos>
        </div>
    )
}

export default Formacion


