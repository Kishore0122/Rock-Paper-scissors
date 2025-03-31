/*name="kishore";
age=100;
count=12;
console.log(name);
sum=age*count;
console.log(age);
console.log(count);
console.log(sum);
isfollow=true;
isno=false;
let x;
let y;
let g=null;
let b=null;
const student={
    age:23,
    name:"kishore",
    ispass:true,
}
console.log(student);
const product={
    name:"ball pen",
    ratting:"4",
    offer:5,
    prize:270,
    isdeal:true,
}
console.log(product);
if(51>age>=18){
    console.log("eligible for voat");
} 
else if(age>50){
    console.log(" senior")}
    else{
    console.log("not eligible");
}
s=20;
let r= s>=18 ? "over":"not over";
console.log(r);
let x1= prompt("enter a number");
console.log(x);
if(x1%5===0){
    console.log("divisible by 5");
} else{
    console.log("can not divisible by 5");
}
let marks=prompt("enter marks");
let gread;
console.log(marks);
if(marks>=80 && marks<=100){
    gread="A"
} else if(80<marks && marks>=70){
    gread="B"
} else{
    gread="F"
}
console.log(gread);
let n=prompt("enter a number");
let sum=0;
for(i=0;i<=n;i++){
    sum=sum+i;
}
console.log(sum);

let n1=prompt("entet a number");
let even;
for(i=1;i<=n1;i++){
if(i%2===0){
    console.log(i);
}
let k="kishore";
let s=0;
for(let y of k){
 console.log(y);
 s++;
}
console.log(s)
for(let j in k){
    console.log(j);
}
console.log(k[2]);

let gm=15;
let un=prompt("guesw the correct number:");
while(gm!=un){
un=prompt("u enterred wrong number.enter correct number:")
}
console.log("u entereed correct number:");
let i="kish ore";
console.log(i.toUpperCase());
console.log(i[2]);
console.log(i.trim());
let str=prompt("enter a user name");
username="@"+str+str.length;
console.log(username);*/


//arrays   ///
/*
let x=[100,200,300,400];
let y=[2,1,2,1];
console.log(x.length);
let sum=0;
let offer=0;
for(let i=0;i<=x.length;i++){
    sum=sum+i;
}
let avg=sum/x.length;
console.log(" average of given array is =",avg);
for(let i=0;i<x.length;i++){
    offer=x[i]/10;
    x[i]=x[i]-offer;
}
console.log(x);
console.log(x.toString());
let z=x+y;
console.log(z);
let k=x.concat(y);
console.log(k);

let comp=['kishore','bala','anu','suri'];
comp.shift();
console.log(comp);
comp.splice(1,1,'anusha');
*/

