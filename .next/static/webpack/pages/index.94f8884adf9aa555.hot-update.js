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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var mediaRecorder;\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var audioDevices = devices.filter(function(device) {\n                    return device.kind.includes(\"audio\");\n                });\n                console.log(audioDevices);\n                setAudioSources(audioDevices);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // console.log(audioSources);\n    }, [\n        audioSources\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Audio Sources:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"audio-controls grid grid-cols-3 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-\",\n                                children: audioSource.label\n                            }, void 0, false, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNpRCxXQUFXLENBQUNoRCxRQUFRLENBQUM7eUNBQUE7a0RBQUUsT0FFN0Q7Ozs7OzZDQUFTO2tEQUNULDhEQUFDUiw4Q0FBTTt3Q0FBQzRELE9BQU8sRUFBRTNCLGFBQWE7a0RBQUUsTUFBSTs7Ozs7NkNBQVM7Ozs7OztxQ0FDekM7Ozs7Ozs2QkFDRjttQkFURXdCLEtBQUs7Ozs7eUJBVVQ7YUFDUCxDQUFDOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7R0E1RnVCdEQsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvUmVjb3JkZXIoKSB7XG4gIGNvbnN0IFthdWRpb1NvdXJjZXMsIHNldEF1ZGlvU291cmNlc10gPSB1c2VTdGF0ZTxNZWRpYURldmljZUluZm9bXT4oW10pO1xuXG4gIGxldCBtZWRpYVJlY29yZGVyOiBNZWRpYVJlY29yZGVyO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHsgZGV2aWNlSWQ6IGRldmljZUlkIH0gfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmtzOiBCbG9iUGFydFtdID0gW107XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICAgICAgZG93bmxvYWRBdWRpbyhhdWRpb1VybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RhcnRlZCBmb3IgZGV2aWNlOlwiLCBkZXZpY2VJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09IFwiaW5hY3RpdmVcIikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgYW5jaG9yLmRvd25sb2FkID0gXCJyZWNvcmRlZF9hdWRpby53YXZcIjtcbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICBhbmNob3IucmVtb3ZlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFBlcm1pc3Npb24gZ3JhbnRlZCwgd2UgY2FuIG5vdyBjYWxsIGVudW1lcmF0ZURldmljZXNcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAgIC5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXVkaW9EZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT5cbiAgICAgICAgICAgICAgZGV2aWNlLmtpbmQuaW5jbHVkZXMoXCJhdWRpb1wiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvRGV2aWNlcyk7XG4gICAgICAgICAgICBzZXRBdWRpb1NvdXJjZXMoYXVkaW9EZXZpY2VzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsaXN0aW5nIGF1ZGlvIHNvdXJjZXM6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXF1ZXN0aW5nIGF1ZGlvIHBlcm1pc3Npb246XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhhdWRpb1NvdXJjZXMpO1xuICB9LCBbYXVkaW9Tb3VyY2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+QXVkaW8gUmVjb3JkZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTJcIj48L2Rpdj5cbiAgICAgIDxoMj5BdWRpbyBTb3VyY2VzOjwvaDI+XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpby1jb250cm9scyBncmlkIGdyaWQtY29scy0zIGdhcC14LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1zcGFuLVwiPnthdWRpb1NvdXJjZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGF1ZGlvU291cmNlLmRldmljZUlkKX0+XG4gICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3RvcFJlY29yZGluZ30+U3RvcDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdWRpb1JlY29yZGVyIiwiYXVkaW9Tb3VyY2VzIiwic2V0QXVkaW9Tb3VyY2VzIiwibWVkaWFSZWNvcmRlciIsInN0YXJ0UmVjb3JkaW5nIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJjaHVua3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJzdG9wIiwidXJsIiwiYW5jaG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZW1vdmUiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsImF1ZGlvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImtpbmQiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJhdWRpb1NvdXJjZSIsImluZGV4Iiwic3BhbiIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});