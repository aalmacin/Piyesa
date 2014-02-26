var Scout = function(playerNum, xLine, yLine) {
  this.initialize(playerNum, xLine, yLine);
}
Scout.PLAYER_1_COLOR = "139, 69, 19";
Scout.PLAYER_2_COLOR = "85, 107, 47";
Scout.RADIUS = 40;
Scout.SIDES = 3;
Scout.POINT_SIZE = .5;

var p = Scout.prototype = new Piece();

Scout.prototype.Piece_initialize = p.initialize;

Scout.prototype.initialize = function(playerNum, xLine, yLine) {
  this.playerNum = playerNum;
  var color = (this.playerNum == 2) ? Scout.PLAYER_2_COLOR : Scout.PLAYER_1_COLOR;
  var objRotation = (this.playerNum == 2) ? 270 : 90;
  this.Piece_initialize(color, xLine, yLine, Scout.RADIUS, Scout.SIDES, Scout.POINT_SIZE, objRotation);
}

