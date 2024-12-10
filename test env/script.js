var currentPage = 1; // 根據實際頁面修改
var totalPages = 20; // 設定總頁數

var prevPageBtn = document.getElementById('prevPageBtn');
var nextPageBtn = document.getElementById('nextPageBtn');

function updatePageNavButtons() {
    if (currentPage <= 1) {
        prevPageBtn.disabled = true;
    } else {
        prevPageBtn.disabled = false;
    }

    if (currentPage >= totalPages) {
        nextPageBtn.disabled = true;
    } else {
        nextPageBtn.disabled = false;
    }
}

updatePageNavButtons();

prevPageBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        window.location.href = 'page' + (currentPage - 1) + '.html';
    }
});

nextPageBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
        window.location.href = 'page' + (currentPage + 1) + '.html';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        if (currentPage > 1) {
            window.location.href = 'page' + (currentPage - 1) + '.html';
        }
    } else if (event.key === 'ArrowRight') {
        if (currentPage < totalPages) {
            window.location.href = 'page' + (currentPage + 1) + '.html';
        }
    }
});

// Overlay 顯示/關閉
function showOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    overlayImage.src = imageSrc;
    overlay.classList.add('show');
}

function hideOverlay(event) {
    if (event.target.id === 'overlay') {
        var overlay = document.getElementById('overlay');
        var overlayImage = document.getElementById('overlayImage');
        overlay.classList.remove('show');
        overlayImage.src = "";
    }
}

function hideOverlayButton(event) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    overlay.classList.remove('show');
    overlayImage.src = "";
    event.stopPropagation();
}

// Slider 相關
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var slideWrapper = document.getElementById("slideWrapper");
var totalSlides = slides.length;

function updateSliderPosition() {
    slideWrapper.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSliderPosition();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}

updateSliderPosition(); 
