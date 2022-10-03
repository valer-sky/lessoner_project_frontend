import { Link, Routes } from "react-router-dom"
import Header from "../../header/Header"


const Lessoner:any=()=>{
   

    return(
        <div >
            <Link to="/users/sign_up" >Log in</Link>
            <br></br>
            <Link to="/about">Lern more</Link>
        </div>
    )
}
export default Lessoner