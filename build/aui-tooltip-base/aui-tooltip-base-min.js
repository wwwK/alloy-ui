YUI.add("aui-tooltip-base",function(e,t){var n=e.Lang,r=e.getClassName,i=r("tooltip-arrow"),s=r("tooltip-inner");e.Tooltip=e.Base.create("tooltip",e.Widget,[e.WidgetCssClass,e.WidgetPosition,e.WidgetStdMod,e.WidgetToggle,e.WidgetAutohide,e.WidgetPositionAlign,e.WidgetPositionAlignSuggestion,e.WidgetPositionConstrain,e.WidgetStack,e.WidgetTransition,e.WidgetTrigger],{initializer:function(){var t=this,n=t.get("useARIA");t._eventHandles=[e.after(t._afterUiSetTrigger,t,"_uiSetTrigger"),e.on("scroll",e.debounce(t._onScroll,100,t)),e.on("windowresize",e.bind(t._onResize,t))],n&&t.plug(e.Plugin.Aria)},destructor:function(){(new e.EventHandle(this._eventHandles)).detach()},renderUI:function(){var t=this,n=t.get("boundingBox"),r=t.get("contentBox");r.addClass(s),n.append(e.Tooltip.TEMPLATES.arrow)},bindUI:function(){var t=this,n=t.get("trigger");n&&n.on("hover",e.bind(t._onBoundingBoxMouseenter,t),e.bind(t._onBoundingBoxMouseleave,t)),t.get("boundingBox").on("hover",e.bind(t._onBoundingBoxMouseenter,t),e.bind(t._onBoundingBoxMouseleave,t))},_afterUiSetTrigger:function(e){this._loadTooltipContentFromTitle(),this.suggestAlignment(e)},_borrowTitleAttribute:function(){var e=this.get("trigger"),t=e.getAttribute("title");t&&e.setAttribute("data-title",t).removeAttribute("title")},_loadTooltipContentFromTitle:function(){var t=this,n=t.get("describedby"),r=t.get("trigger"),i=t.get("useARIA");if(r){t._borrowTitleAttribute();var s=r.getAttribute("data-title");if(s){t.setStdModContent(e.WidgetStdMod.BODY,s);if(i){var o=t.getStdModNode(e.WidgetStdMod.BODY);if(o){var u=e.guid()+r.get("id");o.set("id",u),t.aria.setAttribute("describedby",u,r)}}}}},_onBoundingBoxMouseenter:function(){var e=this,t=e.get("boundingBox"),n=e.get("useARIA");e.show(),n&&e.aria.setAttribute("hidden",!1,t)},_onBoundingBoxMouseleave:function(){var e=this,t=e.get("boundingBox"),n=e.get("useARIA");e.hide(),n&&e.aria.setAttribute("hidden",!0,t)},_onResize:function(){this.suggestAlignment(this.get("trigger"))},_onScroll:function(){this.suggestAlignment(this.get("trigger"))},_setStdModSection:function(t){var r=this.get("formatter");return n.isString(t)&&(r&&(t=r.call(this,t)),this.get("html")||(t=e.Escape.html(t))),t},_uiSetVisible:function(e){var t=this,n=t.get("boundingBox");t._widgetUiSetVisible(e),n.setStyle("opacity",e?t.get("opacity"):0),e&&t._loadTooltipContentFromTitle()},_widgetUiSetVisible:e.Widget.prototype._uiSetVisible},{CSS_PREFIX:r("tooltip"),ATTRS:{animated:{value:!0},bodyContent:{setter:"_setStdModSection"},constrain:{value:!0},footerContent:{setter:"_setStdModSection"},formatter:{validator:e.Lang.isFunction},headerContent:{setter:"_setStdModSection"},html:{value:!1,validator:n.isBoolean},opacity:{value:.8},triggerShowEvent:{validator:n.isString,value:"mouseenter"},useARIA:{validator:n.isBoolean,value:!0,writeOnce:"initOnly"},zIndex:{value:1030}},TEMPLATES:{arrow:'<div class="'+i+'"></div>'}})},"3.1.0-deprecated.66",{requires:["aui-aria","aui-classnamemanager","aui-component","aui-debounce","aui-node-base","aui-widget-cssclass","aui-widget-toggle","aui-widget-transition","aui-widget-trigger","aui-widget-position-align-suggestion","event-hover","event-resize","escape","widget","widget-autohide","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0});
