var turns=[];
var real_turn=[];
var d = new Date();
var s= d.getSeconds();
if(s%2==0)
	turns.push(5);

var game_end=false;




function changeContent(a,b)
{ 
	if(game_end!=true){
	var content=turns.length%2==0?"O":"X";
	
	var x=document.getElementById('myTable').rows[a].cells[b];
	if (['X', 'O'].includes(x.innerHTML)==true) 
		alert("The space has been occupied!");
	else if(['X', 'O'].includes(x.innerHTML)==false && turns.length%2==0) 
		{x.innerHTML = content;
		x.style.color="blue";
		turns.push(5);
		turn_printing();}
	else
		{x.innerHTML = content;
		x.style.color="red";
		turns.push(5);
		turn_printing();}
	}
}

function turn_printing(){

	if(check_wining()==false){
		document.getElementById('turn').innerHTML="This is turn "+ real_turn.length;
		real_turn.push(5);
			if( real_turn.length<10 && turns.length%2==1)
				{	
				document.getElementById('player1').style.color="red";
				document.getElementById('player1').innerHTML="This is player1 turn! ";	
				document.getElementById('player2').innerHTML="";}
			else if( real_turn.length<10 && turns.length%2==0)
				{
				document.getElementById('player2').style.color="blue";	
				document.getElementById('player2').innerHTML="This is player2 turn! ";
				document.getElementById('player1').innerHTML="";}
			else
				{
				document.getElementById('player1').style.color="green";
				document.getElementById('player1').innerHTML="The game is tier";
				document.getElementById('player2').innerHTML="";
				alert("Tier!")}
				}
	
}

function check_wining(){
	if(real_turn.length<5)
		return false;
	else if 
			(real_turn.length>=5 &&
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="X" && //rows-win
			document.getElementById('myTable').rows[0].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[0].cells[2].innerHTML=="X") ||
			(document.getElementById('myTable').rows[1].cells[0].innerHTML=="X" &&
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[1].cells[2].innerHTML=="X")||
			(document.getElementById('myTable').rows[2].cells[0].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="X")|| //rows-win end
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="X" && //coloum-win
			document.getElementById('myTable').rows[1].cells[0].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[0].innerHTML=="X") ||
			(document.getElementById('myTable').rows[0].cells[1].innerHTML=="X" && 
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[1].innerHTML=="X") ||
			(document.getElementById('myTable').rows[0].cells[2].innerHTML=="X" && 
			document.getElementById('myTable').rows[1].cells[2].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="X") ||
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="X" && //obsequious
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="X") ||	
			(document.getElementById('myTable').rows[2].cells[0].innerHTML=="X" && //obsequious
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="X" &&
			document.getElementById('myTable').rows[0].cells[2].innerHTML=="X") 	
			)
			{wining_message(1);
			game_end=true;}
	else if 
			(real_turn.length>=5 &&
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="O" && //rows-win
			document.getElementById('myTable').rows[0].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[0].cells[2].innerHTML=="O") ||
			(document.getElementById('myTable').rows[1].cells[0].innerHTML=="O" &&
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[1].cells[2].innerHTML=="O")||
			(document.getElementById('myTable').rows[2].cells[0].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="O")|| //rows-win end
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="O" && //coloum-win
			document.getElementById('myTable').rows[1].cells[0].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[0].innerHTML=="O") ||
			(document.getElementById('myTable').rows[0].cells[1].innerHTML=="O" && 
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[1].innerHTML=="O") ||
			(document.getElementById('myTable').rows[0].cells[2].innerHTML=="O" && 
			document.getElementById('myTable').rows[1].cells[2].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="O") ||
			(document.getElementById('myTable').rows[0].cells[0].innerHTML=="O" && //obsequious
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[2].cells[2].innerHTML=="O") ||	
			(document.getElementById('myTable').rows[2].cells[0].innerHTML=="O" && //obsequious
			document.getElementById('myTable').rows[1].cells[1].innerHTML=="O" &&
			document.getElementById('myTable').rows[0].cells[2].innerHTML=="O") 	
			)
			{wining_message(2);
			game_end=true;}
	else
			return false;
}

function wining_message(a){
	if(a==1){
		document.getElementById('turn').innerHTML="This is turn "+ (real_turn.length);
		alert("The winner is player with X!");}
	else
		{document.getElementById('turn').innerHTML="This is turn "+ (real_turn.length);
		alert("The winner is player with O!");}
}

function gameAlreadyEnd(){
	if(game_end == false)
		return false;
	else
		return true;
	
}
