import FotoCss from "../../assets/images/css_icon.png"
import FotoHtml from "../../assets/images/htlm.png"
import FotoJs from "../../assets/images/js_icon.png"
import FotoNode from "../../assets/images/nodejs_icon.png"
import FotoReact from "../../assets/images/react_icon.png"



const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <div>
                <img src={FotoCss} alt="Foto CSS" />
                <img src={FotoJs} alt="Foto JavaScript" />
                <img src={FotoHtml} alt="Foto HTML" />
                <img src={FotoNode} alt="Foto Node JS" />
                <img src={FotoReact} alt="Foto React" />
            </div>
        </div>
    )
}

export default Skills






