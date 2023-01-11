import './Articles.css'

function Articles(props){
    let {children, namePage, title, subtitle} = props;

    return(
        <div className="articles-page">
            <span><div id="filArianeEchanger">Echanger</div><div>/</div><div>{namePage}</div></span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="articles-layout">
                {children}
            </div>
        </div>
    );
}

export default Articles;