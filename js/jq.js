$(function()
{
	"use strict";
	//nice sroll code
	$("html").niceScroll();

	$(".carousel").carousel({
		interval:6000
	});

	//to show color option when we click on gear icon
	$(".gear-check").click(function ()
	{
		$(".color-option").fadeToggle();
	});

	//change theme color on click

	$(".color-option ul li")
		.eq(0).css("backgroundColor","#e41817").end()
		.eq(1).css("backgroundColor","#4684b5").end()
		.eq(2).css("backgroundColor","#ffc107").end()
		.eq(3).css("backgroundColor","#fb5a8f");

	$(".color-option ul li").click(function ()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});

	//Scroll button

	$(window).scroll(function()
	{
		console.log($(this).scrollTop());
		if( $(this).scrollTop() >= 700 )
		{
			$(".scroll-up").fadeIn();
		}
		else
		{
			$(".scroll-up").hide();
		}
	});
	$(".scroll-up").click(function ()
	{
		$("html,body").animate({scrollTop:0},600);
	});

	

});



//loading screen

$(window).load(function () //when the screen end loading that what will happen
{
	$(".overlay .spinner").fadeOut(1000,
	function ()
	{
		$("body").css("overflow","auto"); //to show the scroll

		$(this).parent().fadeOut(2000,
		function ()
		{
			$(this).remove();
		})
	});
});