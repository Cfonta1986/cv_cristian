import styled from "styled-components";
import FotoAlura from "../../assets/images/alura_logo.png"
import FotoGoogle from "../../assets/images/google2.png"
import FotoArgProg from "../../assets/images/arg_prog2.png"
import {H2Descripcion} from "../SobreMi"
import {CajaSkill} from "../Skills"
import { CajaPrincipal } from "../UI"

const CajaCursos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CajaFormacion = styled(CajaSkill)`
    height: 300px;
    width: 350px;
    background-color: ${ ({ theme }) => theme.inside };
`

const TituloInstitucion = styled.h3`
    margin-top: 1rem;
`


const Formacion = () => {
    return (
        <CajaPrincipal id="formacion">
            <div>
                <H2Descripcion>Formación académica</H2Descripcion>
            </div>
            <CajaCursos>
                <CajaFormacion>
                    <img src={FotoAlura} alt="Foto Alura" />
                    <h5>Principiante en Programación.</h5>
                    <h5>Business Agility.</h5>
                    <h5>HTML y CSS.</h5>
                    <h5>React.</h5>
                    <h5>SQL con MySQL.</h5>
                    <h5>SQL con MySQL Server de Oracle.</h5>
                    <h5>Oracle Cloud Infraestructure.</h5>
                    <h5>Python, Data Science en OCI y Oracle Analytics.</h5>
                    <TituloInstitucion>2022 / 2023 - Alura/Oracle</TituloInstitucion>
                </CajaFormacion>
                <CajaFormacion>
                    <img src={FotoArgProg} alt="Foto Argentina Programa 4.0" />
                    <h5>Principiante en Programación.</h5>
                    <h5>Procesamiento de datos con Python.</h5>
                    <TituloInstitucion>2022 / 2023 - Argentina Programa 4.0</TituloInstitucion>
                </CajaFormacion>
                <CajaFormacion>
                    <img src={FotoGoogle} alt="Foto Google" />
                    <h5>Introducción al Marketing Digital.</h5>
                    <h5>Desarrollo de Apps Móviles.</h5>
                    <h5>Comercio Electrónico.</h5>
                    <TituloInstitucion>2018 - Google Activate</TituloInstitucion>
                </CajaFormacion>
            </CajaCursos>
        </CajaPrincipal>
    )
}

export default Formacion


