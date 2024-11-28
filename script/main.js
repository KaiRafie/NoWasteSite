//load all data for the first time
document.addEventListener('DOMContentLoaded', () => {
    //fetch all data
    fetch('./data/food.json')
        .then(response => response.json())
        .then(data => {
            firstLoad(data);
        })
        .catch(error => {
            console.error('Error loading the data:', error);
        });

    //have the buttons active
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.name !== 'nuts' && checkbox.name !== 'dairy' && checkbox.name !== 'fish' && checkbox.name !== 'soy')
            checkbox.checked = true;
    })

    //have the options open
    
    document.querySelectorAll('.collapse-btn').forEach((header) => {
        const content = header.nextElementSibling;
        header.classList.toggle('active');
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    });
});

// to collape the options in the sidebar when clicking on the arrow
document.querySelectorAll('.collapse-btn').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        header.classList.toggle('active');
    });
});

// to collapse the sidebar as a whole when clicking on the sidebar button
document.querySelector('.sidebar-btn').addEventListener('click', function () {
    //sidebar
    const aside = document.querySelector('aside');
    const sidebarButton = document.querySelector('.sidebar-btn');

    //the right sidecontent
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    aside.classList.toggle('collapsed');

    if (aside.classList.contains('collapsed')) {
        sidebarButton.style.left = '0';
        main.style.marginLeft = '0';
        footer.style.marginLeft = '0';
    } else {
        sidebarButton.style.left = '157px';
        main.style.marginLeft = '150px';
        footer.style.marginLeft = '170px';
    }
    this.classList.toggle('active');
});

//if the state of any of the checkboxes change, reload the data accordingly
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