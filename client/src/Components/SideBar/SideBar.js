import Search from "./Search";
import Filter from "./Filter";
import Legende from "./Legende";
import "./SideBar.css"

function SideBar(){

    return(
        <div id="sideBar">
            <Search></Search>
            <hr/>
            <Filter></Filter>
            <hr/>
            <Legende></Legende>
        </div>
    );
}

export default SideBar;