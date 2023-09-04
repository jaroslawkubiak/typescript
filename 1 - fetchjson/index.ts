import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/3";

// w interface możemy ignorować niektóre property obiektów
interface Todo {
  finished: any;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(reposnse => {
  const todo = reposnse.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// wpisujemy spodziewany typ dla danego argumentu
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID : ${id}
    Has a title of: ${title}
    Is it finished?  ${completed}
    `);
};
