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
    --sea-border: #011E36;
    --background: #222222;
    --sea-colour: #31A8FF;
    --hit: red;
    --miss: #454E57;
    --player-ship: aqua;
}

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
        scale: 1;
    }

    100% {
        transform: rotate(360deg);
        scale: 1;
    }
}

html,
body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
}

body,
#gameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    gap: 20px;
}

#header {
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    height: 50px;
    justify-content: end;
    justify-items: end;
}

a>img {
    width: 50px;
    height: 50px;
}

a>img:hover {
    animation: spin 0.7s ease-in-out;
}

#gameContainer>* {
    position: relative;
    top: -10px;
}

#container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 50px;
}

.boxP {
    grid-column: 2;
}

.boxO {
    grid-column: 3;
}

#player,
#opponent,
.boxP,
.boxO {
    justify-self: center;
    align-self: center;
}

.boxP>p,
.boxO>p {
    position: relative;
    top: -20px;
}

#turn {
    display: relative;
    top: 20px;
}

#legend {
    height: 100px;
    display: flex;
    gap: 5vw;
    margin-top: -10px;
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
    background-color: red;
    border-radius: 4.5px;
}

#player,
#opponent {
    max-width: 500px;
    max-height: 500px;
    min-width: 500px;
    min-height: 500px;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
    background-color: var(--sea-border);
    position: relative;
    top: -30px;
}

#player>div,
#opponent>div {
    background-color: var(--sea-colour);
    transition: 0.2s all ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

#player>div:hover,
#opponent>div:hover {
    background-color: rgb(220, 221, 223);
    scale: 1.08;
}

#player>div:active,
#opponent>div:active {
    background-color: rgb(99, 116, 144);
    scale: 0.98;
}


#player>.player-ship.hit,
#opponent>.hit,
#player>.player-ship.hit:hover,
#opponent>.hit:hover {
    background-color: var(--hit);
}

#player>.miss:hover,
#opponent>.miss:hover,
#player>.miss,
#opponent>.miss {
    background-color: var(--miss);
}

