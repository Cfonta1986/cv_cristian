import { Link } from "react-scroll";
import "../../assets/css/style.css"
import BtnMenu from "../../assets/images/btn-menu.svg"
import { useState } from "react";
import {CajaHeader, NombreTitulo, CajaMenu, CajaMenu2, AbrirMenu, LinkMenu} from "../UI"
import scrollArriba from "../funciones/scrollArriba.js"
import Mailto from "../funciones/Mailto.js"
import ComponenteLink from "../funciones/ComponenteLink";



const MenuCelular = () => {
  return (
    <CajaMenu2>
      <ComponenteLink hacia="sobre_mi" nombreLink="Sobre mi" diferencia={-310} />
      <ComponenteLink hacia="skills" nombreLink="Skills" diferencia={-310} />
      <ComponenteLink hacia="formacion" nombreLink="Formación" diferencia={-310} />
      <ComponenteLink hacia="experiencia" nombreLink="Experiencia" diferencia={-310} />
      <LinkMenu><Mailto email="cristianfonta16@gmail.com" subject="Hola" body="Me interesa tu trabajo, quiero conocerte">E-Mail</Mailto>
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
            <ComponenteLink hacia="sobre_mi" nombreLink="Sobre mi" diferencia={-100} />
            <ComponenteLink hacia="skills" nombreLink="Skills" diferencia={-100} />
            <ComponenteLink hacia="formacion" nombreLink="Formación" diferencia={-100} />
            <ComponenteLink hacia="experiencia" nombreLink="Experiencia" diferencia={-100} />
            <LinkMenu><Mailto email="cristianfonta16@gmail.com" subject="Hola" body="Me interesa tu trabajo, quiero conocerte">E-Mail</Mailto></LinkMenu>                
        </CajaMenu>
            
            <AbrirMenu src={BtnMenu} alt="Botón menú" onClick={handleAbrirMenu} />
            {MenuVisible && <MenuCelular />}
        </CajaHeader>
    )
}

export default Header

