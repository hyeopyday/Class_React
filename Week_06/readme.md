# 📘 React Hooks & Life Cycle 정리

## 1. 서론: React Component Life Cycle과 Hook의 등장 배경

React 컴포넌트는 **함수형 컴포넌트**와 **클래스형 컴포넌트**로 나뉩니다.  
초기에는 함수형이 간단해서 많이 사용되었지만, 상태 관리나 생명주기 처리가 필요할 때는 클래스형이 강제되었습니다.

하지만 클래스형은 코드가 복잡하고 재사용성이 낮은 문제가 있었습니다.  
이를 해결하기 위해 등장한 것이 **React Hook**입니다.

> **Hook**을 사용하면 함수형 컴포넌트에서도 상태 관리와 생명주기 제어가 가능해집니다.

---

## 2. React Component Life Cycle 상세 분석

React의 생명주기는 **Mounting**, **Updating**, **Unmounting** 세 단계로 나뉩니다.

| 단계        | 클래스형 메서드                                      | 대응되는 Hook         | 설명 |
|-------------|--------------------------------------------------------|------------------------|------|
| Mounting    | `constructor`, `render`, `componentDidMount`          | `useState`, `useEffect` | 컴포넌트가 처음 DOM에 삽입될 때 |
| Updating    | `shouldComponentUpdate`, `render`, `componentDidUpdate` | `useEffect`             | props 또는 state가 변경될 때 |
| Unmounting  | `componentWillUnmount`                                 | `useEffect` (cleanup)   | 컴포넌트가 DOM에서 제거될 때 |

---

## 3. Hook을 사용한 State 관리: `useState`

`useState`는 상태값을 선언하고 업데이트하는 데 사용됩니다.

```js
const [state, setState] = useState(initialValue);
```
상태 업데이트 예시
객체 업데이트:

```
setState(prev => ({ ...prev, newValue }));
```
배열 업데이트:

```
setState([...array, newValue]);
```

## 🚫 규칙
Hook은 컴포넌트 최상단에서만 호출해야 함

루프, 조건문, 중첩 함수 내에서는 호출 금지

---

## 4. Hook을 사용한 Side Effect 관리: useEffect
useEffect는 컴포넌트 렌더링 후 실행할 부수 작업(Side Effect)을 처리합니다.

```
useEffect(() => {
  // effect 실행
  return () => {
    // cleanup (선택 사항)
  };
}, [dependencies]);
```
사용 예
최초 한 번만 실행:

```
useEffect(() => {
  // 마운트 시 실행
}, []);
```

특정 값 변경 시 실행:

```
useEffect(() => {
  // state 값이 바뀔 때 실행
}, [state]);
```
언마운트 시 실행 (cleanup):

```
useEffect(() => {
  return () => {
    // 정리 작업
  };
}, []);
```
---
## 5. 성능 최적화를 위한 Hook: useMemo, useCallback
useMemo
값을 캐싱해서 불필요한 계산 방지

```
const cachedValue = useMemo(() => computeValue(a, b), [a, b]);
useCallback
```
함수를 캐싱해서 불필요한 재생성 방지

```
const handleClick = useCallback(() => {
  // 동작
}, [deps]);
```
과도한 useCallback 사용은 성능을 오히려 저하시킬 수 있음
---
## 6. DOM 접근 및 값 유지를 위한 Hook: useRef
useRef는 렌더링과 무관한 값 저장 또는 DOM 접근에 사용됩니다.

```
const myRef = useRef(null);
.current를 통해 접근 가능
```
값을 바꿔도 리렌더링이 발생하지 않음
---
## 7. Custom Hook으로 로직 재사용
반복되는 로직을 추출해 Custom Hook으로 분리 가능

```
function useCustomHook() {
  const [value, setValue] = useState(0);
  // 기타 로직
  return { value, setValue };
}
```
use로 시작하는 함수명 권장

내부에서 다른 Hook 사용 가능

컴포넌트 코드의 가독성과 재사용성 향상
---
## 8. Hook 사용 시 주의사항
Hook은 반드시 함수형 컴포넌트 or Custom Hook 내 최상위에서만 호출해야 함

호출 순서가 바뀌면 안 됨 (조건문/루프/중첩함수 ❌)

의존성 배열을 정확히 관리해야 불필요한 effect 재실행을 방지 가능
---
## 9. 결론
React Hook은 다음을 가능하게 합니다:

✅ 함수형 컴포넌트에서 상태 및 생명주기 제어
✅ 코드 재사용성 향상 (Custom Hook)
✅ 렌더링 최적화 (useMemo, useCallback)
✅ DOM 제어 (useRef)
