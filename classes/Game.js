var Game = function(canvasName) {
  this.initialize(canvasName);
}

var p = Game.prototype = new createjs.Stage();

Game.prototype.Stage_initialize = p.initialize;

Game.prototype.initialize = function(canvasName) {
  this.Stage_initialize(canvasName);

  // Create the board object and add it to the Canvas
  this.board = new Board();
  this.board.x = 400;
  this.board.y = 400;
  this.addChild(this.board);

  this.pieces = new Array(
    new Assault(1, 1),
    new Assault(1, 2),
    new Assault(1, 3)
  );

  for(var i=0; i < this.pieces.length; i++) {
    for(var j=0; j < this.board.tiles.length; j++) {
      var currTile = this.board.tiles[j];
      var currPiece = this.pieces[i];
      if(currTile.xLine == currPiece.xLine && currTile.yLine == currPiece.yLine) {
        currTile.setPiece(currPiece);
        currPiece.setTile(currTile);
      }
    }
  }
}
