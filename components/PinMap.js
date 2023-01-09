import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

function PinMap({ locations }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxAccessToken}
      {...viewport}
      onMove={(e) => setViewport(e.viewport)}
    >
      {locations.map((location) => (
        <div key={location.id}>
          <Marker
            latitude={location.center[1]}
            longitude={location.center[0]}
            onClick={() => setSelectedLocation(location)}
            anchor="bottom">
                <span role="img" aria-label="push-pin">📌</span>
          </Marker>
          {selectedLocation.id === location.id ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeButton={true} 
              closeOnClick={false}
              anchor="bottom"
              latitude={location.center[1]}
              longitude={location.center[0]}>
                {location.place_name}
            </Popup>) : (null)}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default PinMap;

/**
 * Next.js server side renders 
 * MapBox, however, requires the global window object in order to work correctly. 
 * If you are server side rendering your app, you will need to dynamically import it into your page.
 * const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false
});
 */
