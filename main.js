var game;
window.onload = function (){
    var canvas = document.getElementById('canvas');
    game = new Game(canvas);
    game.Start();
}