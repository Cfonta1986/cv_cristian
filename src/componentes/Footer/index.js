import styled from "styled-components"


const CajaFooter = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin-top: 2rem;
    box-shadow: 0 -4px 8px rgba(0,0,0,.4);
    width: 100%;
` 

const FooterP = styled.p`
    text-align: center;
    font-size: 24px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`


const Footer = () => {
    return (
        <CajaFooter>
            <FooterP>2023 - Cristián Fontanini ©</FooterP>
        </CajaFooter>
    )
}


export default Footer;