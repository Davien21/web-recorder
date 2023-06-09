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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSrcs = ref[0], setAudioSrcs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recordingDevice = ref2[0], setRecordingDevice = ref2[1];\n    var mediaRecorderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var isActive = function(deviceId) {\n        return recordingDevice === deviceId;\n    };\n    var startRecording = function(deviceId) {\n        setRecordingDevice(deviceId);\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            var mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            mediaRecorderRef.current = mediaRecorder;\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        setRecordingDevice(\"\");\n        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== \"inactive\") {\n            mediaRecorderRef.current.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        return setdefault(device.label.replace(\"Default\", \"\"));\n                    }\n                    sources.push(device);\n                });\n                setAudioSrcs(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"op\",\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            audioSrcs.map(function(audioSrc, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSrc.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        disabled: isActive(audioSrc.deviceId),\n                                        // form={isActive(audioSrc.deviceId) ? \"secondary\" : \"primary\"}\n                                        onClick: function() {\n                                            return startRecording(audioSrc.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        disabled: !isActive(audioSrc.deviceId),\n                                        // form={!isActive(audioSrc.deviceId) ? \"secondary\" : \"primary\"}\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"8wYck9UbmSnqKjUUAQyStqh907A=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0Q7d0NBQy9EMEQsT0FBTyxFQUFFO21EQUFNekQsY0FBYyxDQUFDc0QsUUFBUSxDQUFDdkQsUUFBUSxDQUFDO3lDQUFBO2tEQUNqRCxPQUVEOzs7Ozs2Q0FBUztrREFDVCw4REFBQ2IsOENBQU07d0NBQ0xzRSxRQUFRLEVBQUUsQ0FBQzFELFFBQVEsQ0FBQ3dELFFBQVEsQ0FBQ3ZELFFBQVEsQ0FBQzt3Q0FDdEMsZ0VBQWdFO3dDQUNoRTBELE9BQU8sRUFBRTlCLGFBQWE7a0RBQ3ZCLE1BRUQ7Ozs7OzZDQUFTOzs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDRjttQkFyQkU0QixLQUFLOzs7O3lCQXNCVDthQUNQLENBQUM7Ozs7OztZQUNFLENBQ047Q0FDSDtHQXpIdUJqRSxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKCkge1xuICBjb25zdCBbYXVkaW9TcmNzLCBzZXRBdWRpb1NyY3NdID0gdXNlU3RhdGU8TWVkaWFEZXZpY2VJbmZvW10+KFtdKTtcbiAgY29uc3QgW2RlZmF1bHREZXZpY2UsIHNldGRlZmF1bHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlY29yZGluZ0RldmljZSwgc2V0UmVjb3JkaW5nRGV2aWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgbWVkaWFSZWNvcmRlclJlZiA9IHVzZVJlZjxNZWRpYVJlY29yZGVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAoZGV2aWNlSWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiByZWNvcmRpbmdEZXZpY2UgPT09IGRldmljZUlkO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRSZWNvcmRpbmdEZXZpY2UoZGV2aWNlSWQpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogeyBkZXZpY2VJZDogZGV2aWNlSWQgfSB9KVxuICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICBjb25zdCBjaHVua3M6IEJsb2JQYXJ0W10gPSBbXTtcblxuICAgICAgICBjb25zdCBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgICBjb25zdCBhdWRpb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcbiAgICAgICAgICBkb3dubG9hZEF1ZGlvKGF1ZGlvVXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xuICAgICAgICBtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQgPSBtZWRpYVJlY29yZGVyO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdGFydGVkIGZvciBkZXZpY2U6XCIsIGRldmljZUlkKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgc2V0UmVjb3JkaW5nRGV2aWNlKFwiXCIpO1xuICAgIGlmIChcbiAgICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudCAmJlxuICAgICAgbWVkaWFSZWNvcmRlclJlZi5jdXJyZW50LnN0YXRlICE9PSBcImluYWN0aXZlXCJcbiAgICApIHtcbiAgICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudC5zdG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgYW5jaG9yLmRvd25sb2FkID0gXCJyZWNvcmRlZF9hdWRpby53YXZcIjtcbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICBhbmNob3IucmVtb3ZlKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAgIC5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNvdXJjZXM6IE1lZGlhRGV2aWNlSW5mb1tdID0gW107XG4gICAgICAgICAgICBkZXZpY2VzLmZvckVhY2goKGRldmljZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWRldmljZS5raW5kLmluY2x1ZGVzKFwiYXVkaW9cIikpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKHNvdXJjZXMuc29tZSgocykgPT4gcy5kZXZpY2VJZCA9PT0gZGV2aWNlLmRldmljZUlkKSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZUlkID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRkZWZhdWx0KGRldmljZS5sYWJlbC5yZXBsYWNlKFwiRGVmYXVsdFwiLCBcIlwiKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc291cmNlcy5wdXNoKGRldmljZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0QXVkaW9TcmNzKHNvdXJjZXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxpc3RpbmcgYXVkaW8gc291cmNlczpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgYXVkaW8gcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5BdWRpbyBSZWNvcmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgbXktNFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5EZWZhdWx0IEF1ZGlvOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BcIj57ZGVmYXVsdERldmljZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthdWRpb1NyY3MubWFwKChhdWRpb1NyYywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhdWRpby1zb3VyY2UgbWItM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBnYXAteC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG9wYWNpdHktNjBcIj5cbiAgICAgICAgICAgICAge2luZGV4ICsgMX0pLiB7YXVkaW9TcmMubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBnYXAteC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNBY3RpdmUoYXVkaW9TcmMuZGV2aWNlSWQpfVxuICAgICAgICAgICAgICAgIC8vIGZvcm09e2lzQWN0aXZlKGF1ZGlvU3JjLmRldmljZUlkKSA/IFwic2Vjb25kYXJ5XCIgOiBcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydFJlY29yZGluZyhhdWRpb1NyYy5kZXZpY2VJZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBY3RpdmUoYXVkaW9TcmMuZGV2aWNlSWQpfVxuICAgICAgICAgICAgICAgIC8vIGZvcm09eyFpc0FjdGl2ZShhdWRpb1NyYy5kZXZpY2VJZCkgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RvcFJlY29yZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0b3BcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkF1ZGlvUmVjb3JkZXIiLCJhdWRpb1NyY3MiLCJzZXRBdWRpb1NyY3MiLCJkZWZhdWx0RGV2aWNlIiwic2V0ZGVmYXVsdCIsInJlY29yZGluZ0RldmljZSIsInNldFJlY29yZGluZ0RldmljZSIsIm1lZGlhUmVjb3JkZXJSZWYiLCJpc0FjdGl2ZSIsImRldmljZUlkIiwic3RhcnRSZWNvcmRpbmciLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJjaHVua3MiLCJtZWRpYVJlY29yZGVyIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInB1c2giLCJkYXRhIiwiYXVkaW9CbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkQXVkaW8iLCJzdGFydCIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdGF0ZSIsInN0b3AiLCJ1cmwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJlbW92ZSIsImVudW1lcmF0ZURldmljZXMiLCJkZXZpY2VzIiwic291cmNlcyIsImZvckVhY2giLCJkZXZpY2UiLCJraW5kIiwiaW5jbHVkZXMiLCJzb21lIiwicyIsImxhYmVsIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsIm1hcCIsImF1ZGlvU3JjIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});