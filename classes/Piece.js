var Piece = function(board, color, xLine, yLine, radius, sides, pointSize) {
  this.initialize(board, color, xLine, yLine, radius, sides, pointSize);
}

var p = Piece.prototype = new createjs.Shape();

Piece.prototype.Shape_initialize = p.initialize;

Piece.prototype.initialize = function(board, color, xLine, yLine, radius, sides, pointSize) {
  this.Shape_initialize();
  this.board = board;
  this.color = color;
  this.xLine = xLine;
  this.yLine = yLine;
  this.radius = radius;
  this.sides = sides;
  this.pointSize = pointSize;

  this.x = 0;
  this.y = 0;
  this.graphics.beginFill("rgb(" + this.color + ")").drawPolyStar(100, 100, this.radius, this.sides, this.pointSize, 0);
}
