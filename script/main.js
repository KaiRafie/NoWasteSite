
// to collape the options in the sidebar
document.querySelectorAll('.collapse-btn').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        header.classList.toggle('active');
    });
});
// to collapse the sidebar as a whole
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

//load all data for the first time
document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/food.json')
        .then(response => response.json())
        .then(data => {
            firstLoad(data);
        })
        .catch(error => {
            console.error('Error loading the data:', error);
        });
});


//if the state of any of the checkboxes change, load the data accordingly
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        fetch('./data/food.json')
            .then(response => response.json())
            .then(data => {
                loadFood(data)
            })
            .catch(error => {
                console.error('Error loading the data:', error);
            });

    });
});