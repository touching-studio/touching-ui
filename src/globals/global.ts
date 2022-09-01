import { setMode } from '@stencil/core';
import '@awesome-elements/layout';

const modes = ['app'];
const defaultMode = 'app';

function isTouchingElement(element: HTMLElement) {
  return element.tagName && element.tagName.startsWith('TOUCHING-');
}

function isAllowedModeValue(mode: string) {
  return modes.includes(mode);
}

setMode((element: any) => {
  while (element) {
    const elementMode = (element as any).mode || element.getAttribute('mode');
    if (elementMode) {
      if (isAllowedModeValue(elementMode)) {
        return elementMode;
      } else if (isTouchingElement(element)) {
        console.warn(`Invalid mode: "${elementMode}", expected one from ${JSON.stringify(modes)}.`);
      }
    }
    element = element.parentElement || element.getRootNode()?.host;
  }
  return defaultMode;
});
