/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nhtml body {\n  background: linear-gradient(to bottom, #56ccf2, #2f80ed);\n  font-family: sans-serif;\n  display: flex;\n  justify-content: flex-end;\n  font-family: \"Roboto\", sans-serif; }\n\n.bg-video {\n  position: absolute;\n  top: -10%;\n  left: -10%;\n  width: 120%;\n  height: 120%;\n  object-fit: cover;\n  z-index: -1;\n  filter: blur(15px); }\n\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  box-sizing: border-box;\n  padding: 40px; }\n  main .current {\n    width: 100%;\n    padding: 16px;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px; }\n  main .main {\n    width: 100%;\n    display: none;\n    align-items: flex-start;\n    color: white;\n    flex-direction: column; }\n    main .main--visible {\n      display: flex; }\n    main .main-icon {\n      position: absolute;\n      width: 320px;\n      filter: blur(3px);\n      z-index: -1;\n      top: 0;\n      left: 0;\n      opacity: 0.5; }\n    main .main-temp > div {\n      display: flex;\n      gap: 24px; }\n      main .main-temp > div .main-temp-time {\n        font-size: 18px; }\n      main .main-temp > div .main-temp-label {\n        font-size: 12px;\n        margin-top: 14px;\n        display: block; }\n    main .main-temp-current {\n      font-size: 130px;\n      letter-spacing: -12px; }\n    main .main-info {\n      display: flex;\n      gap: 40px;\n      align-items: flex-end; }\n      main .main-info-city {\n        font-size: 60px;\n        margin-left: 30px; }\n      main .main-info-weather {\n        font-size: 20px;\n        margin-bottom: 6px; }\n    main .main-wind {\n      display: flex;\n      align-items: center;\n      position: relative; }\n      main .main-wind img {\n        width: 16px;\n        margin-left: 10px;\n        top: 0;\n        right: -24px; }\n      main .main-wind span {\n        font-size: 18px; }\n  main .forecast {\n    margin-top: 40px;\n    display: flex;\n    gap: 10px; }\n    main .forecast-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      border-radius: 8px;\n      background: rgba(0, 0, 0, 0.1);\n      padding: 10px; }\n\naside {\n  flex-shrink: 0;\n  width: 400px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 10px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column; }\n\n.toast {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #d83232;\n  color: #ffffff;\n  border-radius: 4px;\n  padding: 5px 30px;\n  opacity: 0; }\n  .toast p {\n    margin: 0; }\n  .toast.visible {\n    animation: showToast 2.5s forwards; }\n\n.inputWrapper {\n  width: 100%;\n  display: flex;\n  gap: 16px; }\n  .inputWrapper .input {\n    border: 0;\n    padding: 4px 8px;\n    background: transparent;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n    width: 100%;\n    color: white; }\n    .inputWrapper .input::placeholder {\n      color: rgba(255, 255, 255, 0.8); }\n  .inputWrapper .button {\n    border: 0;\n    padding: 4px 8px;\n    border-radius: 15px;\n    background: rgba(255, 255, 255, 0.1);\n    position: relative;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    flex-shrink: 0; }\n    .inputWrapper .button:after, .inputWrapper .button:before {\n      content: \"\";\n      display: block;\n      background-color: white;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%); }\n    .inputWrapper .button:before {\n      height: 14px;\n      width: 2px; }\n    .inputWrapper .button:after {\n      height: 2px;\n      width: 14px; }\n    .inputWrapper .button:disabled {\n      background: none; }\n      .inputWrapper .button:disabled:after, .inputWrapper .button:disabled:before {\n        background: rgba(255, 255, 255, 0.5); }\n\n.city-list {\n  list-style: none;\n  margin-top: 20px;\n  overflow: auto;\n  height: 100%; }\n  .city-list > li {\n    display: flex;\n    align-items: center;\n    gap: 4px; }\n  .city-list-item {\n    padding: 10px 8px;\n    background: none;\n    border: 0;\n    width: 100%;\n    color: inherit;\n    text-align: left;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: background-color 0.2s; }\n    .city-list-item:hover {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .city-list-item:focus {\n      outline: 0;\n      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3); }\n    .city-list-item > div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n      .city-list-item > div > div {\n        display: flex;\n        flex-direction: column;\n        gap: 5px; }\n        .city-list-item > div > div > p {\n          font-size: 2em; }\n    .city-list-item-removeBtn {\n      border: 0;\n      padding: 4px 8px;\n      border-radius: 15px;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      padding: 0;\n      flex-shrink: 0;\n      cursor: pointer;\n      background: transparent;\n      transition: background 0.2s; }\n      .city-list-item-removeBtn:hover {\n        background-color: rgba(216, 50, 50, 0.8); }\n      .city-list-item-removeBtn:after, .city-list-item-removeBtn:before {\n        content: \"\";\n        display: block;\n        background-color: white;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%) rotate(45deg); }\n      .city-list-item-removeBtn:before {\n        height: 10px;\n        width: 2px; }\n      .city-list-item-removeBtn:after {\n        height: 2px;\n        width: 10px; }\n\n@keyframes showToast {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-100%); }\n  20% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0); }\n  80% {\n    opacity: 1; }\n  99% {\n    opacity: 0;\n    display: block; }\n  100% {\n    display: none; } }\n", "",{"version":3,"sources":["webpack://./src/reset.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","@import \"reset\";\n\nhtml,\nbody {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nhtml body {\n    background: linear-gradient(to bottom, #56ccf2, #2f80ed);\n    font-family: sans-serif;\n    display: flex;\n    justify-content: flex-end;\n    font-family: \"Roboto\", sans-serif;\n}\n\n.bg-video {\n    position: absolute;\n    top: -10%;\n    left: -10%;\n    width: 120%;\n    height: 120%;\n    object-fit: cover;\n    z-index: -1;\n    filter: blur(15px);\n}\n\n// MAIN\nmain {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-start;\n    box-sizing: border-box;\n    padding: 40px;\n       .current {\n        width: 100%;\n        padding: 16px;\n        background: rgba(black, 0.1);\n        border-radius: 10px;\n    }\n    .main {  \n        width: 100%;\n        display: none;\n        align-items: flex-start;\n        color: white;\n        flex-direction: column;\n        &--visible {\n            display: flex;\n        }\n    \n        &-icon {\n            position: absolute;\n            width: 320px;\n            filter: blur(3px);\n            z-index: -1;\n            top: 0;\n            left: 0;\n            opacity: 0.5;\n        }\n\n        &-temp {\n            > div {\n                display: flex;\n                gap: 24px;\n                .main-temp-time {\n                    font-size: 18px;\n                }\n                .main-temp-label {\n                    font-size: 12px;\n                    margin-top: 14px;\n                    display: block;\n                }\n            }\n            &-current {\n                font-size: 130px;\n                letter-spacing: -12px;\n            }\n        }\n        &-info {\n            display: flex;\n            gap: 40px;\n            align-items: flex-end;\n            &-city {\n                font-size: 60px;\n                margin-left: 30px;\n            }\n            &-weather {\n                font-size: 20px;\n                margin-bottom: 6px;\n            }\n        }\n        &-wind {\n            display: flex;\n            align-items: center;\n            position: relative;\n            img {\n                width: 16px;\n                margin-left: 10px;\n                top: 0;\n                right: -24px;\n            }\n            span {\n                font-size: 18px;\n            }\n        }\n    }\n    .forecast {\n        margin-top: 40px;\n        display: flex;\n        gap: 10px;\n\n        &-item {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            border-radius: 8px;\n            background: rgba(0, 0, 0, 0.1);\n            padding: 10px;\n        }\n    }\n}\n\naside {\n    flex-shrink: 0;\n    width: 400px;\n    background: rgba(#000, 0.3);\n    padding: 20px;\n    color: rgba(#ffffff, 0.7);\n    margin: 10px;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.toast {\n    position: absolute;\n    top: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgb(216, 50, 50);\n    color: #ffffff;\n    border-radius: 4px;\n    padding: 5px 30px;\n    opacity: 0;\n\n    p {\n        margin: 0;\n    }\n\n    &.visible {\n        animation: showToast 2.5s forwards;\n    }\n}\n\n// input wrapper\n\n.inputWrapper {\n    width: 100%;\n    display: flex;\n    gap: 16px;\n    .input {\n        border: 0;\n        padding: 4px 8px;\n        background: transparent;\n        border-bottom: 1px solid rgba(white, 0.5);\n        width: 100%;\n        color: white;\n        &::placeholder {\n            color: rgba(white, 0.8);\n        }\n    }\n\n    .button {\n        border: 0;\n        padding: 4px 8px;\n        border-radius: 15px;\n        background: rgba(255, 255, 255, 0.1);\n        position: relative;\n        width: 30px;\n        height: 30px;\n        padding: 0;\n        flex-shrink: 0;\n\n        &:after,\n        &:before {\n            content: \"\";\n            display: block;\n            background-color: white;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n\n        &:before {\n            height: 14px;\n            width: 2px;\n        }\n\n        &:after {\n            height: 2px;\n            width: 14px;\n        }\n\n        &:disabled {\n            background: none;\n            &:after,\n            &:before {\n                background: rgba(white, 0.5);\n            }\n        }\n    }\n}\n\n// list in aside\n.city-list {\n    list-style: none;\n    margin-top: 20px;\n    overflow: auto;\n    height: 100%;\n    > li {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n    }\n    &-item {\n        padding: 10px 8px;\n        background: none;\n        border: 0;\n        width: 100%;\n        color: inherit;\n        text-align: left;\n        cursor: pointer;\n        border-radius: 5px;\n        transition: background-color 0.2s;\n        &:hover {\n            background-color: rgba(white, 0.1);\n        }\n        &:focus {\n            outline: 0;\n            box-shadow: 0px 0px 8px rgba(white, 0.3);\n        }\n\n        > div {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            > div {\n                display: flex;\n                flex-direction: column;\n                gap: 5px;\n                > p {\n                    font-size: 2em;\n                }\n            }\n        }\n\n        &-removeBtn {\n            border: 0;\n            padding: 4px 8px;\n            border-radius: 15px;\n            position: relative;\n            width: 20px;\n            height: 20px;\n            padding: 0;\n            flex-shrink: 0;\n            cursor: pointer;\n            background: transparent;\n            transition: background 0.2s;\n\n            &:hover {\n                background-color: rgba(216, 50, 50, 0.8);\n            }\n            &:after,\n            &:before {\n                content: \"\";\n                display: block;\n                background-color: white;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) rotate(45deg);\n            }\n\n            &:before {\n                height: 10px;\n                width: 2px;\n            }\n\n            &:after {\n                height: 2px;\n                width: 10px;\n            }\n        }\n    }\n}\n\n@keyframes showToast {\n    0% {\n        opacity: 0;\n        transform: translateX(-50%) translateY(-100%);\n    }\n    20% {\n        opacity: 1;\n        transform: translateX(-50%) translateY(0);\n    }\n    80% {\n        opacity: 1;\n    }\n\n    99% {\n        opacity: 0;\n        display: block;\n    }\n\n    100% {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UI = void 0;
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const date_utils_1 = __webpack_require__(/*! ./date-utils */ "./src/date-utils.ts");
var LIST_ELEMTNS;
(function (LIST_ELEMTNS) {
    LIST_ELEMTNS["name"] = "name";
    LIST_ELEMTNS["temp"] = "temp";
    LIST_ELEMTNS["pressure"] = "press";
    LIST_ELEMTNS["icon"] = "icon";
})(LIST_ELEMTNS || (LIST_ELEMTNS = {}));
var WEATHER_TYPES;
(function (WEATHER_TYPES) {
    WEATHER_TYPES["thunderstorm"] = "2";
    WEATHER_TYPES["drizzle"] = "3";
    WEATHER_TYPES["rain"] = "5";
    WEATHER_TYPES["snow"] = "6";
    WEATHER_TYPES["atmosphere"] = "7";
    WEATHER_TYPES["clear"] = "8";
})(WEATHER_TYPES || (WEATHER_TYPES = {}));
class UI {
    constructor(main) {
        this.mainContext = main;
    }
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }
    renderMainView(forecastData, activeCity) {
        if (forecastData) {
            document.getElementById('main').classList.add('main--visible');
            this.switchTheme(activeCity.weather[0].id);
            this.renderForecast(forecastData);
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = activeCity.weather[0].description;
            document.getElementById('mainTime').innerHTML = (0, date_utils_1.getDay)(activeCity.dt, activeCity.timezone);
            const iconEl = document.getElementById("mainIcon");
            iconEl.src = `http://openweathermap.org/img/wn/${activeCity.weather[0].icon}@2x.png`;
            iconEl.alt = activeCity.weather[0].description;
            iconEl.title = activeCity.weather[0].description;
            document.getElementById('mainTemp').innerHTML = `${activeCity.main.temp.toFixed(1)}°C`;
            document.getElementById('mainTempFeels').innerHTML = `${activeCity.main.feels_like}°C`;
            document.getElementById('mainWindSpeed').innerHTML = `${activeCity.wind.speed}m/s`;
            document.getElementById('mainWindIcon').style.transform = `rotate(${activeCity.wind.deg}deg)`;
        }
    }
    renderForecast(forecastData) {
        const dailyData = forecastData.daily.slice(1);
        const wrapper = document.getElementById('forecast');
        wrapper.innerHTML = null;
        dailyData.forEach((data, index) => {
            const item = document.createElement('li');
            item.className = "forecast-item";
            const itemDate = document.createElement('p');
            itemDate.innerText = index === 0 ? 'tomorrow' : (0, date_utils_1.getDay)(data.dt, forecastData.timezone_offset);
            const itemIcon = document.createElement('img');
            itemIcon.innerText = (0, date_utils_1.getDay)(data.dt, forecastData.timezone_offset);
            itemIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            itemIcon.alt = data.weather[0].description;
            itemIcon.title = data.weather[0].description;
            const itemTemp = document.createElement('p');
            itemTemp.innerText = `${data.temp.min.toFixed(1)}°C / ${data.temp.max.toFixed(1)}°C`;
            item.appendChild(itemDate);
            item.appendChild(itemIcon);
            item.appendChild(itemTemp);
            wrapper.appendChild(item);
        });
    }
    switchTheme(weatherId) {
        const firstNumber = String(weatherId)[0];
        const video = document.getElementById('bgVideo');
        let videoSrc;
        switch (firstNumber) {
            case WEATHER_TYPES.thunderstorm:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/582/original/dark-forest.mp4';
                break;
            case WEATHER_TYPES.drizzle:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4';
                break;
            case WEATHER_TYPES.rain:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/049/047/original/panning-and-close-up-to-rain-drop-on-the-glass-of-window.mp4';
                break;
            case WEATHER_TYPES.snow:
                videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2015-09/small_watermarked/Slow_Snow_Seg_Comp_Flakes_preview.webm';
                break;
            case WEATHER_TYPES.atmosphere:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/034/069/original/Mountain-rain5.mp4';
                break;
            case WEATHER_TYPES.clear:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
            default:
                videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4';
                break;
        }
        if (weatherId > 800)
            videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2020-07/small_watermarked/06_1596083776_preview.webm';
        video.src = videoSrc;
    }
    removeCity(id) {
        const allCities = JSON.parse(localStorage.getItem(apiCaller_1.DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(apiCaller_1.DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities, true);
        }
    }
    populateListElement(element, weatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`);
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }
    renderWeatherElement(weatherData, elementId) {
        const wrapper = document.getElementById('cityList');
        const element = document.createElement('li');
        element.id = elementId;
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);
        this.populateListElement(element, weatherData);
    }
    renderWeatherList(weatherData, force = false) {
        if (force) {
            const wrapper = document.getElementById('cityList');
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId);
            if (element)
                this.populateListElement(element, data);
            else
                this.renderWeatherElement(data, elementId);
        });
    }
}
exports.UI = UI;


/***/ }),

/***/ "./src/apiCaller.ts":
/*!**************************!*\
  !*** ./src/apiCaller.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiCaller = exports.DATA_KEY = void 0;
exports.DATA_KEY = "weather_data";
const API_KEY = "cbeeb4917456a9dc5bef570967628521";
class ApiCaller {
    constructor() {
        this.callData();
    }
    callData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            if (city) {
                const weather = yield this.getWeatherData(city);
                if (weather && weather.cod === 200) {
                    this.saveData(weather);
                }
                return weather.cod;
            }
        });
    }
    refreshData() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const currentCities = ((_a = JSON.parse(localStorage.getItem(exports.DATA_KEY))) === null || _a === void 0 ? void 0 : _a.map(v => v.name)) || [];
            const newCities = Promise.all(currentCities.map((city) => __awaiter(this, void 0, void 0, function* () {
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const weatherResp = yield fetch(apiURL);
                const weatherData = yield weatherResp.json();
                this.saveData(weatherData);
                return weatherData;
            })));
            return newCities;
        });
    }
    getWeatherData(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResp = yield fetch(apiURL);
            const weatherData = yield weatherResp.json();
            return weatherData;
        });
    }
    getForecastData(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
            const forecastResp = yield fetch(apiURL);
            const forecastData = yield forecastResp.json();
            forecastData.daily = forecastData.daily.slice(0, 6);
            return forecastData;
        });
    }
    saveData(data) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if (indexInLS !== -1) {
            currentData[indexInLS] = data;
            localStorage.setItem(exports.DATA_KEY, JSON.stringify(currentData));
            return;
        }
        localStorage.setItem(exports.DATA_KEY, JSON.stringify([...currentData, data]));
    }
    getData() {
        const data = localStorage.getItem(exports.DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
exports.ApiCaller = ApiCaller;


/***/ }),

/***/ "./src/date-utils.ts":
/*!***************************!*\
  !*** ./src/date-utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDay = void 0;
function getDay(dt, timezoneOffset) {
    const date = new Date((dt + timezoneOffset) * 1000);
    const stringDate = date.toLocaleDateString();
    return stringDate;
}
exports.getDay = getDay;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const apiCaller_1 = __webpack_require__(/*! ./apiCaller */ "./src/apiCaller.ts");
const UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
const ACTIVE_CITY_KEY = "active_city";
class Main {
    constructor() {
        this.activeCity = Number(localStorage.getItem(ACTIVE_CITY_KEY));
        this.apiCaller = new apiCaller_1.ApiCaller();
        this.UI = new UI_1.UI(this);
        this.weatherData = this.apiCaller.getData();
        this.setActiveCity();
        this.initRefresher();
        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
    }
    initRefresher() {
        setInterval(() => {
            this.apiCaller.refreshData().then(currentData => {
                this.weatherData = currentData;
                this.UI.renderWeatherList(this.weatherData);
            });
            if (this.activeCity) {
                this.setActiveCity();
            }
        }, 60000);
    }
    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton');
        const cityInput = document.getElementById('cityInput');
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if (event.target.value.length > 0)
                cityButton.disabled = false;
            else
                cityButton.disabled = true;
        });
    }
    setActiveCity() {
        const activeCity = this.weatherData.find(city => city.id === this.activeCity);
        if (activeCity) {
            this.apiCaller.getForecastData(activeCity.coord.lat, activeCity.coord.lon).then(activeForecast => {
                this.activeCityData = activeForecast;
                this.UI.renderMainView(this.activeCityData, activeCity);
            });
        }
    }
    changeActiveCity(index) {
        this.activeCity = index;
        localStorage.setItem(ACTIVE_CITY_KEY, String(index));
        this.setActiveCity();
    }
}
exports.Main = Main;
new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBbkVELG9CQW1FQztBQUdELElBQUksSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2FwaUNhbGxlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvZGF0ZS11dGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5odG1sIGJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU2Y2NmMiwgIzJmODBlZCk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmJnLXZpZGVvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwJTtcXG4gIGxlZnQ6IC0xMCU7XFxuICB3aWR0aDogMTIwJTtcXG4gIGhlaWdodDogMTIwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgei1pbmRleDogLTE7XFxuICBmaWx0ZXI6IGJsdXIoMTVweCk7IH1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDQwcHg7IH1cXG4gIG1haW4gLmN1cnJlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICBtYWluIC5tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgbWFpbiAubWFpbi0tdmlzaWJsZSB7XFxuICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICBtYWluIC5tYWluLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgei1pbmRleDogLTE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgb3BhY2l0eTogMC41OyB9XFxuICAgIG1haW4gLm1haW4tdGVtcCA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDI0cHg7IH1cXG4gICAgICBtYWluIC5tYWluLXRlbXAgPiBkaXYgLm1haW4tdGVtcC10aW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgICAgIG1haW4gLm1haW4tdGVtcCA+IGRpdiAubWFpbi10ZW1wLWxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICBtYWluIC5tYWluLXRlbXAtY3VycmVudCB7XFxuICAgICAgZm9udC1zaXplOiAxMzBweDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTEycHg7IH1cXG4gICAgbWFpbiAubWFpbi1pbmZvIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogNDBweDtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG4gICAgICBtYWluIC5tYWluLWluZm8tY2l0eSB7XFxuICAgICAgICBmb250LXNpemU6IDYwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxcbiAgICAgIG1haW4gLm1haW4taW5mby13ZWF0aGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsgfVxcbiAgICBtYWluIC5tYWluLXdpbmQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICBtYWluIC5tYWluLXdpbmQgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogLTI0cHg7IH1cXG4gICAgICBtYWluIC5tYWluLXdpbmQgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gIG1haW4gLmZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4OyB9XFxuICAgIG1haW4gLmZvcmVjYXN0LWl0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgcGFkZGluZzogMTBweDsgfVxcblxcbmFzaWRlIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4udG9hc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogI2Q4MzIzMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogNXB4IDMwcHg7XFxuICBvcGFjaXR5OiAwOyB9XFxuICAudG9hc3QgcCB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgLnRvYXN0LnZpc2libGUge1xcbiAgICBhbmltYXRpb246IHNob3dUb2FzdCAyLjVzIGZvcndhcmRzOyB9XFxuXFxuLmlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7IH1cXG4gIC5pbnB1dFdyYXBwZXIgLmlucHV0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG4gIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwOyB9XFxuICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjphZnRlciwgLmlucHV0V3JhcHBlciAuYnV0dG9uOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246YmVmb3JlIHtcXG4gICAgICBoZWlnaHQ6IDE0cHg7XFxuICAgICAgd2lkdGg6IDJweDsgfVxcbiAgICAuaW5wdXRXcmFwcGVyIC5idXR0b246YWZ0ZXIge1xcbiAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgIHdpZHRoOiAxNHB4OyB9XFxuICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgICAgIC5pbnB1dFdyYXBwZXIgLmJ1dHRvbjpkaXNhYmxlZDphZnRlciwgLmlucHV0V3JhcHBlciAuYnV0dG9uOmRpc2FibGVkOmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2l0eS1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5jaXR5LWxpc3QgPiBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4OyB9XFxuICAuY2l0eS1saXN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7IH1cXG4gICAgLmNpdHktbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gICAgLmNpdHktbGlzdC1pdGVtOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxcbiAgICAuY2l0eS1saXN0LWl0ZW0gPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0gPiBkaXYgPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDsgfVxcbiAgICAgICAgLmNpdHktbGlzdC1pdGVtID4gZGl2ID4gZGl2ID4gcCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtOyB9XFxuICAgIC5jaXR5LWxpc3QtaXRlbS1yZW1vdmVCdG4ge1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCA1MCwgNTAsIDAuOCk7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmFmdGVyLCAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7IH1cXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuOmJlZm9yZSB7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMnB4OyB9XFxuICAgICAgLmNpdHktbGlzdC1pdGVtLXJlbW92ZUJ0bjphZnRlciB7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4OyB9XFxuXFxuQGtleWZyYW1lcyBzaG93VG9hc3Qge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAwJSk7IH1cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApOyB9XFxuICA4MCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICA5OSUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgMTAwJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FDdkNsQjs7RUFFSSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx3REFBd0Q7RUFDeEQsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7O0FBR3JDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VB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QUNWLGdEQUFrQyxFQUFBO0lBZnpDO01BbUJPLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7TUFyQnJDO1FBdUJXLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsUUFBUSxFQUFBO1FBekJuQjtVQTJCZSxjQUFjLEVBQUE7SUFLMUI7TUFDSSxTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO01BQ1YsY0FBYztNQUNkLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsMkJBQTJCLEVBQUE7TUFYOUI7UUFjTyx3Q0FBd0MsRUFBQTtNQWQvQztRQWtCTyxXQUFXO1FBQ1gsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCw4Q0FBOEMsRUFBQTtNQXhCckQ7UUE0Qk8sWUFBWTtRQUNaLFVBQVUsRUFBQTtNQTdCakI7UUFpQ08sV0FBVztRQUNYLFdBQVcsRUFBQTs7QUFNM0I7RUFDSTtJQUNJLFVBQVU7SUFDViw2Q0FBNkMsRUFBQTtFQUVqRDtJQUNJLFVBQVU7SUFDVix5Q0FBeUMsRUFBQTtFQUU3QztJQUNJLFVBQVUsRUFBQTtFQUdkO0lBQ0ksVUFBVTtJQUNWLGNBQWMsRUFBQTtFQUdsQjtJQUNJLGFBQWEsRUFBQSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIixcIkBpbXBvcnQgXFxcInJlc2V0XFxcIjtcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaHRtbCBib2R5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU2Y2NmMiwgIzJmODBlZCk7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5iZy12aWRlbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTAlO1xcbiAgICBsZWZ0OiAtMTAlO1xcbiAgICB3aWR0aDogMTIwJTtcXG4gICAgaGVpZ2h0OiAxMjAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGZpbHRlcjogYmx1cigxNXB4KTtcXG59XFxuXFxuLy8gTUFJTlxcbm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgICAgLmN1cnJlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC4xKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLm1haW4geyAgXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAmLS12aXNpYmxlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICYtaWNvbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXRlbXAge1xcbiAgICAgICAgICAgID4gZGl2IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAubWFpbi10ZW1wLXRpbWUge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5tYWluLXRlbXAtbGFiZWwge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICYtY3VycmVudCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTMwcHg7XFxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMTJweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLWluZm8ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA0MHB4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICAmLWNpdHkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmLXdlYXRoZXIge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLXdpbmQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjRweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgJi1pdGVtIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuYXNpZGUge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMwMDAsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2JhKCNmZmZmZmYsIDAuNyk7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvYXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE2LCA1MCwgNTApO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcXG4gICAgb3BhY2l0eTogMDtcXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgJi52aXNpYmxlIHtcXG4gICAgICAgIGFuaW1hdGlvbjogc2hvd1RvYXN0IDIuNXMgZm9yd2FyZHM7XFxuICAgIH1cXG59XFxuXFxuLy8gaW5wdXQgd3JhcHBlclxcblxcbi5pbnB1dFdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICAuaW5wdXQge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNSk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC44KTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuXFxuICAgICAgICAmOmFmdGVyLFxcbiAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgICB3aWR0aDogMTRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6ZGlzYWJsZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgJjphZnRlcixcXG4gICAgICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIDAuNSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi8vIGxpc3QgaW4gYXNpZGVcXG4uY2l0eS1saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgPiBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNHB4O1xcbiAgICB9XFxuICAgICYtaXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDAuMSk7XFxuICAgICAgICB9XFxuICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEod2hpdGUsIDAuMyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICAgICAgICA+IHAge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLXJlbW92ZUJ0biB7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDUwLCA1MCwgMC44KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjphZnRlcixcXG4gICAgICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvd1RvYXN0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgfVxcbiAgICAyMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgIDgwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIDk5JSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IHsgSUZvcmVjYXN0RGF0YSwgSVdlYXRoZXJEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBEQVRBX0tFWSB9IGZyb20gJy4vYXBpQ2FsbGVyJztcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGdldERheSB9IGZyb20gJy4vZGF0ZS11dGlscyc7XG5cbmVudW0gTElTVF9FTEVNVE5TIHtcbiAgICBuYW1lID0gJ25hbWUnLFxuICAgIHRlbXAgPSAndGVtcCcsXG4gICAgcHJlc3N1cmUgPSAncHJlc3MnLFxuICAgIGljb24gPSAnaWNvbidcbn1cblxuZW51bSBXRUFUSEVSX1RZUEVTIHtcbiAgICB0aHVuZGVyc3Rvcm0gPSAnMicsXG4gICAgZHJpenpsZSA9ICczJyxcbiAgICByYWluID0gJzUnLFxuICAgIHNub3cgPSAnNicsXG4gICAgYXRtb3NwaGVyZSA9ICc3JyxcbiAgICBjbGVhciA9ICc4J1xufVxuXG5leHBvcnQgY2xhc3MgVUkge1xuICAgIG1haW5Db250ZXh0OiBNYWluO1xuICAgIGNvbnN0cnVjdG9yKG1haW46IE1haW4pIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGV4dCA9IG1haW47XG4gICAgfVxuICAgIHNob3dBcGlFcnJvcigpIHtcbiAgICAgICAgY29uc3QgdG9hc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclRvYXN0Jyk7XG4gICAgICAgIC8vIGFkZCBjbGFzcyB0aGF0IGFuaW1hdGVzIHRoZSB0b2FzdFxuICAgICAgICB0b2FzdEVsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdG9hc3RFbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgdG9hc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAvLyByZW1vdmUgYGFuaW1hdGlvbmVuZGAgZXZlbnQgYWZ0ZXIgZXhlY3V0aW9uIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnR5cGUsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIG1haW4gVUlcbiAgICByZW5kZXJNYWluVmlldyhmb3JlY2FzdERhdGE6IElGb3JlY2FzdERhdGEsIGFjdGl2ZUNpdHk6IElXZWF0aGVyRGF0YSkge1xuICAgICAgICBpZiAoZm9yZWNhc3REYXRhKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmNsYXNzTGlzdC5hZGQoJ21haW4tLXZpc2libGUnKTtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGhlbWUoYWN0aXZlQ2l0eS53ZWF0aGVyWzBdLmlkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRm9yZWNhc3QoZm9yZWNhc3REYXRhKTtcbiAgICAgICAgICAgIC8vIGdlbmVyYWxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ2l0eScpLmlubmVySFRNTCA9IGFjdGl2ZUNpdHkubmFtZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluV2VhdGhlcicpLmlubmVySFRNTCA9IGFjdGl2ZUNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluVGltZScpLmlubmVySFRNTCA9IGdldERheShhY3RpdmVDaXR5LmR0LCBhY3RpdmVDaXR5LnRpbWV6b25lKTtcbiAgICAgICAgICAgIC8vIGljb25cbiAgICAgICAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkljb25cIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIGljb25FbC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHthY3RpdmVDaXR5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgICAgICAgIGljb25FbC5hbHQgPSBhY3RpdmVDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBpY29uRWwudGl0bGUgPSBhY3RpdmVDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAvLyB0ZW1wXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRlbXAnKS5pbm5lckhUTUwgPSBgJHthY3RpdmVDaXR5Lm1haW4udGVtcC50b0ZpeGVkKDEpfcKwQ2A7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblRlbXBGZWVscycpLmlubmVySFRNTCA9IGAke2FjdGl2ZUNpdHkubWFpbi5mZWVsc19saWtlfcKwQ2A7XG4gICAgICAgICAgICAvLyB3aW5kXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbldpbmRTcGVlZCcpLmlubmVySFRNTCA9IGAke2FjdGl2ZUNpdHkud2luZC5zcGVlZH1tL3NgO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5XaW5kSWNvbicpLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHthY3RpdmVDaXR5LndpbmQuZGVnfWRlZylgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3REYXRhOiBJRm9yZWNhc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IGRhaWx5RGF0YSA9IGZvcmVjYXN0RGF0YS5kYWlseS5zbGljZSgxKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdCcpO1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgIGRhaWx5RGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtaXRlbVwiO1xuICAgICAgICAgICAgLy8gY2hpbGQgaXRlbXNcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgaXRlbURhdGUuaW5uZXJUZXh0ID0gaW5kZXggPT09IDAgPyAndG9tb3Jyb3cnIDogZ2V0RGF5KGRhdGEuZHQsIGZvcmVjYXN0RGF0YS50aW1lem9uZV9vZmZzZXQpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaXRlbUljb24uaW5uZXJUZXh0ID0gZ2V0RGF5KGRhdGEuZHQsIGZvcmVjYXN0RGF0YS50aW1lem9uZV9vZmZzZXQpO1xuICAgICAgICAgICAgaXRlbUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgICAgICBpdGVtSWNvbi5hbHQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBpdGVtSWNvbi50aXRsZSA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgaXRlbVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBpdGVtVGVtcC5pbm5lclRleHQgPSBgJHtkYXRhLnRlbXAubWluLnRvRml4ZWQoMSl9wrBDIC8gJHtkYXRhLnRlbXAubWF4LnRvRml4ZWQoMSl9wrBDYFxuXG4gICAgICAgICAgICAvLyBhcHBlbmRpbmdcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSWNvbik7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZW1wKTtcblxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3dpdGNoVGhlbWUod2VhdGhlcklkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZmlyc3ROdW1iZXIgPSBTdHJpbmcod2VhdGhlcklkKVswXTtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdWaWRlbycpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgIGxldCB2aWRlb1NyYztcbiAgICAgICAgc3dpdGNoIChmaXJzdE51bWJlcikge1xuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLnRodW5kZXJzdG9ybTogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDQ0LzU4Mi9vcmlnaW5hbC9kYXJrLWZvcmVzdC5tcDQnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5kcml6emxlOiB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wNDQvNzY3L29yaWdpbmFsL1AxMTQwODI4Lm1wNCc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBXRUFUSEVSX1RZUEVTLnJhaW46IHZpZGVvU3JjID0gJ2h0dHBzOi8vc3RhdGljLnZpZGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDAwLzA0OS8wNDcvb3JpZ2luYWwvcGFubmluZy1hbmQtY2xvc2UtdXAtdG8tcmFpbi1kcm9wLW9uLXRoZS1nbGFzcy1vZi13aW5kb3cubXA0JzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMuc25vdzogdmlkZW9TcmMgPSAnaHR0cHM6Ly9jZG4udmlkZXZvLm5ldC92aWRldm9fZmlsZXMvdmlkZW8vZnJlZS8yMDE1LTA5L3NtYWxsX3dhdGVybWFya2VkL1Nsb3dfU25vd19TZWdfQ29tcF9GbGFrZXNfcHJldmlldy53ZWJtJzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFdFQVRIRVJfVFlQRVMuYXRtb3NwaGVyZTogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDM0LzA2OS9vcmlnaW5hbC9Nb3VudGFpbi1yYWluNS5tcDQnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV0VBVEhFUl9UWVBFUy5jbGVhcjogdmlkZW9TcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmlkZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDAvMDM5LzQ2Ni9vcmlnaW5hbC81OF8yOF8wOF8xOS5tcDQnOyBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6ICB2aWRlb1NyYyA9ICdodHRwczovL3N0YXRpYy52aWRlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwMC8wMzkvNDY2L29yaWdpbmFsLzU4XzI4XzA4XzE5Lm1wNCc7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdoeSB0d28gZ3JvdXBzIGhhdmUgdGhlIHNhbWUga2V5IGNvZGUgZ3JvdXAgd3RmIC8vIGNsb3VkeVxuICAgICAgICBpZih3ZWF0aGVySWQgPiA4MDApIHZpZGVvU3JjID0gJ2h0dHBzOi8vY2RuLnZpZGV2by5uZXQvdmlkZXZvX2ZpbGVzL3ZpZGVvL2ZyZWUvMjAyMC0wNy9zbWFsbF93YXRlcm1hcmtlZC8wNl8xNTk2MDgzNzc2X3ByZXZpZXcud2VibSc7XG4gICAgICAgIHZpZGVvLnNyYyA9IHZpZGVvU3JjO1xuICAgIH1cblxuICAgIC8vIGFzaWRlIFVJXG4gICAgcmVtb3ZlQ2l0eShpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFsbENpdGllczogSVdlYXRoZXJEYXRhW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKSk7XG4gICAgICAgIGlmIChhbGxDaXRpZXMgJiYgaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmRDaXRpZXMgPSBhbGxDaXRpZXMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZENpdGllcykpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJXZWF0aGVyTGlzdChmaWx0ZXJkQ2l0aWVzLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdWxhdGVMaXN0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgd2VhdGhlckRhdGE6IElXZWF0aGVyRGF0YSkge1xuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfSAjJHtwYXJlbnRJZH1fJHtMSVNUX0VMRU1UTlMuaWNvbn1gKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBpY29uRWwuYWx0ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWNvbkVsLnRpdGxlID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy5uYW1lfWApLmlubmVySFRNTCA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcmVudElkfSAjJHtwYXJlbnRJZH1fJHtMSVNUX0VMRU1UTlMucHJlc3N1cmV9YCkuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZX0gaFBBYDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFyZW50SWR9ICMke3BhcmVudElkfV8ke0xJU1RfRUxFTVROUy50ZW1wfWApLmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLm1haW4udGVtcC50b0ZpeGVkKDEpfcKwQ2A7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcldlYXRoZXJFbGVtZW50KHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEsIGVsZW1lbnRJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUxpc3QnKTtcbiAgICAgICAgLy8gbWFpbiBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBlbGVtZW50LmlkID0gZWxlbWVudElkO1xuICAgICAgICAvLyBvdGhlciBlbGVtZW50c1xuICAgICAgICBjb25zdCBlbGVtZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRCdG4uY2xhc3NOYW1lID0gXCJjaXR5LWxpc3QtaXRlbVwiO1xuICAgICAgICAvLyBuYW1lXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZUVsLmlkID0gYCR7ZWxlbWVudElkfV8ke0xJU1RfRUxFTVROUy5uYW1lfWA7XG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXJDaGlsZC5hcHBlbmRDaGlsZChuYW1lRWwpO1xuICAgICAgICAvLyB0ZW1wZXJhdHVyZVxuICAgICAgICBjb25zdCB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRlbXBFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMudGVtcH1gO1xuICAgICAgICBlbGVtZW50QnRuQ29udGFpbmVyQ2hpbGQuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgICAgICAgLy8gcHJlc3N1cmVcbiAgICAgICAgY29uc3QgcHJlc3NFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJlc3NFbC5pZCA9IGAke2VsZW1lbnRJZH1fJHtMSVNUX0VMRU1UTlMucHJlc3N1cmV9YDtcbiAgICAgICAgZWxlbWVudEJ0bkNvbnRhaW5lckNoaWxkLmFwcGVuZENoaWxkKHByZXNzRWwpO1xuICAgICAgICAvL2ljb24gXG4gICAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBpY29uRWwuaWQgPSBgJHtlbGVtZW50SWR9XyR7TElTVF9FTEVNVE5TLmljb259YDtcblxuICAgICAgICAvLyByZW1vdmUgYnV0dG9uXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bkVsLmNsYXNzTmFtZSA9IFwiY2l0eS1saXN0LWl0ZW0tcmVtb3ZlQnRuXCI7XG4gICAgICAgIHJlbW92ZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMucmVtb3ZlQ2l0eSh3ZWF0aGVyRGF0YS5pZCkpO1xuXG4gICAgICAgIC8vIGFjdGl2YXRpb25cbiAgICAgICAgZWxlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRleHQuY2hhbmdlQWN0aXZlQ2l0eSh3ZWF0aGVyRGF0YS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFwcGVuZGluZ1xuICAgICAgICBlbGVtZW50QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRCdG5Db250YWluZXJDaGlsZCk7XG4gICAgICAgIGVsZW1lbnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkVsKTtcbiAgICAgICAgZWxlbWVudEJ0bi5hcHBlbmRDaGlsZChlbGVtZW50QnRuQ29udGFpbmVyKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50QnRuKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyZW1vdmVCdG5FbCk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQsIHdlYXRoZXJEYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXJXZWF0aGVyTGlzdCh3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhW10sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlMaXN0Jyk7XG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgd2VhdGhlckRhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudElkID0gYGxpc3RFbF8ke2RhdGEuaWR9YDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgLy8gdG8gYXZvaWQgdW5uZWNlc3NhYXJ5IHJlLXJlbmRlcmluZyBvZiBhbGwgbGlzdCwganVzdCByZWZyZXNoIG5ldyBjb250ZW50XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkgdGhpcy5wb3B1bGF0ZUxpc3RFbGVtZW50KGVsZW1lbnQsIGRhdGEpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlbmRlcldlYXRoZXJFbGVtZW50KGRhdGEsIGVsZW1lbnRJZCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IElGb3JlY2FzdERhdGEsIElXZWF0aGVyRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IERBVEFfS0VZID0gXCJ3ZWF0aGVyX2RhdGFcIlxuY29uc3QgQVBJX0tFWSA9IFwiY2JlZWI0OTE3NDU2YTlkYzViZWY1NzA5Njc2Mjg1MjFcIjtcblxuZXhwb3J0IGNsYXNzIEFwaUNhbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FsbERhdGEoKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxsRGF0YShjaXR5Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmKGNpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB0aGlzLmdldFdlYXRoZXJEYXRhKGNpdHkpO1xuICAgICAgICAgICAgaWYod2VhdGhlciAmJiB3ZWF0aGVyLmNvZCA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh3ZWF0aGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuY29kO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGFzeW5jIHJlZnJlc2hEYXRhKCk6IFByb21pc2U8SVdlYXRoZXJEYXRhW10+IHtcbiAgICAgICAgY29uc3QgY3VycmVudENpdGllcyA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfS0VZKSkgYXMgSVdlYXRoZXJEYXRhW10pXG4gICAgICAgICAgICA/Lm1hcCh2ID0+IHYubmFtZSkgfHwgW107XG4gICAgICAgIGNvbnN0IG5ld0NpdGllcyA9IFByb21pc2UuYWxsKGN1cnJlbnRDaXRpZXMubWFwKGFzeW5jIChjaXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcGlVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYDtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJSZXNwID0gYXdhaXQgZmV0Y2goYXBpVVJMKTtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhOiBJV2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcC5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXJEYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBuZXdDaXRpZXM7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0V2VhdGhlckRhdGEoY2l0eTogc3RyaW5nKTogUHJvbWlzZTxJV2VhdGhlckRhdGE+IHtcbiAgICAgICAgY29uc3QgYXBpVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2A7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXNwID0gYXdhaXQgZmV0Y2goYXBpVVJMKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGE6IElXZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwLmpzb24oKTtcblxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Rm9yZWNhc3REYXRhKGxhdDogbnVtYmVyLCBsb25nOiBudW1iZXIpOiBQcm9taXNlPElGb3JlY2FzdERhdGE+IHtcbiAgICAgICAgY29uc3QgYXBpVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9uZ30mZXhjbHVkZT1taW51dGVseSxob3VybHkmYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgO1xuICAgICAgICBjb25zdCBmb3JlY2FzdFJlc3AgPSBhd2FpdCBmZXRjaChhcGlVUkwpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGE6IElGb3JlY2FzdERhdGEgPSBhd2FpdCBmb3JlY2FzdFJlc3AuanNvbigpO1xuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIG1vcmUgZGFpbHkgZGF0YVxuICAgICAgICBmb3JlY2FzdERhdGEuZGFpbHkgPSBmb3JlY2FzdERhdGEuZGFpbHkuc2xpY2UoMCwgNik7XG5cbiAgICAgICAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShkYXRhOiBJV2VhdGhlckRhdGEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgY29uc3QgaW5kZXhJbkxTID0gY3VycmVudERhdGEuZmluZEluZGV4KCh2YWwpID0+IHZhbC5pZCA9PT0gZGF0YS5pZCk7XG4gICAgICAgIGlmKGluZGV4SW5MUyAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGRhdGEgYWxyZWFkeSBzYXZlZCwgcmVmcmVzaCBvbmUgaXRlbVxuICAgICAgICAgICAgY3VycmVudERhdGFbaW5kZXhJbkxTXSA9IGRhdGE7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShbLi4uY3VycmVudERhdGEsIGRhdGFdKSk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpOiBJV2VhdGhlckRhdGFbXSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShEQVRBX0tFWSk7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBnZXREYXkoZHQ6IG51bWJlciwgdGltZXpvbmVPZmZzZXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKChkdCArIHRpbWV6b25lT2Zmc2V0KSAqIDEwMDApO1xuICAgIGNvbnN0IHN0cmluZ0RhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiBzdHJpbmdEYXRlO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgZ2V0RGF5XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IHsgSUZvcmVjYXN0RGF0YSwgSVdlYXRoZXJEYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBBcGlDYWxsZXIgfSBmcm9tICcuL2FwaUNhbGxlcic7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vVUknO1xuXG5jb25zdCBBQ1RJVkVfQ0lUWV9LRVkgPSBcImFjdGl2ZV9jaXR5XCJcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICAgIGFwaUNhbGxlcjogQXBpQ2FsbGVyO1xuICAgIFVJOiBVSTtcbiAgICB3ZWF0aGVyRGF0YTogSVdlYXRoZXJEYXRhW107XG4gICAgYWN0aXZlQ2l0eTogSVdlYXRoZXJEYXRhWydpZCddID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFDVElWRV9DSVRZX0tFWSkpO1xuICAgIGFjdGl2ZUNpdHlEYXRhOiBJRm9yZWNhc3REYXRhO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwaUNhbGxlciA9IG5ldyBBcGlDYWxsZXIoKTtcbiAgICAgICAgdGhpcy5VSSA9IG5ldyBVSSh0aGlzKTtcbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHRoaXMuYXBpQ2FsbGVyLmdldERhdGEoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDaXR5KCk7XG4gICAgICAgIHRoaXMuaW5pdFJlZnJlc2hlcigpO1xuICAgICAgICB0aGlzLmJpbmRJbnB1dEV2ZW50cygpO1xuICAgICAgICB0aGlzLlVJLnJlbmRlcldlYXRoZXJMaXN0KHRoaXMud2VhdGhlckRhdGEpO1xuICAgIH1cbiAgICBcbiAgICBpbml0UmVmcmVzaGVyKCl7XG4gICAgICAgIC8vIHJlZnJlc2ggZGF0YSBldmVyeSBtaW51dGVcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGlDYWxsZXIucmVmcmVzaERhdGEoKS50aGVuKGN1cnJlbnREYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJEYXRhID0gY3VycmVudERhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJXZWF0aGVyTGlzdCh0aGlzLndlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVDaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVDaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDYwMDAwKTtcbiAgICB9XG5cbiAgICBiaW5kSW5wdXRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJGb3JtJyk7XG4gICAgICAgIGNvbnN0IGNpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgd2VhdGhlckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hcGlDYWxsZXIuY2FsbERhdGEoY2l0eUlucHV0LnZhbHVlKS50aGVuKChjb2RlOiBJV2VhdGhlckRhdGFbJ2NvZCddKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihjb2RlKSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUkuc2hvd0FwaUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlckRhdGEgPSB0aGlzLmFwaUNhbGxlci5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5VSS5yZW5kZXJXZWF0aGVyTGlzdCh0aGlzLndlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2l0eUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjaXR5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUubGVuZ3RoID4gMCkgY2l0eUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxzZSBjaXR5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlQ2l0eSgpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2l0eSA9IHRoaXMud2VhdGhlckRhdGEuZmluZChjaXR5ID0+IGNpdHkuaWQgPT09IHRoaXMuYWN0aXZlQ2l0eSk7XG4gICAgICAgIGlmKGFjdGl2ZUNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBpQ2FsbGVyLmdldEZvcmVjYXN0RGF0YShhY3RpdmVDaXR5LmNvb3JkLmxhdCwgYWN0aXZlQ2l0eS5jb29yZC5sb24pLnRoZW4oYWN0aXZlRm9yZWNhc3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2l0eURhdGEgPSBhY3RpdmVGb3JlY2FzdDtcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnJlbmRlck1haW5WaWV3KHRoaXMuYWN0aXZlQ2l0eURhdGEsIGFjdGl2ZUNpdHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVDaXR5KGluZGV4OiBJV2VhdGhlckRhdGFbJ2lkJ10pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDaXR5ID0gaW5kZXg7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFDVElWRV9DSVRZX0tFWSwgU3RyaW5nKGluZGV4KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQ2l0eSgpO1xuICAgIH1cblxufVxuXG5cbm5ldyBNYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9