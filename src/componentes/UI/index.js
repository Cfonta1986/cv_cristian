import styled from "styled-components";

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