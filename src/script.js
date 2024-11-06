function showFlight(){
    const display=document.getElementById("displayed_teckits");
    const departeinp=document.getElementById('floating_email1').value;
    const arrivéeinp=document.getElementById('floating_email2').value;
    const departe=document.querySelectorAll('#from');
    const arrivée=document.querySelectorAll('#to');
    if(departeinp&&arrivéeinp){
    display.classList.add('grid');
    display.classList.remove('hidden');
    for(let i=0;i<4;i++){
    departe[i].textContent=`${departeinp}`;
    arrivée[i].textContent=`${arrivéeinp}`;
}   
}
}
ticketsResrv();
function ticketsResrv(){
    const display=document.getElementById("displayed_teckits");
    const btnResrv= display.querySelectorAll('button');
    const selectFlight= document.getElementById('selectFlight');
    const lainding=document.getElementById('lainding');
for(let i=0;i<4;i++){
    btnResrv[i].addEventListener("click",()=>{
    display.classList.add('hidden');
    display.classList.remove('grid');
    selectFlight.classList.add('hidden');
    lainding.classList.add('hidden');
})
}
}
