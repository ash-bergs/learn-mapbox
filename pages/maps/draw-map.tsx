import * as React from 'react'
import DrawMapSecondary from '@/components/DrawMapSecondary'

function DrawMapPage() {
  return (
    <>
    <div>
      <p>Adds Terrain and Sky to a map of the San Francisco area</p>
      <p>This map uses the Source and Layer components from react-map-gl library</p>
    </div>
    <DrawMapSecondary />
    </>
  )
}

export default DrawMapPage