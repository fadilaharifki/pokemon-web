import './App.css';
import Footer from './components/footer';
import Home from './page/home';
import { Container, ContainerMobile } from './styled'
import Routes from './routes';
import About from './page/about';
import MyPokemon from './page/myPokemont';
import DetailPokemon from './page/home/detail';

function App() {
  return (
    <Container>
      <ContainerMobile>
        <Routes />
        <Footer />
      </ContainerMobile>
    </Container>
  );
}

export default App;