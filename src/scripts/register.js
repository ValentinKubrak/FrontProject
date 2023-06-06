let name = document.querySelector('#name')
let mail = document.querySelector('#mail')
let password = document.querySelector('#password')
let confirmPass = document.querySelector('#confirmPass')
let submit = document.querySelector('#submit')

let users = {};

function User(name, mail, password) {
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.confirmPass = confirmPass;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value
    const mailUser = mail.value
    const passwordUser = password.value
    const confirmPassUser = confirmPass.value

    const user = new User(nameUser, mailUser, passwordUser, confirmPassUser)

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users)
})