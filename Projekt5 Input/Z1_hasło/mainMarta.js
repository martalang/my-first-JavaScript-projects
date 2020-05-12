const input = document.querySelector('input');
const password = 'marta';

let isValid = false;

// =============================
// funkcja strzałkowa:

const validatePassword = (e) => {
    // e.target.value.toLowerCase() === password.toLowerCase() ?    // hasło bez uwzględniania wielkości liter
    e.target.value === password ?
        isValid = true :
        isValid = false;
}

// zwykła deklaracja funkcji: -> możliwe odwołanie przez THIS

// function validatePassword(e) {
//     this.value === password ?
//         isValid = true :
//         isValid = false;
// }

const logOn = (e) => {
    switch (e.keyCode) {
        case 13:
            isValid == true ?
                console.log('poprawne') :
                console.log('spróbuj ponownie')
            break;

        default:
            break;
    }
}




input.addEventListener('input', validatePassword);
input.addEventListener('keyup', logOn);