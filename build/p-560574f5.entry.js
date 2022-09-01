import{r as o,h as e,H as s,g as r}from"./p-c801ca9f.js";import{d as a}from"./p-a3b258fc.js";const t=class{constructor(e){o(this,e)}rowsChanged(o){a.updateCSSVariable("--awesome-grid-template-rows",o,this.hostElement)}columnsChanged(o){a.updateCSSVariable("--awesome-grid-template-columns",o,this.hostElement)}rowGapChanged(o){a.updateCSSVariable("--awesome-grid-row-gap",o,this.hostElement)}columnGapChanged(o){a.updateCSSVariable("--awesome-grid-column-gap",o,this.hostElement)}componentDidLoad(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}render(){return e(s,null,e("div",{id:"main-container"},e("slot",null)))}get hostElement(){return r(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};t.style=":host,*{box-sizing:border-box}:host{--awesome-grid-template-rows:'';--awesome-grid-template-columns:'';--awesome-grid-row-gap:'';--awesome-grid-column-gap:'';display:block;height:100%;width:100%}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--awesome-grid-template-rows);grid-template-columns:var(--awesome-grid-template-columns);row-gap:var(--awesome-grid-row-gap);column-gap:var(--awesome-grid-column-gap)}";const n=class{constructor(e){o(this,e)}columnChanged(o){a.updateCSSVariable("--awesome-grid-column",null==o?void 0:o.toString(),this.hostElement)}columnSpanChanged(o){a.updateCSSVariable("--awesome-grid-column-span",null==o?void 0:o.toString(),this.hostElement)}rowChanged(o){a.updateCSSVariable("--awesome-grid-row",null==o?void 0:o.toString(),this.hostElement)}rowSpanChanged(o){a.updateCSSVariable("--awesome-grid-row-span",null==o?void 0:o.toString(),this.hostElement)}componentDidLoad(){this.rowChanged(this.row),this.rowSpanChanged(this.rowSpan),this.columnChanged(this.column),this.columnSpanChanged(this.columnSpan)}render(){return e(s,null,e("slot",null))}get hostElement(){return r(this)}static get watchers(){return{column:["columnChanged"],columnSpan:["columnSpanChanged"],row:["rowChanged"],rowSpan:["rowSpanChanged"]}}};n.style=":host,*{box-sizing:border-box}:host{--awesome-grid-row:'';--awesome-grid-row-span:'';--awesome-grid-column:'';--awesome-grid-column-span:'';display:block;height:100%;width:100%;grid-row-start:var(--awesome-grid-row, auto);grid-row-end:span var(--awesome-grid-row-span, 1);grid-column-start:var(--awesome-grid-column, auto);grid-column-end:span var(--awesome-grid-column-span, 1)}";const i=class{constructor(e){o(this,e),this.variant="solid",this.disabled=!1}render(){return e(s,null,e("awesome-grid",{rows:"1fr auto 1fr",columns:"1fr auto 1fr"},e("awesome-grid-item",{row:2,column:2},e("slot",null))))}};i.style={app:":host,*{box-sizing:border-box}:host{-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;cursor:pointer;user-select:none;}"};export{t as awesome_grid,n as awesome_grid_item,i as touching_button}