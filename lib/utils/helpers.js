import React from "react";


export function markdownify(text, tagName = 'div', className = '') {
  // Write your markdownify function implementation here.
  // This is just an example, modify it according to your needs.
  return React.createElement(tagName, { className }, text);
}
