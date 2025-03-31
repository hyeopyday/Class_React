# 4주차 강의 내용 정리 및 레포트

## React 개요  
- React는 **컴포넌트 기반**으로 UI를 구성하는 라이브러리  
- **State**와 **Props**를 사용하여 데이터 관리  
- 함수형 컴포넌트와 클래스형 컴포넌트 지원  

---

## State (상태)  
State는 컴포넌트 내부에서 변화하는 데이터를 관리하는 핵심 개념  
- **컴포넌트의 상태를 저장하고 변경 가능**  
- **State 값이 변경되면 컴포넌트가 자동으로 다시 렌더링**  
- 함수형 컴포넌트에서는 `useState`를 사용  

### State 예제 (클래스형)  
```jsx
import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'subtest'
    };
  }

  render() {
    return (
      <div className="Test">
        <SubTest 
          title={this.state.title} 
          onClick={() => this.setState({ title: "Clicked" })} 
        />
      </div>
    );
  }
}

export default Test;
```
### State 예제 (함수형)

```jsx
import React, { useState } from 'react';

export default function Test() {
  const [title, setTitle] = useState('subtest');

  return (
    <div className="Test">
      <SubTest title={title} onClick={() => setTitle('Clicked')} />
    </div>
  );
}
```

---
## Props
* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법
  - 읽기 전용이며 변경할 수 없음
  - 함수형, 클래스형 컴포넌트에서 모두 사용 가능

### props 예제

```jsx
export default function SubTest({ title }) {
  return <div>{title}</div>;
}
```
---

## 컴포넌트 생명 주기 (Component LifeCycle)

* 1️⃣ Mount (생성)
   
  - constructor() → 초기 state 설정
  - render() → 화면을 그림
  - componentDidMount() → 마운트 완료 후 실행 (API 요청 등)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("컴포넌트가 마운트됨");
  }

  render() {
    return <h1>카운트: {this.state.count}</h1>;
  }
}
```
* 2️⃣ Update (업데이트)
  
  - shouldComponentUpdate() → 렌더링 여부 결정

  - render() → 다시 렌더링

  - componentDidUpdate() → 업데이트 완료 후 실행

```jsx
componentDidUpdate(prevProps, prevState) {
  console.log("업데이트 완료");
}
```

* 3️⃣ Unmount (제거)
  
  - componentWillUnmount() → 컴포넌트 제거 시 실행

```jsx
componentWillUnmount() {
  console.log("컴포넌트가 제거됨");
}
```

---

## 실습

* [출력결과]

![image](https://github.com/user-attachments/assets/7beeeb10-56c3-42a2-8310-450402ba3445)

![image](https://github.com/user-attachments/assets/c0d7f0a0-2992-4276-8f28-464ef6428b99)

---

## 참조

* <https://chatgpt.com/>

