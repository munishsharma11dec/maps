(function(window, google){

  // map options
  var options = {
    center: {
      lat: 30.6893891,
      lng: 76.8391327
    },
    zoom: 10
  }
  element = document.getElementById('map-canvas'),
  // map object created
  map = new google.maps.Map(element, options);
}(window, google));
