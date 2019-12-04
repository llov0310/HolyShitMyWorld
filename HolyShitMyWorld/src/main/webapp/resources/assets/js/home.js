$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 1000) {
        //console.log('a');
        $("#mainNav").addClass("navbar-light");
    } else {
        //console.log('a');
        $("#mainNav").removeClass("navbar-light");
    }
});

//$(document).ready(function(){
//
//	$("#etpApplyBtn").click(function(){
//		var user_id = $("#logout").text();
//	
//		if(user_id ==""){
//			alert("로그인을 해주세요.");
//			window.location.href="/login";
//		}else{
//			window.location.href="/etpApply";
//		}
//	}); // click function END
//	
//}); // document.ready END
