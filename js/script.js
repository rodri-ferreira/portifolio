
/*Menu responsivo*/ 
const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    const hamburguer = document.getElementById('hamburguer');
    
    if (nav.style.height == '155px') {
        nav.style.height ='0px';
    } else{
        nav.style.height ='155px';
    }

}

/*Parte: digitando web developer*/ 
btnMenu.addEventListener('click', toggleMenu);

function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() =>{
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}

/*Rolagem suave âncora*/ 
const titulo = document.querySelector('.digitando');
ativaLetra(titulo)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
