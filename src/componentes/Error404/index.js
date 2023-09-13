import E404 from "../../assets/images/error404.jpg";
import { FotoError } from "../UI"


function Error404() {
    return(
        <div>
            <FotoError src={E404} alt="Error 404" title="Ocurrió un error"/>
        </div>
);
}

export default Error404;