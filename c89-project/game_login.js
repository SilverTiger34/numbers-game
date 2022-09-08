function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.seItem("player1_name", player1_name);
    localStorage.setItem("player2_name", playe2_name);

    window.location = "game_page.html";
}