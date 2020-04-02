var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';
/* =======
view topojson map
==== */
var map = L.map('worldmap').setView([44,-31], 3);
var topolayer =

data = $.getJSON('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.json')
.done(addTopoData);

function addTopoData(topoData) {
  topoLayer.addData(topoData);
  topoLayer.addTo(map);
}



// Another options object
//var tileOpts = {
//  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//  subdomains: 'abcd',
//  minZoom: 0,
//  ext: 'png'
//};
//var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);

// https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.json
//var raw = $.ajax('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.json').done(function(json){ console.log(json); })
//var data = JSON.aggregate

// grab geojson data
//var getData = $.ajax('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/Waste_Mexport3.json');
