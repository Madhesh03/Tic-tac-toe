
const Gameboard = {
gameboard : []
};
let count=0;
function display(butid){
  
count++;
    //const output=Gameboard.gameboard[0];
    if(document.querySelector(`#${butid}`).innerHTML =='O'||document.querySelector(`#${butid}`).innerHTML =='X'){
        if(document.querySelector(`#${butid}`).innerHTML =='O'){
            document.querySelector(`#${butid}`).innerHTML = 'O' ;
         }
         else{
            document.querySelector(`#${butid}`).innerHTML = 'X' ;

         }
         count--;
    }
    if((count%2!=0)){
        document.querySelector(`#${butid}`).innerHTML = 'X' ;
    }
   
    
    else if((count%2==0)){
        document.querySelector(`#${butid}`).innerHTML = 'O' ;

    }
}
function won(){
    Gameboard.gameboard[0]=document.querySelector(`.item1`).innerHTML;
    Gameboard.gameboard[1]=document.querySelector(`.item2`).innerHTML;
    Gameboard.gameboard[2]=document.querySelector(`.item3`).innerHTML;
    Gameboard.gameboard[3]=document.querySelector(`.item4`).innerHTML;
    Gameboard.gameboard[4]=document.querySelector(`.item5`).innerHTML;
    Gameboard.gameboard[5]=document.querySelector(`.item6`).innerHTML;
    Gameboard.gameboard[6]=document.querySelector(`.item7`).innerHTML;
    Gameboard.gameboard[7]=document.querySelector(`.item8`).innerHTML;
    Gameboard.gameboard[8]=document.querySelector(`.item9`).innerHTML;


    if(  Gameboard.gameboard[0] =="X" &&  Gameboard.gameboard[1] =="X" &&   Gameboard.gameboard[2] =="X" ||
         Gameboard.gameboard[3] =="X" &&  Gameboard.gameboard[4] =="X" &&   Gameboard.gameboard[5] =="X" ||
         Gameboard.gameboard[7] =="X" &&  Gameboard.gameboard[8] =="X" &&   Gameboard.gameboard[9] =="X" ||
         Gameboard.gameboard[0] =="X" &&  Gameboard.gameboard[4] =="X" &&   Gameboard.gameboard[8] =="X" ||
         Gameboard.gameboard[2] =="X" &&  Gameboard.gameboard[4] =="X" &&   Gameboard.gameboard[6] =="X" ||
         Gameboard.gameboard[0] =="X" &&  Gameboard.gameboard[3] =="X" &&   Gameboard.gameboard[6] =="X" ||
         Gameboard.gameboard[1] =="X" &&  Gameboard.gameboard[4] =="X" &&   Gameboard.gameboard[7] =="X" ||
         Gameboard.gameboard[2] =="X" &&  Gameboard.gameboard[5] =="X" &&   Gameboard.gameboard[8] =="X"
         ){

         document.getElementById("result").innerHTML='"X wins!"';
         }
    else if(Gameboard.gameboard[0] =="O" &&  Gameboard.gameboard[1] =="O" &&   Gameboard.gameboard[2] =="O" ||
            Gameboard.gameboard[3] =="O" &&  Gameboard.gameboard[4] =="O" &&   Gameboard.gameboard[5] =="O" ||
            Gameboard.gameboard[7] =="O" &&  Gameboard.gameboard[8] =="O" &&   Gameboard.gameboard[9] =="O" ||
            Gameboard.gameboard[0] =="O" &&  Gameboard.gameboard[4] =="O" &&   Gameboard.gameboard[8] =="O" ||
            Gameboard.gameboard[2] =="O" &&  Gameboard.gameboard[4] =="O" &&   Gameboard.gameboard[6] =="O" ||
            Gameboard.gameboard[0] =="O" &&  Gameboard.gameboard[3] =="O" &&   Gameboard.gameboard[6] =="O" ||
            Gameboard.gameboard[1] =="O" &&  Gameboard.gameboard[4] =="O" &&   Gameboard.gameboard[7] =="O" ||
            Gameboard.gameboard[2] =="O" &&  Gameboard.gameboard[5] =="O" &&   Gameboard.gameboard[8] =="O") 
            {
            document.getElementById("result").innerHTML='"O wins!"';

            }
     else if( (Gameboard.gameboard[0]=="X" ||Gameboard.gameboard[0]== "O") && (Gameboard.gameboard[1]=="X" ||Gameboard.gameboard[1]== "O") && (Gameboard.gameboard[2]=="X" ||Gameboard.gameboard[2]== "O") &&
    (Gameboard.gameboard[3]=="X" || Gameboard.gameboard[3]=="O") && (Gameboard.gameboard[4]=="X" ||Gameboard.gameboard[4]== "O") && (Gameboard.gameboard[5]=="X" || Gameboard.gameboard[5]=="O" )&&
    (Gameboard.gameboard[6]=="X" || Gameboard.gameboard[6]=="O" )&& (Gameboard.gameboard[7]=="X" ||Gameboard.gameboard[7]=="O" )&& (Gameboard.gameboard[8]=="X" || Gameboard.gameboard[8]=="O") ){
            document.getElementById("result").innerHTML='"Match draw!"';
    }

    if(document.getElementById("result").innerHTML =='"X wins!"' || document.getElementById("result").innerHTML =='"O wins!"' ||document.getElementById("result").innerHTML =='"Match draw!"')
{
for(i=1;i<10;i++){
   document.getElementById(`item${i}`).innerHTML=" ";
   Gameboard.gameboard=[];
   count=0;
}
}
}
function restart(){
    Gameboard.gameboard=[];
    count=0;
    for(i=1;i<10;i++){
        document.getElementById(`item${i}`).innerHTML=" ";

        document.getElementById("result").innerHTML=" ";
}
}
function button(){
const buton=document.getElementById('container');
if(buton.style.visibility==="hidden"){
    buton.style.visibility="visible";
}
else{
    buton.style.visibility="hidden";
}
}


