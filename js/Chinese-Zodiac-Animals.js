
const section = document.querySelector('section');

for(let i = 0; i < animals.length; i++) {
    const divvy = document.createElement('div');
    divvy.className = 'divvy';
    section.appendChild(divvy);

    let animal = animals[i];

    let pic = new Image();

    pic.src = `images/animals/${animal.eng}.jpg`;

    //Apply the animal-pic class to the image:
    pic.className = 'animal-pic';

    divvy.appendChild(pic);

    //the **input** box:
    const inputBox = document.createElement('input');

    inputBox.type = 'search';

    // a placeholder to prompt the user to enter the animal name:
    inputBox.placeholder = 'name';

    inputBox.eng = animal.eng;
    inputBox.chi = animal.chi;
    inputBox.also = animal.also;

    inputBox.index = i;

    inputBox.addEventListener('search', checkSpelling);
    divvy.appendChild(inputBox);

    //make the image hold the chinese character
    let chineseChar = new Image();
    chineseChar.src = `images/chars/char-${animal.chi}.jpg`; 
    chineseChar.className = 'chinese-char'; //css
    divvy.appendChild(chineseChar);

    //create a paragraph
    let pTag = document.createElement('p');
    pTag.className = 'zodiac-year' //css
    divvy.appendChild(pTag);

    //chinese zodiac years: 12 in between each year
    let yearSeries = (animal.year - 157) + ' ';
    
    for (let y = 144; y >= -12; y-=12) {
       yearSeries+= (animal.year - y) + ' ';
    }
    pTag.textContent = yearSeries;
    

    //ceate a span for the english name on top
    let english = document.createElement('span');
    english.textContent = animal.eng;
    english.className = 'english';
    english.id = 'eng' + i;
    divvy.appendChild(english);



    //ceate a span for the chinese name on on the bottom
    let chinese = document.createElement('span');
    chinese.innerHTML = animal.pin;
    chinese.className = 'pinyin';
    chinese.id = 'pin' + i;
    divvy.appendChild(chinese);

    const soundIcon = new Image();
    soundIcon.src = 'images/sound-icon.png'; //image
    soundIcon.className = 'sound-icon'; //fro, the css
    soundIcon.eng = animal.eng; //making a object
    soundIcon.addEventListener('click', playSound);
    divvy.appendChild(soundIcon);
} 

//call the animal sound
const sound = new Audio();
function playSound() {
    //stop the sound that is playing
    sound.pause();
    sound.src = `audio/${this.eng}.mp3`;
    sound.play();
}

function checkSpelling() {
    let input = this.value;
    
     // check If the user input is correct, turn the input box green; else turn the box red:
    if(input == this.eng || input == this.chi || input == this.also) {
        this.style.backgroundColor = '#0B0';

        //show english
        let engTag = 'eng' + this.index;
        const engSpan = document.getElementById(engTag);
        engSpan.style.display = 'inline';

        //show chinese
        let chiTag = 'pin' + this.index;
        const chiSpan = document.getElementById(chiTag);
        chiSpan.style.display = 'inline'; 
    } else {
        this.style.backgroundColor = '#921';
    }
    this.style.color = '#fff';
}
