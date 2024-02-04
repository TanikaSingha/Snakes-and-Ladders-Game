let startgamebtn=document.querySelector(".start-gamebtn");
startgamebtn.addEventListener("click",()=>{
    console.log("Btn was clicked");
    let btndiv=document.querySelector(".start-game");
    btndiv.remove();
    let pcondiv=document.querySelector(".player-controls");
    pcondiv.classList.add("show");

    let p1Pos=1;
    let p2Pos=1;

    const slmap=new Map();

    slmap.set(4,25);
    slmap.set(13,46);
    slmap.set(27,5);
    slmap.set(33,49);
    slmap.set(40,3);
    slmap.set(42,63);
    slmap.set(43,18);
    slmap.set(50,69);
    slmap.set(54,31);
    slmap.set(62,81);
    slmap.set(66,45);
    slmap.set(74,92);
    slmap.set(76,58);
    slmap.set(89,53);
    slmap.set(99,41);


    let p1=document.createElement("div");
    p1.classList.add("red");
    p1.classList.add("pawn1");
    let p2=document.createElement("div");
    p2.classList.add("blue");
    p2.classList.add("pawn2");

    let box=document.querySelector("#cell-1");
    box.appendChild(p1);
    box.appendChild(p2);

    function getNumber(){
        return Math.floor(Math.random()*6)+1;
    }

    function playerwin(dice,currentpos,finalpos){
        if(dice==1){
            setTimeout(()=>{
                let p1=document.querySelector(".pawn1");
                let initialbox=document.querySelector(`#cell-${currentpos}`);
                initialbox.removeChild(p1);
                let finalbox=document.querySelector(`#cell-${finalpos}`);
                finalbox.appendChild(p1);
            },1000);
            setTimeout(()=>{alert(`Player 1 wins!`);},2000);
        }else if(dice==2){
            setTimeout(()=>{
                let p2=document.querySelector(".pawn2");
                let initialbox=document.querySelector(`#cell-${currentpos}`);
                initialbox.removeChild(p2);
                let finalbox=document.querySelector(`#cell-${finalpos}`);
                finalbox.appendChild(p2);
            },1000);
            setTimeout(()=>{alert(`Player 2 wins!`);},2000);
        }
    }
    function setpos(dice,map,number){
        let currentpos;
        let finalpos;    
        if(dice==1){
            currentpos=p1Pos;
            finalpos=p1Pos+number;
            if(finalpos>100){
                finalpos=currentpos;
            }else if(finalpos<100){
                if(map.get(finalpos)!=undefined){
                    finalpos=map.get(finalpos);
                    p1Pos=finalpos;
                }
            }else if(finalpos==100){
                playerwin(dice,currentpos,finalpos);
            }
            p1Pos=finalpos;
        }
        if(dice==2){
            currentpos=p2Pos;
            finalpos=p2Pos+number;
            if(finalpos>100){
                finalpos=currentpos;
            }else if(finalpos<100){
                if(map.get(finalpos)!=undefined){
                    finalpos=map.get(finalpos);
                    p2Pos=finalpos;
                }
            }else if(finalpos==100){
                playerwin(dice,currentpos,finalpos);
            }
            p2Pos=finalpos;
        }
        movePawn(dice,currentpos,finalpos,number);
    }
    function movePawn(dice,currentpos,finalpos,num){
        if(dice==1){
            setTimeout(()=>{
                let p1=document.querySelector(".pawn1");
                let initialbox=document.querySelector(`#cell-${currentpos}`);
                initialbox.removeChild(p1);
                let finalbox=document.querySelector(`#cell-${finalpos}`);
                finalbox.appendChild(p1);
            },1000);
        }
        if(dice==2){
            setTimeout(()=>{
                let p2=document.querySelector(".pawn2");
                let initialbox=document.querySelector(`#cell-${currentpos}`);
                initialbox.removeChild(p2);
                let finalbox=document.querySelector(`#cell-${finalpos}`);
                finalbox.appendChild(p2);
            },1000);
        }
        if(num==6 && dice==1){
            btn1roll();
        }else if(num==6 && dice==2){
            btn2roll();
        }
    }
    function rollDice(dice){
        console.log(`Dice ${dice} was rolled`);
        let p=document.querySelector(`.yougotnum${dice}`);
        p.classList.add("pstyle");
        let num=getNumber();
        p.innerText=`You got ${num}`;
        setpos(dice,slmap,num);
    }
    let rollDicebtn1=document.querySelector(".dice-1");
    let rollDicebtn2=document.querySelector(".dice-2");
    rollDicebtn2.disabled=true;

    let btn1roll=rollDicebtn1.addEventListener("click",()=>{
        rollDice(1);
        rollDicebtn1.disabled=true;
        rollDicebtn2.disabled=false;
    });
    let btn2roll=rollDicebtn2.addEventListener("click",()=>{
        rollDice(2);
        rollDicebtn2.disabled=true;
        rollDicebtn1.disabled=false;
    });
});