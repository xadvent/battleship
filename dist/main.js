/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-colour: 0;
    --secondary-colour: 0;
    --background-color: 0;
}

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html,
body {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    gap: 20px;
}

#header {
    height: 50px;
    width: 100vw;
    border-bottom: 1px solid black;
}

#container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 50px;
}

#player {
    grid-column: 2;
}
#opponent {
    grid-column: 3;
}

#player, #opponent {
    justify-self: center;
    align-self: center;
}

#legend {
    height: 100px;
    display: flex;
    gap: 5vw;
}


.legend-info {
    height: 60px;
    display: grid;
    grid-template-columns: 50px 100px;
    column-gap: 10px;
}

.legend-info>img {
    height: 50px;
    width: auto;
}

#player, #opponent {
    max-width: 500px;
    max-height: 500px;
    min-width: 500px;
    min-height: 500px;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
    background-color: rgb(37, 108, 201);
    position: relative;
    top: -25px;
}

#player>div, #opponent>div {
    background-color: rgb(92, 132, 196);

}

#player>div:hover, #opponent>div:hover {
    background-color: rgb(149, 175, 216);
    scale: 1.08;
}

#player>div:active, #opponent>div:active {
    background-color: rgb(99, 116, 144);
    scale: 0.98;
}


#player>.player-ship.hit,
#opponent>.hit,
#player>.player-ship.hit:hover,
#opponent>.hit:hover {
    background-color: rgba(255, 0, 0, 0.673);
}

#player>.miss:hover,
#opponent>.miss:hover,
#player>.miss,
#opponent>.miss{
    background-color: rgba(146, 154, 153, 0.673);
}

#player>.player-ship {
    background-color: aqua;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,mJAAmJ;AACvJ;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,wCAAwC;AAC5C;;AAEA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,QAAQ;AACZ;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR,mCAAmC;IACnC,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,mCAAmC;;AAEvC;;AAEA;IACI,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf;;;AAGA;;;;IAII,wCAAwC;AAC5C;;AAEA;;;;IAII,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[":root {\n    --main-colour: 0;\n    --secondary-colour: 0;\n    --background-color: 0;\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    gap: 20px;\n}\n\n#header {\n    height: 50px;\n    width: 100vw;\n    border-bottom: 1px solid black;\n}\n\n#container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 50px 1fr 1fr 50px;\n}\n\n#player {\n    grid-column: 2;\n}\n#opponent {\n    grid-column: 3;\n}\n\n#player, #opponent {\n    justify-self: center;\n    align-self: center;\n}\n\n#legend {\n    height: 100px;\n    display: flex;\n    gap: 5vw;\n}\n\n\n.legend-info {\n    height: 60px;\n    display: grid;\n    grid-template-columns: 50px 100px;\n    column-gap: 10px;\n}\n\n.legend-info>img {\n    height: 50px;\n    width: auto;\n}\n\n#player, #opponent {\n    max-width: 500px;\n    max-height: 500px;\n    min-width: 500px;\n    min-height: 500px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    background-color: rgb(37, 108, 201);\n    position: relative;\n    top: -25px;\n}\n\n#player>div, #opponent>div {\n    background-color: rgb(92, 132, 196);\n\n}\n\n#player>div:hover, #opponent>div:hover {\n    background-color: rgb(149, 175, 216);\n    scale: 1.08;\n}\n\n#player>div:active, #opponent>div:active {\n    background-color: rgb(99, 116, 144);\n    scale: 0.98;\n}\n\n\n#player>.player-ship.hit,\n#opponent>.hit,\n#player>.player-ship.hit:hover,\n#opponent>.hit:hover {\n    background-color: rgba(255, 0, 0, 0.673);\n}\n\n#player>.miss:hover,\n#opponent>.miss:hover,\n#player>.miss,\n#opponent>.miss{\n    background-color: rgba(146, 154, 153, 0.673);\n}\n\n#player>.player-ship {\n    background-color: aqua;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/classes/Ship.js");
