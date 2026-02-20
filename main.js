document.getElementById("login_btn").addEventListener("click", () => {
    const mobileNumberInput = document.getElementById("mobile_number");
    const pinNumberInput = document.getElementById("input_pin");

    const mobileNumberValue = mobileNumberInput.value;
    const pinNumberValue = pinNumberInput.value;

    let mobileValidation = getValidation(mobileNumberValue,11);
    let pinValidation = getValidation(pinNumberValue,4);

    // if (
    //     !/^\d/.test(mobileNumberValue) ||
    //     mobileNumberValue.length !== 11 ||
    //     isNaN(mobileNumberValue)
    // ) {
    //     mobileValidation = false;
    // } else {
    //     mobileValidation = true;
    // }

    // if (
    //     !/^\d/.test(pinNumberValue) ||
    //     pinNumberValue.length !== 4 ||
    //     isNaN(pinNumberValue)
    // ) {
    //     pinValidation = false;
    // } else {
    //     pinValidation = true;
    // }

    if (mobileValidation && pinValidation) {
        if (mobileNumberValue == "01234567890" && pinNumberValue == "1234") {
            window.alert("Your Login Success");
            mobileNumberInput.value = "";
            pinNumberInput.value = "";
            window.location.assign('home.html')
        } else {
            window.alert("Your Mobile And Your Pin Dosen't Match");
            pinNumberInput.value = "";
            return
        }
    } else {
        window.alert("Please Try to Valid Mobile Number And Valid Pin");
        mobileNumberInput.value = "";
        pinNumberInput.value = "";
        return
    }
});

document.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        document.getElementById("login_btn").click()
    }
})



