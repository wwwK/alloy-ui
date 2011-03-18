AUI.add('aui-event-base', function(A) {
var Lang = A.Lang,
	DOMEventFacade = A.DOMEventFacade,
	DOMEventFacadeProto = DOMEventFacade.prototype,

	KeyMap = A.namespace('Event.KeyMap'),

	STR_EMPTY = '';

var KeyMap = {
	BACKSPACE: 8,
	TAB: 9,
	NUM_CENTER: 12,

	ENTER: 13,
	RETURN: 13,

	SHIFT: 16,
	CTRL: 17,
	ALT: 18,

	PAUSE: 19,
	CAPS_LOCK: 20,
	ESC: 27,
	SPACE: 32,

	PAGE_UP: 33,
	PAGE_DOWN: 34,

	END: 35,
	HOME: 36,

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	PRINT_SCREEN: 44,
	INSERT: 45,
	DELETE: 46,

	ZERO: 48,
	ONE: 49,
	TWO: 50,
	THREE: 51,
	FOUR: 52,
	FIVE: 53,
	SIX: 54,
	SEVEN: 55,
	EIGHT: 56,
	NINE: 57,

	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,

	CONTEXT_MENU: 93,

	NUM_ZERO: 96,
	NUM_ONE: 97,
	NUM_TWO: 98,
	NUM_THREE: 99,
	NUM_FOUR: 100,
	NUM_FIVE: 101,
	NUM_SIX: 102,
	NUM_SEVEN: 103,
	NUM_EIGHT: 104,
	NUM_NINE: 105,

	NUM_MULTIPLY: 106,
	NUM_PLUS: 107,
	NUM_MINUS: 109,
	NUM_PERIOD: 110,
	NUM_DIVISION: 111,

	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,

	NUM_LOCK: 144,

	WIN_KEY: 224,
	WIN_IME: 229,

	hasModifier: function(event) {
		var instance = this;

		return event &&
			(event.ctrlKey ||
			event.altKey ||
			event.shiftKey ||
			event.metaKey);
	},

	isKey: function(keyCode, name) {
		var instance = this;

		name = (name && name.toUpperCase()) || STR_EMPTY;

		var key = instance[name];

		return key && key == keyCode;
	},

	isNavKey: function(keyCode) {
		var instance = this;

		var navRowKey = (keyCode >= instance.PAGE_UP && keyCode <= instance.DOWN);

		return navRowKey ||
			(keyCode == instance.ENTER) ||
			(keyCode == instance.TAB) ||
			(keyCode == instance.ESC);
	},

	isSpecialKey: function(keyCode, eventType) {
		var instance = this;

		var isCtrlPress = (eventType == 'keypress' && instance.ctrlKey);

		return isCtrlPress ||
			instance.isNavKey(keyCode) ||
			(keyCode == instance.BACKSPACE) ||
			(keyCode >= instance.SHIFT && keyCode <= instance.CAPS_LOCK) ||
			keyCode == instance.PRINT_SCREEN ||
			keyCode == instance.INSERT ||
			keyCode == instance.WIN_IME;
	}
};

A.mix(
	DOMEventFacadeProto,
	{
		hasModifier: function() {
			var instance = this;

			return KeyMap.hasModifier(instance);
		},

		isKey: function(name) {
			var instance = this;

			return KeyMap.isKey(instance.keyCode, name);
		},

		isNavKey: function() {
			var instance = this;

			return KeyMap.isNavKey(instance.keyCode);
		},

		isSpecialKey: function() {
			var instance = this;

			return KeyMap.isSpecialKey(instance.keyCode, instance.type);
		}
	}
);

A.Event.KeyMap = KeyMap;

}, '@VERSION@' ,{requires:['event']});
AUI.add('aui-event-input', function(A) {
/**
 * An object that encapsulates text changed events for textareas and input
 * element of type text and password. This event only occurs when the element
 * is focused.
 *
 * @module aui-event
 * @submodule aui-event-input
 *
 * @class AUI~event~input
 */

var	L = A.Lang,
	isFunction = L.isFunction,

	ACTIVE_ELEMENT = 'activeElement',
	OWNER_DOCUMENT = 'ownerDocument',

	UA = A.UA;

var evt = {
	/**
	 * This event fires when the value of the element changes, either as a result of
	 * a keystroke, or from an input event.
	 *
	 * @event input
	 * @param type {String} 'input'
	 * @param fn {Function} the callback function
	 * @param el {String|Node|etc} the element to bind (typically document)
	 * @param o {Object} optional context object
	 * @param args 0..n additional arguments that should be provided
	 * to the listener.
	 * @return {Event.Handle} the detach handle
	 */
	on: function(type, fn, el) {
		// priorize input event that supports copy & paste
		var etype = 'input';

		// WebKit before version 531 (3.0.182.2) did not support input events for textareas.
		// http://dev.chromium.org/developers/webkit-version-table
		// All Chrome versions supports input event
		// TODO: use UA.chrome when YUI 3 detects it
		if (!/chrome/i.test(UA.agent) && UA.webkit && UA.version.major <= 2) {
			etype = 'keypress';
		}
		else if (UA.ie) {
			// IE doesn't support input event, simulate it with propertychange
			etype = 'propertychange';
		}

		var handler = function(event) {
			var instance = this;
			var input = event.target;
			var originalEvent = event._event;

			// only trigger checkLength() on IE when propertychange happens on the value attribute
			if (event.type == 'propertychange') {
				if (originalEvent && (originalEvent.propertyName != 'value')) {
					return false; // NOTE: return
				}
			}

			var focused = (input.get(OWNER_DOCUMENT).get(ACTIVE_ELEMENT) == input);

			if (focused && isFunction(fn)) {
				fn.apply(instance, arguments);
			}
		};

		return A.Event.attach(etype, handler, el);
	}
};

A.Env.evt.plugins.input = evt;

if (A.Node) {
	/**
	 * A.Node.DOM_EVENTS.input event.
	 *
	 * @property A.Node.DOM_EVENTS.input
	 * @type Event.Handle
	 * @static
	 */
	A.Node.DOM_EVENTS.input = evt;
}

/**
 * @method void();
 */

}, '@VERSION@' ,{requires:['aui-base']});


AUI.add('aui-event', function(A){}, '@VERSION@' ,{use:['aui-event-base','aui-event-input'], skinnable:false});

