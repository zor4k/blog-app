import type { NextPage , GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Posts,{IProps, IPost} from '../components/Posts';
import styles from "../styles/index.module.css";


const {BASE_URL} = process.env;
const Home: NextPage<IProps> = (props: IProps) => {
  return (
    <div className={styles.container}>
      <h1> Posts </h1>
      <Posts { ...props }/>
    </div>
  )
}


export const getServerSideProps : GetServerSideProps<IProps> = async () =>{
  let posts;
  try{
      const response = await fetch(`http://${BASE_URL}/api/blog/`,
      {
          method: 'GET',
      });
      posts= await response.json();
  } catch (err:any){
      console.log(err.message);
  }

  return{
      props : { posts }
  }
}

export default Home;
