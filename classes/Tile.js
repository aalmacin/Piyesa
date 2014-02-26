// Constructor
var Tile = function(color, x, y, xLine, yLine) {
  this.initialize(color, x, y, xLine, yLine);
}

// Static Variables/Constants
Tile.TILE_WIDTH = 100;
Tile.TILE_HEIGHT = 100;
Tile.OPACITY = 0.4;

var p = Tile.prototype = new createjs.Container();

Tile.prototype.Container_initialize = p.initialize;

// Methods
Tile.prototype.initialize = function(color, x, y, xLine, yLine) {
  this.Container_initialize();
  this.color = color;
  this.x = x;
  this.y = y;
  this.xLine = xLine;
  this.yLine = yLine;
  this.piece = null;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
  this.addChild(this.shape);
}

Tile.prototype.setPiece = function(piece) {
  this.piece = piece;
  this.addChild(this.piece);
}
