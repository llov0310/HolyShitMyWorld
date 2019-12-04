
$(document).ready(function() {

	$.ajax({
		url : '/Hospital',
		type : "GET",
		dataType : 'json',
		success : function(data){
			
			var test = Object.values(data);
			
			var cont_len = test[0].length;
			
//			console.log(Object.values(test[0]));//배열 전체
//			console.log(Object.values(test[0][0]/* 부분배열  ex)[0],[1],[2],[3]*/)); // 한 배열의 내용
//			console.log(Object.values(test[0][0])[0]/*원하는 String 값*/); // 그 배열안의 인덱스
			
			for(var i=0; i<cont_len; i++){
				
					
					$('#main1-2').
					append('<div class="listbox1">'
							+ '<div class="listbox2">'
								+ '<div id="imgbox1">'
									+ '<div id="img1"><img src="http://placehold.it/200x200" alt="" id="imgbox"></div>'
								+ '</div>'
							+ '<div class="to">'
								+ '<div class="context">'
									+ '<div><div>'
										+ '<h2>' + Object.values(test[0][i])[1] + '</h2>'
										+ '</div>'
							+ '<div class="ok">' 
							+ Object.values(test[0][i])[2] 
							+ '</div>'
							+ '<div>'+ Object.values(test[0][i])[3] +'</div>'
							+ '</div></div>'
							+ '<div id="context1">'
							+ '</div>');
			
				
			}

			}
		});
	
	
		 $("#searchbar").click(function() {
			 $("#searchlist").toggle(); //천천히 보이기

		 });
		 
		 //동적으로 생성된 append 태그의 선택

		 $(document).on("click",".listbox1",function(){
			 
			var addr = $(this).children().find('div.ok').html(); // 클릭시 주소값
			
			
			
			console.log(addr);
		 });


	

		$(function() {
			var selectTarget = $('.selectbox select');

			// focus 가 되었을 때와 focus 를 잃었을 때
			selectTarget.on({
				'focus' : function() {
					$(this).parent().addClass('focus');
				},
				'blur' : function() {
					$(this).parent().removeClass('focus');
				}
			});

			selectTarget.change(function() {
				var select_name = $(this).children('option:selected').text();
				$(this).siblings('label').text(select_name);
				$(this).parent().removeClass('focus');
			});
		});
	
		
		
}); //end document

