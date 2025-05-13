# 9주차 웹프로그래밍 강의 내용 정리

---

## 주제
* 배열 형태의 데이터를 사용하여 여러 개의 컴포넌트를 효율적으로 렌더링하고, 각 컴포넌트를 고유하게 식별하기 위해 키(key)라는 특별한 속성을 사용한다  ***(index)***

---

### map() 함수

* map() 함수는 배열(Array)의 각 요소를 변환하여 새로운 배열을 생성하는 JavaScript의 배열 메서드
* 이 메서드는 원본 배열을 변경하지 않고, 새로운 배열을 반환

```jsx
const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
return (
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li> // li key값이 없으면 오류가 생긴다.
))}
</ul>
);
}
```

---

### List&Key

* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값이다
* 리액트에서 키는 아이템들을 구분하기 위한 고유한 문자열이다
* 리스트의 각 항목에는 고유한 키(key 속성)를 추가해야 함

```jsx
function AttendanceBook(props) {
return (
<ul>
{students.map((student, index) => {
return <li key={student.id}>{student.name}</li>; // 키 사용
})}
</ul>
);
}
```

---
### Fomes

* 사용자의 입력을 처리하고 데이터를 서버로 전송하는 데 사용 / (ex) 회원가입에서 사용
* Form은 사용자 입력을 관리하고, 제출(submit) 이벤트를 처리하는 중요한 요소
  - submit은 사용자가 입력한 값을 전달하는 이벤트, reset은 지우는 것

<br>

* 리액트 Form의 작동 방식
1. 초기 상태 설정: 각 입력 요소의 초기값을 상태로 설정합니다.
2. 입력 요소 렌더링: 상태를 기반으로 입력 요소를 렌더링합니다.
3. onChange 이벤트 처리: 사용자가 입력 요소의 값을 변경하면 onChange 이벤트 핸들러가 호출되고, 상태를 업데이트합니다.
4. onSubmit 이벤트 처리: 사용자가 Form을 제출하면 onSubmit 이벤트(폼이 submit될 때 발생하는 이벤트) 핸들러가 호출되고, 상태에 저장된 데이터를 서버로 전송합니다.
5. 상태 업데이트 및 렌더링: 서버 응답에 따라 상태를 업데이트하고, UI를 다시 렌더링합니다.

---

### 예시

```jsx
function RequestForm(props){
const [value, setValue] = useState('요청사항을 입력하세요:');
const handleChange = (event) => {
setValue(event.target.value);
}
const handleSubmit = (event) => {
alert('입력한 요청사항: '+value);
event.preventDefault();
}
return(
<form onSubmit = {handleSubmit}>
<label>
요청사항:
<textarea value={value} onChange={handleChange} />
</label>
<button type="submit">제출</button>
</form>
);
}
```

---

### Lifting State Up

* 상태를 부모 컴포넌트로 올려서 중앙에서 관리하는 방식
* 하위 컴포넌트의 상태를 부모 컴포넌트로 이동(관리)시키는 패턴
* 리액트는 단방향 데이터 흐름을 따르기 때문에, 하위 컴포넌트에서 부모 컴포넌트의 상태를 직접 변경할 수 없다
• 따라서 하위 컴포넌트의 상태를 ***부모 컴포넌트***에서 관리하고, 필요한 경우 부모 컴포넌트에서 ***하위 컴포넌트로 데이
터를 전달***해야 합니다.

  * 예시
    ![image](https://github.com/user-attachments/assets/0dd6856f-19d5-4e36-8dfa-e76e17d2a697)

---

### 합성과 상속
* 리액트에서 컴포넌트 간 관계를 설정하는 두 가지 주요 방법


* 합성
  - 아래의 페이지는 두 개의 컴포넌트를 합성한 것
  - Containment (Containment 패턴), Specialization (특정 기능을 확장하는 패턴), Higher-Order Components (HOC)

* Containment (Containment 패턴)
  - 컴포넌트 내부에 다른 컴포넌트를 포함할 때 사용
```jsx
function Card({ children }) {
return (
<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
{children}
</div>
);
}
function App() {
return (
<Card>
<h2>안녕하세요</h2>
<p>이것은 카드 컴포넌트입니다.</p>
</Card>
);
}
export default App;

function SplitPane(props) {
return (
<div className="SplitPane">
<div className="SplitPane-left">
{props.left}
</div>
<div className="SplitPane-right">
{props.right}
</div>
</div>
);
}
function App(props) {
return (
<SplitPane
left={
<Contacts />
}
right={
<Chat />
}
/>
);
}
```

* Specialization (특정 기능을 확장하는 패턴)
  - 특정 역할을 수행하는 컴포넌트를 만들 때 사용
 
```jsx
function Dialog({ title, message }) {
return (
<div style={{ border: "1px solid black", padding: "10px" }}>
<h3>{title}</h3>
<p>{message}</p>
</div>
);
}
function WarningDialog() {
return <Dialog title="경고!" message="이 작업은 취소할 수 없습니다." />;
}
function SuccessDialog() {
return <Dialog title="성공!" message="작업이 완료되었습니다." />;
}
function App() {
return (
<div>
<WarningDialog />
<SuccessDialog />
</div>
);
}
export default App;
```
  
