console.log("working");
showBooks();
function showBooks(){
    let books = localStorage.getItem("books");
  if (books == null) {
    booksObj = [];
  } else {
    booksObj = JSON.parse(books);
  }
  booksObj.forEach(function(element){
    
        console.log("UI triggered");
      
        let tableBody = document.getElementById('tableBody');
      
        let uiString = `
                      <tr>
                          
                          <td>${element.bookName}</td>
                          <td>${element.author}</td>
                          <td>${element.type}</td>
                      </tr>
          `;
          tableBody.innerHTML += uiString;

      
  });


//constructor
function Book(bookName, author, type) {
  this.bookName = bookName;
  this.author = author;
  this.type = type;
}

//Display constructor

function Display() {}

//Add methods
Display.prototype.add = function (book) {
  console.log("UI triggered");

  let tableBody = document.getElementById('tableBody');

  let uiString = `
                <tr>
                    
                    <td>${book.bookName}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
    `;
    tableBody.innerHTML += uiString;

};
Display.prototype.clear = function () {
  let addBook = document.getElementById("addBook");
  addBook.reset();
};

//Add event listener to form

let libraryForm = document.getElementById("addBook");

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let maths = document.getElementById("maths");
  let physics = document.getElementById("physics");
  let fiction = document.getElementById("fiction");

  let type;
  console.log(physics.value);

  if (fiction.checked) {
    type = fiction.value;
  } else if (maths.checked) {
    type = maths.value;
  } else if (physics.checked) {
    type = physics.value;
  }

  let book = new Book(bookName, author, type);
  console.log(book,"hihi");
  addToLocalStorage(book);

  let display = new Display();
  display.add(book);

 

  display.clear();
}

function addToLocalStorage(book){
    let books = localStorage.getItem("books");
  if (books == null) {
    booksObj = [];
  } else {
    booksObj = JSON.parse(books);
  }
  
  booksObj.push(book);
  console.log(book,"hihi");
  localStorage.setItem("books", JSON.stringify(booksObj));
}
}
