

var rdOneQues = ['What is the capital of New Zealand?',
    'What is New Zealand’s official name in Maori?',
    'What currency is used in New Zealand?',
    'What colours are on the flag of New Zealand?',
    'What are the two main political parties in New Zealand?',
    'What is the nickname given to New Zealanders?',
    'Who was the first European to arrive in New Zealand?',
    'Who is New Zealand’s monarch?',
    'How many official languages are there in NZ?',
    'What are the two national anthems of New Zealand? (1 point each)'];

var rdOneAns = [
    'Wellington',
    'Aotearoa',
    'New Zealand Dollar',
    'Blue, red and white',
    'National and Labour',
    'Kiwi',
    'Abel Tasman',
    'Queen Elizabeth II',
    'Two',
    'God defend New Zealand',
    'God Save the Queen'];

var rdTwoQues = [

    ['How tall is Aoraki Mount Cook?', 
     '1. 3,518 metres', 
     '2. 3,754 metres', 
     '3. 3,945 metres', 
     '4. 4,289 metres'],

    ['When did Captain Cook come to the islands?',
     '1. 1709',
     '2. 1739',
     '3. 1769',
     '4. 1799'],

    ['When did New Zealand gain independence from Britain?',
     '1. 1917',
     '2. 1927',
     '3. 1937',
     '4. 1947'],

    ['What animal can you find on a 1 dollar coin?',
     '1. Kakapo',
     '2. Seal',
     '3. Kiwi',
     '4. Takahe'],

    ['In 1893, New Zealand became the first country to do what?',
     '1. Abolish slavery',
     '2. Legalise same-sex marriage',
     '3. Give women the right to vote',
     '4. Give workers paid holidays'],

    ['What is a Tuatara?',
     '1. Mammal',
     '2. Reptile',
     '3. Bird',
     '4. Insect'],

    ['When was NZ Rugby Football Union founded?',
     '1. 1852',
     '2. 1872',
     '3. 1892',
     '4. 1902'],

    ['When was New Zealand first Poppy Day?',
     '1. 1922',
     '2. 1932',
     '3. 1943',
     '4. 1953']];

var rdTwoAns = ["2", "3", "4", "3", "3", "2", "3", "1"];

var rdThrQues = [
    'What is the name of the strait that separates the North and South Islands?',
    'What is the largest lake in New Zealand?',
    'What is the largest city in New Zealand?',
    'What is the highest mountain peak in New Zealand?',
    'How many regions are there in New Zealand?',
    'What is the highest range of mountains in Australasia?',
    'What is the largest glacier in New Zealand?',
    'On which island can you find the Canterbury Plains?',
    'What is the longest river in New Zealand?',
    'In which city can you find the Sky Tower?'];

var rdThrAns = [
    'Cook Strait',
    'Lake Taupo',
    'Auckland',
    'Aoraki Mount Cook',
    '16',
    'Southern Alps',
    'The Tasman Glacier',
    'South Island',
    'Waikato River',
    'Auckland'];

let oneQuesCopy = rdOneQues.slice();
let oneAnsCopy = rdOneAns.slice();
let twoQuesCopy = rdTwoQues.slice();
let twoAnsCopy = rdTwoAns.slice();
let ranNum = 0;
let score = 0;

function compareOne() {
    document.getElementById("submit-button-one").setAttribute("hidden", "")
    let inputString = document.getElementById("input-field").value;
    if(inputString.toLocaleLowerCase() === oneAnsCopy[ranNum].toLocaleLowerCase()){
        document.getElementById("question-header").innerHTML = "Correct!";
        score = score + 1;
        document.getElementById("score-tracker").innerHTML = "Score: " + score;
    } else {
        document.getElementById("question-header").innerHTML = "Incorrect!";
    }
    document.getElementById("input-field").setAttribute("hidden", "");
    document.getElementById("input-field").value = "";
    document.getElementById("next-button-one").removeAttribute("hidden");
}

function compareTwo() {
    document.getElementById("submit-button-one").setAttribute("hidden", "")
    let inputString = document.getElementById("input-field").value;
    if(inputString === twoAnsCopy[ranNum])
    {
        document.getElementById("question-header").innerHTML = "Correct!";
        score = score + 1;
        document.getElementById("score-tracker").innerHTML = "Score: " + score;
    } else {
        document.getElementById("question-header").innerHTML = "Incorrect!";
    }
    document.getElementById("input-field").setAttribute("hidden", "");
    document.getElementById("input-field").value = "";
    document.getElementById("next-button-one").removeAttribute("hidden");
}

function compareThree() {

}

function compareSelector() {
    if (oneQuesCopy.length !== 0) {
        compareOne();
        oneQuesCopy.splice(ranNum, 1);
        oneAnsCopy.splice(ranNum, 1);
    } else if (twoQuesCopy.length !== 0) {
        compareTwo();
        twoQuesCopy.splice(ranNum, 1);
        twoAnsCopy.splice(ranNum, 1);
    } else {
        rdThreeGenerator();
    }
}

function rdOneGenerator() {
    ranNum = Math.floor(Math.random() * oneQuesCopy.length);
    let quesStr = oneQuesCopy[ranNum];
    document.getElementById("question-header").innerHTML = quesStr;
    document.getElementById("next-button-one").setAttribute("hidden", "");
    document.getElementById("submit-button-one").removeAttribute("hidden");
    document.getElementById("input-field").removeAttribute("hidden");
}

function rdTwoGenerator() {
    ranNum = Math.floor(Math.random() * twoQuesCopy.length);
    let quesStr = twoQuesCopy[ranNum][0];
    document.getElementById("question-header").innerHTML = quesStr;
    document.getElementById("multi-one").innerHTML = twoQuesCopy[ranNum][1];
    document.getElementById("multi-two").innerHTML = twoQuesCopy[ranNum][2];
    document.getElementById("multi-three").innerHTML = twoQuesCopy[ranNum][3];
    document.getElementById("multi-four").innerHTML = twoQuesCopy[ranNum][4];
    document.getElementById("multi-one").removeAttribute("hidden");
    document.getElementById("multi-two").removeAttribute("hidden");
    document.getElementById("multi-three").removeAttribute("hidden");
    document.getElementById("multi-four").removeAttribute("hidden");
    document.getElementById("next-button-one").setAttribute("hidden", "");
    document.getElementById("submit-button-one").removeAttribute("hidden");
    document.getElementById("input-field").removeAttribute("hidden");
}

function rdThreeGenerator() {

}

function generatorSelector() {
    if (oneQuesCopy.length !== 0) {
        rdOneGenerator();
    } else if (twoQuesCopy.length !== 0) {
        rdTwoGenerator();
    } else {
        rdThreeGenerator();
    }
}

function begin() {
    document.getElementById("start-button").setAttribute("hidden", "");
    document.getElementById("submit-button-one").removeAttribute("hidden");
    document.getElementById("question-begin").setAttribute("hidden", "");
    document.getElementById("question-header").removeAttribute("hidden");
    document.getElementById("input-field").removeAttribute("hidden");
    document.getElementById("score-tracker").removeAttribute("hidden");
    rdOneGenerator();
}

const startButton = document.getElementById("start-button");
const submitButtonOne = document.getElementById("submit-button-one");
const nextButtonOne = document.getElementById("next-button-one");

startButton.addEventListener("click", begin);
submitButtonOne.addEventListener("click", compareSelector);
nextButtonOne.addEventListener("click", generatorSelector);




    