import {Link} from "react-router-dom";

function ArticleItem(props){

    let {title, date, url, link, content, textButton} = props;

    return(
        <div className={'articleItem'}>
            <img
                className={'articleImage'}
                src={url}
                alt={title}
            />
            <h5>{date}</h5>
            <h3>{title}</h3>
            <p>{content}</p>
            <Link to={link}>{textButton}</Link>
        </div>
    );
}

export default ArticleItem;