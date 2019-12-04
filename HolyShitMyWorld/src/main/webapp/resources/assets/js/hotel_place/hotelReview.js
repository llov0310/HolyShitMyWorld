$('.star').click(function(e){
  var length = $('.review-container .star').length;
  var selected = $('.review-container .star').index($(this));
  
  $( ".review-container .star" ).each(function( index ) {
  if(index <= selected){
    
  $(this).addClass("active");
       

     
    
    
  }else{
    $(this).removeClass("active");
    
  }
    
});
  
});