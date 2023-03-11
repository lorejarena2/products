let variable=localStorage.getItem('key')
console.log(variable)
const finalizar=document.querySelector('.finalizar')

finalizar.innerHTML=`
        <div class="title">
            <h1>
                Gacias por su compra...
            </h1>
        </div>
        <div class="datos">
            <h2 class="uno"> Usted ha comprado: </h2>
            <h2 class="dos"> ${variable} </h2>
        </div>
        <div class="fin">
            En segundos será reedirigido al sitio del comercio...
        </div>
`
function redirigir(){
    location.href="./prinicpal.html"
}

setTimeout(redirigir,3000)
