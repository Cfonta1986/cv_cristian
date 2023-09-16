import styled, { keyframes } from "styled-components";
import Input from '@mui/material/Input';



export const AbrirMenu = styled.img`
    position: fixed;
    width: 80px;
    height: 80px;
    top: 80%;
    left: 80%;
    
    @media (min-width: 500px) {
        display:none;
  }
    @media (max-width: 360px) {
      top: 80%;
      left: 70%;
  }
`

export const FotoContacto = styled.img`
    width: 300px;
    height: 400px;
    @media (max-width: 730px) {
        display: none;
  }
`

export const Icono = styled.img`
    height: 25px;
    width: 25px;
`

export const FotoError = styled.img`
    width: 50%;
    height: 50%;
` 

export const IconoTema = styled(Icono)`
    filter: ${ ( { theme } ) => theme.filter };
`

export const CajaForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-left: 1rem;
`

export const NuevoInput = styled(Input)`
  margin-bottom: 1rem;
  background-color: ${ ({ theme }) => theme.inside };
  color: ${ ({theme}) => theme.text };
`

export const ContainedButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${ ({ theme }) => theme.inside };
    color: ${ ({theme}) => theme.text };
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;
    
    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
  }
`

const BtnTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    position: fixed; 
    z-index: 9999;
`
export default BtnTema;

export const CajaPrincipal = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 2rem;
    @media (max-width: 485px) {
        margin-top: 5rem;
  }
  @media (max-width: 400px) {
        margin-top: 12rem;
  }
  @media (max-width: 335px) {
        margin-top: 20rem;
  }
  @media (max-width: 308px) {
        margin-top: 25rem;
  }
`

export const CajaPrincExperiencia = styled(CajaPrincipal)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CajaSkills = styled(CajaPrincipal)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CajaHola = styled(CajaPrincipal)`
    height: 90vh;
`

export const CajaHeader = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${ ({ theme }) => theme.inside };
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0,0,0,.4);
    width: 100%;
	left: 0;
	top: 0;
	position: fixed; 
    z-index: 9998;

    @media (max-width: 803px) {
        flex-direction: column;
        align-items: center;
  }
`

export const CajaSobre = styled.div`
    margin-top: 2rem;
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
`

export const CajaFormacion = styled(CajaSkill)`
    height: 300px;
    width: 350px;
    background-color: ${ ({ theme }) => theme.inside };
`

export const CajaExperiencia = styled(CajaSkill)`
    margin-top: 3rem;
    width: 65%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 100%;
        height: auto;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

export const CajaCursos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const CajaTelefono = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

export const CajaHome = styled.div`
    margin-top: 7rem;
`

export const CajaFotoH3 = styled.div`
    display: flex;
`

export const CajaTitulo = styled.div`
    margin-top: 3rem;
`

export const CajaLinks = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 500px) {
        align-items: center;
  }
`

export const DivImg= styled.div`
    @media (max-width: 803px) {
        display: none;
  }
`

export const ParrafoPrincipal = styled.p`
    font-size: 30px;
    margin-top: 4rem;
    text-align: center;
`

const vibrar = keyframes`
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-2px);
    }
    50% {
        transform: translateX(2px);
    }
    75% {
        transform: translateX(-2px);
    }
    100% {
        transform: translateX(2px);
    }
`;

export const NombreTitulo = styled.h1`
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    animation: ${vibrar} 1.3s infinite linear alternate;

    &:hover {
        cursor: pointer;
        animation: none;
    }
`

export const TituloPrincipal = styled.h1`
    text-align: center;
    font-size: 60px;
`

export const H2Descripcion = styled.h2`
    text-align: center;
    font-size: 40px;
`

export const TituloInstitucion = styled.h3`
    margin-top: 1rem;
`

export const H4Skills = styled.h4`
    margin-top: .5rem;
`

export const TextoDescripcion = styled.p`
margin-top: 2rem;
    font-style: italic;
    font-weight: bold;
    font-size: 26px;
`

export const CajaMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    @media (max-width: 500px) {
        display:none;
  }
`

export const CajaMenu2 = styled.ul`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    flex-direction: column;
    align-items: start;
    margin-right: 20vh;
    margin-bottom: 1rem;
    @media (min-width: 500px) {
        display:none;
  }
`

export const LinkMenu = styled.li`
    list-style: none;
    margin-right: 2rem;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
        transform: skew(20deg);
    }
`

export const LinkIndividual = styled.a`
    margin-left: 0.8rem;
    margin-top: 2rem;
`








