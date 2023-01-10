import "./PageNotFound.css"

function PageNotFound(props){

    let {id, title, text} = props;

    return(
        <div id={id} className={"pageNotFound"}>
            <h2 className={"pageNotFoundTitle"}>
                {title}
            </h2>
            <p className={"pageNotFoundText"}>
                {text}
            </p>
        </div>
    );
}

export default PageNotFound;