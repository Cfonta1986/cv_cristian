import FormContacto from "../FormContacto";
import FotoTelefono from "../../assets/images/contact_image.png";
import styled from "styled-components";
import { CajaPrincipal } from "../SobreMi";

export const CajaTelefono = styled.div`
    display: flex;
    justify-content: space-around;
`


const Contacto = () => {
    return (
        <CajaPrincipal>
            <div>
                <h2>Contacto</h2>
            </div>
            <CajaTelefono>
                <img src={FotoTelefono} alt="Foto telefono de contacto" />
                <FormContacto />
            </CajaTelefono>
        </CajaPrincipal>
    )
}


export default Contacto;