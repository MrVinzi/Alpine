
var currentPosX = 0;

function clickPrev(e) {
    var posX = currentPosX + 640;
    if (posX>(valuePicture()*(-640)) && posX<=0) {
        currentPosX = posX;
        setTransition(posX);
    }
}

function clickNext(e) {
    var posX = currentPosX - 640;
    if (posX>(valuePicture()*(-640)) && posX<=0) {
    currentPosX = posX;
    setTransition(posX);
   }
}



function setTransition(p) {
    if (currentPosX>(valuePicture()*(-640)) && currentPosX<=0) {
    var elm = document.getElementById('banner_list');
    elm.style.transform = "translateX(" + p + "px)";
    console.log("translateX(" + p + ")");
    } 
}

function valuePicture() {
    var q = document.getElementsByClassName('banner-item');
    l = q.length;
    return l;
}
