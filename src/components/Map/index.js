import React, { createRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import MarkerClusterer from '@google/markerclusterer'
const GOOGLE_MAP_API_KEY = 'AIzaSyDMUd2TyUzjQDhNksbiKQ0zT95gEjbGBPw';

const loader = new Loader({
  apiKey: GOOGLE_MAP_API_KEY,
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  // center: {
  //   lat: -12.5474482,
  //   lng: -55.744436
  // },
  center: { lat: -12.555650, lng: -55.799598 },
  //center: { lat: 40.74, lng: -74.18 },
  mapTypeId: "satellite",
  zoom: 20
};

loader
  .load()
  .then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
     const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-12.561192,-55.781715),
    new google.maps.LatLng(-12.565302,-55.778695)
  );
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     /*   const marker = new google.maps.Marker({
          position: new google.maps.LatLng(-12.555695,-55.799630),
          map,
          title: "Hello World!",
          icon: "http://localhost:3000/marker.png"
        });
          */
  // Add a marker clusterer to manage the markers.
     






          const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const locations = [
  { lat: -12.555580, lng: -55.799630 },
  { lat: -12.555695, lng: -55.799630 },
]

   const markers = locations.map((location, i) => {
            const marker = new google.maps.Marker({
              position: location,
              label: labels[i % labels.length],
              icon: "http://localhost:3000/marker.png"
            });
             marker.addListener("click", () => {
                infowindow.open({
                  anchor: marker,
                  map,
                  shouldFocus: false,
                });
              });
              return marker;
          });
  const imageBounds = {
    north: -12.554639,
    south: -12.562639,
    east: -55.790000,
    west: -55.800000,
  };
  const historicalOverlay = new google.maps.GroundOverlay(
    "http://localhost:3000/outro_teste.png",
    imageBounds
  );

  console.log('GGGG', google.maps);
  

  new MarkerClusterer  (map, markers, {
     imagePath:
       "http://localhost:3000/marker.png",
   });
    historicalOverlay.setMap(map);

  })
  .catch(e => {
    console.error('error on loading maps', e);
  });

const GoogleMap = () => {
  const googleMapRef = createRef()


   return (
       <div
       id="map"
       ref={googleMapRef}
       style={{ width: '100%', height: '800px' }}
       />
   )
}

export default GoogleMap;