//functions.........................
/*
function kishore(i){
    console.log(i);

}
kishore("i");
function countvowels(str){
    let count=0;
    for(let char of str){
        console.log(char);
        if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u" ){
            count++;
        }
    }
    console.log(count);
    return count;
}
const countv=(str)=>{
    let count=0;
    for(let char of str){
        console.log(char);
        if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u" ){
            count++;
        }
    }
    console.log(count);
    return count;

    }
    

    let arr=[2,3,2,4,3];
    arr.forEach((val,inx,arr) => {
        console.log(val*val,inx,arr);
    });

    let kishore=arr.map((val)=>{
        return val*val;
    })
    console.log(kishore);

    let array=[90,91,92,82,82,89];
    let pass=array.filter((val)=>{
        return val>90;
    })
    console.log(pass);

   let k=prompt("enter a number");
   console.log(k);
   let arr=[];
   for(let i=1;i<=k;i++){
   let n=prompt("enter element in array")
   console.log(n);
   }
   
//otp gnerator...............................................
   function otp(n) {
    let otp="";
    for(let i=0;i<=n;i++){
        otp+=Math.floor(Math.random()*10);
    }
    return otp;
   }
   console.log(otp(4));


console.log("A"-1);
console.log("kisshore"+100);
console.log("kishore"+2+2);
console.log("2"+2-"2");
const a={}
const b={
    name:"kishore"
}
const c={
    name:"ram"
}
const d={
    name:"eshu"
}
a[b]={
    name:"nana"
}
a[c]={
    name:"reddy"
}
a[d]={
    name:"pandu"
}
console.log(a[b]);
const z=0;
const x=false;
console.log(z==x);
console.log(z===x);
console.log(true-false);
console.log(false-true);
console.log(true+"kishore");
console.log(true*2);
console.log(2*true);
console.log(nan==nan);
console.log(nan===nan);


let cd = prompt("enter current date dd/mm/yyyy");
let bd = prompt("enter current date dd/mm/yyyy");
let [cdday,cdmonth,cdyear]=cd.split("/").map(Number);
let [bdday,bdmonth,bdyear]=bd.split("/").map(Number);
let age=cdyear-bdyear;
if(cdmonth<bdmonth|| cdmonth===bdmonth&&cdday<bdday){
    age--;
}
console.log("your age = ",age);


let marks=[ 12 ,2,12,32,12,32,12];
let sum=0;
let avg=0;
for(let mark of marks){
    sum= sum+mark;
}
console.log(sum);
avg=sum/marks.length;
console.log(avg);

let prise=[234,232,123,433,245];
let offer=0;
for(let p=0;p<prise.length;p++){
    offer=prise[p]/10;
    prise[p]-=offer
}
console.log(prise);


function ovels(msg){
    console.log(msg);
    let count=0;
    for(let char of msg){
        
        if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u" ){
            count++;
        }
    }
    console.log(count);
}
ovels("kishore");


let kis=[12,32,12,34,2,34];
kis.forEach( function k(val){
    console.log(val*val);
});

let i=1;
let his =document.querySelectorAll(".hi");
for(h of his){
    h.innerText=`bala${i}`;
    i++;
}

let btn = document.querySelector("#btn");
btn.onclick =()=>{
 let a=parseFloat(prompt("enter a number"));
 let b=parseFloat(prompt("enter a number"));
  let c = a + b;
  console.log(c);
}

let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    console.log("jai balaya");
});

 let btn=document.querySelector("#btn");
 let mode="light";
 btn.addEventListener("click", () =>{
  if(mode==="light"){
    mode="dark";
    console.log(mode);
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    mode="light";
    console.log(mode);
    document.querySelector("body").style.backgroundColor="white";
  }
 })
    */



 //  game rock paper sesor//

 let userscore=0;
 let computerscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const you=document.querySelector("#You");
 const system=document.querySelector("#computer");
 const mode=document.querySelector("#mode");
 let mod="light";
mode.addEventListener("click",()=>{
    if(mod==="light"){
        mod="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        mod="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
      }
})

 const computer=()=>{
    const opetion=["rock","paper","sesor"]
    const random=Math.floor(Math.random()*3);
    return opetion[random];
 }
 const draw=(choiceid, compchoice)=>{
   
    msg.innerText=("Game was draw");
    msg.style.backgroundColor = "black"
 }
 const win=(choiceid, compchoice)=>{
    userscore++;
    you.innerText = userscore;
 
    msg.innerText=(`You won! ${choiceid} beats ${compchoice}`);
    msg.style.backgroundColor = "green";
 }
 const lose=(choiceid, compchoice)=>{
    computerscore++;
    system.innerText=computerscore;
   
    msg.innerText=(`You lose! ${compchoice} beats your ${choiceid}`);
    msg.style.backgroundColor = "red"
 }

 const playgame=(choiceid)=>{

const compchoice=computer();

if(compchoice === choiceid){
    draw();
}
else if (
    (choiceid === "rock" && compchoice === "sesor") ||
    (choiceid === "paper" && compchoice === "rock") ||
    (choiceid === "sesor" && compchoice === "paper")
) {
    win(choiceid, compchoice);
} else {
    lose(choiceid, compchoice);
}
 }
 choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const choiceid=choice.getAttribute("id")
        playgame(choiceid);
    });
 });
