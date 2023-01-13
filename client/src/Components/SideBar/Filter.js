import React, {useState} from 'react';
import { useCookies } from 'react-cookie'
function Filter(){

    const [cookies, setCookie] = useCookies();
    const [checkedLocal, setCheckedLocal] = useState((cookies.local)? cookies.local ==='true':true)
    const [checkedWeather, setCheckedWeather] = useState((cookies.weather)? cookies.weather ==='true':true);
    function toggleLocal(){
        setCheckedLocal(!checkedLocal);
        let expires = new Date();
        expires.setTime(expires.getTime() + ( 24*60*60 * 1000))
        setCookie('local', !checkedLocal , { path: '/',  expires})

    }
    function toggleWeatherZone(){
        setCheckedWeather(!checkedWeather);
        let expires = new Date();
        expires.setTime(expires.getTime() + ( 24*60*60 * 1000))
        setCookie('weather', !checkedWeather , { path: '/',  expires})
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