"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const HelloWorld = () => {
    return (0, jsx_runtime_1.jsx)("div", { children: "Hello World" }, void 0);
};
exports.HelloWorld = HelloWorld;
const AllTheProviders = ({ children }) => {
    // overwriting console.error console does not gets poluted with all the errors
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.console.error = () => { };
    return (0, jsx_runtime_1.jsx)("div", { children: children }, void 0);
};
const customRender = (ui, options) => (0, react_1.render)(ui, { wrapper: AllTheProviders, ...options });
exports.render = customRender;
__exportStar(require("@testing-library/react"), exports);
