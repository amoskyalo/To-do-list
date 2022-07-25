//my to do
const addEvent = document.querySelector('.add');
const eventUserInput = document.querySelector('.input');
const parentEl = document.querySelector('.event-list');
const removeEvent = document.querySelector('.sub');
const user_dates = document.querySelector('.mydates');
const addDate = document.querySelector('.add-date');
const dates = document.querySelector('.date-text');

addEvent.addEventListener('click', ()=>{
    const user_new_list = document.createElement('li');
    user_new_list.classList.add('to-dos');
    user_new_list.innerText = eventUserInput.value;
    parentEl.appendChild(user_new_list);
    eventUserInput.value = "";
    user_new_list.addEventListener('click', ()=>{
        user_new_list.style.textDecoration = 'line-through';
    });
    user_new_list.addEventListener('dblclick', ()=>{
        user_new_list.style.textDecoration = 'none';
    })
    removeEvent.addEventListener('click', ()=>{
        parentEl.removeChild(user_new_list)
    })
});

addDate.addEventListener('click', ()=>{
    dates.innerText =  user_dates.value;
    parentEl.appendChild(date);
    user_dates.value = "";

})

//my game
const human_value = document.querySelector('.human');
const play_button = document.querySelector('.play');
const human_score = document.querySelector('.human-score');
const computer_score = document.querySelector('.computer-score');
const results_parent = document.querySelector('.result')
const results_human = document.createElement('p');
const hide = document.querySelector('.hide');
const rules = document.querySelector('.rule');
const show = document.querySelector('.show');

hide.addEventListener('click', ()=>{
    rules.style.display = "none";
    show.style.display = "block";
    hide.style.display = "none";
});
show.addEventListener('click', ()=>{
    rules.style.display = "block";
    hide.style.display = "block";
    show.style.display = "none";
})



play_button.addEventListener('click', ()=>{
        let humans_score = 0;
        let computers_score = 0;
    
        let human_values = human_value.value;
        let computer_values = Math.floor(Math.random()* 10);
    
        human_value.value = "";
    
       function scoreBoard(){
        if(human_values > computer_values){
            humans_score+= 5;
            results_human.innerHTML = "You win";
            results_human.style.color = "purple";
         }else if(human_values == computer_values){
             humans_score++;
             computers_score++;

             results_human.innerHTML = "You drew";
             results_human.style.color = "white";
         }else if(human_values > 10){
             alert("enter value between 0 and 10")
         }
         else {
            computers_score+= 5;
            results_human.innerHTML = "You lose";
            results_human.style.color = "red";
    
         }
         human_score.innerHTML = humans_score;
         computer_score.innerHTML = computers_score;
       };
       
       scoreBoard();
   
    const your_pick = document.querySelector('.yours').innerHTML = human_values;
    const computer_pick = document.querySelector('.comps').innerHTML = computer_values;

    results_parent.appendChild(results_human);
});

const myGame = document.querySelector('.game');
const play_some_game = document.querySelector('.play-game');
const hide_game = document.querySelector('.hide-game');

play_some_game.addEventListener('click', ()=>{
    myGame.style.display = "flex";
    play_some_game.style.display ="none";
    hide_game.style.display = "block";
})

hide_game.addEventListener('click', ()=>{
    myGame.style.display = "none";
    play_some_game.style.display = "block";
    hide_game.style.display = "none";
})