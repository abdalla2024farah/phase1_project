// Initial data
let prisoners = [
    { id: 1, name: "John Doe", crime: "Theft", sentence: 5 },
    { id: 2, name: "Jane Smith", crime: "Forgery", sentence: 7 }
];

let staffMembers = [
    { id: 1, name: "Alice Johnson", role: "Guard", department: "Security" },
    { id: 2, name: "Bob Williams", role: "Counselor", department: "Rehabilitation" }
];

// DOM elements
const prisonerList = document.getElementById('prisoner-list');
const staffList = document.getElementById('staff-list');
const addPrisonerForm = document.getElementById('add-prisoner-form');
const addStaffForm = document.getElementById('add-staff-form');
const apiUrl = 'http://localhost:5501'; 


// Function to display prisoners in the UI
function displayPrisoners() {
    prisonerList.innerHTML = '';
    prisoners.forEach(prisoner => {
        const prisonerDiv = document.createElement('div');
        prisonerDiv.classList.add('prisoner');
        prisonerDiv.innerHTML = `
            <p><strong>Name:</strong> ${prisoner.name}</p>
            <p><strong>Crime:</strong> ${prisoner.crime}</p>
            <p><strong>Sentence:</strong> ${prisoner.sentence} years</p>
            <button class="delete-btn" onclick="deletePrisoner(${prisoner.id})">Delete</button>
        `;
        prisonerList.appendChild(prisonerDiv);
    });
}

// Function to display staff members in the UI
function displayStaffMembers() {
    staffList.innerHTML = '';
    staffMembers.forEach(staff => {
        const staffDiv = document.createElement('div');
        staffDiv.classList.add('staff-member');
        staffDiv.innerHTML = `
            <p><strong>Name:</strong> ${staff.name}</p>
            <p><strong>Role:</strong> ${staff.role}</p>
            <p><strong>Department:</strong> ${staff.department}</p>
            <button class="delete-btn" onclick="deleteStaffMember(${staff.id})">Delete</button>
        `;
        staffList.appendChild(staffDiv);
    });
}

// Function to add a new prisoner
addPrisonerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const crime = document.getElementById('crime').value;
    const sentence = parseInt(document.getElementById('sentence').value);

    if (name && crime && sentence) {
        const newPrisoner = {
            id: prisoners.length > 0 ? prisoners[prisoners.length - 1].id + 1 : 1,
            name: name,
            crime: crime,
            sentence: sentence
        };
        prisoners.push(newPrisoner);
        displayPrisoners();
        addPrisonerForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Function to add a new staff member
addStaffForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const staffName = document.getElementById('staff-name').value;
    const staffRole = document.getElementById('staff-role').value;
    const staffDepartment = document.getElementById('staff-department').value;

    if (staffName && staffRole && staffDepartment) {
        const newStaffMember = {
            id: staffMembers.length > 0 ? staffMembers[staffMembers.length - 1].id + 1 : 1,
            name: staffName,
            role: staffRole,
            department: staffDepartment
        };
        staffMembers.push(newStaffMember);
        displayStaffMembers();
        addStaffForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Function to delete a prisoner
function deletePrisoner(id) {
    prisoners = prisoners.filter(prisoner => prisoner.id !== id);
    displayPrisoners();
}

// Function to delete a staff member
function deleteStaffMember(id) {
    staffMembers = staffMembers.filter(staff => staff.id !== id);
    displayStaffMembers();
}