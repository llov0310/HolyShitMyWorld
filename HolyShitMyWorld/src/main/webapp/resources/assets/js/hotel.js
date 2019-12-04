  function mapsearch(){
	  var a = $("#searchbar").val();
	  console.log(a);
	  
  }
document.getElementById('from').value = new Date().toISOString().substring(0, 10);;
document.getElementById('to').value = new Date().toISOString().substring(0, 10);;


$(document).ready(function() {
	 
      $("#searchbar").click(function() {
    	  
         $("#searchlist").toggle(); //천천히 보이기

      });
      
      
      
      
 
      
   }); 



function place(text){

	var a = text;
	$("#searchbar").val(a);
	$("#searchlist").hide();
}



/////////////////////////////// serch 바의 지도 api //////////////////////////


