(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(125));const o={title:"Getting Started"},i={id:"graphql/getting-started",title:"Getting Started",description:"The `@nestjs-query/query-graphql` package provided base `Resolvers` and graphql type classes to make creating code-first graphql CRUD applications easy.",source:"@site/docs/graphql/getting-started.md",permalink:"/nestjs-query/docs/graphql/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/graphql/getting-started.md",sidebar:"docs",previous:{title:"TypeormQueryService",permalink:"/nestjs-query/docs/typeorm/services"},next:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"}},c=[{value:"Installation",id:"installation",children:[{value:"Docs",id:"docs",children:[]}]}],s={rightToc:c},l="wrapper";function p({components:e,...t}){return Object(a.b)(l,Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package provided base ",Object(a.b)("inlineCode",{parentName:"p"},"Resolvers")," and graphql type classes to make creating code-first graphql CRUD applications easy."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i  @nestjs-query/query-graphql @nestjs-query/core @nestjs/common @nestjs/graphql graphql graphql-relay class-transformer class-validator reflect-metadata type-graphql\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," have opted for peer dependencies to follow nest conventions and to prevent duplicate installations of packages."),Object(a.b)("h3",{id:"docs"},"Docs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./dtos"}),"DTOs")," - Documentation about the use of DTOs and associated annotations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./resolvers"}),"Resolvers")," - Documentation about crud resolvers and their usage."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./queries"}),"Queries")," - Documentation about the provided graphql query endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./mutations"}),"Mutations")," -  Documentation about the provided graphql mutation endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./types"}),"Types")," - Documentation for the provided graphql types.")))}p.isMDXComponent=!0},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);