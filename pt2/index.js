
document.addEventListener('visibilitychange',
function(){
if(document.visibilityState === "visible"){
document.title = "Portfolio";
// $("#favicon").attr("href","assests/images/favicon.png");
}
else {
document.title = "Reengage with my Portfolio";

}
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_qj5k873', 'template_7xiv7pj', this, 'BvSZEkdx-urCDqHCJ')
        .then(function(response) {
            document.getElementById("contact-form").reset();
            alert('Message sent successfully!');
        }, function(error) {
            document.getElementById("contact-form").reset();
            alert('Error sending message:', error);
        });
});










var typed=new Typed(".text",{
    strings:["Frontend Web Developer","Tech-Enthusiast","Problem Solver","Curious coder"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');

function activeMenu()
{
    let len=section.length;
    while(--len && window.scrollY +97 <section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu); 


// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('bx-x');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load',function(){
//         $('#menu').removeClass('bx-x');
//         $('.navbar').removeClass('nav-toggle');

//         if(window.scrollY>60){
//             document.querySelector('#scroll-top').classList.add('active');
//         }else{
//             document.querySelector('#scroll-top').classList.remove('active');
//         }
// // scroll spy
// $('section').each(function(){
//     let height = $(this).height();
//     let offset = $(this).offset().top - 200;
//     let top = $(window).scrollTop();
//     let id = $(this).attr('id');

//     if(top>offset && top<offset+height){
//         $('.navbar ul li a').removeClass('active');
//         $('.navbar').find(`[href="#${id}"]`).addClass('active');
//     }
// });
// });

// // smooth scrolling
// $('a[href*="#"]').on('click',function(e){
// e.preventDefault();
// $('html, body').animate({
//     scrollTop : $($(this).attr('href')).offset().top,
// },500, 'linear')
// })
// });

