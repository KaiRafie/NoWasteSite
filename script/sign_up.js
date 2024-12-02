
function getLastUserId() {
    fetch('./data/users.json')
    .then(response => response.json())
    .then(data => {
        const i = 0;

        while (i < data.length) {
            i++;
        }
        console.log(i);
        return i;
    })
}

async function saveUser() {

    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('ent-password').value;
    const confirmPassowrd = document.getElementById('reent-password').value;

    if (password === confirmPassowrd) {
        const userInfo = {
            "userId": getLastUserId(),
            "userName": userName,
            "email": email,
            "password": password
        };

        //TODO: continue implementing the signup feature, need to discover how to save data
    } else {
        alert("Password does not match, please enter Password again")
    }

    
}