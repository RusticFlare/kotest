"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[66720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"gradle",title:"Conditional tests with Gradle",slug:"conditional-tests-with-gradle.html",sidebar_label:"Gradle"},i=void 0,l={unversionedId:"framework/conditional/gradle",id:"version-5.7/framework/conditional/gradle",title:"Conditional tests with Gradle",description:"Kotest supports two ways to filter tests from the command line using Gradle. The first is the standard --tests flag",source:"@site/versioned_docs/version-5.7/framework/conditional/gradle.md",sourceDirName:"framework/conditional",slug:"/framework/conditional/conditional-tests-with-gradle.html",permalink:"/docs/framework/conditional/conditional-tests-with-gradle.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/framework/conditional/gradle.md",tags:[],version:"5.7",frontMatter:{id:"gradle",title:"Conditional tests with Gradle",slug:"conditional-tests-with-gradle.html",sidebar_label:"Gradle"},sidebar:"framework",previous:{title:"Spec Annotations",permalink:"/docs/framework/conditional/spec-annotations-conditional-evaluation.html"},next:{title:"Isolation Modes",permalink:"/docs/framework/isolation-mode.html"}},s={},p=[{value:"Gradle Test Filtering",id:"gradle-test-filtering",level:3},{value:"Kotest Specific Test Filtering",id:"kotest-specific-test-filtering",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest supports two ways to filter tests from the command line using Gradle. The first is the standard --tests flag\nthat gradle supports, and the second is a kotest specific system property."),(0,r.kt)("h3",{id:"gradle-test-filtering"},"Gradle Test Filtering"),(0,r.kt)("p",null,"When running Kotest via the JUnit Platform runner through gradle, Kotest supports the standard gradle syntax for\ntest filtering. You can enable filtering either in the build script or via the --tests command-line option."),(0,r.kt)("p",null,"For example, in the build script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'tasks.test {\n    filter {\n        //include all tests from package\n        includeTestsMatching("com.somepackage.*")\n    }\n}\n')),(0,r.kt)("p",null,"Or via the command line:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradle test --tests 'com.sksamuel.somepackage*'")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradle test --tests '*IntegrationTest'")),(0,r.kt)("p",null,"See full Gradle documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/6.2.2/userguide/java_testing.html#test_filtering"},"here"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Because gradle's test support is class.method based, we cannot filter tests down to the individual test level, only the class level.")),(0,r.kt)("h3",{id:"kotest-specific-test-filtering"},"Kotest Specific Test Filtering"),(0,r.kt)("p",null,"To avoid the limitations with Gradle's ",(0,r.kt)("inlineCode",{parentName:"p"},"--tests")," support, Kotest offers its own flags which are provided via ",(0,r.kt)("strong",{parentName:"p"},"system properties")," or ",(0,r.kt)("strong",{parentName:"p"},"environment variables"),".\nThese flags support wildcards via ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," and match either tests or specs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"System property (JVM)"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable (JVM or Native)"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kotest.filter.specs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kotest_filter_specs")),(0,r.kt)("td",{parentName:"tr",align:null},"Spec (class) names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kotest.filter.tests")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kotest_filter_tests")),(0,r.kt)("td",{parentName:"tr",align:null},"Test names")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"System properties are only supported when targeting Kotlin/JVM.\nEnvironment variables are only supported when targeting Kotlin/JVM and Kotlin/Native.")),(0,r.kt)("p",null,"This example would execute all tests in the com.somepackage (and nested) packages by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest.filter.specs")," system property:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradle test -Dkotest.filter.specs='com.somepackage.*'")),(0,r.kt)("p",null,"This example would do the same, but uses the environment variable and so works for both Kotlin/JVM and Kotlin/Native:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kotest_filter_specs='com.somepackage.*' gradle test")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Regardless of whether you use a system property or an environment variable, it's best to enclose the value in single quotes\nrather than double quotes to avoid your shell performing globbing on any ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," characters.")),(0,r.kt)("p",null,"This example would execute only tests that contain ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," in the com.somepackage (and nested) packages:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradle test -Dkotest.filter.specs='com.somepackage.*' -Dkotest.filter.tests='*Foo*'")),(0,r.kt)("p",null,"This example would execute only tests that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," in any package:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradle test -Dkotest.filter.tests='Foo*'")))}c.isMDXComponent=!0}}]);