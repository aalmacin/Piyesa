var Game = function(canvasName) {
  this.initialize(canvasName);
}

var p = Game.prototype = new createjs.Stage();

Game.prototype.Stage_initialize = p.initialize;

Game.prototype.initialize = function(canvasName) {
  this.Stage_initialize(canvasName);

  // Create the board object and add it to the Canvas
  this.board = new Board();
  this.addChild(this.board);

  this.piece = new Assault(this.board, 1, 1);
  this.board.addChild(this.piece);
}
