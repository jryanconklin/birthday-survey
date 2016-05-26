
$(document).ready(function() {
  $("#data form").submit(function(event) {
    var cupcake = $("#cupcake").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favoriteColor = $("#color").val();
    var income = $("#income").val();
    var dob = $("#birthdate").val();

    $(".cupcake").text(cupcakeInput);
    $(".flavor").text(flavorInput);
    $(".favoriteColor").text(favoriteColorInput);
    $(".income").text(incomeInput);
    $(".dob").text(dobInput);

    $("#data").hide();
    $("#results").show();

    event.preventDefault();
  });
});
