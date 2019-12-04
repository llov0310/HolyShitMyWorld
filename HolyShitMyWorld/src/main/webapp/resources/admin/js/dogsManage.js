// ready 두번 호출 방지를 위해 변수 선언
// 설명 : 3. <head> 바깥에 사용할 경우에는 isloaded 변수를 정의해서 ready() 함수가 끝나는 부분에 true로 하고 강제적으로 1번만 호출될 수 있도록 한다.
var isloaded_D_Manage = false;

$(document).ready(function(){
	// ready 두번 호출 방지를 위해 if문 선언
	if (isloaded_D_Manage) {

	return;

	}
	
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
			      window.location.href = "/dogsManage/"+(num+1);
			   });

			   $('.pagination-newer').click(function(){
			      if(1 > parseInt(url[2])-1 )
			         window.location.href = "/dogsManage/"+(parseInt(url[2]));
			      else
			         window.location.href = "/dogsManage/"+(parseInt(url[2])-1);
			   });

			   $('.pagination-older').click(function(){
			         window.location.href = "/dogsManage/"+(parseInt(url[2])+1);
			   });
		   
	   }else{ //검색 일 때
		      if(url[3] != null){
		          $("#"+url[3]+"").addClass('pagination-active');
		       }

		       $('.pagination-inner a').on('click', function() {
		          var a = $(".pagination-inner a").index(this);
		          var b = $(".pagination-inner a:eq("+a+")").attr("id");
		          num = b;
		          window.location.href = "/dogsManage/search/"+num+"/"+url[4]+"/"+url[5];
		       });

		       $('.pagination-newer').click(function(){
		          if(1 > parseInt(url[3])-1 )
		             window.location.href = "/dogsManage/search/"+(parseInt(url[3]))+"/"+url[4]+"/"+url[5];
		          else
		             window.location.href = "/dogsManage/search/"+(parseInt(url[3])-1)+"/"+url[4]+"/"+url[5];
		       });

		       $('.pagination-older').click(function(){
		          window.location.href = "/dogsManage/search/"+(parseInt(url[3])+1)+"/"+url[4]+"/"+url[5];
		       });
	   } // else 끝
	   
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
		         window.location.href = "/dogsManage/search/"+page+"/"+searchType+"/"+keyword;
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
		         window.location.href = "/dogsManage/search/"+page+"/"+searchType+"/"+keyword;
		      }
		   }); // 검색 이벤트 종료
	   
	   // 엔터치면 검색 되게 하는 함수
		$('#keyword').keypress(function(event) {
			if (event.which == 13) {
				$('#search').click();

			}
		});
		
		// ready함수 두번 호출 방지를 위해 true로 변경
		isloaded_D_Manage = true;
}); //document ready