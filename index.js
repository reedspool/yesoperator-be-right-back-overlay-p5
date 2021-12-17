const bannerText = 'Me Write Hack';
// const bannerText = 'Be Right Back!';
const bannerParts = bannerText.split(" ");
let coolFont;
let ys;
let phaseX = 500;
let phaseY = 450;
let receiverForegroundImage;
let baseForegroundImage;
let exclamationStrokeImage;
let exclamationDotImage;
function preload() {
  coolFont = loadFont('fonts/Sprat/web/SpratRegular.woff');
  // Put images in /home/human/projects/be-right-back-overlay/opie/
  receiverForegroundImage = loadImage("opie/receiver-foreground.png");
  baseForegroundImage = loadImage("opie/base-foreground.png");
  exclamationStrokeImage = loadImage("opie/exclamation-stroke.png");
  exclamationDotImage= loadImage("opie/exclamation-dot.png");
}
function setup() {
  createCanvas(400, 400);

  ys = [
    1 * height / 3,
    2 * height / 3,
    3 * height / 3
  ];

}



let time = 0;
function draw() {
  clear();

  image(receiverForegroundImage, 50, 50);
  image(baseForegroundImage, 53, 90);
  image(exclamationStrokeImage, (94.5 + 3) , (155 - 30) );
  image(exclamationDotImage, 94.5 , 155 );

  image(exclamationStrokeImage, (111.5 + 3) , (155 - 30) );
  image(exclamationDotImage, 111.5 , 155 );

  image(exclamationStrokeImage, (mouseX + 3) - 10, (mouseY - 30) - 10);
  image(exclamationDotImage, mouseX - 10, mouseY - 10);


  colorMode(HSB);
  // color: hsl(142, 22%, 44%);
  // hsl(115, 31%, 84%);
  fill(142, 22, 44);
  textFont(coolFont);
  textSize(width / 4)
  textAlign(LEFT, BOTTOM)

  time += deltaTime;

  for (var i = 0; i < bannerParts.length; i++) {
    // deltaY = map(sin(time / phaseY), -1, 1, -5, 5);
    deltaY = 0;
    deltaX = map(cos(time / phaseX + 5 * i), -1, 1, -25, 25);
    text(bannerParts[i], 25 + deltaX , ys[i] + deltaY);
  }
}
