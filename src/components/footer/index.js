import { Link } from "react-router-dom"
import { BiHome } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Container, ContainerContent, Menu } from './styled'

export default function Footer() {

    return (
        <Container>
            <ContainerContent>
                <Menu>
                    <Link to="/mypokemon"><BsBag style={{ color: 'white' }} size="25" /></Link>
                    <div>My Pokemon</div>
                </Menu>
                <Menu>
                    <Link to="/"><BiHome style={{ color: 'white' }} size="25" /></Link>
                    <div>Find Pokemon</div>
                </Menu>
                <Menu>
                    <Link to="/about"><RiErrorWarningLine style={{ color: 'white' }} size="25" /></Link>
                    <div>About</div>
                </Menu>
            </ContainerContent>
        </Container>
    )
}