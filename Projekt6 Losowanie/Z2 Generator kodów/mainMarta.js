const chars = 'ABCDEFGIJK0123456789';
const codeLength = 10;
const numberOfCodes = 3;

const btnGenerateCode = document.querySelector('button');
const sectionCodes = document.querySelector('section');

function generateCode() {
    for (let index = 0; index < numberOfCodes; index++) {
        const div = document.createElement('div');
        sectionCodes.appendChild(div);
        let code = '';
        for (let index = 0; index < codeLength; index++) {
            let charIndex = Math.floor(Math.random() * chars.length);
            code = code + chars[charIndex];
        }
        div.textContent = code;
    }

}

btnGenerateCode.addEventListener('click', generateCode)