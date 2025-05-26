# 🚀 React Todo List 애플리케이션

<div align="center">
  
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  
  ### 소프트웨어학과 Web Programming 과제
  #### 효율적인 할 일 관리를 위한 모던 React 애플리케이션
  
</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [설치 및 실행](#-설치-및-실행)
- [컴포넌트 구조](#-컴포넌트-구조)
- [주요 기능 구현](#-주요-기능-구현)
- [Context API를 활용한 상태 관리](#-context-api를-활용한-상태-관리)
- [커스텀 Hook](#-커스텀-hook)

---

## 🌟 프로젝트 소개

이 프로젝트는 React와 styled-components를 활용하여 만든 모던한 Todo List 애플리케이션입니다. 사용자 친화적인 UI와 함께 할 일을 추가, 완료 표시, 삭제할 수 있는 기능을 제공합니다. Context API를 활용한 상태 관리로 효율적인 컴포넌트 구조를 갖추고 있습니다.

![Todo List Preview](https://via.placeholder.com/800x400?text=Todo+List+Preview)

---

## 🔧 설치 및 실행

프로젝트를 시작하기 위한 기본 설정 명령어:

```bash
# 프로젝트 생성
npx create-react-app mashup-todolist

# 프로젝트 디렉토리로 이동
cd mashup-todolist

# 필요한 패키지 설치
yarn add react-icons styled-components
```

설치 후 실행:

```bash
# 개발 서버 실행
yarn start
```

> 💡 **Tip**: `yarn start` 명령어로 개발 서버를 실행하면 자동으로 브라우저가 열리고 http://localhost:3000 에서 애플리케이션을 확인할 수 있습니다.

---

## 🏗️ 컴포넌트 구조

### 1. TodoTemplate

<details>
<summary>컴포넌트 상세 정보</summary>

투두리스트의 레이아웃을 설정하는 컴포넌트입니다. 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줍니다.

```jsx
import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
```
</details>

### 2. TodoHead

<details>
<summary>컴포넌트 상세 정보</summary>

오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.

```jsx
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  
  return (
    <TodoHeadBlock>
      <h1>2024년 5월 17일</h1>
      <div className="day">금요일</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
```
</details>

### 3. TodoList

<details>
<summary>컴포넌트 상세 정보</summary>

할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 여러 개의 TodoItem 컴포넌트를 렌더링해줍니다.

```jsx
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
```
</details>

### 4. TodoItem

<details>
<summary>컴포넌트 상세 정보</summary>

각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다. 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다. 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.

```jsx
import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
```
</details>

### 5. TodoCreate

<details>
<summary>컴포넌트 상세 정보</summary>

새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. TodoTemplate의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력할 수 있는 폼이 나타납니다. 버튼을 다시 누르면 폼이 사라집니다.

```jsx
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  
  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };
  
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input 
              autoFocus 
              placeholder="할 일을 입력 후, Enter 를 누르세요" 
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
```
</details>

---

## 🔄 주요 기능 구현

### 1. 글로벌 스타일 적용

styled-components의 createGlobalStyle을 사용하여 전체 페이지에 회색 배경색을 적용합니다.

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

### 2. 컴포넌트 스타일링

styled-components를 사용하여 각 컴포넌트에 스타일을 적용합니다. 예를 들어, TodoTemplate 컴포넌트는 중앙에 정렬된 흰색 박스를 보여줍니다.

### 3. 할 일 항목 관리

- **추가**: TodoCreate 컴포넌트에서 새로운 할 일을 입력하고 추가할 수 있습니다.
- **완료 표시**: TodoItem 컴포넌트에서 체크 원을 클릭하여 할 일의 완료 상태를 토글할 수 있습니다.
- **삭제**: TodoItem 컴포넌트에 마우스를 올리면 나타나는 삭제 아이콘을 클릭하여 항목을 삭제할 수 있습니다.

### 4. 남은 할 일 개수 표시

TodoHead 컴포넌트에서 완료되지 않은 할 일의 개수를 계산하여 표시합니다.

---

## 🌐 Context API를 활용한 상태 관리

이 프로젝트에서는 Context API를 활용하여 상태를 관리합니다. 이를 통해 props drilling 없이 컴포넌트 간에 상태를 공유할 수 있습니다.

### TodoContext.js

<details>
<summary>Context 구현 코드</summary>

```jsx
import React, { useReducer, createContext, useContext, useRef } from 'react';

// 초기 상태
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

// 리듀서 함수
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// Provider 컴포넌트
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 커스텀 Hook
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
```
</details>

### App 컴포넌트에서 Provider 사용

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
```

---

## 🧩 커스텀 Hook

이 프로젝트에서는 Context API를 더 편리하게 사용하기 위해 세 가지 커스텀 Hook을 만들었습니다:

1. **useTodoState**: 할 일 목록 상태를 조회하는 Hook
2. **useTodoDispatch**: 할 일 목록을 업데이트하는 액션을 디스패치하는 Hook
3. **useTodoNextId**: 새로운 할 일 항목에 사용할 고유 ID를 관리하는 Hook

이러한 커스텀 Hook을 사용하면 컴포넌트에서 Context를 더 쉽게 사용할 수 있으며, Provider가 없는 경우 에러를 발생시켜 디버깅을 용이하게 합니다.

---

<div align="center">
  
  ### 🎉 프로젝트 완성!
  
  이 프로젝트를 통해 React의 기본 개념과 함께 Context API, styled-components 등의 활용법을 배울 수 있습니다.
  
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  
</div>
