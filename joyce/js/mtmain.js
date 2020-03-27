var data;
var stringFilter = "";
var selectValue = 'All';

/* =======
map
==== */
//Another options object
var tileOpts = {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
};
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);
var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature);
// grab geojson data
var getData = $.ajax('https://github.com/joyceyuqiliu/midterm/raw/master/midterm_dataset/Waste_Mexport3.geojson')

//
/* =====================
  Parse and store data for later use
===================== */

/* =====================
  Application execution
===================== */
