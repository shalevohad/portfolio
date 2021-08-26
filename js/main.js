"use strict";

$(function () {
  main();
});

// functions
function main() {
  console.log('Portfolio page loaded!');

  const navbar = document.getElementById("main-nav");
  const backToTop = document.getElementById("backToTop");
  $(backToTop).hide();

  let scrolled = false;
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      navbar.classList.remove('navbar-transparent');

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

function toogleNavbar(navigationDom) {
  let togglerDom = $(navigationDom).find('.navbar-toggler');
  let isNavOpen = togglerDom.hasClass('toggled');

  if (isNavOpen == false)
    openNavigation(navigationDom);
  else
    closeNavigation(navigationDom);
}

function openNavigation(navigationDom) {
  let togglerDom = $(navigationDom).find('.navbar-toggler');
  togglerDom.addClass('toggled');
  togglerDom.removeClass('collapsed');
  navigationDom.find('#navigation').addClass('show');
  $('html').addClass('nav-open');
}

function closeNavigation(navigationDom) {
  let togglerDom = $(navigationDom).find('.navbar-toggler');
  togglerDom.removeClass('toggled');
  togglerDom.addClass('collapsed');
  navigationDom.find('#navigation').removeClass('show');
  $('html').removeClass('nav-open');
}

// Listeners
$(document).on('focusin', '.input-group', function () {
  let wantedType = $(this).addClass('input-group-focus');
});

$(document).on('focusout', '.input-group', function () {
  let wantedType = $(this).removeClass('input-group-focus');
});

$(document).on('click', '.navbar-toggler', function () {
  toogleNavbar($(this).closest('#main-nav'));
});

$(document).on('click', '.nav-link', function () {
  closeNavigation($(document).find('#main-nav'));
});

$(document).on('scroll', function () {
  closeNavigation($(document).find('#main-nav'));
});

// remove bs click on button
$(document).on('click', '.btn', function (e) {
  if ($(this).hasClass('active')) {
    setTimeout(function () {
      $(this).removeClass('active').find('input').prop('checked', false);
    }.bind(this), 10);
  }
});