if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-widget-cssclass/aui-widget-cssclass.js']) {
   __coverage__['build/aui-widget-cssclass/aui-widget-cssclass.js'] = {"path":"build/aui-widget-cssclass/aui-widget-cssclass.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"WidgetCssClass","line":17,"loc":{"start":{"line":17,"column":0},"end":{"line":17,"column":26}}},"3":{"name":"(anonymous_3)","line":55,"loc":{"start":{"line":55,"column":17},"end":{"line":55,"column":28}}},"4":{"name":"(anonymous_4)","line":70,"loc":{"start":{"line":70,"column":26},"end":{"line":70,"column":42}}},"5":{"name":"(anonymous_5)","line":93,"loc":{"start":{"line":93,"column":20},"end":{"line":93,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":107,"column":57}},"2":{"start":{"line":17,"column":0},"end":{"line":17,"column":28}},"3":{"start":{"line":27,"column":0},"end":{"line":35,"column":2}},"4":{"start":{"line":45,"column":0},"end":{"line":45,"column":53}},"5":{"start":{"line":47,"column":0},"end":{"line":102,"column":2}},"6":{"start":{"line":56,"column":8},"end":{"line":56,"column":28}},"7":{"start":{"line":58,"column":8},"end":{"line":58,"column":58}},"8":{"start":{"line":59,"column":8},"end":{"line":59,"column":72}},"9":{"start":{"line":71,"column":8},"end":{"line":72,"column":20}},"10":{"start":{"line":74,"column":8},"end":{"line":74,"column":32}},"11":{"start":{"line":76,"column":8},"end":{"line":80,"column":9}},"12":{"start":{"line":77,"column":12},"end":{"line":77,"column":61}},"13":{"start":{"line":78,"column":12},"end":{"line":79,"column":67}},"14":{"start":{"line":82,"column":8},"end":{"line":82,"column":46}},"15":{"start":{"line":94,"column":8},"end":{"line":94,"column":28}},"16":{"start":{"line":96,"column":8},"end":{"line":100,"column":9}},"17":{"start":{"line":97,"column":12},"end":{"line":97,"column":54}},"18":{"start":{"line":98,"column":12},"end":{"line":99,"column":63}},"19":{"start":{"line":104,"column":0},"end":{"line":104,"column":34}}},"branchMap":{"1":{"line":76,"type":"if","locations":[{"start":{"line":76,"column":8},"end":{"line":76,"column":8}},{"start":{"line":76,"column":8},"end":{"line":76,"column":8}}]},"2":{"line":96,"type":"if","locations":[{"start":{"line":96,"column":8},"end":{"line":96,"column":8}},{"start":{"line":96,"column":8},"end":{"line":96,"column":8}}]}},"code":["(function () { YUI.add('aui-widget-cssclass', function (A, NAME) {","","/**"," * Provides standard module support for cssClass attribute through an extension."," *"," * @module aui-widget-cssclass"," */","","/**"," * Widget extension, which can be used to add cssClass support to the"," * base Widget class, through the [Base.build](Base.html#method_build) method."," *"," * @class A.WidgetCssClass"," * @param {Object} The user configuration object"," */","","function WidgetCssClass() {}","","/**"," * Static property used to define the default attribute"," * configuration for the Component."," *"," * @property ATTRS"," * @type Object"," * @static"," */","WidgetCssClass.ATTRS = {","    /**","     * CSS class to be automatically added to the `boundingBox`.","     *","     * @attribute cssClass","     * @type String","     */","    cssClass: {}","};","","/**"," * Static property used to define the default suffix for cssClass attribute"," * value applied on `contentBox` node."," *"," * @property CSS_CLASS_CONTENT_SUFFIX"," * @type String"," * @static"," */","WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX = '-content';","","WidgetCssClass.prototype = {","    /**","     * Construction logic executed during Component instantiation. Lifecycle.","     *","     * @method initializer","     * @param {Object} config","     * @protected","     */","    initializer: function() {","        var instance = this;","","        instance._uiSetCssClass(instance.get('cssClass'));","        instance.after('cssClassChange', instance._afterCssClassChange);","    },","","    /**","     * Fires after the value of the [cssClass](Component.html#attr_cssClass)","     * attribute change.","     *","     * @method _afterCssClassChange","     * @param {EventFacade} event","     * @protected","     */","    _afterCssClassChange: function(event) {","        var instance = this,","            prevVal;","","        prevVal = event.prevVal;","","        if (prevVal) {","            instance.get('boundingBox').removeClass(prevVal);","            instance.get('contentBox').removeClass(","                prevVal + WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX);","        }","","        instance._uiSetCssClass(event.newVal);","    },","","    /**","     * Applies the CSS classes to the `boundingBox` and `contentBox`.","     *","     * @method _uiSetCssClass","     * @protected","     * @param {String} newVal","     * @param {String} prevVal","     */","    _uiSetCssClass: function(val) {","        var instance = this;","","        if (val) {","            instance.get('boundingBox').addClass(val);","            instance.get('contentBox').addClass(","                val + WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX);","        }","    }","};","","A.WidgetCssClass = WidgetCssClass;","","","}, '3.1.0-deprecated.66', {\"requires\": [\"widget-base\"]});","","}());"]};
}
var __cov_3YgHg8lJBTnUHH0gxBkt8w = __coverage__['build/aui-widget-cssclass/aui-widget-cssclass.js'];
__cov_3YgHg8lJBTnUHH0gxBkt8w.s['1']++;YUI.add('aui-widget-cssclass',function(A,NAME){__cov_3YgHg8lJBTnUHH0gxBkt8w.f['1']++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['2']++;function WidgetCssClass(){__cov_3YgHg8lJBTnUHH0gxBkt8w.f['2']++;}__cov_3YgHg8lJBTnUHH0gxBkt8w.s['3']++;WidgetCssClass.ATTRS={cssClass:{}};__cov_3YgHg8lJBTnUHH0gxBkt8w.s['4']++;WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX='-content';__cov_3YgHg8lJBTnUHH0gxBkt8w.s['5']++;WidgetCssClass.prototype={initializer:function(){__cov_3YgHg8lJBTnUHH0gxBkt8w.f['3']++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['6']++;var instance=this;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['7']++;instance._uiSetCssClass(instance.get('cssClass'));__cov_3YgHg8lJBTnUHH0gxBkt8w.s['8']++;instance.after('cssClassChange',instance._afterCssClassChange);},_afterCssClassChange:function(event){__cov_3YgHg8lJBTnUHH0gxBkt8w.f['4']++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['9']++;var instance=this,prevVal;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['10']++;prevVal=event.prevVal;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['11']++;if(prevVal){__cov_3YgHg8lJBTnUHH0gxBkt8w.b['1'][0]++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['12']++;instance.get('boundingBox').removeClass(prevVal);__cov_3YgHg8lJBTnUHH0gxBkt8w.s['13']++;instance.get('contentBox').removeClass(prevVal+WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX);}else{__cov_3YgHg8lJBTnUHH0gxBkt8w.b['1'][1]++;}__cov_3YgHg8lJBTnUHH0gxBkt8w.s['14']++;instance._uiSetCssClass(event.newVal);},_uiSetCssClass:function(val){__cov_3YgHg8lJBTnUHH0gxBkt8w.f['5']++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['15']++;var instance=this;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['16']++;if(val){__cov_3YgHg8lJBTnUHH0gxBkt8w.b['2'][0]++;__cov_3YgHg8lJBTnUHH0gxBkt8w.s['17']++;instance.get('boundingBox').addClass(val);__cov_3YgHg8lJBTnUHH0gxBkt8w.s['18']++;instance.get('contentBox').addClass(val+WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX);}else{__cov_3YgHg8lJBTnUHH0gxBkt8w.b['2'][1]++;}}};__cov_3YgHg8lJBTnUHH0gxBkt8w.s['19']++;A.WidgetCssClass=WidgetCssClass;},'3.1.0-deprecated.66',{'requires':['widget-base']});
