/*
 * jCaret - jQuery caret positioning plugin
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 1.0.2 (201307262217)
 */
// Generated by CoffeeScript 1.6.2
$.fn.setCaret = function(start, end) {
  var sel;

  if (start == null) {
    start = 0;
  }
  if (end == null) {
    end = start;
  }
  if (window.getSelection != null) {
    (sel = window.getSelection()).removeAllRanges();
  }
  this.each(function() {
    var e, range, _ref;

    try {
      if ((_ref = this.childNodes) != null ? _ref.length : void 0) {
        if (document.createRange != null) {
          range = document.createRange();
          range.setStart(this.childNodes[0], start);
          range.setEnd(this.childNodes[0], end);
          return sel.addRange(range);
        }
      } else if (this.setSelectionRange != null) {
        return this.setSelectionRange(start, end);
      } else if (this.createTextRange != null) {
        range = this.createTextRange;
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        return range.select();
      } else {
        this.selectionStart = start;
        return this.selectionEnd = end;
      }
    } catch (_error) {
      e = _error;
    }
  });
  return this;
};

$.fn.setCaretFromPoint = function(x, y) {
  var e, pos, range;

  if (x == null) {
    x = 0;
  }
  if (y == null) {
    y = 0;
  }
  try {
    if (document.caretPositionFromPoint != null) {
      pos = document.caretPositionFromPoint(x, y);
      this.setCaret(pos.offset);
    } else if (document.caretRangeFromPoint != null) {
      range = document.caretRangeFromPoint(x, y);
      this.setCaret(range.startOffset);
    } else if (document.body.createTextRange != null) {
      range = document.body.createTextRange();
      range.moveToPoint(x, y);
      range.select();
    }
  } catch (_error) {
    e = _error;
  }
  return this;
};
