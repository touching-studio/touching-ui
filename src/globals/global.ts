import { setMode } from '@stencil/core';

const defaultMode = 'app';

function isTouchingElement(element: HTMLElement) {
  return element.tagName && element.tagName.startsWith('TOUCHING-');
}

function isAllowedModeValue(_mode: string) {
  return true;
}

setMode((element: any) => {
  while (element) {
    const elementMode = (element as any).mode || element.getAttribute('mode');
    if (elementMode) {
      if (isAllowedModeValue(elementMode)) {
        return elementMode;
      } else if (isTouchingElement(element)) {
        console.warn('Invalid touching mode: "' + elementMode + '", expected: "app" or "web"');
      }
    }
    element = element.parentElement;
  }
  return defaultMode;
});
