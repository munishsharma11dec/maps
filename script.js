(function(window, MapLib){

  // map options
  var options = MapLib.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map object created
  map = new google.maps.Map(element, options);
}(window, window.MapLib || (window.MapLib = {})));
