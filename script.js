//Botões

const btnContraste = document.getElementById("btn-constrate");
const btnAumentar = document.getElementById("btn-aumentar-texto")
const btnDiminuir = document.getElementById("btn-diminuir-texto")

//Mudar tamanho da fonte

let tamanhoAtualFonte = 100;

//alto constraste

btnContraste.addEventListner("click", ()=>{
    document.body.classList.
 
    //leitor de tela

    const ativo = document.body.classList.contains("alto-contraste");
    btnContraste.setAttribute("aria-pressed", ativo);

});

//aumentar o texto

btnAumentar.addEventListener("click", () =>{
    if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte +=10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`
    }       
});

//diminuir o texto

btnDiminuir.addEventListener("click", () =>{
    if (tamanhoAtualFonte > 90){
        tamanhoAtualFonte -=10;
        document.documentElement.style.fontSize =  ${tamanhoAtualFonte}%`
    }

    });

