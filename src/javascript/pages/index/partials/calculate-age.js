// Calculate age based on birthdate
const birthdate = new Date(1998, 7, 3); 
const today = new Date();
const age = today.getFullYear() - birthdate.getFullYear();

// Display age on the page
document.getElementById("age").textContent = `03, julho 1998 (${age} anos)`;
