YUI.add("aui-datatable-dropdown-cell-editor",function(e,t){var n=e.getClassName("form","control"),r=e.getClassName("celleditor","element"),i;i=e.Component.create({NAME:"dropDownCellEditor",ATTRS:{multiple:{value:!1,validator:e.Lang.isBoolean}},EXTENDS:e.BaseOptionsCellEditor,UI_ATTRS:["multiple"],prototype:{ELEMENT_TEMPLATE:'<select class="'+[r,n].join(" ")+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){var e=this;return e.get("multiple")?e._getSelectedOptions().get("value"):e.elements.get("value")},_syncElementsFocus:function(){var e=this;e.elements.focus()},_uiSetMultiple:function(e){var t=this,n=t.elements;e?n.setAttribute("multiple","multiple"):n.removeAttribute("multiple")}}}),e.DropDownCellEditor=i},"3.1.0-deprecated.66",{requires:["aui-datatable-base-options-cell-editor"]});
