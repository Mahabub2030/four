//  scripit section stars here 
        
     let seatnumber = 40;
     setinnText('totalseat',seatnumber); 
     let count= 0;
 
 const buttton =document.querySelectorAll("button");
 let arr = Array.from(buttton);
 arr.forEach((btn)=>{
     btn.addEventListener("click",(addSheet)=>{
         const perprice=550;
         count = count + 1 ;      
         const total = perprice * count;
         setinnText('total',total); 
         setinnText('Grand',total); 
         setinnText('price',perprice); 
         totalseat();
         activefunction();
 
     });
 });

    function activefunction(seatBook){
     const chancebg = document.getElementById('A1');
     chancebg.style.backgroundColor ='#1DD100'
     chancebg.classList.add('#1DD100');
    };
     

    function seatBook(){
     const chancebg = document.getElementById('B1');
     chancebg.style.backgroundColor ='#1DD100'
     chancebg.classList.add('#1DD100');
    };

  

    //   new code form javascript add here this code for btn section 


    function activefunction(seatBook) {
        const btn = seatBook.target;
        const selectedButtons = document.querySelectorAll('.active');
      
        if (selectedButtons.length < 4 || btn.classList.contains('active')) {
          btn.classList.toggle('active');
          btn.style.backgroundColor = btn.classList.contains('active') ? '#1DD100' : ''; 
        } else {

          alert('You can only select up to 4 buttons.');
        }
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.btn:nth-child(-n+4)'); 
      
        buttons.forEach(function(btn) {
          btn.addEventListener('click', activefunction);
        });
      });
      

    
      
    //   function add here


     function totalseat(){
         if(seatnumber <= 1){
             setinnText('totalseat','Emptry');
             
          }else{
             seatnumber = seatnumber-1;
            setinnText('totalseat',seatnumber); 
            
          }
     };

     function seatBook(buttonId) {
        var button = document.getElementById(buttonId);
        button.style.backgroundColor = "red"; // Change to any color you desire
      }

      document.getElementById('C1').addEventListener('seatBook', function(seatBook) {
        this.style.backgroundColor = getBackraoundColor('#1DD100')
      });



     function seatBook() {
        count+1; // Increment the count by 1
        document.getElementById('SeatAdd').innerHTML = "Seat:" + count; // Update the display
      }
  
       
  /***totalseat function start */ 
 
 
 function seatSerialnumber(){
   const serialnum= getElementId('Serialnumber')
 };
 
 function submitValidation(e){
     const passger=setelemtId('Passenger');
     const Phone=setelemtId('phone'). value;
     const email=setelemtId('email'). value;
 
     if(passger===null || passger===""){
         alert("please enter your phone Number")
     
     }
     if(Phone===null || Phone===""){
         alert("please enter your phone Number")
     }
     if(email===null || email===""){
         alert("please enter your phone Number")
     }
     else{
         console.log(passger)
     }
     
 
 }
 
 
 function setelemtId(getElementId){
     const GetelemtId=document.getElementById(getElementId);
     const value=GetelemtId.value;
 
     const elementid=parseFloat(value);
     return(elementid);
 }
 function setinnText(InnetextParameter,result){
     const  textparameter=document.getElementById(InnetextParameter);
     textparameter.innerHTML=result;
     
 }


//  funsion section end here //


// inpu code add here

// document.addEventListener('DOMContentLoaded', function() {
//     const emailInput = document.getElementById('emailAddress');
//     const submitButton = document.getElementById('submitBtn');
    
//     emailInput.addEventListener('input', function() {
//         if (isValidEmail(emailAddress.value)) {
//             submitButton.disabled = false;
//         } else {
//             submitButton.disabled = true;
//         }
//     });
// });

// function isValidEmail(email) {
//     // Regular expression for validating email addresses
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }


// button section  code for submit button


document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('Passenger');
    const emailAddressInput = document.getElementById('emailAddress');
    const NumberdInput = document.getElementById('password');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    
    function checkInputs() {
        const nameValid = nameInput.value.trim() !== '';
        const emailValid = isValidEmail(emailAddressInput.value);
        const passwordValid = passwordInput.value.trim() !== '';
        const NumberInputValid = phoneNumbervalue.trim() !== '';
        
        if (nameInputameValid && phoneValid && emailValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    
    nameInput.addEventListener('input', checkInputs);
    emailAddressInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
    phoneNumber.addEventListener('input', checkInputs);
});

function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

 
 