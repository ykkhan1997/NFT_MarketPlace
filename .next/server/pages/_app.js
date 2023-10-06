(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8998);
/* harmony import */ var viem_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9263);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7502);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, viem_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, viem_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//Import 





//Configure
const { chains , publicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([
    viem_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,
    viem_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,
    viem_chains__WEBPACK_IMPORTED_MODULE_4__.polygonMumbai,
    viem_chains__WEBPACK_IMPORTED_MODULE_4__.hardhat
], [
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({
    appName: "Nft MarketPlace",
    projectId: "f880097d97713804b25b9332323d903d",
    chains
});
const wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({
    autoConnect: true,
    connectors,
    publicClient
});
const WalletConnection = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
        config: wagmiConfig,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {
            chains: chains,
            modalSize: "compact",
            coolMode: true,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2262);
/* harmony import */ var _components_componentsindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9065);
/* harmony import */ var _Context_NFTMarketPlace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__, _Context_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_componentsindex__WEBPACK_IMPORTED_MODULE_4__, _Context_NFTMarketPlace__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_1__, _Context_wallet__WEBPACK_IMPORTED_MODULE_3__, _components_componentsindex__WEBPACK_IMPORTED_MODULE_4__, _Context_NFTMarketPlace__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







//INTRNAL IMPORT


const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Context_wallet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Context_NFTMarketPlace__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_componentsindex__WEBPACK_IMPORTED_MODULE_4__/* .NavBar */ .l2, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_componentsindex__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$_, {})
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5142:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ 1982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 7865:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/cg");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 4152:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/tb");

/***/ }),

/***/ 1946:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ti");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 8844:
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 7000:
/***/ ((module) => {

"use strict";
module.exports = import("ipfs-http-client");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 9263:
/***/ ((module) => {

"use strict";
module.exports = import("viem/chains");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 7502:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ 8577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,65], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();