var theCount; //bộ đếm
var alarm = document.getElementById("alarm"); //âm báo
var panel = document.getElementById("panel");
var panel2 = document.getElementById("panel2");
var turnOff = document.getElementById("turn-off"); //tắt bảng báo
var turnOffHor = document.getElementById("closing"); //tắt hết tất cả
var detonate = document.getElementById("detonate"); //báo nổ :))
var again = document.getElementById("again"); 
var time = document.getElementById("time");
var cover = document.getElementById("cover"); //hộp mở
var btn = document.getElementById("activate");
var abort = document.getElementById("abort");
var no = document.getElementById("no");
var reload = document.getElementById("restart");
var mute = document.getElementById("mute");

alarm.volume = 0.5; //âm lượng

//đếm số nếu thời gian về 0
function showCountDown() {
	time.innerText = time.innerText - 1;
	if (time.innerText == 0) {
		clearInterval(theCount);
		time.classList.add("crono");
		abort.classList.add("hide");
        no.classList.add("hide");
        again.classList.add("hide");
        
		
        detonate.classList.add("show");
		setTimeout(function () {
			turnOff.classList.add("close");
			turnOffHor.classList.add("close");
			reload.classList.add("show");
			alarm.pause();
		}, 2000); //sau 2s sẽ tắt bảng thông báo và hiện nút reload
	}
}

//click vào hộp để mở 
cover.addEventListener("click", function () {
	if (this.className == "box") this.classList.add("opened");
	else this.classList.remove("opened");
});

//nút nhấn đỏ
activate.addEventListener("click", function () {
	this.classList.add("pushed");
	alarm.load();
	alarm.currentTime = 10.1;
	alarm.play();
	setTimeout(function () {
		panel.classList.add("show");
		theCount = setInterval(showCountDown, 1000);
		alarm.load();
		alarm.play();
	}, 500);
});

//nhấn yes trước khi thời gian về 0 để sang page2
abort.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel.classList.remove("show");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
});

//nhấn No để mở Again trong 10s
no.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel.classList.remove("show");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
    panel2.classList.add("show");
});

//tương đương với nút nhấn đỏ
again.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel2.classList.remove("show");
    no.classList.remove("pushed");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
    
    
    btn.classList.add("pushed");
	alarm.load();
	alarm.currentTime = 10.1;
	alarm.play();
	setTimeout(function () {
		panel.classList.add("show");
		theCount = setInterval(showCountDown, 1000);
		alarm.load();
		alarm.play();
	}, 500);
});

//nhấn để về trạng thái ban đầu
reload.addEventListener("click", function () {
    panel.classList.remove("show");
	turnOff.classList.remove("close");
	turnOffHor.classList.remove("close");
	abort.classList.remove("hide");
    no.classList.remove("hide");
    
    detonate.classList.remove("show");
	cover.classList.remove("opened");
	btn.classList.remove("pushed");
	this.classList.remove("show");
	time.classList.remove("crono");
	time.innerText = 9;
});

setTimeout(function () {
	cover.classList.remove("opened");
}, 100);

//tắt âm báo
mute.addEventListener("click", function () {
	if (this.className == "muted") {
		alarm.muted = false;
		this.classList.remove("muted");
	} else {
		alarm.muted = true;
		this.classList.add("muted");
	}
});
