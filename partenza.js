const urlString = window.location.href; //collect the url of the page
let url = new URL(urlString);

let myBgColor = "lightblue";

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  textStyle("bold");
  setShakeThreshold(35);
}

function draw() {
    background(myBgColor);

    push();
    textSize(35);
    textFont("Inter");
    fill("white");
    text("🧞‍♀️🧞🧞‍♂️ Shake 🧞‍♀️🧞🧞‍♂️ ", width/2, height/6);
    pop();

    push();
    textSize(15);
    textFont("Inter");
    textStyle(BOLD);
    fill("#add8e6");
    text("Tieni il telefono appoggiato su un piano", width/2, height/2.12);
    text("e trascina lo schermo per iniziare!", width/2, height/2);
    pop();
}

//shake the mobile to make the message appear
function deviceShaken() {
  myBgColor +=255; //capire che valore mettere
}

//link the to pages
function touchMoved() {
  window.open(`${url}page.html?color=${myBgColor}`, "_self"); //_self to open it in the same window
}

// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}