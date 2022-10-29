song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("Enemy.mp3");
    song2= loadSound("Star_Wars_Duel_of_the_Fates_Theme_Song.mp3");
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}