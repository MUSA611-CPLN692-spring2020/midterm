
const gp = require("geojson-precision");
let trimmed = gp.parse(getData, 2)

var geojson = L.map((null, {
  style: function(feature){
    return {
      color: "#000000",
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

)

async function getGeoData(url) {
let response = await fetch(url);
let data = await response.json();
  console.log(data);
  return data}

getGeoData('https://raw.githubusercontent.com/joyceyuqiliu/midterm/master/joyce/midterm_dataset/m2017.json')
  .then(data=>geojson.addData(data))
