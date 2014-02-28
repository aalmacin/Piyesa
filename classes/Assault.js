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
  var piece = e.target;
  var tile = piece.tile;
  var board = tile.parent;
  if((board.getStage().player1turn && piece.playerNum == 1) || (!board.getStage().player1turn && piece.playerNum == 2)) {
    board.clickedPiece = tile.piece;
    for(var i=0; i < board.tiles.length; i++){
      var currTile = board.tiles[i];
      if (currTile.highlighted) {
        currTile.unhighlightTile();
      }
      var w_range = tile.xLine - 1 > 0;
      var e_range = tile.xLine + 1 <= Board.TILE_HORIZONTAL_COUNT;
      var n_range = tile.yLine - 1 > 0;
      var s_range = tile.yLine + 1 <= Board.TILE_VERTICAL_COUNT;

      // West east north south
      var w = (tile.xLine - 1 == currTile.xLine && tile.yLine == currTile.yLine);
      var e = (tile.xLine + 1 == currTile.xLine && tile.yLine == currTile.yLine);
      var n = (tile.yLine - 1 == currTile.yLine && tile.xLine == currTile.xLine);
      var s = (tile.yLine + 1 == currTile.yLine && tile.xLine == currTile.xLine);

      // Check if tile before second contains a piece
      var wt = w_range && board.getTileByLine(tile.xLine - 1, tile.yLine).piece == null;
      var et = e_range && board.getTileByLine(tile.xLine + 1, tile.yLine).piece == null;
      var nt = n_range && board.getTileByLine(tile.xLine, tile.yLine - 1).piece == null;
      var st = s_range && board.getTileByLine(tile.xLine, tile.yLine + 1).piece == null;

      // 2 tiles
      var w_double = (tile.xLine - 2 == currTile.xLine && wt && tile.yLine == currTile.yLine);
      var e_double = (tile.xLine + 2 == currTile.xLine && et && tile.yLine == currTile.yLine);
      var n_double = (tile.yLine - 2 == currTile.yLine && nt && tile.xLine == currTile.xLine);
      var s_double = (tile.yLine + 2 == currTile.yLine && st && tile.xLine == currTile.xLine);

      // diagonal 1 tile
      var nw = (tile.xLine - 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
      var sw = (tile.xLine - 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
      var ne = (tile.xLine + 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
      var se = (tile.xLine + 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);

      // Check if tile before second contains a piece
      var nwt = n_range && w_range && board.getTileByLine(tile.xLine - 1, tile.yLine - 1).piece == null;
      var swt = s_range && w_range && board.getTileByLine(tile.xLine - 1, tile.yLine + 1).piece == null;
      var net = n_range && e_range && board.getTileByLine(tile.xLine + 1, tile.yLine - 1).piece == null;
      var set = s_range && e_range && board.getTileByLine(tile.xLine + 1, tile.yLine + 1).piece == null;

      // diagonal 2 tiles
      var nw_double = (tile.xLine - 2 == currTile.xLine && nwt && tile.yLine - 2 == currTile.yLine);
      var sw_double = (tile.xLine - 2 == currTile.xLine && swt && tile.yLine + 2 == currTile.yLine);
      var ne_double = (tile.xLine + 2 == currTile.xLine && net && tile.yLine - 2 == currTile.yLine);
      var se_double = (tile.xLine + 2 == currTile.xLine && set && tile.yLine + 2 == currTile.yLine);
      if(w || e || n || s || w_double || e_double || n_double || s_double || nw || sw || ne || se || nw_double || sw_double || ne_double || se_double) {
        if(currTile.piece == null) {
          currTile.highlightTile();
        }
      }
    }
  }
}
