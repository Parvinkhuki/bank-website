const emailValue=document.getElementById("email")
const passwordValue=document.getElementById("password")
const btn=document.getElementById("submit");


btn.addEventListener("click", function sub(){
    
 if( emailValue.value ==="khuki@gmail.com" && passwordValue.value === "shibbir"){
 window.location.href="http://127.0.0.1:5500/bank.html"
}
else{
    return alert("give right information")
}
}
)