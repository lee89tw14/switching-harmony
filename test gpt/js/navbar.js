// 你的menuData與dropdown初始化程式碼可以寫在這裡
const menuData = {
    hardware: [
        { text: 'Topology', link: 'page4.html', icon: 'fa-solid fa-arrows-to-circle' },
        { text: 'Hardware', link: 'page5.html', icon: 'fas fa-tools' },
        // { text: 'Software', link: 'page5.html', icon: 'fas fa-laptop-code' },
        { text: 'IP table（参考用）', link: 'iptable.html', icon: 'fa-solid fa-network-wired' }
    ]
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
    // 如果你想切換為其他menuData的內容，可於此調整
};

// 先fetch navbar
fetch('js/navbar.html')
    .then(response => response.text())
    .then(data => {
        // 將navbar的HTML插入
        document.getElementById('navbar-container').innerHTML = data;

        // 插入完成後，再綁定下拉選單的JS行為
        initDropdownMenu();
    })
    .catch(error => console.error('Error loading navbar:', error));

function initDropdownMenu() {
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
}
