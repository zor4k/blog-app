
import { GetServerSideProps } from 'next';
import React,  { } from 'react';
import styles from "../styles/index.module.css";
import dayjs from 'dayjs';

export interface IPost{
    title: string,
    id: string,
    datePosted: string

}

export interface IProps {
    posts: Array<IPost>
}

function Posts({ posts } : IProps ){

    console.log("output: " +posts);
    // posts?.map( (post: any)=> { <h1 key={post.id}> <a href={`/blog/${post.title}`}> {post.title} </a></h1> } )
    return (
        <div>
            {
                posts.map( (post: IPost)=>{
                    return( 
                        <>
                            <h2 className={styles.title} key={post.id}> 
                                <a href={`/post/${post.title}`}> {(post.title).replace( new RegExp('-','g' ),' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))} </a>
                            </h2>
                            <h3 className={styles.date}>
                                <span>{"published on "+(dayjs(post.datePosted).format("MMMM D, YYYY"))}</span>
                            </h3>
                            
                        </>
                    )
                })
            }
        </div>

    );
}

export default Posts;