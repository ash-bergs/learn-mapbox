import * as React from  'react'
import PinMap from '@/components/PinMap'
import { mapboxAccessToken } from '@/pages/index'
import Head from  'next/head'
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/mexican.json?access_token=${mapboxAccessToken}&bbox=-122.53,37.68,-122.35,37.82&limit=10`;

function PinMapPage() {
  const [locations, setLocations] = React.useState([])

  React.useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text().then((text) => JSON.parse(text)))
        .then((json) => {
          setLocations(json.features)
        })
        .catch((error) => console.log(error))
    }
    fetchLocations()
  }, [])
  return (
    <>
      <Head>
        <title>Mapbox GL JS with NextJS</title>
      </Head>
      <div>
        <p>This page visualizes a collection of taco restuarants limited to the West side of San Francisco</p>
        <p>It uses react-map-gl's Marker and Popup component to display restuarant information</p>
      </div>
      <div className="app-container">
        <div className="map-wrapper">
          <PinMap locations={locations} />
        </div>
      </div>
    </>
  )
}

export default PinMapPage