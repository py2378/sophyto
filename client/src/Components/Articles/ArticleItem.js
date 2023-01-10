import {Link} from "react-router-dom";

function ArticleItem(props){

    let {title, date, url, link, content, textButton} = props;

    return(
        <div className={'col-md-6 articleItem'}>
            <a href={link}>
                <img
                    className={'articleImage'}
                    src={url}
                    alt={title}
                />
            </a>
            <h5>{date}</h5>
            <h3>{title}</h3>
            <p>{content}</p>
            <Link to={link}>{textButton}</Link>
        </div>
    );
}

export default ArticleItem;