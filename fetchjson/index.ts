import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(res => {
  console.log(res.data);
});

/*
  타입스크립트 실행 방법
  > 기본적으로 타입스크립트를 실행하기 위해서는 
    자바스크립트로의 변환이 필요하다.

  1. tsc index.ts 를 실행하여 index.js 파일로 변환 후 node로 실행한다.
  2. ts-node index.ts 로 실행한다.
*/