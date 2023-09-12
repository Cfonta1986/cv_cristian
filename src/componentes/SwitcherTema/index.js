import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/tema.png"
import { Icono } from "../UI";


export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema claro" title="Tema claro" />
    const oscuro= <Icono src={themeOff} alt="Tema Oscuro" title="Tema oscuro" />

    return <> { tema ? oscuro : claro } </>

}