var aa = document.tictacto.cell1;
console.log(aa);
const cells  = [{row1cell1:false},{row1cell2:false},{row1cell3:false},
                 {row2cell1:false},{row2cell2:false},{row2cell3:false},
                 {row3cell1:false},{row3cell2:false},{row3cell3:false}];
const wins =[
    {win1:{row1cell1:true,row1cell2:true,row1cell3:true}},
    {win2:{row2cell1:true,row2cell2:true,row2cell3:true}},
    {win3:{row3cell1:true,row3cell2:true,row3cell3:true}},
    {win4:{row1cell1:true,row2cell1:true,row3cell1:true}},
    {win5:{row1cell2:true,row2cell2:true,row2cell2:true}},
    {win6:{row1cell3:true,row2cell3:true,row3cell3:true}},
    {win7:{row1cell1:true,row2cell2:true,row3cell3:true}},  
    {win8:{row1cell3:true,row2cell2:true,row3cell1:true}}];

    
console.log(cells);  

var userMoves = [],compMoves=[],totalMoves=[];
var moves = ['move1','move2','move3','move4','move5'];            
const  ticTacToe=(move)=>{
    var cur = move.parentNode;

    cur.style.background= "blue";
    userMoves.push(move.value)
    console.log("User Moves",userMoves);
    console.log("comp Moves",compMoves);
    if(moves[0]== 'move1'){
        computerMove1(move.value,moves1);    
    }
    if(moves[0]=='move2'){
        compMove2(move.value,)
    }

    moves.shift();
  
}
const moves1 = ['row1cell1','row1cell2','row1cell3','row2cell1','row2cell3','row3cell1','row3cell2','row3cell3'];
const computerMove1=(userMove,move1)=>{    
    moveOne = true;

    var firstMove = move1.filter((move)=>userMove === move);

    if( firstMove.length>0){
        console.log("not center", firstMove)
        var center = document.getElementById('row2cell2');
        compMoves.push('row2cell2');

        center.checked =true;
       let updateC =  center.parentNode;
       updateC.style.background = 'red';
    }else{
        console.log(" center", firstMove)
    }
   
    console.log('moves shift',moves);
   


}
const compMove2= (userMove,move2)=>{

    
    if((userMoves[0] == 'row1cell3') && (userMoves[1])=='row3cell3'){
        debugger;
        var row2cell3 = document.getElementById('row2cell3');
        compMoves.push('row2cell3');

        row2cell3.checked =true;
       let updateC =  row2cell3.parentNode;
       updateC.style.background = 'red';

    }
    

}
const compMove3 = (userMove,move3)=>{

}
const compMove4 = (userMove, move4)=>{

}

const checkWins=(move)=>{

}