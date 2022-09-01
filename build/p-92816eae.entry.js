import{r as e,h as t,H as s,g as i}from"./p-c801ca9f.js";import{d as a}from"./p-a3b258fc.js";const o=["xs","sm","md","lg","xl","xxl"],r=class{constructor(t){e(this,t),this.handleMutation=e=>{(void 0===e||"childList"===e.type||"attributes"===e.type&&e.target.parentElement===this.hostElement&&"slot"===e.attributeName)&&(this.availableBreakpoints=Array.from(this.hostElement.querySelectorAll("*")).map((e=>e.getAttribute("slot"))).filter(Boolean))},this.handleResizing=e=>{const t=e.contentRect.width;switch(!0){case t>=this.getViewBreakpoint("xxl"):this.breakpoint="xxl";break;case t>=this.getViewBreakpoint("xl"):this.breakpoint="xl";break;case t>=this.getViewBreakpoint("lg"):this.breakpoint="lg";break;case t>=this.getViewBreakpoint("md"):this.breakpoint="md";break;case t>=this.getViewBreakpoint("sm"):this.breakpoint="sm";break;default:this.breakpoint="xs"}}}get actualBreakpoint(){var e;return null===(e=this.availableBreakpoints)||void 0===e?void 0:e.filter((e=>o.indexOf(e)<=o.indexOf(this.breakpoint))).sort(((e,t)=>o.indexOf(t)-o.indexOf(e)))[0]}connectedCallback(){a.observeResize(this.hostElement,[this.handleResizing]),a.observeMutation(this.hostElement,[this.handleMutation],{childList:!0,attributes:!0,subtree:!0}),this.handleMutation()}disconnectedCallback(){a.unobserveResize(this.hostElement),a.unobserveMutation(this.hostElement)}render(){return t(s,null,t("div",{id:"main-container",innerHTML:`<slot name="${this.actualBreakpoint}"></slot>`}))}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}-local`)}get hostElement(){return i(this)}};r.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{display:block;width:100%}#main-container{height:100%;width:100%}";export{r as awesome_view_break}