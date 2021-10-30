song="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;

function preload()
{
    song_1 = loadSound("song1.mp3");
    song_2 = loadSound("song2.mp3")
    song_3 = loadSound("song3.mp3")
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is intialized");
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        
        console.log(result);
        leftWrist_x= result[0].pose.leftWrist.x;
        leftWrist_x= result[0].pose.leftWrist.y;

        console.log("leftWrist_x = " + leftWrist_x + "leftWrist_y = " + leftWrist_y)

        rightWrist_x= result[0].pose.rightWrist.x;
        rightWrist_x= result[0].pose.rightWrist.y;

        console.log("rightWrist_x = " + rightWrist_x + "rightWrist_y = " + rightWrist_y)
    }
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song_1.play()
}

function stop()
{
    song_1.stop()
    song_2.stop()
    song_3.stop()
}