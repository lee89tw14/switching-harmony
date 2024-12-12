document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var submenu = dropdown.querySelector('.submenu');

    // 子選單選項資料可以放在JS中，避免在HTML中一開始就出現
    var menuItems = [
        { text: 'Hardware', link: 'page3.html' },
        { text: 'Software', link: 'page4.html' },
    ];

    dropdown.addEventListener('mouseenter', function() {
        // 清空submenu (以防已存在內容)
        submenu.innerHTML = '';
        
        // 動態建立子選單項目
        menuItems.forEach(function(item) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = item.link;
            a.textContent = item.text;
            li.appendChild(a);
            submenu.appendChild(li);
        });
        
        // 插入內容後顯示
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
        // 移除所有子選單項目
        submenu.innerHTML = '';
        // 隱藏submenu
        submenu.style.display = 'none';
    });
});