// Make variables first to be able to use in events
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item function
function addItem(e) {
    e.preventDefault();

    console.log(1);
};