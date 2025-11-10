let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn")
let message = document.querySelector(".message")
let msg = document.querySelector("#msg")
let count = 0


let reset =  () =>{
    enabledbtn();
    turn0 = true;
    message.classList.add("hide")
}
let draw = () => {
    msg.innerText = "match is draw"
    message.classList.remove("hide")
}

let turn0 = true;

let winpartten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was click")
     if(turn0){
       box.innerText = "0"
       turn0 = false
       count++
    //    if(count===9){
    //     draw()
    //    }
    
     }else{
        box.innerText = "x"
        turn0 = true
        count++
    //     if(count===9){
    //     draw()
    //    }
        
     }
     box.disabled = true
     checkwiner()

    })
})

let disabledbtn = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}
let enabledbtn = ()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}
let showwinner = (winner) =>{
   msg.innerText = `congratulation, winner is ${winner}`
   message.classList.remove("hide")
   disabledbtn()
   
}

let checkwiner = ()=>{
    for(let pattern of winpartten){
       let postion = boxes[pattern[0]].innerText;
       let postion1 = boxes[pattern[1]].innerText;
       let postion2 = boxes[pattern[2]].innerText;

      if(postion != "" && postion1 != "" && postion2 != ""){
        if(postion===postion1 && postion1===postion2){
            // console.log("winner" , postion)
            showwinner(postion);
            if(count===8){
             draw()
           }
           
        } 
        }
      }
    }



newbtn.addEventListener("click",reset)
resetbtn.addEventListener("click",reset)



