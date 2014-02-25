var Assault = function(xLine, yLine) {
  Piece.call(this, Assault.COLOR, xLine, yLine, Assault.RADIUS, Assault.SIDES, Assault.POINT_SIZE);
  this.init();
}
Assault.COLOR = Board.COLOR_2;
Assault.RADIUS = 40;
Assault.SIDES = 10;
Assault.POINT_SIZE = .2;

var p = Assault.prototype = new Piece();
