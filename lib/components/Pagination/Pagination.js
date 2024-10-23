"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _SvgIcon = _interopRequireDefault(require("../../components/SvgIcon"));

var _NumberInput = _interopRequireDefault(require("../../components/NumberInput"));

var _localeConsumerDecorator = _interopRequireDefault(require("../../components/LocaleProvider/localeConsumerDecorator"));

var _Pager = _interopRequireDefault(require("./Pager"));

var _Options = _interopRequireDefault(require("./Options"));

var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

var _style = require("./style");

var _excluded = ["current", "defaultCurrent", "total", "showTotal", "pageSize", "defaultPageSize", "onChange", "onAdvise", "hideOnSinglePage", "showSizeChanger", "showLessItems", "onPageSizeChange", "showPrevNextJumpers", "showQuickJumper", "showTitle", "pageSizeOptions", "simple", "locale", "className", "itemRender", "size", "optionsProps"];

var _dec, _class, _class2, _temp;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(page, type, element) {
  if (type === 'prev') {
    return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "arrow-left",
      className: "".concat(_style.prefixCls, "-prev-icon")
    });
  }

  if (type === 'next') {
    return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "arrow-right",
      className: "".concat(_style.prefixCls, "-next-icon")
    });
  }

  if (type === 'jump-prev' || type === 'jump-next') {
    return /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
      type: "ellipsis",
      className: "".concat(_style.prefixCls, "-jump-icon")
    });
  }

  return element;
}

