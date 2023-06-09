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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recordingDevice = ref2[0], setRecordingDevice = ref2[1];\n    var mediaRecorder;\n    var isRecordingDe = recordingDevice !== \"\";\n    var startRecording = function(deviceId) {\n        setRecordingDevice(deviceId);\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        setRecordingDevice(\"\");\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        setdefault(device.label.replace(\"Default\", \"\"));\n                        return;\n                    }\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSource.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"GtiyeRsj2N8IjNltzdIW7DONhfM=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7a0RBQUUsTUFFakQ7Ozs7OzZDQUFTOzs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDRjttQkFoQkU0QixLQUFLOzs7O3lCQWlCVDthQUNQLENBQUM7Ozs7OztZQUNFLENBQ047Q0FDSDtHQS9HdUIvRCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9SZWNvcmRlcigpIHtcbiAgY29uc3QgW2F1ZGlvU291cmNlcywgc2V0QXVkaW9Tb3VyY2VzXSA9IHVzZVN0YXRlPE1lZGlhRGV2aWNlSW5mb1tdPihbXSk7XG4gIGNvbnN0IFtkZWZhdWx0RGV2aWNlLCBzZXRkZWZhdWx0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtyZWNvcmRpbmdEZXZpY2UsIHNldFJlY29yZGluZ0RldmljZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGxldCBtZWRpYVJlY29yZGVyOiBNZWRpYVJlY29yZGVyO1xuICBjb25zdCBpc1JlY29yZGluZ0RlID0gcmVjb3JkaW5nRGV2aWNlICE9PSBcIlwiO1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRSZWNvcmRpbmdEZXZpY2UoZGV2aWNlSWQpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogeyBkZXZpY2VJZDogZGV2aWNlSWQgfSB9KVxuICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICBjb25zdCBjaHVua3M6IEJsb2JQYXJ0W10gPSBbXTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9wXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJhdWRpby93YXZcIiB9KTtcbiAgICAgICAgICBjb25zdCBhdWRpb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcbiAgICAgICAgICBkb3dubG9hZEF1ZGlvKGF1ZGlvVXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdGFydGVkIGZvciBkZXZpY2U6XCIsIGRldmljZUlkKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyByZWNvcmRpbmc6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XG4gICAgc2V0UmVjb3JkaW5nRGV2aWNlKFwiXCIpO1xuICAgIGlmIChtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09IFwiaW5hY3RpdmVcIikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgYW5jaG9yLmRvd25sb2FkID0gXCJyZWNvcmRlZF9hdWRpby53YXZcIjtcbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICBhbmNob3IucmVtb3ZlKCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFBlcm1pc3Npb24gZ3JhbnRlZCwgd2UgY2FuIG5vdyBjYWxsIGVudW1lcmF0ZURldmljZXNcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAgIC5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAudGhlbigoZGV2aWNlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNvdXJjZXM6IE1lZGlhRGV2aWNlSW5mb1tdID0gW107XG4gICAgICAgICAgICBkZXZpY2VzLmZvckVhY2goKGRldmljZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWRldmljZS5raW5kLmluY2x1ZGVzKFwiYXVkaW9cIikpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKHNvdXJjZXMuc29tZSgocykgPT4gcy5kZXZpY2VJZCA9PT0gZGV2aWNlLmRldmljZUlkKSkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZUlkID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAgICAgICAgIHNldGRlZmF1bHQoZGV2aWNlLmxhYmVsLnJlcGxhY2UoXCJEZWZhdWx0XCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc291cmNlcy5wdXNoKGRldmljZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc291cmNlcyk7XG4gICAgICAgICAgICBzZXRBdWRpb1NvdXJjZXMoc291cmNlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbGlzdGluZyBhdWRpbyBzb3VyY2VzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBhdWRpbyBwZXJtaXNzaW9uOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkF1ZGlvIFJlY29yZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0yXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMyBteS00XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPkRlZmF1bHQgQXVkaW86PC9zcGFuPlxuICAgICAgICA8c3Bhbj57ZGVmYXVsdERldmljZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthdWRpb1NvdXJjZXMubWFwKChhdWRpb1NvdXJjZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhdWRpby1zb3VyY2UgbWItM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBnYXAteC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IG9wYWNpdHktNjBcIj5cbiAgICAgICAgICAgICAge2luZGV4ICsgMX0pLiB7YXVkaW9Tb3VyY2UubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBnYXAteC00XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmb3JtPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydFJlY29yZGluZyhhdWRpb1NvdXJjZS5kZXZpY2VJZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBmb3JtPVwic2Vjb25kYXJ5XCIgb25DbGljaz17c3RvcFJlY29yZGluZ30+XG4gICAgICAgICAgICAgICAgU3RvcFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXVkaW9SZWNvcmRlciIsImF1ZGlvU291cmNlcyIsInNldEF1ZGlvU291cmNlcyIsImRlZmF1bHREZXZpY2UiLCJzZXRkZWZhdWx0IiwicmVjb3JkaW5nRGV2aWNlIiwic2V0UmVjb3JkaW5nRGV2aWNlIiwibWVkaWFSZWNvcmRlciIsImlzUmVjb3JkaW5nRGUiLCJzdGFydFJlY29yZGluZyIsImRldmljZUlkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwiY2h1bmtzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInB1c2giLCJkYXRhIiwiYXVkaW9CbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkQXVkaW8iLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwic3RvcCIsInVybCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmVtb3ZlIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJzb3VyY2VzIiwiZm9yRWFjaCIsImRldmljZSIsImtpbmQiLCJpbmNsdWRlcyIsInNvbWUiLCJzIiwibGFiZWwiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwibWFwIiwiYXVkaW9Tb3VyY2UiLCJpbmRleCIsImZvcm0iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});