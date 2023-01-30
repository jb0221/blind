import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useEffect, useState } from 'react';
import { NavDropdown, Form, Nav} from 'react-bootstrap';
import {BrowserRouter, Routes, Route,Link, useNavigate, Outlet, ButtonGroup, Button } from 'react-router-dom';
import './App.css';
import BestBoard from './board/BestBoard';
import HomeBoard from './board/HomeBoard'; 
import JobBoard from './board/JobBoard';
import Footer from './common/Footer';
import Header from './common/Header';
import Detail from './component/Detail';
import Mypage from './component/Mypage';
import Write from './component/Write';


function App() {

  
  let [board,setBoard] = useState(1); // 홈 게시판 
  useEffect(()=>{
    setBoard(board);
  },[board]);

  return (
    <div className="App">             
      
    <Routes>
      <Route path="/" element={
          <>
           <Header onClickSearch={() => console.log("검색 영역 클릭")} />
      <Nav variant="tabs"  defaultActiveKey="link1" justify="true">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{ setBoard(0) }}>채용</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setBoard(1)}}>홈</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setBoard(2)}}>인기</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='col-md-4'>
        <img src={"/duo.jpg"} width="100%" height="100" />
      </div>
      <NavDropdown title="최신순" id="basic-nav-dropdown" className='homeNavDropDown'>
          <NavDropdown.Item href="#action/3.1">최신순</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">추천순</NavDropdown.Item>
      </NavDropdown>
      
      { board === 0 ? <JobBoard/> : null}
      { board === 1 ? <HomeBoard/> : null}
      { board === 2 ? <BestBoard/> : null}
      </>
      }>

      </Route>
      <Route path="/write" element={
              <Write />
          }></Route>
           <Route path="/mypage" element={
              <Mypage />
          }></Route>
               <Route path="/detail/:id" element={
              <Detail />
          }></Route>
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
