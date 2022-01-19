import './ItemListImage.css'
import { Row, Col, Image } from 'react-bootstrap';

function ItemListImage(props) {
    return (
        <Row className="ItemListImage"> 
            <Col xs={6} className="itemListImage__firstColumn">
                <p>{props.fieldName}:</p>
            </Col>
            <Col xs={6} className="itemListImage__secondColumn">
                <Image
                    src={props.src}
                    rounded
                />
            </Col>
        </Row>
    )
}

export default ItemListImage;
