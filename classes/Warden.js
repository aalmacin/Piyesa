var Warden = function(playerNum, xLine, yLine) {
  this.initialize(playerNum, xLine, yLine);
}
Warden.PLAYER_1_COLOR = "139, 69, 19";
Warden.PLAYER_2_COLOR = "85, 107, 47";
Warden.RADIUS = 40;
Warden.SIDES = 6;
Warden.POINT_SIZE = .2;

var p = Warden.prototype = new Piece();

Warden.prototype.Piece_initialize = p.initialize;

Warden.prototype.initialize = function(playerNum, xLine, yLine) {
  this.playerNum = playerNum;
  color = (this.playerNum == 2) ? Warden.PLAYER_2_COLOR : Warden.PLAYER_1_COLOR;
  this.Piece_initialize(color, xLine, yLine, Warden.RADIUS, Warden.SIDES, Warden.POINT_SIZE);
}
