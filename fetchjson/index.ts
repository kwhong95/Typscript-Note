import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
});

/*
  타입스크립트 실행 방법
  > 기본적으로 타입스크립트를 실행하기 위해서는 
    자바스크립트로의 변환이 필요하다.

  1. tsc index.ts 를 실행하여 index.js 파일로 변환 후 node로 실행한다.
  2. ts-node index.ts 로 실행한다.
*/