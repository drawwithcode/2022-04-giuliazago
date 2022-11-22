const urlString = window.location.href; //collect the url
let url = new URL(urlString);

//define a set of variables
let donuts = [];
let speed = 10;
let radius = 30;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background("black");
  colorMode(HSB);
  setMoveThreshold(0.001);

  // request permissions on iOS
  canvas.mousePressed(function() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission();
    }
  });
}

function draw() {

    push();
    textSize(15);
    fill("lightblue");
    text("🍩 CLICCA PER CREARE LE TUE CIAMBELLE 🍩  ", 40, 55)
    text("Muovi il telefono e crea il tuo disegno:", 80, 90);
    text("fa' attenzione a non farle uscire dallo schermo! 😉", 50, 110);
    pop();

  for (let i = 0; i < donuts.length; i++) {
    donuts[i].display();
    donuts[i].mapPositions();
    donuts[i].wrapAround();
  }
}

//tap the screen to make a new donut appear
function touchStarted() {
  let b = new Donut(mouseX, mouseY);
  donuts.push(b);
}

function touchMoved() {
  return false;
}

class Donut {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mapPositions() {
    this.x = this.x + map(rotationY || 0, -180, 180, -speed, speed);
    this.y = this.y + map(rotationX || 0, -180, 180, -speed, speed);
  }

//wrap objects around the screen
  wrapAround() {
    if (this.x < -30) {
      this.x = this.x + windowWidth + radius;
    } else if (this.x > windowWidth + radius) {
      this.x = this.x - windowWidth - radius;
    }

    if (this.y < 0) {
      this.y = this.y + windowHeight;
    } else if (this.y > windowHeight) {
      this.y = this.y - windowHeight;
    }

  }

  //design the style of the donuts
  display() {
    push();
    noFill();
    strokeWeight(radius/6)
    stroke(random(0, 255), 20, 200); //random function to change the color
    ellipse(this.x, this.y, radius);
    pop();
  }
}
