//  scripit section stars here 
        
     let seatnumber = 40;
     setinnText('totalseat',seatnumber); 
     let count= 1;
 
 const buttton=document.querySelectorAll("button");
 let arr = Array.from(buttton);
 arr.forEach((btn)=>{
     btn.addEventListener("click",(addSheet)=>{
         const perprice=500;
         count = count + 1 ;      
         const total = perprice * count;
         setinnText('total',total); 
         setinnText('Grand',total); 
         setinnText('price',perprice); 
         totalseat();
         activefunction();
 
     });
 });

    function activefunction(){
     const chancebg = document.getElementById('A1');
     chancebg.style.backgroundColor ='#1DD100'
     chancebg.classList.add('#1DD100');
    };
     
    function activefunction(){
     const chancebg = document.getElementById('B1');
     chancebg.style.backgroundColor ='#1DD100'
     chancebg.classList.add('#1DD100');
    };
    function activefunction(){
     const chancebg = document.getElementById('B1');
     chancebg.style.backgroundColor ='#1DD100'
     chancebg.classList.add('#1DD100');
    };
     
  /***totalseat function start */ 

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








       
    //  this code for raf
    //  function Pluse(){
    //      if(seatnumber => 1){
    //          setinnText('Pluse',"Emptry" )
             
    //       }else{
    //         seatnumber = seatnumber +1;
    //         setinnText('Pluse' ,seatnumber); 
            
    //       }
    //  };


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
 
 