var Tile = function(color, x, y) {
  createjs.Shape.call(this);
  this.color = color;
  this.x = x;
  this.y = y;
  this.init();
}
var p = Tile.prototype = new createjs.Shape();

p.init = function() {
  this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
  this.addEventListener("click", this.handleClick);
}

p.handleClick = function(e) {
  console.log("Clicked tile number" + e.target.id);
}
Tile.TILE_WIDTH = 100;
Tile.TILE_HEIGHT = 100;
Tile.OPACITY = 0.4;
