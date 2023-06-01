import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import Products from '../components/Products';

export default function Main() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Majnoon</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Kampanyalar</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><FontAwesomeIcon icon={faBasketShopping} style={{ color: "#5c5c5c", }} size='xl' /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Products></Products>
        </>
    )
}
