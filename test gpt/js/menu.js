// document.addEventListener('DOMContentLoaded', function() {
//     var dropdown = document.querySelector('.dropdown');
//     var submenu = dropdown.querySelector('.submenu');

//     // 在JS中定義子選單項目，包含Font Awesome的class名稱
//     var menuItems = [
//         { text: 'Hardware', link: 'page3.html', icon: 'fas fa-tools' },
//         { text: 'Software', link: 'page4.html', icon: 'fas fa-laptop-code' },
//         { text: 'IP table', link: 'iptable.html', icon: 'fa-solid fa-network-wired' }
//     ];

//     dropdown.addEventListener('mouseenter', function() {
//         // 清空submenu (以防已存在內容)
//         submenu.innerHTML = '';
        
//         // 動態建立子選單項目
//         menuItems.forEach(function(item) {
//             var li = document.createElement('li');
            
//             var a = document.createElement('a');
//             a.href = item.link;

//             // 建立<i>標籤來放置Font Awesome圖示
//             var iconElem = document.createElement('i');
//             iconElem.className = item.icon; // 使用menuItems中定義的icon class
//             // 將icon加入a中，並在icon後加入一點空白再接文字
//             a.appendChild(iconElem);
//             a.appendChild(document.createTextNode(' ' + item.text));
            
//             li.appendChild(a);
//             submenu.appendChild(li);
//         });
        
//         // 插入內容後顯示
//         submenu.style.display = 'block';
//     });

//     dropdown.addEventListener('mouseleave', function() {
//         // 移除所有子選單項目
//         submenu.innerHTML = '';
//         // 隱藏submenu
//         submenu.style.display = 'none';
//     });
// });

const menuData = {
    hardware: [
        { text: 'Hardware', link: 'page3.html', icon: 'fas fa-tools' },
        { text: 'Software', link: 'page4.html', icon: 'fas fa-laptop-code' },
        { text: 'IP table', link: 'iptable.html', icon: 'fa-solid fa-network-wired' }
    ],
    // hardware: [
    //     { text: 'CPU', link: 'cpu.html', icon: 'fas fa-microchip' },
    //     { text: 'Memory', link: 'memory.html', icon: 'fas fa-memory' },
    //     { text: 'Storage', link: 'storage.html', icon: 'fas fa-hdd' }
    // ],
    // software: [
    //     { text: 'IDE', link: 'ide.html', icon: 'fas fa-code' },
    //     { text: 'Dev Tools', link: 'devtools.html', icon: 'fas fa-tools' },
    //     { text: 'Debugger', link: 'debugger.html', icon: 'fas fa-bug' }
    // ],
    // network: [
    //     { text: 'Switch', link: 'switch.html', icon: 'fas fa-exchange-alt' },
    //     { text: 'Router', link: 'router.html', icon: 'fas fa-route' },
    //     { text: 'Firewall', link: 'firewall.html', icon: 'fas fa-shield-alt' }
    // ]
};
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var submenu = dropdown.querySelector('.submenu');
        var menuType = dropdown.getAttribute('data-menu-type');

        dropdown.addEventListener('mouseenter', function() {
            // 清空 submenu
            submenu.innerHTML = '';

            // 取得對應的子選單項目
            var items = menuData[menuType];
            if (items && items.length > 0) {
                items.forEach(function(item) {
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.href = item.link;

                    var iconElem = document.createElement('i');
                    iconElem.className = item.icon;
                    a.appendChild(iconElem);
                    a.appendChild(document.createTextNode(' ' + item.text));

                    li.appendChild(a);
                    submenu.appendChild(li);
                });
            }

            submenu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            submenu.innerHTML = '';
            submenu.style.display = 'none';
        });
    });
});