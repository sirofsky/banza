var value1;
var value2;
var value3;
var wheelconstrained;
var d;
var img0;
var imgflashlight;
var wheel = 5;
var small = 2;
var large = 15;
var v;
var z;
var rect0;
var rect02;
var rect1;
var rect12;
var rect2;
var rect22;
var rect3;
var rect32;
var rect4;
var rect42;
var rect5;
var rect52;
var rect6;
var rect62;
var rect7;
var rect72;
var depth = 1;
var imgblood;
var bleeding = false;
var imgstars;
var starss = false;
var eventnum = 0;

var cx, cy;
var num = 6;
var test, w, a;
var bloodArray = [];
var prevPos;
var maxSize = [];

var Eye, e1, e2;

var stars = [];
var speed = 4;


function preload(){
    imgtitle = loadImage("theBanzaText-01.png");
    imgtitle2 = loadImage("TheBanzaText02.png");
    imgtitle3 = loadImage("TheBanzaText-03.png");
    imgflashlight = loadImage("Flashlight2-01.png");
    imgcast1 = loadImage("Cast1.png");
    imgcreative1 = loadImage("Creative1.png");
    imgdates = loadImage("dates-01.png");
    imgsummary = loadImage("summary.png");
    imgscroll = loadImage("Banzazoom-01.png");
    imgspace = loadImage("banzaspace-01.png");
    imgeyes = loadImage("spookyshadow.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  frameRate(60);
  background(0);
  // noStroke();
  rectMode(CENTER);
  imageMode(CENTER);
  wheelconstrained=3;

  imgblood = createGraphics(windowWidth,windowHeight);
  prevPos = createVector(0,0);

      cx = width/2;
      cy = height/2;
      for(var i=0; i<num; i++) {
       bloodArray[i] = createVector(random(-400, 400) + cx, 0);
       maxSize[i] = random(0,600);
     }
     noStroke();

     for (var i = 0; i < 400; i++) {
      stars[i] = new Star();
   }

}

function squaretunnel(){
  v = .25;
  z = 0;
    rect0 = (windowWidth*.15+(windowWidth-mouseX)*.7);
    rect02 = (windowHeight*.15+(windowHeight-mouseY)*.7);
    rect1 = (windowWidth*.2+(windowWidth-mouseX)*.6);
    rect12 = (windowHeight*.2+(windowHeight-mouseY)*.6);
    rect2 = (windowWidth*.25+(windowWidth-mouseX)*.5);
    rect22 = (windowHeight*.25+(windowHeight-mouseY)*.5);
    rect3 = (windowWidth*.3+(windowWidth-mouseX)*.4);
    rect32 = (windowHeight*.3+(windowHeight-mouseY)*.4);
    rect4 = (windowWidth*.35+(windowWidth-mouseX)*.3);
    rect42 = (windowHeight*.35+(windowHeight-mouseY)*.3);
    rect5 = (windowWidth*.4+(windowWidth-mouseX)*.2);
    rect52 = (windowHeight*.4+(windowHeight-mouseY)*.2);
    rect6 = (windowWidth*.45+(windowWidth-mouseX)*.1);
    rect62 = (windowHeight*.45+(windowHeight-mouseY)*.1);
    rect7 = (windowWidth/2);
    rect72 = (windowHeight/2);
    depth=1;
      strokeWeight(100);
        fill(value1*(.5*v), value2*(.5*v), value3*(.5*v));
        stroke(value1*(.5*v), value2*(.5*v), value3*(.5*v));
        rect(rect0,rect02,windowWidth*.3*depth,windowHeight*.3*depth); //rect1
        image(imgtitle3,windowWidth*.15+(windowWidth-mouseX)*.7,windowHeight*.15+(windowHeight-mouseY)*.7,(windowWidth/1500)*1000, (((windowWidth/1500)*1000)/2))
        noFill();
        stroke(z);
        rect(rect1,rect12,windowWidth*.4*depth,windowHeight*.4*depth); //rect2
        stroke(value1*(1.5*v), value2*(1.5*v), value3*(1.5*v));
        rect(rect2,rect22,windowWidth*.5*depth,windowHeight*.5*depth); //rect3
        stroke(z);
        rect(rect3,rect32,windowWidth*.6*depth,windowHeight*.6*depth); //rect4
        stroke(value1*(2.5*v), value2*(2.5*v), value3*(2.5*v));
        rect(rect4,rect42,windowWidth*.7*depth,windowHeight*.7*depth); //rect5
        stroke(z);
        rect(rect5,rect52,windowWidth*.8*depth,windowHeight*.8*depth); //rect6
        stroke(value1*(3.5*v), value2*(3.5*v), value3*(3.5*v));
        rect(rect6,rect62,windowWidth*.9*depth,windowHeight*.9*depth); //rect7
        if (keyIsDown(32)){}
        else{
          image(imgspace,(windowWidth*.45+(windowWidth-mouseX)*.1),(windowHeight*.005+(windowHeight-mouseY)*.1),windowWidth/8,windowWidth/24);
        }
        stroke(z);
        rect(rect7,rect72,windowWidth*depth,windowHeight*depth); //rect8
  strokeWeight(1);
  // stroke(0);
  // line((windowWidth*.15+(windowWidth-mouseX)*.7)+.15*windowWidth+120,(windowHeight*.15+(windowHeight-mouseY)*.7)+.15*windowHeight+120,windowWidth,windowHeight);
  // line((windowWidth*.15+(windowWidth-mouseX)*.7)+.15*windowWidth+120,(windowHeight*.15+(windowHeight-mouseY)*.7)-.15*windowHeight-120,windowWidth,0);
  // line((windowWidth*.15+(windowWidth-mouseX)*.7)-.15*windowWidth-120,(windowHeight*.15+(windowHeight-mouseY)*.7)+.15*windowHeight+120,0,windowHeight);
  // line((windowWidth*.15+(windowWidth-mouseX)*.7)-.15*windowWidth-60,(windowHeight*.15+(windowHeight-mouseY)*.7)-.15*windowHeight-60,0,0);
  // strokeWeight(120);
}

function info(){
  image(imgtitle, windowWidth*.35+(windowWidth-mouseX)*.3,windowHeight*.35+(windowHeight-mouseY)*.3, (windowWidth/1500)*750, (((windowWidth/1500)*750)/2));
}

function mouseWheel(event) {
  d = event.delta;
  small = 2.5;
  large = 12;
  wheel = wheel + d/400;
  // print(d);
  wheelconstrained = constrain(wheel, small, large);
  // print(wheel);

}
function cast(){
  image(imgcast1,(windowWidth*.45+(windowWidth-mouseX)*.15+(windowWidth*.4)),(windowHeight*.45+(windowHeight-mouseY)*.15)-windowHeight/20,windowWidth/5,windowWidth/2.25);
};
function creative(){
  image(imgcreative1,(windowWidth*.45+(windowWidth-mouseX)*.15-(windowWidth*.45)),(windowHeight*.45+(windowHeight-mouseY)*.15)-windowHeight/20,windowWidth/5,windowWidth/2.25);
}
function dates(){
  image(imgdates,(windowWidth*.45+(windowWidth-mouseX)*.1)-(windowWidth/30)*5,(windowHeight*.45+(windowHeight-mouseY)*.1)+(windowHeight/30)*10,windowWidth/6, windowWidth/7);
}
function summary(){
  image(imgsummary,(windowWidth*.45+(windowWidth-mouseX)*.1)+(windowWidth/30)*3,(windowHeight*.45+(windowHeight-mouseY)*.1)+(windowHeight/30)*10, windowWidth/3.75, windowWidth/8.5);
}

function draw() {
background(value1,value2,value3,.2);
squaretunnel();

if(eventnum == 0){
  brightinfo();}

eval("effect" + eventnum)();
if (eventnum == 1){
  brightinfo();
}
lightning();
brighter();
if (frameCount < 120){
image(imgscroll, mouseX, mouseY, windowWidth/7,windowWidth/21)
}

}


function brighter(){

  image(imgflashlight,mouseX,mouseY,wheelconstrained*windowWidth,wheelconstrained*windowWidth);
}
function brightinfo(){
  if (keyIsDown(32)){
    image(imgtitle2, windowWidth*.35+(windowWidth-mouseX)*.3,windowHeight*.35+(windowHeight-mouseY)*.3, (windowWidth/1500)*750, (((windowWidth/1500)*750)/2));
  }
}
function lightning(){
    if (keyIsDown(32)){
      noStroke();
      v=1;
      z=255;
      value1=255;
      value2=255;
      value3=255;
      depth=2;
      // image(imgcast2,(windowWidth/5)*4.4,(windowHeight/2),windowWidth/5,windowWidth/2.25);
      // image(imgcreative2,(windowWidth/5)*.6,(windowHeight/2),windowWidth/5,windowWidth/2.25);
      // image(imgdates2,(windowWidth/30)*11,(windowHeight/6)*5,windowWidth/6, windowWidth/7);
      // image(imgsummary2,(windowWidth/30)*18.5,(windowHeight/120)*102, windowWidth/3.75, windowWidth/8.5);
      // filter(THRESHOLD);
      frameRate(60);
    }
    else{
      value1=(150/large)*wheelconstrained/2;
      value2=(150/large)*wheelconstrained/2;
      value3=(150/large)*wheelconstrained/2;

      frameRate(60);
      info();
      cast();
      creative();
      dates();
      summary();
      stroke(0);
      strokeWeight(100);
      rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    }
}


function effect0(){
image(imgtitle2, windowWidth*.35+(windowWidth-mouseX)*.3,windowHeight*.35+(windowHeight-mouseY)*.3, (windowWidth/1500)*750, (((windowWidth/1500)*750)/2));
  if(bleeding){

    for(var i=0; i<num; i++) {
    prevPos.x = bloodArray[i].x;
    prevPos.y = bloodArray[i].y;
    bloodArray[i].x += random(-.75, .75);
    bloodArray[i].y += random(0,1);
    w = abs(8*(maxSize[i] / (bloodArray[i].y + 60)));
    a = map(bloodArray[i].y, maxSize[i], 0, 0, 200);
    imgblood.strokeWeight(w);
    imgblood.stroke(250,0,0,a);
    if (bloodArray[i].y < maxSize[i]) {
      imgblood.line(prevPos.x, prevPos.y, bloodArray[i].x, bloodArray[i].y);
    } else {
      bloodArray[i] = createVector(random(-windowWidth/2, windowWidth/2) + cx, 0);
      maxSize[i] = random(100,height*.8);
    }
  }
    image(imgblood,windowWidth/2,windowHeight/2);
  }

}


function effect1(){
  rectMode(CENTER);
  imgstars = createGraphics(windowWidth*2,windowHeight*2);
  if(starss){
    imgstars.fill(0, 100);
    imgstars.background(0);
    image(imgtitle2, windowWidth*.35+(windowWidth-mouseX)*.3,windowHeight*.35+(windowHeight-mouseY)*.3, (windowWidth/1500)*750, (((windowWidth/1500)*750)/2));

    // imgstars.translate(width / 2, height / 2);
    imgstars.fill(255);
    for (var i = 0; i < stars.length; i++) {
     stars[i].update();
     stars[i].show();
 }
}
image(imgstars,(windowWidth*.45+(windowWidth-mouseX)*.2),(windowHeight*.5+(windowHeight-mouseY)*.2), windowWidth*2,windowHeight*2);

  }


function Star() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

    this.update = function() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, width, width*2);
        var sy = map(this.y / this.z, 0, 1, height, height*2);
        var r = map(this.z, 0, width, 10, 0);
        imgstars.ellipse(sx, sy, r, r);
    }
}

