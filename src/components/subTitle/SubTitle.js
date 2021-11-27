import './SubTitle.css'
import {Visibility, VisibilityOff}  from '@material-ui/icons';
import {Row, Col} from 'react-bootstrap'

function SubTitle(Props) {
    return (
        <Row className="SubTitle">
            <Col xs={11}>
                <h6 className="app_subTitle"> {Props.text} </h6> 
            </Col>
            <Col xs={1}>
                <VisibilityOff/>
            </Col>
        </Row>
    )
}

export default SubTitle
