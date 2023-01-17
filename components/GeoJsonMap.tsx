import * as React from 'react';
import Map, { Layer, Source, FillLayer } from 'react-map-gl';
import { useAtom } from 'jotai';
import { mapAtom } from '@/lib/mapStore';
import { mapboxAccessToken } from '@/pages/index'

  const jsonFillLayer: FillLayer = {
    id: 'json-fill',
    type: 'fill',
    paint: {
      'fill-color': '#088',
      'fill-opacity': 0.8,
    },
  };

function GeoJsonMap({data}:any) {
  const [, setMap] = useAtom(mapAtom);
  return (
    <Map
      ref={(ref) => setMap(ref)}
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