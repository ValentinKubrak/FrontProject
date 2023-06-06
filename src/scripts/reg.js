//Не працює
/*
document.getElementById('submit').addEventListener('click', async () => {
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const password = document.getElementById('password').value
    const confirmPass = document.getElementById('confirmPass').value

    if (name && mail && password && confirmPass) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, completed: false})
        })

        const test = await res.json()
        console.log(test)

        window.location.href = "../public/login_page.html";
    }
})
*/