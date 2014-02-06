(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function () {
    this.dir = "N";
    this.segments = [];
    this.pos = [25,25];
  };

  Snake.prototype.move = function(){
    switch(this.dir){
    case "N":
      this.pos[0] -= 1;
      break;
    case "S":
      this.pos[0] += 1;
      break;
    case "E":
      this.pos[1] += 1;
      break;
    case "W":
      this.pos[1] -= 1;
      break;
    }
  }

  Snake.prototype.turn = function(dir){
    this.dir = dir;
    console.log(this.dir);
  }

})(this);