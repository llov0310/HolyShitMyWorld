$(document).ready(function(){
	
	
	$(".listbox2").click(function(){
			
		var place = $(this).children().eq(1);
		
		var test = place.find("h3").text();
		
		console.log(test);
		
		$.ajax({
			Type : "GET",
			url : '/hotel_infomation',
			dataType : 'text',
			data : {test : test},
			success : function(data){
				if(data == "success"){
					location.href="/hotel_info";
				}
			}
		});
		
	});
	
});


