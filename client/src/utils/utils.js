export const cutText = (content, maxLength) => {
  if (!content) {
    return '';
  } else if (content.length > maxLength) {
    return content.substr(0, content.indexOf(' ', maxLength)) + '...';
  }
  return content;
}