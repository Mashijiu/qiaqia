//配置宽高
var wrap = document.querySelector(".wrap");
wrap.style.width = window.innerWidth + "px";
wrap.style.height = window.innerHeight + "px";
var main = document.querySelector(".main");
var zhongjing = document.querySelector(".zhongjing");
var earth = document.querySelector(".earth");
var yinghua = document.querySelector(".yinghua");
var word1 = document.querySelector(".word1");
//配置按钮
var btnKV = document.querySelector(".btnKV");
var timerKV = null;
timerKV = setTimeout(function() {
	btnKV.style.display = "block";
	clearTimeout(timerKV);
	timerKV = null;
}, 4000);
btnKV.addEventListener("touchstart", function() {
	$(".main").css({
		backgroundImage: 'url("img/02/BG.png")'
	});
	main.style.display = "block";
	zhongjing.style.display = "block";
	var yunTimer = null;
	var yunNum = 0;
	yunTimer = setInterval(function() {
		yunNum++;
		var yun1 = document.createElement("img");
		yun1.src = "img/01/yun_03.png";
		yun1.style.width = randFn(15, 35) + "%";
		yun1.style.top = randFn(5, 20) + "%";
		yun1.className = "yun";
		wrap.appendChild(yun1);
		if(yunNum >= 4) {
			clearInterval(yunTimer);
			yunTimer = null;
		}
	}, 4000);
	var zhuanTimer = null;
	zhuanTimer = setTimeout(function() {
		word1.style.display = "none";
		zhongjing.style.display = "none";
		$(".earth").css({
			transform: "rotateZ(-90deg)",
			transformOrigin: "center center",
			transitionDuration: "3s",
			transitionTimingFunction: "linear"
		});
		$(".yinghua").css({
			transform: "rotate(-80deg) translateX(-50%) translateY(-50%)",
			transformOrigin: "center bottom",
			transitionDuration: "3s",
			transitionTimingFunction: "linear"
		});
		$(".yinghua").fadeOut(3000);
		$(".page1").fadeOut(3000, function() {
			$(".page1").css({
				"display": "none"
			});
		});
		$(".page2").fadeIn(2000, function() {
			$(".page2").css({
				"display": "block"
			});
			$(".plane2").show(0);
			$(".word2").show(1000);
			var xunTimer = null;
			xunTimer = setTimeout(function() {
				$(".xunyicao").css({
					display: "block"
				});
				zhuanTimer = setTimeout(function() {
					$(".word2").fadeOut(1000);
					$(".earth").css({
						transform: "rotateZ(-180deg)",
						transformOrigin: "center center",
						transitionDuration: "3s",
						transitionTimingFunction: "linear"
					});
					$(".xunyicao").css({
						transform: "rotate(-90deg) translateX(-100%) translateY(-50%)",
						transformOrigin: "center center",
						transitionDuration: "3s",
						transitionTimingFunction: "linear"
					});
					$(".page2").fadeOut(1000);
					document.querySelector(".page3").style.display = "block";
					document.querySelector(".qiqiu").style.display = "block";
					var page3Timer = null;
					page3Timer = setTimeout(function() {
						$(".word3").show();
						$(".haitan").fadeIn(2000);
						clearTimeout(page3Timer);
						page3Timer = null;
						var zhuangTimer2 = null;
						zhuangTimer2 = setTimeout(function() {
							$(".word3").fadeOut(1000);
							$(".earth").css({
								transform: "rotateZ(-270deg)",
								transformOrigin: "center center",
								transitionDuration: "3s",
								transitionTimingFunction: "linear"
							});
							$(".haitan").css({
								transform: "rotate(-80deg) translateX(-50%) translateY(-50%)",
								transformOrigin: "center bottom",
								transitionDuration: "3s",
								transitionTimingFunction: "linear"
							});
							document.querySelector(".page4").style.display = "block";
							document.querySelector(".car").style.display = "block";
							var zhuan4 = null;
							zhuan4 = setTimeout(function() {
								$(".changcheng").fadeIn(3000, function() {
									$(".changcheng").css({
										display: "block"
									});
								});
								$(".boy").fadeIn(3000, function() {
									$(".boy").css({
										display: "block"
									});
								});
								$(".word4").fadeIn();
								var zhuan = null;
								zhuan = setTimeout(function() {
									$(".word4").fadeOut(1000);
									$(".earth").css({
										transform: "rotateZ(-360deg)",
										transformOrigin: "center center",
										transitionDuration: "3s",
										transitionTimingFunction: "linear"
									});
									$(".changcheng").css({
										transform: "rotate(-80deg) translateX(-50%) translateY(-40%)",
										transformOrigin: "center bottom",
										transitionDuration: "3s",
										transitionTimingFunction: "linear"
									});
									$(".boy").css({
										transform: "rotate(-80deg) translateX(-50%) translateY(-40%)",
										transformOrigin: "center bottom",
										transitionDuration: "3s",
										transitionTimingFunction: "linear"
									});
									$(".earth").fadeOut(2000);
									$(".changcheng").fadeOut(2000);
									$(".boy").fadeOut(2000);
									$(".end").fadeIn(3500);
									$(".btnEnd")[0].addEventListener("touchstart", function() {
										$(".btnEnd").css({display: "none"});
										$(".btnWordEnd").css({display: "block"});
										$(".btnEndQia").css({display: "block"});
										$(".btnEndCar").css({display: "block"});
									}, false);
									$(".btnEndQia")[0].addEventListener("touchstart",share,false);
									function share(){
										$(".gray").css({display:"block"});
									}
									clearTimeout(zhuan);
									zhuan = null;
								}, 2500)
							}, 2000);
							clearTimeout(zhuangTimer2);
							zhuangTimer2 = null;
						}, 3500);
					}, 6500);

					clearTimeout(zhuanTimer);
					zhuanTimer = null;
				}, 2500);
				clearTimeout(xunTimer);
				xunTimer = null;
			}, 3000);
		})
		clearTimeout(zhuanTimer);
		zhuanTimer = null;
	}, 6500);
}, false);

function randFn(min, max) {
	var s = Math.ceil(Math.random() * (max - min) + min);
	return s;
}