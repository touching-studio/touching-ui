import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'touching-button',
  styleUrls: {
    app: 'touching-button.app.css',
  },
  shadow: true,
})
export class TouchingButton implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
