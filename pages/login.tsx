import styles from "../styles/index.module.css";
import { FormikConfig, useFormik } from "formik";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

const LoginForm = (props: any)=>{

    const formik = useFormik({
        initialValues:{
            username:'', password:''
        },
        onSubmit:(values)=>{
            console.log(values);
            console.log(JSON.stringify(values));
            console.log('finished stringifying values ');
            fetch('/api/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                if(response.status != 200){
                    throw new Error(`status code not okay (200): ${response.status}`);
                }
                return response.json();
            }).then((responseJson) => {
                // TODO handle JWT token here
                alert("successful login!");
                window.sessionStorage.setItem('my_blog_token', responseJson.token);
                console.log(responseJson) ;
            })
            .catch( err => alert(err));

        }
    });

    return(
        <div className={styles.container}>
            <h1 style={{textAlign:'center'}}>Login</h1>
            <form  id="loginForm" onSubmit={formik.handleSubmit}
            style={{textAlign:"center", display:"flex" , flexDirection:'column' }}>
                <label>
                    Username: 
                    <br/>
                    <input type="text" id="username"  onChange={formik.handleChange}
                    value={formik.values.username} ></input>
                </label>
                <br/>
                <label >
                    Password :
                    <br/>
                    <input type="password" id="pass" name="password" onChange={formik.handleChange}
                    value={formik.values.password}></input>
                </label>
            </form>
            <br/>
            <button style={{margin:'auto',display:'flex', justifyContent:'center'}}  type="submit" form="loginForm" value="submit">Submit</button>

        </div>
    );
}

export default LoginForm;