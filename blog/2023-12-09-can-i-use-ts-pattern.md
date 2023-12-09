---
slug: can-i-use-ts-pattern
title: ts-pattern을 도입해도 될까?
tags: [typescript]
---

[ts-pattern](https://github.com/gvergnaud/ts-pattern)은 패턴 매칭을 Typeacript 환경에서 사용할 수 있는 라이브러리다.
[패턴 매칭](https://en.wikipedia.org/wiki/Pattern_matching)은 주로 함수형 프로그래밍 언어에서 조건 및 분기 구현을 위해 사용한다고 한다.

React 컴포넌트에서 삼항 연산자 등을 사용해 조건부 렌더링 구현을 하다가 대안이 없을까 싶어 찾아보다가 발견한 라이브러리다. Github에 걸려있는 적용 이전과 이후를 비교한 예시를 보고 혹해버렸다. 회사 프로젝트에 적용할 수 있을지 검토해보고 내린 결론과 그 근거를 정리해보았다.

### 예시 코드

지도의 마커를 정의하기 위해 아래와 같이 타입이 있다고 하자.

```ts
export type Path = "Start" | "Middle" | "End";

export type Marker = {
  iconType: "Place" | "Path"; // 마커의 종류는 두 가지로, Place 마커의 경우에는 pathType을 가지지 않는다.
  pathType?: Path;
};
```

ts-pattern을 적용하기 이전의 코드는 아래와 같다.

```tsx
const getPathType = (marker: Marker): Path | undefined => {
  if (marker.iconType === "Path") {
    if (marker.pathType === "Start") {
      return "Start";
    }
    if (marker.pathType === "Middle") {
      return "Middle";
    }
    if (marker.pathType === "End") {
      return "End";
    }
  }
  return undefined;
};

export const BeforePattern = () => {
  const marker: Marker = {
    iconType: "Path",
    pathType: "Start",
  };
  return <div>{getPathType(marker)}</div>;
};
```

중첩된 if문을 통해 구현했다.

ts-pattern을 적용할 시 아래와 같은 구현이 가능하다.

```tsx
export const AfterPattern = () => {
  const marker: Marker = {
    iconType: "Pathway",
    pathType: "Start",
  };
  return (
    <div>
      {match(marker)
        .with({ iconType: "Pathway", pathType: "Start" }, () => "Start")
        .with({ iconType: "Pathway", pathType: "Middle" }, () => "Middle")
        .with({ iconType: "Pathway", pathType: "End" }, () => "End")
        .otherwise(() => undefined)}
    </div>
  );
};
```

이외에도 놓치는 분기 케이스가 없도록 `exhaustive()` 를 추가하거나, 분기 및 type narrowing을 위해 `when()`등을 유용하게 쓸 수 있을 것 같다.

### 내 생각

1.  새로운 언어를 배우는 것 같아 재밌었고, 확실히 일반적인 if, switch 분기보다 강력하다
2.  그러나 추가적인 사용법을 배울만큼 리턴이 뚜렷하지 못한 듯

- 코드만 보고 동작을 100% 확실하게 예측하기 어려웠다.
- 반대로 표현하면 어떤 동작을 원할 때 바로 코드로 옮기기 쉽지 않았다.
- 예를 들어 어떤 구현을 특정 조건에 공통으로 적용시켜야 한다면? 굉장히 일상적인 구현이지만 ts-pattern으로 구현하려니 몇 가지 의문점이 있었고, 이런 단순한 코드조차 새로 학습해야한다는 점은 코드베이스에 익숙하지 않은 개발자에게는 큰 진입장벽이 될 수 있다고 생각했다.
- 조건과 분기는 구현에서 큰 비율을 차지하는데, 이걸 러닝커브가 있는 라이브러리를 도입할 만큼 뾰족하게 좋아진다는 느낌이 없었다. 확실한 이득이 있다면 도입을 고려했겠지만, 그 정도는 아니라고 판단했다.

3. 실제 프로덕션 코드에서 적용할 만한 사례를 찾지 못함

- ternary operator의 bracket안에서 변수 선언을 한다거나 하는 일은 굳이 할 일 없는 것 같다.
- `exhaustive()`는 좋은 것 같은데, 린트로 대체할 수 있을 것 같아 그 쪽을 찾아보는게 나을 것 같다.
- `when()`의 콜백으로 type predicates (i.e: `(val: any): val is undefined => { ... }`)가 포함된 타입 가드 함수를 또 만들어야 한다는게 지나친 오버헤드 같다. 그런 함수를 선언해야 한다면 원래 방식으로도 잘 분기할 수 있을 것 같았다.
- 개인적인 취향으로 특정 조건에 대한 handler를 `with()`의 두 번째 인자인 function으로 넘겨야 하는데, 값으로 충분할 때도 함수 형태로 넘겨야 하는 점이 가독성이 조금 떨어진다고 느꼈다.

- 조건이 복잡한 경우는 `switch(true)` 패턴으로 대체 가능할 듯
  - Typescript 5.3 이전에는 `switch(true)` 에서 조건 내의 type narrowing이 되지 않는 문제가 있어서 어려움이 있었는데, 5.3 에서 개선되었기 때문에 굳이 `ts-pattern`을 쓸 이유는 없어 보인다.
  - [릴리즈 노트 링크](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAlhAqmAJgUwGZzGlMC8MAFAIYBcMJYAngJQUnwQwCuqm2uBAfJQfoTbosOFACgxUagAc0MAPIAjAFYEYAbzExtMYCQBOKAPwUAwgbwAfVuxG4xAXwnYoafRhLA55wxq07FKgBrExhofWwAcxhHCTFQSFgMNmA1IhAVCiVlWh4-HTCAdzgoYAALIih9FjRczQKCvQg5AEIEZGFOFHSVADo9Q3p8hpGE6BgMEBA1DOV+i38RxvAIEAAbNF61kEieuYGUWgBuRaXtRX00EiCTs6cz06cHIA)

결론적으로 도입하지 않기로 결정했다.

### 발견한 사이드 케이스

`when()` 에 넘기는 함수에서 generic을 사용할 경우 type narrowaing이 되지 않았다.

```ts
// 이런 함수들을 넘겨도 이후 블럭에서 val이 T가 아닌 T | undefined로 추론되었다.
const isDefined = <T>(val: T | undefined): val is T => {
  return val !== undefined;
};
```

[issue](https://github.com/gvergnaud/ts-pattern/issues/64)도 생성되어 있는데 당장 해결은 어려운 듯 하다.

재밌었지만 전체적으로 조금 아쉬운 도구라고 느꼈다.
