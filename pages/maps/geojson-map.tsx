import * as React from 'react'
import GeoJsonMap from '@/components/GeoJsonMap'

function GeoJsonMapPage({ data }: { data: any}) {
  return(
    <>
    <div>
      <p>This page visualizes data from a local geoJSON file</p>
      <p>Like other examples this component uses Source and Layer components from react-map-gl</p>
    </div>
    <div style={{ height: '100%', width: '100%'}}>
      <GeoJsonMap data={data} />
    </div>
    </>
  )
}

export default GeoJsonMapPage

export async function getStaticProps() {
  const data = await import("@/public/data.json")
  
  return {
    props: {
      data: data.default,
    },
  };
}