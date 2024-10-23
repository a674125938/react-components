"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupChildrenAsDataSource = exports.useSubGroup = exports.useItem = exports.useGroup = exports.defaultContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _react = _interopRequireWildcard(require("react"));

var _noop = _interopRequireDefault(require("../utils/noop"));

var _this = void 0;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultContext = {
  toggleKey: _noop.default,
  toggleKeys: _noop.default
};
exports.defaultContext = defaultContext;
var emptyKeys = [];

var formatKeys = function formatKeys(keys) {
  (0, _newArrowCheck2.default)(this, _this);
  return Array.isArray(keys) ? keys : emptyKeys;
}.bind(void 0);

var union = function union(keys, anotherKeys) {
  var _this2 = this;

  (0, _newArrowCheck2.default)(this, _this);
  if (!keys.length || !anotherKeys.length) return [];
  var unionKeys = [];
  var map = new Map();
  keys.forEach(function (key) {
    (0, _newArrowCheck2.default)(this, _this2);
    return map.set(key, true);
  }.bind(this));
  anotherKeys.forEach(function (key) {
    (0, _newArrowCheck2.default)(this, _this2);
    if (map.has(key)) unionKeys.push(key);
  }.bind(this));
  return unionKeys;
}.bind(void 0);

var getSelectedStatusByUnionCount = function getSelectedStatusByUnionCount(selectedKeys, validKeys) {
  (0, _newArrowCheck2.default)(this, _this);
  var validSelectedKeys = union(selectedKeys, validKeys);
  var vsL = validSelectedKeys.length;
  return vsL === 0 ? 'NONE' : vsL >= validKeys.length ? 'ALL' : 'PART';
}.bind(void 0);

var getSelectedStatus = function getSelectedStatus(selectedKeys, validKeys, disabledKeys) {
  (0, _newArrowCheck2.default)(this, _this);
  var sL = selectedKeys.length;
  if (sL === 0) return 'NONE';
  var vL = validKeys.length,
      dL = disabledKeys.length;
  if (sL >= vL + dL) return 'ALL';
  if (dL === 0 && sL < vL) return 'PART';
  return getSelectedStatusByUnionCount(selectedKeys, validKeys);
}.bind(void 0);

var getSubSelectedStatus = function getSubSelectedStatus(selectedKeys, validKeys) {
  (0, _newArrowCheck2.default)(this, _this);
  var sL = selectedKeys.length;
  if (sL === 0) return 'NONE';
  return getSelectedStatusByUnionCount(selectedKeys, validKeys);
}.bind(void 0);

var getSelectedKeysAfterSelectAll = function getSelectedKeysAfterSelectAll(allSelectedStatus, selectedKeys, validKeys, disabledKeys, selected) {
  (0, _newArrowCheck2.default)(this, _this);
  var disabledSelectedKeys = union(selectedKeys, disabledKeys);
  if (selected || allSelectedStatus !== 'ALL') return validKeys.concat(disabledSelectedKeys);
  return disabledSelectedKeys;
}.bind(void 0);
/**
 * @param selectedKeys all selected keys
 * @param onChange callback when selectedKeys change
 */


