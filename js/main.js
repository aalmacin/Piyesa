var TILE_COUNT = 120;
var TILE_HORIZONTAL_COUNT = 10;
$(document).ready(function() {
  var color1 = "231,93,15";
  var color2 = "175,96,51";
  var color3 = "152,58,5";
  var color4 = "243,133,72";
  var color5 = "243,162,116";

  var stage = new createjs.Stage('mainCanvas');
  for (var tile_x_counter=0, tile_rows=0, tile_y=0, tile_x=0, i=0; i < TILE_COUNT; i++) {
    var color;
    color = (i % 2 == 0) ? color1 : color2;
    if ( i % TILE_HORIZONTAL_COUNT == 0) {
      tile_x_counter = 0;
      tile_rows++;
      tile_y += (TILE_HEIGHT / 2);
    }
    if (tile_rows % 2 == 0) {
      color = (i % 2 == 0) ? color2 : color1;
    } else {
      color = (i % 2 == 0) ? color1 : color2;
    }
    tile_x = tile_x_counter * (TILE_WIDTH / 2);
    var tile = new Tile(color, tile_x, tile_y);
    stage.addChild(tile);
    tile_x_counter++;
  }
  createjs.Ticker.addEventListener("tick", function(e) {
    stage.update();
  });
});
