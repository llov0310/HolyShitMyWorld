/*var path = null;
$(document).ready(function(){
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey : "AIzaSyDcJDqLBjqwDetOcCt5LcYjr8k8EL7mMnk",
	authDomain : "blogapp-a9a56.firebaseapp.com",
	databaseURL : "https://blogapp-a9a56.firebaseio.com",
	projectId : "blogapp-a9a56",
	storageBucket : "blogapp-a9a56.appspot.com",
	messagingSenderId : "604610409810",
	appId : "1:604610409810:web:76decd7c19ac5f6b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DOM요소 가져오기 - 개별적 변수 선언
// Get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

var uuid;
// Listen for file selection - 파일이 선택되었을 때 알 수 있도록 해야함
fileButton.addEventListener('change',function(e) {
					//
					function guid() {
						function s4() {
							return Math.floor((1 + Math.random()) * 0x10000)
									.toString(16).substring(1);
						}
						return s4() + s4() + '-' + s4() + '-' + s4() + '-'
								+ s4() + '-' + s4() + s4() + s4();
					}
					uuid = guid();

					// 파일이 업로드될때 이 함수 안에서 호출 할 것임

					// Get file - 파일을 가져오기 위해 타깃 요소에 있는 파일 객체에서 입력할 것
					var file = e.target.files[0];

					// Create a storage ref - 스토리지 참조 생성
					// firebase.storage().ref('folder_name/file_name');

					var storageRef = firebase.storage().ref('profileImgUpload/' + uuid);
					console.log(uuid);

					var storage = firebase.storage();
					var downloadRef = storage.ref();
					var starsRef = downloadRef.child('profileImgUpload/' + uuid);

					// Upload file
					var task = storageRef.put(file);

					// Update progress bar
					task.on(
									'state_changed',
									function progress(snapshot) {
										var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
										uploader.value = percentage;
									},

									function error(err) {

									},

									function complete() {
										// 해당 이미지의 파이어베이스의 download url을 가져옴
										starsRef.getDownloadURL().then(function(url) {
															// `url` is the
															// download URL for
															// 'images/stars.jpg'
															document.getElementById('imgsrccode').innerHTML = url;
															path = document.getElementById('imgsrccode').innerHTML;
															console.log(path);

															// 업로드 이미지 미리보기
															var productImg = document.getElementById('productImg');
															productImg.src = url;
														});
									});

				});*/



	
	$("#editBtn").on('click',function(){
		
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
				
					phon : phon
				},
				success : function(data) {
					if(data== "success"){
						alert("변경완료");
						location.replace("/myPageInfoEdit");

						
					}else {
						alert("실패");
					}
					
				}
			});
	});



	
	
	/*$("#editBtn").on('click',function(){
		// 이메일 -> 변수 추가 해야 함
		// 휴대폰 -> 변수 추가 해야 함
		// 주소 -> 변수 추가 해야 함
		var userImg_path = path; // 이미지 업로드를 위한 변수
		

		if (user_id == "") {
			alert("세션이 만료 되었습니다.");
			window.location.href = "/";
		}else{
			$.ajax({
				type: 'GET',
				url : '/editBtn',
				dataType : 'text',
				data : {userImg_path}, // 이메일, 휴대폰, 주소 변수 추가 해야 함.
				success : function(data){
					if(data == "success"){
						alert("수정 완료");
						// window.location.href="/myPageInfoEdit";
					}else{
						alert("넘어 오지 않음");
					}

				}
			}); // ajax END
		}
	});*/

	