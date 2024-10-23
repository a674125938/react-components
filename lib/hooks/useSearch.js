"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _wait = _interopRequireDefault(require("../utils/wait"));

var _Highlight = _interopRequireDefault(require("../sharedComponents/Search/Highlight"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var genCancelToken = function genCancelToken() {
  (0, _newArrowCheck2.default)(this, _this);
  var token = {
    cancel: false
  };
  return token;
}.bind(void 0);

var genCancelError = function genCancelError() {
  (0, _newArrowCheck2.default)(this, _this);
  var error = new Error('Canceled');
  error.__is_cancel_error__ = true;
  return error;
}.bind(void 0);

var isCancelError = function isCancelError(error) {
  (0, _newArrowCheck2.default)(this, _this);
  return !!(error !== null && error !== void 0 && error.__is_cancel_error__);
}.bind(void 0);

var defaultSearchHandle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(searchValue) {
    var dataSource,
        cancelToken,
        count,
        runTime,
        handle,
        dataSourceAfterSearch,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dataSource = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
            cancelToken = _args4.length > 2 ? _args4[2] : undefined;
            // count of matched items
            count = 0; // count of matched run times, used for time slice.

            runTime = Date.now(); // handle a list of child

            handle = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(children) {
                var childrenHit, newChildren, handleChild, l, childMatch;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        childrenHit = false;
                        newChildren = []; // handle child

                        handleChild = /*#__PURE__*/function () {
                          var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(child) {
                            var now, title, children, override, searchHit, index, beforeStr, afterStr, _yield$handle, _yield$handle2, _children, _searchHit;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!cancelToken.cancel) {
                                      _context.next = 2;
                                      break;
                                    }

                                    throw genCancelError();

                                  case 2:
                                    now = Date.now();

                                    if (!(now - runTime > 20)) {
                                      _context.next = 7;
                                      break;
                                    }

                                    runTime = now;
                                    _context.next = 7;
                                    return (0, _wait.default)();

                                  case 7:
                                    title = child.title, children = child.children;
                                    override = {};
                                    searchHit = false;

                                    if (typeof title === 'string') {
                                      index = title.indexOf(searchValue);
                                      searchHit = index >= 0;

                                      if (searchHit) {
                                        count++;
                                        beforeStr = title.substr(0, index);
                                        afterStr = title.substr(index + searchValue.length);
                                        override.title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, beforeStr, /*#__PURE__*/_react.default.createElement(_Highlight.default, null, searchValue), afterStr);
                                      }
                                    }

                                    if (!children) {
                                      _context.next = 20;
                                      break;
                                    }

                                    _context.next = 14;
                                    return handle(children);

                                  case 14:
                                    _yield$handle = _context.sent;
                                    _yield$handle2 = (0, _slicedToArray2.default)(_yield$handle, 2);
                                    _children = _yield$handle2[0];
                                    _searchHit = _yield$handle2[1];
                                    override.children = _children;
                                    searchHit = _searchHit || searchHit;

                                  case 20:
                                    if (searchHit) {
                                      childrenHit = true;
                                      newChildren.push(_objectSpread(_objectSpread({}, child), override));
                                    }

                                  case 21:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function handleChild(_x3) {
                            return _ref3.apply(this, arguments);
                          };
                        }();

                        l = children.length;

                        childMatch = /*#__PURE__*/function () {
                          var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!(index < l)) {
                                      _context2.next = 5;
                                      break;
                                    }

                                    _context2.next = 3;
                                    return handleChild(children[index]);

                                  case 3:
                                    _context2.next = 5;
                                    return childMatch(index + 1);

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function childMatch(_x4) {
                            return _ref4.apply(this, arguments);
                          };
                        }();

                        _context3.next = 7;
                        return childMatch(0);

                      case 7:
                        return _context3.abrupt("return", [newChildren, childrenHit]);

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function handle(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context4.next = 7;
            return handle(dataSource);

          case 7:
            dataSourceAfterSearch = _context4.sent[0];
            return _context4.abrupt("return", {
              dataSource: dataSourceAfterSearch,
              count: count
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function defaultSearchHandle(_x) {
    return _ref.apply(this, arguments);
  };
}();

var useSearch = function useSearch(_ref5) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var dataSource = _ref5.dataSource,
      searchValue = _ref5.searchValue,
      handleSearch = _ref5.handleSearch,
      onSearchEnd = _ref5.onSearchEnd,
      defaultDataSourceAfterSearch = _ref5.defaultDataSourceAfterSearch;
  if (!defaultDataSourceAfterSearch) defaultDataSourceAfterSearch = dataSource;

  var _useState = (0, _react.useState)(defaultDataSourceAfterSearch),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      dataSourceAfterSearch = _useState2[0],
      setDataSourceAfterSearch = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var cacheRef = (0, _react.useRef)({
    onSearchEnd: onSearchEnd
  });
  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this2);
    cacheRef.current.onSearchEnd = onSearchEnd;
  }.bind(this), [onSearchEnd]);
  (0, _react.useEffect)(function () {
    var _this3 = this;

    (0, _newArrowCheck2.default)(this, _this2);
    var cancelToken = genCancelToken();
    (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var _cacheRef$current$onS, _cacheRef$current, result;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setError(undefined);

              if (searchValue) {
                _context5.next = 6;
                break;
              }

              setDataSourceAfterSearch(defaultDataSourceAfterSearch);
              setCount(null);
              setLoading(false);
              return _context5.abrupt("return");

            case 6:
              if (dataSource !== null && dataSource !== void 0 && dataSource.length) {
                _context5.next = 11;
                break;
              }

              setDataSourceAfterSearch([]);
              setCount(0);
              setLoading(false);
              return _context5.abrupt("return");

            case 11:
              setLoading(true);
              _context5.next = 14;
              return (0, _wait.default)();

            case 14:
              _context5.prev = 14;
              _context5.next = 17;
              return handleSearch ? handleSearch(searchValue, dataSource) : defaultSearchHandle(searchValue, dataSource, cancelToken);

            case 17:
              result = _context5.sent;

              if (!cancelToken.cancel) {
                _context5.next = 20;
                break;
              }

              return _context5.abrupt("return");

            case 20:
              setLoading(false);
              setDataSourceAfterSearch(result.dataSource);
              setCount(result.count);
              (_cacheRef$current$onS = (_cacheRef$current = cacheRef.current).onSearchEnd) === null || _cacheRef$current$onS === void 0 ? void 0 : _cacheRef$current$onS.call(_cacheRef$current, result);
              _context5.next = 35;
              break;

            case 26:
              _context5.prev = 26;
              _context5.t0 = _context5["catch"](14);

              if (!isCancelError(_context5.t0)) {
                _context5.next = 30;
                break;
              }

              return _context5.abrupt("return");

            case 30:
              console.error(_context5.t0);

              if (!cancelToken.cancel) {
                _context5.next = 33;
                break;
              }

              return _context5.abrupt("return");

            case 33:
              setLoading(false);
              setError(_context5.t0);

            case 35:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[14, 26]]);
    }))();
    return function () {
      (0, _newArrowCheck2.default)(this, _this3);
      cancelToken.cancel = true;
    }.bind(this);
  }.bind(this), [dataSource, defaultDataSourceAfterSearch, handleSearch, searchValue]);
  return {
    dataSource: dataSourceAfterSearch || [],
    loading: loading,
    count: count,
    error: error
  };
}.bind(void 0);

var _default = useSearch;
exports.default = _default;