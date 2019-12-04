// ready 두번 호출 방지를 위해 변수 선언
// 설명 : 3. <head> 바깥에 사용할 경우에는 isloaded 변수를 정의해서 ready() 함수가 끝나는 부분에 true로 하고 강제적으로 1번만 호출될 수 있도록 한다.
var isloaded_etpManageApply = false;
var isloaded_etpDetail = false;

$(document).ready(function(){
		// ready 두번 호출 방지를 위해 if문 선언
		if (isloaded_etpDetail) {

		return;

		}
		//해당 회원 선택시 새창 띄움

		$(".etpManage_list").on('click',function(){
			
			
			var user_id = $(this).children().eq(1).text();

			console.log(user_id);
			

			$.ajax({
				url : "/etpDetail",
				type : "GET",
//				contentType:"application/json;charset=UTF-8",
				dataType : 'json',
				data : {user_id},
//				traditional: true, //배열 때문에 쓰는거
				success : function(data){
					
					$(".bP").bPopup({
						follow : [false, false],
						opacity : 0.6,
						positionStyle : 'fixed'
							
					}).reposition(500);
										
					if(data[0].etp_cd_substr == "h"){
						$('.etp_cd_substr').text("호텔");
						$('#ja').hide();
						$(".bP").css({ width: "700px"});
					
					}else if(data[0].etp_cd_substr == "f"){
						$('.etp_cd_substr').text("장례");
						$('#ja').hide();
						$(".bP").css({ width: "700px"});
					}else if(data[0].etp_cd_substr == "d"){
						$('.etp_cd_substr').text("병원");
						$('#ja').show();
						$(".bP").css({ width: "1200px"});
						};
				
					$('.user_id').text(data[0].user_id);
					$('.user_nm').text(data[0].user_nm);
					$('.etp_email').text(data[0].etp_email);
					$('.etp_ph_no').text(data[0].etp_ph_no);
					$('.etp_addr').text(data[0].etp_addr);
					$('.etp_license_no').text(data[0].etp_license_no);
					$('.etp_nm').text(data[0].etp_nm);
					$('.ph_no').text(data[0].ph_no);

					$('#asd').text(data[0].ph_no);

					
					$('#asd').attr("src",data[0].etp_ex_path);

			

					console.log(data);	
					
				},
				error:function(jqXHR, textStatus, errorThrown){
					alert('에러 발생 \n' + textStatus + ' : ' + errorThrown);
				}		
			}); // ajax END
		});
		// ready함수 두번 호출 방지를 위해 true로 변경
		isloaded_etpDetail = true;

		
	
	
	
		//체크박스 전체 선택
		$("#allCheck").click(function(){
			//클릭 되었으면
			if($("#allCheck").prop("checked")){
				//input태그의 name이 user_id인 태그들을 찾아서 checked옵션을 true로 정의
				$("input[name=user_id]").prop("checked", true);
			}else{
				//input태그의 name이 user_id인 태그들을 찾아서 checked옵션을 false로 정의
				$("input[name=user_id]").prop("checked", false);
			}
		});
		//보낼때
		$(".etpCk").off().on('click',function(){
			// name이 같은 체크박스의 값들을 배열에 담는다
			// off() : 이벤트 제거하기
			var user_id = []; // 체크 된 아이디를 담을 배열 선언
			var array = []; // Obj (키,밸류) 형식으로 된 변수를 담을 배열 선언
			var etpCk = $(this).val();
			
			$("input[name='user_id']:checked").each(function(i){
				 user_id.push($(this).val());
			});
			
			console.log(user_id.length);
			console.log("테스트" + user_id[0]);
			
			for(var i=0; i<user_id.length; i++){
				var Obj = {}; // 오브젝트 변수 선언과 동시에 초기화
				Obj.etpCk = etpCk;
				Obj.user_id = user_id[i];
				array.push(Obj);
			}
			
			console.log(array);
			console.log(etpCk);
			
			//jQuery.ajaxSettings.traditional = true; // arr전송하기
			if(confirm("정말 " + etpCk +"하시겠습니까?") == true){
				$.ajax({
					url : "/etpApplyManage",
					type : "POST",
					contentType:"application/json;charset=UTF-8",
					data : JSON.stringify(array),
					traditional: true, //배열 때문에 쓰는거
					success : function(data){
						alert("완료");
						console.log(data + "넘어오는지 테스트");
						window.location.href= "/enterpriseManage/"  + (num+1);
					},
					error:function(jqXHR, textStatus, errorThrown){
						alert('에러 발생 \n' + textStatus + ' : ' + errorThrown);
					}		
				}); // ajax END
			}else{
				return;
			}
		});// click END
		
		
		//★뭐지 이건★
		   $('.pagination-inner a').on('click', function() {
		      $(this).siblings().removeClass('pagination-active');
		      $(this).addClass('pagination-active');
		   });
		
		/*pagination*/	   
		   var num = 0;

		   var newURL =  window.location.pathname;
		   
		   
		   
		   var url = newURL.split('/');
		   
		   if(url[2] != 'search'){ //검색이 아닐 때
			   if(url[2] != null){
				      $("#"+url[2]+"").addClass('pagination-active');
				   }

				   $('.pagination-inner a').on('click', function() {
				      var a = $(".pagination-inner a").index(this);
				      num = a;
				      window.location.href = "/enterpriseManage/"+(num+1);
				   });

				   $('.pagination-newer').click(function(){
				      if(1 > parseInt(url[2])-1 )
				         window.location.href = "/enterpriseManage/"+(parseInt(url[2]));
				      else
				         window.location.href = "/enterpriseManage/"+(parseInt(url[2])-1);
				   });

				   $('.pagination-older').click(function(){
				         window.location.href = "/enterpriseManage/"+(parseInt(url[2])+1);
				   });
			   
		   }else{ //검색 일 때
			      if(url[3] != null){
			          $("#"+url[3]+"").addClass('pagination-active');
			       }

			       $('.pagination-inner a').on('click', function() {
			          var a = $(".pagination-inner a").index(this);
			          var b = $(".pagination-inner a:eq("+a+")").attr("id");
			          num = b;
			          window.location.href = "/enterpriseManage/search/"+num+"/"+url[4]+"/"+url[5];
			       });

			       $('.pagination-newer').click(function(){
			          if(1 > parseInt(url[3])-1 )
			             window.location.href = "/enterpriseManage/search/"+(parseInt(url[3]))+"/"+url[4]+"/"+url[5];
			          else
			             window.location.href = "/enterpriseManage/search/"+(parseInt(url[3])-1)+"/"+url[4]+"/"+url[5];
			       });

			       $('.pagination-older').click(function(){
			          window.location.href = "/enterpriseManage/search/"+(parseInt(url[3])+1)+"/"+url[4]+"/"+url[5];
			       });
		   } // else 끝
		   
			// ready 두번 호출 방지를 위해 if문 선언
			if (isloaded_etpManageApply) {

			return;

			}
		   // 검색 이벤트
		   $("#search").click(function(){   
			      if(url[2] != 'search'){
			         var page = 1; // 현재 페이지 번호
			         var searchType = $("#search-select option:selected").val();
			         var keyword = $("#keyword").val();

			         if(keyword.trim() == ""){
			            alert("검색내용을 입력하세요");
			            $("#keyword").val("");
			            $("#keyword").focus();
			            return false;
			         }
			         window.location.href = "/enterpriseManage/search/"+page+"/"+searchType+"/"+keyword;
			      } else{
			         var page = 1; // 현재 페이지 번호
			         var searchType = $("#search-select option:selected").val();
			         var keyword = $("#keyword").val();

			         if(keyword.trim() == ""){
			            alert("검색내용을 입력하세요");
			            $("#keyword").val("");
			            $("#keyword").focus();
			            return false;
			         }
			         window.location.href = "/enterpriseManage/search/"+page+"/"+searchType+"/"+keyword;
			      }
			   }); // 검색 이벤트 종료
			// ready함수 두번 호출 방지를 위해 true로 변경
			isloaded_etpManageApply = true;
		   
		   
		   // 엔터치면 검색 되게 하는 함수
			$('#keyword').keypress(function(event) {
				if (event.which == 13) {
					$('#search').click();

				}
			});
		
}); //ready function END