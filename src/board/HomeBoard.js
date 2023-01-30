import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

export default function HomeBoard (){

    const homePosting  = useFetch("http://localhost:3001/postings").slice(0,3);
    let navigate = useNavigate();

    if(homePosting.length===0){
        return <span>Loading... </span>
    }

    return (<div className="homeBoardDiv">
            {
                <ul>
                {
                    homePosting.map((post,i)=>{
                        
                        return(

                      
                        <li key={post.postId} onClick={()=>{
                            // navigate로 props 넘기는 법
                            navigate(`/detail/${post.postId}`,{state:post})
                        }} >
                            <p className="pCategory">{post.category}</p>
                            <span>[{post.company}]</span>
                            <span>{post.user}</span>
                            <h6>{post.title}</h6>
                            <p>{post.content}</p>
                            
                        </li>
                        )
                    })
            
                } 
            </ul> 
            
            
            }
        </div>)

} 
