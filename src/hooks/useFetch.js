import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveAllPost } from "../store";

export default function useFetch (url){ 

    const [data,setData] = useState([]);
    let dispatch = useDispatch();

    useEffect(()=>{ 
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setData(data);
            dispatch(saveAllPost(data));
           

        })
    },[url]);

    return data;

}