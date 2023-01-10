import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

export default function Home({ data }: any) {
 
  return (
    <>
      <Head>
        <title>Mapbox GL JS with NextJS</title>
      </Head>
      <div className="app-container">
        <div
          className="map-wrapper"
          style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
          <Link href="/maps/geojson-map">GeoJSON Map</Link>
          <Link href="/maps/pin-map">Pin Map</Link>
          <Link href="/maps/terrain-map">Terrain Layer Map</Link>
          <Link href="/maps/mapbox-gl">Pure Mapbox GL</Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import('@/public/data.json');

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
