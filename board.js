(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function () {
    this.snake = new Snakes.Snake();
    this.apples = [];
  };

  Board.prototype.render = function(){
    var that = this;
    var string = ""
    for(var i = 0; i < 50; i++){
      for(var j = 0; j < 50; j++){
        if(that.snake.pos[0] == i && that.snake.pos[1] == j){
          string += "S     ";
        }else if(that.apples.length > 0 && that.apples[0][0] == i && that.apples[0][1] == j){

          string += "A     ";
        }else{
          string += ".     ";
        }
      }
      string += "<br>";
    }

    return string;
  }

  Board.prototype.addApples = function(){
    console.log("in apples");
    var that = this;
    setInterval(function(){
      if(that.apples.length == 0){
        console.log("in apples interval");
        var applex = Math.floor(Math.random() * 50);
        var appley = Math.floor(Math.random() * 50);

        that.apples.push([applex, appley]);
      }
    }, 3000);
  }

})(this);