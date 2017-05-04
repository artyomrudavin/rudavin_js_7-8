$(function() {

  $('.name').hover(
    function() {
      $('.name-help').addClass('show');
    }, 
    function() {
      $('.name-help').removeClass('show');
    });

  $('.surname').hover(
    function() {
      $('.surname-help').addClass('show');
    }, 
    function() {
      $('.surname-help').removeClass('show');
    });

  $('.address').hover(
    function() {
      $('.address-help').addClass('show');
    }, 
    function() {
      $('.address-help').removeClass('show');
    });

  $('.btn').on('click', function() {
    $('.name-help, .surname-help, .address-help').toggleClass('show');
  });
});