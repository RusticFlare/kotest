"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[24524],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19688:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const i={title:"Test Ordering",slug:"test-ordering.html"},a=void 0,s={unversionedId:"framework/test_ordering",id:"version-5.3/framework/test_ordering",title:"Test Ordering",description:"When running multiple tests from a Spec, there's a certain order on how to execute them.",source:"@site/versioned_docs/version-5.3/framework/test_ordering.md",sourceDirName:"framework",slug:"/framework/test-ordering.html",permalink:"/docs/5.3/framework/test-ordering.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/test_ordering.md",tags:[],version:"5.3",frontMatter:{title:"Test Ordering",slug:"test-ordering.html"},sidebar:"framework",previous:{title:"Spec Ordering",permalink:"/docs/5.3/framework/spec-ordering.html"},next:{title:"Grouping Tests",permalink:"/docs/5.3/framework/tags.html"}},c={},d=[{value:"Sequential Ordering",id:"sequential-ordering",level:3},{value:"Random Ordering",id:"random-ordering",level:3},{value:"Lexicographic Ordering",id:"lexicographic-ordering",level:3}],l={toc:d};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When running multiple tests from a Spec, there's a certain order on how to execute them."),(0,o.kt)("p",null," By default, a ",(0,o.kt)("strong",{parentName:"p"},"sequential")," order is used (order that tests are defined in the spec), but it's also possible to configure them\nto be executed in a ",(0,o.kt)("strong",{parentName:"p"},"random")," order or ",(0,o.kt)("strong",{parentName:"p"},"lexicographic")," order."),(0,o.kt)("p",null,"This setting can be configured in either a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," or in ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.3/framework/project-config.html"},"ProjectConfig")," by overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"testCaseOrder")," function.\nIf both exist, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),"'s configuration will have priority."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Nested tests will always run in discovery order (sequential) regardless of test ordering setting.")),(0,o.kt)("h3",{id:"sequential-ordering"},"Sequential Ordering"),(0,o.kt)("p",null,"Root tests are dispatched in the order they are defined in the spec file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SequentialSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Sequential\n\n    init {\n      "foo" {\n        // I run first as I\'m defined first\n      }\n\n      "bar" {\n        // I run second as I\'m defined second\n      }\n    }\n}\n')),(0,o.kt)("h3",{id:"random-ordering"},"Random Ordering"),(0,o.kt)("p",null,"Root tests are dispatched in a random order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class RandomSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Random\n\n    init {\n      "foo" {\n        // This test may run first or second\n      }\n\n      "bar" {\n        // This test may run first or second\n      }\n    }\n}\n')),(0,o.kt)("h3",{id:"lexicographic-ordering"},"Lexicographic Ordering"),(0,o.kt)("p",null,"Root tests are dispatched in a lexicographic order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class LexicographicSpec : StringSpec() {\n\n    override fun testCaseOrder(): TestCaseOrder? = TestCaseOrder.Lexicographic\n\n    init {\n      "foo" {\n        // I run second as bar < foo\n      }\n\n      "bar" {\n        // I run first as bar < foo\n      }\n    }\n}\n')))}p.isMDXComponent=!0}}]);