function make_board(){
    let board = 
    `
    <div class="rounded" style="width:400px; height:40px; margin: auto; background: sienna; margin-top: 100px; margin-bottom : 10px;  z-index: 1;">
        <h2 class="main_board">국내 COVID-19 상황판</h2>
    </div>

    
    <!-- 상황판 board 내부-->
    <div class="inside_board">

        <!--(00) 업데이트일-->
        <div style="width:800px;height:20px;">
            <div class="rounded" style="width:200px; height:25px;  float:right; margin-right:80px; margin-top : 7px;">
                <iframe src="../../crawler/date2.html"
                    width=250
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" >
                </iframe>
            </div>
        </div>

        <!-- 상단 박스 3개 -->
        <div style="width:700px; height:150px; margin-left: 50px; margin-top:20px">

            <!-- (01) 국내확진자-->
            <div class="rounded" style="width:200px; height:120px;  float:left; background: rgb(212, 140, 81);">
                <h4 style = "margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)"> 오늘 국내확진자 </p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/korea_corona.html"
                    width=90
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:25px;">
                </iframe>
            </div>


            <!-- (02) 해외 유입 확진자-->
            <div  class="rounded" style="width:200px; height:120px;  float: left; margin-left : 52px; background: rgb(209, 107, 76);">
                <h4 style = "margin-left : 20px; margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)">해외 유입 확진자 </p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/world_corona.html"
                    width=90
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:25px;">
                </iframe>
            </div>


            <!-- (03) 누적 확진자-->
            <div class="rounded" style="width:200px; height:120px;  float:right; background: rgb(63, 63, 63);">
                <h4 style = "margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)">누적 확진자</p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/mini_corona.html"
                    width=200
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                </iframe>
            </div>
        </div>


        <!-- 하단 박스 3개 -->
        <div style="width:700px; height:150px; margin-left: 50px; margin-top:20px ">
            

            <!-- (04) 사망자-->
            <div  class="rounded" style="width:200px; height:120px;  float: left; background: rgb(255, 73, 73);">
                <h4 style = "margin-left : 20px; margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)"> 누적 사망자</p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/dead_corona.html"
                    width=200
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:25px;">
                </iframe>
            </div>


            <!-- (05) 격리해제-->
            <div  class="rounded" style="width:200px; height:120px;  float: left; margin-left : 52px; background: rgb(75, 132, 255);">
                <h4 style = "margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)">격리해제</p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/tit.html"
                    width=200
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                </iframe>
            </div>


            <!-- (06) 치료중-->
            <div class="rounded" style="width:200px; height:120px;  float:right; margin-bottom:100px; background:rgb(69, 206, 172);">
                <h4 style = "margin-left : 20px; margin-bottom:10px;margin-top:10px;">
                    <p style ="color:rgb(255, 255, 255)"> 치료 중</p>
                </h4>
                <hr style="border: solid 1px rgb(255, 255, 255);">
                <iframe src="../../crawler/tit2.html"
                    width=200
                    height=40 frameborder=0 framespacing=0 marginheight=0 marginwidth=0  vspace=0 scrolling = "no" style="margin-left:15px;">
                </iframe>
            </div>
        </div>
    </div>
    <div style="margin-top:-50px; margin-bottom:70px;"><b>세부 통계 사항은 통계정보 메뉴를 이용해 주세요</b></div><br>

    `;
    document.write(board);
}
make_board();
    
    