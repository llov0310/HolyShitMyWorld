$(document).ready(function() {
				$("#adddog").click(function() {
					window.open("/mypet_add", "newpass","width=500,height=500,left=600, top=250" );
						});
				
				
			});
	
	$(document).ready(function() {
		$(".updog").click(function() {
			var d_nm = $(this).parent().parent().find('.dname').find('span').text();
			var d_kind = $(this).parent().parent().find('.dkind').find('span').text();
			var d_age = $(this).parent().parent().find('.dage').find('span').text();
			var d_gender = $(this).parent().parent().find('.dgender').find('span').text();
	      
			console.log(d_gender);
			window.open("/petinfo_up?d_nm="+d_nm+"&d_kind="+d_kind+"&d_age="+d_age+"&d_gender="+d_gender,"_blank","toolbar=yes,menubar=yes,newpass,width=500,height=500,left=600, top=250" );
				});
	}); 

	
 	$(document).ready(function() {
		$(".deldog").click(function() {
			var d_nm = $(this).parent().parent().find('.dname').find('span').text();
			console.log(d_nm);
			var result = confirm('정말 삭제 하시겠습니까?'); 
			if(result) {
			$.ajax({
				url : "/pet_delete",
				type : "POST",
				dataType : 'text',
				data : {
					d_nm : d_nm
					
				},
				success : function(data) {
					alert("삭제되었습니다");
					$("#content").load("/mypet_info" );
					}
				});   
			}else{
				alert("삭제취소"); 
			}
				});
	}); 