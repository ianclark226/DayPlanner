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

  

//    var saveText = $(".description").val();
// // //get elements by class name which is the "description" and then save that text
//        document.getElementsByClassName('.description').innerHTML;
      

    



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

    var task = getSavedValue("hour-" + (index + 9))
    $(el).text(task);

});

function saveValue(e){
  var id = e.id;  // get the sender's id to save it . 
  var val = e.value; // get the value. 
  localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v){
  if (!localStorage.getItem(v)) {
      return "";// You can change this to your defualt value. 
  }
  return localStorage.getItem(v);
}

getSavedValue("");







