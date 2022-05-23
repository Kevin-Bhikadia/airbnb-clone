import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import MapGL from 'react-map-gl'
// import Map from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  // trasnform searchResuts to only give long and lat
  const cordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(cordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/kevinbhikadia/cl3itbm4k000v14nzo4c99a7r"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      // viewState={(nextViewport) => setViewport(nextViewport)}
    >
      
    </ReactMapGL>
  )
}

export default Map
