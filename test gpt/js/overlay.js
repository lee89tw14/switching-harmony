// 放大圖片的Overlay功能
function showOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    overlayImage.src = imageSrc;
    overlay.classList.add('show');
}
function hideOverlay(event) {
    // 如果點擊目標是 overlay 自身(背景區域)而非圖片本身才關閉
    if (event.target.id === 'overlay') {
        var overlay = document.getElementById('overlay');
        overlay.classList.remove('show');
        var overlayImage = document.getElementById('overlayImage');
        overlayImage.src = ""; // 清空圖片
    }
}
function hideOverlayButton(event) {
    // 按鈕點擊後直接關閉 overlay，避免被 hideOverlay(event) 的判斷影響
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    overlay.classList.remove('show');
    overlayImage.src = "";
    
    // 為避免事件冒泡影響 overlay 的點擊事件，可加上阻止冒泡
    event.stopPropagation();
}
