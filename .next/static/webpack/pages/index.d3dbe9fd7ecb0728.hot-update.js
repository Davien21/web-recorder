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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefaultDevice = ref1[1];\n    var mediaRecorder;\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // console.log(audioSources);\n    }, [\n        audioSources\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-4\",\n                children: \"Available Sources:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: audioSource.label\n                            }, void 0, false, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"XKkXJQJpMMGw5vJtJ/2mTxxK71w=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07MEJBQUMsb0JBQWtCOzs7OztvQkFBSztZQUMzQ3BELFlBQVksQ0FBQ3VELEdBQUcsQ0FBQyxTQUFDQyxXQUFXLEVBQUVDLEtBQUs7cUNBQ25DLDhEQUFDTixLQUFHO29CQUFhQyxTQUFTLEVBQUMsbUJBQW1COzhCQUM1Qyw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjs7MENBQ3ZDLDhEQUFDTSxNQUFJO2dDQUFDTixTQUFTLEVBQUMsdUJBQXVCOzBDQUFFSSxXQUFXLENBQUNHLEtBQUs7Ozs7O3FDQUFROzBDQUNsRSw4REFBQ1IsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0RBQ3RDLDhEQUFDeEQsOENBQU07d0NBQ0xnRSxJQUFJLEVBQUMsV0FBVzt3Q0FDaEJDLE9BQU8sRUFBRTttREFBTXhELGNBQWMsQ0FBQ21ELFdBQVcsQ0FBQ2xELFFBQVEsQ0FBQzt5Q0FBQTtrREFDcEQsT0FFRDs7Ozs7NkNBQVM7a0RBQ1QsOERBQUNWLDhDQUFNO3dDQUFDZ0UsSUFBSSxFQUFDLFdBQVc7d0NBQUNDLE9BQU8sRUFBRTlCLGFBQWE7a0RBQUUsTUFFakQ7Ozs7OzZDQUFTOzs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDRjttQkFkRTBCLEtBQUs7Ozs7eUJBZVQ7YUFDUCxDQUFDOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7R0F0R3VCMUQsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvUmVjb3JkZXIoKSB7XG4gIGNvbnN0IFthdWRpb1NvdXJjZXMsIHNldEF1ZGlvU291cmNlc10gPSB1c2VTdGF0ZTxNZWRpYURldmljZUluZm9bXT4oW10pO1xuICBjb25zdCBbZGVmYXVsdERldmljZSwgc2V0ZGVmYXVsdERldmljZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBcbiAgbGV0IG1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXI7XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSAoZGV2aWNlSWQ6IHN0cmluZykgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogeyBkZXZpY2VJZDogZGV2aWNlSWQgfSB9KVxuICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICBjb25zdCBjaHVua3M6IEJsb2JQYXJ0W10gPSBbXTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgICBjb25zdCBhdWRpb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcbiAgICAgICAgICBkb3dubG9hZEF1ZGlvKGF1ZGlvVXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdGFydGVkIGZvciBkZXZpY2U6XCIsIGRldmljZUlkKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSAhPT0gXCJpbmFjdGl2ZVwiKSB7XG4gICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQXVkaW8gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuaHJlZiA9IHVybDtcbiAgICBhbmNob3IuZG93bmxvYWQgPSBcInJlY29yZGVkX2F1ZGlvLndhdlwiO1xuICAgIGFuY2hvci5jbGljaygpO1xuICAgIGFuY2hvci5yZW1vdmUoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUGVybWlzc2lvbiBncmFudGVkLCB3ZSBjYW4gbm93IGNhbGwgZW51bWVyYXRlRGV2aWNlc1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgICAgLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKChkZXZpY2VzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc291cmNlczogTWVkaWFEZXZpY2VJbmZvW10gPSBbXVxuICAgICAgICAgICAgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFkZXZpY2Uua2luZC5pbmNsdWRlcyhcImF1ZGlvXCIpKSByZXR1cm5cbiAgICAgICAgICAgICAgaWYgKHNvdXJjZXMuc29tZShzID0+IHMuZGV2aWNlSWQgPT09IGRldmljZS5kZXZpY2VJZCkpIHJldHVyblxuICAgICAgICAgICAgICBzb3VyY2VzLnB1c2goZGV2aWNlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZXMpO1xuICAgICAgICAgICAgc2V0QXVkaW9Tb3VyY2VzKHNvdXJjZXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxpc3RpbmcgYXVkaW8gc291cmNlczpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgYXVkaW8gcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGF1ZGlvU291cmNlcyk7XG4gIH0sIFthdWRpb1NvdXJjZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5BdWRpbyBSZWNvcmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPjwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTRcIj5BdmFpbGFibGUgU291cmNlczo8L2gyPlxuICAgICAge2F1ZGlvU291cmNlcy5tYXAoKGF1ZGlvU291cmNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImF1ZGlvLXNvdXJjZSBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdhcC14LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgb3BhY2l0eS02MFwiPnthdWRpb1NvdXJjZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBnYXAteC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmb3JtPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydFJlY29yZGluZyhhdWRpb1NvdXJjZS5kZXZpY2VJZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBmb3JtPVwic2Vjb25kYXJ5XCIgb25DbGljaz17c3RvcFJlY29yZGluZ30+XG4gICAgICAgICAgICAgICAgU3RvcFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXVkaW9SZWNvcmRlciIsImF1ZGlvU291cmNlcyIsInNldEF1ZGlvU291cmNlcyIsImRlZmF1bHREZXZpY2UiLCJzZXRkZWZhdWx0RGV2aWNlIiwibWVkaWFSZWNvcmRlciIsInN0YXJ0UmVjb3JkaW5nIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJjaHVua3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJzdG9wIiwidXJsIiwiYW5jaG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZW1vdmUiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsInNvdXJjZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwia2luZCIsImluY2x1ZGVzIiwic29tZSIsInMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiYXVkaW9Tb3VyY2UiLCJpbmRleCIsInNwYW4iLCJsYWJlbCIsImZvcm0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});