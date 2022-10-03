import "./Footer.css";
import { Link } from "react-router-dom";





const Footer = () => {
  return (
    <div className="footer">
      <div className="footer">
        <Link to="/link1">Link1</Link>
      </div>
      <div className="footer">
        <Link to="/link2">Link2</Link>
      </div>
      <div className="footer">
        <Link to="/link3">Link3</Link>
      </div>
    </div>
  );
};
export default Footer;
