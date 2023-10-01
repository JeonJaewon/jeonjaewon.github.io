"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[981],{2470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const s={slug:"use-effect-with-funnel",title:"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4",tags:["react","useEffect"]},r=void 0,p={permalink:"/jeonjaewon.github.io/use-effect-with-funnel",source:"@site/blog/2023-06-16-use-effect-with-funnel.md",title:"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4",description:"\uac1c\uc694",date:"2023-06-16T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 16\uc77c",tags:[{label:"react",permalink:"/jeonjaewon.github.io/tags/react"},{label:"useEffect",permalink:"/jeonjaewon.github.io/tags/use-effect"}],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"use-effect-with-funnel",title:"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4",tags:["react","useEffect"]}},u={authorsImageUrls:[]},o=[{value:"<strong>\uac1c\uc694</strong>",id:"\uac1c\uc694",level:3},{value:"<strong>TL;DR</strong>",id:"tldr",level:3},{value:"<strong>cleanup\uc744 \ud1b5\ud55c \uc194\ub8e8\uc158</strong>",id:"cleanup\uc744-\ud1b5\ud55c-\uc194\ub8e8\uc158",level:3},{value:"<strong>cleanup\uc774 \uc194\ub8e8\uc158\uc774 \ub420 \uc218 \uc5c6\ub294 \uc774\uc720</strong>",id:"cleanup\uc774-\uc194\ub8e8\uc158\uc774-\ub420-\uc218-\uc5c6\ub294-\uc774\uc720",level:3},{value:"<strong>\ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uad00\ub9ac\ud560 \uac83\uc778\uac00?</strong>",id:"\ub370\uc774\ud130\ub97c-\uc5b4\ub5bb\uac8c-\uad00\ub9ac\ud560-\uac83\uc778\uac00",level:3}],c={toc:o},i="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\uac1c\uc694"},(0,l.kt)("strong",{parentName:"h3"},"\uac1c\uc694")),(0,l.kt)("p",null,"\ud37c\ub110\uc744 \uc774\ud0c8\ud560 \ub54c, \uc720\uc800\uac00 \uc5c5\ub370\uc774\ud2b8\ud55c \uc0c1\ud0dc\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c clear\ud558\ub294 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub300\ud574\uc11c \uace0\ubbfc\ud558\ub2e4\uac00 \uc0dd\uac01\ud55c \ub0b4\uc6a9\ub4e4\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4."),(0,l.kt)("h3",{id:"tldr"},(0,l.kt)("strong",{parentName:"h3"},"TL;DR")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"useEffect \ub0b4\uc758 \ucf54\ub4dc \uc5c6\uc774 cleanup\ub9cc \uc815\uc758\ub41c \ucf54\ub4dc\ub294 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8\uc758 side effect\ub294 \uac00\ub2a5\ud558\ub2e4\uba74 \uc774\ubca4\ud2b8\uc640 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \uad00\ub9ac\ud558\uace0, useEffect\ub294 \uadf8\ub807\uac8c \ud558\uae30 \uc5b4\ub824\uc6b8 \ub54c\ub9cc \uc0ac\uc6a9\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"cleanup\uc744-\ud1b5\ud55c-\uc194\ub8e8\uc158"},(0,l.kt)("strong",{parentName:"h3"},"cleanup\uc744 \ud1b5\ud55c \uc194\ub8e8\uc158")),(0,l.kt)("p",null,"\uac00\uc7a5 \uba3c\uc800 \ub5a0\uc62c\ub9b0 \ubc29\ubc95\uc740 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc758 cleanup \uc2dc\uc810\uc5d0 clear\uc2dc\ucf1c\uc8fc\ub294 \ubc29\ubc95\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function Payment() {\n  // ...\n\n  useEffect(() => {\n    return () => {\n      dispatch(paymentActions.clear());\n    };\n  }, []);\n\n  // ...\n}\n")),(0,l.kt)("p",null,"\ubb38\uc81c\ub294 \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c ",(0,l.kt)("strong",{parentName:"p"},"StrictMode")," \ub3d9\uc791\uc73c\ub85c \uc778\ud574 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub450 \ubc88 \ub80c\ub354\ub418\uba70 cleanup\uc774 \ud55c \ubc88 \uc2e4\ud589\ub41c\ub2e4\ub294 \uc810\uc774\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c \uc6d0\ud558\ub294 \uac12\uc73c\ub85c \uc720\uc9c0\uc2dc\ud0ac \uc218 \uc5c6\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,l.kt)("p",null,"\uc774\uc5d0 \ub300\ud55c \ud574\uacb0\ucc45\uc73c\ub85c \ub450 \uac00\uc9c0\ub97c \uc0dd\uac01\ud588\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud658\uacbd\ubcc0\uc218\ub97c \ucc38\uc870\ud558\ub294 \ub4f1(dev\uc778\uc9c0 \ud655\uc778\ud558\uace0 \ubd84\uae30) \uc5b4\ub5bb\uac8c\ub4e0 cleanup\uc744 \ub2e8 \ud55c \ubc88 \uc2e4\ud589\uc2dc\ud0a8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"useEffect\uac00 \uc544\ub2cc \ub2e4\ub978 \ubc29\ubc95\uc744 \ud1b5\ud574 \uad6c\ud604\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"cleanup\uc774-\uc194\ub8e8\uc158\uc774-\ub420-\uc218-\uc5c6\ub294-\uc774\uc720"},(0,l.kt)("strong",{parentName:"h3"},"cleanup\uc774 \uc194\ub8e8\uc158\uc774 \ub420 \uc218 \uc5c6\ub294 \uc774\uc720")),(0,l.kt)("p",null,"useEffect cleanup\uc774 \uc194\ub8e8\uc158\uc774 \ub420 \uc218 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud55c \uc774\uc720\ub294 \uadf8 ",(0,l.kt)("strong",{parentName:"p"},"\uba58\ud0c8\ubaa8\ub378\uc774 \ub3d9\uae30\ud654\ub97c \uad6c\ud604\ud558\ub294 \uac83")," \uc774\uae30 \ub54c\ubb38\uc774\ub2e4. \uc694\uad6c\uc0ac\ud56d\uc740 \uc720\uc800\uac00 \ud2b9\uc815 \ud37c\ub110\uc5d0 \uc9c4\uc785\ud558\uac70\ub098, \uc5b4\ub5a4 \ubc84\ud2bc\uc744 \ub204\ub974\ub294 \ub4f1\uc758 \ub3d9\uc791\uc744 \ud588\uc744 \ub54c \uadf8\uc5d0 \ubc18\uc751\ud558\ub294 \ub3d9\uc791\uc744 \uc815\uc758\ud558\uba74 \ub420 \ubfd0\uc774\ub2e4. \uc989, ",(0,l.kt)("strong",{parentName:"p"},"\ub2e8\uc21c\ud788 \ud654\uba74\uc5d0\uc11c \uc0ac\ub77c\uc9c8 \ub54c\ub97c \uce90\uce58\ud558\uae30 \uc704\ud574 cleanup\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc644\uc804 \uc798\ubabb\ub41c \uc0ac\uace0\ubc29\uc2dd\uc77c \uc218 \uc788\ub2e4"),"."),(0,l.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \ub2e4\ub978 \ud574\uacb0\ucc45\uc740 \ubb34\uc5c7\uc774 \uc788\uc744\uae4c?"),(0,l.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \ub9ac\uc561\ud2b8\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects"},"\ucef4\ud3ec\ub10c\ud2b8\ub294 \ub80c\ub354\uc5d0 \ub300\ud574\uc11c \ud4e8\uc5b4\ud574\uc57c \ud55c\ub2e4"),". \uacf5\uc2dd\ucc98\ub7fc \uacc4\uc0b0\ub9cc \ud574\uc57c\ud558\uc9c0, \ubcc0\uacbd\ud574\uc11c\ub294 \uc548\ub41c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<Component\xa0props={1}\xa0/>\xa0\n<Component\xa0props={1}\xa0/>\xa0//\xa0\uac19\uc740\xa0input\xa0(props,\xa0state,\xa0context)\xa0\uc5d0\xa0\ub300\ud574\uc11c\xa0\uac19\uc740\xa0\uacb0\uacfc\ub97c\xa0\ub9ac\ud134\ud574\uc57c\xa0\ud55c\ub2e4\n")),(0,l.kt)("p",null,"\ub2e8, \ub80c\ub354 \uc774\ud6c4\uc5d0 side effect\uac00 \ud544\uc694\ud55c \uc2dc\uc810\uc774 \uc788\ub2e4. \uc774\ub7f0 side effect\uc5d0\ub294 \ub370\uc774\ud130\ub97c \ubc14\uafb8\uac70\ub098 API\ub97c \uc694\uccad\ud558\ub294 \ub4f1 \ub2e4\uc591\ud55c \ud589\ub3d9\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \uc774\ub7ec\ud55c side effect\ub294 \ub300\ubd80\ubd84\xa0\uc774\ubca4\ud2b8\xa0\ud578\ub4e4\ub7ec\ub85c\xa0\ucc98\ub9ac\uac00\xa0\uac00\ub2a5\ud558\ub2e4.\n",(0,l.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8\ub294 \ub80c\ub354 \uc911\uc5d0 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc73c\ubbc0\ub85c")," \ud4e8\uc5b4\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Even though event handlers are defined inside your component, they don\u2019t run during rendering! ",(0,l.kt)("strong",{parentName:"p"},"So event handlers don\u2019t need to be pure."))),(0,l.kt)("p",null,"\ubc1c\uc0dd\uc2dc\ucf1c\uc57c \ud558\ub294 side effect\uac00 \uadf8 \uc5b4\ub5a4 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c\ub3c4 \ucc98\ub9ac\uac00 \uc5b4\ub835\ub2e4\uba74, \ub9c8\uc9c0\ub9c9 \uc635\uc158\uc73c\ub85c useEffect\ub97c \ud65c\uc6a9\ud55c\ub2e4."),(0,l.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c, \uc6b0\ub9ac\uac00 \uc81c\uc5b4\ud558\uace0 \uc2f6\uc740 \uc0c1\ud669\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8\ub2e4"),". \ud37c\ub110\uc744 \uc774\ud0c8\ud558\ub294 \ub3d9\uc791\uc740 \ub4a4\ub85c \uac00\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\ub294 \uac83 \ucc98\ub7fc \uc774\ubca4\ud2b8\ub85c\uc11c \ucc98\ub9ac\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\ub370\uc774\ud130\ub97c-\uc5b4\ub5bb\uac8c-\uad00\ub9ac\ud560-\uac83\uc778\uac00"},(0,l.kt)("strong",{parentName:"h3"},"\ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uad00\ub9ac\ud560 \uac83\uc778\uac00?")),(0,l.kt)("p",null,"\ud55c \ud37c\ub110\uc5d0 \ud574\ub2f9\ud558\ub294 \ucf54\ub4dc\ub4e4\uc744 \ud558\ub098\uc758 \ubaa8\ub4c8\uc5d0 \uc704\uce58\uc2dc\ucf1c ",(0,l.kt)("strong",{parentName:"p"},"\uc751\uc9d1\ub3c4\ub97c \ub192\uc5ec\uc57c \uc804\uccb4\uc801\uc778 \ub370\uc774\ud130 \ud750\ub984\uc774 \uad00\ub9ac\ub420 \uc218")," \uc788\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \ud074\ub9ac\uc5b4\ud558\ub294 \ub85c\uc9c1\ub4e4\uc774 \uacf3\uacf3\uc5d0 \uc0b0\uc7ac\ub418\uc5b4 \uc788\uc73c\uba74 \uc804\uc5ed \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uad00\ub9ac\uac00 \ud798\ub4e4\uc5b4\uc9c4\ub2e4.")," \uc5b4\ub5a4 \ud37c\ub110\uc5d0\uc11c\ub294 \uc5b4\ub5a4 \ub370\uc774\ud130\ub97c \ud074\ub9ac\uc5b4\ud574\uc57c\ud558\uace0, \uadf8 \ud6c4 \uc9c4\uc785 \uc2dc\uc5d0\ub294 \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \ub0a8\uc544 \uc788\uc744 \uac83\uc774\uace0.. \uc774\ub7f0 \uac83\ub4e4\uc744 \uc0dd\uac01\ud558\uba74 \uc0c1\ud0dc\ub97c \ucd94\uc801\ud558\uae30\uc5d0 \uc5b4\ub824\uc6c0\uc774 \uc788\uc744 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"toss\uc758 slash \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"http://%20https://slash.page/ko/libraries/react/use-funnel/readme.i18n/"},"useFunnel"),"\ub77c\ub294 hook\uc774 \uc788\ub2e4, \uc774\ucc98\ub7fc \ud55c \ud37c\ub110\uc5d0 \ud574\ub2f9\ud558\ub294 \uc2a4\ud15d\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\ub3c4 \uc88b\uc740 \uac83 \uac19\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const KyoboLifeFunnel = () => {\n  const [Funnel, state, setState] = useFunnel(['\uc544\ud30c\ud2b8\uc5ec\ubd80', '\uc9c0\uc5ed\uc120\ud0dd', '\uc644\ub8cc'] as const).withState<{\n    propertyType?: '\ube4c\ub77c' | '\uc544\ud30c\ud2b8';\n    address?: string;\n  }>({});\n\n  const \uc0c1\ub2f4\uc2e0\uccad = useLoanApplicationCallback();\n\n  return (\n    <Funnel>\n      <Funnel.Step name=\"\uc544\ud30c\ud2b8\uc5ec\ubd80\">\n        <\uc544\ud30c\ud2b8\uc5ec\ubd80\uc2a4\ud15d \uc9c0\uc5ed\uc120\ud0dd\uc73c\ub85c\uac00\uae30={() => setState(prev => ({...prev, step: '\uc9c0\uc5ed\uc120\ud0dd', isApartment: true})} />\n      </Funnel.Step>\n      <Funnel.Step name=\"\uc9c0\uc5ed\uc120\ud0dd\">\n        <\uc9c0\uc5ed\uc120\ud0dd\uc2a4\ud15d \uc9c0\uc5ed\uc120\ud0dd\uc644\ub8cc={(\uc9c0\uc5ed\uc815\ubcf4) => setState(prev => ({...prev, step: '\uc644\ub8cc', region: \uc9c0\uc5ed\uc815\ubcf4})} />\n      </Funnel.Step>\n      <Funnel.Step name=\"\uc644\ub8cc\">\n        <\uc644\ub8cc\uc2a4\ud15d \uc2e0\uccad={() => \uc0c1\ub2f4\uc2e0\uccad(state)} />\n      </Funnel.Step>\n    </Funnel>\n  );\n};\n")))}f.isMDXComponent=!0}}]);