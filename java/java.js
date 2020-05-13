/*jshint esversion: 6 */


//jaieliek bildites vai ciparini katra rutina un jasataisa ka ta ir poga
var maxvalue=10;
var minvalue=5;
var cipars;
var grutiba;
var dzivibas;
let n;
var s=0;
var min=0;
var h=0;
var rezultats =0;
var vards;
function randomNumber(limit){
  return Math.floor(Math.random()*limit);
}




function pievienotRindu(){
	//izslēdzu pogas pēc tabulas izveidošanas
	document.getElementById("pirmapoga").disabled =true;
	document.getElementById("myRange").disabled =true;
	//pārtulkoju grūtības līmeni matemātiski
	var limenis = parseInt(document.getElementById("myRange").value);
	
	if(limenis===1){
		grutiba=2;
		dzivibas=5;
		document.getElementById("noteikumstext").innerHTML ="Atrodi visus skaitļus kas satur 2!";}
	if(limenis===2){
		grutiba=3;
		dzivibas=4;
		document.getElementById("noteikumstext").innerHTML ="Atrodi visus skaitļus kas dalās ar 3!";}
	if(limenis===3){
		grutiba=5;
		dzivibas=3;
		document.getElementById("noteikumstext").innerHTML ="Atrodi visus skaitļus kuru ciparu summa ir lielāka par 6!";}
	if(limenis===4){
		grutiba=7;
		dzivibas=2;
		document.getElementById("noteikumstext").innerHTML ="Atrodi visus skatļus kuru ciparu summa dalās ar 2!";}
	if(limenis===5){
		grutiba=10;
		dzivibas=1;
		document.getElementById("noteikumstext").innerHTML ="Atrodi visus pirmskaitļus!";}
	//document.getElementById("gruts").innerHTML =grutiba;
	document.getElementById("dzivibas").innerHTML =dzivibas;
	
	document.getElementById("pareizitext").innerHTML ="Pareizi palikuši: ";
	document.getElementById("dzivibastext").innerHTML = "Atlikušās dzīvības: ";
	document.getElementById("laikstext").innerHTML ="Laiks: ";
	document.getElementById("stundas").innerHTML ="0"+ h+":";
	document.getElementById("minutes").innerHTML = "0"+min+":";
	document.getElementById("sekundes").innerHTML = "0"+s;
	
	
 n=document.getElementById("quantity").value;
	if(n<minvalue||n>maxvalue){
		alert("Vērtība neatbilst kritērijiem!");
		document.getElementById("pirmapoga").disabled =false;
		//resetosana nestrada for some reason
		//document.getElementById("quantity").reset();
	}
	else{
let divs=document.createElement("DIV");
for(var i=0;i<n;i++){
    let divs2=document.createElement("DIV");
	
    for(var ii=0;ii<n;ii++){
		//uztaisa pogas
        let ievads=document.createElement("INPUT");
		ievads.type="button";
		ievads.id=i+"r"+ii+"k";
		ievads.style.fontSize=randomNumber((29)*10)+8+"px";
		//varetu uztaisit prikolu ka neatkartojas cipari
		ievads.value=(randomNumber(99)+1);
		//uzdevums
		
		//1 limenis
		if(limenis===1){
		if (ievads.value.toString().indexOf('2') > -1){
		ievads.className="pareizais";
		ievads.onclick=()=>pareizs(ievads.id);}
		else{
		ievads.onclick=()=>nepareizs(ievads.id);
		ievads.className="nepareizais";}
		}
		
		//2 limenis
		if(limenis===2){
		if ((ievads.value % 3) ===0){
		ievads.className="pareizais";
		ievads.onclick=()=>pareizs(ievads.id);}
		else{
		ievads.onclick=()=>nepareizs(ievads.id);
		ievads.className="nepareizais";}
		}
		
		//3 limenis
		if(limenis===3){
		if (ciparuSumma(ievads.value)>6){
		ievads.className="pareizais";
		ievads.onclick=()=>pareizs(ievads.id);}
		else{
		ievads.onclick=()=>nepareizs(ievads.id);
		ievads.className="nepareizais";}
		}
		
		//4 limenis
		if(limenis===4){
		if (ciparuSumma(ievads.value)%2===0){
		ievads.className="pareizais";
		ievads.onclick=()=>pareizs(ievads.id);}
		else{
		ievads.onclick=()=>nepareizs(ievads.id);
		ievads.className="nepareizais";}
		}
		
		//5 limenis
		if(limenis===5){
		if (pirmskaitlis(ievads.value)===true){
		ievads.className="pareizais";
		ievads.onclick=()=>pareizs(ievads.id);}
		else{
		ievads.onclick=()=>nepareizs(ievads.id);
		ievads.className="nepareizais";}
		}
        divs2.appendChild(ievads);
    }
    divs.appendChild(divs2);
}

document.getElementById("forma").appendChild(divs);
	}
var cikpalicis =document.getElementsByClassName("pareizais").length;
	cipars = cikpalicis;
	document.getElementById("cikpalicis").innerHTML=cipars;
	
	
	

	
	
//taimeris
var myVar = setInterval(myTimer, 1000);
function myTimer() {
	

	if(s<10){
	s=s+1;
	rezultats=rezultats+1;
	document.getElementById("sekundes").innerHTML = "0"+s;
  }else if(s>9&&s<60){
	 s=s+1;
	 rezultats=rezultats+1;
	document.getElementById("sekundes").innerHTML =s;
  }else{
	  s=s-60;
	  document.getElementById("sekundes").innerHTML =s;
	  if(min<10){
		  min=min+1;
		  document.getElementById("minutes").innerHTML = "0"+min+":";
	  }else if(min>9&&min<60){
		   min=min+1;
		  document.getElementById("minutes").innerHTML =min+":";
	  }else{
		  min=min-60;
		  document.getElementById("minutes").innerHTML =min+":";
		  if(h<10){
			  h=h+1;
			  document.getElementById("stundas").innerHTML ="0"+ h+":";
		  }else{
			  h=h+1;
			  document.getElementById("stundas").innerHTML =h+":";
		  }
		  
	  }
  }
}

var pareizs =function(p){
	//alert("pareizs");
	cipars = cipars-1;
	if(cipars!==0){
	document.getElementById("cikpalicis").innerHTML=cipars;
	document.getElementById(p).disabled=true;
	document.getElementById(p).style.backgroundColor="darkgreen";
	document.getElementById(p).style.color="white";}
	else{
		clearInterval(myVar);
		
		
		vards = prompt("Apsveicu! Tu uzvarēji! Tavs rezultāts ir "+ rezultats+" sekundes "+limenis+". līmenī  ar "+ (n*n)+" rūtiņām. Ja vēlies, vari pievienot savu vārdu uzvarētāju sarakstā:", "Vārds, Uzvārds");
		for(var z=0;z<n;z++){
   		for(var zz=0;zz<n;zz++){
			document.getElementById(z+"r"+zz+"k").disabled=true;
			
		}}
	}
};
var nepareizs =function(p){
	
	
	if(dzivibas<2){
		alert("Diemžēl, tu zaudēji.");
		clearInterval(myVar);
		dzivibas = dzivibas-1;
		document.getElementById("dzivibas").innerHTML=dzivibas;
		for(var z=0;z<n;z++){
   		for(var zz=0;zz<n;zz++){
			document.getElementById(z+"r"+zz+"k").disabled=true;
			
		}}

	}else{
		document.getElementById(p).disabled=true;
		document.getElementById(p).style.backgroundColor="crimson";
			document.getElementById(p).style.color="white";
	dzivibas = dzivibas-1;
	document.getElementById("dzivibas").innerHTML=dzivibas;
		
	}
	
};


function ciparuSumma(q) {
 if(q<10){
	 return q;
 }
 if(q>9&&q<100){
	 var desmiti1 =Math.floor(q/10);
	 var vieni1 = q-(desmiti1*10);
	 
	 return (desmiti1+vieni1);
	 
 }
if(q>99&&q<1000){
	var simti2 = Math.floor(q/100);
	var desmiti2 =Math.floor( (q-(simti2*100))/10);
	var vieni2 = q-(simti2*100)-(desmiti2*10);
	
	return (simti2+desmiti2+vieni2);
	
}
}
function pirmskaitlis(t){
	if(t < 2){return false;}
	else{
    for (var i = 2; i < t; i++) {
        if(t%i===0){
            return false;}
    }
    return true;
	}
}

}
