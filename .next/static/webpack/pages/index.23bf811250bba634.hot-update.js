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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefaultDevice = ref1[1];\n    var mediaRecorder;\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        setdefaultDevice(device.label.replace(\"Default - \", \"\"));\n                        return;\n                    }\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-4\",\n                children: \"Default Audio:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            \" \",\n            defaultDevice,\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSource.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsY0FBYzs7Ozs7b0JBQU87MEJBQ3BDLDhEQUFDRSxJQUFFO2dCQUFDRixTQUFTLEVBQUMsTUFBTTswQkFBQyxnQkFBYzs7Ozs7b0JBQUs7WUFBQSxHQUFDO1lBQUNwRCxhQUFhO1lBQ3RERixZQUFZLENBQUN5RCxHQUFHLENBQUMsU0FBQ0MsV0FBVyxFQUFFQyxLQUFLO3FDQUNuQyw4REFBQ04sS0FBRztvQkFBYUMsU0FBUyxFQUFDLG1CQUFtQjs4QkFDNUMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywwQkFBMEI7OzBDQUN2Qyw4REFBQ00sTUFBSTtnQ0FBQ04sU0FBUyxFQUFDLHVCQUF1Qjs7b0NBQ3BDSyxLQUFLLEdBQUcsQ0FBQztvQ0FBQyxLQUFHO29DQUFDRCxXQUFXLENBQUNQLEtBQUs7Ozs7OztxQ0FDM0I7MENBQ1AsOERBQUNFLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx5QkFBeUI7O2tEQUN0Qyw4REFBQzFELDhDQUFNO3dDQUNMaUUsSUFBSSxFQUFDLFdBQVc7d0NBQ2hCQyxPQUFPLEVBQUU7bURBQU16RCxjQUFjLENBQUNxRCxXQUFXLENBQUNwRCxRQUFRLENBQUM7eUNBQUE7a0RBQ3BELE9BRUQ7Ozs7OzZDQUFTO2tEQUNULDhEQUFDViw4Q0FBTTt3Q0FBQ2lFLElBQUksRUFBQyxXQUFXO3dDQUFDQyxPQUFPLEVBQUUvQixhQUFhO2tEQUFFLE1BRWpEOzs7Ozs2Q0FBUzs7Ozs7O3FDQUNMOzs7Ozs7NkJBQ0Y7bUJBaEJFNEIsS0FBSzs7Ozt5QkFpQlQ7YUFDUCxDQUFDOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7R0F4R3VCNUQsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvUmVjb3JkZXIoKSB7XG4gIGNvbnN0IFthdWRpb1NvdXJjZXMsIHNldEF1ZGlvU291cmNlc10gPSB1c2VTdGF0ZTxNZWRpYURldmljZUluZm9bXT4oW10pO1xuICBjb25zdCBbZGVmYXVsdERldmljZSwgc2V0ZGVmYXVsdERldmljZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGxldCBtZWRpYVJlY29yZGVyOiBNZWRpYVJlY29yZGVyO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHsgZGV2aWNlSWQ6IGRldmljZUlkIH0gfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmtzOiBCbG9iUGFydFtdID0gW107XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICAgICAgZG93bmxvYWRBdWRpbyhhdWRpb1VybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RhcnRlZCBmb3IgZGV2aWNlOlwiLCBkZXZpY2VJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09IFwiaW5hY3RpdmVcIikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgYW5jaG9yLmRvd25sb2FkID0gXCJyZWNvcmRlZF9hdWRpby53YXZcIjtcbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICBhbmNob3IucmVtb3ZlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFBlcm1pc3Npb24gZ3JhbnRlZCwgd2UgY2FuIG5vdyBjYWxsIGVudW1lcmF0ZURldmljZXNcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAgIC5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNvdXJjZXM6IE1lZGlhRGV2aWNlSW5mb1tdID0gW107XG4gICAgICAgICAgICBkZXZpY2VzLmZvckVhY2goKGRldmljZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWRldmljZS5raW5kLmluY2x1ZGVzKFwiYXVkaW9cIikpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKHNvdXJjZXMuc29tZSgocykgPT4gcy5kZXZpY2VJZCA9PT0gZGV2aWNlLmRldmljZUlkKSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZUlkID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAgICAgICAgIHNldGRlZmF1bHREZXZpY2UoZGV2aWNlLmxhYmVsLnJlcGxhY2UoXCJEZWZhdWx0IC0gXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc291cmNlcy5wdXNoKGRldmljZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc291cmNlcyk7XG4gICAgICAgICAgICBzZXRBdWRpb1NvdXJjZXMoc291cmNlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbGlzdGluZyBhdWRpbyBzb3VyY2VzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBhdWRpbyBwZXJtaXNzaW9uOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkF1ZGlvIFJlY29yZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0yXCI+PC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPkRlZmF1bHQgQXVkaW86PC9oMj4ge2RlZmF1bHREZXZpY2V9XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICAgIHtpbmRleCArIDF9KS4ge2F1ZGlvU291cmNlLmxhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9ybT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRSZWNvcmRpbmcoYXVkaW9Tb3VyY2UuZGV2aWNlSWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gZm9ybT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9PlxuICAgICAgICAgICAgICAgIFN0b3BcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF1ZGlvUmVjb3JkZXIiLCJhdWRpb1NvdXJjZXMiLCJzZXRBdWRpb1NvdXJjZXMiLCJkZWZhdWx0RGV2aWNlIiwic2V0ZGVmYXVsdERldmljZSIsIm1lZGlhUmVjb3JkZXIiLCJzdGFydFJlY29yZGluZyIsImRldmljZUlkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwiY2h1bmtzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInB1c2giLCJkYXRhIiwiYXVkaW9CbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkQXVkaW8iLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwic3RvcCIsInVybCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmVtb3ZlIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJzb3VyY2VzIiwiZm9yRWFjaCIsImRldmljZSIsImtpbmQiLCJpbmNsdWRlcyIsInNvbWUiLCJzIiwibGFiZWwiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsIm1hcCIsImF1ZGlvU291cmNlIiwiaW5kZXgiLCJzcGFuIiwiZm9ybSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});