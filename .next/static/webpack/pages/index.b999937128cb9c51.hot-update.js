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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var mediaRecorder;\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        setdefault(device.label.replace(\"Default\", \"\"));\n                        return;\n                    }\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSource.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Z0JBQUNDLFNBQVMsRUFBQyxjQUFjOzs7OztvQkFBTzswQkFDcEMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7O2tDQUNoQyw4REFBQ0UsTUFBSTt3QkFBQ0YsU0FBUyxFQUFDLEVBQUU7a0NBQUMsZ0JBQWM7Ozs7OzRCQUFPO2tDQUN4Qyw4REFBQ0UsTUFBSTtrQ0FBRXRELGFBQWE7Ozs7OzRCQUFROzs7Ozs7b0JBQ3hCO1lBQ0xGLFlBQVksQ0FBQ3lELEdBQUcsQ0FBQyxTQUFDQyxXQUFXLEVBQUVDLEtBQUs7cUNBQ25DLDhEQUFDTixLQUFHO29CQUFhQyxTQUFTLEVBQUMsbUJBQW1COzhCQUM1Qyw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjs7MENBQ3ZDLDhEQUFDRSxNQUFJO2dDQUFDRixTQUFTLEVBQUMsdUJBQXVCOztvQ0FDcENLLEtBQUssR0FBRyxDQUFDO29DQUFDLEtBQUc7b0NBQUNELFdBQVcsQ0FBQ1AsS0FBSzs7Ozs7O3FDQUMzQjswQ0FDUCw4REFBQ0UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0RBQ3RDLDhEQUFDMUQsOENBQU07d0NBQ0xnRSxJQUFJLEVBQUMsV0FBVzt3Q0FDaEJDLE9BQU8sRUFBRTttREFBTXhELGNBQWMsQ0FBQ3FELFdBQVcsQ0FBQ3BELFFBQVEsQ0FBQzt5Q0FBQTtrREFDcEQsT0FFRDs7Ozs7NkNBQVM7a0RBQ1QsOERBQUNWLDhDQUFNO3dDQUFDZ0UsSUFBSSxFQUFDLFdBQVc7d0NBQUNDLE9BQU8sRUFBRTlCLGFBQWE7a0RBQUUsTUFFakQ7Ozs7OzZDQUFTOzs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDRjttQkFoQkU0QixLQUFLOzs7O3lCQWlCVDthQUNQLENBQUM7Ozs7OztZQUNFLENBQ047Q0FDSDtHQTNHdUI1RCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9SZWNvcmRlcigpIHtcbiAgY29uc3QgW2F1ZGlvU291cmNlcywgc2V0QXVkaW9Tb3VyY2VzXSA9IHVzZVN0YXRlPE1lZGlhRGV2aWNlSW5mb1tdPihbXSk7XG4gIGNvbnN0IFtkZWZhdWx0RGV2aWNlLCBzZXRkZWZhdWx0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgbGV0IG1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXI7XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSAoZGV2aWNlSWQ6IHN0cmluZykgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogeyBkZXZpY2VJZDogZGV2aWNlSWQgfSB9KVxuICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICBjb25zdCBjaHVua3M6IEJsb2JQYXJ0W10gPSBbXTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgICBjb25zdCBhdWRpb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcbiAgICAgICAgICBkb3dubG9hZEF1ZGlvKGF1ZGlvVXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdGFydGVkIGZvciBkZXZpY2U6XCIsIGRldmljZUlkKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSAhPT0gXCJpbmFjdGl2ZVwiKSB7XG4gICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQXVkaW8gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuaHJlZiA9IHVybDtcbiAgICBhbmNob3IuZG93bmxvYWQgPSBcInJlY29yZGVkX2F1ZGlvLndhdlwiO1xuICAgIGFuY2hvci5jbGljaygpO1xuICAgIGFuY2hvci5yZW1vdmUoKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gUGVybWlzc2lvbiBncmFudGVkLCB3ZSBjYW4gbm93IGNhbGwgZW51bWVyYXRlRGV2aWNlc1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgICAgLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKChkZXZpY2VzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc291cmNlczogTWVkaWFEZXZpY2VJbmZvW10gPSBbXTtcbiAgICAgICAgICAgIGRldmljZXMuZm9yRWFjaCgoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghZGV2aWNlLmtpbmQuaW5jbHVkZXMoXCJhdWRpb1wiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAoc291cmNlcy5zb21lKChzKSA9PiBzLmRldmljZUlkID09PSBkZXZpY2UuZGV2aWNlSWQpKSByZXR1cm47XG4gICAgICAgICAgICAgIGlmIChkZXZpY2UuZGV2aWNlSWQgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0ZGVmYXVsdChkZXZpY2UubGFiZWwucmVwbGFjZShcIkRlZmF1bHRcIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzb3VyY2VzLnB1c2goZGV2aWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2VzKTtcbiAgICAgICAgICAgIHNldEF1ZGlvU291cmNlcyhzb3VyY2VzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsaXN0aW5nIGF1ZGlvIHNvdXJjZXM6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXF1ZXN0aW5nIGF1ZGlvIHBlcm1pc3Npb246XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+QXVkaW8gUmVjb3JkZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0zIG15LTRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+RGVmYXVsdCBBdWRpbzo8L3NwYW4+XG4gICAgICAgIDxzcGFuPntkZWZhdWx0RGV2aWNlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2F1ZGlvU291cmNlcy5tYXAoKGF1ZGlvU291cmNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImF1ZGlvLXNvdXJjZSBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdhcC14LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1zcGFuLTQgb3BhY2l0eS02MFwiPlxuICAgICAgICAgICAgICB7aW5kZXggKyAxfSkuIHthdWRpb1NvdXJjZS5sYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGZvcm09XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGF1ZGlvU291cmNlLmRldmljZUlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGZvcm09XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfT5cbiAgICAgICAgICAgICAgICBTdG9wXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdWRpb1JlY29yZGVyIiwiYXVkaW9Tb3VyY2VzIiwic2V0QXVkaW9Tb3VyY2VzIiwiZGVmYXVsdERldmljZSIsInNldGRlZmF1bHQiLCJtZWRpYVJlY29yZGVyIiwic3RhcnRSZWNvcmRpbmciLCJkZXZpY2VJZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsImNodW5rcyIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwdXNoIiwiZGF0YSIsImF1ZGlvQmxvYiIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkb3dubG9hZEF1ZGlvIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdGF0ZSIsInN0b3AiLCJ1cmwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJlbW92ZSIsImVudW1lcmF0ZURldmljZXMiLCJkZXZpY2VzIiwic291cmNlcyIsImZvckVhY2giLCJkZXZpY2UiLCJraW5kIiwiaW5jbHVkZXMiLCJzb21lIiwicyIsImxhYmVsIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsIm1hcCIsImF1ZGlvU291cmNlIiwiaW5kZXgiLCJmb3JtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});