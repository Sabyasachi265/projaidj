music1 = "";
music2 = "";
emts1 = "";
emts2 = "";
rightwristplayer = "";

leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreleftwrist = 0;
scorerightwrist = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 600, 500);
    emts1 = music1.isPlaying();
    emts2 = music2.isPlaying();
    fill("#92DB1A");
    stroke("#92DB1A");
    if(scoreleftwrist > 0.2){
        circle(leftwristX, leftwristY, 23);
        emts2.stop();
    

    if(emts1 == false){
        music1.play();
        document.getElementById("changer").innerHTML = "Harry Potter theme song";
    }
}

    if(scorerightwrist > 0.2){
        circle(rightwristX, rightwristY, 20);
        emts1.stop();

        if(emts2 == false){
            music2.play();
            document.getElementById("changer").innerHTML = "Peter Pan song";
        }
    }
}

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results){
    if(results.length > 0){
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("score of left wrist = " + scoreleftwrist);
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("score of right wrist = " + scorerightwrist)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.x;
        console.log("left wrist x = " + leftwristX);
        console.log("left wrist y = " + leftwristY);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightwristX);
        console.log("right wrist y = " + rightwristY);
    }
}

function play(){
    music1.play();
    music1.setVolume(1);
    music1.rate(1);
    music2.play()
    music2.setVolume(1);
    music2.rate(1);
}

