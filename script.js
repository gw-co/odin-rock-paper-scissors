let choices = ['Rock', 'Paper', 'Scissors'];
let choicesf = ['Rock     ', 'Paper    ', 'Scissors '];

function get_computer_choice(){
    let k = Math.random();
    // return choices[Math.floor(3*k)];
    return Math.floor(3*k);
}

function get_player_choice(){
    let c;
    while(true){
        c = prompt('Input your choice.');
        // if( c == choices[0] ||
        //     c == choices[1] ||
        //     c == choices[2]) break;
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
    if( p == 0 && c == 1 || 
        p == 1 && c == 2 ||
        p == 2 && c == 0 ){
        return 0; // computer
    }
    if( c == 0 && p == 1 || 
        c == 1 && p == 2 ||
        c == 2 && p == 0 ){
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