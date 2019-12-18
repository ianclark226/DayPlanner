$(document).ready(function(){
    $(".saveBtn").on("click", function() {
      console.log(this);
      var value = $(this).siblings(".description").val();
      // Use this
      // var time = $(this).siblings(".hour").text();
  
      // Or this
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, value);
    });

     setInterval(function() {

    
    $("#currentDay").text(moment());

     }, 1000);
    
  });




var hour = moment().format('H');





$(".description").each(function (index, el) {

    if (hour == (index + 9)) {

        $(el).css('backgroundColor', "#ff6961");
    }
    
      if (hour < (index + 9)) {
         $(el).css('backgroundColor', "#77dd77");
      }
         if (hour >(index + 9 )) {
         $(el).css('backgroundColor', "#d3d3d3");
     }
});







