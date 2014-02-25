// Constructor
var Tile = function(color, x, y, xLine, yLine) {
  this.initialize(color, x, y, xLine, yLine);
}

// Static Variables/Constants
Tile.TILE_WIDTH = 100;
Tile.TILE_HEIGHT = 100;
Tile.OPACITY = 0.4;

var p = Tile.prototype = new createjs.Shape();

Tile.prototype.Shape_initialize = p.initialize;

// Methods
Tile.prototype.initialize = function(color, x, y, xLine, yLine) {
  this.Shape_initialize();
  this.color = color;
  this.x = x;
  this.y = y;
  this.xLine = xLine;
  this.yLine = yLine;
  this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
}
