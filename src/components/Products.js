import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

const images = importAll(require.context('../assets/tshirts/', false, /\.(png|jpe?g|svg)$/));

function Products() {
    return (
        <Container>
            <Row>
                {Object.keys(images).map((imageName, index) => (
                    <Cards key={index} image={images[imageName]} alt={imageName} />
                ))}
            </Row>
        </Container>
    )
}

export default Products