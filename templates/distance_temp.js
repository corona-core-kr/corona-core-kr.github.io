// 1. 이미지 출력 템플릿 설정

// 1-(1) 피씨 템플릿
let distance_temp_wide = `
<div id="distance_temp_wide" style="display:none">
<img src="../../02_img/거리두기/distance_policy.png" width="600" style="border:solid 2px;" onclick="img_click(event)"></img>
</div>
`;
document.write(distance_temp_wide);

// 1-(1) 모바일 템플릿
let distance_temp_small = `
<div id="distance_temp_small style="display:none;">
<img src="../../02_img/거리두기/distance_policy.png" width="95%" style="border:solid 2px;" onclick="img_click(event)"></img>
</div>
`;
document.write(distance_temp_small);



// 2. 페이지 로딩 완료 후 페이지에 걸맞는 템플릿 1회 생성
function whenPageLoaded(){
	// 모바일 템플릿 on
	if (matchMedia("screen and (max-width: 1000px)").matches) {
		document.getElementById('distance_temp_wide').style.display="none"; // PC(소) 뷰 중지
		document.getElementById('distance_temp_small').style.display="block"; // 모바일 뷰 활성화
	}
	// PC 템플릿 on
	if (matchMedia("screen and (min-width: 1000.1px)").matches) {
		document.getElementById('distance_temp_small').style.display="none"; // 모바일 뷰 중지
		document.getElementById('distance_temp_wide').style.display="block"; // PC 뷰 활성화
	}
}
whenPageLoaded();


// 3. 페이지 사이즈 변환시마다 계속해서 실행
window.addEventListener('resize', function(event) {
	// 모바일 템플릿 on
	if (matchMedia("screen and (max-width: 1000px)").matches) {
		document.getElementById('distance_temp_wide').style.display="none"; // PC(소) 뷰 중지
		document.getElementById('distance_temp_small').style.display="block"; // 모바일 뷰 활성화
	}
	// PC 템플릿 on
	if (matchMedia("screen and (min-width: 1000.1px)").matches) {
		document.getElementById('distance_temp_small').style.display="none"; // 모바일 뷰 중지
		document.getElementById('distance_temp_wide').style.display="block"; // PC 뷰 활성화
	}
}, true);