var Rover = function(playerNum, xLine, yLine) {
  this.initialize(playerNum, xLine, yLine);
}
Rover.PLAYER_1_COLOR = "139, 69, 19";
Rover.PLAYER_2_COLOR = "85, 107, 47";
Rover.RADIUS = 40;
Rover.SIDES = 4;
Rover.POINT_SIZE = .2;

var p = Rover.prototype = new Piece();

Rover.prototype.Piece_initialize = p.initialize;

Rover.prototype.initialize = function(playerNum, xLine, yLine) {
  this.playerNum = playerNum;
  color = (this.playerNum == 2) ? Rover.PLAYER_2_COLOR : Rover.PLAYER_1_COLOR;
  var objRotation = 70;
  this.Piece_initialize(color, xLine, yLine, Rover.RADIUS, Rover.SIDES, Rover.POINT_SIZE, objRotation);
}

Rover.prototype.handleClick = function(e) {
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
      var nw = (tile.xLine - 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
      var sw = (tile.xLine - 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
      var ne = (tile.xLine + 1 == currTile.xLine && tile.yLine - 1 == currTile.yLine);
      var se = (tile.xLine + 1 == currTile.xLine && tile.yLine + 1 == currTile.yLine);
      if(nw || ne || sw || se) {
        if(currTile.piece == null) {
          currTile.highlightTile();
        }
      }
    }
  }
}
