// Change the main heading 'Fruit Shop' to 'Fruit World'
let mainHeading = document.getElementById('main-heading');
mainHeading.innerHTML = 'Fruit World';

// Change the font color of 'Fruit World' from black to orange
mainHeading.style.color = 'orange';

// Change background color of div with id = "header" to green color
let header = document.getElementById('header');
header.style.backgroundColor = 'green';

// Add a bottom border of orange color to div with id = "header"
header.style.borderBottom = '18px solid pink';

// Change the font color of 'Fruits In Basket' from black to green
let basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

// Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanks = document.getElementById("thanks");
expect(thanks.innerHTML.trim()).toBe("<p>Please visit us again</p>");


let thirdListItem = document.querySelectorAll('.fruit')[2];
if (thirdListItem) {
    thirdListItem.style.backgroundColor = 'yellow';
}

// Make all the elements in the list have bold font
let listItems = document.querySelectorAll('.fruit');
listItems.forEach(item => {
    item.style.fontWeight = 'bold';
});