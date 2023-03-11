 const usuario=[
    {
    nombre:"luis",
    username:"lorejarena2", 
    userpass:"luis123"
    },
    {
    nombre:"andres",
    username:"anjou124", 
    userpass:"andres123"
    },
    {
    nombre:"Pepito",
    username:"pepito123", 
    userpass:"123456"
    }
]



btn.addEventListener('click',()=>
{
    if(pass.type=="password"){
        pass.type="text"
    }else{
        pass.type="password"
    }
})




login.addEventListener('click',()=>{
if(usuario.find(usuario => usuario.username==user.value)){
    indice=usuario.findIndex(usuario=>usuario.username==user.value)
    if(usuario[indice].userpass==pass.value){
        alert("bienvenido")
        user.value=""
        pass.value=""
        location.href="./html/prinicpal.html"
    }else{
        mostrar_error()
    }
    
}else{
    mostrar_error()
}
})

function mostrar_error(){
    msg.style.display="block";
    setTimeout(()=>{
    msg.style.display="none";
    },1000)
}
