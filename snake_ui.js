(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var View = Snakes.View = function ($el) {
    this.$el = $el;
    this.board = null;
  };

  View.prototype.start = function(){
    this.board = new Snakes.Board();
    this.step();
    this.board.addApples();
    console.log("startmethod");
    var that = this;
    $(document).on("keydown", function(e){
      if(e.keyCode == 37){
        that.board.snake.turn("W");
      }else if(e.keyCode == 38){
        that.board.snake.turn("N");
      }else if(e.keyCode == 39){
        that.board.snake.turn("E");
      }else if(e.keyCode == 40){
        that.board.snake.turn("S");
      }
    });
  }

  View.prototype.step = function(){
    var that = this;
    setInterval(function(){
      that.board.snake.move();
      that.$el.html(that.board.render());
    }, 500);
  }

})(this);