
var Block = function(x, y) {
    this.width = 64;
    this.height = 64;

    // positions
    this.x = x;
    this.y = y;

    this.moving = true; // wheather block is moving
}

Block.prototype.Init = function() {
    this._move();
}

Block.prototype.Update = function() {

}

Block.prototype._move = function() {
    if(this.y == Constants.height - this.height) {
        this.moving = false;
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
    ctx.fillRect(this.x, this.y, this.width, this.height);
}