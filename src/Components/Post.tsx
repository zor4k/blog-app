import { resolveNs } from 'dns';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'; 




function Post(props:any) {
  const [post, setPost] = useState("");

  useEffect( ()=>{

    async function getContent(){
      try{
        const response =  await fetch(`/api/blog/${props.title}`,
        {
          method: 'GET',
          mode:'cors'
        });
        console.log();
        console.log(response.status);
        const responseJson = await response.json();
        setPost(responseJson.content);
      } catch(err:any){
        setPost(err.message)
      }

    }
    getContent();
  });


  return (
    <div >
      {ReactHtmlParser(post)}
    </div>
  );
}

export default Post;
