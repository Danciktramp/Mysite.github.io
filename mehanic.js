let selectedPlayers = null;
let selectedDomain = null;

let totalPlayers = 0;
let currentPlayer = 1;
let spyPlayer = 0;
let normalWord = '';
let spyWord = '';
let wordList = [];

const wordContainer = document.getElementById("wordContainer");
const wordText = document.getElementById("wordText");
const nextBtn = document.getElementById("nextBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const showSettings = document.getElementById("showSettings");

const wordLists = {
    "LOCURI": ["Aeroport","Gară","Stație de autobuz","Școală","Universitate","Spital","Farmacie","Restaurant","Cafenea","Fast-food","Hotel","Centru comercial","Magazin alimentar","Bancă","Primărie","Tribunal","Muzeu","Bibliotecă","Parcul orașului","Grădină zoologică","Parc de distracții","Piscină","Sală de sport","Stadion","Plajă","Pădure","Cabana de munte","Parc auto","Parcare subterană"],
    "LOCURI DE MUNCĂ / INDUSTRII": ["Fabrica de mobilă","Fabrică auto","Atelier mecanic","Stație de pompieri","Stație de poliție","Birou corporativ","Depozit logistic","Tipografie","Fermă de animale","Seră de legume","Construcții","Barbershop","Salon de frumusețe"],
    "EVENIMENTE": ["Nuntă","Aniversare","Festival muzical","Concert","Expoziție","Târg de Crăciun","Târg auto","Piață de vechituri","Carnaval","Petrecere surpriză"],
    "ACTIVITĂȚI / SITUAȚII": ["Lecție de condus","Drumeție montană","Pescuit","Vânătoare","Picnic","Târg de joburi","Tabără de vară","Curs de dans","Curs de înot","Teren de antrenament militar"],
    "TRANSPORT": ["Taxi","Tren de mare viteză","Autobuz interurban","Vapor","Metrou","Avion"],
    "PROFESII": ["Doctor","Pompier","Bucătar","Profesor","Mecanic","Polițist","Pilot","Asistent medical","Barman","Casier","Șofer de tir","Electrician"],
    "LOCAȚII FANTASY / AMUZANTE": ["Stație spațială","Navă de pirați","Castel medieval","Dungeon","Laborator secret","Insulă pustie","Bază militară subterană"]
};

function saveSettings() {
    if (!selectedPlayers || !selectedDomain) {
        alert("Selectează numărul de jucători și domeniul!");
        return;
    }

    totalPlayers = parseInt(selectedPlayers);
    wordList = [...wordLists[selectedDomain]];

    normalWord = wordList[Math.floor(Math.random() * wordList.length)];
    do {
        spyWord = wordList[Math.floor(Math.random() * wordList.length)];
    } while (spyWord === normalWord);

    spyPlayer = Math.floor(Math.random() * totalPlayers) + 1;
    currentPlayer = 1;

    document.getElementById("regimode").style.display = "none";
    showSettings.style.display = "none";

    startShowContainer();
}

function startShowContainer() {
    wordContainer.style.display = "flex";
    wordText.innerText = "SHOW";
    nextBtn.style.display = "none";
    playAgainBtn.style.display = "none";

    wordText.onclick = function() {
        let wordToShow = (currentPlayer === spyPlayer) ? spyWord : normalWord;
        wordText.innerText = wordToShow;
        nextBtn.style.display = "block";
        wordText.onclick = null;
    };
}

function nextPlayer() {
    currentPlayer++;
    if (currentPlayer > totalPlayers) {
        alert("Toți jucătorii au văzut cuvintele!");
        nextBtn.style.display = "none";
        playAgainBtn.style.display = "block";
        return;
    }

    wordText.innerText = "SHOW";
    nextBtn.style.display = "none";
    wordText.onclick = function() {
        let wordToShow = (currentPlayer === spyPlayer) ? spyWord : normalWord;
        wordText.innerText = wordToShow;
        nextBtn.style.display = "block";
        wordText.onclick = null;
    };
}

function playAgain() {
    // Reset totul
    wordContainer.style.display = "none";
    document.getElementById("regimode").style.display = "block";
    selectedPlayers = null;
    selectedDomain = null;
    totalPlayers = 0;
    currentPlayer = 1;
    spyPlayer = 0;
    normalWord = '';
    spyWord = '';
    wordList = [];
}
