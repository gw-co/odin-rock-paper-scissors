let choices = ['Rock', 'Paper', 'Scissors'];
let choicesf = ['Rock     ', 'Paper    ', 'Scissors '];
let results = ['Lose', 'Win', 'Tie'];

function get_computer_choice(){
    let k = Math.random();
    // return choices[Math.floor(3*k)];
    return Math.floor(3*k);
}

function get_player_choice(){
    let c;
    while(true){
        c = prompt('Input your choice.');
        if(c == null) return c;
        for (let i = 0; i < choices.length; i++) {
            if(c == choices[i]) return i;
        }
        console.log('Only enter one of \'Rock\' \'Paper\' \'Scissors\'.');
    }
    return c;
}

function play_round(p, c){
    // if( p == choices[0] && c == choices[1] || 
    //     p == choices[1] && c == choices[2] ||
    //     p == choices[2] && c == choices[0]){
    //     return 0; // computer
    // }
    // if( c == choices[0] && p == choices[1] || 
    //     c == choices[1] && p == choices[2] ||
    //     c == choices[2] && p == choices[0]){
    //     return 1; // player
    // }
    if( p === 0 && c === 1 || 
        p === 1 && c === 2 ||
        p === 2 && c === 0 ){
        return 0; // computer
    }
    if( c === 0 && p === 1 || 
        c === 1 && p === 2 ||
        c === 2 && p === 0 ){
        return 1; // player
    }
    return 2; // tie
}

function play_button(){
    let rs = ['Lose', 'Win', 'Tie'];
    let n = 5; // number of games
    let ps = [];
    let cs = []
    let ws = [];
    let score = [0, 0, 0]; // computer, player, tie
    for(let i = 0; i < n; i++){
        let p = get_player_choice();
        if(p == null) return;
        ps.push(choicesf[p]);
        let c = get_computer_choice();
        cs.push(choicesf[c]);
        let r = play_round(p, c);
        score[r]++;
        ws.push(rs[r]);
    }
    let output = '';
    for(let i = 0; i < n; i++){
        output += ps[i] + cs[i] + ws[i] + '\n';
    }
    console.log(output);

    if( score[0] > score[1]){
        console.log('You lose!');
    }
    else if( score[0] < score[1]){
        console.log('You win!');
    }
    else{
        console.log('No winner');
    }
}

//UI code
let round_list = document.querySelector('.round-list');

let pscore = document.querySelector('.player-score');
let cscore = document.querySelector('.comp-score');
let winlose = document.querySelector('.win-lose');
let psc = 0;
let csc = 0;
let nrounds = 0;
let wonlost = false;

function make_card(t){
    let c = document.createElement('div');
    c.classList.add('card');
    if(typeof(t) == 'number') c.classList.add('num-card');
    c.textContent = t;
    if(t === 'Lose') c.style.backgroundColor = 'lightsalmon';
    if(t === 'Win' ) c.style.backgroundColor = 'lightgreen';
    if(t === 'Tie' ) c.style.backgroundColor = 'lightblue';
    return c;
}

function add_round(p, c, r){
    let round = document.createElement('div');
    round.classList.add('round');
    round.appendChild(make_card(nrounds));
    round.appendChild(make_card(choices[p]));
    round.appendChild(make_card(choices[c]));
    round.appendChild(make_card(results[r]));
    round_list.appendChild(round);
    round_list.scrollTop = round_list.scrollHeight;
}

function update_score(p, c, r){
    if(r === 0){
        csc++;
        cscore.textContent = csc.toString();
    }
    else if(r === 1){
        psc++;
        pscore.textContent = psc.toString();
    }

    if(psc >= 5){
        winlose.textContent = 'YOU WIN!';
        winlose.classList.add('win');
        wonlost = true;
    }
    else if(csc >= 5){
        winlose.textContent = 'YOU LOSE!';
        winlose.classList.add('lose');
        wonlost = true;
    }

    // let t = 'player:' + p.toString() + '\n' +
    //         'comput:' + c.toString() + '\n' +
    //         'r     :' + r.toString();
    // console.log(t);
}

function reset(){
    nrounds = 0;
    psc = 0;
    csc = 0
    wonlost = false;
    pscore.textContent = '0';
    cscore.textContent = '0';
    winlose.textContent = 'win/lose';
    winlose.classList.remove('win');
    winlose.classList.remove('lose');
    round_list.textContent = '';
}

function play_ui(p){
    if(wonlost) reset();
    nrounds++;
    let c = get_computer_choice();
    let r = play_round(p, c);
    update_score(p, c, r);
    add_round(p, c, r);
}
