import{_ as p,u as C,o as k,c as _,a as e,b as o,t as f,d as r,r as v}from"./index-C64doFOR.js";import{K as b,F as y}from"./FullCodeModal-BdG4fc5y.js";const g={class:"day-1-content"},m={class:"content-layout"},w={class:"left-column"},x={class:"interaction-area"},F={class:"interaction-controls"},S={class:"result-display"},B={class:"result-value"},i=`//SPDx-License-Identifier:MIT

// 声明Solidity版本，要求编译器版本在0.8.0或更高（但低于0.9.0）
pragma solidity ^0.8.0;

// 定义一个名为clickcounter的合约（相当于其他语言中的类）
contract clickcounter{
    // 声明一个无符号256位整数类型的状态变量counter
    // public关键字表示这个变量可以被外部访问，编译器会自动生成getter函数
    uint256 public counter;

    // 定义一个名为click的公共函数
    // public表示任何人都可以调用这个函数
    function click() public {
        // 将counter的值加1（自增操作）
        counter++;
    }
}`,D={__name:"ClickCounter",setup(I){const{counter:u,clickCounter:l,resetCounter:c,unlockedConcepts:a,progressPercentage:d}=C(),n=v(!1);return(P,t)=>(k(),_("div",g,[e("div",m,[e("div",w,[e("div",x,[t[5]||(t[5]=e("h3",null,"🎮 交互操作",-1)),e("div",F,[e("button",{class:"day-action-btn cyan",onClick:t[0]||(t[0]=(...s)=>o(l)&&o(l)(...s))}," 🖱️ 点击计数器/ClickCounter "),e("button",{class:"day-action-btn red",onClick:t[1]||(t[1]=(...s)=>o(c)&&o(c)(...s))}," 🔄 重置计数器/ResetCounter ")]),e("div",S,[t[4]||(t[4]=e("h4",null,"当前计数值：",-1)),e("div",B,f(o(u)),1)])])]),r(b,{"current-day":1,"unlocked-concepts":o(a),"progress-percentage":o(d),"full-code":i,onShowFullCode:t[2]||(t[2]=s=>n.value=!0)},null,8,["unlocked-concepts","progress-percentage"])]),r(y,{show:n.value,title:"ClickCounter 完整代码",code:i,onClose:t[3]||(t[3]=s=>n.value=!1)},null,8,["show"])]))}},M=p(D,[["__scopeId","data-v-ba9b4b92"]]);export{M as default};