var Size = ['sm', 'md', 'lg'];
var Pagination = (_dec = (0, _localeConsumerDecorator.default)({
  defaultLocale: _zh_CN.default,
  localeName: 'Pagination'
}), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this2 = this;

    var _this;

    (0, _classCallCheck2.default)(this, Pagination);
    _this = _super.call(this, props);

    _this.savePaginationNode = function (node) {
      (0, _newArrowCheck2.default)(this, _this2);
      _this.paginationNode = node;
    }.bind(this);

    _this.calculatePage = function (p, total) {
      (0, _newArrowCheck2.default)(this, _this2);
      total = total === undefined ? _this.props.total : total;
      var pageSize = p;

      if (typeof pageSize === 'undefined') {
        pageSize = _this.state.pageSize;
      }

      return Math.max(1, Math.floor((total - 1) / pageSize) + 1);
    }.bind(this);

    _this.isValid = function (page) {
      (0, _newArrowCheck2.default)(this, _this2);
      return isInteger(page) && page >= 1 && page !== _this.state.current;
    }.bind(this);

    _this.changePageSize = function (size) {
      (0, _newArrowCheck2.default)(this, _this2);
      var current = _this.state.current;

      var newCurrent = _this.calculatePage(size);

      current = current > newCurrent ? newCurrent : current;

      if (typeof size === 'number') {
        if (!('pageSize' in _this.props)) {
          _this.setState({
            pageSize: size
          });
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: current,
            currentInputValue: current
          });
        }
      }

      _this.props.onPageSizeChange(current, size);
    }.bind(this);

    _this.handleChange = function (p) {
      (0, _newArrowCheck2.default)(this, _this2);
      var page = p;

      if (_this.isValid(page)) {
        if (page > _this.calculatePage()) {
          page = _this.calculatePage();
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: page,
            currentInputValue: page
          });
        }

        var pageSize = _this.state.pageSize;

        _this.props.onChange(page, pageSize);

        return page;
      }

      return _this.state.current;
    }.bind(this);

    _this.prev = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.hasPrev()) {
        _this.handleChange(_this.state.current - 1);
      }
    }.bind(this);

    _this.next = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      if (_this.hasNext()) {
        _this.handleChange(_this.state.current + 1);
      }
    }.bind(this);

    _this.jumpPrev = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.handleChange(_this.getJumpPrevPage());
    }.bind(this);

    _this.jumpNext = function () {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.handleChange(_this.getJumpNextPage());
    }.bind(this);

    _this.hasPrev = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return _this.state.current > 1;
    }.bind(this);

    _this.hasNext = function () {
      (0, _newArrowCheck2.default)(this, _this2);
      return _this.state.current < _this.calculatePage();
    }.bind(this);

    _this.runIfEnter = function (event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }

        callback.apply(void 0, restParams);
      }
    };

    _this.runIfEnterPrev = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.runIfEnter(e, _this.prev);
    }.bind(this);

    _this.runIfEnterNext = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.runIfEnter(e, _this.next);
    }.bind(this);

    _this.runIfEnterJumpPrev = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.runIfEnter(e, _this.jumpPrev);
    }.bind(this);

    _this.runIfEnterJumpNext = function (e) {
      (0, _newArrowCheck2.default)(this, _this2);

      _this.runIfEnter(e, _this.jumpNext);
    }.bind(this);

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = ('current' in props);

    if (hasCurrent && !hasOnChange) {
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
    }

    var _current2 = props.defaultCurrent;

    if ('current' in props) {
      _current2 = props.current;
    }

    var _pageSize2 = props.defaultPageSize;

    if ('pageSize' in props) {
      _pageSize2 = props.pageSize;
    }

    _this.state = {
      current: _current2,
      currentInputValue: _current2,
      pageSize: _pageSize2
    };
    return _this;
  }

  (0, _createClass2.default)(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('pageSize' in nextProps) {
        this.setState({
          pageSize: nextProps.pageSize
        });
      }

      var pageSize = 'pageSize' in nextProps ? nextProps.pageSize : this.state.pageSize;
      var current = 'current' in nextProps ? nextProps.current : this.state.current;
      var newCurrent = this.calculatePage(pageSize, nextProps.total);

      if ('current' in nextProps) {
        this.setState({
          current: nextProps.current,
          currentInputValue: nextProps.current
        });
      }

      if (current > newCurrent) {
        if (!('current' in nextProps)) {
          this.setState({
            current: newCurrent,
            currentInputValue: newCurrent
          });
        }

        var onAdvise = nextProps.onAdvise;

        if (onAdvise && (nextProps.current != this.props.current || nextProps.total != this.props.total)) {
          onAdvise(newCurrent, pageSize);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector(".".concat(_style.prefixCls, "-item-").concat(prevState.current));

        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: "getJumpPrevPage",
    value: function getJumpPrevPage() {
      return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: "getJumpNextPage",
    value: function getJumpNextPage() {
      return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      /* eslint-disable no-unused-vars */
      var _this$props = this.props,
          _current = _this$props.current,
          defaultCurrent = _this$props.defaultCurrent,
          total = _this$props.total,
          showTotal = _this$props.showTotal,
          _pageSize = _this$props.pageSize,
          defaultPageSize = _this$props.defaultPageSize,
          onChange = _this$props.onChange,
          onAdvise = _this$props.onAdvise,
          hideOnSinglePage = _this$props.hideOnSinglePage,
          showSizeChanger = _this$props.showSizeChanger,
          showLessItems = _this$props.showLessItems,
          onPageSizeChange = _this$props.onPageSizeChange,
          showPrevNextJumpers = _this$props.showPrevNextJumpers,
          showQuickJumper = _this$props.showQuickJumper,
          showTitle = _this$props.showTitle,
          pageSizeOptions = _this$props.pageSizeOptions,
          simple = _this$props.simple,
          locale = _this$props.locale,
          className = _this$props.className,
          itemRender = _this$props.itemRender,
          size = _this$props.size,
          optionsProps = _this$props.optionsProps,
          rest = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      /* eslint-enable no-unused-vars */

      var _this$state = this.state,
          pageSize = _this$state.pageSize,
          current = _this$state.current; // When hideOnSinglePage is true and there is only 1 page, hide the pager

      if (hideOnSinglePage === true && total <= pageSize) {
        return null;
      }

      var allPages = this.calculatePage();
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var goButton = showQuickJumper && showQuickJumper.goButton;
      var pageBufferSize = showLessItems ? 1 : 2;
      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;
      var wrapClassName = (0, _classnames2.default)(_style.prefixCls, className, (0, _defineProperty2.default)({}, "".concat(_style.prefixCls, "-").concat(size), size)); // 简易

      if (simple) {
        return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
          className: (0, _classnames2.default)(wrapClassName, "".concat(_style.prefixCls, "-simple")),
          unselectable: "unselectable"
        }, rest), /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
          size: size,
          min: 1,
          max: allPages,
          styleType: "pagination",
          parser: function (input) {
            (0, _newArrowCheck2.default)(this, _this3);
            return input.replace(/[^\d]+/g, '');
          }.bind(this),
          value: current,
          onNumberChange: function (number) {
            (0, _newArrowCheck2.default)(this, _this3);
            return this.handleChange(number);
          }.bind(this),
          suffix: /*#__PURE__*/_react.default.createElement("span", {
            className: "".concat(_style.prefixCls, "-quick-jumper-text")
          }, "/".concat(allPages))
        }));
      }

      if (allPages <= 5 + pageBufferSize * 2) {
        for (var i = 1; i <= allPages; i++) {
          var active = this.state.current === i;
          pagerList.push( /*#__PURE__*/_react.default.createElement(_Pager.default, {
            locale: locale,
            rootPrefixCls: _style.prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: i,
            page: i,
            active: active,
            showTitle: showTitle,
            itemRender: itemRender
          }));
        }
      } else {
        var prevItemTitle = showLessItems ? locale.prev3 : locale.prev5;
        var nextItemTitle = showLessItems ? locale.next3 : locale.next5;

        if (showPrevNextJumpers) {
          jumpPrev = /*#__PURE__*/_react.default.createElement("li", {
            title: showTitle ? prevItemTitle : null,
            key: "prev",
            onClick: this.jumpPrev,
            tabIndex: "0",
            onKeyPress: this.runIfEnterJumpPrev,
            className: "".concat(_style.prefixCls, "-jump-prev")
          }, itemRender(this.getJumpPrevPage(), 'jump-prev', /*#__PURE__*/_react.default.createElement("a", {
            className: "".concat(_style.prefixCls, "-item-link")
          })));
          jumpNext = /*#__PURE__*/_react.default.createElement("li", {
            title: showTitle ? nextItemTitle : null,
            key: "next",
            tabIndex: "0",
            onClick: this.jumpNext,
            onKeyPress: this.runIfEnterJumpNext,
            className: "".concat(_style.prefixCls, "-jump-next")
          }, itemRender(this.getJumpNextPage(), 'jump-next', /*#__PURE__*/_react.default.createElement("a", {
            className: "".concat(_style.prefixCls, "-item-link")
          })));
        }

        lastPager = /*#__PURE__*/_react.default.createElement(_Pager.default, {
          locale: locale,
          last: true,
          rootPrefixCls: _style.prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        firstPager = /*#__PURE__*/_react.default.createElement(_Pager.default, {
          locale: locale,
          rootPrefixCls: _style.prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i++) {
          var _active = current === _i;

          pagerList.push( /*#__PURE__*/_react.default.createElement(_Pager.default, {
            locale: locale,
            rootPrefixCls: _style.prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: showTitle,
            itemRender: itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = /*#__PURE__*/_react.default.cloneElement(pagerList[0], {
            className: "".concat(_style.prefixCls, "-item-after-jump-prev")
          });
          pagerList.unshift(jumpPrev);
        }

        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = /*#__PURE__*/_react.default.cloneElement(pagerList[pagerList.length - 1], {
            className: "".concat(_style.prefixCls, "-item-before-jump-next")
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1 && showPrevNextJumpers) {
          pagerList.unshift(firstPager);
        }

        if (right !== allPages && showPrevNextJumpers) {
          pagerList.push(lastPager);
        }
      }

      var defaultShowTotal = function defaultShowTotal(total) {
        (0, _newArrowCheck2.default)(this, _this3);
        return "".concat(locale.total, " ").concat(total, " ").concat(locale.items);
      }.bind(this);

      var prevDisabled = !this.hasPrev();
      var nextDisabled = !this.hasNext();
      return /*#__PURE__*/_react.default.createElement(_style.PaginationWrap, (0, _extends2.default)({
        size: size,
        className: wrapClassName,
        unselectable: "unselectable",
        _innerRef: this.savePaginationNode
      }, rest), showTotal && /*#__PURE__*/_react.default.createElement("li", {
        className: "".concat(_style.prefixCls, "-total")
      }, (0, _isFunction2.default)(showTotal) ? showTotal(total) : defaultShowTotal(total)), /*#__PURE__*/_react.default.createElement("li", {
        title: showTitle ? locale.prevPage : null,
        onClick: this.prev,
        tabIndex: prevDisabled ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: "".concat(!prevDisabled ? '' : "".concat(_style.prefixCls, "-disabled"), " ").concat(_style.prefixCls, "-prev"),
        "aria-disabled": prevDisabled
      }, itemRender(prevPage, 'prev', /*#__PURE__*/_react.default.createElement("a", {
        className: "".concat(_style.prefixCls, "-item-link")
      }))), pagerList, /*#__PURE__*/_react.default.createElement("li", {
        title: showTitle ? locale.nextPage : null,
        onClick: this.next,
        tabIndex: nextDisabled ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: "".concat(!nextDisabled ? '' : "".concat(_style.prefixCls, "-disabled"), " ").concat(_style.prefixCls, "-next"),
        "aria-disabled": nextDisabled
      }, itemRender(nextPage, 'next', /*#__PURE__*/_react.default.createElement("a", {
        className: "".concat(_style.prefixCls, "-item-link")
      }))), /*#__PURE__*/_react.default.createElement(_Options.default, (0, _extends2.default)({
        locale: locale,
        rootPrefixCls: _style.prefixCls,
        changeSize: showSizeChanger ? this.changePageSize : null,
        current: current,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        quickGo: showQuickJumper ? this.handleChange : null,
        goButton: goButton,
        size: size,
        allPages: allPages
      }, optionsProps)));
    }
  }]);
  return Pagination;
}(_react.Component), _class2.propTypes = {
  /** 当前页，受控 */
  current: _propTypes.default.number,

  /** 默认当前页，非受控 */
  defaultCurrent: _propTypes.default.number,

  /** 总数 */
  total: _propTypes.default.number,

  /** 自定义展示 total 值 */
  showTotal: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),

  /** 每页数量，受控 */
  pageSize: _propTypes.default.number,

  /** 默认每页数量，非受控 */
  defaultPageSize: _propTypes.default.number,

  /** 修改回调 */
  onChange: _propTypes.default.func,

  /** 修改建议回调，如传入的total为10，当前pageSize为10，当前current却为2时会触发 */
  onAdvise: _propTypes.default.func,

  /** @ignore */
  hideOnSinglePage: _propTypes.default.bool,

  /** 显示分页数量调节 */
  showSizeChanger: _propTypes.default.bool,

  /** 是否显示3个 */
  showLessItems: _propTypes.default.bool,

  /** 分页数量变化回调 */
  onPageSizeChange: _propTypes.default.func,

  /** 显示更多页面跳转按钮 */
  showPrevNextJumpers: _propTypes.default.bool,

  /** 显示快速跳转，传入goButton显示跳转按钮 */
  showQuickJumper: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),

  /** 显示按钮的title */
  showTitle: _propTypes.default.bool,

  /** 分页配置 */
  pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),

  /** 简易分页 */
  simple: _propTypes.default.bool,

  /** @ignore */
  locale: _propTypes.default.object,

  /** @ignore */
  className: _propTypes.default.string,

  /** @ignore */
  itemRender: _propTypes.default.func,

  /** 尺寸 */
  size: _propTypes.default.oneOf(Size),

  /** @ignore */
  optionsProps: _propTypes.default.object
}, _class2.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showSizeChanger: false,
  showLessItems: false,
  showTitle: true,
  onPageSizeChange: noop,
  itemRender: defaultItemRender,
  size: 'md'
}, _temp)) || _class);
Pagination.Size = Size;
var _default = Pagination;
exports.default = _default;