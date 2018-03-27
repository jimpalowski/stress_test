$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var Stress = $("#symptom").val();
    var HighStress = $("#high").val();
    $("input:checkbox[name=symptoms-stress]:checked").each(function(){
      var stressSymptoms = $(this).val();
      $('.results').append(stressSymptoms + "<br>");
    });
    $("input:checkbox[name=high-stress]:checked").each(function(){
      var stressHigh = $(this).val();
      $('.results2').append(stressHigh + "<br>");
    });


    $('.Resulting').show();
  });
});
