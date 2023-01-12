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
                return "#CD3D9C66"
            case "mixed":
                return "#7C0D9866"
            case "stormy":
                return "#0811DF4C"
        }
    }
    const convertArrayToObject = (features) => {

        let objList = []
        for(let array of features){
            for(let list of array.geometry.coordinates) {
                let newObj = [];
                for (let elem of list) {
                    newObj.push({lat: elem[1], lng: elem[0]})
                }
                objList.push(newObj);
            }
        }
        return objList;
    };
    const objList = convertArrayToObject(weatherZoneList.features);
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
            {weatherZoneList.features.map(weatherZone => (
                <Polygon key = {weatherZone.properties.id}  color = {getColorWeather(weatherZone.properties.weather)}  positions={objList[weatherZone.properties.id]} >
                </Polygon>)
            )}


        </MapContainer>
    );
};

export default Map;