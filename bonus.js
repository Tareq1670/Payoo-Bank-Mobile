let returnCoupon = true;

document.getElementById("coupon_btn").addEventListener("click", () => {
    const couponValue = getValue("coupon_number").replace(/\s+/g, "");
    const balance = getTextContent("balance");

    const coupon = getAmountValidation(couponValue);


    if (coupon !== true || couponValue.length !== 4) {
        alert("Your Coupon In Not Undifind");
        document.getElementById("coupon_number").value = "";
    } else {
        if (couponValue === "1978") {
            if (returnCoupon === true) {
                returnCoupon = false;
                setBalance(Number(balance) + 20);
                document.getElementById("coupon_number").value = "";
                alert("Congratulations You Have to 20$ Bonus In Coupon")
                addTransition("Coupon", 20,"in")
            }
            else{
                alert("You Have To Claim This reward One Time")
                document.getElementById("coupon_number").value = "";
            }
        } else {
            alert("Your Bonus Code Is Not Valid");
            document.getElementById("coupon_number").value = "";
        }
    }
});
