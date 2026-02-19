document.getElementById("cash_login_btn").addEventListener("click", () => {
    const cashOutMobile = document.getElementById("cashout_mobile_number");
    const cashOutAmount = document.getElementById("cash_out_amount");
    const cashOutPin = document.getElementById("cashout_pin");

    const mobile =getValue("cashout_mobile_number").replace(/\s+/g, "");
    const pin = getValue("cashout_pin").replace(/\s+/g, "")
    const amount = Number(getValue("cash_out_amount").replace(/\s+/g, ""));
    const balance = Number(getTextContent("balance").replace(/\s+/g, ""));

    let mobileValid = getValidation(mobile,11);
    let pinValid = getValidation(pin,4);
    let amountValid = false;

    // if (isNaN(mobile) || mobile.length !== 11 || !/\d/.test(mobile)) {
    //     mobileValid = false;
    // } else {
    //     mobileValid = true;
    // }

    // if (isNaN(pin) || pin.length !== 4 || !/\d/.test(pin)) {
    //     pinValid = false;
    //     cashOutPin.value = "";
    // } else {
    //     pinValid = true;
    // }

    if (!amount){
        amountValid = false;
    } else {
        amountValid = true;
    }

    if (mobileValid !== true || pinValid !== true) {
        alert("Please Input Your Valid Phone Number and Pin");
        cashOutMobile.value = "";
    } else {
        if (amountValid !== true) {
            alert("Please Write Your Current Amount Number");
        } else {
            if (pin === "1234") {
                if (amount <= 0 || amountValid !== true) {
                    alert(
                        "Amount is Negative or Empty Please Input Valid Amount",
                    );
                    cashOutAmount.value = "";
                } else {
                    if (amount > balance) {
                        alert("Your Amount is Out of Your Balance");
                        cashOutAmount.value = "";
                    } else {
                    setBalance(balance - amount) ;
                        alert("Cash Out Successful");
                        cashOutAmount.value = "";
                        cashOutMobile.value = "";
                        cashOutPin.value = "";
                        addTransition(mobile,amount,"out")
                    }
                }
            } else {
                alert("Please Try to Current Pin");
                cashOutPin.value = "";
            }
        }
    }

    console.log(
        "Mobile : ",
        mobileValid,
        "Pin : ",
        pinValid,
        "Amount : ",
        amountValid,
    );
});