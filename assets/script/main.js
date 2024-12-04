//have all the necessary elements for the account
const accountContainer = document.querySelector('.account-container');
const accountTemplate = document.querySelector('.account-template');
const clone = accountTemplate.content.cloneNode(true);

const letter = clone.querySelector('.first-letter');
const name = clone.querySelector('.user-name');

const userIndex = Cookies.get("userId");

//load all data for the first time
document.addEventListener('DOMContentLoaded', () => {
    //load the user template and container


    //check if the user continued as a guest or signed in

    const isGuest = localStorage.getItem('isGuest') === 'true';

    console.log("isGuest: " + isGuest);
    if (isGuest) {
        letter.textContent = '-';
        name.textContent = 'Guest';
    } else {
        fetch("../assets/data/users.json")
            .then(response => response.json())
            .then(data => {
                const userName = data[userIndex].userName.substring(0, 6);
                const firstLetter = userName[0].toUpperCase();
                console.log("userIndex:", userIndex, "userName:", userName, "firstLetter:", firstLetter);
                letter.textContent = firstLetter;
                name.textContent = userName;
            })
            .catch(error => {
                console.error("Error fetching or processing user data:", error);
            });
        document.querySelector('.sign-inbtn').textContent = 'Sign out';
    }
    accountContainer.appendChild(clone);


    //fetch all data
    fetch('../assets/data/food.json')
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
        fetch('../assets/data/food.json')
            .then(response => response.json())
            .then(data => {
                loadFood(data)
            })
            .catch(error => {
                console.error('Error loading the data:', error);
            });
    });
});

//search bar functionality
const searchBarButtons = document.querySelector('#search-bar-btn');

//add the event listener to the search bar when inputting to search for a word in the 'food title' or 'food provider name'

searchBarButtons.addEventListener('click', (e) => {
    const searchBartext = document.querySelector('#search-bar').value.trim().toLowerCase();

    fetch('../assets/data/food.json')
            .then(response => response.json())
            .then(data => {
                const filteredItems = data.filter(item =>
                    item.foodTitle.toLowerCase().includes(searchBartext) ||
                    item.providerName.toLowerCase().includes(searchBartext)
                );
            
                unloadFood();
                loadFood(filteredItems);
            })
            .catch(error => {
                console.error('Error loading the data:', error);
            });

    
});