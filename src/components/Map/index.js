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
  center: { lat: -12.576732, lng: -55.756590 },
  //center: { lat: 40.74, lng: -74.18 },
  mapTypeId: "satellite",
  zoom: 16
};

loader
  .load()
  .then((google) => {

    class USGSOverlay extends google.maps.OverlayView {
    bounds;
    image;
    div;
    constructor(bounds, image) {
      super();
      this.bounds = bounds;
      this.image = image;
    }
    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */
    onAdd() {
      this.div = document.createElement("div");
      this.div.style.borderStyle = "solid";
      this.div.style.borderWidth = "2px";
      this.div.style.position = "absolute";
      this.div.style.transform = "rotate(219deg)"
      // this.div.style.top = "-110px";
      // this.div.style.right = "-120px";
      // this.div.style.width = "100%";
      // this.div.style.height = "100%";
      // Create the img element and attach it to the div.
      const img = document.createElement("img");
      img.src = this.image;
      img.style.width = "100%";
      img.style.height = "100%";
      // img.style.top = "-40px";
      // img.style.right = "-90px";
      //img.style.left = "0px";
      img.style.position = "absolute";
      //img.style.transform = "rotate(219deg)"
      this.div.appendChild(img);
      // Add the element to the "overlayLayer" pane.
      const panes = this.getPanes();
      panes.overlayLayer.appendChild(this.div);
    }
    draw() {
      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      const overlayProjection = this.getProjection();
      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      const sw = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getSouthWest()
      );
      const ne = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getNorthEast()
      );
    
      const norte = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getSouthWest()
      );
      const sul = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getNorthEast()
      );
   
      console.log('NE', ne);
      console.log('SW', sw);
      

      // Resize the image's div to fit the indicated dimensions.
      if (this.div) {
        this.div.style.left = sw.x + "px";
        this.div.style.top = ne.y + "px";
        // this.div.style.width = ((ne.x - sw.x) * 2.4) + "px";
        // this.div.style.height = ((sw.y - ne.y) * 0.90) + "px";
        // this.div.style.left = sw.x + "px";
        // this.div.style.top = ne.y + "px";
        this.div.style.width = ne.x - sw.x + "px";
        this.div.style.height = sw.y - ne.y + "px";
      }
    }
    /**
     * The onRemove() method will be called automatically from the API if
     * we ever set the overlay's map property to 'null'.
     */
    onRemove() {
      if (this.div) {
        this.div.parentNode.removeChild(this.div);
        delete this.div;
      }
    }
    /**
     *  Set the visibility to 'hidden' or 'visible'.
     */
    hide() {
      if (this.div) {
        this.div.style.visibility = "hidden";
      }
    }
    show() {
      if (this.div) {
        this.div.style.visibility = "visible";
      }
    }
    toggle() {
      if (this.div) {
        if (this.div.style.visibility === "hidden") {
          this.show();
        } else {
          this.hide();
        }
      }
    }
    toggleDOM(map) {
      if (this.getMap()) {
        this.setMap(null);
      } else {
        this.setMap(map);
      }
    }
  }
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
   
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
  { lat: -12.576636, lng: -55.750338 },
  { lat: -12.555450, lng: -55.799630 },
  { lat: -12.555695, lng: -55.799630 },
  { lat: -12.5546467, lng: -55.799630 },
  { lat: -21.79653, lng: -48.2034 },
  { lat: -12.5764338, lng: -55.753004 },
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
    north: -12.573479,
    south: -12.583309,
    east: -55.753811,
    west: -55.759475,
  };

  // const bounds = new google.maps.LatLngBounds(
  //   new google.maps.LatLng(-12.58450,-55.762604),
  //     new google.maps.LatLng(-12.569150,-55.750112),
  // );

  const sw = new google.maps.LatLng(-12.581118,-55.761500);
  const ne = new google.maps.LatLng(-12.572516,-55.751650);
  // const sw = new google.maps.LatLng(-12.581354,-55.760269);
  // const ne = new google.maps.LatLng(-12.571636,-55.755999);

  // const sw = new google.maps.LatLng(-12.580286,-55.7614897);
  // const ne = new google.maps.LatLng(-12.573605,-55.7558357);
  
  const bounds = new google.maps.LatLngBounds(sw, ne);

  // const historicalOverlay = new google.maps.GroundOverlay(
  //   "http://localhost:3000/loteamento-teste-mapa.png",
  //   bounds
  // );

  const historicalOverlay = new USGSOverlay(bounds, "http://localhost:3000/loteamento-sem-rotacionar.png");
  //const historicalOverlay = new USGSOverlay(bounds, "http://localhost:3000/portaldosbandeirantes_baixa.png");


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