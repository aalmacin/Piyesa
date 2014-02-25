var Game = function(canvasName) {
  createjs.Stage.call(this, canvasName);

  // Create the board object and add it to the Canvas
  this.board = new Board();
  this.addChild(this.board);

  this.piece = new Assault(1, 1);
  this.board.addChild(this.piece);
}

var p = Game.prototype = new createjs.Stage();
