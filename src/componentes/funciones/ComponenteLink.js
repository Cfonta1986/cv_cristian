import { LinkMenu } from "../UI";
import { Link } from "react-scroll"


function ComponenteLink({hacia, nombreLink, diferencia})  {
    return (<LinkMenu>
      <Link to={hacia} smooth={true} duration={1000} offset={diferencia} activeClass="linkActivo">{nombreLink}</Link>
    </LinkMenu>);
}

export default ComponenteLink;