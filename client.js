$(document).ready(readyNow)

function readyNow() {
    console.log('test');

    $('#open').on('click', clickHamburger).on('click', menuEvent)
}

function clickHamburger() {
    console.log('click burger');
    $('.container').addClass('show-nav')
}

function menuEvent() {

    
}