#player>.player-ship {
    background-color: var(--player-ship);
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,UAAU;IACV,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,mJAAmJ;IACnJ,YAAY;AAChB;;AAEA;IACI;QACI,uBAAuB;QACvB,QAAQ;IACZ;;IAEA;QACI,yBAAyB;QACzB,QAAQ;IACZ;AACJ;;AAEA;;IAEI,SAAS;IACT,UAAU;IACV,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,wCAAwC;AAC5C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;IAII,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,QAAQ;IACR,iBAAiB;AACrB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;;IAEI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;IACR,mCAAmC;IACnC,kBAAkB;IAClB,UAAU;AACd;;AAEA;;IAEI,mCAAmC;IACnC,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,oCAAoC;IACpC,WAAW;AACf;;AAEA;;IAEI,mCAAmC;IACnC,WAAW;AACf;;;AAGA;;;;IAII,4BAA4B;AAChC;;AAEA;;;;IAII,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    --sea-border: #011E36;\n    --background: #222222;\n    --sea-colour: #31A8FF;\n    --hit: red;\n    --miss: #454E57;\n    --player-ship: aqua;\n}\n\n* {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: white;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n        scale: 1;\n    }\n\n    100% {\n        transform: rotate(360deg);\n        scale: 1;\n    }\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background);\n}\n\nbody,\n#gameContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    gap: 20px;\n}\n\n#header {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    display: flex;\n    height: 50px;\n    justify-content: end;\n    justify-items: end;\n}\n\na>img {\n    width: 50px;\n    height: 50px;\n}\n\na>img:hover {\n    animation: spin 0.7s ease-in-out;\n}\n\n#gameContainer>* {\n    position: relative;\n    top: -10px;\n}\n\n#container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 50px 1fr 1fr 50px;\n}\n\n.boxP {\n    grid-column: 2;\n}\n\n.boxO {\n    grid-column: 3;\n}\n\n#player,\n#opponent,\n.boxP,\n.boxO {\n    justify-self: center;\n    align-self: center;\n}\n\n.boxP>p,\n.boxO>p {\n    position: relative;\n    top: -20px;\n}\n\n#turn {\n    display: relative;\n    top: 20px;\n}\n\n#legend {\n    height: 100px;\n    display: flex;\n    gap: 5vw;\n    margin-top: -10px;\n}\n\n\n.legend-info {\n    height: 60px;\n    display: grid;\n    grid-template-columns: 50px 100px;\n    column-gap: 10px;\n}\n\n.legend-info>img {\n    height: 50px;\n    width: auto;\n    background-color: red;\n    border-radius: 4.5px;\n}\n\n#player,\n#opponent {\n    max-width: 500px;\n    max-height: 500px;\n    min-width: 500px;\n    min-height: 500px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    background-color: var(--sea-border);\n    position: relative;\n    top: -30px;\n}\n\n#player>div,\n#opponent>div {\n    background-color: var(--sea-colour);\n    transition: 0.2s all ease-in-out;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player>div:hover,\n#opponent>div:hover {\n    background-color: rgb(220, 221, 223);\n    scale: 1.08;\n}\n\n#player>div:active,\n#opponent>div:active {\n    background-color: rgb(99, 116, 144);\n    scale: 0.98;\n}\n\n\n#player>.player-ship.hit,\n#opponent>.hit,\n#player>.player-ship.hit:hover,\n#opponent>.hit:hover {\n    background-color: var(--hit);\n}\n\n#player>.miss:hover,\n#opponent>.miss:hover,\n#player>.miss,\n#opponent>.miss {\n    background-color: var(--miss);\n}\n\n#player>.player-ship {\n    background-color: var(--player-ship);\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _img_hit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hit.svg */ "./src/img/hit.svg");
/* harmony import */ var _img_killed_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/killed.svg */ "./src/img/killed.svg");





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
                    square.innerHTML = ''
                    square.classList.add('hit');

                    let hit = new Image()
                    hit.src = _img_hit_svg__WEBPACK_IMPORTED_MODULE_2__
                    square.appendChild(hit)
                }
            }
            if (ship.isSunk()) {
                ship.coordinates.forEach(coordinate => {
                    let square = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__.findSquare)(coordinate, this.user)
                    square.innerHTML = ''

                    let killed = new Image()
                    killed.src = _img_killed_svg__WEBPACK_IMPORTED_MODULE_3__
                    killed.className = 'killed'

                    square.appendChild(killed)
                })
            }
        }

        for (let shot of this.shots) {
            let square = (0,_path_finding_coordinates__WEBPACK_IMPORTED_MODULE_1__.findSquare)(shot, this.user)
            if (!square.classList.contains('hit') && !square.classList.contains('miss')) {
                square.classList.add('miss')
            } 
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

    playerBoard.placeShip([4, 4], [2, 4]);
    playerBoard.placeShip([7,6], [7,7])
    computerBoard.placeShip([1, 1], [1, 2]);
    computerBoard.placeShip([5,3], [3,3])

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

        computerBoard.displayHits();

        
        turn = 'computer';
        displayTurn.textContent = "Opponent's Turn.";

        setTimeout(computerTurn, 1500);

        const addDots = setInterval(() => {
            displayTurn.textContent += '.'
        }, 550);

        setTimeout(() => {
            clearInterval(addDots);
        }, 1500);
    }

    function computerTurn() {
        computer.attack();
        playerBoard.displayHits();

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.addEventListener('click', makeTurn);
        });

        turn = 'player';
        displayTurn.textContent = 'Your turn!';
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_hit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/hit.svg */ "./src/img/hit.svg");
/* harmony import */ var _img_killed_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/killed.svg */ "./src/img/killed.svg");
/* harmony import */ var _img_github_mark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/github-mark.svg */ "./src/img/github-mark.svg");




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

function loadLegend() {
    const hitLegend = document.querySelector('#hit-legend');
    const killedLegend = document.querySelector('#killed-legend');

    hitLegend.src = _img_hit_svg__WEBPACK_IMPORTED_MODULE_0__;
    killedLegend.src = _img_killed_svg__WEBPACK_IMPORTED_MODULE_1__;
}

