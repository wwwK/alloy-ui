YUI.add("aui-input-text-control-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isFunction,s=n.isString,o=e.Event.KeyMap,u="alert",a="bindUI",f="content",l="icon",c="list",h="loading",p="renderUI",d="circle-triangle-b",v=u,m=h,g="BACKSPACE",y="TAB",b="ALT",w="WIN_IME",E={node:null,points:["tl","bl"]},S="boundingBox",x="contentBox",T=function(){var e=this;e.on(p,e._renderUIInputTextControl,e),e.on(a,e._bindUIInputTextControl,e)};T.ATTRS={button:{value:!0},delimChar:{value:null,setter:function(t){return s(t)&&t.length>0?t=[t]:r(t)||(t=e.Attribute.INVALID_VALUE),t}},forceSelection:{value:!1},iconButton:{value:d},input:{value:null},matchKey:{value:0},minQueryLength:{value:1},queryDelay:{value:.2,getter:function(e){return e*1e3}},queryInterval:{value:.5,getter:function(e){return e*1e3}},queryMatchCase:{value:!1},queryMatchContains:{value:!1},queryQuestionMark:{value:!0},suppressInputUpdate:{value:!1},typeAhead:{value:!1},typeAheadDelay:{value:.2,getter:function(e){return e*1e3}},uniqueName:{value:null}},T.prototype={initializer:function(t){var n=this;n._overlayAlign=e.mix({},E)},_renderUIInputTextControl:function(){var e=this;e._renderInput()},_bindUIInputTextControl:function(){var e=this;e._bindDataSource();var t=e.button,n=e.inputNode;n.on("blur",e._onTextboxBlur,e),n.on("focus",e._onTextboxFocus,e),n.on("keydown",e._onTextboxKeyDown,e),n.on("keypress",e._onTextboxKeyPress,e),n.on("keyup",e._onTextboxKeyUp,e),e.publish("handleResponse"),e.publish("textboxKeyDown"),e.publish("textboxKeyPress"),e.publish("textboxKeyUp"),e.publish("invalidQueryLength"),e.publish("sendQueryDisabled"),e.publish("containerCollapse"),e.publish("containerExpand"),e.publish("containerPopulate"),e.publish("itemArrowFrom"),e.publish("itemArrowTo"),e.publish("itemMouseOut"),e.publish("itemMouseOver"),e.publish("itemSelect"),e.publish("selectionEnforce"),e.publish("textboxBlur"),e.publish("textboxChange"),e.publish("textboxFocus"),e.publish("textboxKey"),e.publish("typeAhead"),e.publish("unmatchedItemSelect")},syncUI:function(){var e=this;e.inputNode.setAttribute("autocomplete","off")},doBeforeLoadData:function(e){return!0},formatResult:function(e,t,n){return n||""},generateRequest:function(e){return{request:e}},handleResponse:function(e){var t=this;t.fire("handleResponse",e);var n=t.get("iconButton")||d;e.error&&(n=v),t.button.set(l,n)},_bindDataSource:function(){var t=this,n=t.button,r=t.get("dataSource"),i=t.get("dataSourceType");r.on("request",e.bind(n.set,n,l,m)),r.on("error",t.handleResponse,t),r.after("response",t.handleResponse,t)},_clearInterval:function(){var e=this;e._queryIntervalId&&(clearInterval(e._queryIntervalId),e._queryIntervalId=null)},_clearSelection:function(){var e=this,t=e.get("delimChar"),n={previous:"",query:e.inputNode.get("value")};t&&(n=e._extractQuery(e.inputNode.get("value"))),e.fire("selectionEnforce",n.query)},_enableIntervalDetection:function(){var t=this,n=t.get("queryInterval");!t._queryIntervalId&&n&&(t._queryInterval=setInterval(e.bind(t._onInterval,t),n))},_extractQuery:function(e){var t=this,n=t.get("delimChar"),r=-1,i=n.length-1,s,o,u;for(;i>=0;i--)s=e.lastIndexOf(n[i]),s>r&&(r=s);if(n[i]==" ")for(var a=n.length-1;a>=0;a--)if(e[r-1]==n[a]){r--;break}if(r>-1){o=r+1;while(e.charAt(o)==" ")o+=1;u=e.substring(0,o),e=e.substring(o)}else u="";return{previous:u,query:e}},_focus:function(){var e=this;setTimeout(function(){e.inputNode.focus()},1)},_onButtonMouseDown:function(e){var t=this;e.halt(),t._focus(),t._sendQuery(t.inputNode.get("value")+"*")},_onInterval:function(){var e=this,t=e.inputNode.get("value"),n=e._lastValue;t!=n&&(e._lastValue=t,e._sendQuery(t))},_onTextboxBlur:function(e){var t=this;!t._overContainer||o.isKey(t._keyCode,y)?t.fire("textboxBlur"):t._focus()},_onTextboxFocus:function(e){var t=this;t.get("focused")||(t.inputNode.setAttribute("autocomplete","off"),t.focus(),t._initInputValue=t.inputNode.get("value"),t.fire("textboxFocus"))},_onTextboxKeyDown:function(e){var t=this,n=e.keyCode;t._typeAheadDelayId!=-1&&clearTimeout(t._typeAheadDelayId),t.fire("textboxKeyDown",e),e.isKey(b)&&t._enableIntervalDetection(),t._keyCode=n},_onTextboxKeyPress:function(e){var t=this;t.fire("textboxKeyPress",e),e.isKey(w)&&t._enableIntervalDetection()},_onTextboxKeyUp:function(e){var t=this;if(e.isSpecialKey()&&!e.isKey(g))return;t.fire("textboxKeyUp",e)},_renderInput:function(){var t=this,n=t.get(x),r=t.get("input"),i=t.get("iconButton")||d,s={field:{labelText:!1},icons:[{icon:i,id:"trigger",handler:{fn:t._onButtonMouseDown,context:t}}]},o=null,u=null;r&&(r=e.one(r),s.field.node=r,o=r.next(),u=r.get("parentNode"));var a=(new e.Combobox(s)).render(n);if(u){var f=a.get("boundingBox");u.insertBefore(f,o)}t.inputNode=a.get("node"),t.button=a.icons.item("trigger"),t.comboBox=a,t.set("uniqueName",e.stamp(t.inputNode))},_sendQuery:function(e){var t=this;if(t.get("disabled")){t.fire("sendQueryDisabled",e);return}var n=t.get("delimChar"),r=t.get("minQueryLength");if(n){var i=t._extractQuery(e);e=i.query,t._pastSelections=i.previous}if(e&&e.length<r||!e&&r>0){t.fire("invalidQueryLength",e);return}e=encodeURIComponent(e);var s=t.get("dataSource"),o=t.generateRequest(e);t.fire("dataRequest",o),s.sendRequest(o)},_typeAhead:function(t,n){var r=this;if(!r.get("typeAhead")||o.isKey(r._keyCode,g))return;var i=e.Node.getDOMNode(r.inputNode);if(i.setSelectionRange||i.createTextRange)r._typeAheadDelayId=setTimeout(function(){var e=i.value,s=e.length;r._updateValue(t);var o=i.value.length;r.inputNode.selectText(s,o);var u=i.value.substr(s,o);r.fire("typeAhead",n,u)},r.get("typeAheadDelay"))},_currentQuery:null,_initInputValue:null,_keyCode:null,_lastValue:null,_pastSelections:"",_typeAheadDelayId:-1},e.InputTextControl=T},"3.1.0-deprecated.66",{requires:["aui-base-deprecated","aui-datasource-control-base-deprecated","aui-form-combobox-deprecated"]});
