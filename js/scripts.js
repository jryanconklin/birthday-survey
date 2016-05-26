
$(document).ready(function() {
  $("#data form").submit(function(event) {
    var cupcake = $("#cupcake").val();


    $("#data").hide();
    $("#results").show();

    event.preventDefault();
  });
});
