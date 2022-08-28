import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

export type ButtonVariant = 'solid' | 'hollow' | 'clear' | 'round' | 'link';

@Component({
  tag: 'touching-button',
  styleUrls: {
    app: 'touching-button.app.css',
  },
  shadow: true,
})
export class TouchingButton implements ComponentInterface {

  /**
    * Variant of the button. Default to `solid`.
    */
  @Prop({ reflect: true }) variant: ButtonVariant = 'solid'

  /**
   * If presents, the button would act like an `a` tag using the given `href`.
   */
  @Prop({ reflect: true }) href?: string;

  /**
  * The flag of disabling the button. Default to `false`.
  */
  @Prop({ reflect: true }) disabled: boolean = false;

  render() {
    return (
      <Host>
        <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
          {this.href && <a href={this.href} style={{ position: "absolute", width: "100%" }}><br style={{ clean: "both" }}></br></a>}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
