"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9371],{8708:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=n(5893),a=n(1151);const t={slug:"good-bye-saga",title:"redux-saga\uc640 \ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",tags:["redux","redux-saga","server state"]},d=void 0,c={permalink:"/blog/good-bye-saga",source:"@site/blog/2024-02-12-good-bye-saga.md",title:"redux-saga\uc640 \ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",description:"redux-saga\ub294 redux \ubbf8\ub4e4\uc6e8\uc5b4\ub85c, \ub9e4\uc6b0 \uac15\ub825\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ucc98\ub9ac\ub97c \uac00\ub2a5\ud558\uac8c \ub9cc\ub4dc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub2e4.",date:"2024-02-12T00:00:00.000Z",formattedDate:"2024\ub144 2\uc6d4 12\uc77c",tags:[{label:"redux",permalink:"/blog/tags/redux"},{label:"redux-saga",permalink:"/blog/tags/redux-saga"},{label:"server state",permalink:"/blog/tags/server-state"}],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"good-bye-saga",title:"redux-saga\uc640 \ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",tags:["redux","redux-saga","server state"]},unlisted:!1,prevItem:{title:"\ub0b4\uac00 2023\ub144\uc5d0 \ubc30\uc6b4 \uac83\ub4e4",permalink:"/blog/2023-retro"},nextItem:{title:"ts-pattern\uc744 \ub3c4\uc785\ud574\ub3c4 \ub420\uae4c?",permalink:"/blog/can-i-use-ts-pattern"}},i={authorsImageUrls:[]},l=[{value:"1. \ub7ec\ub2dd\ucee4\ube0c\uc758 \uad00\uc810",id:"1-\ub7ec\ub2dd\ucee4\ube0c\uc758-\uad00\uc810",level:3},{value:"2. \ucf54\ub4dc \ubcc0\uacbd\uc73c\ub85c \uc778\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ud1b5\uc81c\uc758 \uad00\uc810",id:"2-\ucf54\ub4dc-\ubcc0\uacbd\uc73c\ub85c-\uc778\ud55c-\uc0ac\uc774\ub4dc-\uc774\ud399\ud2b8-\ud1b5\uc81c\uc758-\uad00\uc810",level:3},{value:"3. \uc7ac\uc0ac\uc6a9\uc758 \uc5b4\ub824\uc6c0 \uad00\uc810",id:"3-\uc7ac\uc0ac\uc6a9\uc758-\uc5b4\ub824\uc6c0-\uad00\uc810",level:3},{value:"4. redux store\uac00 \ube44\ub300\ud574\uc9c0\ub294 \ubb38\uc81c",id:"4-redux-store\uac00-\ube44\ub300\ud574\uc9c0\ub294-\ubb38\uc81c",level:3},{value:"5. Typescript \ud0c0\uc774\ud551\uc758 \uad00\uc810",id:"5-typescript-\ud0c0\uc774\ud551\uc758-\uad00\uc810",level:3}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"redux-saga"}),"\ub294 redux \ubbf8\ub4e4\uc6e8\uc5b4\ub85c, \ub9e4\uc6b0 \uac15\ub825\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ucc98\ub9ac\ub97c \uac00\ub2a5\ud558\uac8c \ub9cc\ub4dc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub2e4."]}),"\n",(0,r.jsx)(s.p,{children:"\ucd5c\uadfc \ud68c\uc0ac \ucf54\ub4dc\ubca0\uc774\uc2a4\uc5d0\uc11c \uc774 \uc758\uc874\uc131\uc744 \uc81c\uac70\ud558\uace0\uc790 \ud558\uc5ec \uadf8 \uc758\uc0ac\uacb0\uc815\uc758 \uadfc\uac70\ub4e4\uc744 \ub0a8\uae34\ub2e4."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\uc774 \uae00\uc740 \uc77d\ub294 \uc0ac\ub78c\uc774 ",(0,r.jsx)(s.code,{children:"redux-saga"}),"\uc640 ",(0,r.jsx)(s.code,{children:"redux-toolkit"}),"\uc744 \uc774\uc6a9\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \uacbd\ud5d8\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"1-\ub7ec\ub2dd\ucee4\ube0c\uc758-\uad00\uc810",children:"1. \ub7ec\ub2dd\ucee4\ube0c\uc758 \uad00\uc810"}),"\n",(0,r.jsx)(s.p,{children:"Generator\ub294 saga \uc774\uc678\uc758 \uc0ac\uc6a9\ucc98\ub97c \ucc3e\uc544\ubcf4\uae30 \ud798\ub4e4\ub2e4. \ub300\ubd80\ubd84\uc758 \uc785\ubb38\uc790\ub294 saga\ub97c \ubc30\uc6b0\ub824\uba74 \uba3c\uc800 generator\ubd80\ud130 \uacf5\ubd80\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsxs)(s.p,{children:["\ub610\ud55c saga\uac00 \uc81c\uc2dc\ud558\ub294 \uba58\ud0c8 \ubaa8\ub378\uc5d0 \uc775\uc219\ud574\uc838\uc57c \ud55c\ub2e4. ",(0,r.jsx)(s.a,{href:"https://redux-saga.js.org/docs/About/",children:"\uacf5\uc2dd \ubb38\uc11c"}),"\uc5d0 \ub530\ub974\uba74,"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\uc0ac\uac00\uc758 \uba58\ud0c8 \ubaa8\ub378\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \ucc45\uc784\uc9c0\ub294 \ubcc4\ub3c4\uc758 \uc2a4\ub808\ub4dc\uc640 \uac19\ub2e4. \uc77c\ubc18\uc801\uc778 React \uac1c\ubc1c \uacbd\ud5d8\uacfc\ub294 \uc0c1\ub2f9\ud788 \uc774\uc9c8\uc801\uc774\uc5b4\uc11c \uc775\uc219\ud574\uc9c0\ub294\ub370 \uc2dc\uac04\uc774 \ud544\uc694\ud558\ub2e4."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"2-\ucf54\ub4dc-\ubcc0\uacbd\uc73c\ub85c-\uc778\ud55c-\uc0ac\uc774\ub4dc-\uc774\ud399\ud2b8-\ud1b5\uc81c\uc758-\uad00\uc810",children:"2. \ucf54\ub4dc \ubcc0\uacbd\uc73c\ub85c \uc778\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ud1b5\uc81c\uc758 \uad00\uc810"}),"\n",(0,r.jsxs)(s.p,{children:["\uc0ac\uac00\ub294 ",(0,r.jsx)(s.code,{children:"generator function"}),"\uacfc (\uc774\ud558 ",(0,r.jsx)(s.code,{children:"saga function"}),") \uc774\ub4e4\uc744 \ud2b8\ub9ac\uac70 \uc2dc\ud0a4\ub294 action\uc758 ",(0,r.jsx)(s.code,{children:"watcher"}),"\uac00 \ud568\uaed8 \uc4f0\uc774\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc778 \ud328\ud134\uc774\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\uc774\ub7ec\ud55c \ud328\ud134\uc73c\ub85c \uc778\ud574 ",(0,r.jsx)(s.code,{children:"saga function"}),"\uc744 \uc2e4\ud589\ud558\ub294\ub370\ub294 \ud06c\uac8c \uc138 \uac00\uc9c0\uc758 \ubc29\ubc95\uc774 \uc788\ub2e4."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"call"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"fork"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"put"})," / ",(0,r.jsx)(s.code,{children:"dispatch"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\uc774 \uc138 \ubc29\uc2dd\uc740 \ud50c\ub85c\uc6b0 \ucee8\ud2b8\ub864\uc5d0 \uc788\uc5b4 \ub2e4\ub978 \ud2b9\uc9d5\uc744 \uac00\uc9c0\ubbc0\ub85c, \uc5b4\ub5a4 \uad6c\ud604\uc744 \uc6d0\ud558\ub290\ub0d0\uc5d0 \ub530\ub77c \uc801\uc808\ud788 \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsxs)(s.p,{children:["\ubb38\uc81c\ub294 \ud2b9\uc815 ",(0,r.jsx)(s.code,{children:"saga function"}),"\uc758 body\ub97c \ubcc0\uacbd\ud558\ub824\uba74, \ud574\ub2f9 ",(0,r.jsx)(s.code,{children:"saga function"}),"\uc774 \uc138 \uac00\uc9c0 \uc911 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ud638\ucd9c\ub418\uace0 \uc788\ub290\ub0d0\ub97c \uc0b4\ud3b4\ubd10\uc57c \ud55c\ub2e4\ub294 \uc810\uc774\ub2e4. \uc989 \ud638\ucd9c\ubd80\ub97c \uba74\ubc00\ud788 \uc0b4\ud3b4\ubd10\uc57c \uc120\uc5b8\ubd80\ub97c \uace0\uce58\uae30 \uc704\ud55c \ud655\uc2e0\uc744 \uc5bb\uc744 \uc218 \uc788\uc5c8\ub2e4."]}),"\n",(0,r.jsx)(s.p,{children:"\uc774\ub294 \uacb0\uad6d \ucf54\ub4dc\ub97c \uc801\uadf9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\uae30 \ud798\ub4e4\uac8c \ub9cc\ub4e0\ub2e4. \ucf54\ub4dc\uc758 \ubcc0\uacbd\uc73c\ub85c \uc778\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ud1b5\uc81c\uac00 \uc5b4\ub835\ub2e4\uace0\ub3c4 \ud45c\ud604\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"3-\uc7ac\uc0ac\uc6a9\uc758-\uc5b4\ub824\uc6c0-\uad00\uc810",children:"3. \uc7ac\uc0ac\uc6a9\uc758 \uc5b4\ub824\uc6c0 \uad00\uc810"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"saga function"}),"\uc744 \uc7ac\uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub85c\uc9c1\uc744 \ucd94\ucd9c\ud558\uace0 \uadf8 \ub85c\uc9c1\uc5d0 \ub300\ud55c \ud50c\ub85c\uc6b0 \ucee8\ud2b8\ub864\uc774 \ud544\uc694\ud558\ub2e4. \uc5ec\uae30\uc11c \ud50c\ub85c\uc6b0 \ucee8\ud2b8\ub864\uc5d0\ub294 \uc790\uc5f0\uc2a4\ub7fd\uac8c \uadf8 \ub85c\uc9c1\uc5d0 \ub300\ud55c \ud638\ucd9c\uc774 \ud3ec\ud568\ub41c\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\uc608\ub97c \ub4e4\uc5b4 ",(0,r.jsx)(s.code,{children:"saga function"})," \ub0b4\uc5d0\uc11c \ub2e4\ub978 ",(0,r.jsx)(s.code,{children:"saga function"}),"\uc744 \ud638\ucd9c\ud55c\ub2e4\uba74 2\uc5d0\uc11c \uc5b8\uae09\ud588\ub358 \uc138 \uac00\uc9c0 \ubc29\uc2dd \uc911 \ud558\ub098\ub85c \ud638\ucd9c\ud558\uac8c \ub41c\ub2e4. \uc989 \uc7ac\uc0ac\uc6a9\uc744 \ud558\uae30 \uc704\ud574\uc11c 2\uc5d0\uc11c \ub9d0\ud55c\ub300\ub85c ",(0,r.jsx)(s.strong,{children:"\uc801\uadf9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\uae30 \uc5b4\ub824\uc6b4 \ucf54\ub4dc\ub97c \uc791\uc131"}),"\ud558\uac8c \ub418\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\ub610\ud55c saga\ub97c \uc0c8\ub85c \ub9cc\ub4dc\ub824\uba74 slice\uc5d0 \uc774\ub97c \uc704\ud55c action\ub4e4\uc744 \ucd94\uac00\ub85c \uc120\uc5b8\ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4.\n\uc774\ub294 \uc5b4\ub290\uc815\ub3c4\ub294 \ud544\uc5f0\uc801\uc73c\ub85c \uc5b4\ub824\uc6b4 \uac83\uc73c\ub85c \ubcf4\uc558\ub2e4. \uc65c\ub0d0\ud558\uba74 slice\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.jsx)(s.strong,{children:"\ub370\uc774\ud130"}),"\ub97c \ub2f4\uae30 \uc704\ud55c \ub2e8\uc704\uc774\ub2e4. \uc5ec\uae30\uc5d0 ",(0,r.jsx)(s.strong,{children:"\ub85c\uc9c1"}),"\uc758 \uc7ac\uc0ac\uc6a9\uc744 \uc704\ud55c saga\ub97c \uc704\ud55c action\uc744 \ub2f4\ub294\ub2e4\ub294 \uac83\uc740 \ubcf8\uc9c8\uc801\uc778 \ubd88\uc77c\uce58\uac00 \uc874\uc7ac\ud55c\ub2e4."]}),"\n",(0,r.jsx)(s.p,{children:"\uacb0\uad6d \ud574\ub2f9 saga\uc758 action\ub4e4\uc744 \ub123\uc744 \uc801\uc808\ud55c slice\uac00 \uc5c6\ub294 \uc0c1\ud669\uc774 \uc885\uc885 \ubc1c\uc0dd\ud55c\ub2e4. \uc774\ub7f0 \uc0c1\ud669 \ub54c\ubb38\uc5d0 \uc6b0\ub9ac\ub294 \uc885\uc885 \uc5b4\uca54 \uc218 \uc5c6\uc774 saga\uc758 action\ub9cc\uc744 \ub2f4\uace0\uc788\ub294 slice\ub97c \ub9cc\ub4e4\uace4 \ud588\ub2e4."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"4-redux-store\uac00-\ube44\ub300\ud574\uc9c0\ub294-\ubb38\uc81c",children:"4. redux store\uac00 \ube44\ub300\ud574\uc9c0\ub294 \ubb38\uc81c"}),"\n",(0,r.jsx)(s.p,{children:"saga\ub294 redux store\ub97c \ube44\ub300\ud558\uac8c \ub9cc\ub4e0\ub2e4. \uc5ec\uae30\uc11c \ube44\ub300\ud558\uac8c \ub9cc\ub4e0\ub2e4\ub294 \ud45c\ud604\uc758 \uc815\ud655\ud55c \ub73b\uc740, \ubcf8\ub798 \ud544\uc694\ud55c \uc815\ub3c4\ubcf4\ub2e4 \ube44\ub300\ud574 \uc9c4\ub2e4\ub294 \ub73b\uc774\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"saga\ub294 \ube44\ub3d9\uae30 \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud55c \ub4a4 redux store\uc5d0 \ub2f4\uae30 \uc704\ud55c \uc758\uc874\uc131\uc774\ub2e4. \uc989, store\uc5d0 \ub2f4\uae30\ub294 \ud574\ub2f9 \ub370\uc774\ud130 \uc678\uc758 \ucd94\uac00\uc801\uc73c\ub85c redux store\ub97c \ube44\ub300\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\uc740 saga\uac00 \ud574\uacb0\ud558\ub294 \ubb38\uc81c\uc640\ub294 \uad00\ub828 \uc5c6\ub294 \ubd88\ud544\uc694\ud55c \uc624\ubc84\ud5e4\ub4dc\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"redux store\uac00 \ube44\ub300\ud574\uc9c0\uba74 \uc804\ubc18\uc801\uc778 \ucf54\ub4dc\ubca0\uc774\uc2a4 \ud30c\uc545\uc774 \ud798\ub4e4\uc5b4\uc9c0\uace0, \ubc88\ub4e4\ub3c4 \ubd88\ud544\uc694\ud558\uac8c \ucee4\uc9c4\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\ub610\ud55c \uc6b0\ub9ac \ucf54\ub4dc\ub294 side effect \uc758 \uc81c\uc5b4\ub97c \uc81c\uc678\ud55c \ubd80\ubd84\uae4c\uc9c0\ub3c4 saga\ub85c \uad6c\ud604\ub41c \ubd80\ubd84\uc774 \ub2e4\uc218 \uc874\uc7ac\ud588\ub2e4. \uc608\ub97c \ub4e4\uba74 \ud31d\uc5c5\uc744 \uc5f4\uac70\ub098 \ub2eb\ub294 \ub85c\uc9c1\uc870\ucc28 saga\ub85c \uc791\uc131\ub418\uc5b4 \uc788\ub2e4. \uc5b4\ub5bb\uac8c \ubcf4\uba74 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uae4c\uc9c0 saga\ub77c\ub294 \ub808\uc774\uc5b4\uc5d0 \ud3ec\ud568\uc2dc\ud0a8 \uac83\uc774\ub2e4. \uadf8 \uacb0\uacfc saga\uc5d0\uc11c select \ud639\uc740 put\ud558\uae30 \uc704\ud574 redux\uc5d0 \uc788\uc744 \ud544\uc694 \uc5c6\ub294 \uc0c1\ud0dc \uc870\ucc28 redux\uc5d0 \ub123\uace0 \uc788\uc5c8\ub2e4.\n\uc774\ub294 \ub610 \ud55c \ubc88 store\ub97c \ube44\ub300\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"5-typescript-\ud0c0\uc774\ud551\uc758-\uad00\uc810",children:"5. Typescript \ud0c0\uc774\ud551\uc758 \uad00\uc810"}),"\n",(0,r.jsxs)(s.p,{children:["saga\ub294 Typescript native\ub85c \uc791\uc131\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc544\ub2c8\ub2e4. \ud0c0\uc774\ud551\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud55c \ucee4\ubba4\ub2c8\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac (i.e. ",(0,r.jsx)(s.code,{children:"typed-redux-saga"}),") \ub4e4\uc774 \uc788\uc9c0\ub9cc \uc774\uac83\ub3c4 \uadf8\ub9ac \ub9cc\uc871\uc2a4\ub7ec\uc6b4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub529 \uacbd\ud5d8\uc744 \uc8fc\uc9c4 \ubabb\ud588\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\ub2e4\ub9cc \uac1c\uc778\uc801\uc73c\ub85c DX\ub294 \uacb0\uad6d \ube44\uc988\ub2c8\uc2a4\ub97c \uc9c0\ud0f1\ud558\uae30 \uc704\ud55c \ucd5c\uc18c \uc0dd\uc0b0\uc131\uc744 \ub2f4\ubcf4\ud558\uae30 \uc704\ud55c \uc120\ub9cc \uc9c0\ucf1c\ub3c4 \ub41c\ub2e4\uace0 \uc0dd\uac01\ud558\uace0, ",(0,r.jsx)(s.code,{children:"typed-redux-saga"}),"\ub97c \uc774\uc6a9\ud55c \uac1c\ubc1c \uacbd\ud5d8\uc774 \uc544\uc2ac\uc544\uc2ac\ud558\uc9c0\ub9cc \uadf8 \uc120 \uc774\uc0c1\uc740 \uc9c0\ucf1c\uc900\ub2e4\uace0 \uc0dd\uac01\ud558\uae30\uc5d0 \uc5b8\uae09\ub9cc \ud558\uace0 \ub118\uc5b4\uac00\uaca0\ub2e4."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:["\uc704\uc640 \uac19\uc740 \uc774\uc720\ub4e4\ub85c saga\ub97c \ub5a0\ub098 \ub2e4\ub978 server state \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\ub294 \uac83\uc73c\ub85c \uacb0\uc815\ud588\ub2e4. \uadf8\ub9ac\uace0 \uc6b0\ub9ac\uc758 \ub2e4\uc74c \uc2a4\ud15d\uc740 ",(0,r.jsx)(s.code,{children:"rtk-query"}),"\ub85c \uacb0\uc815\ud588\ub2e4. \uad00\ub828\ub418\uc5b4 \uc5b4\ub5a4 \uc5b4\ub824\uc6c0\uc774 \uc788\uc5c8\uace0, \uc88b\uc558\ub358 \uc810\uc740 \ubb34\uc5c7\uc774 \uc788\ub294\uc9c0 \ub4f1 \uad00\ub828\ub41c \uc774\uc57c\uae30\ub294 \ub2e4\uc74c \uae00\uc5d0\uc11c \ub2e4\ub904 \ubd10\uc57c\uaca0\ub2e4."]}),"\n",(0,r.jsx)(s.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc6b0\ub9ac\uc758 \uc6f9 \uac1c\ubc1c \uc2a4\ud0dd\uc744 \uc798 \uc9c0\ud0f1\ud574\uc900 saga\uc5d0\uac8c \uac10\uc0ac\ub97c \ud45c\ud558\uba70..."})]})}function x(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var r=n(7294);const a={},t=r.createContext(a);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);