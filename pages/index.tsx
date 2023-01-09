import * as React from 'react';
import Head from 'next/head';
import BasicMap from '../components/BasicMap';
import BasicStyledMap from '../components/BasicStyledMap';
import GeoJsonMap from '../components/GeoJsonMap';
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

export default function Home({ data }: any) {
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
          <GeoJsonMap data={data} />
          {/* <LayerMap /> */}
          {/* <PinMap locations={locations} /> */}
          {/* <DrawMap /> */}
        </div>
        {/* {loading && <MapLoadingIndicator className="loading-holder" />} */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("@/public/data.json")
  
  return {
    props: {
      data: data.default,
    },
  };
}


/**
 * - A function to toggle the visibility of a specific layer on the map
- A function to add a custom control to the map, such as a toggle for a specific layer or a button to reset the map's zoom level
- A function to show a pop-up on the map at a specific location, displaying information or allowing the user to interact with the map
- A function to add a data-driven styling to the map, allowing the map's appearance to change based on data values
- A function to add a 3D model or terrain data to the map
- A function to enable fly-to animations, allowing the map to smoothly transition to a new center point or zoom level
- A function to enable seamless map rotation, allowing the user to rotate the map without having to recenter it.
 */