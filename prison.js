const apiUrl = 'http://localhost:3000'; // Adjust port if necessary

// Function to add a new prisoner
addPrisonerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const crime = document.getElementById('crime').value;
    const sentence = parseInt(document.getElementById('sentence').value);

    if (name && crime && sentence) {
        const newPrisoner = {
            name: name,
            crime: crime,
            sentence: sentence
        };

        fetch(`${apiUrl}/prisoners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPrisoner),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add prisoner');
            }
            return response.json();
        })
        .then(() => {
            displayPrisoners();
            addPrisonerForm.reset();
        })
        .catch(error => {
            console.error('Error adding prisoner:', error);
        });
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
            name: staffName,
            role: staffRole,
            department: staffDepartment
        };

        fetch(`${apiUrl}/staff`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStaffMember),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add staff member');
            }
            return response.json();
        })
        .then(() => {
            displayStaffMembers();
            addStaffForm.reset();
        })
        .catch(error => {
            console.error('Error adding staff member:', error);
        });
    } else {
        alert('Please fill out all fields.');
    }
});

// Function to delete a prisoner
function deletePrisoner(id) {
    fetch(`${apiUrl}/prisoners/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete prisoner');
        }
        return response.json();
    })
    .then(() => {
        displayPrisoners();
    })
    .catch(error => {
        console.error('Error deleting prisoner:', error);
    });
}

// Function to delete a staff member
function deleteStaffMember(id) {
    fetch(`${apiUrl}/staff/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete staff member');
        }
        return response.json();
    })
    .then(() => {
        displayStaffMembers();
    })
    .catch(error => {
        console.error('Error deleting staff member:', error);
    });
}

// Function to edit a prisoner
function editPrisoner(id) {
    const newName = prompt('Enter new name');
    const newCrime = prompt('Enter new crime');
    const newSentence = parseInt(prompt('Enter new sentence'));

    if (newName && newCrime && newSentence) {
        const updatedPrisoner = {
            name: newName,
            crime: newCrime,
            sentence: newSentence
        };

        fetch(`${apiUrl}/prisoners/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPrisoner),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update prisoner');
            }
            return response.json();
        })
        .then(() => {
            displayPrisoners();
        })
        .catch(error => {
            console.error('Error updating prisoner:', error);
        });
    } else {
        alert('Invalid input. Please try again.');
    }
}

// Function to edit a staff member
function editStaffMember(id) {
    const newName = prompt('Enter new name');
    const newRole = prompt('Enter new role');
    const newDepartment = prompt('Enter new department');

    if (newName && newRole && newDepartment) {
        const updatedStaffMember = {
            name: newName,
            role: newRole,
            department: newDepartment
        };

        fetch(`${apiUrl}/staff/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStaffMember),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update staff member');
            }
            return response.json();
        })
        .then(() => {
            displayStaffMembers();
        })
        .catch(error => {
            console.error('Error updating staff member:', error);
        });
    } else {
        alert('Invalid input. Please try again.');
    }
}

// Initial display of prisoners and staff members
displayPrisoners();
displayStaffMembers();
