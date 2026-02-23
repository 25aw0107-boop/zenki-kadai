// 页面元素动画淡入淡出效果
function setupFadeToggleOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');   // 滑入：添加渐入类
            } else {
                entry.target.classList.remove('visible'); // 滑出：移除类，淡出
            }
        });
    }, {
        threshold: 0.3  // 元素进入视口30%以上时触发
    });

    // 所有 fade-toggle 类名的元素都启用动画监听
    document.querySelectorAll('.fade-toggle').forEach(el => observer.observe(el));
}

// 页面加载后执行一次
window.addEventListener('DOMContentLoaded', setupFadeToggleOnScroll);


// 返回页面顶部功能
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault(); // 阻止默认跳转 #
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});



// 移动端汉堡包按钮
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');

// 点击汉堡按钮
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    menuOverlay.classList.toggle('show'); // 让遮罩层显示
});

// 点击遮罩层时关闭菜单
menuOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
});