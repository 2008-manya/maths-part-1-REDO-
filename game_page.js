function addUser(){
	Player1_name=document.getElementById("player1_name_input").value;
	Player2_name=document.getElementById("player2_name_input").value; 
	localStorage.setItem("Player1_name" , Player1_name );
	localStorage.setItem("Player2_name" , Player2_name);
	window.location="game.html"
}	











