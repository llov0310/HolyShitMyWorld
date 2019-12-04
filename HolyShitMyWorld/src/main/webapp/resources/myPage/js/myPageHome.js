// 확인 클릭 시 입력한 비밀번호와 세션에 있는 아이디를 ajax로 데이터를 보냄
$("#passCkBtn").click(function() {
	var user_id = $("#user_id").text(); // 세션에 저장 된 아이디를 가져옴
	var password = $("#password").val(); // 사용자가 입력 한 비밀번호

	// console.log(user_id);
	// console.log(password);

	if (user_id == "") {
		alert("세션이 만료 되었습니다.");
		window.location.href = "/";
	} else if (password == "") {
		alert("비밀번호를 입력해주세요.");
		$("#password").focus();
	} else {
		$.ajax({
			url : "/myPagePassCk",
			type : "POST",
			dataType : 'text',
			data : {
				user_id : user_id,
				password : password
			},
			success : function(data) {
				if (data == "success") {
					alert("비밀번호가 확인되었습니다.");
					window.location.href = "/myPageInfoEdit";
				} else {
					alert("비밀번호가 일치하지 않습니다.");
					$("#password").focus();
				}
			}

		}); // ajax END
	}

}); // click function END

//엔터키 실행
$("#password").keydown(function(key) {
	if (key.keyCode == 13) {
		$("#passCkBtn").click();
	}
});