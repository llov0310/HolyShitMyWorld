$(function () {	
	tab('#tab',0);	
});

function tab(e, num){
    var num = num || 0;
    var menu = $(e).children();
    var con = $(e+'_con').children();
    var select = $(menu).eq(num);
    var i = num;

    select.addClass('on');
    con.eq(num).show();

    menu.click(function(){
        if(select!==null){
            select.removeClass("on");
            con.eq(i).hide();
        }

        select = $(this);	
        i = $(this).index();

        select.addClass('on');
        con.eq(i).show();
    });
    
}

 $(document).ready(function() {
	$(".orderdelbt").click(function() {
		var x = 3;
		var orcd = $(this).parent().parent().find("#orcd").text();
		
		
		$.ajax({
			url : "/orderdel",
			type : "POST",
			dataType : 'text',
			data : {
				or_stat : x,
				or_cd : orcd
			},
			success : function(data) {
				 $("#content").load("/myreservation" );
			}
		});
	});
}); 


  $(document).ready(function() {
		$(".orderdelbt").click(function() {
			var x = 3;
			var orcd = $(this).parent().parent().find("#orcd").text();
			console.log(orcd);
			
			$.ajax({
				url : "/orderdel",
				type : "POST",
				dataType : 'text',
				data : {
					or_stat : x,
					or_cd : orcd
				},
				success : function(data) {
					 $("#ho").load("/searchdate"+"/"+day1);
				}
			});
		});
	  
/*	$(".searchdate").click(function() {
		var  day= $(this).val();
		alert(day);
		
		var day1 =decodeURIComponent(day);
		$.ajax({
	 		url : "/searchdate"+"/"+day1,
			type : "GET",
			dataType : 'text',
			data : {

			},
			success : function(data) {
				location.replace("/searchdate"+"/"+day1); 
			
		}
	});
	
	});*/
		
		$(".searchdate").click(function() {
			var  day= $(this).val();
			alert(day);
			
			var day1 =decodeURIComponent(day);
			$.ajax({
		 		url : "/myreservation",
				type : "GET",
				dataType : 'text',
				data : {
					day:day
				},
				success : function(data) {
//					location.replace("/myreservation/search/"+day1);
					location.href="/myreservation/search/"+day1;
				
			}
		});
	});
//		$(".searchdate").click(function() {
//			var  day= $(this).val();
//			alert(day);
////			var day1 =decodeURIComponent(day);
//			window.location.href = "/myreservation/search/"+day;
//		});

	
	});