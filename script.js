var go=0;

var result=document.querySelector("#result");
var img00 = document.querySelector("#img00");
var img01 = document.querySelector("#img01");
var img02 = document.querySelector("#img02");
var img10 = document.querySelector("#img10");
var img11 = document.querySelector("#img11");
var img12 = document.querySelector("#img12");
var img20 = document.querySelector("#img20");
var img21 = document.querySelector("#img21");
var img22 = document.querySelector("#img22");

var gameContainer=document.querySelector("#gameContainer");


var o=document.querySelector("#o");
var x=document.querySelector("#x");

var first=document.querySelector("#first");
var second=document.querySelector("#second");

var human;
var computer;

var z;

var myArray =[
					["","",""],
					["","",""],
					["","",""]
				];

oOrX();

//does the human want to be O or X
function oOrX(){
	o.addEventListener("click", function(){
		human="o";
		computer="x";
		document.querySelector("#oOrX").innerHTML="";
		firstOrSecond();
	});

	x.addEventListener("click", function(){
		human="x";
		computer="o";
		document.querySelector("#oOrX").innerHTML="";
		firstOrSecond();
	});
}

//does the human want to go first or second
function firstOrSecond(){
	first.addEventListener("click", function(){
		z="h";
		document.querySelector("#firstOrSecond").innerHTML="";
		gameContainer.style.display="block";
	});

	second.addEventListener("click", function(){
		z="c";
		document.querySelector("#firstOrSecond").innerHTML="";
		gameContainer.style.display="block";
		computerPlay();
	});

}

//computer play
function computerPlay(){

	r=Math.floor(Math.random()*3);
	c=Math.floor(Math.random()*3);

	while (myArray[r][c]!=""){
		r=Math.floor(Math.random()*3);
		c=Math.floor(Math.random()*3);
	}
	
	myArray[r][c]=computer;	

	setTimeout(updateGraphics, 500);

	//updateGraphics();
	checkForWin(computer);
}




function pageReload(){
	location.reload();
}

function wins(winner){
	result.innerHTML=winner + " wins";
	setTimeout(pageReload, 3000);
}

function draw(){
	result.innerHTML="Draw!!!";
	setTimeout(pageReload, 3000);
}


function checkForWin(player){

	go+=1;

	if (z=="c"){
		z="h";
	}
	else{
		z="c";
	}


	if (myArray[0][0]==player && myArray[0][1]==player && myArray[0][2]==player){
		wins(player);
	}
	else if (myArray[1][0]==player && myArray[1][1]==player && myArray[1][2]==player){
		wins(player);
	}
	else if (myArray[2][0]==player && myArray[2][1]==player && myArray[2][2]==player){
		wins(player);
	}
	else if (myArray[0][0]==player && myArray[1][0]==player && myArray[2][0]==player){
		wins(player);
	}
	else if (myArray[0][1]==player && myArray[1][1]==player && myArray[2][1]==player){
		wins(player);
	}
	else if (myArray[0][2]==player && myArray[1][2]==player && myArray[2][2]==player){
		wins(player);
	}
	else if (myArray[0][0]==player && myArray[1][1]==player && myArray[2][2]==player){
		wins(player);
	}
	else if (myArray[0][2]==player && myArray[1][1]==player && myArray[2][0]==player){
		wins(player);
	}
	else{
	
		if(go==9){
			draw();
		}
			
		else if(z=="c"){
			computerPlay();
		}

	}
}

function updateGraphics(){

	//update image 00
	if (myArray[0][0]=="x"){
		img00.src="x.png"
	}else if(myArray[0][0]=="o"){
		img00.src="o.png";
	}
	else{
		img00.src="blank.png";
	}

	//update image 01
	if (myArray[0][1]=="x"){
		img01.src="x.png"
	}else if(myArray[0][1]=="o"){
		img01.src="o.png";
	}
	else{
		img01.src="blank.png";
	}

	//update image 02
	if (myArray[0][2]=="x"){
		img02.src="x.png"
	}else if(myArray[0][2]=="o"){
		img02.src="o.png";
	}
	else{
		img02.src="blank.png";
	}

	//update image 10
	if (myArray[1][0]=="x"){
		img10.src="x.png"
	}else if(myArray[1][0]=="o"){
		img10.src="o.png";
	}
	else{
		img10.src="blank.png";
	}

	//update image 11
	if (myArray[1][1]=="x"){
		img11.src="x.png"
	}else if(myArray[1][1]=="o"){
		img11.src="o.png";
	}
	else{
		img11.src="blank.png";
	}

	//update image 12
	if (myArray[1][2]=="x"){
		img12.src="x.png"
	}else if(myArray[1][2]=="o"){
		img12.src="o.png";
	}
	else{
		img12.src="blank.png";
	}

	//update image 20
	if (myArray[2][0]=="x"){
		img20.src="x.png"
	}else if(myArray[2][0]=="o"){
		img20.src="o.png";
	}
	else{
		img20.src="blank.png";
	}

	//update image 21
	if (myArray[2][1]=="x"){
		img21.src="x.png"
	}else if(myArray[2][1]=="o"){
		img21.src="o.png";
	}
	else{
		img21.src="blank.png";
	}

	//update image 22
	if (myArray[2][2]=="x"){
		img22.src="x.png"
	}else if(myArray[2][2]=="o"){
		img22.src="o.png";
	}
	else{
		img22.src="blank.png";
	}
}


//human play code  - always listening for human input
img00.addEventListener("click", function(){
	myArray[0][0]=human;
	updateGraphics();
	checkForWin(human);
	
});

img01.addEventListener("click", function(){
	myArray[0][1]=human;
	updateGraphics();
	checkForWin(human);
})

img02.addEventListener("click", function(){
	myArray[0][2]=human;
	updateGraphics();
	checkForWin(human);
})

img10.addEventListener("click", function(){
	myArray[1][0]=human;
	updateGraphics();
	checkForWin(human);
})

img11.addEventListener("click", function(){
	myArray[1][1]=human;
	updateGraphics();
	checkForWin(human);
})

img12.addEventListener("click", function(){
	myArray[1][2]=human;
	updateGraphics();
	checkForWin(human);
})

img20.addEventListener("click", function(){
	myArray[2][0]=human;
	updateGraphics();
	checkForWin(human);
})

img21.addEventListener("click", function(){
	myArray[2][1]=human;
	updateGraphics();
	checkForWin(human);
})

img22.addEventListener("click", function(){
	myArray[2][2]=human;
	updateGraphics();
	checkForWin(human);
})