var useGroup = function useGroup(selectedKeys, onChange) {
  var _this3 = this;

  var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var validKeys = arguments.length > 3 ? arguments[3] : undefined;
  var disabledKeys = arguments.length > 4 ? arguments[4] : undefined;
  var subGroupMap = arguments.length > 5 ? arguments[5] : undefined;
  // avoid unknown type of keys
  selectedKeys = formatKeys(selectedKeys);
  var selectedStatus = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    return multiple && validKeys && disabledKeys ? getSelectedStatus(selectedKeys, validKeys, disabledKeys) : 'UNKNOWN';
  }.bind(this), [selectedKeys, validKeys, disabledKeys, multiple]);
  var selectedKeyMap = (0, _react.useMemo)(function () {
    var _this4 = this;

    (0, _newArrowCheck2.default)(this, _this3);
    var m = new Map();
    selectedKeys.forEach(function (v) {
      (0, _newArrowCheck2.default)(this, _this4);
      return m.set(v, true);
    }.bind(this));
    return m;
  }.bind(this), [selectedKeys]); // use ref to reduce toggle rebuild

  var cacheRef = (0, _react.useRef)({
    selectedKeys: selectedKeys,
    selectedKeyMap: selectedKeyMap,
    validKeys: validKeys,
    disabledKeys: disabledKeys,
    multiple: multiple,
    selectedStatus: selectedStatus
  }); // update cache

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this3);
    cacheRef.current = {
      selectedKeys: selectedKeys,
      selectedKeyMap: selectedKeyMap,
      validKeys: validKeys,
      disabledKeys: disabledKeys,
      multiple: multiple,
      selectedStatus: selectedStatus
    };
  }.bind(this), [disabledKeys, selectedKeyMap, multiple, selectedKeys, selectedStatus, validKeys]);
  var toggleKeys = (0, _react.useCallback)(function (keys, selected) {
    var _this5 = this;

    (0, _newArrowCheck2.default)(this, _this3);
    var cache = cacheRef.current;
    var selectedKeyMap = cache.selectedKeyMap,
        validKeys = cache.validKeys,
        disabledKeys = cache.disabledKeys,
        multiple = cache.multiple;

    if (multiple) {
      var newKeyMap = new Map(selectedKeyMap);

      if (selected) {
        keys.forEach(function (key) {
          (0, _newArrowCheck2.default)(this, _this5);
          return newKeyMap.set(key, true);
        }.bind(this));
      } else {
        keys.forEach(function (key) {
          (0, _newArrowCheck2.default)(this, _this5);
          return newKeyMap.delete(key);
        }.bind(this));
      }

      var newKeys = Array.from(newKeyMap.keys());

      var _selectedStatus = validKeys && disabledKeys ? getSelectedStatus(newKeys, validKeys, disabledKeys) : 'UNKNOWN';

      onChange(newKeys, _selectedStatus);
    } else {
      if (selected !== false) {
        var _key = keys.slice(0, 1);

        onChange(_key);
      } else {
        onChange([]);
      }
    }
  }.bind(this), [onChange]);
  var toggleKey = (0, _react.useCallback)(function (key, selected) {
    (0, _newArrowCheck2.default)(this, _this3);
    var cache = cacheRef.current;
    var selectedKeyMap = cache.selectedKeyMap,
        multiple = cache.multiple;
    toggleKeys([key], multiple && selected === undefined ? !selectedKeyMap.get(key) : selected);
  }.bind(this), [toggleKeys]);
  var groupContext = {
    selectedKeys: selectedKeys,
    selectedKeyMap: selectedKeyMap,
    toggleKey: toggleKey,
    toggleKeys: toggleKeys,
    multiple: multiple,
    subGroupMap: subGroupMap
  };
  var toggleAllItems = (0, _react.useCallback)(function (selected) {
    (0, _newArrowCheck2.default)(this, _this3);
    var cache = cacheRef.current;
    var selectedKeys = cache.selectedKeys,
        validKeys = cache.validKeys,
        disabledKeys = cache.disabledKeys,
        selectedStatus = cache.selectedStatus,
        multiple = cache.multiple;
    if (!multiple || !validKeys || !disabledKeys) return;
    var newSelectedKeys = getSelectedKeysAfterSelectAll(selectedStatus, selectedKeys, validKeys, disabledKeys, selected);
    onChange(newSelectedKeys, selectedStatus === 'ALL' ? 'NONE' : 'ALL');
  }.bind(this), [onChange]);
  return [groupContext, selectedStatus, toggleAllItems];
};
/**
 * @param key key of this item
 * @param groupContext context
 * @param selected selected prop from item
 */


exports.useGroup = useGroup;

var useItem = function useItem(key, groupContext) {
  var _this6 = this;

  var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var selectedKeyMap = groupContext.selectedKeyMap,
      toggleKey = groupContext.toggleKey; // save toggle to ref for better performance

  var toggleRef = (0, _react.useRef)(function (selected) {
    (0, _newArrowCheck2.default)(this, _this6);
    return toggleKey(key, selected);
  }.bind(this));
  (0, _react.useEffect)(function () {
    var _this7 = this;

    (0, _newArrowCheck2.default)(this, _this6);

    toggleRef.current = function (selected) {
      (0, _newArrowCheck2.default)(this, _this7);
      return toggleKey(key, selected);
    }.bind(this);
  }.bind(this), [toggleKey, key]);

  if (selectedKeyMap) {
    selected = !!selectedKeyMap.get(key);
  }

  var toggle = (0, _react.useCallback)(function (selected) {
    (0, _newArrowCheck2.default)(this, _this6);
    return toggleRef.current(selected);
  }.bind(this), []);
  return [selected, toggle];
};
/**
 * @param groupContext context from group
 * @param validKeys valid wrapped item keys
 * @param disabledKeys disabled wrapped item keys
 */


exports.useItem = useItem;

