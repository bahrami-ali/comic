

/* Navigation Bar Toggle */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


$(document).ready(function() {
  var divs = $('.mydivs>div');
  var now = 0; // currently shown div
  divs.hide().first().show();
  $("button[name=next]").click(function(e) {
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function(e) {
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // or .css('display','block');
    //console.log(divs.length, now);
  });
});
