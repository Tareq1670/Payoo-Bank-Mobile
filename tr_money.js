document.getElementById("tr_btn").addEventListener("click",()=>{
    const numberValue = getValue("acount_number").replace(/\s+/g, "");
    const amountValue = getValue("tr_amount").replace(/\s+/g, "");
    const pinValue = getValue("tr_pin").replace(/\s+/g, "");
    const balance = getTextContent("balance");
    console.log(balance);

    const number = getValidation(numberValue,11);
    const amount = getAmountValidation(amountValue);
    const pin = getValidation(pinValue, 4)
    

    if(pin !== true){
        alert("Your Pin Format Is Not Valid");
        document.getElementById("tr_pin").value  = "";
    }else{
        if(pinValue !== "1234"){
            alert("Please Try Valid Pin Number");
            document.getElementById("tr_pin").value  = "";
        }else{
            if(number !== true){
                alert("Please Input Your Valid Account Number");
                document.getElementById("acount_number").value = ""
            }else{
                if(amount !== true){
                    alert("Please Input Your Valid Amount.")
                    document.getElementById("tr_amount").value = "";
                }else{
                    setBalance(Number(balance) - Number(amountValue))
                    document.getElementById("tr_pin").value  = "";
                    document.getElementById("acount_number").value = ""
                    document.getElementById("tr_amount").value = "";

                    alert(`!Success
AC-${numberValue} There Number Your Transfer Money is ${amountValue}
Your Balance is : ${Number(balance) - Number(amountValue)}$`)

                        addTransition(numberValue,amountValue,"out")
                
                    
                }
            }
        }
    }

    console.log("Number:", number , "amount :", amount, "pin:", pin);
})