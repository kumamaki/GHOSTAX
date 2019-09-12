var r=require("obj-traverse/lib/obj-traverse"),n=function(n,e){var i,l=null==n?void 0:null===(i=n.options)||void 0===i?void 0:i.routes;if(!l)return null;var o=null;return l.some(function(n){return o=r.findFirst(n,"children",e)}),o||null};export{n as findRawRoute};
//# sourceMappingURL=vue-router.esm.js.map
