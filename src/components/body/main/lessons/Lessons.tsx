import { Link } from "react-router-dom"


const Lessons:any=()=>{
    return(
        <div >
            <h1>Lessons</h1>
            <div >
                <div><Link to="/lessons/lesson-1" >Lesson-1</Link></div>
                <span >description</span>
                <hr/>
            </div>
            <div >
                <div><Link to="/lessons/lesson-1" >Lesson-1</Link></div>
                <span >description</span>
                <hr/>
            </div>
            <div >
                <div><Link to="/lessons/lesson-1" >Lesson-1</Link></div>
                <span >description</span>
                <hr/>
            </div>
        </div>
    )
}
export default Lessons