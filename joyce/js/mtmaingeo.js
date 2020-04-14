/* =====================
  Global Variables
===================== */
var data;  // for holding data

/* =====================
  Map Setup
===================== */
// Notice that we've been using an options object since week 1 without realizing it
var map = L.map('worldmap')
map.setView([0, 0], 2);
var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});
positron.addTo(map);

// Ajax to grab json

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

//$(document).ready(function() {
//  $.ajax(datalink).done(function(data) {
//   var parsedData = JSON.parse(data);
//      featureGroup = L.geoJson(parsedData, {
//        style: myStyle1
//    }).addTo(map);
//  });
//});

// set coffeeShopPoints to a our coffeeShop GeoJSON
var datalink = "https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json"
var myStyle1 = function(feature){
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
     weight: 1,
     zIndexOffset: 1000}}
   else{return{
     color: "rgb(128, 128, 128)",
     fillColor:"rgb(128, 128, 128)",
     weight: 1}}
  };

var layer1 = function() {
  $.ajax(datalink).done(function(data) {
   var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        style: myStyle1
    }).addTo(map);
  })};



var myStyle2 = function(feature){
 if(feature.properties.ISO3 == "CHN"|
    feature.properties.ISO3 == "MYS"|
    feature.properties.ISO3 == "ITA"|
    feature.properties.ISO3 == "TUR"
){
   return {
     color:"rgb(69, 115, 161)",
     fillColor:"rgb(69, 115, 161)",
   weight: 1}}
   else if(
     feature.properties.ISO3 == "JPN"|
     feature.properties.ISO3 == "GBR"|
     feature.properties.ISO3 == "FRA"|
     feature.properties.ISO3 == "MEX"|
     feature.properties.ISO3 == "THA"
   ) {
     return{
     color: "rgb(204, 51, 0)",
     fillColor:"rgb(204, 51, 0)",
   weight: 1}}
     else if(
           feature.properties.ISO3 == "USA"|
           feature.properties.ISO3 == "HKG"|
           feature.properties.ISO3 == "DEU"|
           feature.properties.ISO3 == "BEL"|
           feature.properties.ISO3 == "NLD"
     ){
        return {
        color:"rgb(0, 0, 51)",
        fillColor:"rgb(0, 0, 51)",
      weight: 1}}
        else{return{
          color: null,
          fillColor:"rgb(128, 128, 128)",
        weight: 1}}
      };

      var layer2 = function() {
        $.ajax(datalink).done(function(data) {
         var parsedData = JSON.parse(data);
            featureGroup = L.geoJson(parsedData, {
              style: myStyle2
          }).addTo(map);
        })};



var myStyle3 = function(feature){
 if(feature.properties.ISO3 == "CHN"|
    feature.properties.ISO3 == "SVN"|
    feature.properties.ISO3 == "MYS"
){
   return {
     color:"black",
     fillColor:"black",
   weight: 1}}
   else if(
     feature.properties.ISO3 == "NLD"|
     feature.properties.ISO3 == "DEU"|
     feature.properties.ISO3 == "USA"|
     feature.properties.ISO3 == "TUR"|
     feature.properties.ISO3 == "BEL"|
     feature.properties.ISO3 == "AUS"|
     feature.properties.ISO3 == "THA"|
     feature.properties.ISO3 == "IDN"|
     feature.properties.ISO3 == "POL"|
     feature.properties.ISO3 == "GBR"|
     feature.properties.ISO3 == "PRT"|
     feature.properties.ISO3 == "ESP"|
     feature.properties.ISO3 == "MEX"|
     feature.properties.ISO3 == "ROU"|
     feature.properties.ISO3 == "LTU"
   ) {
     return{
     color: "rgb(204, 51, 0)",
     fillColor:"rgb(204, 51, 0)",
   weight: 1}}
        else{return{
          color: null,
          fillColor:"rgb(128, 128, 128)",
        weight: 1}}
      };

      var layer3 = function() {
        $.ajax(datalink).done(function(data) {
         var parsedData = JSON.parse(data);
            featureGroup = L.geoJson(parsedData, {
              style: myStyle3
          }).addTo(map);
        })};


//var overlays = {
// "1-Lots of Waste": layer1,
// "2-Destination": layer2,
// "3-Economic Value": layer3
//};


//this just add the layers control to the map
//L.control.layers(baseLayers,overlays).addTo(map);

//make the layer active.



// Create event listener for the Add Coffee Shops Button
//document.getElementById("side1").addEventListener("click", addlayer1);
//function addlayer1() {
//    mapStyle1.addTo(map);
//};
