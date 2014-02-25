var Piece = function(color, xLine, yLine, radius, sides, pointSize) {
  this.color = color;
  this.xLine = xLine;
  this.yLine = yLine;
  this.radius = radius;
  this.sides = sides;
  this.pointSize = pointSize;

  this.x = 0;
  this.y = 0;
  this.init();
}

var p = Piece.prototype = new createjs.Shape();

p.init = function() {
  this.graphics.beginFill("rgb(" + this.color + ")").drawPolyStar(100, 100, this.radius, this.sides, this.pointSize, 0);
}
