import { Link } from "react-router-dom"
import "./categories.css"


const Categories: any = () => {
    return (

        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h1>Categories</h1>
            <div >
                <div><Link to="/categories/categoryies-1" >Category-1</Link></div>
                <span>some description</span>
                <hr/>
            </div>
            <div >
                <div><Link to="/categories/categoryies-2" >Category-2</Link></div>
                <span>some description</span>
                <hr/>
            </div>
            <div >
                <div><Link to="/categories/categoryies-3" >Category-3</Link></div>
                <span>some description</span>
                <hr/>
            </div>
            
            <div >
                <Link to="/categories/new" >New category</Link>
            </div>
            
        </div>
    )
}
export default Categories