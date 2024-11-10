const display=document.getElementById("displayed_teckits");
const departeinp=document.getElementById('floating_email1').value;
const arrivéeinp=document.getElementById('floating_email2').value;
const departe=document.querySelectorAll('#from');
const arrivée=document.querySelectorAll('#to');
let Dateinp=document.getElementById('date_picker').value;
let Tdate;
let tdepart ;
let tarrivé;
function showFlight(){
    const display=document.getElementById("displayed_teckits");
    const departeinp=document.getElementById('floating_email1').value;
    const arrivéeinp=document.getElementById('floating_email2').value;
    const departe=document.querySelectorAll('#from');
    const arrivée=document.querySelectorAll('#to');
    let Dateinp=document.getElementById('date_picker').value;
     tdepart=departeinp;
     tarrivé=arrivéeinp;
     Tdate=Dateinp;
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
    const plane=document.getElementById('seetReservation');
for(let i=0;i<4;i++){
    btnResrv[i].addEventListener("click",()=>{
    display.classList.add('hidden');
    display.classList.remove('grid');
    selectFlight.classList.add('hidden');
    lainding.classList.add('hidden');
    plane.classList.remove('hidden');
    plane.classList.add('flex');
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
let checkedindex=[];
ticketsNum();
function checkbox() {
    
    let countChecked = 0;
  
    checkboxes.forEach(checkbox => {
      checkbox.removeAttribute('disabled');
      checkbox.addEventListener('change', () => {
        countChecked = checkboxes.filter(checkbox => checkbox.checked).length;
        checkedindex=[];
for(let i=0;i<checkboxes.length;i++){ 
if(checkboxes[i].checked){
    
    checkedindex.push(i);
}
}
  
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
let tname;
let TlastName;
function showTickets(){
    const plane=document.getElementById('seetReservation');
    const tickets=document.getElementById('Tickets');
    const Tnameinp=document.getElementById('floating_first_name').value;
    const TlastNameinp=document.getElementById('floating_last_name').value;
    

tname=Tnameinp;
TlastName=TlastNameinp;
    plane.classList.remove('flex');
    plane.classList.add('hidden');
    tickets.classList.remove('hidden');
    tickets.classList.add('grid');


for(let i=0;i<ANum;i++){
    const ticket=document.createElement('div');
    ticket.classList.add('ticket-system');
    tickets.appendChild(ticket);
 
    ticket.innerHTML=`<div>
            <h1 class="title m-[10px]">Wait a second, your ticket is being printed ...</h1>
            <div id="printerr">
            <div class="printer [box-shadow:10px_3px_3px_0px_10px_3px_rgba(0,_0,_0,_0.2)]" />
            </div>
            <div id="ticket" class="receipts-wrapper">
               <div class="receipts">
                  <div class="receipt">
                     
                     <div class="route">
                        <h2 id="tFrom">${tdepart}</h2>
                        <svg class="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
                           <path fill="#3f32e5" d="M497.25 357v-51l-204-127.5V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V178.5L12.75 306v51l204-63.75V433.5l-51 38.25V510L255 484.5l89.25 25.5v-38.25l-51-38.25V293.25l204 63.75z"/>
                        </svg>
                        <h2 id="tTo">${tarrivé}</h2>
                     </div>
                     <div class="details">
                        <div class="item">
                           <span >Passanger</span>
                           <h3 id="name">${tname} ${TlastName}</h3>
                        </div>
                        <div class="item">
                           <span>Flight No.</span>
                           <h3>US6969</h3>
                        </div>
                        <div class="item">
                           <span>Departure</span>
                           <h3 id="flightDate">${Tdate}</h3>
                        </div>
                        <div class="item">
                           <span>Gate Closes</span>
                           <h3>15:03</h3>
                        </div>
                        <div class="item">
                           <span>Type</span>
                           <h3 id="type">Adult</h3>
                        </div>
                        <div class="item">
                           <span>Seat</span>
                           <h3 class="seet">${checkedindex[i]}</h3>
                        </div>
                     </div>
                  </div>
                  <div class="receipt qr-code">
                     <img  id="QR" class="qr" />
                     <div class="description">
                        <h2>${tname} ${TlastName}</h2>
                        <p>Show QR-code when requested</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>`;
        
    
}

for(let i=0;i<CNum;i++){
    const ticket=document.createElement('div');
    ticket.classList.add('ticket-system');
    tickets.appendChild(ticket);
 
    ticket.innerHTML=`<div>
            <h1 class="title m-[10px]">Wait a second, your ticket is being printed ...</h1>
            <div id="printerr">
            <div class="printer [box-shadow:10px_3px_3px_0px_10px_3px_rgba(0,_0,_0,_0.2)]" />
            </div>
            <div id="ticket" class="receipts-wrapper">
               <div class="receipts">
                  <div class="receipt">
                     
                     <div class="route">
                        <h2 id="tFrom">${tdepart}</h2>
                        <svg class="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
                           <path fill="#3f32e5" d="M497.25 357v-51l-204-127.5V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V178.5L12.75 306v51l204-63.75V433.5l-51 38.25V510L255 484.5l89.25 25.5v-38.25l-51-38.25V293.25l204 63.75z"/>
                        </svg>
                        <h2 id="tTo">${tarrivé}</h2>
                     </div>
                     <div class="details">
                        <div class="item">
                           <span >Passanger</span>
                           <h3 id="name">${tname} ${TlastName}</h3>
                        </div>
                        <div class="item">
                           <span>Flight No.</span>
                           <h3>US6969</h3>
                        </div>
                        <div class="item">
                           <span>Departure</span>
                           <h3 id="flightDate">${Tdate}</h3>
                        </div>
                        <div class="item">
                           <span>Gate Closes</span>
                           <h3>15:03</h3>
                        </div>
                        <div class="item">
                           <span>Type</span>
                           <h3 id="type">Child</h3>
                        </div>
                        <div class="item">
                           <span>Seat</span>
                           <h3 class="seet">${checkedindex[i+ANum]}</h3>
                        </div>
                     </div>
                  </div>
                  <div class="receipt qr-code">
                    <img  id="QR" class="qr" />
                     <div class="description">
                        <h2>${tname} ${TlastName}</h2>
                        <p>Show QR-code when requested</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>`;
        
    
};
let QRImg=document.querySelectorAll('.qr');
let seet=document.querySelectorAll('.seet');
for(let i=0;i<QRImg.length;i++){
QRCode.toDataURL(seet[i].textContent).then(dataUrl =>{
    
    QRImg[i].src=dataUrl;
})
}
$('#Tickets').printThis();

}
