// Business Logic:
const ounces = function(gramInput) {
  return gramInput / 28.35;
}

const grams = function(ounceInput) {
  return ounceInput * 28.35;
}

$(document).ready(function() {
  $("form#gram-to-ounce").submit(function(event) {
    event.preventDefault();
    const gramInput = parseInt($("#grams").val());
    const result = ounces(gramInput);
    $("#output-ounces").text(result);
    });
  $("form#ounce-to-gram").submit(function(event) {
    event.preventDefault();
    const ounceInput = parseInt($("#ounces").val());
    const result = grams(ounceInput);
    $("#output-grams").text(result);
  });
});
