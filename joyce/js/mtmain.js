//basemap
let map = L.map('worldmap');
      map.setView([0, 0], 2);
      let positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
      });

      positron.addTo(map);

//extend Leaflet to create a GeoJSON layer from a TopoJSON file
      L.TopoJSON = L.GeoJSON.extend({
        addData: function (data) {
          var geojson, key;
          if (data.type === "Topology") {
            for (key in data.objects) {
              if (data.objects.hasOwnProperty(key)) {
                geojson = topojson.feature(data, data.objects[key]);
                L.GeoJSON.prototype.addData.call(this, geojson);
              }
            }
            return this;
          }
          L.GeoJSON.prototype.addData.call(this, data);
          return this;
        }
      });
      L.topoJson = function (data, options) {
        return new L.TopoJSON(data, options);
      };
//create an empty geojson layer
      var geojson = L.topoJson(null, {
        style: function(feature){
          return {
            color: "#000",
            opacity: 1,
            weight: 1,
            fillColor: '#35495d',
            fillOpacity: 0.8
          }
        },
        onEachFeature: function(feature, layer) {
          layer.bindPopup('<p>'+feature.properties.name+'</p>')
        }
      }).addTo(map);

//  var dataset= $.ajax('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.json').done(console.log)
//  var featureGroup;

//  var myStyle = function(feature){
//    if (dataset.properties.from_name == "United States of America"){
//      return{color:"red"}}
//      else{return {color:"green"}}
//    }

//  var myFilter = function(feature){
//    if (Math.random()>0.5){
//      return false
//    }else {
//      return true
//    }
//  }

//  var eachFeatureFunction = function(layer){
//    layer.on('click', function(event){
//      console.log(layer.feature);
//    showResults();
//    })
//  }
//var featureGroup;
//var dataset1 = myFilter

//define a function to get and parse geojson from URL
     async function getGeoData(url) {
     let response = await fetch(url);
     let data = await response.json();
       console.log(data);
       return data;
       var parsedData = JSON.parse(data);
       return parsedData}


//fetch the topojson and add it to geojson layer
     getGeoData('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3_s.json')
     .then(parsedData=>geojson.addData(parsedData))
//     done(function(data) {
//       var parsedData = JSON.parse(data);
//       featureGroup = L.geoJson(parsedData, {
//         style: myStyle,
//         filter: myFilter
//       }).addTo(map);



//   then(data=>geojson.addData(data))


//  $(document).ready(function() {
//    getGeoData(dataset).done(function(data) {
//      var parsedData = JSON.parse(data);
//      featureGroup = L.geoJson(parsedData, {
//        style: myStyle,
//        filter: myFilter
//      }).addTo(map);

//    featureGroup.eachLayer(eachFeatureFunction);
//              });
