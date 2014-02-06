(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function () {
    this.snake = new Snakes.Snake();
    this.apples = [];
  };

  //gotta do
  Board.prototype.render = function(){
    var that = this;
    var string = ""
    console.log("in render");
    for(var i = 0; i < 50; i++){
      for(var j = 0; j < 50; j++){
        if(that.snake.pos[0] == i && that.snake.pos[1] == j){
          console.log("snake");
          string += "S     ";
        }else{
          string += ".     ";
        }
      }
      string += "<br>";
    }
    //string +="";

    return string;
  }

})(this);