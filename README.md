# 타입스크립트 학습 노트

## 1. 개요

### 요약

- 타입스크립트 작성은 일부 "추가 문서"와 함께 자바스크립트를 작성하는 것과 동일합니다.
- 타입스크립트는 브라우저 또는 노드에서 코드가 실행되는 방식에 영향을 미치지 않습니다.
- 타입스크립트는 코딩하는 동안 뒤에 앉아 있는 친구처럼 생각하는 것이 가장 좋습니다.

### 1-1. 타입스크립트란 무엇인가?

<img width="482" alt="스크린샷 2021-09-03 오후 7 00 45" src="https://user-images.githubusercontent.com/70752848/131987844-3181638e-8a39-4308-88da-0fb1810b4486.png">

### 1-2. 타입스크립트 타입 시스템?

<img width="694" alt="스크린샷 2021-09-03 오후 7 01 22" src="https://user-images.githubusercontent.com/70752848/131987931-cce4bf8d-74d5-4306-abda-d796aea32437.png">

### 1-3. 브라우저에서의 타입스크립트

<img width="694" alt="스크린샷 2021-09-03 오후 7 02 10" src="https://user-images.githubusercontent.com/70752848/131988026-dcf3b735-f78c-4ac4-b5ab-a02ddd891c19.png">

## 2. 환경 셋업

### 타입스크립트 컴파일러

```shell
npm install -g typescript ts-node
```

> 한번만 설치하면 됩니다.

## 3. 첫번째 앱

> 네트워크 요청을 하여 일부 JSON을 가져오고 결과를 출력해봅니다.

### 3-1. Senario

1. 데이터를 가져오는 데 사용할 API를 살펴보기
2. 새 프로젝트 디렉터리 생성
3. `package.json` 파일 생성
4. 요청하기 위한 axios 설치
5. 코드 작성

### 3-2. [Fake JSON API](https://jsonplaceholder.typicode.com/)

### 3-3. 프로젝트 생성

```shell
mkdir fetchjson
cd fetchjson
npm init -y
npm install axios
```
