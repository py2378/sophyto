import SideBar from "../Components/SideBar/SideBar";
import Map from "../Components/Map/Map"
function Home(){

    return(
        <div className="bg-blue">
            <SideBar></SideBar>
            <Map></Map>
        </div>
    );
}

export default Home;