/* harmony import */ var _path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../path-finding/coordinates */ "./src/path-finding/coordinates.js");



class GameBoard {
    constructor(user) {
        this.user = user
        this.main = [];
        this.shots = [];
    }

    placeShip(startVector, endVector) {
        const fullCoordinates = fullShipCoordinates(startVector, endVector);
        const newShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](fullCoordinates);
        this.main.push(newShip);
        if(this.user == 'player') {
            fullCoordinates.forEach(location => {
                let square = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__.findSquare)(location, this.user)
                square.classList.add('player-ship')
            })
        }
    }

    receiveAttack(coordinates) {
        for (let ship of this.main) {
            if (ship.hit(coordinates)) {
                console.log('hit')
                break;
            }
        }
        this.shots.push(coordinates);
    }

    displayHits() {
        for (let ship of this.main) {
            for (let i = 0; i < ship.hits.length; i++) {
                if (ship.hits[i]) {
                    let square = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__.findSquare)(ship.coordinates[i], this.user);
                    square.classList.add('hit');
                }
            }
        }

        for (let shot of this.shots) {
            let square = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__.findSquare)(shot, this.user)
            if (!square.classList.contains('hit')) square.classList.add('miss')
        }

        if (this.allSunk()) {
            alert(this.user[0].toUpperCase() + this.user.substring(1) + ' has lost! All their ships have been sunk.')
            return true
        }
        return false
    }

    allSunk() {
        for (let ship of this.main) {
            if (!ship.hits.every(hit => hit == true)) {
                return false;
            }
        }
        return true;
    }
}

function fullShipCoordinates(start, end) {
    let coordinates = []

    const [x1, y1] = start;
    const [x2, y2] = [end[0], end[1]];

    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    const steps = Math.max(dx, dy);

    const xIncrement = (x2 - x1) / steps;
    const yIncrement = (y2 - y1) / steps;

    let [x, y] = [x1, y1];
    for (let i = 0; i <= steps; i++) {
        coordinates.push([x, y]);

        x += xIncrement;
        y += yIncrement;
    }

    return coordinates;
}

/***/ }),

/***/ "./src/classes/Ship.js":
/*!*****************************!*\
  !*** ./src/classes/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.hits = new Array(coordinates.length).fill(false);
    }

    hit(coordinate) {
        const index = this.coordinates.findIndex(coord => coord[0] === coordinate[0] && coord[1] === coordinate[1]);
        if(index > -1){
            this.hits[index] = true;
            return true
        }
    }

    isSunk() {
        return this.hits.every(hit => hit);
    }
}

/***/ }),

/***/ "./src/classes/users.js":
/*!******************************!*\
  !*** ./src/classes/users.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
function Player(otherBoard) {
    const attacked = [];

    const attack = (coordinates) => {
        otherBoard.receiveAttack(coordinates);
        attacked.push(coordinates);
    }

    return {
        attack
    }
}

function Computer(otherBoard) {
    let previousAttacks = [];

    const arraysEqual = (a, b) => {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };
    
    const attack = () => {
        let coordinates = [];
        while (coordinates.length == 0 || previousAttacks.some(prev => arraysEqual(prev, coordinates))) {
            coordinates = [1 + Math.floor(Math.random() * 10), 1 + Math.floor(Math.random() * 10)];
        }
    
        otherBoard.receiveAttack(coordinates);
        previousAttacks.push(coordinates);
        coordinates = [];
    };
    

    return {
        attack
    }
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/users */ "./src/classes/users.js");
/* harmony import */ var _classes_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Gameboard */ "./src/classes/Gameboard.js");
/* harmony import */ var _path_finding_coordinates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-finding/coordinates */ "./src/path-finding/coordinates.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const displayTurn = document.querySelector('#turn')

    const playerBoard = new _classes_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]('player');
    const computerBoard = new _classes_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]('opponent');

    const player = (0,_classes_users__WEBPACK_IMPORTED_MODULE_0__.Player)(computerBoard);
    const computer = (0,_classes_users__WEBPACK_IMPORTED_MODULE_0__.Computer)(playerBoard);

    playerBoard.placeShip([4, 4], [1, 4]);
    computerBoard.placeShip([1, 1], [1, 2]);

    let turn = 'player';
    displayTurn.textContent = 'Whenever you\'re ready click a square.'

    document.querySelectorAll('.opponent-square').forEach(square => {
        square.addEventListener('click', makeTurn);
    });

    function makeTurn(event) {
        if (turn !== 'player') return;

        const coordinate = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesFromClassList)(event.target.classList);
        player.attack(coordinate);

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.removeEventListener('click', makeTurn);
        });

        computerBoard.displayHits()
        turn = 'computer';
        displayTurn.textContent = "Opponent's Turn..."

        setTimeout(computerTurn, 1000); 
    }

    function computerTurn() {
        computer.attack();
        playerBoard.displayHits()

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.addEventListener('click', makeTurn);
        });

        turn = 'player';
        displayTurn.textContent = 'Your turn!' 
    }
});

