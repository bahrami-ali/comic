

/* Navigation Bar Toggle */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
var index = 0;
document.getElementById('imgsrc').src = images[index];

var next = document.getElementById('slider-next');
var previous = document.getElementById('slider-previous');


next.addEventListener('click', nextImage);

function nextImage() {
    index+=1;
    if (index > images.length - 1) {
     index = 0;
    }

     document.getElementById('imgsrc').src = images[index];

}
//'Previous' button

previous.addEventListener('click', previousImage);

function previousImage(){
    index-=1;
    if (index < 0) {
     index = images.length - 1;
    }

     document.getElementById('imgsrc').src = images[index];

}














/* Next and Previous Buttons Able and Disable


var images = new Collection([
  "http://images.math.cnrs.fr/IMG/jpg/section8-image.jpg",
  "https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg444.jpg",
  "http://saturnraw.jpl.nasa.gov/multimedia/images/raw/casJPGFullS72/N00183828.jpg"
], "mainImg");

document.getElementById("next_btn").onclick = function() {
  images.next();
};

document.getElementById("prev_btn").onclick = function() {
  images.prev();
}

function Collection(urls, imgID) {
  var imgElem = document.getElementById(imgID);
  var index = 0;

  this.selectImage = function() {
    imgElem.src = urls[index];
  };



  this.next = function() {
    if (++index >= urls.length) {
      index = 0;
    }

    this.selectImage();
  };



  this.prev = function(element) {
    if (--index < 0) {
      index = urls.length - 1;
    }

    this.selectImage();
  };

  // initialize
  this.selectImage();
}
*/
