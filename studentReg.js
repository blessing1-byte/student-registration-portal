/*
1.collect input value from user

2.on click of the button, you should be able to add the user to the array of student

3.when you add the value to the array, you should be able to manipulate that array, so that
it will appear in a list format(style this list).

4.the list should be able to remain the same even after refreshing or adding a new student to the list

5.add a remove button to remove unwanted student
*/

/*
solution
collect all elements needed
1.create a function that is going to retrieve students from the array list
2. create another that will store those values that you retrieved from the array
3. create a function that will display to the ui, on click of the add button
4. create a function that adds student
5.create a function that removes Student

5 function
getStudent()
saveStudent()
renderStudent()
addStudent()
removeStudent()
*/

const button = document.getElementById("addStudent");
const list = document.getElementById("studentList");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const statusInput = document.getElementById("status");
const imageInput = document.getElementById("image");

const getStudents = () => {
  return JSON.parse(localStorage.getItem("students")) || [];
};

const saveStudents = (students) => {
  localStorage.setItem("students", JSON.stringify(students));
};

//create a function to clear inputs
const clearInputs = () => {
  nameInput.value = "";
  emailInput.value = "";
  statusInput.value = "";
  imageInput.value = "";
};

//add student
const addStudent = () => {
  const students = getStudents();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const status = statusInput.value.trim();
  const image = imageInput.files[0];

  const fileReader = new FileReader(); //create a variable to hold the file reader interface

  fileReader.onload = (e) => {
    students.push({ name, email, status, image: e.target.result });
    saveStudents(students);

    console.log(students);

    renderStudents();
    clearInputs();
  };

  fileReader.readAsDataURL(image);
};

//render student
const renderStudents = () => {
  const students = getStudents();

  list.innerHTML = "";

  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.classList.add("studentCard");
    div.innerHTML += `
    
    <img src=${student.image} alt="student image" class="product-image">
            <h3>${student.name}</h3>
            <h5>${student.email}</h5>
            <p>${student.status}</p>
         
    `;
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;

    removeBtn.addEventListener("click", () => {
      removeStudent(index);
    });

    list.appendChild(div);
    div.appendChild(removeBtn);
  });
};

const removeStudent = (index) => {
  const students = getStudents();

  students.splice(index, 1);

  saveStudents(students);
  renderStudents();
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  addStudent();
});

renderStudents();
