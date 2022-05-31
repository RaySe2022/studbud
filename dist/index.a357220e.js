let btnShow = document.getElementById("date-btn");
console.log(btnShow);
let output = document.querySelector("h1");
console.log(output);
btnShow.addEventListener("click", ()=>{
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getDate();
    let date = today.getDate();
    console.log("show");
    let current_date = `${month}/${date}/${year}`;
    output.innerText = current_date;
    console.log(current_date);
});

//# sourceMappingURL=index.a357220e.js.map
