import { u as useDarkMode, v as vue_cjs_prod, _ as _sfc_main$b, a as _sfc_main$2 } from './server.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const istDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$b;
      const _component_MyContent = _sfc_main$2;
      _push(`<!--[--><head><title>ZAIDI Portfolio</title></head><body class="${serverRenderer.exports.ssrRenderClass([!vue_cjs_prod.unref(istDarkMode).isDarkMode.value ? "bg-white" : "bg-gray-900", "h-screen w-full"])}">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_MyContent, null, null, _parent));
      _push(`</body><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.1d08cf08.mjs.map
