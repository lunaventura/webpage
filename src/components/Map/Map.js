import React, { useState } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { venue } from '../../data/settings.json'
import LocationIcon from '@material-ui/icons/LocationOn';
import useWindowWidth from '../../utils/useWindowWidth'

const styles= {
  navigationControl: {
    position: 'absolute',
    right: 0,    
  }
}

function Map(){
  const width = useWindowWidth()-15
  const [viewport, setViewport] = useState({
    latitude: venue.lat,
    longitude: venue.lng,
    zoom: 7,
    width: '100vw',
    height: "600px",
  })

  if(width != viewport.width){
    setViewport({
      ...viewport,
      width: width
    })
  }

  return(
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAPS_KEY}
        onViewportChange={setViewport}
        scrollZoom={false}
        {...viewport}
      >
        <Marker latitude={venue.lat} longitude={venue.lng} offsetLeft={-20} offsetTop={-10}>
          <LocationIcon fontSize="large" />
        </Marker>

        <div style={styles.navigationControl}>
          <NavigationControl />
        </div>
      </ReactMapGL>
  )
}

export default Map
