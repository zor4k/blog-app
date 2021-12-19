import {GetServerSideProps, NextPage } from "next";
import { useRouter} from "next/router";
import internal from "stream";
import ReactHtmlParser from 'react-html-parser';
import { isContext } from "vm";
const { BASE_URL } = process.env;
import styles from "../../styles/post.module.css";
import dayjs from 'dayjs';

interface IProps{
   post: IPostObj
}

interface IPostObj{

    title: string,
    id: string
    userName: string
    userEmail: string,
    content: string,
    datePosted: string
}

const PostPage: NextPage<IProps> = ({ post }: IProps) =>{
    console.log(post)
   if(post.id == ""){
        return( <h1>404 the page was not found :(</h1>)
    }
    return(
        <div className={styles.container}>
            <div className={styles.column}>
                <h1 className={styles.title}>{(post.title).replace('-',' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h1>
                <h2 className={styles.author}>by {post.userName} on 
                    <span className={styles.date}>
                         {" "+( dayjs(post.datePosted).format("MMMM D, YYYY") ) }
                    </span>
                </h2>
                {ReactHtmlParser(post.content)}
            </div>
            
        </div>
    )
}

export const getServerSideProps : GetServerSideProps<IProps > = async (context) =>{
    let post: IPostObj  = {
        id:"",
        userName: "",
        userEmail:"",
        content: "",
        title:"",
        datePosted:""
    };

    console.log("my response is below")
    try{
        const response = await fetch(`http://${BASE_URL}/api/blog/`+context?.params?.post, 
        {
            method: 'GET',
        });

        console.log(response);
        post = await response.json();

    } catch (err:any){
        console.log(err.message);
    }
    return {
        props: {
            post
        }
    };  
  }

export default PostPage;