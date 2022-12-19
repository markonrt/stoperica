var intervalID;
let sat=`0`;
let minut =`0`;
let sekund = `0`;

//sati minuti i sekunde
let sati = document.querySelector('.box #sati');
let minuti = document.querySelector('.box #minuti');
let sekunde = document.querySelector('.box #sekunde');

//dugmad
let dugme = document.querySelector('.box #dugme');
let dugmeStop = document.querySelector('.box #dugmeStop');
let dugmeAgain = document.querySelector('.box #dugmeAgain');
let settingLap = document.querySelector('.box #settingLap');

//sekcija za dodavanje trenutne vrednosti
let lap = document.querySelector('.box #setLap');

dugme.addEventListener('click', ()=>{
    dugme.setAttribute("disabled", "true");
    startClock();
});
dugmeStop.addEventListener('click', ()=>{
    dugme.removeAttribute("disabled");
    stopClock();
});
dugmeAgain.addEventListener('click', ()=>{
    dugme.removeAttribute("disabled");
    resetClock();
});
settingLap.addEventListener('click', ()=>{
    setLap();
});
let startClock = () =>{
    intervalID = setInterval(startIt, 250)
}
let stopClock = () =>{
    clearInterval(intervalID);
}
let resetClock = () =>{
    clearInterval(intervalID);
    sat = 0;
    minut = 0;
    sekund = 0;
    sati.innerHTML = `0${sat}:`;
    minuti.innerHTML = `0${minut}:`;
    sekunde.innerHTML = `0${sekund}`;
    lap.innerHTML = ''
}
let startIt = () => {    
    sekund++;
    sati.innerHTML = `${sat}:`;
    minuti.innerHTML = `${minut}:`;
    sekunde.innerHTML = `${sekund}`;
    if(sekund<=9){
        sekunde.innerHTML = `0${sekund}`;
    }
    if(minut<=9){
        minuti.innerHTML = `0${minut}:`;
    }
    if(sat<=9){
        sati.innerHTML = `0${sat}:`;
    }
    if(sekund>59){
        sekund=0;
        minut++;
    }
    if(minut>59){
        minut=0;
        sat++;
    }            
};
let setLap = () =>{
    //sekund 0 
    if(sat==0 && minut==0 && sekund==0)
    {
        let mue;
    }else{
        lap.innerHTML += `<div class="dodatLap">Sat: ${sat}, Minut:${minut}, Sekund:${sekund}</div>`;
    
    }
    
}
//console.log(dugme)

        
        