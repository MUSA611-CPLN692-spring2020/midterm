/* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';

/* =====================
  Map Setup
===================== */
// Notice that we've been using an options object since week 1 without realizing it
var map = L.map('worldmap')
map.setView([0, 0], 2);
var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 20
});
positron.addTo(map);

// Ajax to grab json
var datalink = "https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json"


var myStyle = function(feature){
 if(feature.properties.ISO3 == "USA"|
    feature.properties.ISO3 == "CHN"|
    feature.properties.ISO3 == "EGY"|
    feature.properties.ISO3 == "BWA"|
    feature.properties.ISO3 == "DEU"|
    feature.properties.ISO3 == "JPN"|
    feature.properties.ISO3 == "MEX"|
    feature.properties.ISO3 == "FRA"|
    feature.properties.ISO3 == "TUR"|
    feature.properties.ISO3 == "BRA"|
    feature.properties.ISO3 == "GBR"|
    feature.properties.ISO3 == "ITA"|
    feature.properties.ISO3 == "ESP"|
    feature.properties.ISO3 == "THA"|
    feature.properties.ISO3 == "KOR"|
    feature.properties.ISO3 == "COL"|
    feature.properties.ISO3 == "IRQ"|
    feature.properties.ISO3 == "MYS"|
    feature.properties.ISO3 == "AUS"|
    feature.properties.ISO3 == "POL"
){
   return {
     color: "	rgb(153, 38, 0)",
     fillColor:"rgb(153, 38, 0)",
     zIndexOffset: 1000}}
   else{return{
     color:"rgb(128, 128, 128)",
     fillColor:"rgb(128, 128, 128)"}}
  }

//var myFilter = function(feature) {
//    if (Math.random()>0.5 ) {
//      return false
//    } else {
//      return true
//    }
//  }


//var eachFeatureFunction = function(layer) {
//  layer.on('click', function (event) {
    /* =====================
    The following code will run every time a layer on the map is clicked.
    Check out layer.feature to see some useful data about the layer that
    you can use in your application.
    ===================== */
//    console.log(layer.feature);
//    showResults();
//  });
//};

$(document).ready(function() {
  $.ajax(datalink).done(function(data) {
   var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        style: myStyle
//         filter: myFilter
    }).addTo(map);
//  featureGroup.eachLayer(eachFeatureFunction);
  });
});
