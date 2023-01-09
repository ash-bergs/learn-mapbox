import * as React from 'react';
import Head from 'next/head';
import BasicMap from '../components/BasicMap';
import BasicStyledMap from '../components/BasicStyledMap';
import DrawMap from '../components/DrawMap';
import LayerMap from '../components/LayerMap';
import MapLoadingIndicator from '../components/MapLoadingIndicator';
import dynamic from 'next/dynamic';
const PinMap = dynamic(() => import('../components/PinMap'), {
  ssr: false,
});
export const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/mexican.json?access_token=${mapboxAccessToken}&bbox=-122.53,37.68,-122.35,37.82&limit=10`;

export default function Home() {
  // const [loading, setLoading] = React.useState(true)
  // const handleMapLoading = () => setLoading(false)
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text().then((text) => JSON.parse(text)))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((error) => console.log(error));
    };
    fetchLocations();
  }, []);
  return (
    <>
      <Head>
        <title>Mapbox GL JS with NextJS</title>
      </Head>
      {/* 
      /**
      * <BasicMap
          initialOptions={{ center: [38.0983, 55.7038] }}
          onMapLoaded={handleMapLoading}
          />
      */}
      <div className="app-container">
        <div className="map-wrapper">
          <LayerMap />
          {/* <PinMap locations={locations} /> */}
          {/* <DrawMap /> */}
        </div>
        {/* {loading && <MapLoadingIndicator className="loading-holder" />} */}
      </div>
    </>
  );
}
