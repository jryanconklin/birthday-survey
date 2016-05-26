
$(document).ready(function() {
  $("#data form").submit(function(event) {
    var cupcake = $("#cupcake").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $("#data").hide();
    $("#results").show();

    event.preventDefault();
  });
});
