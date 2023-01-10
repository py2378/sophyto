import "./Views.css"
import PageNotFound from "../Components/PageNotFound/PageNotFound";

function NotFound(){
    return(
        <div id={'page_introuvable'} className={"page"}>
            <meta
                name={"description"}
                content={"Page de redirection par défaut en cas d'erreur"}
            />
            <PageNotFound
                id={'page_introuvable_block'}
                title={"Oops... Cette page semble avoir sombré dans l'oubli !"}
                text={"N'hésitez pas, cliquez sur les liens ci-dessous ou utilisez la barre de navigation pour retrouver la lumière !"}
            />
        </div>
    );
}

export default NotFound;