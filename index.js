const emailValue=document.getElementById("email")
const passwordValue=document.getElementById("password")
const btn=document.getElementById("submit");


btn.addEventListener("click", function sub(){
    
 if( emailValue.value ==="khuki@gmail.com" && passwordValue.value === "shibbir ahmed"){
 window.location.href="bank.html"
}
else{
    return alert("give right information")
}
}
)