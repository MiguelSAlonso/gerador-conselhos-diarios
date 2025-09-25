const conselhos = [
    "Acredite em você mesmo.", "O primeiro passo é o mais importante.",
    "A persistência realiza o imposível.","Aprende algo novo hoje.",
    "Seja gentil com todos que encontrar."
]
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho(){
    const indice = Math.floor(Math.ramdom() * (conselhos.lenght));
    conselhoTexto.textContent = conselhos[indice];
}
novoConselhoBtn.addEventListener('click', gerarConselho);
