import { Link, animateScroll } from "react-scroll";
import styled, { keyframes } from "styled-components"
import "../../assets/css/style.css"


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
    z-index: 9998;

    @media (max-width: 803px) {
        flex-direction: column;
  }
`

const NombreTitulo = styled.h1`
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    animation: ${vibrar} 1.3s infinite linear alternate;

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
        transform: skew(20deg);
    }
`


const scrollArriba = () => {
    animateScroll.scrollToTop();
  }

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

   
const Header = () => {    
    return (
        <CajaHeader id="scrollToTop">
            <Link to="scrollToTop" smooth={true} duration={1000} onClick={scrollArriba} ><NombreTitulo>Cristián Fontanini</NombreTitulo></Link>
            <CajaMenu>
                <LinkMenu ><Link to="sobre_mi" smooth={true} duration={1000} offset= {-100} activeClass="linkActivo" >Sobre mi</Link></LinkMenu>
                <LinkMenu><Link to="skills" smooth={true} duration={1000} offset= {-100}  activeClass="linkActivo" >Skills</Link></LinkMenu>
                <LinkMenu><Link to="formacion" smooth={true} duration={1000} offset= {-100}  activeClass="linkActivo" >Formación</Link></LinkMenu>
                <LinkMenu><Link to="experiencia" smooth={true} duration={1000} offset= {-100}  activeClass="linkActivo" >Experiencia</Link></LinkMenu>
                <LinkMenu><Mailto email="cristianfonta16@gmail.com" subject="Hola" body="Me interesa tu trabajo, quiero conocerte">E-Mail</Mailto></LinkMenu>                
            </CajaMenu>
        </CajaHeader>
    )
}

export default Header

