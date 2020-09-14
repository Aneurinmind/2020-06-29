function PlaySound(bgm_1) {
    var thissound=document.getElementById(bgm_1);
    thissound.play();
}

function StopSound(bgm_1) {
    var thissound=document.getElementById(bgm_1);
    thissound.pause();
    thissound.currentTime = 0;
}