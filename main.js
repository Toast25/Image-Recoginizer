Webcam.set({
    width:350,
height:300,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("webcam");
Webcam.attach('#webcam');
function snap(){
    Webcam.snap(function (any){
    document.getElementById("picture").innerHTML= "<img id='img_1' src='" +any+ "'/>";
    });}
    console.log("ml5 version", ml5.version);
model_1 =ml5imageClassifier("___model.json", load);

function load(){
    console.log("the model has been loaded");
}
function check() {
    image = document.getElementById("img_1");
    model_1.classify(image, gotresults);
}
function gotresults(error,result){
if (error) {
    console.log(error);
} else {
    console.log(result);
    document.getElementById("span1").innerHTML = result[0].label;
    document.getElementById("span2").innerHTML = result[0].confidence.toFixed(2);
}
}
