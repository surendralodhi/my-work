// JavaScript Document
jQuery(document).ready(function($) { 
	
	$('.mainmenu li:has(ul)').addClass('parent'); 
 
    $('a.menulinks').click(function() {
        $(this).next('ul').slideToggle(250);
        $('body').toggleClass('mobile-open'); 
		$('.mainmenu li.parent ul').slideUp(250);
		$('a.child-triggerm').removeClass('child-open');
        return false;
     });	 
	 
	$('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');
	
    $('.mainmenu a.child-triggerm').click(function() {
        $(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('li').find('ul').slideUp(250);
        $(this).next('ul').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });
		

});//document.ready end here