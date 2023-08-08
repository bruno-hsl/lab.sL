const black = document.getElementById("black");
const cards1 = document.getElementById("cards1");
const cards2 = document.getElementById("cards2");
const cards3 = document.getElementById("cards3");
const cards4 = document.getElementById("cards4");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");


const selelecionarCardParaBlack1 = (event) => {
    mostrar1[event.target.id]();
}
const mostrar1 = {
    'card1': () => black.src = 'card1.jpg',
    'card2': () => black.src = 'card2.jpg',
    'card3': () => black.src = 'card3.jpg',
    'card4': () => black.src = 'card4.jpg',
    'card5': () => black.src = 'card5.jpg',
    'card6': () => black.src = 'card6.jpg',
    'card7': () => black.src = 'card7.jpg'
 }
cards1.addEventListener('click', selelecionarCardParaBlack1);

//////////////////////////////////////////////////////////

const selelecionarCardParaBlack2 = (event) => {
    mostrar2[event.target.id]();
}
const mostrar2 = {
    'card8':  () => black.src = 'card8.jpg',
    'card9':  () => black.src = 'card9.jpg',
    'card10': () => black.src = 'card10.jpg',
    'card11': () => black.src = 'card11.jpg',
    'card12': () => black.src = 'card12.jpg',
    'card13': () => black.src = 'card13.jpg',
    'card14': () => black.src = 'card14.jpg'
 }
cards2.addEventListener('click', selelecionarCardParaBlack2);

//////////////////////////////////////////////////////////

const selelecionarCardParaBlack3 = (event) => {
    mostrar3[event.target.id]();
}
const mostrar3 = {
    'card15': () => black.src = 'card15.jpg',
    'card16': () => black.src = 'card16.jpg',
    'card17': () => black.src = 'card17.jpg',
    'card18': () => black.src = 'card18.jpg',
    'card19': () => black.src = 'card19.jpg',
    'card20': () => black.src = 'card20.jpg',
    'card21': () => black.src = 'card21.jpg'
 }
cards3.addEventListener('click', selelecionarCardParaBlack3);

//////////////////////////////////////////////////////////

const selelecionarCardParaBlack4 = (event) => {
    mostrar4[event.target.id]();
}
const mostrar4 = {
    'card22': () => black.src = 'card22.jpg',
    'card23': () => black.src = 'card23.jpg',
    'card24': () => black.src = 'card24.jpg',
    'card25': () => black.src = 'card25.jpg',
    'card26': () => black.src = 'card26.jpg',
    'card27': () => black.src = 'card27.jpg',
    'card28': () => black.src = 'card28.jpg'
 }
cards4.addEventListener('click', selelecionarCardParaBlack4);

//////////////////////////////////////////////////////////

function verificarBlack(card) {
    return black.src.indexOf(card) > -1;
}

function montarDeck(card) {
    if (verificarBlack(card)) {
        opcao1.src = card;
    }
}

const cartas = [
    'card1.jpg',
    'card2.jpg',
    'card3.jpg',
    'card4.jpg',
    'card5.jpg',
    'card6.jpg',
    'card7.jpg',
    'card8.jpg',
    'card9.jpg',
    'card10.jpg',
    'card11.jpg',
    'card12.jpg',
    'card13.jpg',
    'card14.jpg',
    'card15.jpg',
    'card16.jpg',
    'card17.jpg',
    'card18.jpg',
    'card19.jpg',
    'card20.jpg',
    'card21.jpg',
    'card22.jpg',
    'card23.jpg',
    'card24.jpg',
    'card25.jpg',
    'card26.jpg',
    'card27.jpg',
    'card28.jpg'
];

cartas.forEach((carta) => {
    const selecionar = document.getElementById('selecionar1');
    selecionar.addEventListener('click', () => montarDeck(carta));
});




function montarDeck2(card) {
    if (verificarBlack(card)) {
        opcao2.src = card;
    }
}

const cartas2 = [
    'card1.jpg',
    'card2.jpg',
    'card3.jpg',
    'card4.jpg',
    'card5.jpg',
    'card6.jpg',
    'card7.jpg',
    'card8.jpg',
    'card9.jpg',
    'card10.jpg',
    'card11.jpg',
    'card12.jpg',
    'card13.jpg',
    'card14.jpg',
    'card15.jpg',
    'card16.jpg',
    'card17.jpg',
    'card18.jpg',
    'card19.jpg',
    'card20.jpg',
    'card21.jpg',
    'card22.jpg',
    'card23.jpg',
    'card24.jpg',
    'card25.jpg',
    'card26.jpg',
    'card27.jpg',
    'card28.jpg'
];

cartas.forEach((carta) => {
    const selecionar2 = document.getElementById('selecionar2');
    selecionar2.addEventListener('click', () => montarDeck2(carta));
});




function montarDeck3(card) {
    if (verificarBlack(card)) {
        opcao3.src = card;
    }
}

const cartas3 = [
    'card1.jpg',
    'card2.jpg',
    'card3.jpg',
    'card4.jpg',
    'card5.jpg',
    'card6.jpg',
    'card7.jpg',
    'card8.jpg',
    'card9.jpg',
    'card10.jpg',
    'card11.jpg',
    'card12.jpg',
    'card13.jpg',
    'card14.jpg',
    'card15.jpg',
    'card16.jpg',
    'card17.jpg',
    'card18.jpg',
    'card19.jpg',
    'card20.jpg',
    'card21.jpg',
    'card22.jpg',
    'card23.jpg',
    'card24.jpg',
    'card25.jpg',
    'card26.jpg',
    'card27.jpg',
    'card28.jpg'
];

cartas.forEach((carta) => {
    const selecionar3 = document.getElementById('selecionar3');
    selecionar3.addEventListener('click', () => montarDeck3(carta));
});















//botão para iniciar batalha//

function iniciarBatalha(el1, el2, el3) {
    var display1 = document.getElementById(el1).style.display;
    var display2 = document.getElementById(el2).style.display;
    var display3 = document.getElementById(el3).style.display;
    

    if (display1 === "none") {
        document.getElementById(el1).style.display = 'block';
    } else {
        document.getElementById(el1).style.display = 'none';
    }
    
    if (display2 === "none") {
        document.getElementById(el2).style.display = 'block';
    } else {
        document.getElementById(el2).style.display = 'none';
    }

    if (display3 === "none") {
        document.getElementById(el3).style.display = 'flex';
    } else {
        document.getElementById(el3).style.display = 'none';
    }

    
}

