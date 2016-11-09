$(document).ready(function () {

//   THIS WILL CHANGE OPACITY WHEN HOVERED .25
    $("li").mouseenter(function () {
        $(this).fadeTo("slow", 0.25);
    });

    $("li").mouseleave(function () {
        $(this).fadeTo("slow", 1);
    });
  
  $("li").click(function () {
     $(this).css('background', '#52bab3')
    $(this).css('font-family', 'fantasy')
    $(this).css("color", " orangered");
    $(this).text("Stupid Click");
    
    });

//     $("li").mouseleave(function () {
//         $(this).css('background', 'darkslateblue')
//     $(this).css("color", " orangered");
   
//     });
  


    

 

});