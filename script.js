const minRows = 10;
const maxRows = 20;
const textarea = document.getElementById('textarea');
textarea.rows = minRows;
const cols = textarea.cols = 10;
const min = minRows * textarea.cols;
const max = maxRows * textarea.cols;

function countEnters (text) {
  let position = text.indexOf('\n');
  let count = 0;

  while (position !== -1) {
    count--;
    if (!((position % cols) === 0) || position === 0) {
      count += 10;
    }

    position = text.indexOf('\n', position + 1);
  }

  return count;
}

textarea.addEventListener('input', function () {
  const length = textarea.value.length;
  const enters = countEnters(textarea.value);
  const sum = length + enters;

  if (sum === '') {
    textarea.rows = minRows;
    textarea.style.overflowY = 'hidden';
  } if (sum > min) {
    textarea.rows = maxRows;
    textarea.style.overflowY = 'hidden';
  } if (sum <= min) {
    textarea.style.overflowY = 'hidden';
    textarea.rows = minRows;
  } if (sum > max) {
    textarea.style.overflowY = 'scroll';
  }
});
