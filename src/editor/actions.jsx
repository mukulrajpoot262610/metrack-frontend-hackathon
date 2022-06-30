// HELPERS
const findSelection = (data, selectionIndex) => {
  const valids = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-`;

  let selection = data[selectionIndex];
  let indexStart = null;
  let indexStop = null;

  for (let i = selectionIndex + 1; i <= data.length; i++) {
    if (!valids.includes(data[i])) {
      indexStop = i;
      break;
    }
    selection += data[i];
  }

  for (let i = selectionIndex - 1; i >= 0; i--) {
    if (!valids.includes(data[i])) {
      indexStart = i + 1;
      break;
    }
    selection = data[i] + selection;
  }

  return { selection, start: indexStart, stop: indexStop };
};

/**
 * Adds an attachment to the start of the line. Useful for headings, blockquotes, etc.
 * @param {*} element
 * @param {*} attachment
 * @returns
 */
const addToLineStart = (
  element,
  data,
  setData,
  setUpdateSelection,
  attachment
) => {
  // get selection pointers
  const selectionStart = element.selectionStart;
  const selectionEnd = element.selectionEnd;

  // array of lines
  let arr = data.substring(0, selectionEnd).split("\n");

  // get text after selection
  let textAfterSelection = data.substring(selectionEnd, data.textLength);

  // get current line
  let currentLine = arr.pop();

  // update current line to new value
  currentLine = `${attachment} ${currentLine.trimLeft()}`;

  // push currentline back to array of lines
  arr.push(currentLine);

  // convert arrary of lines back to string
  let backToString = arr.join("\n");

  setData(backToString + textAfterSelection);

  const offset = selectionEnd + attachment.length + 1;
  setUpdateSelection({
    start: offset,
    end: offset,
  });
  element.focus();
};

/**
 * Adds an attachment to start and end of the selection. Useful for bold, italic, etc.
 * @param {*} element
 * @param {*} attachment
 * @returns
 */
const addToSelection = (
  element,
  data,
  setData,
  setUpdateSelection,
  attachment
) => {
  //  get selection pointers
  const selectionStart = element.selectionStart;
  const selectionEnd = element.selectionEnd;

  const updateData = (
    textBeforeSelection,
    selection,
    textAfterSelection,
    offsetLeft,
    offsetRight
  ) => {
    element.focus();

    selection = `${attachment}${selection}${attachment}`;
    setData(textBeforeSelection + selection + textAfterSelection);
    setUpdateSelection({
      start: offsetLeft + attachment.length,
      end: offsetRight + attachment.length,
    });
  };

  if (selectionStart === selectionEnd) {
    // here is some error
    const selectionIndex = selectionStart;
    const selectionChar = data[selectionIndex];
    if (
      selectionChar === " " ||
      selectionChar === "\n" ||
      selectionChar === ""
    ) {
      const selection = "text";
      const textBeforeSelection = data.substring(0, selectionIndex);
      const textAfterSelection = data.substring(selectionIndex, data.length);
      const start = selectionIndex;
      const stop = selectionIndex + 4;
      updateData(
        textBeforeSelection,
        selection,
        textAfterSelection,
        start,
        stop
      );
      return;
    }
    let { selection, start, stop } = findSelection(data, selectionIndex);
    let textBeforeSelection = data.substring(0, start);
    let textAfterSelection = data.substring(stop, data.length);
    updateData(textBeforeSelection, selection, textAfterSelection, start, stop);
    return;
  }

  //  get substrings
  let textBeforeSelection = data.substring(0, selectionStart);
  let selection = data.substring(selectionStart, selectionEnd);
  let textAfterSelection = data.substring(selectionEnd, data.textLength);

  updateData(
    textBeforeSelection,
    selection,
    textAfterSelection,
    selectionStart,
    selectionEnd
  );
};

export const addH2 = (...args) => {
  addToLineStart(...args, "##");
};

export const addH3 = (...args) => {
  addToLineStart(...args, "###");
};

export const formatBold = (...args) => {
  addToSelection(...args, "**");
};

export const formatItalic = (...args) => {
  addToSelection(...args, "*");
};

export const formatInlineCode = (...args) => {
  addToSelection(...args, "`");
};

// LINKS
export const addLink = (
  element,
  data,
  setData,
  setShowLinkHeader,
  setUpdateSelection,
  payload
) => {
  try {
    const selectionStart = element.selectionStart;
    const selectionEnd = element.selectionEnd;
    // selection has been done is both are not same
    if (selectionStart !== selectionEnd) {
      //   get all the substrings
      let textBeforeSelection = data.substring(0, selectionStart);
      let selectionText = data.substring(selectionStart, selectionEnd);
      let textAfterSelection = data.substring(selectionEnd, data.textLength);

      selectionText = `[${selectionText.trim()}](${payload.link})`;

      let updatedString =
        textBeforeSelection + selectionText + textAfterSelection;
      setData(updatedString);

      setShowLinkHeader(false);
    } else {
      const selectionIndex = selectionStart;
      const selectionChar = data[selectionIndex];
      let { selection, start, stop } = findSelection(data, selectionIndex);
      let textBeforeSelection = data.substring(0, start);
      let textAfterSelection = data.substring(stop, data.length);

      const selectionText = `[${selection}](${payload.link})`;
      let updatedString =
        textBeforeSelection + selectionText + textAfterSelection;
      element.focus();
      setData(updatedString);
      setShowLinkHeader(false);
      setUpdateSelection({
        start: start + 1,
        end: start + selection?.length + 1,
      });
      return;
    }
  } catch (err) {}
};
