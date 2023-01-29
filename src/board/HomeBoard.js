import useFetch from "../hooks/useFetch";

export default function HomeBoard (){

    const homePosting  = useFetch("http://localhost:3001/postings");
    console.log("homePosting1" + JSON.stringify(homePosting,null,4)) 

    if(homePosting.length===0){
        return <span>Loading... </span>
    }

    return (<div className="homeBoardDiv">
            {
                <ul>
                {
                    homePosting.map((post,i)=>{
                        return(
                        <li key={post.postId}>
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
