// 頁面分頁設定
var currentPage = 1; // 根據實際頁面修改數值
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

// 導覽列顯示/隱藏
var navToggleBtn = document.getElementById('navToggleBtn');
var mainNav = document.getElementById('mainNav');

navToggleBtn.addEventListener('click', function() {
    if (mainNav.classList.contains('show')) {
        mainNav.classList.remove('show');
        mainNav.classList.add('hide');
    } else {
        mainNav.classList.remove('hide');
        mainNav.classList.add('show');
    }
});

// Slider 相關控制
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

updateSliderPosition(); // 初始化 Slider 位置
