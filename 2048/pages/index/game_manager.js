const Grid = require("./grid.js")

function GameManager(size, startTiles = 2) {
  this.size = size;
  this.startTiles = startTiles;
}

GameManager.prototype = {
  setup: function() {
    this.grid = new Grid(this.size);
    this.addStartTiles();
    return this.grid.cells;
  },
  addStartTiles: function () {
    for (let tile = 0; tile < this.startTiles; tile++){
      this.addRondomTiles();
    }
  },
  addRondomTiles: function () {
    if (this.grid.cellAvailable()){
    const value = Math.random() < 0.6 ? 2 : 4
    //随机位置
    //x y
    const cell = this.grid.randomAvailabelCell(); 
    const tile = {
      x: cell.x,
      y: cell.y,
      value: value
    }
    this.grid.insertTile(tile);
    }
  }
}

module.exports = GameManager;