import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';


function Cards(props) {
    return (
        <Card style={{ width: '18rem' }} className='mx-3 my-3'>
            <Card.Img variant="top" src={props.image} height={300} />
            <Card.Body>
                <Card.Title>Erkek Bisiklet Yaka T-shirt</Card.Title>
                <Card.Text className='text-danger fw-bold'>
                    30.99 TL
                </Card.Text>
            </Card.Body>
            <Stack direction="horizontal" gap={3} className='mb-3'>
                <Dropdown as={ButtonGroup} className='d-flex'>
                    <Button variant='light'>M</Button>
                    <Dropdown.Toggle split variant='light' id="dropdown-split-basic" />
                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <ButtonGroup>
                    <Button variant='light'>+</Button>
                    <Button variant='light'>-</Button>
                    <Button variant='light' disabled>1</Button>
                </ButtonGroup>

                <Button className='mb-2' variant='danger'>Ekle</Button>
            </Stack>
        </Card >
    )
}

export default Cards