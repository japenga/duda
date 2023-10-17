// document.getElementsById("nome")
// addEventListener("click", function(){
//         this.window.location = "./index3.html";
//     })
function botao(){
    this.window.location = "./index3.html";
}
function voltar(){
    this.window.location = "./index2.html";
}
function nao(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = gerarPosicao(10, 90);
    btn.style.left = gerarPosicao(10, 90);
}
function gerarPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}