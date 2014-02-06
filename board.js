(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function () {
    this.snake = new Snake();
    this.apples = [];
  };

  Board.prototype.render = function(){

  }

})(this);