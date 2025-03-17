let amigos = []
function agregarAmigo(){
if (document.getElementById("amigo").value == '') {
    alert("Por favor, inserte un nombre.");
} else{
amigos.push(document.getElementById("amigo").value)
document.getElementById("amigo").value =''
console.log(amigos[0])
const listaAmigos=document.getElementById("listaAmigos");
listaAmigos.innerHTML=""
for (let i = 0; i < amigos.length; i++) {
    const namigolista= document.createElement("li")
    namigolista.textContent=amigos[i]
    listaAmigos.append(namigolista)
  }
}
}
function sortearAmigo(){
  elegido=Math.floor(Math.random()*amigos.length);
  const listaAmigos=document.getElementById("listaAmigos");
  listaAmigos.innerHTML=""
  listaAmigos.style.color='green'
  const namigolista= document.createElement("li")
  console.log(elegido)
  namigolista.textContent="El amigo secreto sorteado es: "+amigos[elegido]
  listaAmigos.append(namigolista)
}
 
