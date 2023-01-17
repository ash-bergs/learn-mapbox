import { useState } from "react";
import MapGL, { ViewState } from "react-map-gl";
import { mapboxAccessToken } from '@/pages/index'
// switch to '@mapbox/mapbox-gl-draw' https://github.com/mapbox/mapbox-gl-draw
import { Editor, DrawPolygonMode, EditingMode } from "react-map-gl-draw";

// const MODES = [
//   { id: "drawPolygon", text: "Draw Polygon", handler: DrawPolygonMode },
//   { id: "edit", text: "Edit", handler: EditingMode },
//   { id: "stop", text: "Stop", handler: null }
// ];

// check mode - draw mode a string? 

export default function App() {
  const [viewport, setViewport] = useState<Partial<ViewState>>({
    latitude: 59,
    longitude: 9,
    zoom: 16,
    bearing: 0,
    pitch: 60
  });

  const [mode, setMode] = useState(new DrawPolygonMode());

  // const _changeMode = (e) => {
  //   const id = e.target.value;
  //   const currentMode = MODES.find((a) => a.id === id);

  //   if(currentMode?.id === "stop") {
  //     setMode(null);
  //     return;
  //   }

  //   setMode(new currentMode.handler())
  // };

  // const renderToolbar = () => {
  //   return (
  //     <div
  //       style={{ position: "absolute", top: 0, right: 0, maxWidth: "320px" }}
  //     >
  //       <select>
  //         <option value="">--Please choose a draw mode--</option>
  //         {MODES.map((mode) => (
  //           <option key={mode.id} value={mode.id}>
  //             {mode.text}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };

  return (
    <div style={{ width: "100%", height: "100vh", padding: 0, margin: 0 }}>
      <MapGL
        {...viewport}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y"
        onLoad={(map) => {
          map.target.addSource("mapbox-dem", {
            type: "raster-dem",
            url: "mapbox://mapbox.mapbox-terrain-dem-v1",
            tileSize: 512,
            maxzoom: 14
          });
          // add the DEM source as a terrain layer
          map.target.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        }}
        onMove={(e) => setViewport(e.viewState)}
        mapboxAccessToken={mapboxAccessToken}
      >

        
      </MapGL>
    </div>
  );
}
