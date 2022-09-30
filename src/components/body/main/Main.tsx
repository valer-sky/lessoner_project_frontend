import { Route, Routes } from "react-router-dom"
import Lessoner from "./lessoner/Lessoner"
import Categories from "./categories/Categories"
import Lessons from "./lessons/Lessons"
import About from "./about/About"
import Sign_in from "./Sign_in/Sign_in"




const Main: any = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Lessoner />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/sign_in" element={<Sign_in/>}/>
            </Routes>
        </div>
    )
}

export default Main