import * as React from 'react';
import BasicMap from '@/components/BasicMap';
import MapLoadingIndicator from '@/components/MapLoadingIndicator';

function MapboxGlPage() {
  const [loading, setLoading] = React.useState(true);
  const handleMapLoading = () => setLoading(false);
  return (
    <>
      <div>
        <p>This example uses mapbox-gl, no react-map-gl wrapper</p>
      </div>
      <div>
        <div style={{ height: '90vh' }}>
          
          <BasicMap
          initialOptions={{ center: [38.0983, 55.7038] }}
          onMapLoaded={handleMapLoading}
          />
          
        </div>
        {loading && <MapLoadingIndicator className="loading-holder" />}
      </div>
    </>
  );
}

export default MapboxGlPage;
