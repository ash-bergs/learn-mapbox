import * as React from 'react'
import LayerMap from '@/components/LayerMap'

function TerrainMapPage() {
  return (
    <>
    <div>
      <p>Adds Terrain and Sky to a map of the San Francisco area</p>
      <p>This map uses the Source and Layer components from react-map-gl library</p>
      <p>Layer styles are from Mapbox</p>
    </div>
    <LayerMap />
    </>
  )
}

export default TerrainMapPage