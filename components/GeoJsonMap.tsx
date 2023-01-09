import * as React from 'react';
import Map, { Layer, Source, FillLayer } from 'react-map-gl';

const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

  const jsonFillLayer: FillLayer = {
    id: 'json-fill',
    type: 'fill',
    paint: {
      'fill-color': '#088',
      'fill-opacity': 0.8,
    },
  };

function GeoJsonMap({data}:any) {
  console.log(data)
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      mapboxAccessToken={mapboxAccessToken}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source type="geojson" data={data} >
        <Layer {...jsonFillLayer} />
      </Source>
    </Map>
  );
}

export default GeoJsonMap;