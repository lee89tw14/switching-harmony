document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var submenu = dropdown.querySelector('.submenu');

    // 在JS中定義子選單項目，包含Font Awesome的class名稱
    var menuItems = [
        { text: 'Hardware', link: 'page3.html', icon: 'fas fa-tools' },
        { text: 'Software', link: 'page4.html', icon: 'fas fa-laptop-code' },
        { text: 'IP table', link: 'iptable.html', icon: 'fa-solid fa-network-wired' }
    ];

    dropdown.addEventListener('mouseenter', function() {
        // 清空submenu (以防已存在內容)
        submenu.innerHTML = '';
        
        // 動態建立子選單項目
        menuItems.forEach(function(item) {
            var li = document.createElement('li');
            
            var a = document.createElement('a');
            a.href = item.link;

            // 建立<i>標籤來放置Font Awesome圖示
            var iconElem = document.createElement('i');
            iconElem.className = item.icon; // 使用menuItems中定義的icon class
            // 將icon加入a中，並在icon後加入一點空白再接文字
            a.appendChild(iconElem);
            a.appendChild(document.createTextNode(' ' + item.text));
            
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
