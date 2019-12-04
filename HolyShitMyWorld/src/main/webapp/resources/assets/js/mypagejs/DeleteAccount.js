 		$("#chmember").hide(); 
		$("#delok").click(function() {
			if ($("input:checkbox[name='del']").is(":checked") == true){
				var result = confirm('정말 탈퇴 하시겠습니까?'); 
				if(result) {
			 		$("#chmember").show(); 
				} else {
					alert("취소되었습니다"); 
						}
			}else{
			alert("체크 해주세요");
			}
		});
		
		$("#delbt").click(function() {
			var id = $("#did").val();
			var pw = $("#dpw").val();
			
			if ($("#dpw").val() == "") {
				alert("비밀번호를 입력해주세요");
				$("#dpw").focus();
			}else {
				 pw = $("#dpw").val();
			 	$.ajax({
					url : "/deletid",
					type : "POST",
					dataType : 'text',
					data : {
						user_id :id ,
						password :pw
					},
					success : function(data) {
						if(data== "success"){
							alert("탈퇴되었습니다"); 
							window.location.replace("/");	
							
						}else {
							alert("비밀번호가 틀렸습니다");
							$("#dpw").focus();
						}
					}
					}); 
			}
		});

	
