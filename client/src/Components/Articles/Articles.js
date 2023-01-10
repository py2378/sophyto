import './Articles.css'

function Articles(props){
    let {children, namePage, title, subtitle} = props;

    return(
        <div className="articles-page">
            <span><div>Echanger / </div><div>{namePage}</div></span>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <div className="articles-layout">
                {children}
            </div>
        </div>
    );
}

export default Articles;