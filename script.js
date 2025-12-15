

function calculateTip(tipPercentage){

    const total=document.getElementById("total").value;
    const tipAmount=document.getElementById("tipAmount");

    let result="0";
    

    if( tipPercentage === "fifteen"){
        result= total * 1.15;    
     }
    else if( tipPercentage ==="seventeen"){
        result= total * 1.17;        
    }
    else if( tipPercentage === "twenty"){
        result= total * 1.2;    
    }


    tipAmount.textContent=`$ ${result.toFixed(2)}`;
    

}