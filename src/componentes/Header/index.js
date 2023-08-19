import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"


const vibrar = keyframes`
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-2px);
    }
    50% {
        transform: translateX(2px);
    }
    75% {
        transform: translateX(-2px);
    }
    100% {
        transform: translateX(2px);
    }
`;


const CajaHeader = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${ ({ theme }) => theme.inside };
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0,0,0,.4);
    width: 100%;
	left: 0;
	top: 0;
	position: fixed; 
`

const NombreTitulo = styled.h1`
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    animation: ${vibrar} 1.2s infinite linear alternate;

    &:hover {
        cursor: pointer;
        animation: none;
    }
`

const CajaMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

`

const LinkMenu = styled.li`
    list-style: none;
    margin-right: 2rem;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
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

