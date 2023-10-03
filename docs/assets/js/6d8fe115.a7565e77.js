"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={title:"Test Factories",slug:"test-factories.html"},o=void 0,i={unversionedId:"framework/test_factories",id:"version-5.4/framework/test_factories",title:"Test Factories",description:"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via test factories which create tests that can be included into one or more specs.",source:"@site/versioned_docs/version-5.4/framework/test_factories.md",sourceDirName:"framework",slug:"/framework/test-factories.html",permalink:"/docs/5.4/framework/test-factories.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/framework/test_factories.md",tags:[],version:"5.4",frontMatter:{title:"Test Factories",slug:"test-factories.html"},sidebar:"framework",previous:{title:"System properties",permalink:"/docs/5.4/framework/framework-config-props.html"},next:{title:"Test Output",permalink:"/docs/5.4/framework/test_output.html"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Listeners",id:"listeners",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via ",(0,s.kt)("em",{parentName:"p"},"test factories")," which create tests that can be ",(0,s.kt)("em",{parentName:"p"},"included")," into one or more specs."),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Say we wanted to build our own collections library. A slightly trite example, but one that serves the documentation purpose well."),(0,s.kt)("p",null,"We could create an interface ",(0,s.kt)("inlineCode",{parentName:"p"},"IndexedSeq")," which has two implementations, ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Vector"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface IndexedSeq<T> {\n\n    // returns the size of t\n    fun size(): Int\n\n    // returns a new seq with t added\n    fun add(t: T): IndexedSeq<T>\n\n    // returns true if this seq contains t\n    fun contains(t: T): Boolean\n}\n")),(0,s.kt)("p",null,"If we wanted to test our ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," implementation, we could do this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ListTest : WordSpec({\n\n   val empty = List<Int>()\n\n   "List" should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus1.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n})\n')),(0,s.kt)("p",null,"Now, if we wanted to test ",(0,s.kt)("inlineCode",{parentName:"p"},"Vector")," we have to copy n paste the test. As we add more implementations and more tests, the likelihood is our test suite will become fragmented and out of sync."),(0,s.kt)("p",null,"We can address this by creating a test factory, which accepts an ",(0,s.kt)("inlineCode",{parentName:"p"},"IndexedSeq")," as a parameter."),(0,s.kt)("p",null,"To create a test factory, we use a builder function such as ",(0,s.kt)("inlineCode",{parentName:"p"},"funSpec"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"wordSpec")," and so on. A builder function exists for each of the spec ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.4/framework/testing-styles.html"},"styles"),"."),(0,s.kt)("p",null,"So, to convert our previous tests to a test factory, we simply do the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun <T> indexedSeqTests(name: String, empty: IndexedSeq<T>) = wordSpec {\n   name should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus1.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n}\n')),(0,s.kt)("p",null,"And then to use this, we must include it one or more times into a spec (or several specs)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class IndexedSeqTestSuite : WordSpec({\n   include(indexedSeqTests("vector"), Vector())\n   include(indexedSeqTests("list"), List())\n})\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can include any style factory into any style spec. For example, a fun spec factory can be included into a string spec class.")),(0,s.kt)("p",null,"A test class can include several different types of factory, as well as inline tests as normal. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class HugeTestFile : FunSpec({\n\n   test("first test") {\n     // test here\n   }\n\n   include(factory1("foo"))\n   include(factory2(1, 4))\n\n   test("another test") {\n     //  testhere\n   }\n})\n')),(0,s.kt)("p",null,"Each included test appears in the test output and reports as if it was individually defined."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Tests from factories are included in the order they are defined in the spec class.")),(0,s.kt)("h2",{id:"listeners"},"Listeners"),(0,s.kt)("p",null,"Test factories support the usual before and after test callbacks. Any callback added to a factory, will in turn be added to the spec or specs where the factory is included."),(0,s.kt)("p",null,"However, only those tests generated ",(0,s.kt)("em",{parentName:"p"},"by that factory")," will have the callback applied. This means you can create stand alone factories with their own lifecycle methods and be assured they won't clash with lifecycle methods defined in other factories or specs themselves."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val factory1 = funSpec {\n  beforeTest {\n     println("Executing $it")\n  }\n  test("a") {  }\n  test("b") {  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class LifecycleExample : FunSpec({\n   include(factory1)\n   test("c")\n   test("d")\n})\n')),(0,s.kt)("p",null,"After executing the test suite, the following would be printed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Executing a\nExecuting b\n")),(0,s.kt)("p",null,"And as you can see, the ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeTest")," block added to ",(0,s.kt)("inlineCode",{parentName:"p"},"factory1")," only applies to those tests defined in that factory, and not in the tests defined in the spec it was added to."))}p.isMDXComponent=!0}}]);