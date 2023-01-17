import * as React from 'react'
import { useAtom } from 'jotai'
import { mapAtom } from '@/lib/mapStore'
// to be linked to a map the control panel needs to share a reference to the map
// this is done by using the mapStore mapAtom between the two components

const ControlPanel = () => {
  const [map] = useAtom(mapAtom)

  const onMoveClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {longitude, latitude} = position.coords
      map?.setCenter([longitude, latitude])
      map?.setZoom(12)
    })
  }

  return (
    <div
    style={{
      position: "absolute",
      top: "100px",
      left: "10px",
      width: "200px",
      padding: "8px 16px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      borderRadius: "4px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      rowGap: "6px",
    }}
    >
      <button onClick={onMoveClick}>Find My Location</button>
    </div>
  )
}

export default ControlPanel