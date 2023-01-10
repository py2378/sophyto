import Articles from "../Components/Articles/Articles";
import ArticleItem from "../Components/Articles/ArticleItem";

function News(){

    return(
        <Articles
            namePage = "Articles"
            title = "Découvrez nos actualités"
            subtitle = "Retrouvez ci-dessous toutes l'actualités et les articles publiés par l'équipe d'Alvie."
        >
            <ArticleItem></ArticleItem>
        </Articles>
    );
}

export default News;