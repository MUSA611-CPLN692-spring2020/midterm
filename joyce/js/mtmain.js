var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';
/* =======
map
==== */
var map = L.map('map', {
  center: [0, 0],
  zoom: 2
});

// Another options object
var tileOpts = {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
};
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);
var getData = $.ajax('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.geojson')
// grab geojson data
//var getData = $.ajax('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.geojson');
/* =====================
  Parse and store data for later use
===================== */

//clean geojson data
//var data = "https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.geojson"
//var exportRaw = data.split(',');
//var exportData = [];
//for (var i=0; i< exportRaw.length; i++){
//var getData = console.log(exportData)
//
