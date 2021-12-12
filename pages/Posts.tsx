
import React, { useEffect, useState } from 'react';


function Posts(){

    const [posts, setPosts] = useState([]);

    async function getPosts(){
        try{
            const response = await fetch('/api/blog/', 
            {
                method: 'GET',
            });
            console.log(response);
            const responseJson = await response.json();
            console.log("content:\n "+JSON.stringify(responseJson))
            setPosts(responseJson);
        } catch (err:any){
            console.log(err.message);
        }
    }

    useEffect( () =>{
        getPosts();

    }, []);

    return (
        <div>
            <h1>Posts: </h1>
            {posts.map( (post: any)=> <h1 key={post.id}><a href={`/blog/${post.title}`}>{post.title} </a></h1> )}
        </div>
    );
}

export default Posts;