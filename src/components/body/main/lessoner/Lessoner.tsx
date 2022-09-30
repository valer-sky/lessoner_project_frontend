import { Link, Routes } from "react-router-dom"




const Lessoner:any=()=>{
    return(
        <div className="hero_button-wrapper mt-3">
            <Link to="/users/sign_up" className="btn btn-outline-primary">Create account</Link>
            <Link to="/about" className="btn btn-outline-primary">Lern more</Link>
        </div>
    )
}
export default Lessoner