var num1=Math.floor(Math.random()*6)+1;
document.querySelector("img ").setAttribute("src",num1+".png");
var num2=Math.floor(Math.random()*6)+1;
document.getElementsByTagName("img")[1].setAttribute("src",num2+".png");
if(num1>num2){
  document.getElementsByTagName("h1")[0].innerText="PLayer 1 wins";
}
else if(num2>num1){
  document.getElementsByTagName("h1")[0].innerText="PLayer 2 wins";
}
else{
  document.getElementsByTagName("h1")[0].innerText="Oops! It's a Draw";
}
