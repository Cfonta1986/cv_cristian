import FormContacto from "../FormContacto";
import FotoTelefono from "../../assets/images/contact_image.png";
import styled from "styled-components";
import { CajaPrincipal, H2Descripcion } from "../SobreMi";

export const CajaTelefono = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

const FotoContacto = styled.img`
    width: 300px;
    height: 400px;
`


const Contacto = () => {
    return (
        <CajaPrincipal>
            <div>
                <H2Descripcion>Contacto</H2Descripcion>
            </div>
            <CajaTelefono>
                <FotoContacto src={FotoTelefono} alt="Foto telefono de contacto" />
                <FormContacto />
            </CajaTelefono>
        </CajaPrincipal>
    )
}


export default Contacto;