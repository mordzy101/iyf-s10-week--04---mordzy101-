// Weekly JavaScript Fundamentals Projects
// Concepts used: variables, data types, functions, control flow, arrays, and objects.

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculateButton");
const calculatorResult = document.getElementById("calculatorResult");
const calculatorMessage = document.getElementById("calculatorMessage");

const studentNameInput = document.getElementById("studentName");
const studentScoreInput = document.getElementById("studentScore");
const addStudentButton = document.getElementById("addStudentButton");
const gradeMessage = document.getElementById("gradeMessage");
const studentList = document.getElementById("studentList");
const totalStudents = document.getElementById("totalStudents");
const averageScore = document.getElementById("averageScore");
const topScore = document.getElementById("topScore");

let students = [];

function calculate(firstNumber, secondNumber, operator) {
    if (operator === "add") {
        return firstNumber + secondNumber;
    }

    if (operator === "subtract") {
        return firstNumber - secondNumber;
    }

    if (operator === "multiply") {
        return firstNumber * secondNumber;
    }

    if (operator === "divide") {
        return firstNumber / secondNumber;
    }

    return 0;
}

function getOperatorSymbol(operator) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    return symbols[operator];
}

function handleCalculate() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const operator = operatorSelect.value;

    calculatorMessage.textContent = "";

    if (firstNumberInput.value === "" || secondNumberInput.value === "") {
        calculatorMessage.textContent = "Please enter both numbers.";
        return;
    }

    if (operator === "divide" && secondNumber === 0) {
        calculatorMessage.textContent = "You cannot divide by zero.";
        return;
    }

    const result = calculate(firstNumber, secondNumber, operator);
    const symbol = getOperatorSymbol(operator);

    calculatorResult.textContent = `${firstNumber} ${symbol} ${secondNumber} = ${result}`;
}

function getLetterGrade(score) {
    if (score >= 80) {
        return "A";
    }

    if (score >= 70) {
        return "B";
    }

    if (score >= 60) {
        return "C";
    }

    if (score >= 50) {
        return "D";
    }

    return "F";
}

function addStudent(name, score) {
    const student = {
        name: name,
        score: score,
        grade: getLetterGrade(score)
    };

    students.push(student);
}

function getAverageScore() {
    if (students.length === 0) {
        return 0;
    }

    let totalScore = 0;

    for (let index = 0; index < students.length; index++) {
        totalScore += students[index].score;
    }

    return totalScore / students.length;
}

function getTopScore() {
    if (students.length === 0) {
        return 0;
    }

    let highestScore = students[0].score;

    for (let index = 1; index < students.length; index++) {
        if (students[index].score > highestScore) {
            highestScore = students[index].score;
        }
    }

    return highestScore;
}

function renderStudents() {
    studentList.innerHTML = "";

    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div>
                <strong>${student.name}</strong>
                <span>Grade ${student.grade}</span>
            </div>
            <strong>${student.score}%</strong>
        `;

        studentList.appendChild(listItem);
    }

    totalStudents.textContent = students.length;
    averageScore.textContent = getAverageScore().toFixed(1);
    topScore.textContent = getTopScore();
}

function handleAddStudent() {
    const name = studentNameInput.value.trim();
    const score = Number(studentScoreInput.value);

    gradeMessage.textContent = "";

    if (name === "") {
        gradeMessage.textContent = "Please enter a student name.";
        return;
    }

    if (studentScoreInput.value === "" || score < 0 || score > 100) {
        gradeMessage.textContent = "Please enter a score from 0 to 100.";
        return;
    }

    addStudent(name, score);
    renderStudents();

    studentNameInput.value = "";
    studentScoreInput.value = "";
    studentNameInput.focus();
}

calculateButton.addEventListener("click", handleCalculate);
addStudentButton.addEventListener("click", handleAddStudent);

firstNumberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleCalculate();
    }
});

secondNumberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleCalculate();
    }
});

studentScoreInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleAddStudent();
    }
});

renderStudents();
