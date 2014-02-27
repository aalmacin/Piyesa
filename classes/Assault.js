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

Assault.prototype.handleClick = function(e) {
  var tile = e.target.tile;
  var board = tile.parent;
  board.clickedPiece = tile.piece;
  for(var i=0; i < board.tiles.length; i++){
    var currTile = board.tiles[i];
    if (currTile.highlighted) {
      currTile.unhighlightTile();
    }
    if (tile.xLine - 2 <= currTile.xLine && tile.yLine == currTile.yLine) {
      console.log(tile.xLine + ' <- xLine | currTileXLine ->' + currTile.xLine);
    }
    var ew = (tile.xLine <= currTile.xLine + 2 && tile.xLine >= currTile.xLine - 2 && tile.yLine == currTile.yLine);
    var ns = (tile.yLine <= currTile.yLine + 2 && tile.yLine >= currTile.yLine - 2 && tile.xLine == currTile.xLine);
    var nw = (tile.xLine - 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
    var sw = (tile.xLine - 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
    var ne = (tile.xLine + 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
    var se = (tile.xLine + 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
    var nw_double = (tile.xLine - 2 == currTile.xLine && tile.yLine - 2 == currTile.yLine);
    var sw_double = (tile.xLine - 2 == currTile.xLine && tile.yLine + 2 == currTile.yLine);
    var ne_double = (tile.xLine + 2 == currTile.xLine && tile.yLine - 2 == currTile.yLine);
    var se_double = (tile.xLine + 2 == currTile.xLine && tile.yLine + 2 == currTile.yLine);
    if(ew || ns || nw || sw || ne || se || nw_double || sw_double || ne_double || se_double) {
      if(currTile.piece == null) {
        currTile.highlightTile();
      }
    }
  }
}
