

	 $("#pwbt").click(function() {
			
		var pass1 = $("#password").val();
		var pass2 = $("#newPassword").val();	

		
		$.ajax({
			url : "/member_pass_cheak",
			type : "POST",
			dataType : 'text',
			data : {
			
				password : pass1
			},
			success : function(data) {
				if(data== "success"){
									
					$.ajax({
						url : "/member_pass_new",
						type : "POST",
						dataType : 'text',
						data : {password : pass2},
						success : function(data){
							if(data== "success"){
								alert("변경완료");
								location.replace("/myPageHome");
							}else {
								alert("비밀번호를 입력해주세요");
							}
							
							},error:function(data){
						       alert("고장");
						       console.log();  
						       }
			

					});
					
				}else {
					alert("비밀번호를 재대로 입력해주세요");
				}
				
			}
		});
	 });
