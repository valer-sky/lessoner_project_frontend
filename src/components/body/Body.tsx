import "./body.css"  
import Main from './main/Main'
import Header from './header/Header'
import { useState } from "react"


const Body: any = (props:any) => {
    
    return (
        <div>
            <Header/>
            <Main  />
        </div>
    )
}

export default Body