let contador = 0;
let arr = document.querySelectorAll('._acas');
arr.forEach((v, i) => {
    if (!v.classList.contains('_acat')) {
        setTimeout(() => {
            v.click();
            contador++;
            console.log('x já seguiu ' + contador + ' pessoas');
        }, i * 20000)
    } else {
        setTimeout(() => {
            console.log('você já segue este usuário.');
        }, i * 1000)
    }
});