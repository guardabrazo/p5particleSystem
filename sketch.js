var circles = []; 
var circleNumber = 50;
var maxDistance = 150;
var c;

function setup() {
  c = createCanvas(800, 600);
  // Create objects
  for (var i=0; i<circleNumber; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(255);
  for (var i=0; i<circles.length; i++) {
    circles[i].move();
    // circles[i].display();
  }

  for (var i = 0; i < circles.length; i++) {
    for (var j = 0; j < circles.length; j++) {
      var d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
      stroke(map(d, 0, maxDistance, 0, 255));
      if(d < maxDistance){
        line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);    
      }
      
    }
  }
}

// Circle class
function Circle() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 5;

  var xSpeed = random(-1, 1)*this.speed;
  var ySpeed = random(-1, 1)*this.speed;

  this.move = function() {
    this.x += xSpeed;
    this.y += ySpeed;
    
    if(this.x < 0 || this.x > width){
      xSpeed *= -1;
    }
    
    if(this.y < 0 || this.y > height){
      ySpeed *= -1;
    }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
