import './App.css';
import Footer from './components/footer';
import Home from './page/home';
import { Container, ContainerMobile } from './styled'
import { Routes, Route } from "react-router-dom";
import About from './page/about';
import MyPokemon from './page/myPokemont';
import DetailPokemon from './page/home/detail';

function App() {
  return (
    <Container>
      <ContainerMobile>
        <Routes>
          <Route path="/detailpokemon" element={<DetailPokemon />} />
          <Route path="/mypokemon" element={<MyPokemon />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ContainerMobile>
    </Container>
  );
}

export default App;