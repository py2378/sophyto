import React, {useState} from 'react';
function Filter(){
    const [checkedLocal, setCheckedLocal] = useState(true);
    const [checkedWeather, setCheckedWeather] = useState(true);
    function toggleLocal(){
        setCheckedLocal(!checkedLocal);
    }
    function toggleWeatherZone(){
        setCheckedWeather(!checkedWeather);
    }
    return(
        <ul id="sidebar-filter">
            <li>
                <label><input type="checkbox" rel="acheterLocal" onChange={toggleLocal} checked={checkedLocal}/>Acheter local</label>
            </li>
            <li>
                <label><input type="checkbox" rel="phyto" onChange={toggleWeatherZone} checked={checkedWeather}/>Phyto</label>
            </li>
        </ul>
    );
}

export default Filter;