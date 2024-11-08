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
    // lainding.classList.add('hidden');
})
}
}
let finalP = 0 ;
    let CNum = 0;
    let ANum=0;
    let placeNumber=0;
function ticketsNum(){
    const Aticket=document.getElementById('ANum');
    const Cticket=document.getElementById('CNum');
    const Aup=document.getElementById('APriceUP');
    const Adown=document.getElementById('APriceDown');
    const Cup=document.getElementById('CPriceUp');
    const Cdown=document.getElementById('CPricedown');
    const finalPrice=document.getElementById('finalPrice');
    
    Aup.addEventListener('click',()=>{
        ANum++;
        Aticket.textContent=`${ANum}`;
        finalP=(CNum*50)+(ANum*104);
        finalPrice.textContent=`${finalP}$`;
        placeNumber=ANum+CNum;
        checkbox();
        

    })
    Adown.addEventListener('click',()=>{
        ANum--;
        Aticket.textContent=`${ANum}`;
        if(ANum<=0){
            ANum=0;
            Aticket.textContent=`${ANum}`; 
            
        }
        finalP=(CNum*50)+(ANum*104);
        finalPrice.textContent=`${finalP}$`;
        placeNumber=ANum+CNum;
        checkbox();
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].checked = false;
        }

    })
    Cup.addEventListener('click',()=>{
        CNum++;
        Cticket.textContent=`${CNum}`
        finalP=(CNum*50)+(ANum*104);
        finalPrice.textContent=`${finalP}$`;
        placeNumber=ANum+CNum;
        checkbox();
        

    })
    Cdown.addEventListener('click',()=>{
        CNum--;
        Cticket.textContent=`${CNum}`;
        if(CNum<=0){
            CNum=0;
            Cticket.textContent=`${CNum}`; 
        }
        finalP=(CNum*50)+(ANum*104);
        finalPrice.textContent=`${finalP}$`;
        placeNumber=ANum+CNum; 
        checkbox();
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].checked = false;
        }
    })
    finalPrice.textContent=`0$`;
    
  
}
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
for(let i=0;i<checkboxes.length;i++){
    checkboxes[i].setAttribute('disabled', true);
}

ticketsNum();
function checkbox() {
    
    let countChecked = 0;
  
    checkboxes.forEach(checkbox => {
      checkbox.removeAttribute('disabled');
      checkbox.addEventListener('change', () => {
        countChecked = checkboxes.filter(checkbox => checkbox.checked).length;
  
        checkboxes.forEach(checkbox => {
          if (placeNumber > countChecked) {
            checkbox.removeAttribute('disabled');
          } else if (!checkbox.checked) {
            checkbox.setAttribute('disabled', true);
          }
        });
      });
    });
  }
  