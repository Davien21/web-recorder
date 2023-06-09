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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recordingDevice = ref2[0], setRecordingDevice = ref2[1];\n    var mediaRecorder;\n    var isRecordingDevice = function(deviceId) {\n        return recordingDevice === deviceId;\n    };\n    var startRecording = function(deviceId) {\n        setRecordingDevice(deviceId);\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        setRecordingDevice(\"\");\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        setdefault(device.label.replace(\"Default\", \"\"));\n                        return;\n                    }\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSource.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: isRecordingDevice(audioSource.deviceId) ? \"primary\" : \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: isRecordingDevice(audioSource.deviceId) ? \"primary\" : \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"GtiyeRsj2N8IjNltzdIW7DONhfM=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzt5Q0FBQTtrREFDcEQsT0FFRDs7Ozs7NkNBQVM7a0RBQ1QsOERBQUNaLDhDQUFNO3dDQUNMbUUsSUFBSSxFQUNGeEQsaUJBQWlCLENBQUNzRCxXQUFXLENBQUNyRCxRQUFRLENBQUMsR0FDbkMsU0FBUyxHQUNULFdBQVc7d0NBRWpCd0QsT0FBTyxFQUFFOUIsYUFBYTtrREFDdkIsTUFFRDs7Ozs7NkNBQVM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNGO21CQTNCRTRCLEtBQUs7Ozs7eUJBNEJUO2FBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBNUh1Qi9ELGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKCkge1xuICBjb25zdCBbYXVkaW9Tb3VyY2VzLCBzZXRBdWRpb1NvdXJjZXNdID0gdXNlU3RhdGU8TWVkaWFEZXZpY2VJbmZvW10+KFtdKTtcbiAgY29uc3QgW2RlZmF1bHREZXZpY2UsIHNldGRlZmF1bHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlY29yZGluZ0RldmljZSwgc2V0UmVjb3JkaW5nRGV2aWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgbGV0IG1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXI7XG4gIGNvbnN0IGlzUmVjb3JkaW5nRGV2aWNlID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gcmVjb3JkaW5nRGV2aWNlID09PSBkZXZpY2VJZDtcbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0UmVjb3JkaW5nRGV2aWNlKGRldmljZUlkKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHsgZGV2aWNlSWQ6IGRldmljZUlkIH0gfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmtzOiBCbG9iUGFydFtdID0gW107XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICAgICAgZG93bmxvYWRBdWRpbyhhdWRpb1VybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RhcnRlZCBmb3IgZGV2aWNlOlwiLCBkZXZpY2VJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIHNldFJlY29yZGluZ0RldmljZShcIlwiKTtcbiAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlICE9PSBcImluYWN0aXZlXCIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWRBdWRpbyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IFwicmVjb3JkZWRfYXVkaW8ud2F2XCI7XG4gICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgYW5jaG9yLnJlbW92ZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBQZXJtaXNzaW9uIGdyYW50ZWQsIHdlIGNhbiBub3cgY2FsbCBlbnVtZXJhdGVEZXZpY2VzXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgICAgICAuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgLnRoZW4oKGRldmljZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VzOiBNZWRpYURldmljZUluZm9bXSA9IFtdO1xuICAgICAgICAgICAgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFkZXZpY2Uua2luZC5pbmNsdWRlcyhcImF1ZGlvXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgIGlmIChzb3VyY2VzLnNvbWUoKHMpID0+IHMuZGV2aWNlSWQgPT09IGRldmljZS5kZXZpY2VJZCkpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKGRldmljZS5kZXZpY2VJZCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICAgICAgICBzZXRkZWZhdWx0KGRldmljZS5sYWJlbC5yZXBsYWNlKFwiRGVmYXVsdFwiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNvdXJjZXMucHVzaChkZXZpY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZXMpO1xuICAgICAgICAgICAgc2V0QXVkaW9Tb3VyY2VzKHNvdXJjZXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxpc3RpbmcgYXVkaW8gc291cmNlczpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgYXVkaW8gcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5BdWRpbyBSZWNvcmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgbXktNFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5EZWZhdWx0IEF1ZGlvOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2RlZmF1bHREZXZpY2V9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICAgIHtpbmRleCArIDF9KS4ge2F1ZGlvU291cmNlLmxhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9ybT17XG4gICAgICAgICAgICAgICAgICBpc1JlY29yZGluZ0RldmljZShhdWRpb1NvdXJjZS5kZXZpY2VJZClcbiAgICAgICAgICAgICAgICAgICAgPyBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRSZWNvcmRpbmcoYXVkaW9Tb3VyY2UuZGV2aWNlSWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmb3JtPXtcbiAgICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nRGV2aWNlKGF1ZGlvU291cmNlLmRldmljZUlkKVxuICAgICAgICAgICAgICAgICAgICA/IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RvcFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXVkaW9SZWNvcmRlciIsImF1ZGlvU291cmNlcyIsInNldEF1ZGlvU291cmNlcyIsImRlZmF1bHREZXZpY2UiLCJzZXRkZWZhdWx0IiwicmVjb3JkaW5nRGV2aWNlIiwic2V0UmVjb3JkaW5nRGV2aWNlIiwibWVkaWFSZWNvcmRlciIsImlzUmVjb3JkaW5nRGV2aWNlIiwiZGV2aWNlSWQiLCJzdGFydFJlY29yZGluZyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsImNodW5rcyIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwdXNoIiwiZGF0YSIsImF1ZGlvQmxvYiIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkb3dubG9hZEF1ZGlvIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInN0b3BSZWNvcmRpbmciLCJzdGF0ZSIsInN0b3AiLCJ1cmwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJlbW92ZSIsImVudW1lcmF0ZURldmljZXMiLCJkZXZpY2VzIiwic291cmNlcyIsImZvckVhY2giLCJkZXZpY2UiLCJraW5kIiwiaW5jbHVkZXMiLCJzb21lIiwicyIsImxhYmVsIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsIm1hcCIsImF1ZGlvU291cmNlIiwiaW5kZXgiLCJmb3JtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});