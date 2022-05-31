const objectlist =[
  {
    bookname:'Java books',
    author:'Ali'
  },
  {
    bookname:'CSS Books',
    author:'Ahmad'
  },
  {
    bookname:'HTML Books',
    author:'Ali'
  }
]

function generateBooks({
  author,bookname
}){
  return `
  <li>
  <span class="name">${bookname}</span><br>
  <span class="name">${author}</span><br>
  <button class="delete">delete </button><br>
</li>
  `
}


const lists =document.querySelector ('#book-list ul');
const btnAdd= document.querySelector ('.add');


// delete books

lists.addEventListener ('click' ,function (e) {

  if (e.target.className =='delete') {
    const li = e.target.parentElement;
    lists.removeChild(li);
  }
})

//add books

const addForm =document.forms['add-books'];

addForm.addEventListener ('submit', function (e) {
  e.preventDefault();

  const titleName = addForm.querySelector('.name').value;
  const authorName = addForm.querySelector('.author').value;


//local storage

// titleName.addEventListener('input' , letter =>{
//   titleName.textContent=letter.target.value;
//   authorName.textContent=letter.target.value;
// })

// const saveToLocalStorage =() =>{
//   localStorage.setItem('inputName',titleName.textContent);
//   localStorage.setItem('inputAuthor',authorName.textContent);
// }

// btnAdd.addEventListener('click', saveToLocalStorage);

//create element

const li =document.createElement ('li');
const title =document.createElement('span');
const breakline =document.createElement('br');
const author =document.createElement('span');
const breakline2 =document.createElement('br');
const deleteBtn =document.createElement('button');


//add class
title.classList.add('name');
author.classList.add('author');
deleteBtn.classList.add('delete');


//append

li.appendChild(title);
li.appendChild(breakline2);
li.appendChild(author);
li.appendChild(breakline);
li.appendChild(deleteBtn);
lists.appendChild(li);

//content

title.textContent =titleName;
author.textContent =authorName;
deleteBtn.textContent='delete';

})

