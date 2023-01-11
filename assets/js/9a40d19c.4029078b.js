"use strict";(self.webpackChunkwisesaturn_til=self.webpackChunkwisesaturn_til||[]).push([[466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2,title:"BST",date:"2023-01-11 12:32:00",tags:["CS","Data Structure","Study"],categories:"Data Structure"},o=void 0,i={unversionedId:"CS/Data_Structure/BST/index",id:"CS/Data_Structure/BST/index",title:"BST",description:"\ud83e\udd14 BST(Binary Search Tree, \uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac)\uc774\ub780?",source:"@site/docs/CS/Data_Structure/BST/index.mdx",sourceDirName:"CS/Data_Structure/BST",slug:"/CS/Data_Structure/BST/",permalink:"/TIL/docs/CS/Data_Structure/BST/",draft:!1,tags:[{label:"CS",permalink:"/TIL/docs/tags/cs"},{label:"Data Structure",permalink:"/TIL/docs/tags/data-structure"},{label:"Study",permalink:"/TIL/docs/tags/study"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"BST",date:"2023-01-11 12:32:00",tags:["CS","Data Structure","Study"],categories:"Data Structure"},sidebar:"defaultSidebar",previous:{title:"Data Structure",permalink:"/TIL/docs/category/data-structure"},next:{title:"Hash Table",permalink:"/TIL/docs/CS/Data_Structure/Hash_Table/"}},p={},c=[{value:"\ud83e\udd14 BST(Binary Search Tree, \uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac)\uc774\ub780?",id:"-bstbinary-search-tree-\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac\uc774\ub780",level:2},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\ud83e\udd14 BST\uc758 \uc0ad\uc81c, \uc0bd\uc785, \ud0d0\uc0c9 \uacfc\uc815",id:"-bst\uc758-\uc0ad\uc81c-\uc0bd\uc785-\ud0d0\uc0c9-\uacfc\uc815",level:2},{value:"\ud83d\udee0 \uad00\ub828 \ubb38\uc81c",id:"-\uad00\ub828-\ubb38\uc81c",level:2}],u={toc:c};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-bstbinary-search-tree-\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac\uc774\ub780"},"\ud83e\udd14 BST(Binary Search Tree, \uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac)\uc774\ub780?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BST",src:r(2720).Z,width:"671",height:"393"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud2b8\ub9ac \uad6c\uc870\ub97c \uac00\uc9c0\uba74\uc11c, ",(0,n.kt)("strong",{parentName:"li"},"\uc774\uc9c4 \ud0d0\uc0c9"),"\ud558\uae30 ",(0,n.kt)("strong",{parentName:"li"},"\uc27d\uac8c \uc9dc\uc5ec\uc838 \uc788\ub294 \ud2b8\ub9ac"),"\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud574\ub2f9 Node\ub85c\ubd80\ud130 \uc67c\ucabd Subtree\uc758 \ubaa8\ub4e0 Node\ub294 \ud574\ub2f9 Node\ubcf4\ub2e4 \uc791\uc740 \uac12\uc774\uba70, \uc624\ub978\ucabd Subtree\uc758 \ubaa8\ub4e0 Node\ub294 \ud574\ub2f9 Node\ubcf4\ub2e4 \ud070 \uac12\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 Node\uc758 ",(0,n.kt)("strong",{parentName:"p"},"Children\uc740 \ucd5c\ub300 2\uac1c"),"\uc785\ub2c8\ub2e4. (\uc67c\ucabd \uc544\ub2c8\uba74 \uc624\ub978\ucabd)"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\ubaa8\ub4e0 Tree\uac00 \uade0\ud615 \uc0c1\ud0dc\uc77c \ub54c (\ubaa8\ub4e0 Node\uc758 \uc790\uc190\uc774 2\uac1c\uc774\uac70\ub098 \uc5c6\ub2e4\uba74) \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub294 ",(0,n.kt)("strong",{parentName:"p"},"O(logN)"),"\uc785\ub2c8\ub2e4.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74, \ucd5c\ub300 ",(0,n.kt)("strong",{parentName:"p"},"O(N)"),"\uc758 \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uac12\uc744 \ucc3e\uc744 \ub54c, ",(0,n.kt)("strong",{parentName:"p"},"Binary Search"),"\ub97c \uc774\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."))),(0,n.kt)("h2",{id:"-bst\uc758-\uc0ad\uc81c-\uc0bd\uc785-\ud0d0\uc0c9-\uacfc\uc815"},"\ud83e\udd14 BST\uc758 \uc0ad\uc81c, \uc0bd\uc785, \ud0d0\uc0c9 \uacfc\uc815"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud0d0\uc0c9(Search)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Root Node\uc5d0\uc11c \uc2dc\uc791\ud574 Binary Search \uacfc\uc815\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc0bd\uc785(Insert)")),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Root Node\uc5d0\uc11c \uc2dc\uc791\ud574 Binary Search \uacfc\uc815\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"Leaf Node\uae4c\uc9c0 \ub3c4\ub2ec \ud6c4 Binary Search\ub97c \ud1b5\ud574 \uac12\uc5d0 \ub530\ub77c \uc704\uce58\ub97c \uc815\ud55c \ud6c4 Node\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc0ad\uc81c(Deletion)")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ub9e8 \ub9c8\uc9c0\ub9c9 Leaf Node\uac00 \uc544\ub2cc \uc911\uac04 Node\ub97c \uc9c0\uc6cc\uc57c \ud55c\ub2e4\uba74, \uc9c0\uc6b8 Node\uc758 Children\uc744 \uc774\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leaf Node\uc77c \ub54c"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\uac12\uc744 \uc9c0\uc6b0\uace0 \ubd80\ubaa8\uc5d0\uac8c Null \uac12\uc744 return\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Internal Node\uc77c \ub54c"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete",src:r(7051).Z,width:"857",height:"485"})),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uac00\uc7a5 ",(0,n.kt)("strong",{parentName:"p"},"\uac00\uae4c\uc6b4 Successor(\uc790\uc190)"),"\uc744 \ucc3e\uace0, \uc9c0\uc6b0\ub824\ub294 Node\uc5d0 ",(0,n.kt)("strong",{parentName:"p"},"\uadf8 \uc790\uc190\uc758 \uac12\uc744 \ubcf5\uc0ac"),"\ud569\ub2c8\ub2e4."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Successor\ub294 right Subtree\uc758 \ucd5c\uc19f\uac12"),"\uc785\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uadf8 ",(0,n.kt)("strong",{parentName:"p"},"\uc790\uc190\uc758 Data\ub97c \uc0ad\uc81c"),"\ud569\ub2c8\ub2e4."))))))),(0,n.kt)("h2",{id:"-\uad00\ub828-\ubb38\uc81c"},"\ud83d\udee0 \uad00\ub828 \ubb38\uc81c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.acmicpc.net/problem/2957"},"2957\ubc88: \uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac (acmicpc.net)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.acmicpc.net/problem/5639"},"5639\ubc88: \uc774\uc9c4 \uac80\uc0c9 \ud2b8\ub9ac (acmicpc.net)"))))}s.isMDXComponent=!0},2720:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/BST-203ed0560463af36c7b7cc53cfb6e6ee.png"},7051:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Delete-4350ddd903b618bd425dbb5ef54c11ad.png"}}]);