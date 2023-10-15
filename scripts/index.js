$(function () {
    $('[data-toggle="popover"]').popover();
});

$('.popover-dismiss').popover({
    trigger: 'focus'
})

// Immediately removes the in-line style padding added when the modal is opened 
$(".modal").on('shown.bs.modal', function () {
    $('nav').attr('style', '');
})

// We highlight the section title (h2) after being taken there from the index page
// This removes the highlight on page scroll 
// https://stackoverflow.com/questions/6452960/window-scroll-firing-on-page-load
$(document).ready(() => {
    setTimeout(function () {
        $(document).scroll(function () {
            // console.log($('h2').get());
            $("h2").attr('style', 'text-shadow: none;');
        })
    }, 10);
});