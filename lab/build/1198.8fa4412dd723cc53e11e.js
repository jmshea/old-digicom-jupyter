"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1198,8516],{8516:(t,e,n)=>{n.r(e),n.d(e,{IHTMLViewerTracker:()=>d,HTMLViewer:()=>u,HTMLViewerFactory:()=>m});var r=n(92005),s=n(5768),o=n(97551),i=n(74161),a=n(79487),l=n(93315),c=n(41649),h=n(96927);const d=new l.Token("@jupyterlab/htmlviewer:IHTMLViewerTracker");class u extends o.DocumentWidget{constructor(t){super(Object.assign(Object.assign({},t),{content:new r.IFrame({sandbox:["allow-same-origin"]})})),this._renderPending=!1,this._parser=new DOMParser,this._monitor=null,this._objectUrl="",this._trustedChanged=new c.Signal(this),this.translator=t.translator||i.nullTranslator;const e=this.translator.load("jupyterlab");this.content.addClass("jp-HTMLViewer"),this.context.ready.then((()=>{this.update(),this._monitor=new s.ActivityMonitor({signal:this.context.model.contentChanged,timeout:1e3}),this._monitor.activityStopped.connect(this.update,this)})),this.toolbar.addItem("refresh",new r.ToolbarButton({icon:a.refreshIcon,onClick:async()=>{this.context.model.dirty||(await this.context.revert(),this.update())},tooltip:e.__("Rerender HTML Document")})),this.toolbar.addItem("trust",r.ReactWidget.create(h.createElement(_.TrustButtonComponent,{htmlDocument:this,translator:this.translator})))}get trusted(){return-1!==this.content.sandbox.indexOf("allow-scripts")}set trusted(t){this.trusted!==t&&(this.content.sandbox=t?_.trusted:_.untrusted,this.content.url=this.content.url,this._trustedChanged.emit(t))}get trustedChanged(){return this._trustedChanged}dispose(){if(this._objectUrl)try{URL.revokeObjectURL(this._objectUrl)}catch(t){}super.dispose()}onUpdateRequest(){this._renderPending||(this._renderPending=!0,this._renderModel().then((()=>this._renderPending=!1)))}async _renderModel(){let t=this.context.model.toString();t=await this._setBase(t);const e=new Blob([t],{type:"text/html"}),n=this._objectUrl;if(this._objectUrl=URL.createObjectURL(e),this.content.url=this._objectUrl,n)try{URL.revokeObjectURL(n)}catch(t){}}async _setBase(t){const e=this._parser.parseFromString(t,"text/html");let n=e.querySelector("base");n||(n=e.createElement("base"),e.head.insertBefore(n,e.head.firstChild));const r=this.context.path,s=await this.context.urlResolver.getDownloadUrl(r);return n.href=s,n.target="_self",e.documentElement.innerHTML}}class m extends o.ABCWidgetFactory{createNewWidget(t){return new u({context:t})}}var _;!function(t){t.untrusted=[],t.trusted=["allow-scripts"],t.TrustButtonComponent=function(t){const e=(t.translator||i.nullTranslator).load("jupyterlab");return h.createElement(r.UseSignal,{signal:t.htmlDocument.trustedChanged,initialSender:t.htmlDocument},(n=>h.createElement(r.ToolbarButtonComponent,{className:"",onClick:()=>t.htmlDocument.trusted=!t.htmlDocument.trusted,tooltip:e.__("Whether the HTML file is trusted.\nTrusting the file allows scripts to run in it,\nwhich may result in security risks.\nOnly enable for files you trust."),label:t.htmlDocument.trusted?e.__("Distrust HTML"):e.__("Trust HTML")})))}}(_||(_={}))}}]);
//# sourceMappingURL=1198.8fa4412dd723cc53e11e.js.map