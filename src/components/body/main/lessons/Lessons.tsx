import { Link } from "react-router-dom"


const Lessons:any=()=>{
    return(
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h1>Lessons</h1>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-1" >Lesson-1</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-2" >Lesson-2</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-3" >Lesson-3</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-4" >Lesson-4</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-5" >Lesson-5</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-6" >Lesson-6</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-7" >Lesson-7</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-8" >Lesson-8</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-9" >Lesson-9</Link></div>
                <span className="small">description</span>
            </div>
            <div className="border-bottom p-3">
                <div><Link to="/lessons/lesson-10" >Lesson-10</Link></div>
                <span className="small">description</span>
            </div>
            {/* <div className="mt-3">
                <Link to="/lessons/new" className="btn btn-outline-primary">New lesson</Link>
            </div> */}
            
        </div>
    )
}
export default Lessons