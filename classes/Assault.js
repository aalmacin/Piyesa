var Assault = function(playerNum, xLine, yLine) {
  this.initialize(playerNum, xLine, yLine);
}
Assault.PLAYER_1_COLOR = "139, 69, 19";
Assault.PLAYER_2_COLOR = "85, 107, 47";
Assault.RADIUS = 40;
Assault.SIDES = 10;
Assault.POINT_SIZE = .2;

var p = Assault.prototype = new Piece();

Assault.prototype.Piece_initialize = p.initialize;

Assault.prototype.initialize = function(playerNum, xLine, yLine) {
  this.playerNum = playerNum;
  color = (this.playerNum == 2) ? Assault.PLAYER_2_COLOR : Assault.PLAYER_1_COLOR;
  this.Piece_initialize(color, xLine, yLine, Assault.RADIUS, Assault.SIDES, Assault.POINT_SIZE);
}
