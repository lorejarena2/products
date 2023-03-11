// import {rotar} from "./carrousel";
// rotar()
let elementos=''
let cont=0
const productos=document.querySelector('.tarj')
const url="https://fakestoreapi.com/products"
async function obtener(){
    let respuesta=await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos) 
    datos.forEach(producto=>{
         productos.innerHTML+=`
         <div class="tarjeta">
             <div class="tit">
             ${producto.title}
             </div>
             <div class="ima">
             <img class="mover" src="${producto.image}" alt="">
             </div>
             <div class="descrip">
            ${producto.description}
             </div>
             <div class="precio">
             ${producto.price}
             </div>
             <div class="boton">
                 <div class="comprar" id=${cont}>
                     Comprar
                 </div>
             </div>
         </div>
         ` 
         cont++
    })
    
}

obtener()

addEventListener('click',(event)=>{
    if(event.target.className=="comprar"){
        document.getElementById('modal').style.display='flex'
   
    document.querySelector('.contenido').innerHTML=
    `
         <div class="tarjeta">
             <div class="tit">
             ${elementos[event.target.id].title}
             </div>
             <div class="ima">
             <img class="mover" src="${elementos[event.target.id].image}" alt="">
             </div>
             <div class="descrip">
             ${elementos[event.target.id].description}
             </div>
             <div class="precio"> 
             ${elementos[event.target.id].price}
             </div>
             <div class="contenedor_botones">
                <div class="boton">
                    <div class="comprar" id=${elementos[event.target.id].id-1}>
                      Comprar
                    </div>
                    <div class="cancelar">
                      Salir
                    </div>
                </div>
            </div>
             
         </div>
         ` 
}
})

const boton_cerrar=document.querySelector('.cerrar')
boton_cerrar.addEventListener('click',()=>{
document.getElementById('modal').style.display='none'
})

const ventana=document.querySelector('.ventana')
ventana.addEventListener('click',event=>{
    console.log(event.target.id)
    if(event.target.className=='cancelar'){
        document.getElementById('modal').style.display='none'
    }
    if(event.target.className=='cerrar'){
        document.getElementById('modal').style.display='none'
    }
    if(event.target.className=="comprar"){
        alert(' ¿ Esta seguro que desea comprar ' + elementos[event.target.id].title + '?')
        let nombre=elementos[event.target.id].title
        console.log(nombre)
        localStorage.setItem('key',nombre)
        location.href="./hola.html"
    }

})