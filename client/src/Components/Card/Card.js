import "./Card.css"
import {Link} from "react-router-dom";

function Card(props){

    let {link, text, path} = props;

    return(
        <div className="card">
            <div className="card-top">
                <img src={path}/>
            </div>
            <div className="card-bottom">
                <Link to={link}>{text}</Link>
            </div>
        </div>
    );
}

export default Card;