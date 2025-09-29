const onClick = document.getElementById('onClick');
const theContend = document.getElementById('theContend');
const cardBox = document.getElementById('cardBox');
const todoForm = document.getElementById('todoForm')
const inputBox = document.getElementById("inputBox")
const cancelBtn = document.getElementById("cancelBtn")
const texts = document.getElementById("texts")
const createbtn = document.getElementById("create")


onClick.addEventListener('click', () => {
  theContend.classList.toggle('-left-0');
});

let todos = [
  { task: 'Finish homework', completed: false },
  { task: 'Buy groceries', completed: true },
  { task: 'Clean the room', completed: false },
];

const boxs = () => {
  cardBox.innerHTML = '';

  todos.map((todo, i) => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const div2 = document.createElement('div');
    const updatebut = document.createElement('button');
    const deletebut = document.createElement('button');

    updatebut.innerText = todo.completed ? '✅' : '⬜';
    updatebut.addEventListener('click', () => {
      todos[i].completed = !todos[i].completed;

      boxs();
    });

    deletebut.innerText = '❌';

    deletebut.addEventListener('click', () => {
      todos.splice(i, 1);
      boxs();
    });

    h3.className = 'font-bold text-center px-2';
    deletebut.className =
      'bg-blue-500 rounded-full p-2 px-4 hover:bg-purple-600';
    updatebut.className = `bg-blue-500 rounded-full p-2 px-4 
              ${todo.completed ? 'hover:bg-gray-500' : 'hover:bg-green-500'}
          `;

    div2.className = 'flex gap-6';

    div.className =
      'p-4  bg-gray-900 text-gray-300 w-[342px] flex items-center gap-5 justify-center px-2  mb-2 rounded-xl flex-col';
    h3.innerText = todo.task;

    div2.appendChild(deletebut);
    div2.appendChild(updatebut);

    div.appendChild(h3);
    div.appendChild(div2);

    cardBox.appendChild(div);
  });
};

const cancelfun = () => {
  inputBox.classList.toggle("hidden")
  inputBox.classList.toggle("flex")
}

createbtn.addEventListener("click", cancelfun)
cancelBtn.addEventListener("click", cancelfun)
inputBox.addEventListener("click",cancelfun)

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const text = texts.value.trim()
  if (text) {
    todos.push({ task: text, completed: false })
    texts.value=""
    boxs()
    cancelfun()
    
  }
})

boxs();
