// Fetching Ids
const msg = document.querySelector('.msg');
const gameArea = document.querySelector('.gamearea');
const userinp = document.querySelector('input');
const btn = document.querySelector('.btn');
let score_area = document.getElementById('score');
let result_page = document.querySelector('.resultpage');
let exit = document.getElementById('end');
let continue_msg = document.getElementById('continue');

//Array containing name of celebrities
let celebNames = ['virat', 'alia', 'salman', 'ranveer', 'deepika', 'katrina', 'dhoni', 'varun', 'sidharth', 'akshay', 'shraddha', 'amir', 'shahid',
    'bumrah', 'rahul', 'ranbeer', 'shahrukh', 'zayn', 'priyanka', 'john', 'sachin', 'nora', 'ananya', 'tara', 'hritik', 'tiger', 'ayushman', 'prabhas', 'kriti', 'vidyut'];


let play = false;
let ques_no = 0;
let score = 0;


//Selecting any random name from clebname array
const createNewWords = () => {
    let ranNum = Math.floor((Math.random() * celebNames.length));
    let newCeleb = celebNames[ranNum];
    return newCeleb;

}


//Generating Scramble word by swapping letters
const scrambleWord = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


// btnclick function body
const btnclick = () => {
   
    if (!play) {
        ques_no++;
        btn.classList.remove('hidden');
        play = true;
        gameArea.setAttribute("style", "backround-color:rgb(212, 97, 212)");
        msg.setAttribute("style", "color:white")
        btn.innerHTML = "Guess";
        userinp.classList.toggle('hidden');
        continue_msg.classList.add('hidden');
        newCeleb = createNewWords();
        ranCeleb = scrambleWord(newCeleb.split(""));
        msg.innerHTML = ranCeleb.join("");
        
        
    }
    else {
    
        btn.classList.add('hidden');
        let guessWord = userinp.value;
        if (guessWord === newCeleb) {
            play = false;
            score++;
            msg.innerHTML = `Great! ${newCeleb} is Correct`;
            msg.setAttribute("style", "color:green")
            gameArea.setAttribute("style", "background-color: rgb(109, 247, 116)");
            userinp.classList.toggle('hidden');
            continue_msg.classList.remove('hidden');
            userinp.value = "";
           
        }
        else {

            play = false;
            msg.innerHTML = `Oops! Correct answer is ${newCeleb} `;
            msg.setAttribute("style", "color:red")
            gameArea.setAttribute("style", "background-color:   rgb(253, 186, 186)");
            btn.innerHTML = "Start";
            userinp.classList.toggle('hidden');
            continue_msg.classList.remove('hidden');
            userinp.value = "";

        }
        msg.innerhtml = "";

        if (ques_no == 10 ) {
                                    
                gameArea.classList.add('hide');                         //If it is 10th question then                       
                result_page.classList.add('show');                      //result will be shown
                score_area.innerHTML = `${score}/10`;
                ques_no++;
        }


    }
};


//When button will be clicked, btnClick function will be called
btn.addEventListener('click', btnclick);


////When enter key pressed, btnClick function will be called
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        if(ques_no == 11) {
            location.reload();
        }
        else {
            btnclick();
        }
    }

});


//New Game started
exit.addEventListener('click', () => {
    location.reload();
})