 $(document).ready(function() {
	
	 $("#aa").click(function() {
		 $("#content").load("/member_info" );
	
	 });
	 
	 $("#bb").click(function() {
		 $("#content").load("/mypet_info" );
	
	 });
	 
	 $("#cc").click(function() {
		 $("#content").load("/myreservation" );
	
	 });
	
	 $("#dd").click(function() {
		 $("#content").load("/mypost" );
	
	 });
	 
	 $("#ff").click(function() {
		 $("#content").load("/deleteaccount" );
	
	 });
	
});  
