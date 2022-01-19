import './Search.css'
import { useState } from 'react';
import {Row, InputGroup, FormControl, Button} from 'react-bootstrap'

function Search(props){
    
    const [ip, setIp] = useState('');

    function handleChange(e) {
        setIp(e.target.value);
    }

    function search(){
        props.functionSearch(ip);
        document.getElementById('search__input').value='';
    }

    return(
        <Row className="Search">
            <InputGroup className="mb-3">
                <FormControl className="search__input"
                    placeholder="Choose a IP address"
                    id='search__input'
                    onChange={handleChange}
                />
                <Button variant="outline-secondary" 
                    id="search__button__id"
                    onClick={search}
                >
                    Search IP
                </Button>
            </InputGroup>
        </Row>
    );
}

export default Search;