/***/ }),

/***/ "./src/onload/loadElements.js":
/*!************************************!*\
  !*** ./src/onload/loadElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   placeShipsRandomly: () => (/* binding */ placeShipsRandomly)
/* harmony export */ });
/* harmony import */ var _img_empty_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/empty.svg */ "./src/img/empty.svg");
/* harmony import */ var _img_hit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hit.svg */ "./src/img/hit.svg");
/* harmony import */ var _img_killed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/killed.svg */ "./src/img/killed.svg");




function createBoards() {
    const playerBoard = document.querySelector('#player');
    const opponentBoard = document.querySelector('#opponent');

    const list = [playerBoard, opponentBoard];
    let player = false;
    list.forEach(user => {
        player = !player
        for (let i = 1; i <= 10; i++) {
            for (let x = 1; x <= 10; x++) {
                let box = document.createElement('div');
                box.classList.add('r' + i);
                box.classList.add('c' + x);
                if (player) {
                    box.classList.add('player-square');
                } else {
                    box.classList.add('opponent-square');
                }
                user.appendChild(box);
            }
        }
    })
}

function placeShipsRandomly() {
    // This function will place ships randomly on the board on each load.
}

function loadLegend() {
    const emptyLegend = document.querySelector('#empty-legend');
    const hitLegend = document.querySelector('#hit-legend');
    const killedLegend = document.querySelector('#killed-legend');

    emptyLegend.src = _img_empty_svg__WEBPACK_IMPORTED_MODULE_0__;
    hitLegend.src = _img_hit_svg__WEBPACK_IMPORTED_MODULE_1__;
    killedLegend.src = _img_killed_svg__WEBPACK_IMPORTED_MODULE_2__;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    createBoards();
    loadLegend();
});

/***/ }),

/***/ "./src/path-finding/coordinates.js":
/*!*****************************************!*\
  !*** ./src/path-finding/coordinates.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlayerListeners: () => (/* binding */ addPlayerListeners),
/* harmony export */   findSquare: () => (/* binding */ findSquare),
/* harmony export */   getCoordinatesFromClassList: () => (/* binding */ getCoordinatesFromClassList)
/* harmony export */ });
function getCoordinatesFromClassList(lst) {
        let [row, column] = [lst[0].substring(1), lst[1].substring(1)];
        return [parseInt(row, 10), parseInt(column, 10)];
}

function findSquare(arr, user) {
        const [x, y] = [arr[0], arr[1]];
        let result;
        if (user) {
                result = document.querySelector(`#${user}>.r${x}.c${y}`);
        } else {
                result = document.querySelector(`.r${x}.c${y}`);
        }
        return result || null;
}

