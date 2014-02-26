var Assault = function(xLine, yLine) {
  this.initialize(xLine, yLine);
}
Assault.COLOR = Board.COLOR_2;
Assault.RADIUS = 40;
Assault.SIDES = 10;
Assault.POINT_SIZE = .2;

var p = Assault.prototype = new Piece();

Assault.prototype.Piece_initialize = p.initialize;

Assault.prototype.initialize = function(xLine, yLine) {
  this.Piece_initialize(Assault.COLOR, xLine, yLine, Assault.RADIUS, Assault.SIDES, Assault.POINT_SIZE);
}
