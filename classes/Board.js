// Constructor
var Board = function() {
  this.initialize();
}

// Static Variables/Constants
Board.TILE_COUNT = 120;
Board.TILE_HORIZONTAL_COUNT = 10;
Board.TILE_VERTICAL_COUNT = 12;
Board.COLOR_1 = "25,33,177";
Board.COLOR_2 = "47,52,133";
Board.COLOR_3 = "8,14,115";
Board.COLOR_4 = "77,84,216";
Board.COLOR_5 = "114,119,216";
Board.COLOR_6 = "0,0,0";
Board.COLOR_7 = "200,200,200";

var p = Board.prototype = new createjs.Container;

Board.prototype.Container_initialize = p.initialize;

// Methods
Board.prototype.initialize = function() {
  this.Container_initialize();
  this.tiles = new Array();
  this.clickedPiece = null;
  for (var tile_x_counter=1, tile_rows=0, tile_y=0, tile_x=0, i=0; i < Board.TILE_COUNT; i++) {
    var color;
    if ( i % Board.TILE_HORIZONTAL_COUNT == 0) {
      tile_x_counter = 1;
      if (tile_rows != 0) {
        tile_y += (Tile.TILE_HEIGHT / 2);
      }
      tile_rows++;
    }
    if (tile_rows == 6) {
      color = (i % 2 == 0) ? Board.COLOR_4 : Board.COLOR_5;
    } else if (tile_rows == 7) {
      color = (i % 2 == 0) ? Board.COLOR_5 : Board.COLOR_4;
    } else if (tile_rows % 2 == 0) {
      color = (i % 2 == 0) ? Board.COLOR_6 : Board.COLOR_7;
    } else {
      color = (i % 2 == 0) ? Board.COLOR_7 : Board.COLOR_6;
    }
    tile_x = (tile_x_counter * (Tile.TILE_WIDTH / 2)) - Tile.TILE_WIDTH;
    var tile = new Tile(color, tile_x, tile_y, tile_x_counter, tile_rows);
    this.tiles.push(tile);
    this.addChild(tile);
    tile_x_counter++;
  }
}

Board.prototype.unhighlightAllTiles = function() {
  for(var i=0; i < this.tiles.length; i++){
    this.tiles[i].unhighlightTile();
  }
}

Board.prototype.getTileByLine = function(xLine, yLine) {
  var tile = null;
  var i = 0;
  while(tile == null) {
    var currTile = this.tiles[i];
    if (currTile.xLine == xLine && currTile.yLine == yLine) {
      tile = currTile;
    }
    i++;
  }
  return tile;
}
