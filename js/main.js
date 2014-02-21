$(document).ready(function() {
  var stage = new createjs.Stage('mainCanvas');
  var board = new Board();
  stage.addChild(board);
  createjs.Ticker.addEventListener("tick", function(e) {
    stage.update();
  });
});
