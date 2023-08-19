import GlobalStyle from './GlobalStyle.js';
import { useState } from 'react';
import Home from './componentes/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import SwitcherTema from "./componentes/SwitcherTema";
import BtnTema from "./componentes/UI/index.js";
import {temaClaro, temaOscuro} from "./componentes/UI/temas.js"
import { ThemeProvider } from 'styled-components';



function App() {
  const [ tema, setTema ] = useState ( true )

  const toggleTema = ()=> {setTema( ( tema ) => !tema )}
  

  return (
    <Router>
      <ThemeProvider theme={ tema ? temaClaro : temaOscuro } >
        <GlobalStyle />
        <Header />
        <BtnTema onClick={toggleTema} >
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Routes>
          <Route path='/' element={ <Home/> } />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
    
  );
}


export default App;
