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
                           <h3 id="seet">${checkedindex[i]}</h3>
                        </div>
                     </div>
                  </div>
                  <div class="receipt qr-code">
                     <svg class="qr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.938 29.938">
                        <path d="M7.129 15.683h1.427v1.427h1.426v1.426H2.853V17.11h1.426v-2.853h2.853v1.426h-.003zm18.535 12.83h1.424v-1.426h-1.424v1.426zM8.555 15.683h1.426v-1.426H8.555v1.426zm19.957 12.83h1.427v-1.426h-1.427v1.426zm-17.104 1.425h2.85v-1.426h-2.85v1.426zm12.829 0v-1.426H22.81v1.426h1.427zm-5.702 0h1.426v-2.852h-1.426v2.852zM7.129 11.406v1.426h4.277v-1.426H7.129zm-1.424 1.425v-1.426H2.852v2.852h1.426v-1.426h1.427zm4.276-2.852H.002V.001h9.979v9.978zM8.555 1.427H1.426v7.127h7.129V1.427zm-5.703 25.66h4.276V22.81H2.852v4.277zm14.256-1.427v1.427h1.428V25.66h-1.428zM7.129 2.853H2.853v4.275h4.276V2.853zM29.938.001V9.98h-9.979V.001h9.979zm-1.426 1.426h-7.127v7.127h7.127V1.427zM0 19.957h9.98v9.979H0v-9.979zm1.427 8.556h7.129v-7.129H1.427v7.129zm0-17.107H0v7.129h1.427v-7.129zm18.532 7.127v1.424h1.426v-1.424h-1.426zm-4.277 5.703V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426h-1.427v-.001zM11.408 5.704h2.85V4.276h-2.85v1.428zm11.403 11.405h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426V17.11h-.004zm1.426 4.275H22.81v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276v-2.853h-.002zm0 0h1.428v-2.851h-1.428v2.851zm-11.405 0v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852H15.68V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277h1.426v1.426H15.68v2.852h-1.426V9.979H12.83V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853H12.83v1.426h-1.426v4.274h2.85v-1.426h-1.422zm15.68 1.426v-1.426h-2.85v1.426h2.85zM27.086 2.853h-4.275v4.275h4.275V2.853zM15.682 21.384h2.854v-1.427h-1.428v-1.424h-1.427v2.851zm2.853-2.851v-1.426h-1.428v1.426h1.428zm8.551-5.702h2.853v-1.426h-2.853v1.426zm1.426 11.405h1.427V22.81h-1.427v1.426zm0-8.553h1.427v-1.426h-1.427v1.426zm-12.83-7.129h-1.425V9.98h1.425V8.554z"/>
                     </svg>
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
                           <h3 id="seet">${checkedindex[i+ANum]}</h3>
                        </div>
                     </div>
                  </div>
                  <div class="receipt qr-code">
                     <svg class="qr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.938 29.938">
                        <path d="M7.129 15.683h1.427v1.427h1.426v1.426H2.853V17.11h1.426v-2.853h2.853v1.426h-.003zm18.535 12.83h1.424v-1.426h-1.424v1.426zM8.555 15.683h1.426v-1.426H8.555v1.426zm19.957 12.83h1.427v-1.426h-1.427v1.426zm-17.104 1.425h2.85v-1.426h-2.85v1.426zm12.829 0v-1.426H22.81v1.426h1.427zm-5.702 0h1.426v-2.852h-1.426v2.852zM7.129 11.406v1.426h4.277v-1.426H7.129zm-1.424 1.425v-1.426H2.852v2.852h1.426v-1.426h1.427zm4.276-2.852H.002V.001h9.979v9.978zM8.555 1.427H1.426v7.127h7.129V1.427zm-5.703 25.66h4.276V22.81H2.852v4.277zm14.256-1.427v1.427h1.428V25.66h-1.428zM7.129 2.853H2.853v4.275h4.276V2.853zM29.938.001V9.98h-9.979V.001h9.979zm-1.426 1.426h-7.127v7.127h7.127V1.427zM0 19.957h9.98v9.979H0v-9.979zm1.427 8.556h7.129v-7.129H1.427v7.129zm0-17.107H0v7.129h1.427v-7.129zm18.532 7.127v1.424h1.426v-1.424h-1.426zm-4.277 5.703V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426h-1.427v-.001zM11.408 5.704h2.85V4.276h-2.85v1.428zm11.403 11.405h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426V17.11h-.004zm1.426 4.275H22.81v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276v-2.853h-.002zm0 0h1.428v-2.851h-1.428v2.851zm-11.405 0v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852H15.68V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277h1.426v1.426H15.68v2.852h-1.426V9.979H12.83V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853H12.83v1.426h-1.426v4.274h2.85v-1.426h-1.422zm15.68 1.426v-1.426h-2.85v1.426h2.85zM27.086 2.853h-4.275v4.275h4.275V2.853zM15.682 21.384h2.854v-1.427h-1.428v-1.424h-1.427v2.851zm2.853-2.851v-1.426h-1.428v1.426h1.428zm8.551-5.702h2.853v-1.426h-2.853v1.426zm1.426 11.405h1.427V22.81h-1.427v1.426zm0-8.553h1.427v-1.426h-1.427v1.426zm-12.83-7.129h-1.425V9.98h1.425V8.554z"/>
                     </svg>
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
}
console.log(departeinp);