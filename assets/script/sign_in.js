//if the user decides to continue to the website as a guest
document.querySelector('#guest-btn').addEventListener('click', () => {
    localStorage.setItem('isGuest', true);
})

//if the user decides to continue with email and password

document.querySelector('.signin-btn').addEventListener('click', () => {
    //have the input from the user
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //fetch the data and verify the credintials
    fetch('../assets/data/users.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i< data.length; i++) {
         const user = data[i];
           if (user.email === email) {
                if (user.password === password) {
                    Cookies.set("userId", i);
                    localStorage.setItem('isGuest', false);
                    window.location.href = 'main.html';
                } else {
                    alert("Incorrect password, please try again")
                }
           } else {
                alert("Email not found!");
           }
        }
    })
})
