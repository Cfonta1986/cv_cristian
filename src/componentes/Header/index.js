import { Link } from "react-router-dom"
import styled from "styled-components"


const CajaHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

const NombreTitulo = styled.h1`
    margin-left: 2rem;
`

const CajaMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
`

const LinkMenu = styled.li`
    list-style: none;
    margin-right: 2rem;
    margin-top: 1rem;
`


const Header = () => {
    return (
        <CajaHeader>
            <NombreTitulo>Cristián Fontanini</NombreTitulo>
            <CajaMenu>
                <LinkMenu><Link to="#">Sobre mi</Link></LinkMenu>
                <LinkMenu><Link to="#">Skills</Link></LinkMenu>
                <LinkMenu><Link to="#">Formación</Link></LinkMenu>
                <LinkMenu><Link to="#">Proyectos</Link></LinkMenu>
                <LinkMenu><Link to="#">cristianfonta16@gmail.com</Link></LinkMenu>
            </CajaMenu>
        </CajaHeader>
    )
}

export default Header

