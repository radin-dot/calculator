const output = document.getElementById("output");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");;
const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");

let show = "";

const click1 = document.querySelectorAll("button");

click1.forEach((click1) => {
    click1.addEventListener("click", (event) => {

        let content = event.target.textContent;

        if (content == "=") {
            return;
        }

        show = show + content;

        if (
            show[0] == "/" ||
            show[0] == "+" ||
            show[0] == "x" ||
            show[0] == "-" ||
            show[0] == "."
        ) {

            alert("the math problem cant start with signs");
            show = "";

        }
        output.innerHTML = show;
    });
});

equalButton.addEventListener("click", () => {

    if (show.includes("+")) {

        let were = show.indexOf("+");


        let first = show.slice(0, were);
        let sec = show.slice(were + 1);


        first = Number(first);
        sec = Number(sec);

        let answer = first + sec;
        output.innerText = answer;
    }
});

equalButton.addEventListener("click", () => {

    if (show.includes("x")) {

        let were = show.indexOf("x");


        let first = show.slice(0, were);
        let sec = show.slice(were + 1);


        first = Number(first);
        sec = Number(sec);

        let answer = first * sec;
        output.innerText = answer;
    }
});

equalButton.addEventListener("click", () => {

    if (show.includes("/")) {

        let were = show.indexOf("/");


        let first = show.slice(0, were);
        let sec = show.slice(were + 1);


        first = Number(first);
        sec = Number(sec);

        let answer = first / sec;
        output.innerText = answer;
    }
});

equalButton.addEventListener("click", () => {

    if (show.includes("-")) {

        let were = show.indexOf("-");


        let first = show.slice(0, were);
        let sec = show.slice(were + 1);


        first = Number(first);
        sec = Number(sec);

        let answer = first - sec;
        output.innerText = answer;
    }
});

deleteButton.addEventListener("click", () => {
    
    show = show.slice(0, -1);
    output.innerHTML = show;
});

clearButton.addEventListener("click", () => {

    show = "";
    output.innerHTML = "";
})