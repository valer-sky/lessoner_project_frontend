import "./body.css"  
import Main from "./content/Main"
import Header from './header/Header'
import Footer from "./footer/Footer"


const Body: any = (props:any) => {
    
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Body