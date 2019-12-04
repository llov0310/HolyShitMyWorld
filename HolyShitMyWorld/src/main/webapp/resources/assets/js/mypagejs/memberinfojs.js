	$(document).ready(function() {
			$("#newinfo").hide();

			$("#passok").click(function() {
				var password = $("#pass").val();
				var user_id = $(".id").text();

				$.ajax({
					url : "/member_pass_cheak",
					type : "POST",
					dataType : 'text',
					data : {
						user_id : user_id,
						password : password
					},
					success : function(data) {
						if (data == "success") {
							alert("비밀번호 체크완료");
							$("#newinfo").show();
						} else {
							alert("현재 비밀번호가 맞지 않습니다");
							$("#pass").focus();
						}
					}

				});

			});
		});

		$(document).ready(function() {

			$("#upbtn").click(function() {
				

				if ($("#newemail").val() == "") {
					var email = $(".email").text();
				}else {
					var email = $("#newemail").val();
				}
				
				if($("#addr").val() == "") {
					var addr = $(".addr_ji").text();
					alert(addr);
				} else {
					var addr = $("#addr").val();
				}
				if ($("#addr2").val() == "") {
					var addr2 = $(".addr_dong").text();
					alert(addr2);
				} else {
					var addr2 = $("#addr2").val();
				}
				
				if ($("#newphon").val() == "") {
					var phon = $(".phon").text();
				} else {
					var phon = $("#newphon").val();
				}

				$.ajax({
					url : "/member_info_new",
					type : "POST",
					dataType : 'text',
					data : {
						
						email : email,
						addr_ji : addr,
						addr_dong : addr2,
						phon : phon
					},
					success : function(data) {
						if(data== "success"){
							alert("변경완료");
							location.replace("/mypage");

							
						}else {
							alert("실패");
						}
						
					}

				});
			});
		});
	
		$(document).ready(
				function() {
					$("#newpass").click(
							function() {
								window.open("/newpwpopup", "newpass",
										"width=500,height=350,left=600,top=250");

							});
				});

		function address_code() {
			new daum.Postcode({
				oncomplete : function(data) {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					var roadAddr = data.roadAddress; // 도로명 주소 변수
					var extraRoadAddr = ''; // 참고 항목 변수

					// 법정동명이 있을 경우 추가한다. (법정리는 제외)
					// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
					}
					// 건물명이 있고, 공동주택일 경우 추가한다.
					if (data.buildingName !== '' && data.apartment === 'Y') {
						extraRoadAddr += (extraRoadAddr !== '' ? ', '
								+ data.buildingName : data.buildingName);
					}
					// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					if (extraRoadAddr !== '') {
						extraRoadAddr = ' (' + extraRoadAddr + ')';
					}

					// 우편번호와 주소 정보를 해당 필드에 넣는다.
					//		            document.getElementById('sample4_postcode').value = data.zonecode;
					document.getElementById("addr").value = roadAddr;
					//		            document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

					// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
					// 		            if(roadAddr !== ''){
					// 		                document.getElementById("addr_simple").value = extraRoadAddr;
					// 		            } else {
					// 		                document.getElementById("addr_simple").value = '';
					// 		            }

					//		            var guideTextBox = document.getElementById("guide");
					// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
					//		            if(data.autoRoadAddress) {
					//		                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
					//		                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
					//		                guideTextBox.style.display = 'block';
					//
					//		            } else if(data.autoJibunAddress) {
					//		                var expJibunAddr = data.autoJibunAddress;
					//		                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
					//		                guideTextBox.style.display = 'block';
					//		            } else {
					//		                guideTextBox.innerHTML = '';
					//		                guideTextBox.style.display = 'none';
					//		            }
				}
			}).open();
		}
