(function(window, google, MapLib){
  MapLib.MAP_OPTIONS = {
    center: {
      lat: 30.6893891,
      lng: 76.8391327
    },
    zoom: 10,
    scrollwheel: false,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
}(window, google, window.MapLib || (window.MapLib = {})))
