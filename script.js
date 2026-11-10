let visaForstaTexten = true;

function onClick(){
    let myFavorite = document.getElementById("myFavorite");
    let secondBest = document.getElementById("secondBest");
    let thirdBest = document.getElementById("thirdBest");

    if (visaForstaTexten) {
        myFavorite.textContent = "Trevligt att råkas du magnifika best";
        secondBest.textContent = "Välkommen ner till jorden";
        thirdBest.textContent = "Var hälsad kära varelse";
    } 
    
    else {
        myFavorite.textContent = "Hallå";
        secondBest.textContent = "Hej";
        thirdBest.textContent = "Hejsan";
    }

    visaForstaTexten = !visaForstaTexten;

    let goodPhrase = document.getElementsByClassName("goodPhrase");
    for (const p of Array.from(goodPhrase)) {
        p.style.color = "red";
    }

    let allPElements = document.getElementsByTagName("p");
    for (const p of Array.from(allPElements)) {
        p.style.fontWeight = "bold";
    }
}

function init(){
    let buttons = document.getElementsByTagName("button");

    buttons[0].onclick = onClick;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
        const knapp = document.getElementById('button');
        if (knapp) {
            knapp.click();
        }
    }
}

);


window.onload = init;