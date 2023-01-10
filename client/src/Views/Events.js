import Articles from "../Components/Articles/Articles";
import ArticleItem from "../Components/Articles/ArticleItem";

function Events(){

    return(
        <Articles
            namePage = "Évènements"
            title = "Ce qu’il se passe autour"
            subtitle = "Retrouvez ci-dessous tous les événements autour de vous"
        >
            <ArticleItem></ArticleItem>
        </Articles>
    );
}

export default Events;