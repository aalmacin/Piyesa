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

Defender.prototype.handleClick = function(e) {
  var tile = e.target.tile;
  var board = tile.parent;
  board.clickedPiece = tile.piece;
  for(var i=0; i < board.tiles.length; i++){
    var currTile = board.tiles[i];
    if (currTile.highlighted) {
      currTile.unhighlightTile();
    }
    var ew = (tile.xLine <= currTile.xLine + 3 && tile.xLine >= currTile.xLine - 3 && tile.yLine == currTile.yLine);
    if(ew) {
      if(currTile.piece == null) {
        currTile.highlightTile();
      }
    }
  }
}
