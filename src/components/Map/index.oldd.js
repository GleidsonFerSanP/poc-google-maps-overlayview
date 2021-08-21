

import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
     <OverlayView
      position={{ lat: -34.397, lng: 150.644 }}
      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       */
       bounds={{
          ne: { lat: -34.400471, lng: 150.005608 },
          sw: { lat: -34.281819, lng: 150.287132 }
       }}
       
      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_LAYER}
      /*
       * 2. Tweak the OverlayView's pixel position. In this case, we're
       *    centering the content.
       */
      getPixelPositionOffset={getPixelPositionOffset}
      /*
       * 3. Create OverlayView content using standard React components.
       */
    >
      <div style={{ background: `red`, border: `1px solid #000`, padding: 15, width: '300px' }}>
        <h1>OverlayView</h1>
        <button onClick={props.onClick} style={{ height: 60 }}>
          I have been clicked {props.count} time{props.count > 1 ? `s` : ``}
        </button>
      </div>
    </OverlayView>
  </GoogleMap>
))

const Maps = () => {
    return(
        <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMUd2TyUzjQDhNksbiKQ0zT95gEjbGBPw&v=3.exp&libraries=&v=weekly"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Maps;