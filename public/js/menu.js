/* eslint-disable*/
$(document).ready(function () {
    // show navigation menu when hamburger menu is clicked
    $('.burger').click(function () {
        $('.nav-group').toggleClass('navgroup');
        $('.burger .line1').toggleClass('toggleline1');
        $('.burger .line2').toggleClass('toggleline2');
        $('.burger .line3').toggleClass('toggleline3');
    });
    // close navigation when link tags is clicked
    $('.naviagtions ul li a').click(function () {
        $('.nav-group').removeClass('navgroup');
        $('.burger .line1').removeClass('toggleline1');
        $('.burger .line2').removeClass('toggleline2');
        $('.burger .line3').removeClass('toggleline3');
    });
    // close navigation menu when img log is clicked
    $('.logo img').click(function () {
        $('.nav-group').removeClass('navgroup');
        $('.burger .line1').removeClass('toggleline1');
        $('.burger .line2').removeClass('toggleline2');
        $('.burger .line3').removeClass('toggleline3');
    });

});