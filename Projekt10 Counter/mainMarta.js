// mechanizm domknięcia (closure) - możemy wewnątrz funkcji zadeklarować zmienną i korzystać z niej w innych funkcjach, jeśli istnieje do tej zmiennej referencja. Zmienna number nie jest widoczna globalnie.
const add = () => {
    let number = 0;
    let notUsed = 2;
    return () => {
        number++;
        document.body.textContent = number;
    }
}

const countClicks = add();
window.addEventListener('click', countClicks)