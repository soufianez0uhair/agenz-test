import mapboxgl from "mapbox-gl";

import { useRef, useState, useEffect } from "react";

const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic291ZmlhbmV6b3VoYWlyIiwiYSI6ImNsMmtkeTAwMjBjN3QzZG5xNG4wdzd1a3UifQ.kLI5SxFOg7jAEEfe-SMiqw';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-7.498919963836671);
    const [lat, setLat] = useState(33.59450033228673);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });
    return (
        <div className="map">
            <div ref={mapContainer} className="map-container"></div>
        </div>
    )
}

export default Map;