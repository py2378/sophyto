import React from 'react';
import { MapContainer, TileLayer,Marker,Popup,Polygon,GeoJSON} from 'react-leaflet';
import {Icon} from "leaflet";
import locationList from "../../Data/location.json";
import farmList from "../../Data/farm.json";
import weatherZoneList from "../../Data/weatherZone.json";

const farmIcon = new Icon({
    iconUrl: './farm.svg',
    iconSize:[25,25]
})
const locationIcon = new Icon({
    iconUrl: './location.svg',
    iconSize:[25,25]
})

const Map = () => {
    function getColorWeather(weather) {
        switch (weather) {
            case "clear":
                return "--primary-map-blue"
            case "mixed":
                return "--primary-map-mauve"
            case "stormy":
                return "--primary-map-pink"
        }
    }
    return (
        <MapContainer center={[50.6322,3.0639 ]} zoom={13} scrollWheelZoom={true} style= {{height:"400px",backgroundColor:"blue",marginTop:"0px", marginBottom:'0px'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {farmList.features.map(farm => (
                <Marker icon={farmIcon} key={farm.properties.id} position={[farm.geometry.coordinates[1], farm.geometry.coordinates[0]]}>
                <Popup>
                    {farm.properties.name} <br /> <a href={farm.properties.website}>site internet</a>
                </Popup>
            </Marker>))};
            {/*{locationList.features.map(location => (*/}
            {/*    <Marker icon={locationIcon} key={location.properties.id_pdv} position={[location.geometry.coordinates[1], location.geometry.coordinates[0]]}>*/}
            {/*        <Popup>*/}
            {/*            {location.properties.libelle_point_vente} <br /> {location.properties.societe_producteur}*/}
            {/*        </Popup>*/}
            {/*    </Marker>))};*/}
            {/*{weatherZoneList.features.map(weatherZone => (*/}
            {/*    <Polygon key = {weatherZone.properties.id} pathOptions={{ color: getColorWeather(weatherZone.properties.weather), opacity:100 }} positions={weatherZone.geometry} >*/}
            {/*    </Polygon>)*/}
            {/*)}*/}
            <GeoJSON key='test' data={weatherZoneList}/>


        </MapContainer>
    );
};

export default Map;