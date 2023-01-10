function Filter(){

    return(
        <ul id="sidebar-filter">
            <li>
                <label><input type="checkbox" rel="acheterLocal" onChange="change();"/>Acheter local</label>
            </li>
            <li>
                <label><input type="checkbox" rel="phyto" onChange="change();"/>Phyto</label>
            </li>
        </ul>
    );
}

export default Filter;