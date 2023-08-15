const deposits =getInputById("deposit1")

document.getElementById("deposit-btn").addEventListener("click",function(){
   
    const inputDeposit =getInputById("deposit1")
    const textdeposit=getElementVById("deposit")
    if(inputDeposit==="string"){
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
  
    const newWithdrew=textwithdrew+inputwithdrew
    setValue("withdrew",newWithdrew)
    const total=getElementVById("total")
    if(inputwithdrew>total){
        return alert("you dont have that mush money :(")
    }
    const totalValue=total-newWithdrew
    setValue("total",totalValue)


 
})