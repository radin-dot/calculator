const output = document.getElementById("output");

const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");

const equalButton = document.getElementById("equal");

const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

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


        output.innerHTML = answer;

    }


});