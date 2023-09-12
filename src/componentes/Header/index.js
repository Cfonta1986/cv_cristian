import { Link } from "react-scroll";
import "../../assets/css/style.css"
import BtnMenu from "../../assets/images/btn-menu.svg"
import { useState } from "react";
import {CajaHeader, NombreTitulo, CajaMenu, CajaMenu2, AbrirMenu, LinkMenu} from "../UI"
import scrollArriba from "../funciones/scrollArriba.js"
import Mailto from "../funciones/Mailto.js"



  


const MenuCelular = () => {
  return (
    <CajaMenu2>
      <LinkMenu>
        <Link to="sobre_mi" smooth={true} duration={1000} offset={-310} activeClass="linkActivo">
          Sobre mi
        </Link>
      </LinkMenu>
      <LinkMenu>
        <Link to="skills" smooth={true} duration={1000} offset={-310} activeClass="linkActivo">
          Skills
        </Link>
      </LinkMenu>
      <LinkMenu>
        <Link to="formacion" smooth={true} duration={1000} offset={-310} activeClass="linkActivo">
          Formación
        </Link>
      </LinkMenu>
      <LinkMenu>
        <Link to="experiencia" smooth={true} duration={1000} offset={-310} activeClass="linkActivo">
          Experiencia
        </Link>
      </LinkMenu>
      <LinkMenu>
        <Mailto email="cristianfonta16@gmail.com" subject="Hola" body="Me interesa tu trabajo, quiero conocerte">
          E-Mail
        </Mailto>
      </LinkMenu>
    </CajaMenu2>
  );
};

   
const Header = () => {   
    const [MenuVisible, SetMenuVisible] = useState(false);

    const handleAbrirMenu = () => {
        SetMenuVisible(!MenuVisible);
    };
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
            
            <AbrirMenu src={BtnMenu} alt="Botón menú" onClick={handleAbrirMenu} />
            {MenuVisible && <MenuCelular />}
        </CajaHeader>
    )
}

export default Header

