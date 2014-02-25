$(document).ready(function() {
  // Add the classes to the DOM
  $('head').append("<script type='text/javascript' src='classes/Tile.js'></script>");
  $('head').append("<script type='text/javascript' src='classes/Board.js'></script>");
  $('head').append("<script type='text/javascript' src='classes/Piece.js'></script>");
  $('head').append("<script type='text/javascript' src='classes/Assault.js'></script>");
  $('head').append("<script type='text/javascript' src='classes/Game.js'></script>");

  // Create a game object
  var game = new Game('mainCanvas');
  createjs.Ticker.addEventListener("tick", function(e) {
    game.update();
  });
});
