appendElement(customElement());

function customElement() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, World!";
  return element;
}

/**
 * This example shows how to append an element to the DOM.
 */
function appendElement(element: HTMLElement) {
  document.body.insertBefore(element, document.body.firstChild);
}
