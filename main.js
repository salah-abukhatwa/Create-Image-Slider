// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number og slides
var slidesCount = sliderImages.length;
console.log(slidesCount)

// Set Current Slide
var currentSlide = 1 ;

// Slide Number Element

var slideNumberElement = document.getElementById('slide-number');
// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handel Click on Previous and Next Button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

// Creat List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
    // Creat LI
    var paginationItem = document.createElement('li');
    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem)
    
}

document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items| Array.from (ES6 Feature)
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
// Loop Through All Bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = `${this.getAttribute('data-index')}`;
        theChecker();
    }
    
}

// Trigger The Checker Function
theChecker();



// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++
    theChecker();
    }
}
// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--
        theChecker();
    }
}


// Creat The Checker Function
function theChecker() {
    
    slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    // Set Active Class on Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    // set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if Current Slide is The First
    if (currentSlide == 1) {
        // Add Disabled Class on Previous Button
        prevButton.classList.add('disabled')
    } else {
        // Remove Disabled Class from Previous Button
        prevButton.classList.remove('disabled')
    }
    // Check if Current Slide is The Latest
    if (currentSlide == slidesCount) {
        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled')
    } else {
        // Remove Disabled Class from Next Button
        nextButton.classList.remove('disabled')
    }

     }

    // Remove All Active Classes From Images and Pagination Bullets
    function removeAllActive() {
        // Loop Through Images
        sliderImages.forEach(function (img) {
            
            img.classList.remove('active');
        });

        // Loop Through Pagination Bullets
        paginationBullets.forEach(function (bullet) {

           bullet.classList.remove('active');
        })

    }
