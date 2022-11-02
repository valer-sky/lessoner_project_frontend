import {Link} from "react-router-dom";
import Arrow from "./icons/arrow.png";
import "./search.scss";

const Search = () => {
  return (
    <div className='search-component'>
      <Link to='/' className='search-arrow'>
        <img src={Arrow} alt='arrow'/>
      </Link>
      <input type='text' placeholder='Search' className='search-input'/>
    </div>
  )
}
export default Search;