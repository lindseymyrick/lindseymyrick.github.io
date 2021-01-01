$(document).ready(readyNow); 

function readyNow() {
    console.log('jquery working!');
    openMobileNav();
    closeMobileNav();
    changeDay();
    changeOpacity();
} //end readyNow function

function openMobileNav(){
    $('.toggle-button').click(function(){
        $('.mobile-nav').addClass('open');
        $('.backdrop').addClass('open');
    })
}

function closeMobileNav(){
    $('.backdrop').click(function(){
        $('.mobile-nav').removeClass('open');
        $('.backdrop').removeClass('open');
    })
}

function changeDay(){
    let character = 0;
    let timeOut;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const date = new Date;
    let dayOfWeek = `${daysOfWeek[date.getDay()]}!`;
    let length = dayOfWeek.length; 
    (function typeWriter() { 
        timeOut = setTimeout(function() {
            character++;
            let type =  dayOfWeek.substring(0, character);
            $('#day').text(type);
            typeWriter();
            
            if (character == length) {
                clearTimeout(timeOut);
            }
            
        }, 200);
    }());

    // $('#day').text(` ${dayOfWeek}!` )
}

function changeOpacity(){
    $(window).scroll(function(){ 
        $('#main-introduction_container').css("opacity", 1- $(window).scrollTop() / 300) 
    }) 
}



