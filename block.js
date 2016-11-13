
var Block = function(x, y) {
    this.width = Constants.cell_width;
    this.height = Constants.cell_height;

    // positions
    this.x = x;
    this.y = y;

    this.moving = true; // wheather block is moving
    this.form = Constants.blocks[0];
}

Block.prototype.Init = function() {
    this._move();
}

Block.prototype.Update = function() {

}

Block.prototype._move = function() {
    if(this.y == Constants.height - this.height) {
        this.moving = false;
        game.CreateBlock();
        return;
    }

    this.y += this.height;
    setTimeout(this._move.bind(this), 1000);
}

Block.prototype.MoveLeft = function() {
    if(!this.moving) return;
    this.x -= this.width;
}

Block.prototype.MoveRight = function() {
    if(!this.moving) return;
    this.x += this.width;
}


Block.prototype.Paint = function(ctx) {
    ctx.fillStyle = 'black';

    var w = this.form[0].length;
    var h = this.form.length;

    for(i=0; i<w; i++)
        for(j=0; j<h; j++){
            if(this.form[i][j] == 1)
                ctx.fillRect(this.x + this.width * (i-2), this.y + this.height * (j-2), this.width, this.height);
        }
}