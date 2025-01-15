let box0 =$('#box0');
let box1 =$('#box1');
let box2 =$('#box2');
let box3 =$('#box3');
let box4 =$('#box4');
let box5 =$('#box5');
let box6 =$('#box6');
let box7 =$('#box7');
let box8 =$('#box8');

let Player1 ='x';
let Player2 ='o';

let turn=0;

let winner =false;

$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertDraw').hide();


const winningOutCome =[
    [box0,box1,box2],[box3,box4,box5],[box6,box7,box8],
    [box0,box3,box6],[box1,box4,box7],[box2,box5,box8],
    [box0,box4,box8],[box2,box4,box6]
];

const endGame =()=>{
    console.log(`GAME OVER`);
    $('.box').css('pointer-events','none');
};

// keep track of current player
let currentPlayer = '';

const checkWinner=(currentPlayer , a , b , c) =>{
    if(a.text()===currentPlayer && b.text()===currentPlayer && c.text()===currentPlayer){
        winner=true;
        console.log(`GAME OVER ... ${currentPlayer} WINS!`);
        
        a.removeClass('text-info bg-dark');
        b.removeClass('text-info bg-dark');
        c.removeClass('text-info bg-dark');
        
        a.addClass("text-dark bg-info");
        b.addClass("text-dark bg-info");
        c.addClass("text-dark bg-info");

        if(currentPlayer==='x'){
            currentPlayer='Player 1';
        }else{
            currentPlayer='Player 2';
            
           }  
            
            $('#alertWinner').text(`GAME OVER ... ${currentPlayer} WINS!`);
            $('#alertWinner').show()
                endGame();
         }
};

const checkOutComes =()=>{
    checkWinner(currentPlayer, ...winningOutCome[0]);
    checkWinner(currentPlayer, ...winningOutCome[1]);
    checkWinner(currentPlayer, ...winningOutCome[2]);
    checkWinner(currentPlayer, ...winningOutCome[3]);
    checkWinner(currentPlayer, ...winningOutCome[4]);
    checkWinner(currentPlayer, ...winningOutCome[5]);
    checkWinner(currentPlayer, ...winningOutCome[6]);
    checkWinner(currentPlayer, ...winningOutCome[7]);
    // checkWinner(currentPlayer ,...winningOutCome[8]);
};

// keep tracking of current player

const startGame = ()=>{
    console.log("Start Game!");
    console.log(turn++);
    currentPlayer = Player1;
    
    console.log(currentPlayer); 
    
    $('#p1').addClass("bg-light border border-info");
    // show the start alert
    $('#alertStart').show();
    
    $('.box').on('click',function(){
        $('#alertStart').hide();
        
        $(this).text(currentPlayer);
        if(turn > 4){
            // check winner
            console.log('winner???');
            checkOutComes();
        }
        
        if(currentPlayer === Player1){
            currentPlayer = Player2;
            console.log(turn++)
            $('#p2').addClass("bg-light border border-info")
            $('#p1').removeClass("bg-light border border-info")
            
            
            
        }else{
            currentPlayer= Player1;
            $('#p1').addClass("bg-light border border-info");
            $('#p2').removeClass("bg-light border border-info");
            
            console.log(turn++);
            
        }
    })
    
}


document.getElementById('startBtn').addEventListener('click', ()=>startGame());
document.getElementById('resetBtn').addEventListener('click',()=> document.location.reload(true));