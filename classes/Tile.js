// Constructor
var Tile = function(color, x, y, xLine, yLine, rotate, speed) {
  createjs.Shape.call(this);
  this.color = color;
  this.x = x;
  this.y = y;
  this.regX = Math.random() * 1300;
  this.regY = Math.random() * 1300;
  this.xLine = xLine;
  this.yLine = yLine;
  this.rotate = rotate;
  if (!this.rotate) {
    this.size = 3;
  }
  this.rotateSpeed = speed;
  if (Math.random() > 0.4) {
    this.rotateSpeed = 0 - this.rotateSpeed;
  }
  this.init();
}

// Static Variables/Constants
Tile.TILE_WIDTH = 50;
Tile.TILE_HEIGHT = 50;
Tile.OPACITY = 0.4;

var p = Tile.prototype = new createjs.Shape();

// Methods
p.init = function() {
  var mRand = Math.random();
  if (this.size) {
    this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawCircle(this.x, this.y, this.size);
  } else if (mRand > .9) {
    this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawCircle(this.x, this.y, (Math.random() * 40));
  } else {
    this.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawPolyStar(this.x, this.y, Math.round(Math.random() * 50), Math.round(Math.random() * 10), Math.random(), Math.random() * 360);
    //.drawPolyStar(this.x, this.y, (Math.random() * 40, Math.random * 8, Math.random(), Math.random() * 360));
  }
  this.addEventListener("click", this.handleClick);
  this.addEventListener("tick", this.handleTick);
}

p.getRotate = function() {
  return this.rotate;
}

// Event Listeners
p.handleClick = function(e) {
  e.target.rotate = !e.target.rotate;
}
p.handleTick = function(e) {
  if (e.currentTarget.getRotate()) {
    e.currentTarget.rotation += e.currentTarget.rotateSpeed;
  }
}
