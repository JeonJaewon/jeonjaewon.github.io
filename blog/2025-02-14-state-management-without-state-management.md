---
slug: overlay-kit
title: 프론트엔드 상태관리 잘 하는 방법 - "상태관리를 하지 않는다" (feat. overlay-kit)
tags: [frontend, state management, overlay-kit]
---

프로그래밍에서의 많은 문제들이 그러하듯이 상태관리는 정답이 없다고 생각합니다.

상태관리의 형태는 사용하는 라이브러리가 무엇이냐, 어떤 컨벤션에 따라 정의하느냐, 등 조직마다 굉장히 구체적인 차이들이 있을 것입니다.

그러니 어떻게 하는 것이 "좋은" 상태관리냐? 라고 묻는다면 제각각의 대답이 나올 수밖에 없지 않을까 생각합니다.

하고 있는 고민과, 겪고 있는 문제가 다르니 좋은 것에 대한 정의가 서로 달라지는 것이지요.

상태를 하나 추가한다고 생각해 보겠습니다. 일반적으로는 아래와 같은 고민들이 있을 것입니다.

- 어떤 파일에, 무엇들과 함께 둘 것인가?
- 디렉터리는 어떻게 관리할 것인가?

단순히 상태 하나를 추가하려고 해도 생각해야 할 것들이 상당히 많습니다.

즉, 상태관리는 많은 고민과 판단을 요구합니다. 그러니 상태관리가 피곤할 수밖에 없습니다.

이러한 상태관리의 피로를 줄여주는 유용한 오픈소스를 소개하려고 하는데요.
바로 [overlay-kit](https://overlay-kit.slash.page/ko)입니다.

---

생각해보면 우리가 다루는 상태들은 오버레이의 상태인 경우가 꽤 많습니다.
overlay-kit은 React에서 오버레이들의 상태를 간편하게 다루는데 큰 도움을 줍니다.

예시 코드와 함께 overlay-kit이 해결하는 문제에 대해 이야기해 보겠습니다.

```tsx
export const SimpleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openOverlay}>Open with useState</button>
      <Dialog opened={isOpen}>
        <span>Overlay Created: </span>
        <Button onClick={close}>Close</Button>
      </Dialog>
    </>
  );
};
```

위 코드는 `useState`를 사용한 `<Dialog />`를 열고 닫기 위한 간단한 에제입니다. (`useState`
가 아닌 별도의 상태 관리 라이브러리를 사용하더라도 세부 형태는 다를지라도 본질적으로는 같은 일을 하는 코드를 작성하게 될 것이라 생각합니다.)

위 예제는 아래와 같은 아쉬운 부분들이 있습니다.

1. `isOpen` 상태를 어떻게 관리할 것이냐의 문제

- 앞선 내용처럼 하나의 상태를 정의하는 것은 많은 고민이 따라옵니다.

2. 열기, 닫기 이벤트의 번거로운 핸들링

- 이런 열고 닫히는 상태를 갖는 컴포넌트들은 굉장히 많습니다. 그 때 마다 상태를 하나씩 만들고, 각각에 대해서 열기, 닫기 이벤트를 정의하는 일은 번거로운 일입니다.

3. `<Dialog />` 컴포넌트의 트리상 위계

- `<Dialog />`를 다른 컴포넌트에서도 열고 싶다고 해보겠습니다. 그렇다면 이 `<Dialog />` 컴포넌트는 공통 부모에 위치시키는 등 컴포넌트의 위계 관리가 필요합니다.

---

다음은 overlay-kit을 사용한 예제입니다.

```tsx
export const OverlayKitExample = () => {
  const openOverlay = () => {
    overlay.open(({ isOpen, close }) => (
      <Dialog opened={isOpen}>
        <span>Overlay Created: </span>
        <Button onClick={close}>Close</Button>
      </Dialog>
    ));
  };

  return <button onClick={openOverlay}>Open with overlay-kit</button>;
};
```

앞서 언급한 모든 고민들을 한 번에 해결한 모습입니다.

재밌는 점은 상태를 개발자가 직접 관리하지 않음으로써 많은 문제가 해결됐다는 점입니다.

개인적으로는 `<Dialog />` 컴포넌트가 트리의 어느 부분에 위치할지를 고민하지 않아도 되는 점이 굉장히 좋다고 생각합니다. 이 컴포넌트는 `openOverlay()` 함수로 격리되었고, 다른 곳에서 열고 싶다면 그냥 이 함수를 export 해서 사용하면 됩니다.

`overlay-kit`의 소스를 들여다 보기도 했는데, 사실 마법같이 해결되는 것은 없고 이야기한 모든 문제들은 `overlay-kit` 내부적으로 다 처리하고 있기에 우리는 그냥 잘 사용하면 되겠습니다.

회사에서 동료 분이 제안해주셔서 도입해보고, 저희 코드베이스에 맞게 수정해서 사용하고 있는데 너무 만족스럽네요.

머리 아픈 상태관리는 overlay-kit에 아웃소싱하고 우리는 더 중요한 문제를 푸는데 시간을 쓸 수 있겠습니다.
