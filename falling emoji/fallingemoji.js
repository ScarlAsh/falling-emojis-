let box = document.querySelectorAll("div")[0];
let but= document.querySelector('button');
but.addEventListener('click' , startthegame );
let emoji1 =[];
let left1;
let top1;
let distanceArray;
let id1;
let i;

let timerobj = document.createElement("div");
document.body.append(timerobj);
timerobj.classList.add("timer");
timerobj.innerHTML = "2 : 00";
let item = 119;     //initial time ~ 2 minutes.

function startthegame()
{
    
    
    id1 = setInterval(function()
    {
        
        if(item > 0)
        {
            i=0;

            emoji1[i] = document.createElement('span');
            let arrayofemojis = ['&#128513;' ,'&#128514;','&#128151;','&#128525;', '&#128517;' ];
            emoji1[i].innerHTML = arrayofemojis[Math.floor(Math.random() * 5)];
            document.body.append(emoji1[i]);
            emoji1[i].classList.add("singleemojiclass");
            emoji1[i].classList.add("movingemojis");
            positionleft(emoji1[i]);
            movedown(emoji1[i]);
            i++;

        }
    
    },2000);
            
    
    function positionleft(item)
    {
        distanceArray = [0 , 75 , 75*2 , 75*3 , 75*4 , 75*5];  // 75 is the width of a single emoji div. 
        left1= 700 + distanceArray[Math.floor(Math.random() * 5)] ;
        item.style.left= left1 +"px";

    }

 
    function movedown(item) 
    {
        top1 = 0;
        let id01= setInterval(function()
        {
            top1+=30;
            item.style.top = top1+"px";

            if(top1 >= window.innerHeight) //window height ~ box height 
            {
                clearInterval(id01);
            }
            
        },50);
        
    }

    // decrease time once you click start

    let id001 = setInterval(timer,1000);

    function timer()
    {
        let minutes = Math.floor(item / 60);
        let seconds = item % 60 ;
        timerobj.innerHTML = `${minutes} : ${seconds}`;
           
        if ( item > 0)
        {
            
            item--;
        }
    
        
    }
        

}







  
