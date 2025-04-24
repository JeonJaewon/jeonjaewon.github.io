---
slug: javascript-iterator
title: 멀티패러다임 프로그래밍과 반복자 (Iterator) 패턴에 대한 짧은 글
tags: [programming, javascript, iterator]
---

요즘 유인동님의 신간인 [멀티패러다임 프로그래밍](https://product.kyobobook.co.kr/detail/S000216318962)을 읽고 있다. 유인동님의 함수형 강의는 같은 팀 동료 분이 추천해주셔서 들었던 기억이 있는데, 책이 나왔다는 소식에 반가운 마음 + 흥미로운 주제에 구매하게 됐다.

참고로 책의 예제 코드는 [이 레포](https://github.com/marpple/multi-paradigm-programming/tree/main/apps/example/src/chapters)에서 확인할 수 있다. 어떤 디렉터리에 있는지 찾느라 좀 헤매서 남겨본다.

초반 챕터에서 반복자(Iterator) 패턴에 대해 다루는데, 개인적으로 한국어로 iterator를 설명하는 자료 중 가장 명쾌하게 이해할 수 있는 설명이라고 느꼈다.
또한 이 챕터에서 설명하고 있는 내용이 멀티패러다임이라는 주제를 흥미롭게 소개해주는 것 같아 가벼운 글로 소개해보고자 한다.

---

기본적으로 반복자 패턴은 선언과 동시에 평가되지 않고, 필요한 시점에 평가할 수 있다. 예제를 통해 살펴보자.

```javascript
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array[0], array[1]); // 5 4
```

반복자를 사용하지 않는 일반적인 방법은 기본적으로 즉시 평가가 일어나며 원본 배열의 mutation이 발생한다. 물론 원본을 복사해둘 수도 있지만 메모리 효율적인 방법은 아니다.

```javascript
const array = [1, 2, 3, 4, 5];

function reverse(arrayLike) {
  let idx = arrayLike.length;
  return {
    next() {
      if (idx-- >= 0) {
        return { value: arrayLike[idx], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = reverse(array);
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 4, done: false }
```

이 예제에서는 idx라는 변수를 갖는 객체를 리턴하는 함수를 만들었다. `reverse()`를 통해 객체를 선언하는 시점이 아닌 `next()`가 호출되는 각각의 시점에 평가가 이루어진다.

즉, 평가는 필요한 시점에 필요한 만큼 효율적으로 이루어진다.

배열의 길이가 커지거나 성능에 대한 요구사항이 엄격해질수록 지연 평가는 큰 장점이 될 수 있다.
성능과는 별개로 원본 배열을 immutable하게 다룰 수 있다는 점에서의 장점도 있다.

여기서 재밌는 지점은 반복자 패턴은 전통적인 객체지향 디자인 패턴이라는 점이다. 그러나 함수가 일급인 자바스크립트에서는 예시 코드에서처럼 함수형 프로그래밍의 장점이 결합되어 더 큰 시너지를 낼 수 있다.

여기서 generator를 사용하여 같은 구현을 명령형 코드로도 구현할 수 있다.

```javascript
function* reverse<T>(arrayLike: ArrayLike<T>): IterableIterator<T> {
  let idx = arrayLike.length;
  while (idx--) {
    yield arrayLike[idx];
  }
}

const array = ["A", "B", "C", "D", "E", "F"];
const reversed = reverse(array);

console.log(reversed.next().value); // F
console.log(reversed.next().value); // E
console.log(reversed.next().value); // D
```

앞선 reverse 함수는 idx라는 멤버를 가지는 객체를 생성함으로서 반복자를 구현했다.
이 예시에서는 generator를 사용하여 조건문을 사용해 명령형 코드로 같은 기능을 구현했다.

이처럼 다양한 패러다임의 유연한 선택과 그들간의 조합을 통해 문제에 적합한 해결책을 찾을 수 있다.

여기까지 읽고 흥미를 느꼈다면 책을 읽어보는 것도 좋을 것 같다. 초반부는 앞서 링크한 레포에서 읽어볼 수도 있다.

나는 요즘 넘 재미나게 읽고 있어서 추천~

---

### 부록

새롭게 추가된 [`Iterator.prototype`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/every)의 메서드들로 (map, filter, reduce 등) 반복자에서 지연 평가 로직을 더 간단하게 구현 할 수 있다. 알아두면 좋을 것 같다.
