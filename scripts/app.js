$(function() {
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;

    $('html, body').animate({
      scrollTop: blockOffset - 80
    }, 300);
    console.log(event.target);
  });

  $('.form').on('click', function() {
    $('.form-field').css('display', 'block');
  });

  $('.close').on('click', function() {
    $('.form-field').css('display', 'none');
  });
});
