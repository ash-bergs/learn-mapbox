import * as React from "react";
import MapGL from "react-map-gl";
import { Editor, EditingMode, DrawPolygonMode } from "react-map-gl-draw";

const MAP_STYLE = "mapbox://styles/mapbox/light-v9";
const MAPBOX_TOKEN = "pk.eyJ1IjoiYXNoLWJlcmdzIiwiYSI6ImNsY2pieTEyODZob2YzcHBqYnU2dmtlOHcifQ.56BFVl5cNOQVIUZaELc_DQ";

const initialFeatures = [
  {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: [-122.4120966186523, 37.763536601521924]
    }
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-122.40880966186523, 37.783536601521924],
        [-122.43893623352051, 37.779669924659004],
        [-122.43515968322752, 37.7624370109886],
        [-122.42348670959471, 37.77180027337861],
        [-122.4250316619873, 37.778584505321376],
        [-122.42314338684082, 37.778652344496926],
        [-122.42357254028322, 37.77987343901049],
        [-122.41198539733887, 37.78109451335266]
      ]
    }
  },
  {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-122.51129150390625, 37.771461045439764],
          [-122.46588706970215, 37.77342854582093],
          [-122.45464324951172, 37.77471756940714],
          [-122.45284080505371, 37.76644028998291],
          [-122.45747566223145, 37.765761783370465],
          [-122.45902061462401, 37.76644028998291],
          [-122.5100040435791, 37.763997637045456],
          [-122.51026153564452, 37.767254489700846],
          [-122.51129150390625, 37.771461045439764]
        ],
        [
          [-122.50802993774414, 37.770239811973674],
          [-122.45644569396974, 37.77302148107203],
          [-122.45515823364258, 37.76759373693769],
          [-122.45884895324706, 37.76847577247014],
          [-122.50811576843262, 37.765693932366865],
          [-122.50802993774414, 37.770239811973674]
        ]
      ]
    }
  }
];

function App() {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '100%',
    longitude: -122.45,
    latitude: 37.78,
    zoom: 12
  });
  const [mode, setMode] = React.useState(new DrawPolygonMode());

  const [features, setFeatures] = React.useState(initialFeatures);

  return (
    <MapGL
      {...viewport}
      mapStyle={MAP_STYLE}
      mapboxAccessToken={MAPBOX_TOKEN}
      onMove={(e) => setViewport(e.viewport)}
    >
      <Editor
        clickRadius={12}
        // onUpdate={({ data, editType }) => {
        //   console.log(editType);
        //   //setFeatures({ features: data });
        // }}
        // onSelect={(selected) => {
        //   console.log(selected);
        // }}
        //features={features}
        mode={mode}
      />
    </MapGL>
  );
}

export default App;
