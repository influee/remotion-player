"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeOnIcon = exports.VolumeOffIcon = exports.FullscreenIcon = exports.PauseIcon = exports.PlayIcon = exports.ICON_SIZE = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
exports.ICON_SIZE = 25;
const fullscreenIconSize = 16;
const rotate = {
    transform: `rotate(90deg)`,
};
const PlayIcon = () => {
    return ((0, jsx_runtime_1.jsx)("svg", { width: exports.ICON_SIZE, height: exports.ICON_SIZE, viewBox: "-100 -100 400 400", style: rotate, children: (0, jsx_runtime_1.jsx)("path", { fill: "#fff", stroke: "#fff", strokeWidth: "100", strokeLinejoin: "round", d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z" }, void 0) }, void 0));
};
exports.PlayIcon = PlayIcon;
const PauseIcon = () => {
    return ((0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 100 100", width: exports.ICON_SIZE, height: exports.ICON_SIZE, children: [(0, jsx_runtime_1.jsx)("rect", { x: "25", y: "20", width: "20", height: "60", fill: "#fff", ry: "5", rx: "5" }, void 0), (0, jsx_runtime_1.jsx)("rect", { x: "55", y: "20", width: "20", height: "60", fill: "#fff", ry: "5", rx: "5" }, void 0)] }, void 0));
};
exports.PauseIcon = PauseIcon;
const FullscreenIcon = ({ minimized }) => {
    const strokeWidth = 6;
    const viewSize = 32;
    const out = minimized ? strokeWidth / 2 : 0;
    const middleInset = minimized ? strokeWidth / 2 : strokeWidth * 1.6;
    const inset = minimized ? strokeWidth * 2 : strokeWidth * 1.6;
    return ((0, jsx_runtime_1.jsxs)("svg", { viewBox: `0 0 ${viewSize} ${viewSize}`, height: fullscreenIconSize, width: fullscreenIconSize, children: [(0, jsx_runtime_1.jsx)("path", { d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`, stroke: "#fff", strokeWidth: strokeWidth, fill: "none" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`, stroke: "#fff", strokeWidth: strokeWidth, fill: "none" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`, stroke: "#fff", strokeWidth: strokeWidth, fill: "none" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`, stroke: "#fff", strokeWidth: strokeWidth, fill: "none" }, void 0)] }, void 0));
};
exports.FullscreenIcon = FullscreenIcon;
const VolumeOffIcon = () => {
    return ((0, jsx_runtime_1.jsx)("svg", { width: exports.ICON_SIZE, height: exports.ICON_SIZE, viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z", fill: "#fff" }, void 0) }, void 0));
};
exports.VolumeOffIcon = VolumeOffIcon;
const VolumeOnIcon = () => {
    return ((0, jsx_runtime_1.jsx)("svg", { width: exports.ICON_SIZE, height: exports.ICON_SIZE, viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z", fill: "#fff" }, void 0) }, void 0));
};
exports.VolumeOnIcon = VolumeOnIcon;
