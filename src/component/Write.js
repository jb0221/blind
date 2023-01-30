import { useRef } from 'react';
import {Dropdown,Form,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { ChangeName, ChangeAge } from '../store';


export default function Write (){ 


    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const post = useFetch("http://localhost:3001/postings");
    
    let dispatch = useDispatch();
    let userInfo = useSelector((state)=>{return state.user});
    
    // 포스트 올리기
    function addPost (e){

        e.preventDefault();
        fetch(`http://localhost:3001/postings`,{
            method : 'POST',
            headers :{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                 title : titleRef.current.value,
                 content : contentRef.current.value,
                 
                
            }),
        }).then(res=>{
            if(res.ok){
            alert('저장되었습니다.');
            }
        })
    }  

    return(
        <div>
        <Dropdown className='makePaddingUpDown'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            등록위치 {userInfo.age}세 {userInfo.name} 
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">내 회사</Dropdown.Item>
            <Dropdown.Item href="#/action-2">IT라운지</Dropdown.Item>
            <Dropdown.Item href="#/action-3">토픽</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <p>작성자: 삼성 - happyhappy</p>

        

        <Form className='makePadding' onSubmit={addPost}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="제목을 입력해주세요"  ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3}  placeholder="내용을 입력해주세요" ref={contentRef}/>
        </Form.Group>
        <Button variant="secondary" className='makePaddingLeftRihgt'>취소</Button>
        <Button variant="primary" type="submit" className='makePaddingLeftRihgt'>등록</Button>
        <Button variant="danger" className='makePaddingLeftRihgt' onClick={()=>{
                dispatch(ChangeName());
                
        }}>아이디변경</Button>
        {/* <Button variant="secondary" onClick={()=>{
              dispatch(ChangeAge());
        }}>state변경</Button> */}
        </Form>
        </div>
    )

}