// ajax 두번 호출 방지를 위해 변수 선언
// 설명 : 3. <head> 바깥에 사용할 경우에는 isloaded 변수를 정의해서 ready() 함수가 끝나는 부분에 true로 하고 강제적으로 1번만 호출될 수 있도록 한다.
var isloaded_yearSelect = false;
$(document).ready(function(){
	// ajax 두번 호출 방지를 위해 if문 선언
	if (isloaded_yearSelect) {

	return;

	}
	
	// 월 별 가입자 수를 담을 변수선언, json을 담을 변수 선언
	var monthMemberCnt = [];
	var json;
	
	// 연도 선택 시
	$("#yearSelectBox").on('change',function(){
		var year = this.value;
//		console.log(year);
		
		// 기존에 그려진 차트를 지움
		$("#lineChart_01").empty();
		
		
		$.ajax({
			url : "/yearSelectChart",
			type : "POST",
			dataType : "json",
			data : {year},
			success : function(data){
//				console.log(data);
//				console.log(data[0].count);
//				console.log("확인"+jQuery.type(data));
//				console.log("길이 체크1 : " + data.length);
				
				
				if(data.length == 0){
//					console.log("값이 없음");
					var noData = "";
					noData = "<div>데이터가 존재하지 않습니다.</div>";
					
					$("#lineChart_01").append(noData);
				}else{
					for(i=0; i<data.length; i++){
						monthMemberCnt[i] = {
							month : data[i].month,
							count : data[i].count
						}
					}
					
					//파싱 해줘야함
					var obj = JSON.stringify(monthMemberCnt);
					json = JSON.parse(obj);

					var months = ['1월', '2월', '3월', '4월',
				    	  '5월', '6월', '7월', '8월', '9월',
				    	  '10월', '11월', '12월'];					
					
					
						new Morris.Line({
							element: 'lineChart_01',
							data: json,
							xkey: 'month',
							ykeys: ['count'],
							labels: ['가입자 수'],
					        xLabelFormat : function(x){
					        	return months[x.getMonth()];
					        },
					        gridTextSize:'20px',
							resize : true
						}); // morris차트
					
					//변수 초기화
					monthMemberCnt = [];
				}
				
			},
			error : function(){
				alert("실패");
				console.log(error);
			}
		}); //ajax
		
	});// change function
	
	// ajax 두번 호출 방지를 위해 true로 변경
	isloaded_yearSelect = true;
	
}); // function