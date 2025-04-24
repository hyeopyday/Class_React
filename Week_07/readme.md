# 7주차 강의내용 정리

## 1. 서론: React Component Life Cycle과 Hook의 등장 배경

React 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나뉩니다. 초기에는 함수형 컴포넌트가 주로 사용되었지만, 상태 관리나 생명주기 메서드 사용 시 클래스형 컴포넌트가 필요했습니다. 클래스형 컴포넌트는 코드 구성이 어렵고 재사용성이 떨어지는 단점이 있었습니다. React Hook은 이러한 클래스형 컴포넌트의 단점을 보완하여 함수형 컴포넌트에서도 상태와 생명주기를 관리할 수 있도록 등장했습니다. Hook을 통해 함수형 컴포넌트에서도 state와 생명주기 기능을 활용할 수 있게 되었습니다.

---

## 2. React Component Life Cycle 상세 분석

React Component Life Cycle은 컴포넌트의 생성(Mounting), 업데이트(Updating), 소멸(Unmounting) 과정을 의미합니다.

| 단계         | 클래스형 메서드                                    | Hook                  | 설명                                                                 |
|--------------|----------------------------------------------------|-----------------------|----------------------------------------------------------------------|
| Mounting     | constructor, render, componentDidMount            | useState, useEffect   | DOM에 처음 삽입될 때. 초기화, 렌더링, API 호출 등 수행.            |
| Updating     | shouldComponentUpdate, render, componentDidUpdate | useEffect             | props 또는 state 변경 시. UI 갱신 및 후처리.                        |
| Unmounting   | componentWillUnmount                              | useEffect (cleanup)   | 컴포넌트 제거 시. 리소스 정리, 이벤트 제거 등.                     |

---

## 3. Hook을 사용한 State 관리: `useState`

`useState`는 함수형 컴포넌트에서 상태를 관리할 수 있게 해주는 Hook입니다.

```js
const [state, setState] = useState(initialValue);
```

- `state`: 현재 상태 값
- `setState`: 상태를 변경하는 함수
- `initialValue`: 상태 초기값

### 상태 업데이트 예시

```js
// 객체 상태 관리
setState(prev => ({ ...prev, newValue }))

// 배열 상태 관리
setState([...array, newValue])
```

### 사용 규칙
- 컴포넌트의 최상위에서만 호출 (조건문/루프 내부 X)
- 필요 시 하위 컴포넌트로 분리

---

## 4. Hook을 사용한 Side Effect 관리: `useEffect`

`useEffect`는 Side Effect를 수행할 수 있도록 도와줍니다. (데이터 fetching, 이벤트 구독, 타이머 등)

### 기본 사용법
```js
useEffect(() => {
  // setup logic
  return () => {
    // cleanup logic
  };
}, [dependencies]);
```

### 패턴별 사용
- 마운트 시 1회 실행: `useEffect(() => { ... }, [])`
- 특정 상태 변경 시 실행: `useEffect(() => { ... }, [state])`
- 매 렌더링마다 실행: `useEffect(() => { ... })`
- 언마운트 시 정리: cleanup 함수 반환

### 사용 규칙
- 의존성 배열을 정확히 설정하여 성능 최적화

---

## 5. 성능 최적화를 위한 Hook 활용: `useMemo`, `useCallback`

### `useMemo`
- 계산 비용이 큰 값을 메모이제이션

```js
const cachedValue = useMemo(() => calculateValue(), [dependencies]);
```

### `useCallback`
- 함수 메모이제이션 (불필요한 함수 재생성 방지)

```js
const memoizedFn = useCallback(() => { doSomething(); }, [dependencies]);
```

> ⚠️ 모든 함수를 useCallback으로 감싸면 오히려 성능 저하 발생 가능

---

## 6. DOM 접근 및 값 유지를 위한 Hook: `useRef`

`useRef`는 DOM 요소 접근 및 렌더링 없이 값 유지에 사용됩니다.

```js
const ref = useRef(initialValue);
```

- `.current`로 참조
- 값 변경 시 리렌더링 발생하지 않음

---

## 7. Custom Hook을 사용한 로직 재사용

Custom Hook은 공통 로직을 추출해 코드 중복을 줄입니다.

### 예시 구조
```js
function useCustomHook() {
  const [value, setValue] = useState(0);
  // 로직
  return { value, setValue };
}
```

### 규칙
- `use`로 시작하는 이름 필수
- 내부에서 다른 Hook 사용 가능

---

## 8. Hook 사용 시 주의사항 및 규칙

- **최상위 레벨**에서만 호출 (조건문, 반복문, 중첩 함수 내부 X)
- **함수형 컴포넌트** 혹은 Custom Hook 내부에서만 사용
- **항상 동일한 순서**로 호출되어야 함 (렌더링마다)

---

## 참조
<https://openai.com/index/chatgpt/>
