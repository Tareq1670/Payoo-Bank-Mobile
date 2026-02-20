let elctricBill = 0;

document.getElementById("select_bill").addEventListener("change", (e) => {
    const accountNumber = getValue("bill_acount_number");
    const accountValid = getValidation(accountNumber);

    const value = e.target.value;

    if (value === "Education Bill") {
        document.getElementById("amount_pay").value = 499;
    }
    if (value === "Wifi Bill") {
        document.getElementById("amount_pay").value = 550;
    }
    if (value === "Wedding Book Bill") {
        document.getElementById("amount_pay").value = 999;
    }
    if (value === "Electric Bill") {
        document
            .getElementById("bill_acount_number")
            .addEventListener("blur", (e) => {
                const number = e.target.value;

                const numberValid = getValidation(number, 11);

                if (numberValid !== true) {
                    alert("Please input your valid number");
                    document.getElementById("bill_acount_number").value = "";
                } else {
                    const randomBill = Math.floor(
                        Math.random() * (9999 - 11) + 10,
                    );
                    elctricBill = randomBill;
                    document.getElementById("amount_pay").value = randomBill;
                }
            });
    }
});

document.getElementById("pay_btn").addEventListener("click", () => {
    const selectValue = getValue("select_bill");
    const numberValue = getValue("bill_acount_number");
    const amountValue = Number(getValue("amount_pay"));
    const pinValue = getValue("pay_pin");
    const balance = getTextContent("balance");

    const pin = getValidation(pinValue, 4);
    const amount = getValidation(amountValue);
    const number = getValidation(numberValue, 11);

    if (pin !== true) {
        alert("Please input your valid pin");
        document.getElementById("pay_pin").value = "";
    } else {
        if (pinValue === "1234") {
            if (selectValue === "") {
                alert("Please select your bill");
            } else {
                if (number !== true) {
                    alert("Please input you number");
                } else {
                    if (selectValue === "Education Bill") {
                        if (499 === Number(amountValue)) {
                            setBalance(Number(balance) - amountValue);
                            document.getElementById("select_bill").value = "";
                            document.getElementById(
                                "bill_acount_number",
                            ).value = "";
                            document.getElementById("amount_pay").value = "";
                            document.getElementById("pay_pin").value = "";
                            alert("Your education bill is Payed");
                            addTransition(numberValue, amountValue, "out");
                        }
                    }
                    if (selectValue === "Wifi Bill") {
                        if (550 === Number(amountValue)) {
                            setBalance(Number(balance) - amountValue);
                            document.getElementById("select_bill").value = "";
                            document.getElementById(
                                "bill_acount_number",
                            ).value = "";
                            document.getElementById("amount_pay").value = "";
                            document.getElementById("pay_pin").value = "";
                            alert("Your wifi bill is Payed");
                            addTransition(numberValue, amountValue, "out");
                        }
                    }
                    if (selectValue === "Wedding Book Bill") {
                        if (999 === Number(amountValue)) {
                            setBalance(Number(balance) - amountValue);
                            document.getElementById("select_bill").value = "";
                            document.getElementById(
                                "bill_acount_number",
                            ).value = "";
                            document.getElementById("amount_pay").value = "";
                            document.getElementById("pay_pin").value = "";
                            alert("Your Wedding bill is Payed");
                            addTransition(numberValue, amountValue, "out");
                        }
                    }
                    if (selectValue === "Electric Bill") {
                        if (elctricBill === Number(amountValue)) {
                            setBalance(Number(balance) - amountValue);
                            document.getElementById("select_bill").value = "";
                            document.getElementById(
                                "bill_acount_number",
                            ).value = "";
                            document.getElementById("amount_pay").value = "";
                            document.getElementById("pay_pin").value = "";
                            alert("Your Electric bill is Payed");
                            addTransition(numberValue, amountValue, "out");
                        }
                        else{
                            alert("Please set Your Current Bill")
                            document.getElementById(
                                "bill_acount_number",
                            ).value = "";
                            document.getElementById("amount_pay").value = "";
                        }
                    }
                }
            }
        } else {
            alert("Pin number is invalid");
            document.getElementById("pay_pin").value = "";
        }
    }
});
