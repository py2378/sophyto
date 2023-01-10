import Card from "../Components/Card/Card";

function Echanger(){

    return(
        <div className="bg-blue" id="echanger">
            <Card
                link="/events"
                text="Évènements"
                path="evenements.jpg"
            ></Card>
            <Card
                link="/articles"
                text="Articles"
                path="articles.jpg"
            ></Card>
        </div>
    );
}

export default Echanger;