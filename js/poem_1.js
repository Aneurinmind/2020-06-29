var obj_1 = document.getElementById("obj_1");


function PlaySound(bgm_1) {
    var thissound=document.getElementById(bgm_1);
    thissound.play();
}

function StopSound(bgm_1) {
    var thissound=document.getElementById(bgm_1);
    thissound.pause();
    thissound.currentTime = 0;
}

var isPlaying =false; 
	function readPlay(bgm_2){
	var player = document.getElementById('bgm_2');
	if (isPlaying) {
	// 如果正在播放, 停止播放并停止读取此音乐文件
	    player.pause();  
	} else {
	    player.play();
	}
	isPlaying = !isPlaying;
	}

