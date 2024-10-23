"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _newArrowCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/newArrowCheck"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _checkStickySupport = _interopRequireDefault(require("../../utils/checkStickySupport"));

var _warning = _interopRequireDefault(require("../../utils/warning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var supportSticky = (0, _checkStickySupport.default)();

var ColumnManager = /*#__PURE__*/function () {
  function ColumnManager(columns) {
    (0, _classCallCheck2.default)(this, ColumnManager);
    this._cached = {};
    this.reset(columns);
  }

  (0, _createClass2.default)(ColumnManager, [{
    key: "leafColumns",
    value: function leafColumns() {
      var _this = this;

      return this._cache('leafColumns', function () {
        (0, _newArrowCheck2.default)(this, _this);
        return this._leafColumns(this.columns);
      }.bind(this));
    } // add appropriate rowspan and colspan to column

  }, {
    key: "groupedColumns",
    value: function groupedColumns() {
      var _this2 = this;

      return this._cache('groupedColumns', function () {
        (0, _newArrowCheck2.default)(this, _this2);

        var _groupColumns = function _groupColumns(columns) {
          var _this3 = this;

          var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          // track how many rows we got
          rows[currentRow] = rows[currentRow] || [];
          var grouped = [];

          var setRowSpan = function setRowSpan(column) {
            (0, _newArrowCheck2.default)(this, _this3);
            var rowSpan = rows.length - currentRow;

            if (column && !column.children && // parent columns are supposed to be one row
            rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
              column.rowSpan = rowSpan;
            }
          }.bind(this);

          columns.forEach(function (column, index) {
            (0, _newArrowCheck2.default)(this, _this3);

            var newColumn = _objectSpread({}, column);

            rows[currentRow].push(newColumn);
            parentColumn.colSpan = parentColumn.colSpan || 0;

            if (newColumn.children && newColumn.children.length > 0) {
              newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows);
              parentColumn.colSpan += newColumn.colSpan;
            } else {
              parentColumn.colSpan++;
            } // update rowspan to all same row columns


            for (var i = 0; i < rows[currentRow].length - 1; ++i) {
              setRowSpan(rows[currentRow][i]);
            } // last column, update rowspan immediately


            if (index + 1 === columns.length) {
              setRowSpan(newColumn);
            }

            grouped.push(newColumn);
          }.bind(this));
          return grouped;
        };

        return _groupColumns(this.columns);
      }.bind(this));
    }
  }, {
    key: "reset",
    value: function reset(columns) {
      if (supportSticky) {
        columns = (0, _toConsumableArray2.default)(columns);
        var leftOffset = 0,
            leftPos = 0;

        for (; leftPos < columns.length; leftPos++) {
          var column = _objectSpread({}, columns[leftPos]);

          if (column.fixed === 'left' || column.fixed === true) {
            if (leftOffset === false) {
              (0, _warning.default)("every left fixed columns before the latest should have a valid width");
              break;
            }

            column.offset = leftOffset;
            column.fixed = 'left';

            if (column.width) {
              leftOffset += column.width;
            } else {
              leftOffset = false;
            }

            columns[leftPos] = column;
          } else {
            break;
          }
        }

        if (leftPos > 0) columns[leftPos - 1].latestLeftFixed = true;
        var rightOffset = 0,
            rightPos = columns.length - 1;

        for (; rightPos > 0; rightPos--) {
          var _column = _objectSpread({}, columns[rightPos]);

          if (_column.fixed === 'right' || _column.fixed === true) {
            if (rightOffset === false) {
              (0, _warning.default)("every right fixed columns after the first should have a valid width");
              break;
            }

            _column.offset = rightOffset;
            _column.fixed = 'right';

            if (_column.width) {
              rightOffset += _column.width;
            } else {
              rightOffset = false;
            }

            columns[rightPos] = _column;
          } else {
            break;
          }
        }

        if (rightPos < columns.length - 1) columns[rightPos + 1].firstRightFixed = true;
      }

      this.columns = columns;
      this._cached = {};
    }
  }, {
    key: "_cache",
    value: function _cache(name, fn) {
      if (name in this._cached) {
        return this._cached[name];
      }

      this._cached[name] = fn();
      return this._cached[name];
    }
  }, {
    key: "_leafColumns",
    value: function _leafColumns(columns) {
      var _this4 = this;

      var leafColumns = [];
      columns.forEach(function (column) {
        (0, _newArrowCheck2.default)(this, _this4);

        if (!column.children) {
          leafColumns.push(column);
        } else {
          leafColumns.push.apply(leafColumns, (0, _toConsumableArray2.default)(this._leafColumns(column.children)));
        }
      }.bind(this));
      return leafColumns;
    }
  }]);
  return ColumnManager;
}();

exports.default = ColumnManager;