import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import search from '../img/search.svg'
import Navbar from 'react-bootstrap/Navbar';


export default function Header(props){
    return (
        <>
            <Navbar bg="light">
                <Container fluid>
                    <Navbar.Collapse>
                        <InputGroup onClick={props.onClickSearch}>
                            <InputGroup.Text>
                                <img
                                    src={search}
                                    alt="Search"
                                />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="관심 있는 글 검색"
                                readOnly="readOnly"
                            />
                        </InputGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}