import {ButtonGroup, Button} from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
export default function Footer (){

    let navigate = useNavigate();

    return(
        <>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={()=>{
                 navigate('/');
            }}>홈</Button>
            <Button variant="secondary" onClick={()=>{
               //window.location.href= "/write";
               navigate('/write');
            }} >글쓰기</Button>
            <Button variant="secondary" onClick={()=>{
                 navigate('/myPage');
            }}>마이페이지</Button>
        </ButtonGroup>
        </>
    )
}