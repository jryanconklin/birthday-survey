
$(document).ready(function() {
  $("#data form").submit(function(event) {
    var cupcake = $("#cupcake").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favoriteColor = $("#color").val();
    $("#data").hide();
    $("#results").show();

    event.preventDefault();
  });
});
