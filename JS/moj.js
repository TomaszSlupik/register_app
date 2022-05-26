const inputUser  = document.querySelector('.inputUser')
const inputPassword = document.querySelector('.inputPassword')
const inputReplay = document.querySelector('.inputReplay')
const inputEmail = document.querySelector('.inputEmail')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const send = document.querySelector('.send')
const answerUser = document.querySelector('.answerUser')
const answerPassword = document.querySelector('.answerPassword')
const answerPasswordReplay = document.querySelector('.answerPasswordReplay')
const answerEmail = document.querySelector('.answerEmail')
const numbers = /[0-9]/i;

const clear = () => {
    if (inputUser.value == '' || inputPassword.value == '' ||  inputReplay == '' ||inputEmail.value=='') {
        send.style.display='block'
        
    }

    else {
        send.textContent='Zarejstrowałeś się pomyślnie'
        send.style.color = 'green'
    }

}


const all = () => {
    if (inputUser.value == '' && inputPassword.value == '' &&  inputReplay == '' && inputEmail.value=='') {
        send.textContent='Musisz uzupełnić wszystkie pola'
        
    }
    
}

const user = () => {
    if (inputUser.value == '') {
        answerUser.style.visibility = 'visible'
    }
    else {
        answerUser.style.visibility = 'hidden'
    }
}

const pass = () => {
    if (inputPassword.value == '') {
        answerPassword.style.visibility = 'visible'
    }
    else {
        answerPassword.style.visibility ='hidden'
    }
}



const passReplay = () => {
    if (inputReplay.value == '') {
        answerPasswordReplay.style.visibility = 'visible'
    }
    else {
        answerPasswordReplay.style.visibility = 'hidden'
    }
}

const email = () => {
    if (inputEmail.value=='') {
        answerEmail.style.visibility = 'visible'
    }
    else {
        answerEmail.style.visibility = 'hidden'
    }
}

const clearAll = () => {
    [inputUser, inputPassword, inputReplay, inputEmail].forEach(element =>{
        element.value=''
        answerUser.style.visibility='hidden'
        answerPassword.style.visibility='hidden'
        answerPasswordReplay.style.visibility = 'hidden'
        answerEmail.style.visibility = 'hidden'
    })
    send.style.display='none'
    send.textContent='Musisz uzupełnić wszystkie pola'
    send.style.color='red'
}



btn1.addEventListener('click', user)
btn1.addEventListener('click', pass)
btn1.addEventListener('click', passReplay)
btn1.addEventListener('click', clear)
btn1.addEventListener('click',all)
btn1.addEventListener('click', email)
btn2.addEventListener('click', clearAll)



