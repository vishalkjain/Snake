(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function () {
    this.dir = "N";
    this.segments = [];
    this.pos = [250,250];
  };

  Snake.prototype.move = function(){
    switch(this.dir){
    case "N":
      this.pos[1] -= 1;
      break;
    case "S":
      this.pos[1] += 1;
      break;
    case "E":
      this.pos[0] += 1;
    case "W":
      this.pos[0] -= 1;
    }
  }

  Snake.prototype.turn = function(dir){
    this.dir = dir;
  }

})(this);