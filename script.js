//O Q PRECISO DE ENTRADA? O Q DEVE SAIR? COMO FAZER ESSA AÇÃO?//

// DIVIDIR OS PROBLEMAS EM PROBLEMAS MENORES//

//NESSE DESAFIO O PRINCIPAL PROBLEMA SERIA CALCULAR O IMC, ENTÃO VAMOS COMEÇAR POR ELE//

/*let niveis = ["Muito abaixo do peso", 
              "Abaixo do peso", 
              "Peso normal",
              "Acima do peso",
              "Obesidade grau I", 
              "Obesidade grau II",
              "Obesidade grau III"]

//para calcular o IMC de varias pessoas usarei novamente"Array"/

let pessoas = ["Antonio", "Alexandre", "Igor", "pessoa"]
let massas = [100, 68,79, 40]
let alturas = [1.81, 1.75, 1.68, 1.78]

//modificar let imc = calcular (massas[0], alturas[0]); vai mostrar  o estado da pessoa "Antonio"//

//para imprimir as 3 pessoas juntas faremos outras modificaçoes//

function calcularIMC (massa, altura){

    let imc = massa / (altura **2);
     return imc
}

//agora vamos ver se funciona//

//console.log(calcularIMC(100,1.90));

//mas o que "27" quer dizer? Agora criarei niveis para descobrir//

function verificarNivel (imc){

    let nivel = 0;

//valores dos niveis retirados de uma site especifico//

        if (imc < 17){
            nivel = 0
        }else if (imc < 18.5){
            nivel = 1
        }else if (imc < 25){
            nivel = 2
        }else if (imc < 30){
            nivel = 3
        }else if (imc < 35){
            nivel = 4
        }else if (imc < 40){
            nivel = 5
        }else {
            nivel = 6
        }
            return nivel
}

for(let indice = 0; indice < pessoas.length; indice++){
let pessoa = pessoas[indice];
let massa = massas[indice];
let altura = alturas[indice];

let imc = calcularIMC (massa, altura);
let nivel = verificarNivel(imc);

console.log("Nome:" + pessoa);
console.log("Peso:" + massa);
console.log("Altura:" + altura);
console.log("IMC:" +imc.toFixed(2));
console.log(niveis[nivel]);
console.log(" ");
}
                                                */

// função  start é uma padrão utilizado no mercado, por isso criamos ela
function start(){

    //console.log("start");

    //console.log(calculateIMC(98, 1.78));

    var buttonCalculeIMC = document.querySelector("#button-calculate-imc");
    //console.log(buttonCalculeIMC);
    //buttonCalculeIMC.textContent="modifiquei"; //exemplo- assim mudaria o texto do botao para "modifiquei" atraves do js com textContent
    //no botão preciso adc um escutador de evento chamado addeventListener para poder dar vida a ele
    buttonCalculeIMC.addEventListener('click', handleButtonClick) //o que vou fazer QUANDO o botão for clicado? 
    //É bom prefixar a função com "handle" = lidar com. Logo preisarei criar a function handleButtonClick

}

function calculateIMC (weight,height){

    return weight / (height * height);

}

function handleButtonClick(){

    //console.log("cliquei");

    var inputWeight = document.querySelector("#input-weight"); //console: vai mostrar todo elemento inputeWeight do html
    var inputHeight = document.querySelector("#input-height"); //console: vai mostrar todo elemento inputHeight do html 
    var imcResult = document.querySelector("#imc-result");

    //como posso pegar só os valores?
    var weight = Number(inputWeight.value) ;       //console: 98  . será preciso transformar os valores para números, pois os inputs devolve em strings.
    var height = Number(inputHeight.value) ;      //console : 1.78. Para resolver isso - Basta adc Number antes de input
    
    //console.log(weight);
    //console.log(height);

    var imc = calculateIMC(weight,height)
    var formattedImc = imc.toFixed(2).replace(".",",");      
    //toFixed(2) - vai deixar formatado com duas casas decimais....replace("." , ",") - vai trocar o ponto no valor por virgula.

   // console.log(imc);                     //console: 30,9304....como faço para mostrar o resultado na tela? vou criar  a "var imcResult"

   imcResult.textContent = formattedImc;    //textContent- é uma forma de colocar conteudo, sem precisar colocar no html


}

start();

/*como poderia deixar mais dinamico ?

 1 -poderia executar handleButtonClick () na function start ( o resultado ficaria visivel a todo momento na tela)

2 - poderia jogar : 

var inputWeight = document.querySelector("#input-weight"); 
var inputHeight = document.querySelector("#input-height");

e criar um escutador com "input"

inputWeight.addEventlistener("input", handleButtonClick)
nputHeight. addEventlistener("input", handleButtonClick)

uSANDO 1 E 2 - RESULTADO: toda vez que alterasse o valor nos inputs o resultado mudaria de imediato e visivel a todo momento.

*/