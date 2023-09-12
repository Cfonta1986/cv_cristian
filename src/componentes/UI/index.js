import styled, { keyframes } from "styled-components";

export const Icono = styled.img`
    height: 25px;
    width: 25px;
`

export const IconoTema = styled(Icono)`
    filter: ${ ( { theme } ) => theme.filter };
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

export const ParrafoPrincipal = styled.p`
    font-size: 30px;
    margin-top: 4rem;
    text-align: center;
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

export const LinkMenu = styled.li`
    list-style: none;
    margin-right: 2rem;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
        transform: skew(20deg);
    }
`