$('#inputAppName').focusout(function(){
  var firstText = $(this).val();
  console.log(firstText);
  firstTextLength = firstText.length;
  for (var i = 0; i < firstTextLength; i++) {
    firstText = firstText.replace(" ", "_").toLowerCase();
  }
  $('#inputAppShortName').val(firstText);
  $('#textArea').focus();

});




function changeContent(html){
  $('ul.nav.navbar-nav.side-nav').find("li.active").removeClass('active');
  $('#toLoad').fadeOut(0,function(){
    $('#toLoad').load(html, function(){
      $('#toLoad').fadeIn(200);
    });
  });
  $(this).parent().addClass('active');
}

$('#a-register-new-app').click(function(){
  changeContent('register-new-app.html');
});
$('#a-all-apps').click(function(){
  changeContent('all-apps.html');
});
$('#a-my-apps').click(function(){
  changeContent('my-apps.html');
});
$('#a-waiting-apps').click(function(){
  changeContent('awaiting-apps.html');
});
$('#a-app-services').click(function(){
  changeContent('app-services.html');
});


//close navbar on mobile devices
$('ul.nav.navbar-nav.side-nav li a.a-close').on('click', function() {
    $('.navbar-toggle').click();
});
