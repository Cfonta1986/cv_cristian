import styled from "styled-components";
import FotoAlura from "../../assets/images/alura_logo.png"
import FotoGoogle from "../../assets/images/google2.png"
import FotoArgProg from "../../assets/images/arg_prog.png"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"
import {CajaSkill} from "../Skills"

const CajaCursos = styled.div`
    display: flex;
    justify-content: space-around;
`

const CajaFormacion = styled(CajaSkill)`
    height: 300px;
    width: 380px;
`


const Formacion = () => {
    return (
        <CajaPrincipal>
            <div>
                <H2Descripcion>Formación académica</H2Descripcion>
            </div>
            <CajaCursos>
                <CajaFormacion>
                    <img src={FotoAlura} alt="Foto Alura" />
                    <h5>Formacion Principiante en Programación. </h5>
                    <h5>Formacion Business Agility. </h5>
                    <h5>Formacion HTML y CSS. </h5>
                    <h5>Formacion en React. </h5>
                    <h5>Formacion SQL con MySQL. </h5>
                    <h5>Formacion SQL con MySQL Server de Oracle. </h5>
                    <h5>Formacion Oracle Cloud Infraestructure. </h5>
                    <h5>Formacion Python, Data Science en OCI y Oracle Analytics. </h5>
                    <p>2022 / 2023 - Alura/Oracle</p>
                </CajaFormacion>
                <CajaFormacion>
                    <img src={FotoArgProg} alt="Foto Argentina Programa 4.0" />
                    <h5>Principiante en Programación.</h5>
                    <h5>Procesamiento de datos con Python.</h5>
                    <p>2023 - Argentina Programa 4.0</p>
                </CajaFormacion>
                <CajaFormacion>
                    <img src={FotoGoogle} alt="Foto Google" />
                    <h5>Introducción al Marketing Digital.</h5>
                    <p>2018 - Google Activate</p>
                </CajaFormacion>
            </CajaCursos>
        </CajaPrincipal>
    )
}

export default Formacion


