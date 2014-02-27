var Piece = function(color, xLine, yLine, radius, sides, pointSize, objRotate) {
  objRotate = typeof objRotate !== 'undefined' ? objRotate : 0;
  this.initialize(color, xLine, yLine, radius, sides, pointSize, objRotate);
}

var p = Piece.prototype = new createjs.Shape();

Piece.prototype.Shape_initialize = p.initialize;

Piece.prototype.initialize = function(color, xLine, yLine, radius, sides, pointSize, objRotate) {
  this.Shape_initialize();
  this.color = color;
  this.xLine = xLine;
  this.yLine = yLine;
  this.radius = radius;
  this.sides = sides;
  this.pointSize = pointSize;
  this.objRotate = objRotate;

  this.x = 0;
  this.y = 0;
  this.tile = null;

  this.graphics.beginFill("rgb(" + this.color + ")").drawPolyStar(this.x, this.y, this.radius, this.sides, this.pointSize, this.objRotate);
  this.addEventListener("click", this.handleClick);
}

Piece.prototype.setTile = function(tile) {
  this.tile = tile;
  this.x = this.tile.x + Tile.TILE_WIDTH / 2;
  this.y = this.tile.y + Tile.TILE_HEIGHT / 2;
}

Piece.prototype.removeTile = function() {
  this.tile = null;
}

Piece.prototype.handleClick = function(e) {
}