function addPlayerListeners() {
        const allOpponentSquares = document.querySelectorAll('.opponent-square');
        allOpponentSquares.forEach(square => {
                square.addEventListener('click', makeTurn);
        })
}

// Placeholder function
function makeTurn(event) {
        const coordinate = getCoordinatesFromClassList(event.target.classList);

        document.querySelectorAll('.opponent-square').forEach(square => {
                square.removeEventListener('click', makeTurn)
        })

        return coordinate
}

/***/ }),

/***/ "./src/img/empty.svg":
/*!***************************!*\
  !*** ./src/img/empty.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acdcab95a3c15c6f5f0e.svg";

/***/ }),

/***/ "./src/img/hit.svg":
/*!*************************!*\
  !*** ./src/img/hit.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb05a5c59c5673d4390.svg";

/***/ }),

/***/ "./src/img/killed.svg":
/*!****************************!*\
  !*** ./src/img/killed.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94241ede8554705a5898.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _onload_loadElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onload/loadElements */ "./src/onload/loadElements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




(0,_onload_loadElements__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxLQUFLLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDdEUsVUFBVTtBQUNWLHFEQUFxRCxFQUFFLElBQUksRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzRCO0FBQ3ZCOztBQUV6QixnRUFBWTtBQUNaLGtEQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL3VzZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29ubG9hZC9sb2FkRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wYXRoLWZpbmRpbmcvY29vcmRpbmF0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbWFpbi1jb2xvdXI6IDA7XG4gICAgLS1zZWNvbmRhcnktY29sb3VyOiAwO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogMDtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdhcDogMjBweDtcbn1cblxuI2hlYWRlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNjb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnIgMWZyIDUwcHg7XG59XG5cbiNwbGF5ZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuI29wcG9uZW50IHtcbiAgICBncmlkLWNvbHVtbjogMztcbn1cblxuI3BsYXllciwgI29wcG9uZW50IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNsZWdlbmQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDV2dztcbn1cblxuXG4ubGVnZW5kLWluZm8ge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xufVxuXG4ubGVnZW5kLWluZm8+aW1nIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbiNwbGF5ZXIsICNvcHBvbmVudCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ2FwOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDgsIDIwMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTI1cHg7XG59XG5cbiNwbGF5ZXI+ZGl2LCAjb3Bwb25lbnQ+ZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDEzMiwgMTk2KTtcblxufVxuXG4jcGxheWVyPmRpdjpob3ZlciwgI29wcG9uZW50PmRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTc1LCAyMTYpO1xuICAgIHNjYWxlOiAxLjA4O1xufVxuXG4jcGxheWVyPmRpdjphY3RpdmUsICNvcHBvbmVudD5kaXY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDExNiwgMTQ0KTtcbiAgICBzY2FsZTogMC45ODtcbn1cblxuXG4jcGxheWVyPi5wbGF5ZXItc2hpcC5oaXQsXG4jb3Bwb25lbnQ+LmhpdCxcbiNwbGF5ZXI+LnBsYXllci1zaGlwLmhpdDpob3ZlcixcbiNvcHBvbmVudD4uaGl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NzMpO1xufVxuXG4jcGxheWVyPi5taXNzOmhvdmVyLFxuI29wcG9uZW50Pi5taXNzOmhvdmVyLFxuI3BsYXllcj4ubWlzcyxcbiNvcHBvbmVudD4ubWlzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NiwgMTU0LCAxNTMsIDAuNjczKTtcbn1cblxuI3BsYXllcj4ucGxheWVyLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtSkFBbUo7QUFDdko7O0FBRUE7O0lBRUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsUUFBUTtBQUNaOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjs7O0FBR0E7Ozs7SUFJSSx3Q0FBd0M7QUFDNUM7O0FBRUE7Ozs7SUFJSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3VyOiAwO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvdXI6IDA7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogMDtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxZnIgNTBweDtcXG59XFxuXFxuI3BsYXllciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG4jb3Bwb25lbnQge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuI3BsYXllciwgI29wcG9uZW50IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2xlZ2VuZCB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXZ3O1xcbn1cXG5cXG5cXG4ubGVnZW5kLWluZm8ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmxlZ2VuZC1pbmZvPmltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwbGF5ZXIsICNvcHBvbmVudCB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTA4LCAyMDEpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTI1cHg7XFxufVxcblxcbiNwbGF5ZXI+ZGl2LCAjb3Bwb25lbnQ+ZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxMzIsIDE5Nik7XFxuXFxufVxcblxcbiNwbGF5ZXI+ZGl2OmhvdmVyLCAjb3Bwb25lbnQ+ZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTc1LCAyMTYpO1xcbiAgICBzY2FsZTogMS4wODtcXG59XFxuXFxuI3BsYXllcj5kaXY6YWN0aXZlLCAjb3Bwb25lbnQ+ZGl2OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5OSwgMTE2LCAxNDQpO1xcbiAgICBzY2FsZTogMC45ODtcXG59XFxuXFxuXFxuI3BsYXllcj4ucGxheWVyLXNoaXAuaGl0LFxcbiNvcHBvbmVudD4uaGl0LFxcbiNwbGF5ZXI+LnBsYXllci1zaGlwLmhpdDpob3ZlcixcXG4jb3Bwb25lbnQ+LmhpdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY3Myk7XFxufVxcblxcbiNwbGF5ZXI+Lm1pc3M6aG92ZXIsXFxuI29wcG9uZW50Pi5taXNzOmhvdmVyLFxcbiNwbGF5ZXI+Lm1pc3MsXFxuI29wcG9uZW50Pi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NiwgMTU0LCAxNTMsIDAuNjczKTtcXG59XFxuXFxuI3BsYXllcj4ucGxheWVyLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHsgZmluZFNxdWFyZSB9IGZyb20gXCIuLi9wYXRoLWZpbmRpbmcvY29vcmRpbmF0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXJcbiAgICAgICAgdGhpcy5tYWluID0gW107XG4gICAgICAgIHRoaXMuc2hvdHMgPSBbXTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc3RhcnRWZWN0b3IsIGVuZFZlY3Rvcikge1xuICAgICAgICBjb25zdCBmdWxsQ29vcmRpbmF0ZXMgPSBmdWxsU2hpcENvb3JkaW5hdGVzKHN0YXJ0VmVjdG9yLCBlbmRWZWN0b3IpO1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoZnVsbENvb3JkaW5hdGVzKTtcbiAgICAgICAgdGhpcy5tYWluLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIGlmKHRoaXMudXNlciA9PSAncGxheWVyJykge1xuICAgICAgICAgICAgZnVsbENvb3JkaW5hdGVzLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKGxvY2F0aW9uLCB0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5tYWluKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXQoY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCcpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG90cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5SGl0cygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLm1haW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXAuaGl0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZShzaGlwLmNvb3JkaW5hdGVzW2ldLCB0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgc2hvdCBvZiB0aGlzLnNob3RzKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZShzaG90LCB0aGlzLnVzZXIpXG4gICAgICAgICAgICBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMudXNlclswXS50b1VwcGVyQ2FzZSgpICsgdGhpcy51c2VyLnN1YnN0cmluZygxKSArICcgaGFzIGxvc3QhIEFsbCB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay4nKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMubWFpbikge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmhpdHMuZXZlcnkoaGl0ID0+IGhpdCA9PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZ1bGxTaGlwQ29vcmRpbmF0ZXMoc3RhcnQsIGVuZCkge1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG5cbiAgICBjb25zdCBbeDEsIHkxXSA9IHN0YXJ0O1xuICAgIGNvbnN0IFt4MiwgeTJdID0gW2VuZFswXSwgZW5kWzFdXTtcblxuICAgIGNvbnN0IGR4ID0gTWF0aC5hYnMoeDIgLSB4MSk7XG4gICAgY29uc3QgZHkgPSBNYXRoLmFicyh5MiAtIHkxKTtcblxuICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoZHgsIGR5KTtcblxuICAgIGNvbnN0IHhJbmNyZW1lbnQgPSAoeDIgLSB4MSkgLyBzdGVwcztcbiAgICBjb25zdCB5SW5jcmVtZW50ID0gKHkyIC0geTEpIC8gc3RlcHM7XG5cbiAgICBsZXQgW3gsIHldID0gW3gxLCB5MV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG5cbiAgICAgICAgeCArPSB4SW5jcmVtZW50O1xuICAgICAgICB5ICs9IHlJbmNyZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGNvb3JkaW5hdGVzLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgfVxuXG4gICAgaGl0KGNvb3JkaW5hdGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNvb3JkaW5hdGVzLmZpbmRJbmRleChjb29yZCA9PiBjb29yZFswXSA9PT0gY29vcmRpbmF0ZVswXSAmJiBjb29yZFsxXSA9PT0gY29vcmRpbmF0ZVsxXSk7XG4gICAgICAgIGlmKGluZGV4ID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5oaXRzW2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KGhpdCA9PiBoaXQpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gUGxheWVyKG90aGVyQm9hcmQpIHtcbiAgICBjb25zdCBhdHRhY2tlZCA9IFtdO1xuXG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIG90aGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIGF0dGFja2VkLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbXB1dGVyKG90aGVyQm9hcmQpIHtcbiAgICBsZXQgcHJldmlvdXNBdHRhY2tzID0gW107XG5cbiAgICBjb25zdCBhcnJheXNFcXVhbCA9IChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgYXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgd2hpbGUgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PSAwIHx8IHByZXZpb3VzQXR0YWNrcy5zb21lKHByZXYgPT4gYXJyYXlzRXF1YWwocHJldiwgY29vcmRpbmF0ZXMpKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgb3RoZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICBjb29yZGluYXRlcyA9IFtdO1xuICAgIH07XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2tcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH0gZnJvbSBcIi4vY2xhc3Nlcy91c2Vyc1wiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9jbGFzc2VzL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXNGcm9tQ2xhc3NMaXN0IH0gZnJvbSBcIi4vcGF0aC1maW5kaW5nL2Nvb3JkaW5hdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5VHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuJylcblxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgncGxheWVyJyk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IG5ldyBHYW1lQm9hcmQoJ29wcG9uZW50Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoY29tcHV0ZXJCb2FyZCk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBDb21wdXRlcihwbGF5ZXJCb2FyZCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoWzQsIDRdLCBbMSwgNF0pO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFsxLCAxXSwgWzEsIDJdKTtcblxuICAgIGxldCB0dXJuID0gJ3BsYXllcic7XG4gICAgZGlzcGxheVR1cm4udGV4dENvbnRlbnQgPSAnV2hlbmV2ZXIgeW91XFwncmUgcmVhZHkgY2xpY2sgYSBzcXVhcmUuJ1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wcG9uZW50LXNxdWFyZScpLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVR1cm4pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbWFrZVR1cm4oZXZlbnQpIHtcbiAgICAgICAgaWYgKHR1cm4gIT09ICdwbGF5ZXInKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldENvb3JkaW5hdGVzRnJvbUNsYXNzTGlzdChldmVudC50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgICAgcGxheWVyLmF0dGFjayhjb29yZGluYXRlKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQtc3F1YXJlJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVR1cm4pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wdXRlckJvYXJkLmRpc3BsYXlIaXRzKClcbiAgICAgICAgdHVybiA9ICdjb21wdXRlcic7XG4gICAgICAgIGRpc3BsYXlUdXJuLnRleHRDb250ZW50ID0gXCJPcHBvbmVudCdzIFR1cm4uLi5cIlxuXG4gICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCAxMDAwKTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZXJUdXJuKCkge1xuICAgICAgICBjb21wdXRlci5hdHRhY2soKTtcbiAgICAgICAgcGxheWVyQm9hcmQuZGlzcGxheUhpdHMoKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHBvbmVudC1zcXVhcmUnKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlVHVybik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHR1cm4gPSAncGxheWVyJztcbiAgICAgICAgZGlzcGxheVR1cm4udGV4dENvbnRlbnQgPSAnWW91ciB0dXJuIScgXG4gICAgfVxufSIsImltcG9ydCBFbXB0eSBmcm9tICcuLi9pbWcvZW1wdHkuc3ZnJ1xuaW1wb3J0IEhpdCBmcm9tICcuLi9pbWcvaGl0LnN2ZydcbmltcG9ydCBLaWxsZWQgZnJvbSAnLi4vaW1nL2tpbGxlZC5zdmcnXG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkcygpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXInKTtcbiAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wcG9uZW50Jyk7XG5cbiAgICBjb25zdCBsaXN0ID0gW3BsYXllckJvYXJkLCBvcHBvbmVudEJvYXJkXTtcbiAgICBsZXQgcGxheWVyID0gZmFsc2U7XG4gICAgbGlzdC5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICBwbGF5ZXIgPSAhcGxheWVyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3InICsgaSk7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2MnICsgeCk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgncGxheWVyLXNxdWFyZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdvcHBvbmVudC1zcXVhcmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXNlci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgcGxhY2Ugc2hpcHMgcmFuZG9tbHkgb24gdGhlIGJvYXJkIG9uIGVhY2ggbG9hZC5cbn1cblxuZnVuY3Rpb24gbG9hZExlZ2VuZCgpIHtcbiAgICBjb25zdCBlbXB0eUxlZ2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbXB0eS1sZWdlbmQnKTtcbiAgICBjb25zdCBoaXRMZWdlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGl0LWxlZ2VuZCcpO1xuICAgIGNvbnN0IGtpbGxlZExlZ2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNraWxsZWQtbGVnZW5kJyk7XG5cbiAgICBlbXB0eUxlZ2VuZC5zcmMgPSBFbXB0eTtcbiAgICBoaXRMZWdlbmQuc3JjID0gSGl0O1xuICAgIGtpbGxlZExlZ2VuZC5zcmMgPSBLaWxsZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjcmVhdGVCb2FyZHMoKTtcbiAgICBsb2FkTGVnZW5kKCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzRnJvbUNsYXNzTGlzdChsc3QpIHtcbiAgICAgICAgbGV0IFtyb3csIGNvbHVtbl0gPSBbbHN0WzBdLnN1YnN0cmluZygxKSwgbHN0WzFdLnN1YnN0cmluZygxKV07XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQocm93LCAxMCksIHBhcnNlSW50KGNvbHVtbiwgMTApXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTcXVhcmUoYXJyLCB1c2VyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IFthcnJbMF0sIGFyclsxXV07XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dXNlcn0+LnIke3h9LmMke3l9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnIke3h9LmMke3l9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUGxheWVyTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBhbGxPcHBvbmVudFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQtc3F1YXJlJyk7XG4gICAgICAgIGFsbE9wcG9uZW50U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVR1cm4pO1xuICAgICAgICB9KVxufVxuXG4vLyBQbGFjZWhvbGRlciBmdW5jdGlvblxuZnVuY3Rpb24gbWFrZVR1cm4oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldENvb3JkaW5hdGVzRnJvbUNsYXNzTGlzdChldmVudC50YXJnZXQuY2xhc3NMaXN0KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQtc3F1YXJlJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VUdXJuKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGxvYWRFbGVtZW50cyBmcm9tICcuL29ubG9hZC9sb2FkRWxlbWVudHMnXG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnXG5cbmxvYWRFbGVtZW50cygpXG5nYW1lKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=