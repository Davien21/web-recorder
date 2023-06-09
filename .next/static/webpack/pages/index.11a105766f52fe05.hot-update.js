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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var mediaRecorder;\n    var listAudioSources = function() {\n        navigator.mediaDevices.enumerateDevices().then(function(devices) {\n            var audioDevices = devices.filter(function(device) {\n                return device.kind === \"audioinput\";\n            });\n            console.log(audioDevices);\n            setAudioSources(audioDevices);\n        }).catch(function(error) {\n            console.error(\"Error listing audio sources:\", error);\n        });\n    };\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        listAudioSources();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(audioSources);\n    }, [\n        audioSources\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Audio Sources:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"audio-controls flex gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: audioSource.label\n                            }, void 0, false, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBMUZ1QnRELGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKCkge1xuICBjb25zdCBbYXVkaW9Tb3VyY2VzLCBzZXRBdWRpb1NvdXJjZXNdID0gdXNlU3RhdGU8TWVkaWFEZXZpY2VJbmZvW10+KFtdKTtcblxuICBsZXQgbWVkaWFSZWNvcmRlcjogTWVkaWFSZWNvcmRlcjtcblxuICBjb25zdCBsaXN0QXVkaW9Tb3VyY2VzID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgIC50aGVuKChkZXZpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1ZGlvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKFxuICAgICAgICAgIChkZXZpY2UpID0+IGRldmljZS5raW5kID09PSBcImF1ZGlvaW5wdXRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coYXVkaW9EZXZpY2VzKVxuICAgICAgICBzZXRBdWRpb1NvdXJjZXMoYXVkaW9EZXZpY2VzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsaXN0aW5nIGF1ZGlvIHNvdXJjZXM6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKGRldmljZUlkOiBzdHJpbmcpID0+IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHsgZGV2aWNlSWQ6IGRldmljZUlkIH0gfSlcbiAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmtzOiBCbG9iUGFydFtdID0gW107XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjaHVua3MucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXVkaW9CbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICAgICAgY29uc3QgYXVkaW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICAgICAgZG93bmxvYWRBdWRpbyhhdWRpb1VybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RhcnRlZCBmb3IgZGV2aWNlOlwiLCBkZXZpY2VJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgcmVjb3JkaW5nOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09IFwiaW5hY3RpdmVcIikge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGluZyBzdG9wcGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgYW5jaG9yLmRvd25sb2FkID0gXCJyZWNvcmRlZF9hdWRpby53YXZcIjtcbiAgICBhbmNob3IuY2xpY2soKTtcbiAgICBhbmNob3IucmVtb3ZlKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0QXVkaW9Tb3VyY2VzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGF1ZGlvU291cmNlcyk7XG4gIH0sIFthdWRpb1NvdXJjZXNdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkF1ZGlvIFJlY29yZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0yXCI+PC9kaXY+XG4gICAgICA8aDI+QXVkaW8gU291cmNlczo8L2gyPlxuICAgICAge2F1ZGlvU291cmNlcy5tYXAoKGF1ZGlvU291cmNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImF1ZGlvLXNvdXJjZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW8tY29udHJvbHMgZmxleCBnYXAteC0yXCI+XG4gICAgICAgICAgICA8c3Bhbj57YXVkaW9Tb3VyY2UubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdGFydFJlY29yZGluZyhhdWRpb1NvdXJjZS5kZXZpY2VJZCl9PlxuICAgICAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9PlN0b3A8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXVkaW9SZWNvcmRlciIsImF1ZGlvU291cmNlcyIsInNldEF1ZGlvU291cmNlcyIsIm1lZGlhUmVjb3JkZXIiLCJsaXN0QXVkaW9Tb3VyY2VzIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsInRoZW4iLCJkZXZpY2VzIiwiYXVkaW9EZXZpY2VzIiwiZmlsdGVyIiwiZGV2aWNlIiwia2luZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic3RhcnRSZWNvcmRpbmciLCJkZXZpY2VJZCIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwic3RyZWFtIiwiY2h1bmtzIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInB1c2giLCJkYXRhIiwiYXVkaW9CbG9iIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkQXVkaW8iLCJzdGFydCIsInN0b3BSZWNvcmRpbmciLCJzdGF0ZSIsInN0b3AiLCJ1cmwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJhdWRpb1NvdXJjZSIsImluZGV4Iiwic3BhbiIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});