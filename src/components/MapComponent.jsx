import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { latLonState } from '../state/atom';
import { useRecoilValue } from 'recoil';
import { cityState } from '../state/atom';
import L from 'leaflet';
import customPin from '../assets/pin/customPin2-removebg-preview.png';

const MapUpdater = ({ lat, lon }) => {
    const map = useMap();

    useEffect(() => {
        if (lat && lon) {
            map.setView([lat, lon], map.getZoom());
        }
    }, [lat, lon, map]);

    return null;
};
const MapComponent = () => {
    const mapTilerAPIKey = import.meta.env.VITE_MAPTILER_API_KEY;
    const { lat, lon } = useRecoilValue(latLonState)
    const city = useRecoilValue(cityState);
    const customIcon = L.icon({
        iconUrl: customPin,
        iconSize: [50, 50],
        iconAnchor: [0, 45],
        popupAnchor: [25, -25],
    });

    return (
        <div className='w-screen h-screen '>
            <MapContainer center={[lat, lon]} zoom={13} style={{ height: '100vh', width: '100%', zIndex: '1' }}>
                <TileLayer
                    url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=${mapTilerAPIKey}`}
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>'
                />
                {lat && lon && (
                    <>
                        <Marker position={[lat, lon]} icon={customIcon}>
                            <Popup>
                                You are here: [{lat}, {lon},{city}]
                            </Popup>
                        </Marker>
                        <MapUpdater lat={lat} lon={lon} />
                    </>
                )}
            </MapContainer>

        </div>
    );
};

export default MapComponent;
