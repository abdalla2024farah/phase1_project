// Mock data for prisoners and staff members (for testing purposes)
let prisoners = [
    { id: 1, name: 'John Doe', crime: 'Theft', sentence: 5 },
    { id: 2, name: 'Jane Smith', crime: 'Forgery', sentence: 8 },
    { id: 3, name: 'Michael Johnson', crime: 'Assault', sentence: 10 }
];

let staffMembers = [
    { id: 1, name: 'Emily Brown', role: 'Guard', department: 'Security' },
    { id: 2, name: 'David Wilson', role: 'Nurse', department: 'Healthcare' },
    { id: 3, name: 'Jennifer Lee', role: 'Counselor', department: 'Psychology' }
];

// Function to display prisoners using mocked data
function displayPrisoners() {
    const prisonerListElement = document.getElementById('prisoner-list');
    prisonerListElement.innerHTML = ''; // Clear previous content

    prisoners.forEach(prisoner => {
        const prisonerElement = createListItem(`${prisoner.name} - ${prisoner.crime}, ${prisoner.sentence} years`);

        const deleteButton = createButton('Delete');
        deleteButton.addEventListener('click', () => deletePrisoner(prisoner.id));

        const editButton = createButton('Edit');
        editButton.addEventListener('click', () => editPrisoner(prisoner.id));

        prisonerElement.appendChild(deleteButton);
        prisonerElement.appendChild(editButton);

        prisonerListElement.appendChild(prisonerElement);
    });
}

// Function to display staff members using mocked data
function displayStaffMembers() {
    const staffListElement = document.getElementById('staff-list');
    staffListElement.innerHTML = ''; // Clear previous content

    staffMembers.forEach(staff => {
        const staffElement = createListItem(`${staff.name} - ${staff.role}, ${staff.department}`);

        const deleteButton = createButton('Delete');
        deleteButton.addEventListener('click', () => deleteStaffMember(staff.id));

        const editButton = createButton('Edit');
        editButton.addEventListener('click', () => editStaffMember(staff.id));

        staffElement.appendChild(deleteButton);
        staffElement.appendChild(editButton);

        staffListElement.appendChild(staffElement);
    });
}

// Function to add a new prisoner using mocked data
const addPrisonerForm = document.getElementById('add-prisoner-form');
addPrisonerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const crime = document.getElementById('crime').value;
    const sentence = parseInt(document.getElementById('sentence').value);

    try {
        validatePrisonerInput(name, crime, sentence);

        const newPrisoner = {
            id: prisoners.length + 1,
            name: name,
            crime: crime,
            sentence: sentence
        };

        prisoners.push(newPrisoner);
        displayPrisoners();
        addPrisonerForm.reset(); // Reset the form after successful submission
        alert('Prisoner added successfully.');
    } catch (error) {
        alert(error.message);
    }
});

// Function to add a new staff member using mocked data
const addStaffForm = document.getElementById('add-staff-form');
addStaffForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const staffName = document.getElementById('staff-name').value;
    const staffRole = document.getElementById('staff-role').value;
    const staffDepartment = document.getElementById('staff-department').value;

    try {
        validateStaffMemberInput(staffName, staffRole, staffDepartment);

        const newStaffMember = {
            id: staffMembers.length + 1,
            name: staffName,
            role: staffRole,
            department: staffDepartment
        };

        staffMembers.push(newStaffMember);
        displayStaffMembers();
        addStaffForm.reset(); // Reset the form after successful submission
        alert('Staff member added successfully.');
    } catch (error) {
        alert(error.message);
    }
});

// Function to delete a prisoner using mocked data
function deletePrisoner(id) {
    prisoners = prisoners.filter(prisoner => prisoner.id !== id);
    displayPrisoners();
    alert('Prisoner deleted successfully.');
}

// Function to delete a staff member using mocked data
function deleteStaffMember(id) {
    staffMembers = staffMembers.filter(staff => staff.id !== id);
    displayStaffMembers();
    alert('Staff member deleted successfully.');
}

// Function to edit a prisoner using mocked data
function editPrisoner(id) {
    const newName = prompt('Enter new name');
    const newCrime = prompt('Enter new crime');
    const newSentence = parseInt(prompt('Enter new sentence'));

    try {
        validatePrisonerInput(newName, newCrime, newSentence);

        const index = prisoners.findIndex(prisoner => prisoner.id === id);
        prisoners[index].name = newName;
        prisoners[index].crime = newCrime;
        prisoners[index].sentence = newSentence;

        displayPrisoners();
        alert('Prisoner updated successfully.');
    } catch (error) {
        alert(error.message);
    }
}

// Function to edit a staff member using mocked data
function editStaffMember(id) {
    const newName = prompt('Enter new name');
    const newRole = prompt('Enter new role');
    const newDepartment = prompt('Enter new department');

    try {
        validateStaffMemberInput(newName, newRole, newDepartment);

        const index = staffMembers.findIndex(staff => staff.id === id);
        staffMembers[index].name = newName;
        staffMembers[index].role = newRole;
        staffMembers[index].department = newDepartment;

        displayStaffMembers();
        alert('Staff member updated successfully.');
    } catch (error) {
        alert(error.message);
    }
}

// Function to validate prisoner input
function validatePrisonerInput(name, crime, sentence) {
    if (!name || !crime || !sentence || isNaN(sentence)) {
        throw new Error('Invalid input. Please fill out all fields correctly.');
    }
}

// Function to validate staff member input
function validateStaffMemberInput(name, role, department) {
    if (!name || !role || !department) {
        throw new Error('Invalid input. Please fill out all fields correctly.');
    }
}

// Helper function to create list item
function createListItem(text) {
    const item = document.createElement('div');
    item.textContent = text;
    return item;
}

// Helper function to create button
function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

// Initial display of prisoners and staff members
displayPrisoners();
displayStaffMembers();
