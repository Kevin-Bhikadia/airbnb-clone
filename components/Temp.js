import * as React from 'react'
import Map from 'react-map-gl'

function Temp() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      {...initialViewState}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  )
}

export default Temp
