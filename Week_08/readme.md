
# 8주차 웹프로그래밍 강의 내용 정리

---

## Event-Handler

* 사용자가 웹 페이지와 상호작용할 때 ***발생하는 다양한 이벤트(클릭, 마우스 오버, 키 입력 등)에 반응***하여 특정 동작을 수행하는 함수입니다.

* React의 이벤트

```jsx
<button onClick={activate}>
Activate
</button>
```
  - 단어들을 붙여 쓰되, 첫 단어는 소문자로 시작하고 그 다음 단어들은 대문자로 시작하는 표기법인 ***camelCase***가 사용된다.

 * 이벤트 객체 사용 (SyntheticEvent)
	- 이벤트 핸들러 함수의 첫 번째 매개변수로 SyntheticEvent 객체가 전달
```jsx
function InputComponent() {
function handleChange(event) {
console.log("입력값:", event.target.value);
}
return <input type="text" onChange={handleChange} />;
}
```

* 클래스 컴포넌트에서 이벤트 핸들러
  - 클래스 컴포넌트에서는 this 바인딩이 필요할 수 있다.
```jsx
function ButtonComponent() {
function handleClick() {
alert("버튼이 클릭되었습니다!");
}
return <button onClick={handleClick}>클릭</button>;
}
```
  - 혹은 클래스 필드 문법을 사용하여 바인딩 없이도 이벤트 핸들러를 정의할 수 있다.
```jsx
class ButtonComponent extends React.Component {
handleClick = () => {
alert("클래스 컴포넌트 버튼 클릭!");
};
render() {
return <button onClick={this.handleClick}>클릭</button>;
}
}
```
* 기본 이벤트 동작 방지 (preventDefault)
  - 이벤트의 기본 동작(예: 폼 제출, 링크 이동)을 막을 때 event.preventDefault()를 사용한다
```jsx
function FormComponent() {
function handleSubmit(event) {
event.preventDefault();
alert("폼 제출이 방지되었습니다.");
}
return (
<form onSubmit={handleSubmit}>
<button type="submit">제출</button>
</form>
);
}
```

---

* 이벤트 전파 중지 (stopPropagation)
 - 이벤트가 부모 요소로 전파되지 않도록 event.stopPropagation()을 사용할 수 있습니다

```jsx

function Parent() {
function handleParentClick() {
alert("부모 요소 클릭!");
}
function handleChildClick(event) {
event.stopPropagation(); // 부모 요소로 전파되지 않도록함
alert("자식 요소 클릭!");
}
return (
<div onClick={handleParentClick} style={{ padding: "20px", background: "#ddd" }}>
<button onClick={handleChildClick}>클릭</button>
</div>
);
}
```

* example
  
```jsx
fucntion Toggle(props) {
const [isToggleOn, setIsToggleOn] = useState(true);
//방법 1. 함수 안에 함수로 정의
function handleClick() {
setIsToggleOn(isToggleOn) => !isToggleOn);
}
//방법 2. arrow function을 사용하여 정의
const handleClick = () => {
setIsToggleOn((isToggleOn) => !isToggleOn);
}
return (
<button onClick={handleClick}>
{isToggleOn ? "켜짐" : "꺼짐" }
</button>
);
}
```

---
## DOM event vs React event

* 이벤트 처리 방식 (이벤트 등록 방식)

| 비교 항목 | DOM 이벤트 | React 이벤트 |
|------------|-----------|----------------|
| 이벤트 등록 방식 | addEventListener 사용 | JSX에서 onEvent 속성을 사용 |
| 이벤트 제거 방식 | removeEventListener 필요 | 컴포넌트 언마운트 시 자동 제거 |
| 이벤트 네이밍 방식 | 소문자 (click, change) | 카멜 케이스 (onClick, onChange) |
| this 바인딩 필요 여부 | 필요할 수도 있음  | 함수형 컴포넌트에서는 필요 없음 |


  - ✅ React는 모든 이벤트를 루트 요소(document)에서 관리하여 이벤트 리스너를 한 곳에서 처리하는 이벤트 위임(Event Delegation)방식을 사용한다.
  - ✅ 따라서 개별 요소마다 addEventListener를 여러 개 추가할 필요 없이, React의 이벤트 시스템이 자동으로 관리한다.
  - ✅ 또한, useCallback을 사용하면 불필요한 이벤트 핸들러 재생성을 방지할 수 있다.

