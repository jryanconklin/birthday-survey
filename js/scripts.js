
$(document).ready(function() {
  $("#data form").submit(function(event) {
    var cupcakeInput = $("#cupcake").val();
    var flavorInput = $("input:radio[name=flavor]:checked").val();
    var favoriteColorInput = $("#color").val();
    var incomeInput = $("#income").val();
    var dobInput = $("#birthdate").val();

    $(".cupcake").text(cupcakeInput);
    $(".flavor").text(flavorInput);
    $(".favoriteColor").text(favoriteColorInput);
    $(".income").text(incomeInput);
    $(".dob").text(dobInput);

    event.preventDefault();
  });
});