var useSubGroup = function useSubGroup(key, groupContext) {
  var _this8 = this;

  (0, _newArrowCheck2.default)(this, _this);
  var _groupContext$selecte = groupContext.selectedKeys,
      selectedKeys = _groupContext$selecte === void 0 ? [] : _groupContext$selecte,
      toggleKeys = groupContext.toggleKeys,
      multiple = groupContext.multiple,
      subGroupMap = groupContext.subGroupMap;

  var _ref = (subGroupMap === null || subGroupMap === void 0 ? void 0 : subGroupMap.get(key)) || {},
      _ref$validKeys = _ref.validKeys,
      validKeys = _ref$validKeys === void 0 ? [] : _ref$validKeys,
      _ref$disabledKeys = _ref.disabledKeys,
      disabledKeys = _ref$disabledKeys === void 0 ? [] : _ref$disabledKeys;

  var selectedStatus = (0, _react.useMemo)(function () {
    (0, _newArrowCheck2.default)(this, _this8);
    return multiple ? validKeys && disabledKeys && selectedKeys ? getSubSelectedStatus(selectedKeys, validKeys) : 'UNKNOWN' : getSubSelectedStatus(selectedKeys, [].concat((0, _toConsumableArray2.default)(validKeys), (0, _toConsumableArray2.default)(disabledKeys)));
  }.bind(this), [selectedKeys, validKeys, disabledKeys, multiple]); // use ref to reduce toggle rebuild

  var cacheRef = (0, _react.useRef)({
    selectedKeys: selectedKeys,
    validKeys: validKeys,
    disabledKeys: disabledKeys,
    toggleKeys: toggleKeys,
    selectedStatus: selectedStatus
  }); // update cache

  (0, _react.useEffect)(function () {
    (0, _newArrowCheck2.default)(this, _this8);
    cacheRef.current = {
      selectedKeys: selectedKeys,
      validKeys: validKeys,
      disabledKeys: disabledKeys,
      toggleKeys: toggleKeys,
      selectedStatus: selectedStatus
    };
  }.bind(this), [selectedKeys, validKeys, disabledKeys, toggleKeys, selectedStatus]);
  var toggleAllItems = (0, _react.useCallback)(function () {
    (0, _newArrowCheck2.default)(this, _this8);
    var cache = cacheRef.current;
    var validKeys = cache.validKeys,
        toggleKeys = cache.toggleKeys,
        selectedStatus = cache.selectedStatus;
    toggleKeys(validKeys, selectedStatus !== 'ALL');
  }.bind(this), []);
  return [selectedStatus, toggleAllItems];
}.bind(void 0);

exports.useSubGroup = useSubGroup;

var groupChildrenAsDataSource = function groupChildrenAsDataSource(children) {
  var _this9 = this;

  var globalDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    itemTag: 'isItem',
    subGroupTag: 'isSubGroup',
    itemKeyName: 'itemKey',
    subGroupKeyName: 'subGroupKey'
  },
      itemTag = _ref2.itemTag,
      subGroupTag = _ref2.subGroupTag,
      itemKeyName = _ref2.itemKeyName,
      subGroupKeyName = _ref2.subGroupKeyName;

  var subGroupMap = new Map();
  var childrenMap = new Map();

  var _group = function group(children, disabled, prefix) {
    var _this10 = this;

    (0, _newArrowCheck2.default)(this, _this9);
    var validKeys = [];
    var disabledKeys = [];

    var l = _react.default.Children.count(children);

    var renderChildren = _react.default.Children.map(children, function (child, i) {
      (0, _newArrowCheck2.default)(this, _this10);
      var isFirst = i === 0;
      var isLast = i === l - 1;

      if ( /*#__PURE__*/_react.default.isValidElement(child)) {
        var _child$type, _child$type2;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((_child$type = child.type) !== null && _child$type !== void 0 && _child$type[itemTag]) {
          var _React$cloneElement;

          var props = child.props;

          var _key2 = props[itemKeyName] === undefined ? child.key : props[itemKeyName];

          var isDisabled = disabled || props.disabled;

          if (isDisabled) {
            disabledKeys.push(_key2);
          } else {
            validKeys.push(_key2);
          }

          childrenMap.set(_key2, props.children);
          return /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement = {}, (0, _defineProperty2.default)(_React$cloneElement, itemKeyName, _key2), (0, _defineProperty2.default)(_React$cloneElement, "disabled", globalDisabled || isDisabled), (0, _defineProperty2.default)(_React$cloneElement, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement, "isLast", isLast), _React$cloneElement)); // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if (subGroupTag && subGroupKeyName && (_child$type2 = child.type) !== null && _child$type2 !== void 0 && _child$type2[subGroupTag]) {
          var _React$cloneElement2;

          var _props = child.props;

          var _key3 = _props[subGroupKeyName] || child.key || "".concat(prefix, "-").concat(i);

          var _isDisabled = disabled || _props.disabled;

          var _group2 = _group(child.props.children, _isDisabled, _key3),
              _group3 = (0, _slicedToArray2.default)(_group2, 3),
              subValidKeys = _group3[0],
              subDisabledKeys = _group3[1],
              subRenderChildren = _group3[2];

          subGroupMap.set(_key3, {
            validKeys: subValidKeys,
            disabledKeys: subDisabledKeys
          });
          validKeys.push.apply(validKeys, (0, _toConsumableArray2.default)(subValidKeys));
          disabledKeys.push.apply(disabledKeys, (0, _toConsumableArray2.default)(subDisabledKeys));
          return /*#__PURE__*/_react.default.cloneElement(child, (_React$cloneElement2 = {
            disabled: globalDisabled || _isDisabled
          }, (0, _defineProperty2.default)(_React$cloneElement2, subGroupKeyName, _key3), (0, _defineProperty2.default)(_React$cloneElement2, "isFirst", isFirst), (0, _defineProperty2.default)(_React$cloneElement2, "isLast", isLast), _React$cloneElement2), subRenderChildren);
        }

        return child;
      }
    }.bind(this));

    return [validKeys, disabledKeys, renderChildren];
  }.bind(this);

  return [].concat((0, _toConsumableArray2.default)(_group(children, false, 'group-root')), [subGroupMap, childrenMap]);
};

exports.groupChildrenAsDataSource = groupChildrenAsDataSource;