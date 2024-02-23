"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[2151],{7205:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(4848),n=s(8453);const i={},r="Optimize avatars",o={id:"General/optimize-avatars",title:"Optimize avatars",description:"Optimizing VRM models by hand can be very tedious and time consuming. We have designed a simple drag and drop solution that can reduce the amount of draw calls and overall filesize of VRM avatars by:",source:"@site/docs/General/optimize-avatars.md",sourceDirName:"General",slug:"/General/optimize-avatars",permalink:"/characterstudio-docs/docs/General/optimize-avatars",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/General/optimize-avatars.md",tags:[],version:"current",lastUpdatedBy:"madjin",lastUpdatedAt:1708647512,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create an Avatar",permalink:"/characterstudio-docs/docs/General/create-an-avatar"},next:{title:"Preparing Assets",permalink:"/characterstudio-docs/docs/Modders/process-avatars"}},d={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"optimize-avatars",children:"Optimize avatars"}),"\n",(0,a.jsx)(t.p,{children:"Optimizing VRM models by hand can be very tedious and time consuming. We have designed a simple drag and drop solution that can reduce the amount of draw calls and overall filesize of VRM avatars by:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["merging textures together with an image atlas","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"handles transparent textures separatly"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"merging skinned meshes together"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The information on the right hand side will let you know how many skinned meshes and texture materials you have to pick the best option."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot from 2024-02-15 12-52-24",src:s(795).A+"",width:"1500",height:"984"})}),"\n",(0,a.jsx)(t.p,{children:"Here is how the output textures look when picking the option to keep both standard and mtoon shader materials:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:s(3231).A+"",width:"1226",height:"355"})}),"\n",(0,a.jsx)(t.p,{children:"Here is how the texture files look when deciding to merge to mtoon or standard:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:s(6546).A+"",width:"599",height:"355"})}),"\n",(0,a.jsx)(t.p,{children:"Overall deciding to merge to mtoon or standard shader will result in less draw calls and file size, whereas keeping both can retain the closest likeness to the original incase you have both shaders in the original."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:s(2371).A+"",width:"1522",height:"551"})}),"\n",(0,a.jsx)(t.p,{children:"In this example I was able to shave an extra 20% off the filesize from choosing to merge to mtoon shader. Here's results from other files we tested:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"image",src:s(6859).A+"",width:"744",height:"842"}),"\n",(0,a.jsx)(t.a,{href:"https://twitter.com/dankvr/status/1724189158623654346",children:"https://twitter.com/dankvr/status/1724189158623654346"})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://twitter.com/dankvr/status/1725247568446165082",children:"https://twitter.com/dankvr/status/1725247568446165082"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://twitter.com/dankvr/status/1722857264606814394",children:"https://twitter.com/dankvr/status/1722857264606814394"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If interested in modifying the optimizer page, see ",(0,a.jsx)(t.code,{children:"src/pages/Optimizer.jsx"})," and its related dependencies."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6859:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/B19_9WDNa-772775f263ea38feaf705e6668c011fb.png"},6546:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/BkED-RssT-6e79ca953c05cf47d4f58b84197610fb.png"},2371:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/S1J-b0jip-69fd2e522b52eb95833a4218bb158602.png"},795:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/r1EneCsip-814039870b3600d8c74b41df04c93676.png"},3231:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/rkH3-CjjT-9cd14e7db2113ff559e7c397ad8be543.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var a=s(6540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);