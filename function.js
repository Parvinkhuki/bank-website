console.log("hello")
function getInputById(inputid){
    const input=document.getElementById(inputid)
    const inputStrig = input.value 
    const inputValue=parseFloat(inputStrig)
    input.value ='';
    return inputValue;

}
function getElementVById(textid){
    const text=document.getElementById(textid)
    const textStrig=text.innerText 
    const textValue=parseFloat(textStrig)
    return textValue;
}

function setValue(elemetid,newValue){
    const values=document.getElementById(elemetid)
     values.innerText =newValue;
}