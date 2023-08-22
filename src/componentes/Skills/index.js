import FotoCss from "../../assets/images/css.png"
import FotoHtml from "../../assets/images/html.png"
import FotoJs from "../../assets/images/js.png"
import FotoNode from "../../assets/images/nodejs.png"
import FotoReact from "../../assets/images/react_icon_grande.png"
import FotoPython from "../../assets/images/python.png"
import FotoSQL from "../../assets/images/servidor-sql.png"
import FotoGit from "../../assets/images/git.png"
import {CajaPrincipal, H2Descripcion} from "../SobreMi"
import styled from "styled-components"


const CajaSkills = styled(CajaPrincipal)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CajaSkill = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${ ({ theme }) => theme.inside };
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
  margin-right: 2rem;
  margin-top: 3rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 11px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Skills = () => {
    return (
        <CajaPrincipal>
            <H2Descripcion>Skills</H2Descripcion>
            <CajaSkills>
                <CajaSkill>
                    <img src={FotoHtml} alt="Foto HTML" />
                    <h4>HTML</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoCss} alt="Foto CSS" />
                    <h4>CSS</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoJs} alt="Foto JavaScript" />
                    <h4>JavaScript</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoReact} alt="Foto React" />
                    <h4>React</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoNode} alt="Foto Node JS" />
                    <h4>Nodejs</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoSQL} alt="Foto SQL" />
                    <h4>SQL</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoPython} alt="Foto Python" />
                    <h4>Python</h4>
                </CajaSkill>
                <CajaSkill>
                    <img src={FotoGit} alt="Foto Git" />
                    <h4>Git</h4>
                </CajaSkill>
            </CajaSkills>
        </CajaPrincipal>
    )
}

export default Skills






