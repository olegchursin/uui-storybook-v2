import{r as t,c as i,h as o}from"./p-78fdec5d.js";const r=class{constructor(o){t(this,o),this.onClick=i(this,"onClick",7)}onTabClick(){this.onClick.emit(this.tabindex)}render(){return o("button",{class:"uui-tab "+(this.active?"uui-tab-active":""),onClick:this.onTabClick.bind(this)},o("slot",{name:"icon"}),o("div",{style:{width:"4px"}}),o("slot",null))}};r.style=".uui-tab{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;width:100%;font-family:var(--uui-default-p-font-face);font-size:16px;line-height:20px;padding-right:20px;padding-left:20px;padding-bottom:8px;color:var(--uui-color-gray-d);font-weight:700;border-bottom:4px solid transparent;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}[name=icon]::slotted(*){margin-right:4px;width:20px;color:var(--uui-color-gray-d);fill:var(--uui-color-gray-d)}.uui-tab-active{color:var(--uui-tabs-active-color);border-bottom-color:var(--uui-tabs-active-color)}.uui-tab-active [name=icon]::slotted(*){width:20px;margin-right:4px;color:var(--uui-tabs-active-color);fill:var(--uui-tabs-active-color)}";export{r as uui_tab}