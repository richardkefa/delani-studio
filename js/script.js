//Front end code
$(document).ready(function () {
  var whatwedo = ["development", "design", "management"]
  whatwedo.forEach(function (doing) {
    $("." + doing).click(function () {
      $("#" + doing).toggle();
      $("." + doing).toggle();
    });
    $("#" + doing).click(function () {
      $("#" + doing).toggle();
      $("." + doing).toggle();
    })
  })
});
$(document).ready(function () {
  $(".title").css('display', 'none');
  var works = ["work1", "work2", "work3", "work4", "work5", "work6", "work7", "work8"]
  works.forEach(function (work) {
    $("." + work).hover(function () {
      $(".title", this).fadeIn();
      $("." + work).css('opacity', '0.4');
    },
      function () {
        $(".title").fadeOut();
        $("." + work).css('opacity', '1');
      });
  });
});
$(document).ready(function () {
  $("form").submit(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    alert(name + " we have recieved your message")
  })
})