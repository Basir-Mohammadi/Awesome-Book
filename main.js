let objectlist =[
  {
    bookname: 'Java books',
    author: 'Ali',
  },
  {
    bookname: 'CSS Books',
    author: 'Ahmad',
  },
  {
    bookname:'HTML Books',
    author:'Ali'
  }
];

function generateBooks({
  bookname, author
}){
  return `
  <li>
  <span class="name">${bookname}</span><br>
  <span class="name">${author}</span><br>
  <button class="delete">delete </button><br>
</li>
  `;
}

const bookContainer=document.querySelector('.book-container ul');

const bookList=objectlist.map(book => generateBooks(book)).join('');

bookContainer.innerHTML+=bookList;

localStorage.setItem('books',JSON.stringify(objectlist))

const lists =document.querySelector ('#book-list ul');



// delete books

bookContainer.addEventListener ('click' ,function (e) {
  const title = e.target.parentElement.firstElementChild.textContent;
  if (e.target.className =='delete') {
    const li = e.target.parentElement;
    bookContainer.removeChild(li);
    objectlist = objectlist.filter((obj) => obj.bookname !== title);
    console.log(objectlist);
    console.log(title);
    localStorage.setItem('books',JSON.stringify(objectlist))
  }
});

// add books

const addForm =document.forms['add-books'];
const form =document.querySelector('form');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleName = addForm.querySelector('.name').value;
  const authorName = addForm.querySelector('.author').value;
  objectlist.push({
    bookname:titleName , author:authorName
  })
  form.reset();
  localStorage.setItem('books',JSON.stringify(objectlist))

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

