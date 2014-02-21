var Board = function() {
  createjs.Container.call(this);
  this.init();
}

var p = Board.prototype = new createjs.Container;

p.init = function() {
  for (var tile_x_counter=0, tile_rows=0, tile_y=0, tile_x=0, i=0; i < Board.TILE_COUNT; i++) {
    var color;
    if ( i % Board.TILE_HORIZONTAL_COUNT == 0) {
      tile_x_counter = 0;
      tile_rows++;
      tile_y += (Tile.TILE_HEIGHT / 2);
    }
    if (tile_rows % 2 == 0) {
      color = (i % 2 == 0) ? Board.COLOR_6 : Board.COLOR_7;
    } else {
      color = (i % 2 == 0) ? Board.COLOR_7 : Board.COLOR_6;
    }
    tile_x = tile_x_counter * (Tile.TILE_WIDTH / 2);
    var tile = new Tile(color, tile_x, tile_y);
    this.addChild(tile);
    tile_x_counter++;
  }
}

Board.TILE_COUNT = 120;
Board.TILE_HORIZONTAL_COUNT = 10;
Board.COLOR_1 = "231,93,15";
Board.COLOR_2 = "175,96,51";
Board.COLOR_3 = "152,58,5";
Board.COLOR_4 = "243,133,72";
Board.COLOR_5 = "243,162,116";
Board.COLOR_6 = "0,0,0";
Board.COLOR_7 = "200,200,200";
