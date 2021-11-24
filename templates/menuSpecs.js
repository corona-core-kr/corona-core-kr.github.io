let menuSpecs = `
<div id="white_box">

<div id="black_box"><b>통계 정보</b><br></div><br>
    <div class="psedu_mid_box">
        <a href="01_code/submenu_2/graph1.html" class="submenuLink">국내 누적 확진자수</a>
        <a href="01_code/submenu_2/graph2.html" class="submenuLink">일일 확진자 (지역|도표)</a>
        <a href="01_code/submenu_2/graph3.html" class="submenuLink">일일 확진자 (지역|지도)</a>
        <a href="01_code/submenu_2/graph4.html" class="submenuLink">지역별 기간별 비교</a>
        <a href="01_code/submenu_2/graph5.html" class="submenuLink">특정 수치 초과일 조회</a>
    </div>

    <div id="black_box"><b>방역 정보</b><br></div><br>
    <div class="psedu_mid_box">
        <a href="01_code/submenu_3/01_corona19.html" class="indexLink">코로나 정보</a><br>
        <a href="01_code/submenu_3/02_vaccine.html" class="indexLink">백신 정보</a><br>
        <a href="01_code/submenu_3/04_prevention.html" class="indexLink">행동수칙</a><br><br>
    </div>
    
    <div id="black_box"><b>정부 정책</b><br></div><br>
    <div class="psedu_mid_box">
        <a href="01_code/submenu_4/01_policy.html" class="submenuLink">사회적 거리두기 정책</a>
        <a href="01_code/submenu_4/03_person_movement.html" class="submenuLink">확진자 동선</a>
        <a href="01_code/submenu_4/03_mask.html" class="submenuLink">마스크 착용</a>
    </div>
</div>
`;
document.write(menuSpecs);

let menuSpecs2 = `
<div id="white_box2">
    <div class="center"><b></b></div>

    <div id="black_box"><b>통계 정보</b></div>
    <div class="left-title-box">
      <div class="each-LTB"><a href="01_code/submenu_2/graph1.html" class="indexLink">국내 누적 확진자수</a></div>
      <div class="each-LTB"><a href="01_code/submenu_2/graph2.html" class="indexLink">일일 확진자 (지역|도표)</a></div>
      <div class="each-LTB"><a href="01_code/submenu_2/graph3.html" class="indexLink">일일 확진자 (지역|지도)</a></div>
      <div class="each-LTB"><a href="01_code/submenu_2/graph4.html" class="indexLink">지역별 기간별 비교</a></div>
      <div class="each-LTB"><a href="01_code/submenu_2/graph5.html" class="indexLink">특정 수치 초과일 조회</a></div>
    </div>
    <div class="right-desc-box">
      <div>확진자 수치를 기간별로 조회할 수 있습니다</div>
      <div>특정 일자의 지역 별 감염 증감을 보여줍니다</div>
      <div>지도에서 지역별 확진자 숫자를 조회합니다</div>
      <div>특정 지역의 감염 양상을 보여줍니다</div>
      <div>입력한 확진자 수치를 넘긴 날짜를 검색합니다</div>
    </div>

    <div id="black_box"><b>방역 정보</b></div>
    <div class="left-title-box">
      <div class="each-LTB"><a href="01_code/submenu_3/01_corona19.html" class="indexLink">코로나 정보</a></div>
      <div class="each-LTB"><a href="01_code/submenu_3/02_vaccine.html" class="indexLink">백신 정보</a></div>
      <div class="each-LTB"><a href="01_code/submenu_3/04_prevention.html" class="indexLink">행동 수칙</a></div>
    </div>
    <div class="right-desc-box">
      <div>코로나 바이러스 정보를 제공합니다</div>
      <div>코로나 백신 정보를 제공합니다</div>
      <div>기본적인 에방 행동 수칙을 확인할 수 있습니다 </div>
    </div>

    <div id="black_box"><b>정부 정책</b></div>
    <div class="left-title-box">
      <div class="each-LTB"><a href="01_code/submenu_4/01_policy.html" class="indexLink">사회적 거리두기 정책</a></div>
      <div class="each-LTB"><a href="01_code/submenu_4/03_person_movement.html" class="indexLink">확진자 동선</a></div>
      <div class="each-LTB"><a href="01_code/submenu_4/03_mask.html" class="indexLink">마스크 착용안</a></div>
    </div>
    <div class="right-desc-box">
      <div>지역별 확진자 동선 링크를 제공합니다</div>
      <div>전체/단계별 사회적 거리두기 정책 안내</div>
      <div>마스크 착용 방칙과 위반 시 과태료 안내</div>
    </div>

</div>
`;
document.write(menuSpecs2);

const wb1 = document.getElementById("white_box");
const wb2 = document.getElementById("white_box2");

// 최초 출력 시
if (matchMedia("screen and (max-width: 768px)").matches) {
  wb1.style.display = "block";
  wb2.style.display = "none";
} else {
  wb1.style.display = "none";
  wb2.style.display = "block";
}

// 뷰포트 조정 시
window.addEventListener(
  "resize",
  function (event) {
    if (matchMedia("screen and (max-width: 768.1px)").matches) {
      wb1.style.display = "block";
      wb2.style.display = "none";
    } else {
      wb1.style.display = "none";
      wb2.style.display = "block";
    }
  },
  true
);
