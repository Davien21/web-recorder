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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioRecorder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AudioRecorder() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), audioSources = ref[0], setAudioSources = ref[1];\n    var mediaRecorder;\n    var startRecording = function(deviceId) {\n        navigator.mediaDevices.getUserMedia({\n            audio: {\n                deviceId: deviceId\n            }\n        }).then(function(stream) {\n            var chunks = [];\n            mediaRecorder = new MediaRecorder(stream);\n            mediaRecorder.addEventListener(\"dataavailable\", function(event) {\n                chunks.push(event.data);\n            });\n            mediaRecorder.addEventListener(\"stop\", function() {\n                var audioBlob = new Blob(chunks, {\n                    type: \"audio/wav\"\n                });\n                var audioUrl = URL.createObjectURL(audioBlob);\n                downloadAudio(audioUrl);\n            });\n            mediaRecorder.start();\n            console.log(\"Recording started for device:\", deviceId);\n        }).catch(function(error) {\n            console.error(\"Error starting recording:\", error);\n        });\n    };\n    var stopRecording = function() {\n        if (mediaRecorder && mediaRecorder.state !== \"inactive\") {\n            mediaRecorder.stop();\n            console.log(\"Recording stopped\");\n        }\n    };\n    var downloadAudio = function(url) {\n        var anchor = document.createElement(\"a\");\n        anchor.href = url;\n        anchor.download = \"recorded_audio.wav\";\n        anchor.click();\n        anchor.remove();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        navigator.mediaDevices.getUserMedia({\n            audio: true\n        }).then(function() {\n            // Permission granted, we can now call enumerateDevices\n            navigator.mediaDevices.enumerateDevices().then(function(devices) {\n                var audioDevices = devices.filter(function(device) {\n                    return device.kind.includes(\"audio\");\n                });\n                console.log(audioDevices);\n                setAudioSources(audioDevices);\n            }).catch(function(error) {\n                console.error(\"Error listing audio sources:\", error);\n            });\n        }).catch(function(error) {\n            console.error(\"Error requesting audio permission:\", error);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n    // console.log(audioSources);\n    }, [\n        audioSources\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Audio Recorder\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-x-2\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-4\",\n                children: \"Available Sources:\"\n            }, void 0, false, {\n                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            audioSources.map(function(audioSource, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"audio-source mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"col-span-4 opacity-60\",\n                                children: audioSource.label\n                            }, void 0, false, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-2 flex gap-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: function() {\n                                            return startRecording(audioSource.deviceId);\n                                        },\n                                        children: \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        form: \"secondary\",\n                                        onClick: stopRecording,\n                                        children: \"Stop\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chidiebereekennia/Documents/projects/work/jon/recorder/pages/index.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n};\n_s(AudioRecorder, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = AudioRecorder;\nvar _c;\n$RefreshReg$(_c, \"AudioRecorder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzRELElBQUksRUFBQyxXQUFXO3dDQUFDQyxPQUFPLEVBQUU7bURBQU10RCxjQUFjLENBQUNpRCxXQUFXLENBQUNoRCxRQUFRLENBQUM7eUNBQUE7a0RBQUUsT0FFOUU7Ozs7OzZDQUFTO2tEQUNULDhEQUFDUiw4Q0FBTTt3Q0FBQzRELElBQUksRUFBQyxXQUFXO3dDQUFDQyxPQUFPLEVBQUU1QixhQUFhO2tEQUFFLE1BQUk7Ozs7OzZDQUFTOzs7Ozs7cUNBQzFEOzs7Ozs7NkJBQ0Y7bUJBVEV3QixLQUFLOzs7O3lCQVVUO2FBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBNUZ1QnRELGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKCkge1xuICBjb25zdCBbYXVkaW9Tb3VyY2VzLCBzZXRBdWRpb1NvdXJjZXNdID0gdXNlU3RhdGU8TWVkaWFEZXZpY2VJbmZvW10+KFtdKTtcblxuICBsZXQgbWVkaWFSZWNvcmRlcjogTWVkaWFSZWNvcmRlcjtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IChkZXZpY2VJZDogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB7IGRldmljZUlkOiBkZXZpY2VJZCB9IH0pXG4gICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNodW5rczogQmxvYlBhcnRbXSA9IFtdO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFhdmFpbGFibGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3BcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGNodW5rcywgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pO1xuICAgICAgICAgIGNvbnN0IGF1ZGlvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpO1xuICAgICAgICAgIGRvd25sb2FkQXVkaW8oYXVkaW9VcmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkaW5nIHN0YXJ0ZWQgZm9yIGRldmljZTpcIiwgZGV2aWNlSWQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHJlY29yZGluZzpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlICE9PSBcImluYWN0aXZlXCIpIHtcbiAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRpbmcgc3RvcHBlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWRBdWRpbyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IFwicmVjb3JkZWRfYXVkaW8ud2F2XCI7XG4gICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgYW5jaG9yLnJlbW92ZSgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBQZXJtaXNzaW9uIGdyYW50ZWQsIHdlIGNhbiBub3cgY2FsbCBlbnVtZXJhdGVEZXZpY2VzXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgICAgICAuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgLnRoZW4oKGRldmljZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvRGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgICAgICAgIGRldmljZS5raW5kLmluY2x1ZGVzKFwiYXVkaW9cIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdWRpb0RldmljZXMpO1xuICAgICAgICAgICAgc2V0QXVkaW9Tb3VyY2VzKGF1ZGlvRGV2aWNlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbGlzdGluZyBhdWRpbyBzb3VyY2VzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBhdWRpbyBwZXJtaXNzaW9uOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYXVkaW9Tb3VyY2VzKTtcbiAgfSwgW2F1ZGlvU291cmNlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkF1ZGlvIFJlY29yZGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC0yXCI+PC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPkF2YWlsYWJsZSBTb3VyY2VzOjwvaDI+XG4gICAgICB7YXVkaW9Tb3VyY2VzLm1hcCgoYXVkaW9Tb3VyY2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYXVkaW8tc291cmNlIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBvcGFjaXR5LTYwXCI+e2F1ZGlvU291cmNlLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBmb3JtPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc3RhcnRSZWNvcmRpbmcoYXVkaW9Tb3VyY2UuZGV2aWNlSWQpfT5cbiAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBmb3JtPVwic2Vjb25kYXJ5XCIgb25DbGljaz17c3RvcFJlY29yZGluZ30+U3RvcDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdWRpb1JlY29yZGVyIiwiYXVkaW9Tb3VyY2VzIiwic2V0QXVkaW9Tb3VyY2VzIiwibWVkaWFSZWNvcmRlciIsInN0YXJ0UmVjb3JkaW5nIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJjaHVua3MiLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHVzaCIsImRhdGEiLCJhdWRpb0Jsb2IiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRBdWRpbyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJzdG9wIiwidXJsIiwiYW5jaG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJyZW1vdmUiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsImF1ZGlvRGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImtpbmQiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJhdWRpb1NvdXJjZSIsImluZGV4Iiwic3BhbiIsImxhYmVsIiwiZm9ybSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});