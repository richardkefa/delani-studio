$(document).ready(function(){
  $(".development").click(function(){
    $("#development").toggle();
    $(".development").toggle();
  });
  $("#development").click(function(){
    $("#development").toggle();
    $(".development").toggle();
  })
  $(".design").click(function(){
    $("#design").toggle();
    $(".design").toggle();
  });
  $("#design").click(function(){
    $("#design").toggle();
    $(".design").toggle();
  });
  $(".management").click(function(){
    $("#management").toggle();
    $(".management").toggle();
  });
  $("#management").click(function(){
    $("#management").toggle();
    $(".management").toggle();
  });
});

$(document).ready(function(){
  $(".title").css('display','none');
  var works =["work1", "work2", "work3", "work4", "work5", "work6", "work7", "work8"]
  works.forEach(function(work){
  $("."+work).hover(function(){
    $(".title",this).fadeIn();
    $("."+work).css('opacity','0.4');
     },
  function (){
    $(".title").fadeOut();
    $("."+work).css('opacity','1');
    });
  });
});

$(document).ready(function(){
  $("form").submit(function(){
    var name= $("#name").val();
    var email= $("#email").val();
    var message=$("#message").val();
    alert(name+" we have recieved your message")
  })
})