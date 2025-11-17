// We'll fill this step by step. Keep your console open!
console.log("JS loaded ✅");

// Step 1: 
var school = "GIC";
let year = 2025;
const maxScore = 100;

school = "Institute of Techonology of Cambodia";
year = 2025;
// maxScore = 120;  // This will cause an error because maxScore is a constant

console.log(a); // undefined
var a = 10;


try {
    console.log(b); // ReferenceError
    let b = 20;
} catch (error) {
    console.log("b error:", error.message); // b error: Cannot access 'b' before initialization
}

// var behaves differently from let because var is old-style, function-scoped, and hoisted to undefined 
// unlike let which is block-scoped and not hoisted in the same way.

// Step 2:

function letterGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log("Grade(92):", letterGrade(92)); // expected output: 'A'

function mood(emoji) {
    switch (emoji) {
        case ':)':
            return "Happy";    
        case ':(':
            return "Sad";
        case ':|':
            return "neutral";
        default:
            return "Unknown mood";
    }
}
console.log("Mood(:)):", mood(':)')); // expected output: "Happy"

// Step 3:
// for
let sumFor = 0; 
for (let i = 1; i <= 5; i++) {
    sumFor = sumFor + i;
}
console.log("Sum using for loop:", sumFor);

// while
let sumWhile = 0;
while (sumWhile < 15) {
    sumWhile += 1;
}
console.log("Sum using while loop:", sumWhile);

// for...of
const nums = [1, 2, 3, 4, 5];
let sumForOf = 0;
for (const num of nums) { 
    sumForOf += num;
}
console.log("Sum using for...of loop:", sumForOf);

// Step 4:

const scores = [88, 95, 62];

// Add 74 to the end
scores.push(74); 
console.log("Scores after push:", scores);

// remove first element
scores.shift(); 
console.log("Scores after shift:", scores);

//Find the highest score
const highestScore = Math.max(...scores);
console.log("Highest score:", highestScore);

// Stretch: filter to keep only passing scores (>= 60)
const passingScores = scores.filter(score => score >= 60); 
console.log("Passing scores:", passingScores);

// Step 5:

// a) function declaration
function square1(n) {
    return n * n; 
}
// b) function expression
const square2 = function(n) { 
    return n * n;
 }

// c) arrow function
const square3 = (n) => n * n;
console.log(square1(4), square2(4), square3(4)); // expected output: 16 16 16

// Step 6:
const student = { name: "Dana", score: 84 };
student.passed = student.score >= 60;

function describeStudent(s) {
    return `${s.name} has a score of ${s.score} and has ${s.passed ? 'passed' : 'not passed'}.`; // Using template literals
}
console.log(describeStudent(student));

// Step 7:
const output = document.getElementById("output");
// TODO: also get nameInput, scoreInput, addBtn, clearBtn, list, stats

const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const stats = document.getElementById("stats");

output.textContent = "Ready to Practice DOM!";

// Step 8:
const state = { students: [], showOnlyPass: false }; // { name: string, score: number }

// Show-only-pass toggle button
const showOnlyPassBtn = document.createElement('button');
showOnlyPassBtn.textContent = 'Show only pass students';
showOnlyPassBtn.style.margin = '6px';
showOnlyPassBtn.addEventListener('click', () => {
    state.showOnlyPass = !state.showOnlyPass;
    showOnlyPassBtn.textContent = state.showOnlyPass ? 'Show all' : 'Show only pass';
    render();
});

// insert before the list if it exists, otherwise append to body
if (list && list.parentNode) {
    list.parentNode.insertBefore(showOnlyPassBtn, list);
} else {
    document.body.appendChild(showOnlyPassBtn);
}

function computerAverage(arr) {
    if (arr.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        // arr contains student objects with a score property
        total += arr[i].score;
    }
    return total / arr.length;
}

function render() {
    // 1) Clear current list
    list.innerHTML = "";

    // 2) Optionally filter (show only passing) and sort students by score descending for display
    let studentsToShow = state.showOnlyPass ? state.students.filter(s => s.score >= 60) : [...state.students];
    const sortedStudents = studentsToShow.sort((a, b) => b.score - a.score);

    // 3) Render each student with pass/fail class and a remove button
    for (let student of sortedStudents) {
        const li = document.createElement("li");
        li.textContent = `${student.name} — ${student.score}`;
        li.classList.add(student.score >= 60 ? 'pass' : 'fail');

        // small remove button
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.className = 'removeBtn';
        btn.style.marginLeft = '20px';
        btn.addEventListener('click', (e) => {
            // remove the student by index in the original array and re-render
            const idx = state.students.indexOf(student);
            if (idx !== -1) {
                state.students.splice(idx, 1);
                render();
            }
        });

        li.appendChild(btn);
        list.appendChild(li);
    }

    const totalStudents = state.students.length;
    const passingStudents = state.students.filter(s => s.score >= 60).length;
    const failingStudents = totalStudents - passingStudents;

    // Calculate average and format it to two decimal places
    const averageScore = computerAverage(state.students);
    const averageScoreFormatted = averageScore.toFixed(2);

    // --- DOM Update ---
    stats.textContent = `Count: ${totalStudents} | Avg: ${averageScoreFormatted} | Pass: ${passingStudents} | Fail: ${failingStudents}`;
}

addBtn.addEventListener('click', (e) => {
    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);
    // Validation
    if (!name) {
        alert('Name cannot be empty.');
        return;
    }
    if (isNaN(score) || score < 0 || score > 100) {
        alert('Score must be a number between 0 and 100.');
        return;
    }
    state.students.push({ name: name, score: score });
    render();
});

clearBtn.addEventListener('click', (e) => {
    state.students = [];
    render();
});

render();