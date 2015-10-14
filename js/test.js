$(document).ready(function(){


$("#home a:contains('home')").parent().addClass('active');

$("#about a:contains('about')").parent().addClass('active');



$("ul.nav li.dropdown").hover(function(){


$(".dropdown-menu", this).fadeIn();


}, function(){

$(".dropdown-menu", this).fadeOut("fast");


});


$("[data-toggle='tooltip']").tooltip({animation: true});



//show modal


$('.modal-photos img').on('click',function(){

$('#modal').modal('show')

var mySrc = this.src.substr(0, this.src.length - 4) + '1.png';


$("#modalImage").attr({src:mySrc});


});






});