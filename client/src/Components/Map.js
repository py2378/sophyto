import React from 'react';
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet';
const L = require('leaflet');
const Map = () => {
    const myIcon = L.icon({
        iconUrl: require('../cdn/marker.svg'),
        iconSize: [64,64]
    });

    return (
        <MapContainer center={[50.6322,3.0639 ]} zoom={13} scrollWheelZoom={true} style= {{height:"400px",backgroundColor:"red",marginTop:"80px", marginBottom:'90px'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.6322, 3.0639]} icon={myIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;