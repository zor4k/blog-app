//import styles from "../styles/Layout.module.css";
import { Component  } from "react";
import {FC}  from "react";
import  NextFunctionalComponent, { NextComponentType, NextPageContext }  from "next";



function Layout({ children }: { children: any } ){
    return (
        <div  >
            <main >
                {children}
            </main>
        </div>
    )        
}

export default Layout;