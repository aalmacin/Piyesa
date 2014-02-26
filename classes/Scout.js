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

Scout.prototype.handleClick = function(e) {
  var tile = e.target.tile;
  var board = tile.parent;
  for(var i=0; i < board.tiles.length; i++){
    var currTile = board.tiles[i];
    if (currTile.highlighted) {
      currTile.unhighlightTile();
    }
    var left = (tile.xLine - 1 == currTile.xLine && tile.yLine == currTile.yLine);
    var right = (tile.xLine + 1 == currTile.xLine && tile.yLine == currTile.yLine);
    var above = (tile.yLine - 1 == currTile.yLine && tile.xLine == currTile.xLine);
    var below = (tile.yLine + 1 == currTile.yLine && tile.xLine == currTile.xLine);
    if(left || right || above || below) {
      if(currTile.piece == null) {
        currTile.highlightTile();
      }
    }
  }
}
