import styled  from "styled-components"



export const CajaPrincipal = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 3rem;
`

const CajaSobre = styled.div`
    margin-top: 2rem;
`

export const H2Descripcion = styled.h2`
    text-align: center;
`

export const TextoDescripcion = styled.p`
    font-style: italic;
    font-weight: bold;
`





const SobreMi = () => {
    return (
        <CajaPrincipal>
            
            <CajaSobre>
                <H2Descripcion>Sobre mi</H2Descripcion>
                <TextoDescripcion>Con 36 años de edad y residencia en la ciudad de Rosario, Argentina, soy un apasionado por el emprendimiento y con una visión de negocio excepcional. Me siento atraído por los desafíos y poseo una naturaleza detallista y autodidacta que me impulsa constantemente a buscar oportunidades para el crecimiento personal y profesional.

                Mi enfoque principal está en el ámbito del Desarrollo Web y Data Science. Considero que el aprendizaje continuo es esencial y siempre estoy en busca de nuevas formas de expandir mi conjunto de habilidades. Mi objetivo primordial es contribuir y prosperar en un entorno laboral que fomente el desarrollo de proyectos innovadores y que esté alineado con mis valores y aspiraciones.

                Estoy entusiasmado por la posibilidad de unirme a una empresa dinámica donde pueda aportar mi pasión por el desarrollo web y la ciencia de datos. Aspirando a alinearme con los objetivos estratégicos de la organización, espero desplegar mi potencial y contribuir al éxito mutuo.

                Siendo un emprendedor de corazón y un buscador incansable de soluciones, estoy listo para enfrentar nuevos desafíos y crear un impacto significativo en el mundo del desarrollo tecnológico.</TextoDescripcion>
            </CajaSobre>
        </CajaPrincipal>
    )
}

export default SobreMi
