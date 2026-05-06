// Student Grade Tracker

// Array to store student data
let students = [];

// Function to add a new student
function addStudent() {
    const nameInput = document.getElementById("studentName");
    const gradeInput = document.getElementById("studentGrade");
    
    const name = nameInput.value.trim();
    const grade = parseFloat(gradeInput.value);
    
    // Validation
    if (!name) {
        alert("Please enter a student name");
        return;
    }
    
    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Please enter a valid grade between 0 and 100");
        return;
    }
    
    // Create student object
    const student = {
        id: Date.now(),
        name: name,
        grade: grade
    };
    
    // Add to array
    students.push(student);
    
    // Clear inputs
    nameInput.value = "";
    gradeInput.value = "";
    
    console.log(`Student added: ${name} - Grade: ${grade}`);
    
    // Update display
    displayStudents();
    updateStatistics();
}

// Function to display all students
function displayStudents() {
    const studentList = document.getElementById("studentList");
    
    if (students.length === 0) {
        studentList.innerHTML = '<div class="empty-message">No students added yet</div>';
        return;
    }
    
    let html = "";
    
    students.forEach(student => {
        const letterGrade = getLetterGrade(student.grade);
        html += `
            <div class="student-item">
                <div class="student-info">
                    <div class="student-name">${student.name}</div>
                    <div class="student-grade">Grade: ${student.grade}% (${letterGrade})</div>
                </div>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </div>
        `;
    });
    
    studentList.innerHTML = html;
}

// Function to convert numeric grade to letter grade
function getLetterGrade(grade) {
    if (grade >= 90) return "A";
    if (grade >= 80) return "B";
    if (grade >= 70) return "C";
    if (grade >= 60) return "D";
    return "F";
}

// Function to delete a student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    
    if (index !== -1) {
        const deletedStudent = students[index];
        students.splice(index, 1);
        console.log(`Student deleted: ${deletedStudent.name}`);
        
        displayStudents();
        updateStatistics();
    }
}

// Function to update statistics
function updateStatistics() {
    // Total students
    document.getElementById("totalStudents").textContent = students.length;
    
    if (students.length === 0) {
        document.getElementById("averageGrade").textContent = "--";
        document.getElementById("highestGrade").textContent = "--";
        document.getElementById("lowestGrade").textContent = "--";
        return;
    }
    
    // Calculate average
    const grades = students.map(student => student.grade);
    const average = grades.reduce((sum, grade) => sum + grade, 0) / students.length;
    document.getElementById("averageGrade").textContent = average.toFixed(2);
    
    // Find highest grade
    const highest = Math.max(...grades);
    document.getElementById("highestGrade").textContent = highest;
    
    // Find lowest grade
    const lowest = Math.min(...grades);
    document.getElementById("lowestGrade").textContent = lowest;
    
    console.log(`Statistics updated - Average: ${average.toFixed(2)}, Highest: ${highest}, Lowest: ${lowest}`);
}

// Function to clear all students
function clearAllStudents() {
    if (students.length === 0) {
        alert("No students to clear");
        return;
    }
    
    if (confirm("Are you sure you want to delete all students?")) {
        students = [];
        console.log("All students cleared");
        displayStudents();
        updateStatistics();
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
    console.log("Student Grade Tracker loaded");
});
