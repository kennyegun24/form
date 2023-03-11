const form = document.querySelector('.form')

const nameChk = () => {
    const names = document.querySelector('#name').value
    if (names.length === 0) {
        document.querySelector('.nameSpan').innerText = 'error'
        return false
    }
    else {
        document.querySelector('.nameSpan').innerText = 'Name filled'
        return true
    }
}

const emailChk = () => {
    const email = document.querySelector('#email').value
    if (email.length == 0) {
        document.querySelector('.emailSpan').innerText = 'error'
        return false
    }
    if (!email.match(/^[a-z-0-9.!#$%&'*+/=?^`{|}~-]+@[a-z-0-9]*\.[a-z]+(?:\.[a-z-0-9]+)*$/)) {
        document.querySelector('.emailSpan').innerText = 'Valid email address only'
        return false
    }
    else {
        document.querySelector('.emailSpan').innerText = 'Email filled'
        return true
    }
}

const pswChk = () => {
    const password = document.querySelector('#password').value
    if (password.length === 0) {
        document.querySelector('.passwordSpan').innerText = 'error'
        return false
    }

    if (password.length < 8) {
        document.querySelector('.passwordSpan').innerText = 'Password should be more than 8 characters'
        return false
    }

    else {
        document.querySelector('.passwordSpan').innerText = 'Password correct'
        return true
    }
}

const numChk = () => {
    const number = document.querySelector('#number').value
    if (number.length == 0) {
        document.querySelector('.numSpan').innerText = 'error'
        return false
    }
    else {
        document.querySelector('.numSpan').innerText = 'Number Filled'
        return true
    }
}

form.addEventListener('submit', (e) => {
    if (!nameChk() || !numChk() || !emailChk() || !pswChk()) {
        e.preventDefault()
        return false
    } return true
})

// const submit = (e) => {
//     e.preventDefault()
//     console.log('hey')

// }