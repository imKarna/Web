var result=sessionStorage.getItem("Result");
document.getElementById("result").innerHTML=`Your number is '${result}'`;
function myfunct(){
    location.replace("select.html");
}
document.addEventListener("selectstart",function(e){
    e.preventDefault();
})