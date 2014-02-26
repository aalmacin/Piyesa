var Game = function(canvasName) {
  this.initialize(canvasName);
}

var p = Game.prototype = new createjs.Stage();

Game.prototype.Stage_initialize = p.initialize;
Game.SCOUT_COUNT = 8;
Game.ROVER_COUNT = 4;
Game.WARDEN_COUNT = 2;
Game.ASSAULT_COUNT = 1;
Game.DEFENDER_COUNT = 1;
Game.PLAYERS = 2;

Game.prototype.initialize = function(canvasName) {
  this.Stage_initialize(canvasName);

  this.autoClear = true;

  // Create the board object and add it to the Canvas
  this.board = new Board();
  this.board.x = 400;
  this.board.y = 100;
  this.addChild(this.board);

  this.pieces = new Array();

  for(var i=1; i <= Game.PLAYERS; i++) {
    for(var j=0; j < Game.SCOUT_COUNT; j++) {
      var yPos = (i == Game.PLAYERS) ? 8 : 5;
      this.pieces.push(new Scout(i, j + 2, yPos));
    }
    for(var j=0; j < Game.ROVER_COUNT; j++) {
      var yPos = (i == Game.PLAYERS) ? 9 : 4;
      this.pieces.push(new Rover(i, j + 4, yPos));
    }
    for(var j=0; j < Game.WARDEN_COUNT; j++) {
      var yPos = (i == Game.PLAYERS) ? 10 : 3;
      this.pieces.push(new Warden(i, j + 6, yPos));
    }
    for(var j=0; j < Game.ASSAULT_COUNT; j++) {
      var yPos = (i == Game.PLAYERS) ? 11 : 2;
      this.pieces.push(new Assault(i, j + 3, yPos));
    }
    for(var j=0; j < Game.DEFENDER_COUNT; j++) {
      var yPos = (i == Game.PLAYERS) ? 12 : 1;
      this.pieces.push(new Defender(i, j + 7, yPos));
    }
  }

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
