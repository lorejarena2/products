export function rotar(){
    if(indice<fotos.length){
        imagencita.src=fotos[indice]
        indice++
    }else{
        indice=0
    }
}

const fotos=[
    '../images/carrousel/dos.jpg',
    '../images/carrousel/uno.jpg'
]

let indice=0

setInterval(rotar,2000)
