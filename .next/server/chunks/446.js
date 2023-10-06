exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 3474:
/***/ ((module) => {

// Exports
module.exports = {
	"user_box_social_item": "loginAndSignUp_user_box_social_item__vLEml",
	"active": "loginAndSignUp_active__ATBvJ",
	"user_box_or": "loginAndSignUp_user_box_or__IwFYQ",
	"user_box_input": "loginAndSignUp_user_box_input__m4i2X",
	"user_box_input_box": "loginAndSignUp_user_box_input_box__TIOD8",
	"user_box_input_box_label": "loginAndSignUp_user_box_input_box_label__fsmeU",
	"button": "loginAndSignUp_button__zC89X"
};


/***/ }),

/***/ 8203:
/***/ ((module) => {

// Exports
module.exports = {
	"login": "login_login___x1HT",
	"login_box": "login_login_box__qrm8Q",
	"login_box_para": "login_login_box_para__keJqk"
};


/***/ }),

/***/ 8046:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3474);
/* harmony import */ var _loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9468);
/* harmony import */ var _components_componentsindex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_componentsindex_js__WEBPACK_IMPORTED_MODULE_4__]);
_components_componentsindex_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//INTERNALIMPORT



const loginAndSignUp = ()=>{
    const { 0: activeBtn , 1: setActiveBtn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const socialImage = [
        {
            social: _img__WEBPACK_IMPORTED_MODULE_3__/* ["default"].facebook */ .Z.facebook,
            name: "Continue with Facebook"
        },
        {
            social: _img__WEBPACK_IMPORTED_MODULE_3__/* ["default"].twitter */ .Z.twitter,
            name: "Continue with twitter"
        },
        {
            social: _img__WEBPACK_IMPORTED_MODULE_3__/* ["default"].facebook */ .Z.facebook,
            name: "Continue with Facebook"
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_social),
                    children: socialImage.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setActiveBtn(i + 1),
                            className: `${(_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_social_item)} ${activeBtn == i + 1 ? (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: el.social,
                                    alt: el.name,
                                    width: 30,
                                    height: 30,
                                    className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_social_item_img)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: el.name
                                    })
                                })
                            ]
                        }, i + 1))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_or),
                    children: "OR"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_input),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_input_box),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "email",
                                    children: "Email address"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    placeholder: "example@emample.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_input_box),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    htmlFor: "password",
                                    className: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_box_input_box_label),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "Forget password"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_componentsindex_js__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                    btnName: "Continue",
                    classStyle: (_loginAndSignUp_module_css__WEBPACK_IMPORTED_MODULE_5___default().button)
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginAndSignUp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;