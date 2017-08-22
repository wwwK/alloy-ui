YUI.add("aui-options-data-editor",function(e,t){var n=e.getClassName("options","data","editor"),r=e.getClassName("options","data","editor","add"),i=e.getClassName("options","data","editor","option"),s=e.getClassName("options","data","editor","option","handle"),o=e.getClassName("options","data","editor","option","remove"),u=e.getClassName("options","data","editor","option","text"),a=e.getClassName("options","data","editor","options"),f="ui";e.OptionsDataEditor=e.Base.create("options-data-editor",e.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+n+'">'+'<div class="'+a+'"></div>'+'<button class="'+r+'">{addOption}</button></div>',TPL_EDITOR_OPTION:'<div class="'+i+'">'+'<span class="'+s+' glyphicon glyphicon-sort"></span>'+'<input class="'+u+' type="text"" value="{text}"></input>'+'<button class="'+o+'">X</button></div>',initializer:function(){var t=this.get("node");this._uiSetEditedValue(this.get("editedValue")),t.one("."+r).after("click",e.bind(this._afterClickAddButton,this)),t.delegate("click",e.bind(this._onClickRemoveButton,this),"."+o),t.delegate("valuechange",e.bind(this._onValueChange,this),"."+u),this.after("editedValueChange",this._afterEditedValueChange),this._setUpDrag()},isEmpty:function(){return!this.get("editedValue").length},isValid:function(){var t=this,n,r=this.get("editedValue"),i=r.length;if(e.OptionsDataEditor.superclass.isValid.call(t)){for(n=0;n<i;n++)if(!e.Lang.trim(r[n]))return!1;return!0}return!1},_afterClickAddButton:function(){var e=this.get("editedValue"),t=this.get("node").one("."+a);t.append(this._createOptionNode("")),e.push(""),this.set("editedValue",e,{src:f})},_afterEditedValueChange:function(e){e.src!==f&&this._uiSetEditedValue(this.get("editedValue"))},_createOptionNode:function(t){var n=e.Node.create(e.Lang.sub(this.TPL_EDITOR_OPTION,{text:t}));return n.plug(e.Plugin.Drop),n},_getOptionNodeIndex:function(e){var t=e.ancestor("."+i,!0),n=this.get("node").all("."+i);return n.indexOf(t)},_moveItem:function(e,t){var n=this.get("editedValue"),r=n[e];n.splice(e,1),e<t&&t--,n.splice(t,0,r),this.set("editedValue",n,{src:f})},_onClickRemoveButton:function(e){var t=this.get("editedValue"),n=this._getOptionNodeIndex(e.currentTarget),r=e.currentTarget.ancestor("."+i);this._removeOptionNode(r),t.splice(n,1),this.set("editedValue",t,{src:f})},_onValueChange:function(e){var t=this.get("editedValue"),n=this._getOptionNodeIndex(e.currentTarget);t[n]=e.currentTarget.get("value"),this.set("editedValue",t,{src:f})},_onDrag:function(e){e.target.lastXY[1]<this._lastY?this._draggingUp=!0:this._draggingUp=!1,this._lastY=e.target.lastXY[1]},_onDragOver:function(e){var t=e.drag.get("node"),n=e.drop.get("node"),r=this._getOptionNodeIndex(t),i;this._draggingUp||(n=n.get("nextSibling")),i=this._getOptionNodeIndex(n),e.drop.get("node").get("parentNode").insertBefore(t,n),e.drop.sizeShim(),this._moveItem(r,i)},_removeOptionNode:function(t){t.unplug(e.Plugin.Drop),t.remove()},_setUpDrag:function(){this._delegateDrag=new e.DD.Delegate({container:this.get("node"),handles:["."+s],nodes:"."+i}),this._delegateDrag.dd.plug(e.Plugin.DDConstrained,{stickY:!0}),this._delegateDrag.dd.plug(e.Plugin.DDProxy,{cloneNode:!0,moveOnEnd:!1}),this._delegateDrag.after("drag:drag",e.bind(this._onDrag,this)),this._delegateDrag.after("drag:over",e.bind(this._onDragOver,this))},_uiSetEditedValue:function(t){var n=this,r=this.get("node").one("."+a);r.all("."+i).each(function(e){n._removeOptionNode(e)}),e.Array.each(t,function(e){r.append(n._createOptionNode(e))})}},{ATTRS:{editedValue:{value:[]},originalValue:{value:[]},strings:{value:{addOption:"Tap to add an option",required:"REQUIRED"}}}})},"3.0.3-deprecated.62",{requires:["aui-data-editor","dd-constrain","dd-delegate","dd-drop-plugin","dd-proxy","event-valuechange","node-event-delegate"],skinnable:!0});
