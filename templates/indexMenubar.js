let Menues = `
<div id="outer_topMenu" style="display:none">

	<div id="front">
		<a href="index.html">Corona Core</a>
	</div>

	<div id="back" style="display:none">
		<div id="dir">${dir_box}</div>
	</div>

	<nav id="topMenu" >
		<ul>
			<li class="topMenuLi"> <a class="menuLink">이용 안내</a>
				<ul class="submenu">
					<li><a href="01_code/submenu_1/01_notice.html" class="submenuLink">공지사항</a></li>
					<li><a href="01_code/submenu_1/02_about_us.html" class="submenuLink">About Us</a></li>
				</ul>
			</li>
			<li>|</li> <!-- 메뉴 사이에 바 모양 텍스트로 단락 구분  -->
			<li class="topMenuLi"> <a class="menuLink">통계 정보</a>
				<ul class="submenu">
					<li><a href="01_code/submenu_2/graph1.html" class="submenuLink">국내 누적 확진자수</a></li>
					<li><a href="01_code/submenu_2/graph2.html" class="submenuLink">일일 확진자 (지역|도표)</a></li>
					<li><a href="01_code/submenu_2/graph3.html" class="submenuLink">일일 확진자 (지역|지도)</a></li>
					<li><a href="01_code/submenu_2/graph4.html" class="submenuLink">지역별 기간별 비교</a></li>
					<li><a href="01_code/submenu_2/graph5.html" class="submenuLink">특정 수치 초과일 조회</a></li>

				</ul>
			</li>
			<li>|</li>
			<li class="topMenuLi"> <a class="menuLink">생물학 정보</a>
				<ul class="submenu">
					<li><a href="01_code/submenu_3/01_corona19.html" class="submenuLink">코로나 19</a></li>
					<li><a href="01_code/submenu_3/02_vaccine.html" class="submenuLink">백신 정보</a></li>
					<li><a href="01_code/submenu_3/04_prevention.html" class="submenuLink">행동 수칙</a></li>
				</ul>
			</li>
			<li>|</li>
			<li class="topMenuLi"> <a class="menuLink">방역 정보</a>
				<ul class="submenu">
					<li><a href="01_code/submenu_4/01_policy.html" class="submenuLink">사회적 거리두기 정책</a></li>
					<li><a href="01_code/submenu_4/03_mask.html" class="submenuLink">마스크 착용</a></li>
					<li><a href="01_code/submenu_4/03_person_movement.html" class="submenuLink">확진자 동선</a></li> 

				</ul>
			</li>
		</ul>
	</nav>
</div>
`;
document.write(Menues);
