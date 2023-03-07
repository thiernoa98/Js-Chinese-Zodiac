
const section = document.querySelector('section');

for(let i = 0; i < animals.length; i++) {
    const divvy = document.createElement('div');
    divvy.className = 'divvy';
    section.appendChild(divvy);

    let animal = animals[i];

    let pic = new Image();

    pic.src = `images/animals/${animal.eng}.jpg`;

    // 18. Apply the **.animal-pic** class to the image:
    pic.className = 'animal-pic';

    divvy.appendChild(pic);

    //the **input** box:
    const inputBox = document.createElement('input');

    inputBox.type = 'search';

    // a placeholder** to prompt the user to enter the animal name:
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
    let yearSeries = (animal.year - 157) + ' '; //12 * 12 num of years 144
    //12 * 12 == 144
    //here y-= == 144 - 12 ...
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



    //ceate a span for the english name on top
    let chinese = document.createElement('span');
    chinese.innerHTML = animal.pin;
    chinese.className = 'pinyin';
    chinese.id = 'pin' + i;
    divvy.appendChild(chinese);

    // Lesson Part II (B.)
    // 5B. - 9B. make an image and set its source to sound-icon.png:
    // apply class and have icon call playSound func when clicked
    const soundIcon = new Image();
    soundIcon.src = 'images/sound-icon.png'; //image
    soundIcon.className = 'sound-icon'; //fro, the css
    soundIcon.eng = animal.eng; //making a object
    soundIcon.addEventListener('click', playSound);
    divvy.appendChild(soundIcon);
} // end loop

// 10B. in the global scope, instantiate an instance 
// of the Audio object. It's the same synta as the Image object, 
// with the new keyword:
//call the sound
const sound = new Audio();
function playSound() {
    //stop the sound that is playing
    sound.pause();
    sound.src = `audio/${this.eng}.mp3`;
    sound.play();
}

// 20. Reload the page. We should have 12 divs, each with the cow.

// We need to make the **checkSpelling** function before reloading the page in the browser. If the function referred to in the listener does not exist at that point, we'll get an error.

// this keyword

// Inside a function, the **this** keyword refers to the object that called the function. In the **checkSpelling** function, **this** is the input box:

// 32. Define the **checkSpelling** function and start by getting the **value** of the input element--whatever the user typed into the box:
function checkSpelling() {
    let input = this.value;
    // 33. Compare the user input to the English, pinyin and alternate (also) spelling. The user input needs to match *one* of the three correct spellings:
    if(input == this.eng || input == this.chi || input == this.also) {
        // 34. If the user input is correct, turn the input box green; else turn the box red:
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
 
// 35. Reload the page. Each box should have an animal pic and an input box.

// 36. Enter a spelling in a box and hit Enter. 
// - if the spelling is correct, the input box turns green. 
// - else, the spelling is incorret, so the box turns red.

// END: Lesson 06.02
// NEXT: Lesson 06.03
