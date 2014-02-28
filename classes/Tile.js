// Constructor
var Tile = function(color, x, y, xLine, yLine) {
  this.initialize(color, x, y, xLine, yLine);
}

// Static Variables/Constants
Tile.TILE_WIDTH = 100;
Tile.TILE_HEIGHT = 100;
Tile.OPACITY = 0.4;
Tile.HIGHLIGHT_OPACITY = 0.3;
Tile.HIGHLIGHT_COLOR = "205, 92, 92";

var p = Tile.prototype = new createjs.Container();

Tile.prototype.Container_initialize = p.initialize;

// Methods
Tile.prototype.initialize = function(color, x, y, xLine, yLine) {
  this.Container_initialize();
  this.color = color;
  this.x = x;
  this.y = y;
  this.xLine = xLine;
  this.yLine = yLine;
  this.piece = null;
  this.drawGFX(this.color, true);
  this.highlighted = null;
  this.addEventListener("click", this.handleClick);
}

Tile.prototype.setPiece = function(piece) {
  this.removeChild(this.piece);
  this.piece = piece;
  this.piece.xLine = this.xLine;
  this.piece.yLine = this.yLine;
  this.addChild(this.piece);
}

Tile.prototype.highlightTile = function() {
  this.drawGFX(Tile.HIGHLIGHT_COLOR);
  this.highlighted = true;
}

Tile.prototype.unhighlightTile = function() {
  this.drawGFX(this.color, true);
  this.highlighted = false;
}

Tile.prototype.drawGFX = function(color, original) {
  original = (typeof original !== 'undefined') ? true : false;
  this.removeChild(this.shape);
  this.removeChild(this.piece);
  this.shape = new createjs.Shape();
  if(original) {
    this.shape.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
  } else {
    this.shape.graphics.beginFill("rgba(" + this.color + ", " + Tile.OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
    this.shape.graphics.beginFill("rgba(" + color + ", " + Tile.HIGHLIGHT_OPACITY + ")").drawRect(this.x, this.y, Tile.TILE_WIDTH, Tile.TILE_HEIGHT);
  }
  this.addChild(this.shape);
  this.addChild(this.piece);
}

Tile.prototype.handleClick = function(e) {
  var me = e.currentTarget;
  var pc = me.parent.clickedPiece;
  if(me.highlighted == true) {
    me.parent.unhighlightAllTiles();
    pc.tile.removePiece();
    pc.removeTile();
    me.setPiece(pc);
    pc.setTile(me);
    me.getStage().changeTurn();
  }
}

Tile.prototype.removePiece = function() {
  this.removeChild(this.piece);
  this.piece = null;
}
