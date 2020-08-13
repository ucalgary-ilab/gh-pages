webpackHotUpdate("static/development/pages/page.js",{

/***/ "./content/output/facility.json":
/*!**************************************!*\
  !*** ./content/output/facility.json ***!
  \**************************************/
/*! exports provided: prototype, electronics, kniiting, power-tools, vr/ar, robotics, photography, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"prototype":[{"name":"Form 3 SLA 3D Printer","img":"form-3","url":"https://formlabs.com/3d-printers/form-3/"},{"name":"Form Cure","img":"form-cure","url":"https://formlabs.com/wash-cure/"},{"name":"Form Wash","img":"form-wash","url":"https://formlabs.com/wash-cure/"},{"name":"Cetus 3D Printer MK3","img":"cetus","url":"https://shop.tiertime.com/product/cetus-3d-printer-mk3/"},{"name":"Ultimaker 3","img":"ultimaker","url":"https://ultimaker.com/3d-printers/ultimaker-3"},{"name":"X-Carve CNC Machine","img":"x-carve","url":"https://www.inventables.com/technologies/x-carve"},{"name":"Silver Bullet Die Cutter","img":"silver-bullet","url":"https://silverbulletcutters.com/"},{"name":"Mayku Desktop Vacuum Former","img":"mayku","url":"https://www.mayku.me/"}],"electronics":[{"name":"Voltera V-One","img":"voltera","url":"https://www.voltera.io/"},{"name":"Bantam","img":"Bantam","url":"https://www.bantamtools.com/"},{"name":"Weller WE1010NA","img":"wellner","url":"https://www.weller-tools.com/we1010na/"},{"name":"Eventek KPS305D DC Power Supply","img":"eventek","url":"https://www.amazon.com/dp/B071RNT1CD"},{"name":"Reflow Oven T962","img":"t962","url":"https://www.amazon.com/dp/B01LZYEF90"},{"name":"Andonstar AD407 Digital Microscope","img":"andonstar","url":"https://www.amazon.com/dp/B07VK52X9C"}],"kniiting":[{"name":"Brother 930E Knitting Machine","img":"brother"},{"name":"Pfaff Creative 4.5 Embroidery Machine","img":"pfaff","url":"http://www.pfaff.com/en-CA/Machines/creative-4-5"}],"power-tools":[{"name":"Hitachi C10FCG","img":"hitachi","url":"https://www.amazon.com/dp/B07217ZVP5"},{"name":"WEN 4208 Drill Press","img":"drill-press","url":"https://www.amazon.com/dp/B00HQONFVE"},{"name":"WEN 3959 Band Saw","img":"band-saw","url":"https://www.amazon.com/dp/B077QMBTLP"},{"name":"Black+Decker 20V Drill","img":"black-decker","url":"https://www.amazon.com/dp/B00C625KVE"}],"vr/ar":[{"name":"Vicon","img":"vicon","url":"https://www.vicon.com/"},{"name":"Oculus Quest","img":"oculus","url":"https://www.oculus.com/quest/"},{"name":"Hololens 2","img":"hololens-2","url":"https://www.microsoft.com/en-us/hololens/"},{"name":"Hololens 1","img":"hololens-1","url":"https://docs.microsoft.com/en-us/hololens/hololens1-hardware"},{"name":"Azure Kinect DK","img":"azure-kinect","url":"https://azure.microsoft.com/en-us/services/kinect-dk/"}],"robotics":[{"name":"Baxter Robots","img":"baxter","url":"https://www.rethinkrobotics.com/"},{"name":"Sony TOIO","img":"toio","url":"https://www.sony.net/SonyInfo/design/stories/toio/"}],"photography":[{"name":"Sony a7iii","img":"sony-a7","url":"https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7m3-body-kit"},{"name":"Tamron 28-75mm F/2.8","img":"tamron","url":"https://www.tamron-usa.com/product/lenses/a036.html"},{"name":"DJI Ronin SC 3-Axis Gimbal","img":"dji","url":"https://www.dji.com/ronin-sc"},{"name":"COMAN KX3636 74inch","img":"conman","url":"https://www.amazon.com/dp/B01NA8PIZX"},{"name":"Neewer Camera Slider 39inch","img":"camera-slider","url":"https://www.amazon.com/dp/B07WHXKLFV"},{"name":"Emart Backdrop Stand","img":"emart","url":"https://www.emartus.com/products/emart-backdrop-stand-12ft-background-kit"},{"name":"Newer 10x20ft Backdrop","img":"newer","url":"https://www.amazon.com/dp/B00SR28XPM"},{"name":"Hpusn Softbox","img":"hpusn","url":"https://www.amazon.com/dp/B07NBP6D98"},{"name":"LimoStudio Foldable Studio","img":"limostudio","url":"https://www.amazon.com/dp/B00OY9DOCY"}],"dir":"content/output","base":"facility.json","ext":".json","sourceBase":"facility.yaml","sourceExt":".yaml"};

/***/ }),

/***/ "./pages/facility.js":
/*!***************************!*\
  !*** ./pages/facility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _content_output_facility_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/output/facility.json */ "./content/output/facility.json");
var _content_output_facility_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/facility.json */ "./content/output/facility.json", 1);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }




console.log(_content_output_facility_json__WEBPACK_IMPORTED_MODULE_8__);

var Facility = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Facility, _React$Component);

  var _super = _createSuper(Facility);

  function Facility() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Facility);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Facility, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "facility",
        className: "category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        class: "ui horizontal divider header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "cogs icon"
      }), "Facility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "ui divided items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "under construction")));
    }
  }]);

  return Facility;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Facility);

/***/ })

})
//# sourceMappingURL=page.js.6c664a5029714c240d8c.hot-update.js.map