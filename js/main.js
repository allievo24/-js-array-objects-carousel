const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


let imagVisibile = 0;

/*recupero elemento dal dom dove andro ad inserire gli element*/
const imgCarouselDom = document.querySelector('.img-carousel')
const miniImagDom = document.querySelector('.mini-imag')
/*ciclo gli elementi*/
for (i = 0; i < images.length; i++) {
    /*creo elemnti da js con una funzione*/
    creacarousel(images[i]);
    creaMiniImag(images[i]);
    
}
/*recuper gli elementi creati */
const listaImage = document.getElementsByClassName('descrizione');
/*punto il primo elemento e gli aggiungo la classe show che lo rende visibile */
listaImage[imagVisibile].classList.add('show');

let imgAttiva = document.querySelectorAll('.mini');
imgAttiva[imagVisibile].classList.add('attiva');


console.log(listaImage)

/*eventi del click */

const avanti = document.querySelector('.avanti');
avanti.addEventListener('click',
    function () {
        listaImage[imagVisibile].classList.remove('show');
        imgAttiva[imagVisibile].classList.remove('attiva');
        
        /*ciclo infinito*/
        if(imagVisibile == images.length-1){
            imagVisibile = 0

        }else{
          imagVisibile++;  
        }


        
        listaImage[imagVisibile].classList.add('show');
        imgAttiva[imagVisibile].classList.add('attiva');

       
       
       
       /*parte del codice risponsabile di far spari le frecce
         indietro.classList.remove('hidden');
        if (imagVisibile == listaImage.length - 1) {
            avanti.classList.add('hidden');

        }*/



    }
)




const indietro = document.querySelector('.indietro');
indietro.addEventListener('click',
    function () {
        listaImage[imagVisibile].classList.remove('show');
        imgAttiva[imagVisibile].classList.remove('attiva');
        
        if(imagVisibile == 0){
            imagVisibile = images.length-1

        }else{
            imagVisibile--;
        }    
        
        
        listaImage[imagVisibile].classList.add('show');
        imgAttiva[imagVisibile].classList.add('attiva');

         

       /*parte del codice risponsabile di far spari le frecce

        avanti.classList.remove('hidden')
        if (imagVisibile == 0) {
            indietro.classList.add('hidden')

        }*/

    }
)

/*let intervallo = null;
let step = 1
const start =() => {
    intervallo = setInterval(function(){
        miniImagDom.scrollLeft = miniImagDom.scrollLeft + step;
         
        

    },10);

};

start ()*/












function creacarousel(images) {
    imgCarouselDom.innerHTML +=
        `<div class="descrizione">
                                    <h1>${images.title}</h1>
                                    <p>${images.description}</p>
                                    <img src="${images.url}" alt="" />
                                       
                               </div> `

}
function creaMiniImag(images) {
    miniImagDom.innerHTML += `<img class="mini" src="${images.url}" alt="" />`



}