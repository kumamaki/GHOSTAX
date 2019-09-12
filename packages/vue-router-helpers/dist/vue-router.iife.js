var VueRouter=function(r){"use strict";var n=require("obj-traverse/lib/obj-traverse");return r.findRawRoute=function(r,u){var e,t=null==r?void 0:null===(e=r.options)||void 0===e?void 0:e.routes;if(!t)return null;var i=null;return t.some(function(r){return i=n.findFirst(r,"children",u)}),i||null},r}({});
//# sourceMappingURL=vue-router.iife.js.map
