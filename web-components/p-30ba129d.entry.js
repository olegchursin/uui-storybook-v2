import{r as i,c as t,h as o}from"./p-78fdec5d.js";const r=class{constructor(o){i(this,o),this.width="100%",this.value="",this.error=!1,this.disabled=!1,this.name="",this.type="text",this.placeholder="",this.min=0,this.max=99999999,this.onchange=t(this,"onchange",7)}onTextChange(i){i.preventDefault(),this.value=i.target.value,this.onchange.emit(i)}render(){return o("input",{type:this.type,class:this.error?"uui-textbox error":"uui-textbox",style:{width:this.width},value:this.value,min:this.min,max:this.max,placeholder:this.placeholder,disabled:this.disabled,onInput:i=>this.onTextChange(i)})}};r.style=".uui-textbox{line-height:var(--uui-default-line-height);width:100%;font-family:var(--uui-primary-font-family);font-weight:var(--uui-font-weight-normal);font-size:var(--uui-default-font-size);line-height:20px;color:var(--uui-color-gray-a);padding:10px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:transparent;border:1px solid var(--uui-color-gray-a);border-radius:4px;margin-bottom:20px}.uui-textbox:not(:disabled):focus{outline-color:var(--uui-color-teal-darker)}.uui-textbox.error:focus{outline-color:var(--uui-color-error)}.uui-textbox.error{border:2px solid var(--uui-color-error);border-radius:4px;margin-bottom:20px}.uui-textbox:not(.error):not(:disabled):hover{border:2px solid var(--uui-color-teal-lighter);padding:9px 11px}.uui-textbox:disabled{opacity:var(--uui-disabled-opacity)}";export{r as uui_input}