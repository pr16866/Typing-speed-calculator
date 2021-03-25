import questions from './main1.js';
let textarea=document.querySelector("textarea");
let button=document.querySelector("button");
let text_area=document.querySelector(".text-area");

button.addEventListener("click",function(){
    let i=60;
    textarea.value="";
let h5=document.querySelectorAll("h5");
let btn=document.querySelector("#btn");
// let text_area=document.querySelector(".text-area");
let text_p=document.querySelector("#text-area1");


let index=Math.floor(Math.random()*5)
text_p.innerText=questions[index];
let para=questions[index];


let code=setInterval(start_test,1000);
function start_test(){
if(i>0)
  {
   h5[3].innerText=i--;
    btn.style.display="none";
    text_area.style.display="block";
    h5[0].innerText="00";
    h5[1].innerText="00";
    h5[2].innerText="0%";
  }
  else{
    h5[3].innerText="00";
   clearInterval(code);
   btn.style.display="block";
   text_area.style.display="none";
   if(textarea.value!=""){
  h5[0].innerText=wpm(textarea.value);
  h5[1].innerText=cpm(textarea.value);
  h5[2].innerText=accuaracy(textarea.value,para);
}
   textarea.value="";
  }
}
})
function wpm(mytext){
    
  return  mytext.match(/[a-z]+/gi).length;
}
function cpm(mytext){
  return  mytext.match(/[a-z 0-9]/gi).length;
}
function accuaracy(mytext,para){
    let count=0;
  let mytext_array=Array.from(mytext.match(/[a-z]+/gi));
  
  let para_arry=Array.from(para.match(/[a-z]+/gi));

  for(let i=0;i<mytext_array.length;i++){
      if(para_arry[i]!=mytext_array[i])
      {
          count++;   
      }
  } 
  let correct_word=mytext_array.length-count;
  let percentage=Math.round((correct_word/mytext_array.length)*100);

  return `${percentage}%`; 
}
