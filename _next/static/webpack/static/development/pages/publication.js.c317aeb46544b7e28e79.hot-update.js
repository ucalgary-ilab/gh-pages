webpackHotUpdate("static/development/pages/publication.js",{

/***/ "./content/output/booktitles.json":
/*!****************************************!*\
  !*** ./content/output/booktitles.json ***!
  \****************************************/
/*! exports provided: CHI, UIST, IMWUT, DIS, MobileHCI, TEI, HRI, VR, TVCG, IROS, C&C, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"CHI":{"booktitle":"Proceedings of the CHI Conference on Human Factors in Computing Systems","publisher":"ACM, New York, NY, USA"},"UIST":{"booktitle":"Proceedings of the Annual ACM Symposium on User Interface Software and Technology","publisher":"ACM, New York, NY, USA"},"IMWUT":{"booktitle":"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies","publisher":"ACM, New York, NY, USA"},"DIS":{"booktitle":"Proceedings of the ACM on Designing Interactive Systems Conference","publisher":"ACM, New York, NY, USA"},"MobileHCI":{"booktitle":"Proceedings of the International Conference on Human-Computer Interaction with Mobile Devices and Services","publisher":"ACM, New York, NY, USA"},"TEI":{"booktitle":"Proceedings of the International Conference on Tangible, Embedded, and Embodied Interaction","publisher":"ACM, New York, NY, USA"},"HRI":{"booktitle":"Proceedings of the ACM/IEEE International Conference on Human-Robot Interaction","publisher":"ACM, New York, NY, USA"},"VR":{"booktitle":"Proceedings of the IEEE Conference on Virtual Reality and 3D User Interfaces","publisher":"IEEE, New York, NY, USA"},"TVCG":{"booktitle":"IEEE Transactions on Visualization and Computer Graphics","publisher":"IEEE, New York, NY, USA"},"IROS":{"booktitle":"Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems","publisher":"IEEE, New York, NY, USA"},"C&C":{"booktitle":"Proceedings of the ACM on Creativity and Cognition","publisher":"ACM, New York, NY, USA"},"dir":"content/output","base":"booktitles.json","ext":".json","sourceBase":"booktitles.yaml","sourceExt":".yaml"};

/***/ }),

/***/ "./pages/publication.js":
/*!******************************!*\
  !*** ./pages/publication.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../content/output/summary.json */ "./content/output/summary.json");
var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/summary.json */ "./content/output/summary.json", 1);
/* harmony import */ var _content_output_booktitles_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../content/output/booktitles.json */ "./content/output/booktitles.json");
var _content_output_booktitles_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/booktitles.json */ "./content/output/booktitles.json", 1);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _publications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./publications */ "./pages/publications.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer */ "./pages/footer.js");















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default()(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === "undefined" || o[_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default.a] == null) { if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var fileNames = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_13___default()(_content_output_summary_json__WEBPACK_IMPORTED_MODULE_16__.fileMap);

var keys = fileNames.filter(function (fileName) {
  return fileName.includes('people');
});
var people = [];

var _iterator = _createForOfIteratorHelper(keys),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var key = _step.value;
    people.push(_content_output_summary_json__WEBPACK_IMPORTED_MODULE_16__.fileMap[key]);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var namesId = {};

for (var _i = 0, _people = people; _i < _people.length; _i++) {
  var person = _people[_i];
  namesId[person.name] = person.id;
}

var Publication = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Publication, _React$Component);

  var _super = _createSuper(Publication);

  function Publication() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Publication);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Publication, [{
    key: "render",
    value: function render() {
      var publication = __webpack_require__("./content/output/publications sync recursive ^\\.\\/.*\\.json$")("./".concat(this.props.id, ".json"));

      var names = people.map(function (person) {
        return person.name;
      });
      var booktitle = _content_output_booktitles_json__WEBPACK_IMPORTED_MODULE_17__[publication.series.slice(0, -5)];

      if (publication.video) {
        if (publication.video.includes('youtube')) {
          var id = publication.video.split('?v=')[1];
          publication.embed = "https://www.youtube.com/embed/".concat(id);
        }

        if (publication.video.includes('vimeo')) {
          var _id = publication.video.split('/')[3];
          publication.embed = "https://player.vimeo.com/video/".concat(_id);
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("title", null, "".concat(publication.title, " | Interactions Lab | University of Calgary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_18__["default"], {
        current: "Publications"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "ui stackable grid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "one wide column"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "ten wide column centered"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "publication",
        className: "category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "breadcrumb",
        className: "ui breadcrumb"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "section",
        href: "/publications"
      }, "Publications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
        className: "right angle icon divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        className: "active section"
      }, publication.series)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, publication.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
        className: "meta"
      }, publication.authors.map(function (author) {
        return names.includes(author) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
          href: "/people/".concat(namesId[author])
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
          src: "/static/images/people/".concat(namesId[author], ".jpg"),
          className: "ui circular spaced image mini-profile"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("strong", null, author)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, author);
      }).reduce(function (prev, current) {
        return [prev, ' , ', current];
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "video-container",
        style: {
          display: publication.embed ? 'block' : 'none'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("iframe", {
        className: "embed",
        width: "100%",
        height: "315",
        src: "".concat(publication.embed, "?"),
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        mozAllowFullScreen: true,
        msAllowFullScreen: true,
        oAllowFullScreen: true,
        webkitAllowFullScreen: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        style: {
          margin: '50px 0px',
          fontSize: '1.1em'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, "Abstract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, publication.abstract), publication.keywords && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        class: "ui labels"
      }, "Keywords: \xA0", publication.keywords.split(', ').map(function (keyword) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
          className: "ui large blue label"
        }, keyword);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        class: "ui segment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", {
        style: {
          lineHeight: "160%"
        }
      }, publication.authors.reduce(function (prev, current) {
        return [prev, ', ', current];
      }), ".\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("b", null, publication.title), ".\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", null, publication.booktitle), ".\xA0", publication.publisher, "\xA0 Page: 1-", publication.pages, ".\xA0 DOI: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: publication.doi,
        target: "_blank"
      }, publication.doi)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "one wide column"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_20__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(req) {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.query.id;
                return _context.abrupt("return", {
                  id: id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Publication;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Publication);

/***/ })

})
//# sourceMappingURL=publication.js.c317aeb46544b7e28e79.hot-update.js.map