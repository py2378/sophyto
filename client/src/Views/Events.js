import Articles from "../Components/Articles/Articles";
import ArticleItem from "../Components/Articles/ArticleItem";

function Events(){

    return(
        <Articles
            namePage = "Évènements"
            title = "Ce qu’il se passe autour"
            subtitle = "Retrouvez ci-dessous tous les événements autour de vous"
        >
            <ArticleItem
                date = "November 21, 2022"
                content = "La ferme d’Hugo et ses fils accueille enfants comme adultes lors d’une journée de partage le 21 Novembre. Venez découvrir ses animaux et sa culture de céréales. Un échange autour d’une tartine de beurre est même.."
                title = "Visite d’une ferme pédagogique à Ennetières"
                url = "image 1.png"
                link = "#"
                textButton = "Je suis interessé"
            ></ArticleItem>
            <ArticleItem
                date = "November 17, 2022"
                content = "Noël approche, venez décorer des sapins de Noël avec les fruits de la ferme de Francine et Alexandre! Ouverte de 13h30 à 17h30 le 17 Novembre. 8 places disponibles !"
                title = "Décoration des fruits de Noël"
                url = "image 2.png"
                link = "#"
                textButton = "Je suis interessé"
            ></ArticleItem>
            <ArticleItem
                date = "September 27, 2022"
                content = "Découvrez toutes les ventes locales de la semaine dans cet articles vous présentant les fermes et leurs produits! Rien de mieux pour commencer la rentrée."
                title = "Ventes de la semaine"
                url = "image 3.png"
                link = "#"
                textButton = "Je suis interessé"
            ></ArticleItem>
            <ArticleItem
                date = "July 7, 2022"
                content = "Découvrez l’ensemble des marchés prévus dans la région pour ce deuxième semestre de 2022. Planifiez au mieux vos achats en direct aux producteurs et découvrez les produits de saison. "
                title = "Marchés de région - 2 ème semestre 2022"
                url = "image 4.png"
                link = "#"
                textButton = "Je suis interessé"
            ></ArticleItem>
        </Articles>
    );
}

export default Events;