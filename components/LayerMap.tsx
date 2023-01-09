import * as React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import type { SkyLayer } from 'react-map-gl';

const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

const skyLayer: SkyLayer = {
  id: 'sky',
  type: 'sky',
  paint: {
    'sky-type': 'atmosphere',
    'sky-atmosphere-sun': [0.0, 0.0],
    'sky-atmosphere-sun-intensity': 15,
  },
};

function LayerMap() {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -122.45,
          latitude: 37.78,
          zoom: 12,
          bearing: 80,
          pitch: 80,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        maxPitch={85}
        mapboxAccessToken={mapboxAccessToken}
        terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        <Layer {...skyLayer} />
      </Map>
    </>
  );
}

export default LayerMap;
