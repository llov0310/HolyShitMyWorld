/**
 * 추모게시판

 */

// 취소버튼 클릭



$(function() {
	$('#cancel').click(function() {
		location.replace('memorialGallery.html');
	});
});

// 등록버튼 클릭


$('#submit').bind('click', function(memorialData) {
	var query = {
		user_id	: $("#dd").text(),
		sb_title : $("#sb_title").val(),
		sb_content : $("#sb_content").val(),
		
		
	}; 
	
	if($("#sb_title").val()==""){
		alert("제목을 입력해주세요");
	}else if($("#sb_content").val()==""){
		alert("내용을 입력해주세요");
	}

	
	$.ajax({
		type : "GET", // 전송방식
		dataType : 'text',
		data : query, // 전송데이터
		url : "writeFormData", // 요청 페이지
		success : function(data) {
			if (data == "success")
				window.location.href = "/memorialGallery"
			else {
				console.log("error");
			}
		}
	});

});
