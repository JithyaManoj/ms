function preload(){
    moustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
nosex="";
nosey="";

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posemodel=ml5.poseNet(video,modelloaded);
    posemodel.on("pose",getr);
}
function modelloaded(){
    console.log("done and dusted");
}
function getr(results){
    
    if(results.length>0){
       // console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("x:",nosex,"y:",nosey);
    }
}




function draw(){
    image(video,0,0,300,300);
    image(moustache,nosex-15,nosey+5,30,30);
}
 
function takepic(){
    save("moustache.png");
}