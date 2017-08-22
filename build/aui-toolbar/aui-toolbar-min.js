YUI.add("aui-toolbar",function(e,t){var n=e.Lang.isFunction,r=e.getClassName("btn"),i=e.getClassName("btn","default"),s=e.getClassName("btn","group"),o=e.getClassName("btn","group","checkbox"),u=e.getClassName("btn","group","radio"),a=e.getClassName("btn","group","vertical"),f=e.getClassName("btn","toolbar","button");e.Toolbar=e.Component.create({NAME:"btn-toolbar",ATTRS:{children:{validator:e.Lang.isArray},toolbarRenderer:{valueFn:function(){return new e.ToolbarRenderer}}},UI_ATTRS:["children"],isSupportedWidget:function(t){return e.instanceOf(t,e.Button)||e.instanceOf(t,e.ToggleButton)||e.instanceOf(t,e.ButtonGroup)},prototype:{CONTENT_TEMPLATE:null,TEMPLATES:{button:'<button class="aui-btn">{content}</button>',icon:'<span class="{cssClass}"></span>',group:'<div class="aui-btn-group {cssClass}"></div>'},bindUI:function(){var e=this.get("boundingBox");e.delegate(["click","mousemove","focus"],this._onUserInitInteraction,"."+f+", ."+r,this)},add:function(t,n){var r=this.get("boundingBox"),i=this.get("toolbarRenderer");r.insert(i.render(e.Array(t)),n)},clear:function(){var e=this.get("boundingBox");e.get("children").remove()},getEnclosingWidget:function(t){return e.instanceOf(t,e.EventFacade)&&(t=t.domEvent?t.domEvent.target:t.target),e.Widget.getByNode(t)},item:function(t){var n=this.get("boundingBox").get("children").item(t),r;return this._initEnclosingWidgetIfNeeded(n),r=this.getEnclosingWidget(n),e.Toolbar.isSupportedWidget(r)?r:n},remove:function(e){var t=this.get("boundingBox");return t.get("children").item(e).remove()},_initEnclosingWidgetIfNeeded:function(t,n){var i,l,c,h,p,d;if(!t||t.getData("enclosingWidgetInitialized"))return;t.setData("enclosingWidgetInitialized",!0),l=e.Widget.getByNode(t),c=e.instanceOf(l,e.Button),h=e.instanceOf(l,e.ButtonGroup);if(c||h)return;i=t.ancestor("."+f+", ."+r,!0),i&&(e.Button.hasWidgetLazyConstructorData(t)?(new e.Button(e.Button.getWidgetLazyConstructorFromNodeData(t)),e.Button.setWidgetLazyConstructorNodeData(t,null)):t.plug(e.Plugin.Button)),p=t.ancestor("."+s+", "+a,!0),p&&(p.hasClass(o)?d="checkbox":p.hasClass(u)&&(d="radio"),d&&new e.ButtonGroup({boundingBox:p,type:d,render:!0})),n&&n.type==="focus"&&t.focus()},_onUserInitInteraction:function(e){var t=e.currentTarget;this._initEnclosingWidgetIfNeeded(t,e)},_uiSetChildren:function(e){if(!e)return;this.clear(),this.add(e)}}});var l=function(){};l.prototype={TEMPLATES:{button:e.Button.prototype.TEMPLATE,group:'<div class="{cssClass}"></div>',icon:'<span class="{cssClass}"></span>'},RENDERER:{button:function(t){var n,s,o,u,a,l=t.value;a=l.domType||"button";if(e.instanceOf(l,e.Button)||e.instanceOf(l,e.ToggleButton))return l.get("boundingBox");if(e.UA.mobile&&e.UA.touchEnabled)return n=(new e.Button(l)).render(),l.title&&n.get("boundingBox").setAttribute("title",l.title),n.get("boundingBox");s=e.one(l.boundingBox||l.srcNode);if(s)try{s.setAttribute("type",a)}catch(c){}else s=e.Node.create(e.ButtonExt.getTypedButtonTemplate(this.TEMPLATES.button,a));return o=[f,l.cssClass],l.discardDefaultButtonCssClasses||o.push(r,i),s.addClass(o.join(" ")),l.id&&s.setAttribute("id",l.id),l.labelHTML&&s.append(l.labelHTML),l.label&&s.append(l.label),l.icon&&(u=e.Lang.sub(this.TEMPLATES.icon,{cssClass:l.icon}),e.Button.syncIconUI(s,u,l.iconAlign)),l.title&&s.setAttribute("title",l.title),e.Button.setWidgetLazyConstructorNodeData(s,l),s},group:function(t){var n,r=this,i=t.value,f,l=t.groupType,c=t.orientation,h=[];return e.instanceOf(i,e.ButtonGroup)?i.get("boundingBox"):(l==="checkbox"?h.push(o):l==="radio"&&h.push(u),c==="vertical"?h.push(a):h.push(s),f=e.Node.create(e.Lang.sub(r.TEMPLATES.group,{cssClass:h.join(" ")})),e.Array.each(i,function(t,s){n=r.renderNode(t),f.appendChild(n),e.Toolbar.isSupportedWidget(t)||e.Button.setWidgetLazyConstructorNodeData(n,i[s])}),f)}},render:function(t){var n,r=this;if(!t)return;return n=e.one(e.config.doc).invoke("createDocumentFragment"),e.Array.each(t,function(e){n.appendChild(r.renderNode(e))}),n},renderNode:function(t){var r,i;if(e.Toolbar.isSupportedWidget(t))return t.render().get("boundingBox");r=this._getChildRenderHints(t),i=this.RENDERER[r.renderer];if(n(i))return i.call(this,r)},_getChildRenderHints:function(t){var n=null,r="normal",i;return e.instanceOf(t,e.Button)?i="button":e.instanceOf(t,e.ButtonGroup)?i="group":e.Lang.isArray(t)?(i="group",n=e.Lang.isString(t[0])?t.shift():null,r=e.Lang.isString(t[0])?t.shift():"normal"):i="button",{groupType:n,orientation:r,renderer:i,value:t}}},e.ToolbarRenderer=l},"3.0.3-deprecated.62",{requires:["arraylist","arraylist-add","aui-component","aui-button-core"]});
