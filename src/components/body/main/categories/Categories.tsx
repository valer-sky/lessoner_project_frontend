import { Link } from "react-router-dom"
import "./categories.css"


const Categories: any = () => {
    return (

        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h1>Categories</h1>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-1" >Category-1</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-2" >Category-2</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-3" >Category-3</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-4" >Category-4</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-5" >Category-5</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-6" >Category-6</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-7" >Category-7</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-8" >Category-8</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-9" >Category-9</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/categories/categoryies-10" >Category-10</Link></div>
                <span className="small">description</span>
            </div>
            <div className="mt-3">
                <Link to="/categories/new" className="btn btn-outline-primary">New category</Link>
            </div>
            
        </div>
    )
}
export default Categories