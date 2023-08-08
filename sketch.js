let sound, amplitude;

function preload() {
  sound = loadSound("NorthernFlickerIsolated.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background('rgb(226,219,207)');
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
  
  fill('#CE1C0F')  
  ellipse(width/2, height/2, size*200, size*200);
    
  fill('#C3B3B3')  
  ellipse(width/2, height/2, size*180, size*180);
  fill('#000000')  
  ellipse(width/2, height/2, size*100, size*100);
  fill('#D18F3F')  
  ellipse(width/2, height/2, size*80, size*80);
  fill('#DDCE04')  
  ellipse(width/2, height/2, size*50, size*50);
  fill('#000000')  
  ellipse(width/2, height/2, size*40, size*40);
      
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}