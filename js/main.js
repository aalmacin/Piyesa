$(document).ready(function() {
  // Add the classes to the DOM
  $('head').append("<script type='text/javascript' src='classes/Tile.js'></script>");
  $('head').append("<script type='text/javascript' src='classes/Board.js'></script>");

  // Create the stage
  var stage = new createjs.Stage('mainCanvas');

  // Create the board object and add it to the Canvas
  var board = new Board();
  stage.addChild(board);

  // Event Listener that updates the stage all the time
  createjs.Ticker.addEventListener("tick", function(e) {
    stage.update();
  });
});
