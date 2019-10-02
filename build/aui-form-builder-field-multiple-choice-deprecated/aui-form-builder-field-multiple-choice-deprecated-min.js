YUI.add("aui-form-builder-field-multiple-choice-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=e.Array,s=e.Escape,o=e.getClassName,u=function(e){var t={};return i.each(e,function(e){t[e.value]=e.label}),t},a=o("form-builder","field"),f=o("form-builder","options","editor","hidden"),l=e.Component.create({NAME:"form-builder-options-editor",ATTRS:{editable:{setter:function(){return!1}}},EXTENDS:e.RadioCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+f+'"></div>',initializer:function(){var e=this;e.set("hideEditContainerOnSave",!1),e.after("render",function(){e.fire("edit")})},_handleSaveEvent:function(){var e=this;e.saveOptions(),l.superclass._handleSaveEvent.apply(this,arguments)}}}),c=e.Component.create({NAME:"form-builder-multiple-choice-field",ATTRS:{acceptChildren:{value:!1,readOnly:!0},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'},predefinedValue:{setter:function(e){return r(e)?e:[e]}}},UI_ATTRS:["acceptChildren","label","name","options","predefinedValue","showLabel"],CSS_PREFIX:a,EXTENDS:e.FormBuilderField,prototype:{initializer:function(){var t=this,n=t.get("options");t.predefinedValueEditor=new e.DropDownCellEditor({options:t._getPredefinedValuesOptions(n)})},getPropertyModel:function(){var t=this,n=t.get("options"),s=t.getStrings(),o=e.FormBuilderMultipleChoiceField.superclass.getPropertyModel.apply(t,arguments);return i.each(o,function(n,i,s){n.attributeName==="predefinedValue"&&(s[i]=e.merge(n,{editor:t.predefinedValueEditor,formatter:function(n){var i=t.predefinedValueEditor.get("options"),s=n.data.value;r(s)||(s=[s]);var o=e.Array.map(s,function(e){return i[e]});return o.join(", ")}}))}),o.push({attributeName:"options",editor:new l({editable:!0,on:{optionsChange:function(e){var n=t._normalizeValues(e.newVal);n=t._getPredefinedValuesOptions(n),t.predefinedValueEditor.set("options",n)}},options:u(n),inputFormatter:function(){var t=[];return e.each(this.get("options"),function(r,s){var o={label:r,value:s};i.each(n,function(t){t.value===s&&(o=e.merge(t,o))}),t.push(o)}),t}}),formatter:function(t){var n=[];return e.each(t.data.value,function(e){n.push(e.label)}),n.join(", ")},name:s.options}),o},_getPredefinedValuesOptions:function(e){var t={label:"",value:""};return u([t].concat(e))},_normalizeValues:function(t){return e.map(t,function(e,t){return{label:e,value:t}})},_uiSetOptions:function(t){var r=this,i=[];e.each(t,function(e){i.push(n.sub(r.get("optionTemplate"),{label:s.html(e.label),value:s.html(e.value)}))}),r.optionNodes=e.NodeList.create(i.join("")),r.get("templateNode").setContent(r.optionNodes),r._uiSetPredefinedValue(r.get("predefinedValue"))},_uiSetPredefinedValue:function(e){var t=this,n=t.optionNodes;if(!n)return;n.set("selected",!1),i.each(e,function(e){n.filter('[value="'+s.html(e)+'"]').set("selected",!0)})}}});e.FormBuilderMultipleChoiceField=c,e.FormBuilderField.types["multiple-choice"]=e.FormBuilderMultipleChoiceField},"3.1.0-deprecated.66",{requires:["aui-form-builder-field-deprecated"]});
