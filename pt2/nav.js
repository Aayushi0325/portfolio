$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('bx-x');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
// scroll spy 

});

// smooth scrolling
$('a[href*="#"]').on('click',function(e){
e.preventDefault();
$('html, body').animate({
    scrollTop : $($(this).attr('href')).offset().top,
},500, 'linear')
})
});

// $('a[href*="#"]').on('click',function(e){
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop : $($(this).attr('href')).offset().top,
//     },500, 'linear')
//     });
    