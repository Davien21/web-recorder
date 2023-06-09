"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var mediaRecorder;\n    var listAudioSources = function() {\n        navigator.mediaDevices.enumerateDevices().then(function(devices) {\n            console.log(devices);\n            var audioDevices = devices.filter(function(device) {\n                return device.kind === \"audioinput\";\n            });\n            setAudioSources(audioDevices);\n        }).catch(function(error) {\n            console.error(\"Error listing audio sources:\", error);\n        });\n    };\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        listAudioSources();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Audio Sources:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"audio-controls flex gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: audioSource.label\n                            }, void 0, false, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9SZWNvcmRlcigpIHtcbiAgY29uc3QgW2F1ZGlvU291cmNlcywgc2V0QXVkaW9Tb3VyY2VzXSA9IHVzZVN0YXRlPE1lZGlhRGV2aWNlSW5mb1tdPihbXSk7XG5cbiAgbGV0IG1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXI7XG5cbiAgY29uc3QgbGlzdEF1ZGlvU291cmNlcyA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkZXZpY2VzKVxuICAgICAgICBjb25zdCBhdWRpb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihcbiAgICAgICAgICAoZGV2aWNlKSA9PiBkZXZpY2Uua2luZCA9PT0gXCJhdWRpb2lucHV0XCJcbiAgICAgICAgKTtcbiAgICAgICAgc2V0QXVkaW9Tb3VyY2VzKGF1ZGlvRGV2aWNlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbGlzdGluZyBhdWRpbyBzb3VyY2VzOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB7IGRldmljZUlkOiBkZXZpY2VJZCB9IH0pXG4gICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNodW5rczogQmxvYlBhcnRbXSA9IFtdO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFhdmFpbGFibGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3BcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICAgIGNvbnN0IGF1ZGlvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpO1xuICAgICAgICAgIGRvd25sb2FkQXVkaW8oYXVkaW9VcmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0YXJ0ZWQgZm9yIGRldmljZTpcIiwgZGV2aWNlSWQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlICE9PSBcImluYWN0aXZlXCIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWRBdWRpbyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IFwicmVjb3JkZWRfYXVkaW8ud2F2XCI7XG4gICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgYW5jaG9yLnJlbW92ZSgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdEF1ZGlvU291cmNlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+QXVkaW8gUmVjb3JkZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTJcIj48L2Rpdj5cbiAgICAgIDxoMj5BdWRpbyBTb3VyY2VzOjwvaDI+XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1jb250cm9scyBmbGV4IGdhcC14LTJcIj5cbiAgICAgICAgICAgIDxzcGFuPnthdWRpb1NvdXJjZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGF1ZGlvU291cmNlLmRldmljZUlkKX0+XG4gICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3RvcFJlY29yZGluZ30+U3RvcDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdWRpb1JlY29yZGVyIiwiYXVkaW9Tb3VyY2VzIiwic2V0QXVkaW9Tb3VyY2VzIiwibWVkaWFSZWNvcmRlciIsImxpc3RBdWRpb1NvdXJjZXMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwidGhlbiIsImRldmljZXMiLCJjb25zb2xlIiwibG9nIiwiYXVkaW9EZXZpY2VzIiwiZmlsdGVyIiwiZGV2aWNlIiwia2luZCIsImNhdGNoIiwiZXJyb3IiLCJzdGFydFJlY29yZGluZyIsImRldmljZUlkIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJzdHJlYW0iLCJjaHVua3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0Iiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwic3RvcCIsInVybCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsIm1hcCIsImF1ZGlvU291cmNlIiwiaW5kZXgiLCJzcGFuIiwibGFiZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});