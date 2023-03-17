let myLibrary = [];


// title:'The Book 1',author:'author 1', pages:50, read:'no'

function Book(title,author,pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Create 3 book objects manually for pre-placement
const book1 = new Book("Harry Pooper and the Goblin","JK Rolling","4","true");
const book2 = new Book("Eragoon","Some guy","1000000","true");
const book3 = new Book("The Art of FG","You, the reader", "1","false");
console.log(book2);
// Add above books to myLibrary
myLibrary.push(book1,book2,book3);


function addBookToLibrary(book) {
    var newRow = table.insertRow();
    var title_cell = newRow.insertCell(); 
    var author_cell = newRow.insertCell();
    var pages_cell = newRow.insertCell();
    var read_cell = newRow.insertCell();
    var remove_cell = newRow.insertCell();
    const read_checkbox = document.createElement('input')
    read_checkbox.type = "checkbox";
    const remove_btn = document.createElement('button');
    remove_btn.textContent = "Remove";
    remove_btn.classList.add("remove_button");
    remove_btn.addEventListener("click", () => {
        const parent_cell = remove_btn.parentNode;
        const parent_row = parent_cell.parentNode;
        parent_row.remove();
    })
    title_cell.innerHTML = book.title;
    author_cell.innerHTML = book.author;
    pages_cell.innerHTML = book.pages;
    read_cell.append(read_checkbox)
    if (book.read == "true" || book.read == true) {
        read_checkbox.checked = true;
    }
    remove_cell.append(remove_btn);
}

const table = document.querySelector("table");


// Adds 3 books to 
// for of loops loop the content, while for in loops loop the indices
for (let b of myLibrary) {
    addBookToLibrary(b)
}

const new_btn = document.querySelector(".new_book");
const form = document.querySelector("form");
new_btn.addEventListener('click', () => {
    form.style.display = "block";
});

const new_form = document.querySelector("form");
const submit_button = document.querySelector(".submit_btn");
const remove_buttons = document.querySelectorAll(".remove_button");



submit_button.addEventListener("click", submitForm)

function submitForm(event) {
    const title = new_form.elements.book_title.value;
    const author = new_form.elements.book_author.value;
    const pages = new_form.elements.book_pages.value;
    const read = new_form.elements.book_read.checked;
    const new_book = new Book(title,author,pages,read);
    console.log(new_book);
    
    
    if (title!="" && author!="") {
        addBookToLibrary(new_book);
        event.preventDefault();
        }
       
    
    else {
        alert('pwease enter title and author');
    }
    event.preventDefault();
}


remove_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const parent_cell = button.parentNode;
        const parent_row = parent_cell.parentNode;
        parent_row.remove();
        
    })
});


