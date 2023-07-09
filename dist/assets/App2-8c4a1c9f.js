import{u as p,r,C as w,j as t,a as s,F as k,b as L,N as j,i as N,g as C,c as M,d as E,R as $,I as A}from"./index-dba16d46.js";import{F as S,a as F}from"./Footer-12ec02d8.js";function P(){const[l,v]=p("global"),[x,u]=r.exports.useState(!1),g=()=>{u(!x)},{addItemToCart:I,products:a}=r.exports.useContext(w),[i,f]=r.exports.useState("ALL"),m=e=>{f(e)},c=e=>{const y=`/pages/App3.html${`?name=${e.name}&price=${e.price}&img=${e.img}&imghover=${e.imghover}&description=${e.description}`}`;window.location.assign(y)},[o,b]=r.exports.useState(null),d=e=>{b(e)},h=()=>{b(null)};return r.exports.useEffect(()=>{f("ALL")},[]),r.exports.useEffect(()=>{const n=new URLSearchParams(window.location.search).get("filtro");console.log(n),f(n||"ALL")},[]),r.exports.useEffect(()=>{a.forEach(e=>{const n=new Image;n.src=e.imghover})},[a]),t("div",{className:" pb-20 mt-10",children:[t("div",{className:"flex justify-between items-center mr-8 ml-8",children:[s("h1",{className:" pb-5 md:pt-15 text-center text-sm font-semibold text-black",children:l("shop.title")}),t("button",{className:" mb-10 md:pt-15 text-center text-sm font-semibold text-black underline",onClick:g,children:[l("shop.filters")," ↓"]})]}),s("div",{children:x&&s("div",{className:"h-screen dropdown-menu-2",children:s("div",{className:"",children:t("div",{className:"pb-4 pt-4 mr-8 ml-8 flex justify-between items-center ",children:[t("p",{className:"flex-start text-sm",children:[l("shop.filterby")," "]}),t("div",{className:"flex md:flex-wrap justify-between items-center ml-8 mr-8 ",children:[t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{}),s("input",{name:"filters",type:"radio",value:"ALL",checked:i=="ALL",onChange:()=>m("ALL")}),l("shop.all")]}),t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{className:""}),s("input",{className:"ml-4",name:"filters",type:"radio",value:"hoddie",checked:i=="hoddie",onChange:()=>m("hoddie")}),l("shop.hoodies")]}),t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{}),s("input",{className:"ml-4",name:"filters",type:"radio",value:"t-shirts",checked:i=="t-shirts",onChange:()=>m("t-shirts")}),l("shop.tshirts")]}),t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{}),s("input",{className:"ml-4",name:"filters",type:"radio",value:"pants",checked:i=="pants",onChange:()=>m("pants")}),l("shop.pants")]}),t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{}),s("input",{className:"ml-4",name:"filters",type:"radio",value:"moreless",checked:i=="moreless",onChange:()=>m("moreless")}),l("shop.moreless")]}),t("span",{className:"items-center flex justify-between text-sm font-light",children:[s("br",{}),s("input",{className:"ml-4",name:"filters",type:"radio",value:"lessmore",checked:i=="lessmore",onChange:()=>m("lessmore")}),l("shop.lessmore")]})]}),s("button",{className:"dropdown-close-button-2 font-bold flex-end",onClick:g,children:"X"})]})})})}),s("div",{className:"grid grid-cols-4 md:grid-cols-1 md:grid-flow-row md:grid-rows-4 lg:grid-cols-2  w-screen justify-items-center justify-content-center mt-6 md:mt-6",children:a&&t(k,{children:[i==="ALL"&&a.map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold mb-4",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n)),i==="hoddie"&&a.filter(e=>e.type==="hoddie").map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n)),i==="t-shirts"&&a.filter(e=>e.type==="tshirt").map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n)),i==="pants"&&a.filter(e=>e.type==="pants").map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n)),i==="moreless"&&a.sort((e,n)=>n.price-e.price).map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n)),i==="lessmore"&&a.sort((e,n)=>e.price-n.price).map((e,n)=>t("div",{className:"md:mb-4",children:[s("a",{href:"#",onClick:()=>c(e),children:s("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center",src:o===e?e.imghover:e.img,onMouseEnter:()=>d(e),onMouseLeave:h,alt:""})}),t("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[e.name," | ",t("span",{className:"font-light text",children:["$",e.price]})]})]},n))]})})]})}function z(){const[l,v]=p("global");return s(L,{children:t("div",{children:[s(j,{}),s("div",{className:"bg-cyan-600 text-white infoshop pt-4 pb-2 text-center",children:s("p",{className:"",children:l("shop.discount")})}),s(P,{}),s(S,{}),s("hr",{className:"border-gray-800 border-1"}),s(F,{}),s("hr",{className:"border-gray-800 border-1"}),s("div",{className:"bg-black text-white flex justify-center p-5 md:text-center text-xs",children:s("h4",{className:"font-thin",children:l("footer.end")})})]})})}N.init({interpolation:{escapeValue:!1},lng:"en",resources:{es:{global:C},en:{global:M}}});E.createRoot(document.getElementById("root2")).render(s($.StrictMode,{children:s(A,{i18n:N,children:s(z,{})})}));