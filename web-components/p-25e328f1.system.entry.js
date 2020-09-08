System.register(["./p-1b22caee.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.c;r=e.h;i=e.g}],execute:function(){var u="";var o=e("uui_radiobutton_list",function(){function e(e){t(this,e);this.width="100%";this.returntype="string";this.selectedvalue=null;this.onselectionchange=n(this,"onselectionchange",7)}e.prototype.componentWillLoad=function(){this.updateOptions()};e.prototype.onSelectedValueChange=function(){this.updateOptions()};e.prototype.handleKeyUp=function(e){var t=this.element.querySelectorAll("uui-radiobutton");var n=this.getSelectedOptionIndex(t);if(e.key==="ArrowUp"){if(n===0){n=t.length-1}else{n--}this.updateSelectedOptionIndex(n,t)}if(e.key==="ArrowDown"){if(n===t.length-1){n=0}else{n++}this.updateSelectedOptionIndex(n,t)}if(e.key==="Tab"){if(n===-1){var r=t[0].querySelector("input");r.focus()}else{var r=t[n].querySelector("input");r.focus()}}};e.prototype.getSelectedOptionIndex=function(e){for(var t=0;t<e.length;t++){if(e[t].selected)return t}return-1};e.prototype.updateSelectedOptionIndex=function(e,t){for(var n=0;n<t.length;n++){var r=t[n].querySelector("input");if(e===n){t[n].selected=true;r.focus();this.emitValue(t[n].value)}else{t[n].selected=false;r.blur()}}};e.prototype.updateOptions=function(){var e=this.element.querySelectorAll("uui-radiobutton");if(this.selectedvalue==null||this.selectedvalue==""){return}for(var t=0;t<e.length;t++){if(this.returntype==="string"){e[t].selected=String(e[t].value)===String(this.selectedvalue)}if(this.returntype==="number"){e[t].selected=Number(e[t].value)===Number(this.selectedvalue)}if(this.returntype==="object"){e[t].selected=JSON.stringify(e[t].value)===JSON.stringify(this.selectedvalue)}}};e.prototype.onRadioButtonToggle=function(e){var t=e.srcElement.parentElement.querySelectorAll("uui-radiobutton");for(var n=0;n<t.length;n++){t[n].selected=t[n]===e.srcElement}this.emitValue(e.srcElement.value)};e.prototype.emitValue=function(e){if(this.returntype==="string"){this.onselectionchange.emit(String(e))}if(this.returntype==="number"){this.onselectionchange.emit(Number(e))}if(this.returntype==="object"){this.onselectionchange.emit(e)}};e.prototype.render=function(){var e={width:this.width};return r("div",{style:e},r("slot",null))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{selectedvalue:["onSelectedValueChange"]}},enumerable:true,configurable:true});return e}());o.style=u}}}));