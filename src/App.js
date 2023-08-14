import GlobalStyle from './GlobalStyle.js';
import Home from './componentes/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';



function App() {
  /*const [ tema, setTema ] = useState ( true )

  const toggleTema = ()=> {setTema( ( tema ) => !tema )}
  

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro } >
      <GlobalStyle />
      <BtnTema onClick={toggleTema} >
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );*/
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
    </Router>
    
  );
}

export default App;
