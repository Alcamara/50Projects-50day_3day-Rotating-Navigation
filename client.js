$(document).ready(readyNow)

function readyNow() {
    console.log('test');

    $('#open').on('click', clickHamburger);
    $('#close').on('click', clickX);

}

function clickHamburger() {
    console.log('click burger');
    $('.container').addClass('show-nav')
}

function clickX() {
    $('.container').removeClass('show-nav')
}

