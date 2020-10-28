let img;
function preload() {
  img = loadImage('map.png');
  img3 = loadImage ('pin2.png');
 // img2 = loadImage ('水')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //image(img2, 0, 0);
  image (img, 0, 0 );
  imageMode (CENTER)
  tint (0,190)
  image (img3, 1303, 237, width/21,height/12,)
  image (img3, 387, 216, width/21,height/12,)
  image (img3, 726, 190, width/21,height/12,)
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed () {
  console.info (mouseX, mouseY)
}



