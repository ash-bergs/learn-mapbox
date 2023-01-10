import * as React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import the mapbox-gl styles so that the map is displayed correctly
import { mapboxAccessToken } from '@/pages/index'

type MapboxMapProps = {
  initialOptions?: Omit<mapboxgl.MapboxOptions, 'container'>;
  onMapLoaded?(map: mapboxgl.Map): void;
  onMapRemoved?(): void;
};


function BasicMap({ initialOptions = {}, onMapLoaded, onMapRemoved }: MapboxMapProps) {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState<mapboxgl.Map>();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === 'undefined' || node === null) return;

    // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: mapboxAccessToken,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
      ...initialOptions,
    });

    // save the map object to React.useState
    setMap(mapboxMap);

    // call the onMapLoaded callback if it is provided
    if (onMapLoaded) mapboxMap.once('load', onMapLoaded)

    return () => {
      mapboxMap.remove();
      if (onMapRemoved) onMapRemoved();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapNode} style={{ width: '100%', height: '100%' }} />;
}

export default BasicMap;

// now we override initial map properties and use onMapLoaded when the map is loaded
// we can also use onMapLoaded to store a link to the map instance in the parent component
// onMapRemved lets us know when the map is removed from the DOM

/** 
 * On styling maps:
 * You can also create Mapbox styles using the Mapbox Style Specification
 * To use a custom style, you can either host the style JSON file on your own server and specify the URL of the file as the style prop
 * or you can use the Mapbox Studio to create and publish your own styles and use the style ID as the style prop.
 */