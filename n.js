let clack =  document.getElementById("click");
let retern =  document.getElementById("return");
let couter = document.getElementById("counter");
let dem= document.getElementById("counter");
let btlick0 = document.getElementById("btnclick0");
let btlick1 =  document.getElementById("btnclick1");
let btlick2 = document.getElementById("btnclick2");
let btlick3 = document.getElementById("btnclick3");
let btlick4 = document.getElementById("btnclick4");
let btlick5 = document.getElementById("btnclick5");
let btlick6 = document.getElementById("btnclick6");
let btlick7 = document.getElementById("btnclick7");
let btlick8 = document.getElementById("btnclick8");
let count =0;

clack.onclick=function(){
    count++;
    couter.textContent=count;
}
retern.onclick=function(){
    count=0;
    couter.textContent=count;

}
btlick0.onclick=function(){
    document.getElementById("demo").innerHTML="باسم اللّه"
        count=0;
    couter.textCountent=count; 
}
btlick1.onclick=function(){
    document.getElementById("demo").innerHTML="الحمدلله"
    count=0;
    couter.textCountent=count; 
}
btlick2.onclick=function(){
    document.getElementById("demo").innerHTML="الله و اكبر"
    count=0;
    couter.textCountent=count; 
}
btlick3.onclick=function(){
    document.getElementById("demo").innerHTML="سبحان الله"
    count=0;
    couter.textCountent=count; 
}
btlick4.onclick=function(){
    document.getElementById("demo").innerHTML="لا اله الا الله"
    count=0;
    couter.textCountent=count; 
}
btlick5.onclick=function(){
    document.getElementById("demo").innerHTML="سبحان الله بحمده سبحان الله العظيم"
    count=0;
    couter.textCountent=count; 
}
btlick6.onclick=function(){
    document.getElementById("demo").innerHTML="لا حول ولا قوة الا بالله"
    count=0;
    couter.textCountent=count; 
}
btlick7.onclick=function(){

    document.getElementById("demo").innerHTML="سبحان الله والحمدلله"
    count=0;
    couter.textCountent=count; 

}
btlick8.onclick=function(){

    document.getElementById("demo").innerHTML="استغفر الله"
    count=0;
    couter.textCountent=count; 

}