<<<<<<< HEAD
const objectlist = [
=======
let objectlist =[
>>>>>>> df7048d8f413f448c740094d22849c8a539a643d
  {
    bookname: 'Java books',
    author: 'Ali',
  },
  {
    bookname: 'CSS Books',
    author: 'Ahmad',
  },
  {
<<<<<<< HEAD
    bookname: 'HTML Books',
    author: 'Ali',
  },
];

function generateBooks({
  author, bookname,
}) {
=======
    bookname:'HTML Books',
    author:'Ali'
  }
];

function generateBooks({
  bookname, author
}){
>>>>>>> df7048d8f413f448c740094d22849c8a539a643d
  return `
  <li>
  <span class="name">${bookname}</span><br>
  <span class="name">${author}</span><br>
  <button class="delete">delete </button><br>
</li>
  `;
}

<<<<<<< HEAD
const lists = document.querySelector('#book-list ul');
const btnAdd = document.querySelector('.add');

// delete books

lists.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
=======
const bookContainer=document.querySelector('.book-container ul');

const bookList=objectlist.map(book => generateBooks(book)).join('');

bookContainer.innerHTML+=bookList;

localStorage.setItem('books',JSON.stringify(objectlist))

const lists =document.querySelector ('#book-list ul');



// delete books

bookContainer.addEventListener ('click' ,function (e) {
  const title = e.target.parentElement.firstElementChild.textContent;
  if (e.target.className =='delete') {
>>>>>>> df7048d8f413f448c740094d22849c8a539a643d
    const li = e.target.parentElement;
    bookContainer.removeChild(li);
    objectlist = objectlist.filter((obj) => obj.bookname !== title);
    console.log(objectlist);
    console.log(title);
    localStorage.setItem('books',JSON.stringify(objectlist))
  }
});

// add books

<<<<<<< HEAD
const addForm = document.forms['add-books'];
=======
const addForm =document.forms['add-books'];
const form =document.querySelector('form');
>>>>>>> df7048d8f413f448c740094d22849c8a539a643d

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleName = addForm.querySelector('.name').value;
  const authorName = addForm.querySelector('.author').value;
<<<<<<< HEAD

  // local storage

  // titleName.addEventListener('input' , letter =>{
  //   titleName.textContent=letter.target.value;
  //   authorName.textContent=letter.target.value;
  // })

  // const saveToLocalStorage =() =>{
  //   localStorage.setItem('inputName',titleName.textContent);
  //   localStorage.setItem('inputAuthor',authorName.textContent);
  // }

  // btnAdd.addEventListener('click', saveToLocalStorage);

  // create element
=======
  objectlist.push({
    bookname:titleName , author:authorName
  })
  form.reset();
  localStorage.setItem('books',JSON.stringify(objectlist))
>>>>>>> df7048d8f413f448c740094d22849c8a539a643d

  const li = document.createElement('li');
  const title = document.createElement('span');
  const breakline = document.createElement('br');
  const author = document.createElement('span');
  const breakline2 = document.createElement('br');
  const deleteBtn = document.createElement('button');

  // add class
  title.classList.add('name');
  author.classList.add('author');
  deleteBtn.classList.add('delete');

  // append

  li.appendChild(title);
  li.appendChild(breakline2);
  li.appendChild(author);
  li.appendChild(breakline);
  li.appendChild(deleteBtn);
  lists.appendChild(li);

  // content

<<<<<<< HEAD
  title.textContent = titleName;
  author.textContent = authorName;
  deleteBtn.textContent = 'delete';
});
=======
//append

li.appendChild(title);
li.appendChild(breakline2);
li.appendChild(author);
li.appendChild(breakline);
li.appendChild(deleteBtn);
bookContainer.appendChild(li);

//content

title.textContent =titleName;
author.textContent =authorName;
deleteBtn.textContent='delete';



})

>>>>>>> df7048d8f413f448c740094d22849c8a539a643d
