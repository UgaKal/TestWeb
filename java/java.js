let lielaisDivs=document.createElement("DIV");

//    let i=document.getElementsByClassName("rinda").length;
//    let divs=document.createElement("DIV");
//            divs.setAttribute("class","rinda");
//            divs.innerHTML=(i+1)+")";
//    let ievads1=document.createElement("INPUT");
//            ievads1.style="text-align:center";
//    let ievads2=document.createElement("INPUT");
//            ievads2.style="text-align:center";
//    let poga=document.createElement("INPUT");
//            poga.value="novākt";
//            poga.type="button";
//            poga.onclick=()=>{
//                poga.parentNode.remove();
//            }
//    divs.appendChild(ievads1);
//    divs.appendChild(ievads2);
//    divs.appendChild(poga);
//    
//    document.getElementById("forma").appendChild(divs);


//jaieliek bildites vai ciparini katra rutina un jasataisa ka ta ir poga
function pievienotRindu(){
let n=document.getElementById("quantity").value;
let divs=document.createElement("DIV");
for(var i=0;i<n;i++){
    let divs2=document.createElement("DIV");
    for(var ii=0;ii<n;ii++){
        let ievads=document.createElement("INPUT");
        divs2.appendChild(ievads);
    }
    divs.appendChild(divs2);
}

document.getElementById("forma").appendChild(divs);


}
