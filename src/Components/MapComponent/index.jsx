import { useState } from "react";
import styles from "./map.module.css"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const MapComponent = ({data=[]}) => {

    const [showOverlay, setShowOverlay] = useState(false)

    const position = [51.5045, 51.5045];

    return (
        <div style={{ height: "500px", width: "100%", borderRadius: "12px", boxShadow: '5px 5px 14px 0px #00000040', position:"relative"}}>
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker 
                    position={position}
                    eventHandlers={{
                        click: () => setShowOverlay((prev)=>!prev), 
                        mouseover: () => setShowOverlay(true), 
                        mouseout: () => setShowOverlay(false), 
                    }}
                >
                    <Popup>
                        {data?.[0]?.name} <br />
                    </Popup>
                </Marker>
            </MapContainer>
            {
                showOverlay && 
                <div className={`${styles['location-detail']}`}>
                    <p className={`${styles['heading']}`}>{data?.[0]?.name}</p>
                    <p className={`${styles['address']}`}>{data?.[0]?.address}</p>
                    <p className={`${styles['small-heading']}`}>Phone Number</p>
                    <p className={`${styles['text']}`}>{data?.[0]?.phoneNo}</p>
                    <p className={`${styles['small-heading']}`}>Website</p>
                    <p className={`${styles['text']}`}>{data?.[0]?.website}</p>
                </div>
            }
        </div>
    );
};


export default MapComponent;

