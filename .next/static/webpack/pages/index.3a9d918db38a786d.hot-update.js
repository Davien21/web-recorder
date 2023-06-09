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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), defaultDevice = ref1[0], setdefault = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recordingDevice = ref2[0], setRecordingDevice = ref2[1];\n    var mediaRecorder;\n    var isActiveDevice = function(deviceId) {\n        return recordingDevice === deviceId;\n    };\n    var startRecording = function(deviceId) {\n        setRecordingDevice(deviceId);\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        setRecordingDevice(\"\");\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var sources = [];\n                devices.forEach(function(device) {\n                    if (!device.kind.includes(\"audio\")) return;\n                    if (sources.some(function(s) {\n                        return s.deviceId === device.deviceId;\n                    })) return;\n                    if (device.deviceId === \"default\") {\n                        setdefault(device.label.replace(\"Default\", \"\"));\n                        return;\n                    }\n                    sources.push(device);\n                });\n                console.log(sources);\n                setAudioSources(sources);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-3 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: \"Default Audio:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: defaultDevice\n                    }, void 0, false, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: [\n                                    index + 1,\n                                    \"). \",\n                                    audioSource.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: isActiveDevice(audioSource.deviceId) ? \"secondary\" : \"primary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: !isActiveDevice(audioSource.deviceId) ? \"secondary\" : \"primary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"GtiyeRsj2N8IjNltzdIW7DONhfM=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQUE7a0RBQ3BELE9BRUQ7Ozs7OzZDQUFTO2tEQUNULDhEQUFDWiw4Q0FBTTt3Q0FDTG1FLElBQUksRUFDRixDQUFDeEQsY0FBYyxDQUFDc0QsV0FBVyxDQUFDckQsUUFBUSxDQUFDLEdBQ2pDLFdBQVcsR0FDWCxTQUFTO3dDQUVmd0QsT0FBTyxFQUFFOUIsYUFBYTtrREFDdkIsTUFFRDs7Ozs7NkNBQVM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNGO21CQXpCRTRCLEtBQUs7Ozs7eUJBMEJUO2FBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBMUh1Qi9ELGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKCkge1xuICBjb25zdCBbYXVkaW9Tb3VyY2VzLCBzZXRBdWRpb1NvdXJjZXNdID0gdXNlU3RhdGU8TWVkaWFEZXZpY2VJbmZvW10+KFtdKTtcbiAgY29uc3QgW2RlZmF1bHREZXZpY2UsIHNldGRlZmF1bHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlY29yZGluZ0RldmljZSwgc2V0UmVjb3JkaW5nRGV2aWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgbGV0IG1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXI7XG4gIGNvbnN0IGlzQWN0aXZlRGV2aWNlID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gcmVjb3JkaW5nRGV2aWNlID09PSBkZXZpY2VJZDtcbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0UmVjb3JkaW5nRGV2aWNlKGRldmljZUlkKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHsgZGV2aWNlSWQ6IGRldmljZUlkIH0gfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmtzOiBCbG9iUGFydFtdID0gW107XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICAgICAgZG93bmxvYWRBdWRpbyhhdWRpb1VybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RhcnRlZCBmb3IgZGV2aWNlOlwiLCBkZXZpY2VJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIHNldFJlY29yZGluZ0RldmljZShcIlwiKTtcbiAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlICE9PSBcImluYWN0aXZlXCIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWRBdWRpbyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IFwicmVjb3JkZWRfYXVkaW8ud2F2XCI7XG4gICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgYW5jaG9yLnJlbW92ZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBQZXJtaXNzaW9uIGdyYW50ZWQsIHdlIGNhbiBub3cgY2FsbCBlbnVtZXJhdGVEZXZpY2VzXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgICAgICAuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgLnRoZW4oKGRldmljZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBzb3VyY2VzOiBNZWRpYURldmljZUluZm9bXSA9IFtdO1xuICAgICAgICAgICAgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFkZXZpY2Uua2luZC5pbmNsdWRlcyhcImF1ZGlvXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgIGlmIChzb3VyY2VzLnNvbWUoKHMpID0+IHMuZGV2aWNlSWQgPT09IGRldmljZS5kZXZpY2VJZCkpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKGRldmljZS5kZXZpY2VJZCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICAgICAgICBzZXRkZWZhdWx0KGRldmljZS5sYWJlbC5yZXBsYWNlKFwiRGVmYXVsdFwiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNvdXJjZXMucHVzaChkZXZpY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZXMpO1xuICAgICAgICAgICAgc2V0QXVkaW9Tb3VyY2VzKHNvdXJjZXMpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxpc3RpbmcgYXVkaW8gc291cmNlczpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgYXVkaW8gcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5BdWRpbyBSZWNvcmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTMgbXktNFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5EZWZhdWx0IEF1ZGlvOjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2RlZmF1bHREZXZpY2V9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICAgIHtpbmRleCArIDF9KS4ge2F1ZGlvU291cmNlLmxhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZm9ybT17XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZURldmljZShhdWRpb1NvdXJjZS5kZXZpY2VJZCkgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRSZWNvcmRpbmcoYXVkaW9Tb3VyY2UuZGV2aWNlSWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmb3JtPXtcbiAgICAgICAgICAgICAgICAgICFpc0FjdGl2ZURldmljZShhdWRpb1NvdXJjZS5kZXZpY2VJZClcbiAgICAgICAgICAgICAgICAgICAgPyBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RvcFJlY29yZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0b3BcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF1ZGlvUmVjb3JkZXIiLCJhdWRpb1NvdXJjZXMiLCJzZXRBdWRpb1NvdXJjZXMiLCJkZWZhdWx0RGV2aWNlIiwic2V0ZGVmYXVsdCIsInJlY29yZGluZ0RldmljZSIsInNldFJlY29yZGluZ0RldmljZSIsIm1lZGlhUmVjb3JkZXIiLCJpc0FjdGl2ZURldmljZSIsImRldmljZUlkIiwic3RhcnRSZWNvcmRpbmciLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJjaHVua3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJzdG9wIiwidXJsIiwiYW5jaG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZW1vdmUiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsInNvdXJjZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwia2luZCIsImluY2x1ZGVzIiwic29tZSIsInMiLCJsYWJlbCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJtYXAiLCJhdWRpb1NvdXJjZSIsImluZGV4IiwiZm9ybSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});