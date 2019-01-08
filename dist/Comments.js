'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CommentItem = require('./CommentItem');

var _CommentItem2 = _interopRequireDefault(_CommentItem);

var _AddComment = require('./AddComment');

var _AddComment2 = _interopRequireDefault(_AddComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_Component) {
  _inherits(Comments, _Component);

  function Comments(props) {
    _classCallCheck(this, Comments);

    var _this = _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));

    _this.addComment = _this.addComment.bind(_this);
    return _this;
  }

  _createClass(Comments, [{
    key: 'addComment',
    value: function addComment(text) {
      this.props.onAddComment({ text: text });
    }
  }, {
    key: 'render',
    value: function render() {
      var count = 1;
      var comments = this.props.comments ? this.props.comments.map(function (item) {
        return _react2.default.createElement(_CommentItem2.default, { key: count++, comment: item });
      }) : [];
      return _react2.default.createElement(
        'div',
        { className: 'comments' },
        _react2.default.createElement(
          'div',
          { className: 'comments-title' },
          'Comments:'
        ),
        _react2.default.createElement(
          'div',
          null,
          comments && comments.length ? comments : 'Be the first to comment!'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_AddComment2.default, { addComment: this.addComment })
        )
      );
    }
  }]);

  return Comments;
}(_react.Component);

Comments.propTypes = {
  comments: _propTypes2.default.array,
  onAddComment: _propTypes2.default.func
};
exports.default = Comments;