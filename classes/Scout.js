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
      var w = (tile.xLine - 1 == currTile.xLine && tile.yLine == currTile.yLine);
      var e = (tile.xLine + 1 == currTile.xLine && tile.yLine == currTile.yLine);
      var n = (tile.yLine - 1 == currTile.yLine && tile.xLine == currTile.xLine);
      var s = (tile.yLine + 1 == currTile.yLine && tile.xLine == currTile.xLine);
      if(w || e || n || s) {
        if(currTile.piece == null) {
          currTile.highlightTile();
        }
      }
    }
  }
}
