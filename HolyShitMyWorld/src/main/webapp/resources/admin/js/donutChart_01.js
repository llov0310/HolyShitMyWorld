// ajax 두번 호출 방지를 위해 변수 선언
// 설명 : 3. <head> 바깥에 사용할 경우에는 isloaded 변수를 정의해서 ready() 함수가 끝나는 부분에 true로 하고 강제적으로 1번만 호출될 수 있도록 한다.
var isloaded_DC_01 = false;
$(document).ready(function(){
	// ajax 두번 호출 방지를 위해 if문 선언
	if (isloaded_DC_01) {

	return;

	}
	$.ajax({
		url : "/donutChart_01",
		type : "POST",
		dataType : "json",
		success : function(data) {
			
			var age_10 = Number(data[0].age_10);
			var age_20 = Number(data[0].age_20);
			var age_30 = Number(data[0].age_30);
			var age_40 = Number(data[0].age_40);
			var age_50 = Number(data[0].age_50);
			var age_60_over = Number(data[0].age_60_over);

			var sum = (age_10 + age_20 + age_30 + age_40 + age_50 + age_60_over);
			
			//백분율 계산
			age_10 = Math.round(age_10 / sum * 100);
			age_20 = Math.round(age_20 / sum * 100);
			age_30 = Math.round(age_30 / sum * 100);
			age_40 = Math.round(age_40 / sum * 100);
			age_50 = Math.round(age_50 / sum * 100);
			age_60_over = Math.round(age_60_over / sum * 100);
			
			Morris.Donut({
				  element: 'donutChart_01',
				  data: [
				    {value: age_10, label: '10대'},
				    {value: age_20, label: '20대'},
				    {value: age_30, label: '30대'},
				    {value: age_40, label: '40대'},
				    {value: age_50, label: '50대'},
				    {value: age_60_over, label: '60대 이상'},
				  ],
				  formatter: function (x) { return x + "%"},
				  colors :['#58FA58','#01DFD7','#58ACFA','#BCA9F5','#F5A9BC','#F7BE81'],
				  resize : true
				}).on('click', function(i, row){
				  console.log(i, row);
				});
			
		},
		error : function() {
			alert("연결실패");
			console.log(error);
		}
	}); // ajax
	
	// ajax 두번 호출 방지를 위해 true로 변경
	isloaded_DC_01 = true;
}); // document function