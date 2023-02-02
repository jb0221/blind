import { useParams,useLocation, json } from "react-router";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';
import {increaseLike} from './../store';
export default function Detail (props){ 

    let param = useParams();   // id
    const { state } = useLocation();
    let allPost = useSelector((state,state2)=>{return state.allPost});      // 전체 저장된 게시글
    let postLike = useSelector((state,state2)=>{return state.allPost[param.id].like}); 
    // 좋아요수 : dispatch로 올리면 자동으로 값이 달라지면 재렌더링하는 게 맞는지
    let data = {};
    let dispatch = useDispatch();
  
    useEffect(()=>{

        allPost.map((a)=>{ 
           if(param.id ==  a.postId){       // 전체글에서 postId 일치하는 것만 filter
                data = {...a};
                console.log("처음에 한번만 가져온 state::::::::: " + JSON.stringify(data,null,4));
           }
      })

    },[]);    // 최초 한 번만
   
    return( 
           
            <div className="detailDiv">
                <p>{state.category}</p>
                <span>{state.company}</span>
                <span>{state.user}</span>
                <h6>{state.title}</h6>
                <p>{state.content}</p> 
                
                <Button variant="primary" className='makePaddingLeftRihgt'onClick={()=>{
                    dispatch(increaseLike(state.postId));   // 좋아요 수 플러스
                }}>좋아요{postLike}</Button>
                <Button variant="primary">조회수 {state.view}</Button>

            </div>
          
        
    )
}