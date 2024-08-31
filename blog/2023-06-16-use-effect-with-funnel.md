---
slug: use-effect-with-funnel
title: useEffect cleanup과 퍼널 관리에 대한 생각들
tags: [react, useEffect]
---

### **개요**

퍼널을 이탈할 때, 유저가 업데이트한 상태를 초기 상태로 clear하는 요구사항에 대해서 고민하다가 생각한 내용들을 정리해보았다.

### **TL;DR**

- useEffect 내의 코드 없이 cleanup만 정의된 코드는 문제가 될 수 있다.
- 컴포넌트의 side effect는 가능하다면 이벤트와 이벤트 핸들러로 관리하고, useEffect는 그렇게 하기 어려울 때만 사용한다.

<!-- 모바일 커머스 앱의 결제 페이지에서 다음과 같은 상황을 예시로 생각해보자.

\- **결제 수단 지정 페이지** \[**모바일 클라이언트 앱**\]
\- **결제 페이지** \[**웹**\]
  - **결제 페이지**는 결제 수단 데이터를 Next.js의 getServerSideProps에서 Redux의 initial store로 초기화시키고 있다.

1.  **클라이언트 앱**에서 "**결제 수단 지정 페이지**"를 띄운다.
2.  유저가 결제 수단을 지정한다.
3.  클라이언트는 "**결제 페이지**" **웹뷰** 화면을 띄워준다. (클라이언트-웹뷰 간 데이터 전달 방식에 대해서는 생각하지 않는다)
4.  최종 결제가 이루어지지 않고 **웹** "**결제 페이지"**를 이탈한다.
5.  웹뷰에서 **웹** "**메인 페이지**"로 이동한다.

이 때, 최종 결제가 이루어지지 않았으므로, 5번의 웹 "**메인 페이지**"에서 **결제 수단이 지정되지 않은** **상태**여야 하는 요구사항이 있다고 가정하자. 즉, clear 된 상태여야 한다.

이런 경우 결제 수단 정보를 clear하는 동작은 어떻게 관리해야 할까? -->

### **cleanup을 통한 솔루션**

가장 먼저 떠올린 방법은 페이지 컴포넌트의 cleanup 시점에 clear시켜주는 방법이다.

```tsx
function Payment() {
  // ...

  useEffect(() => {
    return () => {
      dispatch(paymentActions.clear());
    };
  }, []);

  // ...
}
```

문제는 개발 환경에서 **StrictMode** 동작으로 인해 컴포넌트가 두 번 렌더되며 cleanup이 한 번 실행된다는 점이다. 결과적으로 원하는 값으로 유지시킬 수 없는 문제가 발생한다.

이에 대한 해결책으로 두 가지를 생각했다.

1.  환경변수를 참조하는 등(dev인지 확인하고 분기) 어떻게든 cleanup을 단 한 번 실행시킨다.
2.  useEffect가 아닌 다른 방법을 통해 구현한다.

### **cleanup이 솔루션이 될 수 없는 이유**

useEffect cleanup이 솔루션이 될 수 없다고 생각한 이유는 그 **멘탈모델이 동기화를 구현하는 것** 이기 때문이다. 요구사항은 유저가 특정 퍼널에 진입하거나, 어떤 버튼을 누르는 등의 동작을 했을 때 그에 반응하는 동작을 정의하면 될 뿐이다. 즉, **단순히 화면에서 사라질 때를 캐치하기 위해 cleanup을 사용하는 것은 완전 잘못된 사고방식일 수 있다**.

<!--
- **StrictMode** 동작에도 일관된 결과가 렌더되는, 본디 이펙트가 여러번 실행되어도 괜찮은 형태로 구현되어야 하는 것이 옳다
- 만약 **cleanup만 있는 것이 아니라 그에 페어링되는 useEffect 에서 초기화 구문이 있었다면 솔루션일 가능성이 있었다고 생각한다.** -->

<!-- > 결제 페이지는 클라이언트에서 전달받은 결제 수단 데이터를 Next.js의 getServerSideProps에서 Redux의 initial store로 초기화시키고 있다. -->

<!-- 다만 이 글 초반에 언급된 것과 같이 서버사이드에 초기화 구문이 있으므로, 클라이언트 사이드의 useEffect에 초기화 구문이 위치되지 않으므로 **cleanup은 적절한 솔루션이 아니라고 생각했다.** -->

그렇다면 다른 해결책은 무엇이 있을까?

기본적으로 리액트에서 [컴포넌트는 렌더에 대해서 퓨어해야 한다](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects). 공식처럼 계산만 해야하지, 변경해서는 안된다.

```tsx
<Component props={1} /> 
<Component props={1} /> // 같은 input (props, state, context) 에 대해서 같은 결과를 리턴해야 한다
```

단, 렌더 이후에 side effect가 필요한 시점이 있다. 이런 side effect에는 데이터를 바꾸거나 API를 요청하는 등 다양한 행동이 있을 수 있다. 이러한 side effect는 대부분 이벤트 핸들러로 처리가 가능하다.
**이벤트는 렌더 중에 일어나지 않으므로** 퓨어할 필요가 없다.

> Even though event handlers are defined inside your component, they don’t run during rendering! **So event handlers don’t need to be pure.**

발생시켜야 하는 side effect가 그 어떤 이벤트 핸들러로도 처리가 어렵다면, 마지막 옵션으로 useEffect를 활용한다.

결론적으로, 우리가 제어하고 싶은 상황은 **이벤트다**. 퍼널을 이탈하는 동작은 뒤로 가기 버튼을 클릭하는 것 처럼 이벤트로서 처리될 수 있기 때문이다.

---

### **데이터를 어떻게 관리할 것인가?**

한 퍼널에 해당하는 코드들을 하나의 모듈에 위치시켜 **응집도를 높여야 전체적인 데이터 흐름이 관리될 수** 있다고 생각했다.

**이벤트 핸들러로 클리어하는 로직들이 곳곳에 산재되어 있으면 전역 상태에 대한 관리가 힘들어진다.** 어떤 퍼널에서는 어떤 데이터를 클리어해야하고, 그 후 진입 시에는 어떤 데이터가 남아 있을 것이고.. 이런 것들을 생각하면 상태를 추적하기에 어려움이 있을 수 있다.

toss의 slash 라이브러리에 [useFunnel](https://slash.page/ko/libraries/react/use-funnel/readme.i18n/)라는 hook이 있다, 이처럼 한 퍼널에 해당하는 스텝들을 관리하는 방법도 좋은 것 같다.

```tsx
const KyoboLifeFunnel = () => {
  const [Funnel, state, setState] = useFunnel(['아파트여부', '지역선택', '완료'] as const).withState<{
    propertyType?: '빌라' | '아파트';
    address?: string;
  }>({});

  const 상담신청 = useLoanApplicationCallback();

  return (
    <Funnel>
      <Funnel.Step name="아파트여부">
        <아파트여부스텝 지역선택으로가기={() => setState(prev => ({...prev, step: '지역선택', isApartment: true})} />
      </Funnel.Step>
      <Funnel.Step name="지역선택">
        <지역선택스텝 지역선택완료={(지역정보) => setState(prev => ({...prev, step: '완료', region: 지역정보})} />
      </Funnel.Step>
      <Funnel.Step name="완료">
        <완료스텝 신청={() => 상담신청(state)} />
      </Funnel.Step>
    </Funnel>
  );
};
```
