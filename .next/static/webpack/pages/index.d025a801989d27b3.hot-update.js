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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSrcs = ref[0], setAudioSrcs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recordingDevice = ref2[0], setRecordingDevice = ref2[1];\n    var mediaRecorderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var isActive = function(deviceId) {\n        return recordingDevice === deviceId;\n    };\n    var startRecording = function(deviceId) {\n        setRecordingDevice(deviceId);\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            var mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            mediaRecorderRef.current = mediaRecorder;\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        setRecordingDevice(\"\");\n        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== \"inactive\") {\n            mediaRecorderRef.current.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") return setdefault(device.label.replace(\"Default\", \"\"));\n                    sources.push(device);\n                });\n                setAudioSrcs(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            audioSrcs.map(function(audioSrc, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSrc.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: isActive(audioSrc.deviceId) ? \"secondary\" : \"primary\",\n                                        onClick: function() {\n                                            return startRecording(audioSrc.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: !isActive(audioSrc.deviceId) ? \"secondary\" : \"primary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"8wYck9UbmSnqKjUUAQyStqh907A=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxjQUFjLENBQUNzRCxRQUFRLENBQUN2RCxRQUFRLENBQUM7eUNBQUE7a0RBQ2pELE9BRUQ7Ozs7OzZDQUFTO2tEQUNULDhEQUFDYiw4Q0FBTTt3Q0FDTHNFLElBQUksRUFBRSxDQUFDMUQsUUFBUSxDQUFDd0QsUUFBUSxDQUFDdkQsUUFBUSxDQUFDLEdBQUcsV0FBVyxHQUFHLFNBQVM7d0NBQzVEMEQsT0FBTyxFQUFFOUIsYUFBYTtrREFDdkIsTUFFRDs7Ozs7NkNBQVM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNGO21CQW5CRTRCLEtBQUs7Ozs7eUJBb0JUO2FBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBdkh1QmpFLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvUmVjb3JkZXIoKSB7XG4gIGNvbnN0IFthdWRpb1NyY3MsIHNldEF1ZGlvU3Jjc10gPSB1c2VTdGF0ZTxNZWRpYURldmljZUluZm9bXT4oW10pO1xuICBjb25zdCBbZGVmYXVsdERldmljZSwgc2V0ZGVmYXVsdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcmVjb3JkaW5nRGV2aWNlLCBzZXRSZWNvcmRpbmdEZXZpY2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBtZWRpYVJlY29yZGVyUmVmID0gdXNlUmVmPE1lZGlhUmVjb3JkZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBpc0FjdGl2ZSA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHJlY29yZGluZ0RldmljZSA9PT0gZGV2aWNlSWQ7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRSZWNvcmRpbmcgPSAoZGV2aWNlSWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFJlY29yZGluZ0RldmljZShkZXZpY2VJZCk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB7IGRldmljZUlkOiBkZXZpY2VJZCB9IH0pXG4gICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNodW5rczogQmxvYlBhcnRbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFhdmFpbGFibGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3BcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICAgIGNvbnN0IGF1ZGlvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpO1xuICAgICAgICAgIGRvd25sb2FkQXVkaW8oYXVkaW9VcmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudCA9IG1lZGlhUmVjb3JkZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0YXJ0ZWQgZm9yIGRldmljZTpcIiwgZGV2aWNlSWQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcbiAgICBzZXRSZWNvcmRpbmdEZXZpY2UoXCJcIik7XG4gICAgaWYgKFxuICAgICAgbWVkaWFSZWNvcmRlclJlZi5jdXJyZW50ICYmXG4gICAgICBtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQuc3RhdGUgIT09IFwiaW5hY3RpdmVcIlxuICAgICkge1xuICAgICAgbWVkaWFSZWNvcmRlclJlZi5jdXJyZW50LnN0b3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0b3BwZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQXVkaW8gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhbmNob3IuaHJlZiA9IHVybDtcbiAgICBhbmNob3IuZG93bmxvYWQgPSBcInJlY29yZGVkX2F1ZGlvLndhdlwiO1xuICAgIGFuY2hvci5jbGljaygpO1xuICAgIGFuY2hvci5yZW1vdmUoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgICAgLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKChkZXZpY2VzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc291cmNlczogTWVkaWFEZXZpY2VJbmZvW10gPSBbXTtcbiAgICAgICAgICAgIGRldmljZXMuZm9yRWFjaCgoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghZGV2aWNlLmtpbmQuaW5jbHVkZXMoXCJhdWRpb1wiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAoc291cmNlcy5zb21lKChzKSA9PiBzLmRldmljZUlkID09PSBkZXZpY2UuZGV2aWNlSWQpKSByZXR1cm47XG4gICAgICAgICAgICAgIGlmIChkZXZpY2UuZGV2aWNlSWQgPT09IFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRkZWZhdWx0KGRldmljZS5sYWJlbC5yZXBsYWNlKFwiRGVmYXVsdFwiLCBcIlwiKSk7XG5cbiAgICAgICAgICAgICAgc291cmNlcy5wdXNoKGRldmljZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0QXVkaW9TcmNzKHNvdXJjZXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxpc3RpbmcgYXVkaW8gc291cmNlczpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgYXVkaW8gcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5BdWRpbyBSZWNvcmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgbXktNFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5EZWZhdWx0IEF1ZGlvOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2RlZmF1bHREZXZpY2V9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7YXVkaW9TcmNzLm1hcCgoYXVkaW9TcmMsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICAgIHtpbmRleCArIDF9KS4ge2F1ZGlvU3JjLmxhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9ybT17aXNBY3RpdmUoYXVkaW9TcmMuZGV2aWNlSWQpID8gXCJzZWNvbmRhcnlcIiA6IFwicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGF1ZGlvU3JjLmRldmljZUlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9ybT17IWlzQWN0aXZlKGF1ZGlvU3JjLmRldmljZUlkKSA/IFwic2Vjb25kYXJ5XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RvcFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXVkaW9SZWNvcmRlciIsImF1ZGlvU3JjcyIsInNldEF1ZGlvU3JjcyIsImRlZmF1bHREZXZpY2UiLCJzZXRkZWZhdWx0IiwicmVjb3JkaW5nRGV2aWNlIiwic2V0UmVjb3JkaW5nRGV2aWNlIiwibWVkaWFSZWNvcmRlclJlZiIsImlzQWN0aXZlIiwiZGV2aWNlSWQiLCJzdGFydFJlY29yZGluZyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsImNodW5rcyIsIm1lZGlhUmVjb3JkZXIiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwic3RvcCIsInVybCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmVtb3ZlIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJzb3VyY2VzIiwiZm9yRWFjaCIsImRldmljZSIsImtpbmQiLCJpbmNsdWRlcyIsInNvbWUiLCJzIiwibGFiZWwiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwibWFwIiwiYXVkaW9TcmMiLCJpbmRleCIsImZvcm0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});