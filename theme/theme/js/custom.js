$(function () {
});

$(window).on('load', function() {
	 setTimeout(function(){
	   $('#subscribeModal').modal('show');
   }, 500);
   setTimeout(function(){
	   $('.subscribeModal-lg').modal('show');
   }, 1);
});
$('#Reloadpage').click(function() {
    location.reload();
}); 