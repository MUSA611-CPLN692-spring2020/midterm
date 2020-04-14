var Grid = function(width, height) {
    this.draw = function() {
    var canvas = document.getElementById("canvas");
    if(canvas.getContext) {
        var context = canvas.getContext("2d");
        for(var i = 0; i < width; i++) {
            for(var j = 0; j < height; j++) {
                if(isLive(i, j)) {
                    context.fillStyle = "lightblue";
                }
                else {
                    context.fillStyle = "yellowgreen";
                }
                context.fillRect(i*15, j*15, 14, 14);
                }
            }
        }
    }
 }



var context = d3.select("canvas").node().getContext("2d");
path = d3.geoPath().context(context);
d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;
  context.beginPath();
  path(topojson.mesh(us));
  context.stroke();
});
