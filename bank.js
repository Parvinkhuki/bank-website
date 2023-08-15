const deposits =getInputById("deposit1")

document.getElementById("deposit-btn").addEventListener("click",function(){
   
    const inputDeposit =getInputById("deposit1")
    const textdeposit=getElementVById("deposit")

    if(isNaN(inputDeposit)){
        return alert("give only num")
    }
    const newDeposit=textdeposit+inputDeposit
    setValue("deposit",newDeposit)
    const total=getElementVById("total")
    const totalValue=total+newDeposit
    setValue("total",totalValue)


 
})
document.getElementById("withdrew-btn").addEventListener("click",function(){
   
    const inputwithdrew =getInputById("withdrew1")
    const textwithdrew=getElementVById("withdrew")
    if(isNaN(inputwithdrew)){
        return alert("give only num")
    }
  
    const newWithdrew=textwithdrew+inputwithdrew
    const total=getElementVById("total")
    if(inputwithdrew>total){
        return alert("you dont have that mush money :(")
    }
    setValue("withdrew",newWithdrew)
    const totalValue=total-newWithdrew
    setValue("total",totalValue)


 
})
const btn=document.getElementById("logout");


btn.addEventListener("click", function sub(){
    
 
 window.location.href="index.html"


}

)