import FormContacto from "../FormContacto";
import FotoTelefono from "../../assets/images/contact_image.png";
import { CajaPrincipal, H2Descripcion, CajaTelefono, FotoContacto } from "../UI"


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