function addGHLogo() {
    const gh = new Image();
    gh.src = _img_github_mark_svg__WEBPACK_IMPORTED_MODULE_2__;
    const lnk = document.createElement('a')
    lnk.href = 'https://github.com/xadvent/battleship'
    lnk.id = 'github'
    lnk.appendChild(gh)
    document.querySelector('#header').appendChild(lnk)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    createBoards();
    loadLegend();
    addGHLogo();
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

/***/ "./src/img/github-mark.svg":
/*!*********************************!*\
  !*** ./src/img/github-mark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdFQUFZO0FBQ1osa0RBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb25sb2FkL2xvYWRFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BhdGgtZmluZGluZy9jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1zZWEtYm9yZGVyOiAjMDExRTM2O1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgICAtLXNlYS1jb2xvdXI6ICMzMUE4RkY7XG4gICAgLS1oaXQ6IHJlZDtcbiAgICAtLW1pc3M6ICM0NTRFNTc7XG4gICAgLS1wbGF5ZXItc2hpcDogYXF1YTtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICBzY2FsZTogMTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgc2NhbGU6IDE7XG4gICAgfVxufVxuXG5odG1sLFxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbmJvZHksXG4jZ2FtZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbn1cblxuYT5pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuYT5pbWc6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjdzIGVhc2UtaW4tb3V0O1xufVxuXG4jZ2FtZUNvbnRhaW5lcj4qIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmciAxZnIgNTBweDtcbn1cblxuLmJveFAge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uYm94TyB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbiNwbGF5ZXIsXG4jb3Bwb25lbnQsXG4uYm94UCxcbi5ib3hPIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5ib3hQPnAsXG4uYm94Tz5wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjBweDtcbn1cblxuI3R1cm4ge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbn1cblxuI2xlZ2VuZCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXZ3O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5cbi5sZWdlbmQtaW5mbyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwMHB4O1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5sZWdlbmQtaW5mbz5pbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNC41cHg7XG59XG5cbiNwbGF5ZXIsXG4jb3Bwb25lbnQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYS1ib3JkZXIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zMHB4O1xufVxuXG4jcGxheWVyPmRpdixcbiNvcHBvbmVudD5kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYS1jb2xvdXIpO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3BsYXllcj5kaXY6aG92ZXIsXG4jb3Bwb25lbnQ+ZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjEsIDIyMyk7XG4gICAgc2NhbGU6IDEuMDg7XG59XG5cbiNwbGF5ZXI+ZGl2OmFjdGl2ZSxcbiNvcHBvbmVudD5kaXY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDExNiwgMTQ0KTtcbiAgICBzY2FsZTogMC45ODtcbn1cblxuXG4jcGxheWVyPi5wbGF5ZXItc2hpcC5oaXQsXG4jb3Bwb25lbnQ+LmhpdCxcbiNwbGF5ZXI+LnBsYXllci1zaGlwLmhpdDpob3ZlcixcbiNvcHBvbmVudD4uaGl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xufVxuXG4jcGxheWVyPi5taXNzOmhvdmVyLFxuI29wcG9uZW50Pi5taXNzOmhvdmVyLFxuI3BsYXllcj4ubWlzcyxcbiNvcHBvbmVudD4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XG59XG5cbiNwbGF5ZXI+LnBsYXllci1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF5ZXItc2hpcCk7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtSkFBbUo7SUFDbkosWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixRQUFRO0lBQ1o7QUFDSjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7O0lBSUksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsUUFBUTtJQUNSLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7OztBQUdBOzs7O0lBSUksNEJBQTRCO0FBQ2hDOztBQUVBOzs7O0lBSUksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tc2VhLWJvcmRlcjogIzAxMUUzNjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgICAtLXNlYS1jb2xvdXI6ICMzMUE4RkY7XFxuICAgIC0taGl0OiByZWQ7XFxuICAgIC0tbWlzczogIzQ1NEU1NztcXG4gICAgLS1wbGF5ZXItc2hpcDogYXF1YTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIHNjYWxlOiAxO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIHNjYWxlOiAxO1xcbiAgICB9XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbmJvZHksXFxuI2dhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIHRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG5hPmltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmE+aW1nOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNnYW1lQ29udGFpbmVyPioge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwcHg7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyIDFmciA1MHB4O1xcbn1cXG5cXG4uYm94UCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uYm94TyB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4jcGxheWVyLFxcbiNvcHBvbmVudCxcXG4uYm94UCxcXG4uYm94TyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ib3hQPnAsXFxuLmJveE8+cCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMjBweDtcXG59XFxuXFxuI3R1cm4ge1xcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyMHB4O1xcbn1cXG5cXG4jbGVnZW5kIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1dnc7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG5cXG4ubGVnZW5kLWluZm8ge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMDBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLmxlZ2VuZC1pbmZvPmltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNC41cHg7XFxufVxcblxcbiNwbGF5ZXIsXFxuI29wcG9uZW50IHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhLWJvcmRlcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzBweDtcXG59XFxuXFxuI3BsYXllcj5kaXYsXFxuI29wcG9uZW50PmRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYS1jb2xvdXIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXI+ZGl2OmhvdmVyLFxcbiNvcHBvbmVudD5kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMjEsIDIyMyk7XFxuICAgIHNjYWxlOiAxLjA4O1xcbn1cXG5cXG4jcGxheWVyPmRpdjphY3RpdmUsXFxuI29wcG9uZW50PmRpdjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDExNiwgMTQ0KTtcXG4gICAgc2NhbGU6IDAuOTg7XFxufVxcblxcblxcbiNwbGF5ZXI+LnBsYXllci1zaGlwLmhpdCxcXG4jb3Bwb25lbnQ+LmhpdCxcXG4jcGxheWVyPi5wbGF5ZXItc2hpcC5oaXQ6aG92ZXIsXFxuI29wcG9uZW50Pi5oaXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4jcGxheWVyPi5taXNzOmhvdmVyLFxcbiNvcHBvbmVudD4ubWlzczpob3ZlcixcXG4jcGxheWVyPi5taXNzLFxcbiNvcHBvbmVudD4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4jcGxheWVyPi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci1zaGlwKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgeyBmaW5kU3F1YXJlIH0gZnJvbSBcIi4uL3BhdGgtZmluZGluZy9jb29yZGluYXRlc1wiO1xuaW1wb3J0IEhpdCBmcm9tICcuLi9pbWcvaGl0LnN2ZydcbmltcG9ydCBLaWxsZWQgZnJvbSAnLi4vaW1nL2tpbGxlZC5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3IodXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyXG4gICAgICAgIHRoaXMubWFpbiA9IFtdO1xuICAgICAgICB0aGlzLnNob3RzID0gW107XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHN0YXJ0VmVjdG9yLCBlbmRWZWN0b3IpIHtcbiAgICAgICAgY29uc3QgZnVsbENvb3JkaW5hdGVzID0gZnVsbFNoaXBDb29yZGluYXRlcyhzdGFydFZlY3RvciwgZW5kVmVjdG9yKTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGZ1bGxDb29yZGluYXRlcyk7XG4gICAgICAgIHRoaXMubWFpbi5wdXNoKG5ld1NoaXApO1xuICAgICAgICBpZih0aGlzLnVzZXIgPT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgIGZ1bGxDb29yZGluYXRlcy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZShsb2NhdGlvbiwgdGhpcy51c2VyKVxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMubWFpbikge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0KGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQnKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdHMucHVzaChjb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgZGlzcGxheUhpdHMoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5tYWluKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoc2hpcC5jb29yZGluYXRlc1tpXSwgdGhpcy51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaGl0ID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgICAgICAgICAgaGl0LnNyYyA9IEhpdFxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaGl0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZShjb29yZGluYXRlLCB0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBraWxsZWQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICAgICAgICAgICAgICBraWxsZWQuc3JjID0gS2lsbGVkXG4gICAgICAgICAgICAgICAgICAgIGtpbGxlZC5jbGFzc05hbWUgPSAna2lsbGVkJ1xuXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChraWxsZWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHNob3Qgb2YgdGhpcy5zaG90cykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoc2hvdCwgdGhpcy51c2VyKVxuICAgICAgICAgICAgaWYgKCFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgYWxlcnQodGhpcy51c2VyWzBdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnVzZXIuc3Vic3RyaW5nKDEpICsgJyBoYXMgbG9zdCEgQWxsIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLicpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGFsbFN1bmsoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5tYWluKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaGl0cy5ldmVyeShoaXQgPT4gaGl0ID09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZnVsbFNoaXBDb29yZGluYXRlcyhzdGFydCwgZW5kKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW11cblxuICAgIGNvbnN0IFt4MSwgeTFdID0gc3RhcnQ7XG4gICAgY29uc3QgW3gyLCB5Ml0gPSBbZW5kWzBdLCBlbmRbMV1dO1xuXG4gICAgY29uc3QgZHggPSBNYXRoLmFicyh4MiAtIHgxKTtcbiAgICBjb25zdCBkeSA9IE1hdGguYWJzKHkyIC0geTEpO1xuXG4gICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heChkeCwgZHkpO1xuXG4gICAgY29uc3QgeEluY3JlbWVudCA9ICh4MiAtIHgxKSAvIHN0ZXBzO1xuICAgIGNvbnN0IHlJbmNyZW1lbnQgPSAoeTIgLSB5MSkgLyBzdGVwcztcblxuICAgIGxldCBbeCwgeV0gPSBbeDEsIHkxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcblxuICAgICAgICB4ICs9IHhJbmNyZW1lbnQ7XG4gICAgICAgIHkgKz0geUluY3JlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkoY29vcmRpbmF0ZXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcbiAgICB9XG5cbiAgICBoaXQoY29vcmRpbmF0ZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29vcmRpbmF0ZXMuZmluZEluZGV4KGNvb3JkID0+IGNvb3JkWzBdID09PSBjb29yZGluYXRlWzBdICYmIGNvb3JkWzFdID09PSBjb29yZGluYXRlWzFdKTtcbiAgICAgICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgICAgICB0aGlzLmhpdHNbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMuZXZlcnkoaGl0ID0+IGhpdCk7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIob3RoZXJCb2FyZCkge1xuICAgIGNvbnN0IGF0dGFja2VkID0gW107XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgb3RoZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgYXR0YWNrZWQucHVzaChjb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tcHV0ZXIob3RoZXJCb2FyZCkge1xuICAgIGxldCBwcmV2aW91c0F0dGFja3MgPSBbXTtcblxuICAgIGNvbnN0IGFycmF5c0VxdWFsID0gKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICB3aGlsZSAoY29vcmRpbmF0ZXMubGVuZ3RoID09IDAgfHwgcHJldmlvdXNBdHRhY2tzLnNvbWUocHJldiA9PiBhcnJheXNFcXVhbChwcmV2LCBjb29yZGluYXRlcykpKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFsxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBvdGhlckJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgICBwcmV2aW91c0F0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIGNvb3JkaW5hdGVzID0gW107XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9jbGFzc2VzL3VzZXJzXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2NsYXNzZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBnZXRDb29yZGluYXRlc0Zyb21DbGFzc0xpc3QgfSBmcm9tIFwiLi9wYXRoLWZpbmRpbmcvY29vcmRpbmF0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlUdXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cm4nKVxuXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCdwbGF5ZXInKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVCb2FyZCgnb3Bwb25lbnQnKTtcblxuICAgIGNvbnN0IHBsYXllciA9IFBsYXllcihjb21wdXRlckJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlciA9IENvbXB1dGVyKHBsYXllckJvYXJkKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChbNCwgNF0sIFsyLCA0XSk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFs3LDZdLCBbNyw3XSlcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChbMSwgMV0sIFsxLCAyXSk7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoWzUsM10sIFszLDNdKVxuXG4gICAgbGV0IHR1cm4gPSAncGxheWVyJztcbiAgICBkaXNwbGF5VHVybi50ZXh0Q29udGVudCA9ICdXaGVuZXZlciB5b3VcXCdyZSByZWFkeSBjbGljayBhIHNxdWFyZS4nXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQtc3F1YXJlJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlVHVybik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtYWtlVHVybihldmVudCkge1xuICAgICAgICBpZiAodHVybiAhPT0gJ3BsYXllcicpIHJldHVybjtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGdldENvb3JkaW5hdGVzRnJvbUNsYXNzTGlzdChldmVudC50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgICAgcGxheWVyLmF0dGFjayhjb29yZGluYXRlKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQtc3F1YXJlJykuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVR1cm4pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wdXRlckJvYXJkLmRpc3BsYXlIaXRzKCk7XG5cbiAgICAgICAgXG4gICAgICAgIHR1cm4gPSAnY29tcHV0ZXInO1xuICAgICAgICBkaXNwbGF5VHVybi50ZXh0Q29udGVudCA9IFwiT3Bwb25lbnQncyBUdXJuLlwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCAxNTAwKTtcblxuICAgICAgICBjb25zdCBhZGREb3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVR1cm4udGV4dENvbnRlbnQgKz0gJy4nXG4gICAgICAgIH0sIDU1MCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGFkZERvdHMpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlclR1cm4oKSB7XG4gICAgICAgIGNvbXB1dGVyLmF0dGFjaygpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5kaXNwbGF5SGl0cygpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHBvbmVudC1zcXVhcmUnKS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlVHVybik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHR1cm4gPSAncGxheWVyJztcbiAgICAgICAgZGlzcGxheVR1cm4udGV4dENvbnRlbnQgPSAnWW91ciB0dXJuISc7XG4gICAgfVxufVxuIiwiaW1wb3J0IEhpdCBmcm9tICcuLi9pbWcvaGl0LnN2ZydcbmltcG9ydCBLaWxsZWQgZnJvbSAnLi4vaW1nL2tpbGxlZC5zdmcnXG5pbXBvcnQgR0ggZnJvbSAnLi4vaW1nL2dpdGh1Yi1tYXJrLnN2ZydcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRzKCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcicpO1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Bwb25lbnQnKTtcblxuICAgIGNvbnN0IGxpc3QgPSBbcGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmRdO1xuICAgIGxldCBwbGF5ZXIgPSBmYWxzZTtcbiAgICBsaXN0LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgIHBsYXllciA9ICFwbGF5ZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgncicgKyBpKTtcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnYycgKyB4KTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50LXNxdWFyZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1c2VyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBsb2FkTGVnZW5kKCkge1xuICAgIGNvbnN0IGhpdExlZ2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaXQtbGVnZW5kJyk7XG4gICAgY29uc3Qga2lsbGVkTGVnZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2tpbGxlZC1sZWdlbmQnKTtcblxuICAgIGhpdExlZ2VuZC5zcmMgPSBIaXQ7XG4gICAga2lsbGVkTGVnZW5kLnNyYyA9IEtpbGxlZDtcbn1cblxuZnVuY3Rpb24gYWRkR0hMb2dvKCkge1xuICAgIGNvbnN0IGdoID0gbmV3IEltYWdlKCk7XG4gICAgZ2guc3JjID0gR0g7XG4gICAgY29uc3QgbG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbG5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3hhZHZlbnQvYmF0dGxlc2hpcCdcbiAgICBsbmsuaWQgPSAnZ2l0aHViJ1xuICAgIGxuay5hcHBlbmRDaGlsZChnaClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykuYXBwZW5kQ2hpbGQobG5rKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY3JlYXRlQm9hcmRzKCk7XG4gICAgbG9hZExlZ2VuZCgpO1xuICAgIGFkZEdITG9nbygpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21DbGFzc0xpc3QobHN0KSB7XG4gICAgICAgIGxldCBbcm93LCBjb2x1bW5dID0gW2xzdFswXS5zdWJzdHJpbmcoMSksIGxzdFsxXS5zdWJzdHJpbmcoMSldO1xuICAgICAgICByZXR1cm4gW3BhcnNlSW50KHJvdywgMTApLCBwYXJzZUludChjb2x1bW4sIDEwKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU3F1YXJlKGFyciwgdXNlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbYXJyWzBdLCBhcnJbMV1dO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3VzZXJ9Pi5yJHt4fS5jJHt5fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5yJHt4fS5jJHt5fWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYXllckxpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgYWxsT3Bwb25lbnRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wcG9uZW50LXNxdWFyZScpO1xuICAgICAgICBhbGxPcHBvbmVudFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VUdXJuKTtcbiAgICAgICAgfSlcbn1cblxuLy8gUGxhY2Vob2xkZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIG1ha2VUdXJuKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBnZXRDb29yZGluYXRlc0Zyb21DbGFzc0xpc3QoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wcG9uZW50LXNxdWFyZScpLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlVHVybilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBsb2FkRWxlbWVudHMgZnJvbSAnLi9vbmxvYWQvbG9hZEVsZW1lbnRzJ1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJ1xuXG5sb2FkRWxlbWVudHMoKVxuZ2FtZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9