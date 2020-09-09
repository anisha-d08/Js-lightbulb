
function switch_status(s) {
    if(s == 1){
        pic="images/off.png";
    }
    else{
        pic = "images/on.png"
    }
    document.getElementById('bulb_img').src = pic;
}
