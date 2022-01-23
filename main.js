noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){
canvas = createCanvas(550, 450);
canvas.position(550, 100);
video = createCapture(VIDEO);
video.size(500, 500);
 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log ("harnoor pagle hai");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log( " leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " difference = " + difference );


    }
}

function draw() {

    background("#4287f5");

    document.getElementById("noor").innerHTML = "width and height of sqaur will be = " + difference + "px";
    fill("green");
    stroke("red");
    square(noseX , noseY , difference);



}


