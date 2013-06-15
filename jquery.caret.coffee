# credit to:
#  http://stackoverflow.com/a/3651232
#  http://stackoverflow.com/a/6249440

$.fn.setCaret = (start=0, end=start) ->
  if window.getSelection?
    (sel = window.getSelection()).removeAllRanges()
  this.each ->
    try
      if this.childNodes?.length # this is contenteditable, not textarea/textfield
        if document.createRange?
          range = document.createRange()
          range.setStart this.childNodes[0], start
          range.setEnd this.childNodes[0], end
          sel.addRange range
      else if this.setSelectionRange?
        this.setSelectionRange start, end
      else if this.createTextRange?
        range = this.createTextRange
        range.collapse true
        range.moveEnd 'character', end
        range.moveStart 'character', start
        range.select()
      else
        this.selectionStart = start
        this.selectionEnd = end
    catch e
      null
  return this

$.fn.setCaretFromPoint = (x=0, y=0) ->
  try
    if document.caretPositionFromPoint?
      pos = document.caretPositionFromPoint x, y
      this.setCaret pos.offset
    else if document.caretRangeFromPoint?
      range = document.caretRangeFromPoint x, y
      this.setCaret range.startOffset
    else if document.body.createTextRange?
      range = document.body.createTextRange()
      range.moveToPoint x, y
      range.select()
  catch e
    null
  return this
