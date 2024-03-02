"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[465],{3415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var o=n(4848),s=n(8453);const a={},c="Load",r={id:"Developers/Pages/load",title:"Load",description:"The Load component is a part of a React application that interacts with the Ethereum blockchain. It allows users to connect their Ethereum wallet, fetches the NFTs (Non-Fungible Tokens) owned by the user, and displays them. The user can then select a character (NFT) to load. The component also provides audio feedback based on the user's actions and allows the user to navigate back to the landing page.",source:"@site/docs/Developers/Pages/load.md",sourceDirName:"Developers/Pages",slug:"/Developers/Pages/load",permalink:"/characterstudio-docs/docs/Developers/Pages/load",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Developers/Pages/load.md",tags:[],version:"current",lastUpdatedBy:"madjin",lastUpdatedAt:1708577163,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Save",permalink:"/characterstudio-docs/docs/Developers/Pages/save"},next:{title:"Claim",permalink:"/characterstudio-docs/docs/Developers/Pages/claim"}},d={},i=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"load",children:"Load"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Load"})," component is a part of a React application that interacts with the Ethereum blockchain. It allows users to connect their Ethereum wallet, fetches the NFTs (Non-Fungible Tokens) owned by the user, and displays them. The user can then select a character (NFT) to load. The component also provides audio feedback based on the user's actions and allows the user to navigate back to the landing page."]}),"\n",(0,o.jsx)(t.p,{children:"In simpler terms, this component is like a personal locker for users where they can see all the unique digital assets (NFTs) they own. They can connect their digital wallet, see their assets, and choose one to interact with."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Imports"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx!",children:"import React, { useEffect, useState } from 'react';\nimport styles from './Load.module.css';\nimport { ethers } from 'ethers';\nimport { useWeb3React } from '@web3-react/core';\nimport { InjectedConnector } from \"@web3-react/injected-connector\"\nimport { ViewContext, ViewMode } from '../context/ViewContext';\nimport { SoundContext } from \"../context/SoundContext\"\nimport { AudioContext } from \"../context/AudioContext\"\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The component imports necessary libraries and contexts. ",(0,o.jsx)(t.code,{children:"ethers"})," is a library to interact with Ethereum blockchain. ",(0,o.jsx)(t.code,{children:"useWeb3React"})," and ",(0,o.jsx)(t.code,{children:"InjectedConnector"})," are used to connect to the user's Ethereum wallet. ",(0,o.jsx)(t.code,{children:"ViewContext"}),", ",(0,o.jsx)(t.code,{children:"SoundContext"}),", and ",(0,o.jsx)(t.code,{children:"AudioContext"})," are React contexts used to manage global state related to view mode, sound, and audio settings."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Component State and Contexts"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx!",children:"function Load() {\n    const { account, library, activate } = useWeb3React();\n    const [characters, setCharacters] = useState([]);\n    const { setViewMode } = React.useContext(ViewContext);\n    const { playSound } = React.useContext(SoundContext)\n    const { isMute } = React.useContext(AudioContext)\n    ...\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The component uses ",(0,o.jsx)(t.code,{children:"useWeb3React"})," to get the user's Ethereum account, the Ethereum library instance, and the ",(0,o.jsx)(t.code,{children:"activate"})," function to connect the wallet. It also uses ",(0,o.jsx)(t.code,{children:"useState"})," to manage a local state ",(0,o.jsx)(t.code,{children:"characters"})," which stores the NFTs owned by the user. It uses ",(0,o.jsx)(t.code,{children:"useContext"})," to get the necessary functions and values from the global state."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Fetching NFTs"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"useEffect(() => {\n    ...\n}, [account, library]);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"useEffect"})," hook is used to fetch the NFTs owned by the user whenever the ",(0,o.jsx)(t.code,{children:"account"})," or ",(0,o.jsx)(t.code,{children:"library"})," changes. It interacts with a smart contract on the Ethereum blockchain to get the balance and details of each NFT."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Wallet Connection and Character Loading"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx!",children:"const connectWallet = () => {\n    activate(injectedConnector)\n}\n\nconst loadCharacter = (character) => {\n    !isMute && playSound('backNextButton');\n    setViewMode(ViewMode.APPEARANCE)\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"connectWallet"})," function is used to connect the user's Ethereum wallet. The ",(0,o.jsx)(t.code,{children:"loadCharacter"})," function is used to load a selected character (NFT), play a sound if not muted, and change the view mode to ",(0,o.jsx)(t.code,{children:"APPEARANCE"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Rendering"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx!",children:"return (\n    ...\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"The component renders a message to connect the wallet if not connected, a list of characters (NFTs) owned by the user, and a back button to navigate back to the landing page. The styles are applied using CSS modules."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(6540);const s={},a=o.createContext(s);function c(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);