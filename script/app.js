
document.getElementById("calculate-btn").addEventListener("click", ()=>{
    const income = parseFloat(document.getElementById("income").value) ;
    const food = parseFloat(document.getElementById("food").value);
    const rent = parseFloat(document.getElementById("rent").value);
    const clothes = parseFloat(document.getElementById("clothes").value);
    const expense = food + rent + clothes ;
   
    document.getElementById("total-expense").innerText = expense ;
    document.getElementById("balance").innerText =income - expense;

})

// !------------------------------------------------------------------------------

document.getElementById("save-btn").addEventListener("click", () =>{

    const save = document.getElementById("save-input").value;

    const income = parseFloat(document.getElementById("income").value);

    const percentage = (save / 100) * income;

    document.getElementById("save-amount").innerText = percentage;

    const remaining = parseFloat(document.getElementById("balance").innerText) - percentage;

    document.getElementById("remaining").innerText = remaining;

})

