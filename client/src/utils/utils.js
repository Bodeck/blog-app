export const cutText = (content, maxLength) => {
  if (content.length < 0) {
    return 'error';
  } else if (content.length > maxLength) {
    return content.substr(0, content.indexOf(' ', maxLength)) + '...';
  }
  return content;
}