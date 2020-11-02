let img;
let canvas2;



function preload() {
  img = loadImage('mainAssets/map.png');
  img3 = loadImage ('mainAssets/pin2.png');
  myFont = loadFont('mainAssets/selima_.otf');
  img4 = loadImage ('mainAssets/plane.png')
 //img2 = createImg('water.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255)


//   canvas2 = createGraphics (windowWidth, windowHeight)
// canvas2.img4 (0)

//img2.position (300,400,50,20);
  image (img, 0, 0 );
  imageMode (CENTER)
 
  tint (0,190)
  //image (img3, 1303, 237, width/21,height/12,)
 image (img3, 1303, 237, width/21,height/12,);

  image (img3, 387, 216, width/21,height/12,)
  image (img3, 726, 190, width/21,height/12,)
  
}
  
  

function draw () {
  textSize(80);
  textFont (myFont)
  textAlign (CENTER)
text('Point & Go!', width/2, height /2);
//image (img4, mouseX, mouseY)

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed () {
  console.info (mouseX, mouseY)
}


