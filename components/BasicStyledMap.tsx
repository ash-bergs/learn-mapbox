import * as React from 'react'
import Map from 'react-map-gl'
import ControlPanel from './ControlPanel';
import { mapboxAccessToken } from '@/pages/index'

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