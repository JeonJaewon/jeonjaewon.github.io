---
slug: types-vs-interfaces
title: Typescript에서 types vs interfaces 대해서
tags: [programming, typescript]
---

Typescript에서 `type`과 `interface`에 대한 유튜브 영상을 보다가 좀 정리해두고 싶어서 글로 남긴다.

```ts
// interface 사용
interface User {
  name: string;
  age: number;
}

// type 사용
type UserType = {
  name: string;
  age: number;
};
```

객체 타입을 정의할 때 `type`과 `interface` 둘 다 사용할 수 있다.

타입을 확장하는 데는 차이가 조금 있다.
먼저 논리적으로 불가능한 타입을 확장하는 경우를 살펴보자.

```ts
// type 확장
type A = {
  a: string;
};
type B = {
  a: number;
};
type C = A & B; // type C = A & B

// interface 확장
interface A {
  a: string;
}
interface B {
  a: number;
}
interface C extends A, B {} // Error: Interface C cannot simultaneously extend types 'A' and 'B'
```

`a` 프로퍼티가 `string` 이면서 `number` 로 선언되어 있기 때문에 `C` 타입은 논리적으로 불가능하다.
type으로 선언된 `C`의 경우 불가능한 타입임에도 단순 타입간의 intersection으로 표기된다.

반면 `interface`의 경우 두 타입을 extends 할 수 없다는 에러가 발생한다.

`interface`를 사용하는 것이 에러를 더 빨리 발견할 수 있다는 점에서 장점이 있다고 생각한다. 또한 타입스크립트가 추론해주는 타입도 intersection에 비해 더 명확하다.

---

### 성능 관점 - 벤치마크로 확인하기

또한 두 확장 방식은 성능에 있어서도 차이가 있다.
[Typescript 공식 레포 wiki](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections)에 따르면, ts 컴파일러는 `interface`를 사용한 확장 방식을 더 빠르게 처리한다고 한다.

> Interfaces also display consistently better, whereas type aliases to intersections can't be displayed in part of other intersections. Type relationships between interfaces are also cached, as opposed to intersection types as a whole. A final noteworthy difference is that when checking against a target intersection type, every constituent is checked before checking against the "effective"/"flattened" type.

마지막 문장을 보면 큰 객체 타입에 대해서 type을 사용한다면 성능에 꽤 영향이 있을지도 모르겠다는 생각이 들었다.

실제로 이 둘의 성능이 얼마나 차이가 나나 확인해보기 위해 벤치마크를 작성했다.

Type 확장 케이스에 대해 실행시킬 코드는 아래와 같다.

```ts
import { performance } from "perf_hooks";
import { JSDOM } from "jsdom";

const { window } = new JSDOM("<html><body></body></html>");
const { document } = window;

export function measureTypePerformance(iterations: number): number[] {
  const typeTimes: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const typeStart = performance.now();

    for (let j = 0; j < 1000; j++) {
      type ExtendedDivType = HTMLDivElement & {
        customProperty: string;
      };
      const divType: ExtendedDivType = Object.assign(
        document.createElement("div"),
        {
          customProperty: `Type Property ${j}`,
        }
      );
    }

    const typeEnd = performance.now();
    typeTimes.push(typeEnd - typeStart);
  }

  return typeTimes;
}
```

`HTMLDivElement` 정도면 꽤 큰 타입이라고 생각해서 이 타입을 확장하도록 구현했다.

더 자세한 사항은 [레포지터리](https://github.com/JeonJaewon/type-interface-benchmark)에서 확인할 수 있다.

이렇게 1000개의 Type 확장 / interface 확장을 각각 10번 컴파일하여 실행 시간을 비교해보았다.

- Type Compile Stats (ms)
  - Average: 1369.50085
  - Max: 1488.58892
  - Min: 1241.16438
- Interface Compile Stats (ms)
  - Average: 1312.45505
  - Max: 1452.09558
  - Min: 1252.57896

결과적으로 `interface`가 약간 더 빠른 결과를 보였다.
그러나 눈에 띄게 큰 차이가 난다고 보기는 어렵다고 생각한다.

## 결론

타입 확장에 대해서는 interface가 성능적으로 유리하다. (그러나 큰 차이라고 볼 수는 없다)

가능하면 interface를 먼저 사용하고, type 기능이 필요한 경우에만 type을 사용하자.
