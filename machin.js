function getValue(value) {
    const input = document.getElementById(value);
    const outPut = input.value;
    return outPut;
}

// Get TextContent
function getTextContent(value) {
    const input = document.getElementById(value);
    const outPut = input.textContent.replace(/\s+/g, "");
    return outPut;
}

// Validation
function getValidation(value, quantity) {

    if (isNaN(value) || value.length !== quantity || !/\d/.test(value)) {
        return false;
    } else {
        return true;
    }
}
// amountValidation
function getAmountValidation(value) {

    if (isNaN(value) || !value) {
        return false;
    } else {
        return true;
    }
}



// Balance set
function setBalance(value){
    document.getElementById("balance").textContent = value;
}


// Time set 
function addTransition(account,amount,type){
    const list = document.getElementById("transition_list");

    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-US");

    const div = document.createElement("div");
    div.classList = "card bg-base-100 rounded-xl flex flex-row items-center justify-between px-4 py-2";

    div.innerHTML =`
    <div>
        <h2 class= "text-[18px] font-semibold">AC-${account}</h2>
        <p class="text-sm text-gray-500">${date} - ${time}</p>
    </div>
    <div>
    <h2 class="text-[20px]">
        ${type === "out" ? "-" : "+"}${amount}$
    </h2>
    </div>
    `

    list.prepend(div);

}

// Remove section
function showOnly(id){
    document.getElementById('add_money').classList.add("hidden");
    document.getElementById("cash_out").classList.add("hidden");
    document.getElementById("transition").classList.add("hidden");
    document.getElementById("tr_section").classList.add("hidden");
    document.getElementById("coupon").classList.add("hidden");
    document.getElementById("pay_bill").classList.add("hidden");
    
    document.getElementById(id).classList.remove("hidden")
}