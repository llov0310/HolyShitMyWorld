	// 월 별 가입자 수를 담을 변수선언, json을 담을 변수 선언
	var monthMemberCnt = [];
	var forChartJson = null;
	var month_02 = [];



// ajax 두번 호출 방지를 위해 변수 선언
// 설명 : 3. <head> 바깥에 사용할 경우에는 isloaded 변수를 정의해서 ready() 함수가 끝나는 부분에 true로 하고 강제적으로 1번만 호출될 수 있도록 한다.
var isloaded_LC_01 = false;
$(document).ready(function(){
	// ajax 두번 호출 방지를 위해 if문 선언
	if (isloaded_LC_01) {

	return;

	}

	
	
	console.log('ㅎㅇ'+monthMemberCnt);
	console.log('ㅂ2'+forChartJson);
	console.log('ㅇㅇ'+month_02);
	
	
		$.ajax({
			url : "/lineChart_01",
			type : "POST",
			dataType : "json",
			contentType: 'application/json; charset=utf-8',
			success : function(data) {
//				alert("하이 ajax");
				console.log(data);
				console.log("카운트 : "+data[0].count);
				console.log(data[0].month);
				
				for(i=0; i<data.length; i++){
					monthMemberCnt[i] = {
						month : data[i].month,
						count : data[i].count
					}
				}
				
//				console.log(data[0].month.substr(5,2));
				
				//파싱 해줘야함
				var obj = JSON.stringify(monthMemberCnt);
				forChartJson = JSON.parse(obj);
				
				console.log(forChartJson);
				
			    var months = ['1월', '2월', '3월', '4월',
			    	  '5월', '6월', '7월', '8월', '9월',
			    	  '10월', '11월', '12월'];
			    
			    //차트 그리는 부분
				new Morris.Line({
			        element: 'lineChart_01',
				    data: forChartJson,
			        xkey: 'month',
			        ykeys: ['count'],
			        labels: ['가입자 수'],
			        xLabelFormat : function(x){
			        	return months[x.getMonth()];
			        },
			        gridTextSize:'20px',
			        resize : true
				}); // morris차트

			},
			error : function() {
				alert("연결실패");
			}
		}); // ajax	
		
		// ajax 두번 호출 방지를 위해 true로 변경
		isloaded_LC_01 = true;
}); // document function