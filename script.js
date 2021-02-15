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
  
          
        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
        var featureLayer_wildfires = new FeatureLayer({     url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer"});
   
   
   var featureLayer_fire_activity = new FeatureLayer({
     url:"https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Satellite_VIIRS_Thermal_Hotspots_and_Fire_Activity/FeatureServer"
   });

        map.add(featureLayer_wildfires);
  map.add(featureLayer_fire_activity);
      });
