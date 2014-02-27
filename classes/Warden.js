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

Warden.prototype.handleClick = function(e) {
  var tile = e.target.tile;
  var board = tile.parent;
  board.clickedPiece = tile.piece;
  for(var i=0; i < board.tiles.length; i++){
    var currTile = board.tiles[i];
    if (currTile.highlighted) {
      currTile.unhighlightTile();
    }
    var w = (tile.xLine - 1 == currTile.xLine && tile.yLine == currTile.yLine);
    var e = (tile.xLine + 1 == currTile.xLine && tile.yLine == currTile.yLine);
    var n = (tile.yLine - 1 == currTile.yLine && tile.xLine == currTile.xLine);
    var s = (tile.yLine + 1 == currTile.yLine && tile.xLine == currTile.xLine);
    var nw = (tile.xLine - 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
    var sw = (tile.xLine - 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
    var ne = (tile.xLine + 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
    var se = (tile.xLine + 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
    if(w || e || n || s || nw || sw || ne || se) {
      if(currTile.piece == null) {
        currTile.highlightTile();
      }
    }
  }
}
