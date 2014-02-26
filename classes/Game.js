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
  this.board.y = 100;
  this.addChild(this.board);

  this.pieces = new Array(
    new Assault(1, 2, 4),
    new Assault(1, 3, 4),
    new Assault(1, 4, 4),
    new Assault(1, 5, 4),
    new Assault(1, 6, 4),
    new Assault(1, 7, 4),
    new Assault(1, 8, 4),
    new Assault(1, 9, 4),
    new Assault(2, 2, 9),
    new Assault(2, 3, 9),
    new Assault(2, 4, 9),
    new Assault(2, 5, 9),
    new Assault(2, 6, 9),
    new Assault(2, 7, 9),
    new Assault(2, 8, 9),
    new Assault(2, 9, 9)
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
