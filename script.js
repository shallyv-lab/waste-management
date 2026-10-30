function animateValue(id,end){

let current=0;

const el=document.getElementById(id);

const timer=setInterval(()=>{

current++;

el.textContent=current;

if(current>=end){
clearInterval(timer);
}

},20);

}

animateValue("households",20);
animateValue("waste",451);
animateValue("zones",5);

new Chart(document.getElementById("barChart"),{

type:"bar",

data:{
labels:["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5"],

datasets:[{
label:"Waste Generated (Kg)",
data:[80,107,85,70,109],

backgroundColor:[
"#4CAF50",
"#00C853",
"#36A2EB",
"#FFB300",
"#8E24AA"
]
}]
}

});

new Chart(document.getElementById("pieChart"),{

type:"pie",

data:{
labels:["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5"],

datasets:[{
data:[80,107,85,70,109],

backgroundColor:[
"#4CAF50",
"#00C853",
"#36A2EB",
"#FFB300",
"#8E24AA"
]
}]
}

});