// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//hacemos un forEach para recorrer el grupo de botones
buttons.forEach(button =>{
    //Dejamos a la espera que escuche un click
    button.addEventListener("click", (event)=>{
        //Utilizamos event.target para saber que elemento ha emitido el evento click
        const color = event.target.id;
        body.style.background = color;
    })
})

