var TILE_WIDTH = 100;
var TILE_HEIGHT = 100;
var OPACITY = 0.4;
var Tile = function(color, x, y) {
  createjs.Shape.call(this);
  this.color = color;
  this.x = x;
  this.y = y;
  this.init();
}
var p = Tile.prototype = new createjs.Shape();

p.init = function() {
  this.graphics.beginFill("rgba(" + this.color + ", " + OPACITY + ")").drawRect(this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
  this.addEventListener("click", this.handleClick);
}

p.handleClick = function(e) {
  console.log("Clicked tile number" + e.target.id);
}
