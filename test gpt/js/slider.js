// // // Slider 相關
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


// var slideIndex = 0;
// var slideWrapper = document.querySelector('.slide-wrapper');
// var totalSlides = document.querySelectorAll('.slide').length;
// // 設定自動輪播的間隔時間（毫秒）
// var autoplayInterval = 3000; // 每 3 秒切換一次
// // 啟動自動輪播計時器
// var autoplayTimer = setInterval(nextSlide, autoplayInterval);
// function nextSlide() {
//     slideIndex = (slideIndex + 1) % totalSlides;
//     updateSliderPosition();
//     resetAutoplayTimer();
// }
// function prevSlide() {
//     slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
//     updateSliderPosition();
//     resetAutoplayTimer();
// }
// function updateSliderPosition() {
//     slideWrapper.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
// }
// function resetAutoplayTimer() {
//     clearInterval(autoplayTimer);
//     autoplayTimer = setInterval(nextSlide, autoplayInterval);
// }
// // 暫停和恢復自動輪播
// var sliderContainer = document.querySelector('.slider-container');
// sliderContainer.addEventListener('mouseenter', function() {
//     clearInterval(autoplayTimer);
// });
// sliderContainer.addEventListener('mouseleave', function() {
//     autoplayTimer = setInterval(nextSlide, autoplayInterval);
// });
// // 針對上一張和下一張按鈕的事件監聽器（如果有的話）
// document.querySelector('.next').addEventListener('click', nextSlide);
// document.querySelector('.prev').addEventListener('click', prevSlide);


// // document.addEventListener('DOMContentLoaded', function() {
// //     var slideIndex = 0;
// //     var slideWrapper = document.querySelector('.slide-wrapper');
// //     var slides = document.querySelectorAll('.slide');
// //     var totalSlides = slides.length;

// //     // 設定自動輪播的間隔時間（毫秒）
// //     var autoplayInterval = 3000; // 每 3 秒切換一次

// //     // 啟動自動輪播計時器
// //     var autoplayTimer = setInterval(nextSlide, autoplayInterval);

// //     function nextSlide() {
// //         slideIndex = (slideIndex + 1) % totalSlides;
// //         updateSliderPosition();
// //         resetAutoplayTimer();
// //     }

// //     function prevSlide() {
// //         slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
// //         updateSliderPosition();
// //         resetAutoplayTimer();
// //     }

// //     function updateSliderPosition() {
// //         slideWrapper.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
// //     }

// //     function resetAutoplayTimer() {
// //         clearInterval(autoplayTimer);
// //         autoplayTimer = setInterval(nextSlide, autoplayInterval);
// //     }

// //     // 綁定按鈕點擊事件
// //     document.querySelector('.prev').addEventListener('click', prevSlide);
// //     document.querySelector('.next').addEventListener('click', nextSlide);

// //     // 暫停與恢復自動輪播功能
// //     var sliderContainer = document.querySelector('.slider-container');
// //     sliderContainer.addEventListener('mouseenter', function() {
// //         clearInterval(autoplayTimer);
// //     });

// //     sliderContainer.addEventListener('mouseleave', function() {
// //         autoplayTimer = setInterval(nextSlide, autoplayInterval);
// //     });
// // });
