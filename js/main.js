$(function () {
  main();
});

function main() {
  console.log('Portfolio page loaded!');
}

// Listeners
$(document).on('focusin', '.input-group', function () {
  let wantedType = $(this).addClass('input-group-focus');
});

$(document).on('focusout', '.input-group', function () {
  let wantedType = $(this).removeClass('input-group-focus');
});