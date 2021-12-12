import styles from "../styles/Layout.module.css";
import { Component  } from "react";
import {FC}  from "react";
function Layout({ children } : {children : FC}){
    return (
        <div className={styles.container} >
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )        
}

export default Layout;