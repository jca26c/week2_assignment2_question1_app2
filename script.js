require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

         var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 5,
          center: [-98.6, 39.6] // longitude, latitude
        });
  
const fire_symbol_renderer = {
  type: "heatmap",
  colorStops: [
    { color: "rgba(63, 40, 102, 0)", ratio: 0 },
    { color: "#472b77", ratio: 0.083 },
    { color: "#4e2d87", ratio: 0.166 },
    { color: "#563098", ratio: 0.249 },
    { color: "#5d32a8", ratio: 0.332 },
    { color: "#6735be", ratio: 0.415 },
    { color: "#7139d4", ratio: 0.498 },
    { color: "#7b3ce9", ratio: 0.581 },
    { color: "#853fff", ratio: 0.664 },
    { color: "#a46fbf", ratio: 0.747 },
    { color: "#c29f80", ratio: 0.83 },
    { color: "#e0cf40", ratio: 0.913 },
    { color: "#ffff00", ratio: 1 }
  ],
  maxPixelIntensity: 200,
  minPixelIntensity: 0
};
  
          
        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
        var featureLayer_wildfires = new FeatureLayer({     url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer"});
   
   
   var featureLayer_fire_activity = new FeatureLayer({
     url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer",
     renderer: fire_symbol_renderer
   });

         map.add(featureLayer_fire_activity); map.add(featureLayer_wildfires);
      });
