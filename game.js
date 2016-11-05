
var Game = function(canvas){
    this.width = 480;
    this.height = 640;
    this.columns = 10;
    this.rows = 7;
    this.cell_width = 64;
    this.cell_height = 64;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.drawRect = function(x, y, w, h, col){
        this.ctx.fillStyle(col);
        this.ctx.fillRect(x, y, x + w, y + h);
    }

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
}

Game.prototype.Update = function() {

    this.Paint();
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
}