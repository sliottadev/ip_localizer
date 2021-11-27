import './ItemList.css'
import { Row, Col } from 'react-bootstrap';

function ItemList(props) {
    return (
        <Row className="ItemList"> 
            <Col xs={6} className="itemList__firstColumn">
                <p>{props.fieldName}:</p>
            </Col>
            <Col xs={6} className="itemList__secondColumn">
                <p>{props.fieldValue}</p>
            </Col>
        </Row>
    )
}

export default ItemList;
