(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),a=(r(0),r(125));const o={title:"DTOs"},l={id:"graphql/dtos",title:"DTOs",description:"If you have never heard of a DTO before you can read about them [here](https://martinfowler.com/eaaCatalog/dataTransferObject.html)",source:"@site/docs/graphql/dtos.md",permalink:"/nestjs-query/docs/graphql/dtos",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/graphql/dtos.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/graphql/getting-started"},next:{title:"Resolvers",permalink:"/nestjs-query/docs/graphql/resolvers"}},i=[{value:"<code>@FilterableField</code>",id:"filterablefield",children:[{value:"Example",id:"example",children:[]}]}],p={rightToc:i},c="wrapper";function s({components:e,...t}){return Object(a.b)(c,Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you have never heard of a DTO before you can read about them ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://martinfowler.com/eaaCatalog/dataTransferObject.html"}),"here")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," You can combine your entity and DTO but all examples in the docs have them split to easily show what is\nspecific to the persistence layer and the web layer."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"query-graphql")," package leverages most decorators from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.nestjs.com/graphql/quick-start"}),Object(a.b)("inlineCode",{parentName:"a"},"@nestjs/graphql"))," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://typegraphql.ml"}),"TypeGraphQL"),", with the exception of ",Object(a.b)("inlineCode",{parentName:"p"},"FilterableField"),"."),Object(a.b)("h2",{id:"filterablefield"},Object(a.b)("inlineCode",{parentName:"h2"},"@FilterableField")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"FilterableField")," is very similar to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://typegraphql.ml/docs/types-and-fields.html"}),Object(a.b)("inlineCode",{parentName:"a"},"Field"))," from\nTypeGraphQL, however it allows you to specify the fields that should be filterable when querying. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," If you use the TypeGraphQL Field decorator it will not be exposed in the query type for the DTO."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"In the following example we allow ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", ",Object(a.b)("inlineCode",{parentName:"p"},"title"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"completed")," to be used in queries. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from 'type-graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @Field(() => GraphQLISODateTime)\n  created!: Date;\n\n  @Field(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")))}s.isMDXComponent=!0},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,i({ref:t},c,{components:r})):a.a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);