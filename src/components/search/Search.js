import './Search.css'
import {Row, InputGroup, FormControl, Button} from 'react-bootstrap'

function Search(props){

    return(
        <Row className="Search">
            <InputGroup className="mb-3">
                <FormControl className="search__input"
                    placeholder="Choose a IP address"
                />
                <Button variant="outline-secondary" id="search__button__id">
                    Search IP
                </Button>
            </InputGroup>
        </Row>
    );
}

export default Search;