$(function () {
  main();
});

function main() {
  console.log('Portfolio page loaded!');

  const navbar = document.getElementById("main-nav");
  // const backToTop = document.getElementById("backToTop");
  // $(backToTop).hide();

  let scrolled = false;
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      navbar.classList.remove('navbar-transparent');

      // if (!scrolled) navbar.style.transform = 'translateY(-70px)';
      // setTimeout(function () {
      //   navbar.style.transform = 'translateY(0)';
      //   scrolled = true;
      // }, 200);

    }
    else {
      navbar.classList.add('navbar-transparent');
      scrolled = false;
    }

    // Back To Top Button
    if (window.pageYOffset > window.innerHeight * 0.5) {
      $(backToTop).show();
    }
    else {
      $(backToTop).hide();
    }
  }
}

// Listeners
$(document).on('focusin', '.input-group', function () {
  let wantedType = $(this).addClass('input-group-focus');
});

$(document).on('focusout', '.input-group', function () {
  let wantedType = $(this).removeClass('input-group-focus');
});