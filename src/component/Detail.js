import { useParams,useLocation } from "react-router";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { Button} from 'react-bootstrap';
import {increaseLike} from './../store';
export default function Detail (props){ 

    let param = useParams();   // id
    const { state } = useLocation();
    let allPost = useSelector((state)=>{return state.allPost});
    let data = {};
    let dispatch = useDispatch();
  
    console.log("state" + JSON.stringify(state,null,4));
    useEffect(()=>{
    
        allPost.map((a)=>{ 
           if(param.id ==  a.postId){
                data = {...a};
           }
      })

    },[]);      // 최초 한 번만
   
    return( 
           
            <div className="detailDiv">
                <p>{state.category}</p>
                <span>{state.company}</span>
                <span>{state.user}</span>
                <h6>{state.title}</h6>
                <p>{state.content}</p> 
                
                <Button variant="primary" className='makePaddingLeftRihgt'onClick={()=>{
                    dispatch(increaseLike(state.postId));
                }}>좋아요{state.like}</Button>
                <Button variant="primary">조회수 {state.view}</Button>

            </div>
          
        
    )
}