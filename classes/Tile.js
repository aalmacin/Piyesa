// Constructor
var Tile = function(color, x, y, xLine, yLine) {
  createjs.Shape.call(this);
  this.color = color;
  this.x = x;
  this.y = y;
  this.xLine = xLine;
  this.yLine = yLine;
  //this.rotate = false;
  this.init();
}

// Static Variables/Constants
Tile.TILE_WIDTH = 100;
Tile.TILE_HEIGHT = 100;
Tile.OPACITY = 0.4;

var p = Tile.prototype = new createjs.Shape();

// Methods
p.init = function() {
  this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
  this.addEventListener("click", this.handleClick);
  this.addEventListener("tick", this.handleTick);
}

/*
p.getRotate = function() {
  return this.rotate;
}
*/

// Event Listeners
p.handleClick = function(e) {
  //e.target.rotate = !e.target.rotate;
}
p.handleTick = function(e) {
  /*
  if (e.currentTarget.getRotate()) {
    e.currentTarget.rotation += 1;
    e.currentTarget.regX = Tile.TILE_WIDTH / 2;
    e.currentTarget.regY = Tile.TILE_HEIGHT / 2;
  }
  */
}
