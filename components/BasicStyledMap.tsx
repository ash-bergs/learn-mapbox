import * as React from 'react'
import Map from 'react-map-gl'
import ControlPanel from './ControlPanel';

const mapboxAccessToken =
  'pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ';

function BasicStyledMap() {
  const [mapStyle, setMapStyle] = React.useState('')

  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8,
        }}
        mapboxAccessToken={mapboxAccessToken}
        mapStyle={mapStyle}
        styleDiffing
      /> 
      <ControlPanel onChange={setMapStyle} />
    </>
  )
}

export default BasicStyledMap