
var Game = function(canvas){
    this.width = Constants.width; // window width
    this.height = Constants.height; // window height
    this.columns = 20;
    this.rows = 15;

    this.blocks = []; // list of blocks
    this.active_block = null;

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.drawRect = function(x, y, w, h, col){
        this.ctx.fillStyle(col);
        this.ctx.fillRect(x, y, x + w, y + h);
    }

    document.addEventListener("keydown", this.KeyDown.bind(this), false);

}

Game.prototype.Start = function() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.map = [];
    for(var i=0; i<this.rows; i++){
        this.map[i] = []
        for(var j=0; j<this.columns; j++)
            this.map[i][j] = 0;
    }

    if(typeof this.game_loop != "undefined")
        clearInterval(this.game_loop);
    this.game_loop = setInterval(this.Update.bind(this), 60);
    this.CreateBlock();
}

Game.prototype.KeyDown = function(event) {
    var key = event.keyCode;

    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    switch (key) {
        case LEFT:
            this.active_block.MoveLeft();
            break;
        case RIGHT:
            this.active_block.MoveRight();
            break;

        default:
            break;
    }
}

Game.prototype.Update = function() {

    this.Paint();

    // update all the blocks
    this.blocks.forEach(function(element) {
        element.Update()
    }, this);
}

Game.prototype.Paint = function() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(0, 0, this.width, this.height);



    this.ctx.fillStyle = 'black';
    for(var i=0; i<this.rows; i++)
        for(var j=0; j<this.columns; j++){
            if(this.map[i][j] == 0) continue;
            var _x = i*this.cell_width;
            var _y = j*this.cell_height;

            this.ctx.fillRect(_x, _y, _x + this.cell_width, _y + this.cell_height);
        }

    this.blocks.forEach(function(element) {
        element.Paint(this.ctx);
    }, this);
}

Game.prototype.CreateBlock = function() {
    var block = new Block(Constants.width/2 - Constants.cell_width,-Constants.cell_height);
    this.blocks.push(block);
    this.active_block = block;
    block.Init();
    return block;
}