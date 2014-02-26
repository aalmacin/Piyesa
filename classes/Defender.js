var Defender = function(playerNum, xLine, yLine) {
  this.initialize(playerNum, xLine, yLine);
}
Defender.PLAYER_1_COLOR = "139, 69, 19";
Defender.PLAYER_2_COLOR = "85, 107, 47";
Defender.RADIUS = 40;
Defender.SIDES = 2;
Defender.POINT_SIZE = .2;

var p = Defender.prototype = new Piece();

Defender.prototype.Piece_initialize = p.initialize;

Defender.prototype.initialize = function(playerNum, xLine, yLine) {
  this.playerNum = playerNum;
  color = (this.playerNum == 2) ? Defender.PLAYER_2_COLOR : Defender.PLAYER_1_COLOR;
  this.Piece_initialize(color, xLine, yLine, Defender.RADIUS, Defender.SIDES, Defender.POINT_SIZE);
}

