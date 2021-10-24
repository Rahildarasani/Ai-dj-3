song="";

function preload()
{
    song_1 = loadSound("song1.mp3");
    song_2 = loadSound("song2.mp3")
    song_3 = loadSound("song3.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play()
}

function stop()
{
    song.stop()
}