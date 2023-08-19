let choices = ['Rock', 'Paper', 'Scissors'];

function get_computer_choice(){
    let k = Math.random();
    return choices[Math.floor(3*k)];
}

function get_player_choice(){
    let c = prompt('Input your choice.');
    return c;
}

function play_button(){
    console.log(get_player_choice());
    console.log(get_computer_choice());
}