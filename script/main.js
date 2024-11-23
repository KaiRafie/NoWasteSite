document.querySelectorAll('.collapse-btn').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        header.classList.toggle('active');
    });
});

document.querySelector('.sidebar-btn').addEventListener('click', function () {
    const aside = document.querySelector('aside');  
    const sidebarButton = document.querySelector('.sidebar-btn');


    aside.classList.toggle('collapsed');  

    if (aside.classList.contains('collapsed')) {
        sidebarButton.style.left = '0';
    } else {
        sidebarButton.style.left = '157px';
    }
    this.classList.toggle('active');
});