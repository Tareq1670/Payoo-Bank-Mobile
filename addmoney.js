document.getElementById("add_money_button").addEventListener("click",()=>{
    const bankName = getValue("add_money_bank");
    const bankNumber = getValue("add_money_number");
    const amountNumber = getValue("add_money_amount");
    const pinNumber = getValue("add_money_pin");
    const mainBalance = getTextContent("balance");
    const number = getValidation(bankNumber,11);
    const amount = getAmountValidation(amountNumber);
    const pin = getValidation(pinNumber,4)


    if(pin !== true){
        alert("Please Write A Current Pin");
        document.getElementById("add_money_pin").value = "";
    }else{
        if(pinNumber === "1234"){
            if(bankName === "Select Your Bank"){
                alert("Your Bank is Not Select");
            }
            else{
                if(number !== true){
                    alert("Please Input Your Valid Number")
                    document.getElementById("add_money_number").value = "";
                }
                else{
                    if(amount !== true || amount <= 0){
                        alert("Please Input Your Valid Amount");
                        document.getElementById("add_money_amount").value = "";
                    }
                    else{
                        setBalance(Number(amountNumber) + Number(mainBalance))
                        document.getElementById("add_money_amount").value = "";
                        document.getElementById("add_money_pin").value = "";
                        document.getElementById("add_money_number").value = "";
                        document.getElementById("add_money_bank").value = "Select Your Bank";
                        alert(`Success! ${amountNumber} Taka has been added to your main balance from your ${bankName} account (Number: ${bankNumber}). Your Total Balance is  $${Number(amountNumber) + Number(mainBalance)}`);
                        addTransition(bankNumber,amountNumber,"in")

                    }
                }
            }
        }
        else{
            alert("Invalid Your Pin")
            document.getElementById("add_money_pin").value = "";
        }
    }
})