webpackHotUpdate("static\\development\\pages\\recibo.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/recibo.js":
/*!*************************!*\
  !*** ./pages/recibo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\recibo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Recibo = function Recibo() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var m = router.query.m;
  var p = router.query.p;
  var paypal = "https://paypal.me/2metadigital/".concat(p);
  var id = router.query.id;
  var factura = "https://app.hubspot.com/quotes/".concat(id);
  var header = {
    background: 'var(--primary)'
  };
  var button = {
    '&:hover': {
      background: 'var(--secondary)'
    }
  };
  var bg = {
    background: 'var(--primary)',
    color: 'white',
    padding: '0 10px'
  };
  var line = {
    lineHeight: 1.5
  };
  var title = {
    lineHeight: 1.5,
    color: 'var(--secondary)',
    fontWeight: 600
  };
  var step = {
    borderLeft: '3px solid'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.body.style.setProperty('--primary', '#425b76');
    document.body.style.setProperty('--secondary', '#33475b');
    document.body.style.setProperty('--light', '#13B8EA');
    document.body.style.setProperty('--dark', '#4E56F3');
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Presupuesto de Proyecto para ", m, " - 2MetaDigital"), __jsx("meta", {
    description: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    content: "",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav1.png",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta1.png",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: header,
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "",
    src: "/assets/images/logo/logo4neg.png",
    className: "jsx-2499493112" + " " + "img-fluid p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })))), __jsx("div", {
    style: header,
    className: "jsx-2499493112" + " " + "m-b-20 p-t-100 p-b-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: line,
    className: "jsx-2499493112" + " " + "m-0 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, "Presupuesto de proyecto")), __jsx("p", {
    style: line,
    className: "jsx-2499493112" + " " + "text-white m-b-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Para: ", __jsx("u", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 65
    }
  }, m)), __jsx("p", {
    style: line,
    className: "jsx-2499493112" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Id: ", id)))), __jsx("div", {
    className: "jsx-2499493112" + " " + "m-t-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2499493112" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 48
    }
  }, "Paso 1")), __jsx("h2", {
    style: title,
    className: "jsx-2499493112" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Presupuesto"), __jsx("p", {
    style: line,
    className: "jsx-2499493112" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Accede a los detalles del presupuesto."), __jsx("a", {
    style: button,
    href: factura,
    target: "_blank",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Ver Presupuesto \u2192")))), __jsx("div", {
    className: "jsx-2499493112" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2499493112" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 48
    }
  }, "Paso 2")), __jsx("h2", {
    style: title,
    className: "jsx-2499493112" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Primer pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2499493112" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "El primera mitad del pago se realiza para empezar con el trabajo."), __jsx("a", {
    style: button,
    href: paypal,
    target: "_blank",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    className: "jsx-2499493112" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2499493112" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 48
    }
  }, "Paso 3")), __jsx("h2", {
    style: title,
    className: "jsx-2499493112" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Segundo pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2499493112" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "El segunda mitad del pago se realiza cuando trabajo est\xE1 completo."), __jsx("a", {
    style: button,
    href: paypal,
    target: "_blank",
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    style: header,
    className: "jsx-2499493112" + " " + "mt-5 pt-3 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://wa.me/541122505698",
    target: "_blank",
    className: "jsx-2499493112" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2499493112",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 89
    }
  }, "Contacto")), __jsx("span", {
    className: "jsx-2499493112" + " " + "text-white d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Copyright 2022 - 2MetaDigital")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2499493112",
    __self: _this
  }, ".button.jsx-2499493112{background:'var(--primary)', color:'white', padding:'1rem 2rem', border-radius:2, display:'block', text-decoration:'underline',;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hrQixBQVNRLGdJQUFDIiwiZmlsZSI6IkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge0NvbnRhaW5lciwgQ29sfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFJlY2libyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbSA9IHJvdXRlci5xdWVyeS5tO1xyXG4gIGNvbnN0IHAgPSByb3V0ZXIucXVlcnkucDtcclxuICBjb25zdCBwYXlwYWwgPSBgaHR0cHM6Ly9wYXlwYWwubWUvMm1ldGFkaWdpdGFsLyR7cH1gXHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgY29uc3QgZmFjdHVyYSA9IGBodHRwczovL2FwcC5odWJzcG90LmNvbS9xdW90ZXMvJHtpZH1gXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHtcclxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1wcmltYXJ5KSdcclxuICB9XHJcbiAgY29uc3QgYnV0dG9uID0ge1xyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1zZWNvbmRhcnkpJyxcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYmcgPSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tcHJpbWFyeSknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwYWRkaW5nOiAnMCAxMHB4J1xyXG4gIH1cclxuICBjb25zdCBsaW5lID0ge1xyXG4gICAgbGluZUhlaWdodDogMS41XHJcbiAgfVxyXG4gIGNvbnN0IHRpdGxlID0ge1xyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJyxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICB9XHJcbiAgY29uc3Qgc3RlcCA9IHtcclxuICAgIGJvcmRlckxlZnQ6ICczcHggc29saWQnXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyM0MjViNzYnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnknLCAnIzMzNDc1YicpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLWxpZ2h0JywgJyMxM0I4RUEnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kYXJrJywgJyM0RTU2RjMnKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlByZXN1cHVlc3RvIGRlIFByb3llY3RvIHBhcmEge219IC0gMk1ldGFEaWdpdGFsPC90aXRsZT5cclxuXHJcbiAgICAgICAgICA8bWV0YSBkZXNjcmlwdGlvbj0nSGFjZW1vcyBww6FnaW5hcyB3ZWIgZGUgYWx0byBpbXBhY3RvIGNvbiBkaXNlw7FvcyBwcm9mZXNpb25hbGVzIHJlZGFjY2lvbmVzIHBlcnN1YXNpdmFzIGVuZm9jYWRhcyBlbiB2ZW50YXMgcXVlIHRyYW5zbWl0ZW4gZWwgdmFsb3IgcmVhbCBkZSB0dSBwcm9kdWN0byBvIHNlcnZpY2lvLicgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIYWNlbW9zIHDDoWdpbmFzIHdlYiBkZSBhbHRvIGltcGFjdG8gY29uIGRpc2XDsW9zIHByb2Zlc2lvbmFsZXMgcmVkYWNjaW9uZXMgcGVyc3Vhc2l2YXMgZW5mb2NhZGFzIGVuIHZlbnRhcyBxdWUgdHJhbnNtaXRlbiBlbCB2YWxvciByZWFsIGRlIHR1IHByb2R1Y3RvIG8gc2VydmljaW8uXCIgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2ZhdjEucG5nXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL21ldGExLnBuZ1wiIC8+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBwLTJcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ280bmVnLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1iLTIwIHAtdC0xMDAgcC1iLTEwMFwiIHN0eWxlPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS0wIG0tYi0yMFwiIHN0eWxlPXtsaW5lfT48Yj5QcmVzdXB1ZXN0byBkZSBwcm95ZWN0bzwvYj48L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG0tYi0xMFwiIHN0eWxlPXtsaW5lfT5QYXJhOiA8dT57bX08L3U+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9e2xpbmV9PklkOiB7aWR9PC9wPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tdC00MFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInIHN0eWxlPXtzdGVwfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXVwcGVyY2FzZVwiPjx1PlBhc28gMTwvdT48L2g0PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS0wIG1iLTNcIiBzdHlsZT17dGl0bGV9PlByZXN1cHVlc3RvPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iLTEwIG1iLTRcIiBzdHlsZT17bGluZX0+QWNjZWRlIGEgbG9zIGRldGFsbGVzIGRlbCBwcmVzdXB1ZXN0by48L3A+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXtidXR0b259IGhyZWY9e2ZhY3R1cmF9IHRhcmdldD1cIl9ibGFua1wiPlZlciBQcmVzdXB1ZXN0byDihpI8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtLWItMjBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJyBzdHlsZT17c3RlcH0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTAgdGV4dC11cHBlcmNhc2VcIj48dT5QYXNvIDI8L3U+PC9oND5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMCBtYi0zXCIgc3R5bGU9e3RpdGxlfT5QcmltZXIgcGFnbyAoNTAlKTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0xMCBtYi00XCIgc3R5bGU9e2xpbmV9PkVsIHByaW1lcmEgbWl0YWQgZGVsIHBhZ28gc2UgcmVhbGl6YSBwYXJhIGVtcGV6YXIgY29uIGVsIHRyYWJham8uPC9wPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17YnV0dG9ufSBocmVmPXtwYXlwYWx9IHRhcmdldD1cIl9ibGFua1wiPlBhZ2FyIOKGkjwvYT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG0tYi0yMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInIHN0eWxlPXtzdGVwfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXVwcGVyY2FzZVwiPjx1PlBhc28gMzwvdT48L2g0PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS0wIG1iLTNcIiBzdHlsZT17dGl0bGV9PlNlZ3VuZG8gcGFnbyAoNTAlKTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0xMCBtYi00XCIgc3R5bGU9e2xpbmV9PkVsIHNlZ3VuZGEgbWl0YWQgZGVsIHBhZ28gc2UgcmVhbGl6YSBjdWFuZG8gdHJhYmFqbyBlc3TDoSBjb21wbGV0by48L3A+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXtidXR0b259IGhyZWY9e3BheXBhbH0gdGFyZ2V0PVwiX2JsYW5rXCI+UGFnYXIg4oaSPC9hPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcHQtMyBwYi0yXCIgc3R5bGU9e2hlYWRlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMic+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81NDExMjI1MDU2OThcIiB0YXJnZXQ9XCJfYmxhbmtcIj48dT5Db250YWN0bzwvdT48L2E+IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGQtYmxvY2tcIj5Db3B5cmlnaHQgMjAyMiAtIDJNZXRhRGlnaXRhbDwvc3Bhbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLXByaW1hcnkpJyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzFyZW0gMnJlbScsXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjaWJvXHJcbiJdfQ== */\n/*@ sourceURL=F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\recibo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Recibo);

/***/ })

})
//# sourceMappingURL=recibo.js.c928126b4fca22029575.hot-update.js.map