NoseX=0;
NoseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function  setup(){
canvas=createCanvas(400,350);
canvas.center();
canvas.position(500,200);
video=createCapture(VIDEO);
video.size(400,350);
video.hide();
}
function draw(){
    image(video,0,0,400,350); 
    image(clown_nose,NoseX,NoseY,30,30);
    }