import Articles from "../Components/Articles/Articles";
import ArticleItem from "../Components/Articles/ArticleItem";

function News(){

    return(
        <Articles
            namePage = "Articles"
            title = "Découvrez nos actualités"
            subtitle = "Retrouvez ci-dessous toutes l'actualités et les articles publiés par l'équipe d'Alvie."
        >
            <ArticleItem
                date = "December 31, 2022"
                content = "La betterave passe par plusieurs étapes de maturation avant de pouvoir être récoltée. Afin d'assurer la meilleure croissance possible, voici le guide de traitements à effectuer au cours des saisons "
                title = "Cycle de traitement pour la culture de la betterave"
                url = "22_12_31.jpg"
                link = "#"
                textButton = "Lire l'article"
            ></ArticleItem>
            <ArticleItem
                date = "November 21, 2022"
                content = "Vous avez besoin de repasser au plus vite le test ? Est-il impératif pour votre activité d’obtenir le certiphyto ? Retrouvez ci-dessous les 5 meilleurs conseils à mettre en pratique pour décrocher votre Certiphyto rapidement."
                title = "Le top 5 des conseils pour réussir le certiphyto"
                url = "22_11_21.jpg"
                link = "#"
                textButton = "Lire l'article"
            ></ArticleItem>
            <ArticleItem
                date = "September 27, 2022"
                content = "Il est courant de moduler ses doses de fongicides (en fonction de la météo, de la pression maladie…). Ce qui l’est moins c’est de moduler les herbicides. Gérer les adventices dans ses parcelles demande une grande technicité, un désherbage mal géré une année peut engendrer des difficultés sur plusieurs campagnes suivantes."
                title = "Moduler ses herbicides"
                url = "22_09_27.png"
                link = "#"
                textButton = "Lire l'article"
            ></ArticleItem>
            <ArticleItem
                date = "May 5, 2022"
                content = "Une météo non optimale avec une moyenne de 15 km/h de vent et un temps sec rendent les traitements à base d’herbicides racinaires compliqués pour les agriculteurs des Hauts-de-France. Plusieurs stratégies pour réussir son désherbage dans ces conditions sont possibles."
                title = "ACTUS : Traitement : les conditions météos difficiles dans les Hauts-de-France nécessitent d’adapter la stratégie de pulvérisation pour réussir le désherbage de la betterave."
                url = "22_05_25.webp"
                link = "#"
                textButton = "Lire l'article"
            ></ArticleItem>
        </Articles>
    );
}

export default News;