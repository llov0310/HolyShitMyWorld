$(document).ready(function() {
	var firebaseDatabase; //파이어베이스 db 모듈 전역변수

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
});

// 로그인 정보 가져오는 jquery문
$("#signup").click(function() {
	var user_id = $("#id_01").val() + "@" + $("#id_02").val();
	var user_nm = $("#user_nm").val(); // 이름
	var password = $("#password").val(); // 비밀번호
	var ph_no = $("#ph_no").val(); // 휴대폰 번호
	var birth_dt = $("#birth_dt").val(); // 생년월일 + 1

	
	
	firebase.auth().createUserWithEmailAndPassword(user_id, password).then(function(user) {
		userInfo = user;
		// 어떤것이 찍히는지 체크
		console.log("userInfo : " + userInfo);
		
		// 성공했을 때 작동되는 함수
		successCreateUser();
		
	}, function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
	
	
	// 파이어베이스 회원가입 성공했을 때 호출되었을 때 사용되는 함수
	function successCreateUser() {
		
		console.log("아이디 : " + user_id);
		console.log("이름 : " + user_nm);
		console.log("비밀번호 : " + password);
		console.log("휴대폰 번호 : " + ph_no);
		console.log("생년월일 : " + birth_dt);

		var query = {
			user_id : user_id,
			user_nm : user_nm,
			password : password,
			ph_no : ph_no,
			birth_dt : birth_dt
		};
			console.log(query);

		$.ajax({
			type : "POST",
			dataType : 'text',
			data : query,
			url : "/signTest",
			success : function(data) {
				console.log(data);
				alert("회원가입이 완료되었습니다. 다시 로그인해주세요.");
				window.location.href = "/login";
			}
		}); // ajax END
	} //successCreateUser 함수 END
	
	
}); //click(function) END