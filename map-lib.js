(function(window, google){
  var MapLib = (function(){
      function MapLib(element, opts) {
          this.gMap = new google.maps.Map(element, opts);
      }
      MapLib.prototype = {};

      return MapLib;
  }());
  MapLib.create = (element, opts) => new MapLib(element, opts);

  window.MapLib = MapLib;
}(window, google))