function effect2(){
  if(eyes){

    image(imgeyes, windowWidth*.15+(windowWidth-mouseX)*.7, windowHeight*.15+(windowHeight-mouseY)*.7, windowWidth/4, windowWidth/6);
    rect0 = (windowWidth*.15+(windowWidth-mouseX)*.7);
    rect02 = (windowHeight*.15+(windowHeight-mouseY)*.7);
    rect1 = (windowWidth*.2+(windowWidth-mouseX)*.6);
    rect12 = (windowHeight*.2+(windowHeight-mouseY)*.6);
    rect2 = (windowWidth*.25+(windowWidth-mouseX)*.5);
    rect22 = (windowHeight*.25+(windowHeight-mouseY)*.5);
    rect3 = (windowWidth*.3+(windowWidth-mouseX)*.4);
    rect32 = (windowHeight*.3+(windowHeight-mouseY)*.4);
    rect4 = (windowWidth*.35+(windowWidth-mouseX)*.3);
    rect42 = (windowHeight*.35+(windowHeight-mouseY)*.3);
    rect5 = (windowWidth*.4+(windowWidth-mouseX)*.2);
    rect52 = (windowHeight*.4+(windowHeight-mouseY)*.2);
    rect6 = (windowWidth*.45+(windowWidth-mouseX)*.1);
    rect62 = (windowHeight*.45+(windowHeight-mouseY)*.1);
    rect7 = (windowWidth/2);
    rect72 = (windowHeight/2);
    depth=1;
      strokeWeight(100);
        noFill();
        stroke(z);
        rect(rect1,rect12,windowWidth*.4*depth,windowHeight*.4*depth); //rect2
        stroke(220*(1.5*v), 0*(1.5*v), 0*(1.5*v));
        rect(rect2,rect22,windowWidth*.5*depth,windowHeight*.5*depth); //rect3
        stroke(z);
        rect(rect3,rect32,windowWidth*.6*depth,windowHeight*.6*depth); //rect4
        stroke(220*(2.5*v), 0*(2.5*v), 0*(2.5*v));
        rect(rect4,rect42,windowWidth*.7*depth,windowHeight*.7*depth); //rect5
        stroke(z);
        rect(rect5,rect52,windowWidth*.8*depth,windowHeight*.8*depth); //rect6
        stroke(220*(3.5*v), 0*(3.5*v), 0*(3.5*v));
        rect(rect6,rect62,windowWidth*.9*depth,windowHeight*.9*depth);

        image(imgtitle, windowWidth*.35+(windowWidth-mouseX)*.3,windowHeight*.35+(windowHeight-mouseY)*.3, (windowWidth/1500)*750, (((windowWidth/1500)*750)/2));
  }
}

function keyPressed(){
  if (keyCode == 32){
    eventnum = floor(random(0,3));
    print(eventnum);
    bleeding = true;
    eyes = true;
    starss = true;
  }
}
function keyReleased(){
  if (keyCode == 32){
    eyes = false;
    starss = false;
    bleeding = false;
    imgblood = createGraphics(windowWidth,windowHeight);
    for(var i = 0; i<bloodArray.length; i++){
      bloodArray[i] = createVector(random(-400, 400) + cx, 0);
      maxSize[i] = random(0,600);
    imgstars = createGraphics(windowWidth,windowHeight);

    }
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    imgblood = createGraphics(windowWidth,windowHeight);
}

// function keyPressed(){
//     if(keyCode == 13){
//   saveCanvas('TheBanzaArt', 'png');
//     }
//   }
