// document.getElementsById("nome")
// addEventListener("click", function(){
//         this.window.location = "./index3.html";
//     })
function botao(){
    this.window.location = "./index3.html";
    const texto = document.getElementById('invitename').value;
    localStorage.setItem('Nome da pessoa', texto);
    window.location.href = 'index3.html';
}
let song = document.getElementById("song");
function voltar(){
    // this.window.location = "./index2.html";
    song.play();
}
setTimeout(voltar, 3000);
function nao(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = gerarPosicao(10, 90);
    btn.style.right = gerarPosicao(10, 90);
}
function gerarPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}
const texto = localStorage.getItem('Nome da pessoa');
if (texto){
    document.getElementById('nomeP').textContent += `${texto}`;
}