---

## Truthy, Falsy

* Truthy : True는 아니지만 True로 여겨지는 값
* Falsy : False는 아니지만 False로 여겨지는 값
* JavaScript에서는 Boolean이 아닌 값도 조건문에서 true 또는 false처럼 동작할 수 있습니다.

 
**1. ||(OR 연산)**
```user ?? :
console.log(false || "안녕"); // "안녕"
console.log(0 || 100); // 100
console.log("" || "기본값"); // "기본값"
console.log(null || "대체값"); // "대체값"
```
**2. &&(AND 연산)**
```
console.log(true && "안녕"); // "안녕"
console.log(1 && 100); // 100
console.log("hello" && 0); // 0 (Falsy 만나서 종료)
console.log("" && "무시됨"); // "" (Falsy 만나서 종료)
```
**3. ?? (Null 병합 연산자)**
```
  let user;
console.log(user ?? "기본 사용자"); // "기본 사용자"
let age = 0;
console.log(age ?? 20); // 0 (Falsy이지만 null이 아니므로 유지)
```

***-> 이러한 값을 Truthy(참 같은 값) 또는 Falsy(거짓 같은 값)이라고 합니다.***
---
## Element variables

* 엘리먼트 변수는 JSX 코드를 변수에 할당하여 재사용하거나 조건에 따라 렌더링을 제어하는 데 사용된다.
* 엘리먼트 변수 사용 방법
  - 1. 변수 선언: JSX 코드를 변수에 할당하기 전에 const, let 또는 var 키워드를 사용하여 변수를 선언한다.
  - 2. JSX 할당: 변수에 JSX 코드를 할당합니다. JSX 코드는 일반적인 자바스크립트 표현식이므로 변수에 직접 할당할 수 있다.
  - 3. 렌더링: 변수를 JSX 코드 내에서 중괄호 {}로 감싸서 렌더링한다.
* 엘리먼트 변수를 사용하는 것은 컴포넌트의 렌더링을 보다 유연하게 관리할 수 있는 방법이다.
* 엘리먼트 변수를 사용하면 JSX 코드에서 특정 엘리먼트를 변수에 저장하고, 이를 조건부 렌더링이나 반복 렌더링에 활용할 수 있다.

---

## Inline condition

* 인라인 조건(Inline Condition)은 프로그래밍에서 조건문을 한 줄로 표현하는 방법이다.
* 보통 if 문을 사용하면 여러 줄의 코드가 필요하지만, 인라인 조건을 사용하면 더 간결한 코드 작성이 가능하다.

1. 기본적인 인라인 조건
일반적인 if 문을 사용하면 코드가 길어질 수 있다.
```memo
let message;
if (isLoggedIn) {
message = "환영합니다!";
} else {
message = "로그인이 필요합니다.";
}
```
2. && 연산자를 활용한 인라인 조건
조건이 참(true)일 때만 실행하고 싶을 때 사용할 수 있다.
```memo
isLoggedIn && console.log("로그인 성공!");
isLoggedIn이 true이면 "로그인 성공!"이 출력됩니다.
false이면 아무 동작도 하지 않습니다.
let message = isAdmin && "관리자 계정입니다.";

```
**-> isAdmin이 true면 "관리자 계정입니다."가 출력되고, false면 undefined가 되며 아무것도 출력되지 않습니다.**

3. || 연산자를 활용한 기본값 설정
Falsy 값(false, 0, null, undefined, "")이 주어지면 기본값을 설정할 수 있다.

```memo
let username = inputName || "Guest";
inputName이 null, undefined, ""이면 "Guest"가 저장됩니다.
inputName이 "John"이면 "John"이 저장됩니다.
console.log("" || "기본값"); // 출력: "기본값"
console.log(null || "기본값"); // 출력: "기본값"
console.log("사용자" || "기본값"); // 출력: "사용자"
```
---

### 📖 교수님 추천
* cursor - 요즘 개발자가 VS code에서 넘어가는 추세다. 한번 사용해보길 추천한다.
  - Vibe코딩의 중요성
<https://www.cursor.com/>
