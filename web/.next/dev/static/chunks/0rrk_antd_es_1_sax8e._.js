(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchScreen",
    ()=>matchScreen,
    "responsiveArray",
    ()=>responsiveArray,
    "responsiveArrayReversed",
    ()=>responsiveArrayReversed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
;
const responsiveArray = [
    'xxxl',
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const responsiveArrayReversed = [].concat(responsiveArray).reverse();
const getResponsiveMap = (token)=>({
        xs: `(max-width: ${token.screenXSMax}px)`,
        sm: `(min-width: ${token.screenSM}px)`,
        md: `(min-width: ${token.screenMD}px)`,
        lg: `(min-width: ${token.screenLG}px)`,
        xl: `(min-width: ${token.screenXL}px)`,
        xxl: `(min-width: ${token.screenXXL}px)`,
        xxxl: `(min-width: ${token.screenXXXL}px)`
    });
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */ const validateBreakpoints = (token)=>{
    const indexableToken = token;
    const revBreakpoints = [].concat(responsiveArray).reverse();
    revBreakpoints.forEach((breakpoint, i)=>{
        const breakpointUpper = breakpoint.toUpperCase();
        const screenMin = `screen${breakpointUpper}Min`;
        const screen = `screen${breakpointUpper}`;
        if (!(indexableToken[screenMin] <= indexableToken[screen])) {
            throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
        }
        if (i < revBreakpoints.length - 1) {
            const screenMax = `screen${breakpointUpper}Max`;
            if (!(indexableToken[screen] <= indexableToken[screenMax])) {
                throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
            }
            const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
            const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
            if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
                throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
            }
        }
    });
    return token;
};
const matchScreen = (screens, screenSizes)=>{
    if (!screenSizes) {
        return;
    }
    for (const breakpoint of responsiveArray){
        if (screens[breakpoint] && screenSizes?.[breakpoint] !== undefined) {
            return screenSizes[breakpoint];
        }
    }
};
const useResponsiveObserver = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useResponsiveObserver.useMemo": ()=>{
            const subscribers = new Map();
            let subUid = -1;
            let screens = {};
            return {
                responsiveMap,
                matchHandlers: {},
                dispatch (pointMap) {
                    screens = pointMap;
                    subscribers.forEach({
                        "useResponsiveObserver.useMemo": (func)=>{
                            func(screens);
                        }
                    }["useResponsiveObserver.useMemo"]);
                    return subscribers.size >= 1;
                },
                subscribe (func) {
                    if (!subscribers.size) {
                        this.register();
                    }
                    subUid += 1;
                    subscribers.set(subUid, func);
                    func(screens);
                    return subUid;
                },
                unsubscribe (paramToken) {
                    subscribers.delete(paramToken);
                    if (!subscribers.size) {
                        this.unregister();
                    }
                },
                register () {
                    Object.entries(responsiveMap).forEach({
                        "useResponsiveObserver.useMemo": ([screen, mediaQuery])=>{
                            const listener = {
                                "useResponsiveObserver.useMemo.listener": ({ matches })=>{
                                    this.dispatch({
                                        ...screens,
                                        [screen]: matches
                                    });
                                }
                            }["useResponsiveObserver.useMemo.listener"];
                            const mql = window.matchMedia(mediaQuery);
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(mql.addEventListener)) {
                                mql.addEventListener('change', listener);
                            }
                            this.matchHandlers[mediaQuery] = {
                                mql,
                                listener
                            };
                            listener(mql);
                        }
                    }["useResponsiveObserver.useMemo"]);
                },
                unregister () {
                    Object.values(responsiveMap).forEach({
                        "useResponsiveObserver.useMemo": (mediaQuery)=>{
                            const handler = this.matchHandlers[mediaQuery];
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(handler?.mql.removeEventListener)) {
                                handler.mql.removeEventListener('change', handler?.listener);
                            }
                        }
                    }["useResponsiveObserver.useMemo"]);
                    subscribers.clear();
                }
            };
        }
    }["useResponsiveObserver.useMemo"], [
        responsiveMap
    ]);
};
const __TURBOPACK__default__export__ = useResponsiveObserver;
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useForceUpdate = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useReducer({
        "useForceUpdate.useReducer": (ori)=>ori + 1
    }["useForceUpdate.useReducer"], 0);
};
}),
"[project]/apps/web/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function useBreakpoint(refreshOnChange = true, defaultScreens = {}) {
    const screensRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(defaultScreens);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const responsiveObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "useBreakpoint.useLayoutEffect": ()=>{
            const token = responsiveObserver.subscribe({
                "useBreakpoint.useLayoutEffect.token": (supportScreens)=>{
                    screensRef.current = supportScreens;
                    if (refreshOnChange) {
                        forceUpdate();
                    }
                }
            }["useBreakpoint.useLayoutEffect.token"]);
            return ({
                "useBreakpoint.useLayoutEffect": ()=>responsiveObserver.unsubscribe(token)
            })["useBreakpoint.useLayoutEffect"];
        }
    }["useBreakpoint.useLayoutEffect"], [
        refreshOnChange
    ]);
    return screensRef.current;
}
const __TURBOPACK__default__export__ = useBreakpoint;
}),
"[project]/apps/web/node_modules/antd/es/avatar/AvatarContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AvatarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = AvatarContext;
}),
"[project]/apps/web/node_modules/antd/es/avatar/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
const genBaseStyle = (token)=>{
    const { antCls, componentCls, iconCls, avatarBg, avatarColor, containerSize, containerSizeLG, containerSizeSM, textFontSize, textFontSizeLG, textFontSizeSM, iconFontSize, iconFontSizeLG, iconFontSizeSM, borderRadius, borderRadiusLG, borderRadiusSM, lineWidth, lineType } = token;
    // Avatar size style
    const avatarSizeStyle = (size, fontSize, iconFontSize, radius)=>({
            width: size,
            height: size,
            borderRadius: '50%',
            fontSize,
            [`&${componentCls}-square`]: {
                borderRadius: radius
            },
            [`&${componentCls}-icon`]: {
                fontSize: iconFontSize,
                [`> ${iconCls}`]: {
                    margin: 0
                }
            }
        });
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            color: avatarColor,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            verticalAlign: 'middle',
            background: avatarBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} transparent`,
            '&-image': {
                background: 'transparent'
            },
            [`${antCls}-image-img`]: {
                display: 'block'
            },
            ...avatarSizeStyle(containerSize, textFontSize, iconFontSize, borderRadius),
            '&-lg': {
                ...avatarSizeStyle(containerSizeLG, textFontSizeLG, iconFontSizeLG, borderRadiusLG)
            },
            '&-sm': {
                ...avatarSizeStyle(containerSizeSM, textFontSizeSM, iconFontSizeSM, borderRadiusSM)
            },
            '> img': {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        }
    };
};
const genGroupStyle = (token)=>{
    const { componentCls, groupBorderColor, groupOverlapping, groupSpace } = token;
    return {
        [`${componentCls}-group`]: {
            display: 'inline-flex',
            [componentCls]: {
                borderColor: groupBorderColor
            },
            '> *:not(:first-child)': {
                marginInlineStart: groupOverlapping
            }
        },
        [`${componentCls}-group-popover`]: {
            [`${componentCls} + ${componentCls}`]: {
                marginInlineStart: groupSpace
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { controlHeight, controlHeightLG, controlHeightSM, fontSize, fontSizeLG, fontSizeXL, fontSizeHeading3, marginXS, marginXXS, colorBorderBg } = token;
    return {
        containerSize: controlHeight,
        containerSizeLG: controlHeightLG,
        containerSizeSM: controlHeightSM,
        textFontSize: fontSize,
        textFontSizeLG: fontSize,
        textFontSizeSM: fontSize,
        iconFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
        iconFontSizeLG: fontSizeHeading3,
        iconFontSizeSM: fontSize,
        groupSpace: marginXXS,
        groupOverlapping: -marginXS,
        groupBorderColor: colorBorderBg
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Avatar', (token)=>{
    const { colorTextLightSolid, colorTextPlaceholder } = token;
    const avatarToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        avatarBg: colorTextPlaceholder,
        avatarColor: colorTextLightSolid
    });
    return [
        genBaseStyle(avatarToken),
        genGroupStyle(avatarToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/avatar/Avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/AvatarContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, shape, size: customSize, src, srcSet, icon, className, rootClassName, style, alt, draggable, children, crossOrigin, gap = 4, onError, ...others } = props;
    const [scale, setScale] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](1);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isImgExist, setIsImgExist] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const avatarNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const avatarChildrenRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const avatarNodeMergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, avatarNodeRef);
    const { getPrefixCls, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('avatar');
    const avatarCtx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const setScaleParam = ()=>{
        if (!avatarChildrenRef.current || !avatarNodeRef.current) {
            return;
        }
        const childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
        const nodeWidth = avatarNodeRef.current.offsetWidth;
        // denominator is 0 is no meaning
        if (childrenWidth !== 0 && nodeWidth !== 0) {
            if (gap * 2 < nodeWidth) {
                setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Avatar.useEffect": ()=>{
            setMounted(true);
        }
    }["Avatar.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Avatar.useEffect": ()=>{
            setIsImgExist(true);
            setScale(1);
        }
    }["Avatar.useEffect"], [
        src
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](setScaleParam, [
        gap
    ]);
    const handleImgLoadError = ()=>{
        const errorFlag = onError?.();
        if (errorFlag !== false) {
            setIsImgExist(false);
        }
    };
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Avatar.useSize[size]": (ctxSize)=>customSize ?? avatarCtx?.size ?? ctxSize ?? 'medium'
    }["Avatar.useSize[size]"]);
    const needResponsive = Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(size) ? size || {} : {}).some((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].includes(key));
    const screens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(needResponsive);
    const responsiveSizeStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Avatar.useMemo[responsiveSizeStyle]": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(size)) {
                return {};
            }
            const currentBreakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].find({
                "Avatar.useMemo[responsiveSizeStyle].currentBreakpoint": (screen)=>screens[screen]
            }["Avatar.useMemo[responsiveSizeStyle].currentBreakpoint"]);
            const currentSize = size[currentBreakpoint];
            return currentSize ? {
                width: currentSize,
                height: currentSize,
                fontSize: currentSize && (icon || children) ? currentSize / 2 : 18
            } : {};
        }
    }["Avatar.useMemo[responsiveSizeStyle]"], [
        screens,
        size,
        icon,
        children
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Avatar');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : "TURBOPACK unreachable";
    }
    const prefixCls = getPrefixCls('avatar', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const sizeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small'
    });
    const hasImageElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](src);
    const mergedShape = shape || avatarCtx?.shape || 'circle';
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, sizeCls, contextClassName, `${prefixCls}-${mergedShape}`, {
        [`${prefixCls}-image`]: hasImageElement || src && isImgExist,
        [`${prefixCls}-icon`]: !!icon
    }, cssVarCls, rootCls, className, rootClassName, hashId);
    const sizeStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size) ? {
        width: size,
        height: size,
        fontSize: icon ? size / 2 : 18
    } : {};
    let childrenToRender;
    if (typeof src === 'string' && isImgExist) {
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("img", {
            src: src,
            draggable: draggable,
            srcSet: srcSet,
            onError: handleImgLoadError,
            alt: alt,
            crossOrigin: crossOrigin
        });
    } else if (hasImageElement) {
        childrenToRender = src;
    } else if (icon) {
        childrenToRender = icon;
    } else if (mounted || scale !== 1) {
        const transformString = `scale(${scale})`;
        const childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
        };
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            onResize: setScaleParam
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-string`,
            ref: avatarChildrenRef,
            style: childrenStyle
        }, children));
    } else {
        childrenToRender = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-string`,
            style: {
                opacity: 0
            },
            ref: avatarChildrenRef
        }, children);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...others,
        style: {
            ...sizeStyle,
            ...responsiveSizeStyle,
            ...contextStyle,
            ...style
        },
        className: classString,
        ref: avatarNodeMergedRef
    }, childrenToRender);
});
if ("TURBOPACK compile-time truthy", 1) {
    Avatar.displayName = 'Avatar';
}
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/apps/web/node_modules/antd/es/_util/getRenderPropValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRenderPropValue",
    ()=>getRenderPropValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
const getRenderPropValue = (propValue)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(propValue)) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(propValue) ? propValue() : propValue;
};
}),
"[project]/apps/web/node_modules/antd/es/popover/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
;
;
;
;
;
const FALL_BACK_ORIGIN = '50%';
const genBaseStyle = (token)=>{
    const { componentCls, popoverColor, titleMinWidth, fontWeightStrong, innerPadding, dropShadowPopover, colorTextHeading, borderRadiusLG, zIndexPopup, titleMarginBottom, colorBgElevated, popoverBg, titleBorderBottom, innerContentPadding, titlePadding, antCls } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    return [
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'absolute',
                top: 0,
                // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
                left: {
                    _skip_check_: true,
                    value: 0
                },
                zIndex: zIndexPopup,
                fontWeight: 'normal',
                whiteSpace: 'normal',
                textAlign: 'start',
                cursor: 'auto',
                userSelect: 'text',
                filter: dropShadowPopover,
                // When use `autoArrow`, origin will follow the arrow position
                [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
                transformOrigin: [
                    varRef('valid-offset-x', FALL_BACK_ORIGIN),
                    `var(--arrow-y, ${FALL_BACK_ORIGIN})`
                ].join(' '),
                [varName('arrow-background-color')]: colorBgElevated,
                width: 'max-content',
                maxWidth: '100vw',
                '&-rtl': {
                    direction: 'rtl'
                },
                '&-hidden': {
                    display: 'none'
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                },
                [`${componentCls}-container`]: {
                    backgroundColor: popoverBg,
                    backgroundClip: 'padding-box',
                    borderRadius: borderRadiusLG,
                    padding: innerPadding
                },
                [`${componentCls}-title`]: {
                    minWidth: titleMinWidth,
                    marginBottom: titleMarginBottom,
                    color: colorTextHeading,
                    fontWeight: fontWeightStrong,
                    borderBottom: titleBorderBottom,
                    padding: titlePadding
                },
                [`${componentCls}-content`]: {
                    color: popoverColor,
                    padding: innerContentPadding
                }
            }
        },
        // Arrow Style
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, varRef('arrow-background-color'), {
            arrowShadow: false
        }),
        // Pure Render
        {
            [`${componentCls}-pure`]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow,
                display: 'inline-block'
            }
        }
    ];
};
const genColorStyle = (token)=>{
    const { componentCls, antCls } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    return {
        [componentCls]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].map((colorKey)=>{
            const lightColor = token[`${colorKey}6`];
            return {
                [`&${componentCls}-${colorKey}`]: {
                    [varName('arrow-background-color')]: lightColor,
                    [`${componentCls}-inner`]: {
                        backgroundColor: lightColor
                    },
                    [`${componentCls}-arrow`]: {
                        background: 'transparent'
                    }
                }
            };
        })
    };
};
const prepareComponentToken = (token)=>{
    const { lineWidth, controlHeight, fontHeight, padding, wireframe, zIndexPopupBase, borderRadiusLG, marginXS, lineType, colorSplit, paddingSM } = token;
    const titlePaddingBlockDist = controlHeight - fontHeight;
    const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
    const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
    const popoverPaddingHorizontal = padding;
    return {
        titleMinWidth: 177,
        zIndexPopup: zIndexPopupBase + 30,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowToken"])(token),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: borderRadiusLG,
            limitVerticalRadius: true
        }),
        // internal
        innerPadding: wireframe ? 0 : 12,
        titleMarginBottom: wireframe ? 0 : marginXS,
        titlePadding: wireframe ? `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px` : 0,
        titleBorderBottom: wireframe ? `${lineWidth}px ${lineType} ${colorSplit}` : 'none',
        innerContentPadding: wireframe ? `${paddingSM}px ${popoverPaddingHorizontal}px` : 0
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Popover', (token)=>{
    const { colorBgElevated, colorText } = token;
    const popoverToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        popoverBg: colorBgElevated,
        popoverColor: colorText
    });
    return [
        genBaseStyle(popoverToken),
        genColorStyle(popoverToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(popoverToken, 'zoom-big')
    ];
}, prepareComponentToken, {
    resetStyle: false,
    deprecatedTokens: [
        [
            'width',
            'titleMinWidth'
        ],
        [
            'minWidth',
            'titleMinWidth'
        ]
    ]
});
}),
"[project]/apps/web/node_modules/antd/es/popover/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>Overlay,
    "RawPurePanel",
    ()=>RawPurePanel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tooltip/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tooltip/es/Popup.js [app-client] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/getRenderPropValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Overlay = (props)=>{
    const { title, content, prefixCls, classNames, styles } = props;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(title) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(content)) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(title) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-title`, classNames?.title),
        style: styles?.title
    }, title), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(content) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content`, classNames?.content),
        style: styles?.content
    }, content));
};
const RawPurePanel = (props)=>{
    const { hashId, prefixCls, className, style, placement = 'top', title, content, children, classNames, styles } = props;
    const titleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderPropValue"])(title);
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderPropValue"])(content);
    const mergedProps = {
        ...props,
        placement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        styles
    ], {
        props: mergedProps
    });
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: rootClassName,
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], {
        ...props,
        className: hashId,
        prefixCls: prefixCls,
        classNames: mergedClassNames,
        styles: mergedStyles
    }, children || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Overlay, {
        prefixCls: prefixCls,
        title: titleNode,
        content: contentNode,
        classNames: mergedClassNames,
        styles: mergedStyles
    })));
};
const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](RawPurePanel, {
        ...restProps,
        prefixCls: prefixCls,
        hashId: hashId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, cssVarCls)
    });
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/getRenderPropValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/PurePanel.js [app-client] (ecmascript)");
// CSSINJS
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const InternalPopover = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, title, content, overlayClassName, placement = 'top', trigger, children, mouseEnterDelay, mouseLeaveDelay, onOpenChange, overlayStyle = {}, styles, classNames, motion, arrow: popoverArrow, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, arrow: contextArrow, trigger: contextTrigger, mouseEnterDelay: contextMouseEnterDelay, mouseLeaveDelay: contextMouseLeaveDelay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('popover');
    const mergedMouseEnterDelay = mouseEnterDelay ?? contextMouseEnterDelay ?? 0.1;
    const mergedMouseLeaveDelay = mouseLeaveDelay ?? contextMouseLeaveDelay ?? 0.1;
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const rootPrefixCls = getPrefixCls();
    const mergedArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popoverArrow, contextArrow);
    const mergedTrigger = trigger || contextTrigger || 'hover';
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Popover');
        ("TURBOPACK compile-time truthy", 1) ? warning(!onOpenChange || onOpenChange.length <= 1, 'usage', 'The second `onOpenChange` parameter is internal and unsupported. Please lock to a previous version if needed.') : "TURBOPACK unreachable";
    }
    // ============================= Styles =============================
    const mergedProps = {
        ...props,
        placement,
        trigger: mergedTrigger,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        overlayStyle,
        styles,
        classNames
    };
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const overlayStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(overlayStyle);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        overlayStyleRoot
    ], {
        props: mergedProps
    });
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, hashId, cssVarCls, contextClassName, mergedClassNames.root);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(props.defaultOpen ?? false, props.open);
    const settingOpen = (value)=>{
        setOpen(value);
        onOpenChange?.(value);
    };
    const titleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderPropValue"])(title);
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getRenderPropValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderPropValue"])(content);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        unique: false,
        arrow: mergedArrow,
        placement: placement,
        trigger: mergedTrigger,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        ...restProps,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            container: mergedClassNames.container,
            arrow: mergedClassNames.arrow
        },
        styles: {
            root: mergedStyles.root,
            container: mergedStyles.container,
            arrow: mergedStyles.arrow
        },
        ref: ref,
        open: open,
        onOpenChange: settingOpen,
        overlay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(titleNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(contentNode) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            prefixCls: prefixCls,
            title: titleNode,
            content: contentNode,
            classNames: mergedClassNames,
            styles: mergedStyles
        }) : null,
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big', typeof motion?.motionName === 'string' ? motion?.motionName : undefined)
        },
        "data-popover-inject": true
    }, children);
});
const Popover = InternalPopover;
Popover._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Popover.displayName = 'Popover';
}
const __TURBOPACK__default__export__ = Popover;
}),
"[project]/apps/web/node_modules/antd/es/avatar/AvatarGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/AvatarContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const AvatarContextProvider = (props)=>{
    const { size, shape } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const avatarContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "AvatarContextProvider.useMemo[avatarContextValue]": ()=>({
                size: props.size || size,
                shape: props.shape || shape
            })
    }["AvatarContextProvider.useMemo[avatarContextValue]"], [
        props.size,
        props.shape,
        size,
        shape
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: avatarContextValue
    }, props.children);
};
const AvatarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, rootClassName, style, maxCount, maxStyle, size, shape, maxPopoverPlacement, maxPopoverTrigger, children, max } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Avatar.Group');
        [
            [
                'maxCount',
                'max={{ count: number }}'
            ],
            [
                'maxStyle',
                'max={{ style: CSSProperties }}'
            ],
            [
                'maxPopoverPlacement',
                'max={{ popover: PopoverProps }}'
            ],
            [
                'maxPopoverTrigger',
                'max={{ popover: PopoverProps }}'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const prefixCls = getPrefixCls('avatar', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(groupPrefixCls, {
        [`${groupPrefixCls}-rtl`]: direction === 'rtl'
    }, cssVarCls, rootCls, className, rootClassName, hashId);
    const childrenWithProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map((child, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            // eslint-disable-next-line react/no-array-index-key
            key: `avatar-key-${index}`
        }));
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "AvatarGroup.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["AvatarGroup.useImperativeHandle"]);
    const mergeCount = max?.count || maxCount;
    const numOfChildren = childrenWithProps.length;
    if (mergeCount && mergeCount < numOfChildren) {
        const childrenShow = childrenWithProps.slice(0, mergeCount);
        const childrenHidden = childrenWithProps.slice(mergeCount, numOfChildren);
        const mergeStyle = max?.style || maxStyle;
        const mergePopoverTrigger = max?.popover?.trigger || maxPopoverTrigger || 'hover';
        const mergePopoverPlacement = max?.popover?.placement || maxPopoverPlacement || 'top';
        const popoverProps = {
            content: childrenHidden,
            ...max?.popover,
            placement: mergePopoverPlacement,
            trigger: mergePopoverTrigger,
            rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-popover`, max?.popover?.rootClassName)
        };
        childrenShow.push(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: "avatar-popover-key",
            destroyOnHidden: true,
            ...popoverProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            style: mergeStyle
        }, `+${numOfChildren - mergeCount}`)));
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AvatarContextProvider, {
            shape: shape,
            size: size
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: nativeElementRef,
            className: cls,
            style: style
        }, childrenShow));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](AvatarContextProvider, {
        shape: shape,
        size: size
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: cls,
        style: style
    }, childrenWithProps));
});
const __TURBOPACK__default__export__ = AvatarGroup;
}),
"[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/AvatarGroup.js [app-client] (ecmascript)");
"use client";
;
;
const Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Avatar.Group = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$AvatarGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/apps/web/node_modules/antd/es/_util/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withPureRenderTheme",
    ()=>withPureRenderTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
function withPureRenderTheme(Component) {
    return (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            theme: {
                token: {
                    motion: false,
                    zIndexPopupBase: 0
                }
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
            ...props
        }));
}
/* istanbul ignore next */ const genPurePanel = (Component, alignPropName, postProps, defaultPrefixCls, getDropdownCls)=>{
    const PurePanel = (props)=>{
        const { prefixCls: customizePrefixCls, style } = props;
        const holderRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
        const [popupHeight, setPopupHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
        const [popupWidth, setPopupWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
        const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(false, props.open);
        const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "genPurePanel.PurePanel.useEffect": ()=>{
                // We do not care about ssr
                setOpen(true);
                if (typeof ResizeObserver !== 'undefined') {
                    const resizeObserver = new ResizeObserver({
                        "genPurePanel.PurePanel.useEffect": (entries)=>{
                            const element = entries[0].target;
                            setPopupHeight(element.offsetHeight + 8);
                            setPopupWidth(element.offsetWidth);
                        }
                    }["genPurePanel.PurePanel.useEffect"]);
                    const interval = setInterval({
                        "genPurePanel.PurePanel.useEffect.interval": ()=>{
                            const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
                            const popup = holderRef.current?.querySelector(dropdownCls);
                            if (popup) {
                                clearInterval(interval);
                                resizeObserver.observe(popup);
                            }
                        }
                    }["genPurePanel.PurePanel.useEffect.interval"], 10);
                    return ({
                        "genPurePanel.PurePanel.useEffect": ()=>{
                            clearInterval(interval);
                            resizeObserver.disconnect();
                        }
                    })["genPurePanel.PurePanel.useEffect"];
                }
            }
        }["genPurePanel.PurePanel.useEffect"], [
            prefixCls
        ]);
        let mergedProps = {
            ...props,
            style: {
                ...style,
                margin: 0
            },
            open,
            getPopupContainer: ()=>holderRef.current
        };
        if (postProps) {
            mergedProps = postProps(mergedProps);
        }
        if (alignPropName) {
            mergedProps = {
                ...mergedProps,
                [alignPropName]: {
                    overflow: {
                        adjustX: false,
                        adjustY: false
                    }
                }
            };
        }
        const mergedStyle = {
            paddingBottom: popupHeight,
            position: 'relative',
            minWidth: popupWidth
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: holderRef,
            style: mergedStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
            ...mergedProps
        }));
    };
    return withPureRenderTheme(PurePanel);
};
const __TURBOPACK__default__export__ = genPurePanel;
}),
"[project]/apps/web/node_modules/antd/es/modal/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dialog$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/dialog/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Panel$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/dialog/es/Dialog/Content/Panel.js [app-client] (ecmascript) <export default as Panel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/ConfirmDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/shared.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, closeIcon, closable, type, title, children, footer, style, classNames, styles, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('modal');
    const rootPrefixCls = getPrefixCls();
    const prefixCls = customizePrefixCls || getPrefixCls('modal');
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const styleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        styleRoot
    ], {
        props
    });
    const confirmPrefixCls = `${prefixCls}-confirm`;
    // Choose target props by confirm mark
    let additionalProps = {};
    if (type) {
        additionalProps = {
            closable: closable ?? false,
            title: '',
            footer: '',
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmContent"], {
                ...props,
                prefixCls: prefixCls,
                confirmPrefixCls: confirmPrefixCls,
                rootPrefixCls: rootPrefixCls,
                content: children
            })
        };
    } else {
        additionalProps = {
            closable: closable ?? true,
            title,
            footer: footer !== null && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                ...props
            }),
            children
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dialog$2f$es$2f$Dialog$2f$Content$2f$Panel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Panel$3e$__["Panel"], {
        prefixCls: prefixCls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, contextClassName, cssVarCls, rootCls, mergedClassNames.root),
        style: mergedStyles.root,
        ...restProps,
        closeIcon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderCloseIcon"])(prefixCls, closeIcon),
        closable: closable,
        classNames: mergedClassNames,
        styles: mergedStyles,
        ...additionalProps
    });
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPureRenderTheme"])(PurePanel);
}),
"[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/confirm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/destroyFns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/useModal/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function modalWarn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withWarn"])(props));
}
const Modal = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Modal.useModal = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Modal.info = function infoFn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withInfo"])(props));
};
Modal.success = function successFn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withSuccess"])(props));
};
Modal.error = function errorFn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withError"])(props));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withConfirm"])(props));
};
Modal.destroyAll = function destroyAllFn() {
    while(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].length){
        const close = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pop();
        if (close) {
            close();
        }
    }
};
Modal.config = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalGlobalConfig"];
Modal._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Modal.displayName = 'Modal';
}
const __TURBOPACK__default__export__ = Modal;
}),
"[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useAllowClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllowClear",
    ()=>useAllowClear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/fallbackProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const useAllowClear = (options)=>{
    const { allowClear, clearIcon, contextAllowClear, contextClearIcon, defaultAllowClear, componentName } = options;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])(componentName);
        warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAllowClear.useMemo": ()=>{
            const mergedAllowClear = allowClear ?? contextAllowClear ?? defaultAllowClear;
            if (!mergedAllowClear) {
                return false;
            }
            return {
                clearIcon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(allowClear) ? allowClear?.clearIcon : clearIcon, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(contextAllowClear) ? contextAllowClear?.clearIcon : contextClearIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)),
                disabled: ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(allowClear) ? allowClear?.disabled : undefined) ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(contextAllowClear) ? contextAllowClear?.disabled : undefined)
            };
        }
    }["useAllowClear.useMemo"], [
        allowClear,
        clearIcon,
        contextAllowClear,
        contextClearIcon,
        defaultAllowClear
    ]);
};
}),
"[project]/apps/web/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMergedStatus",
    ()=>getMergedStatus,
    "getStatusClassNames",
    ()=>getStatusClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const _InputStatuses = [
    'warning',
    'error',
    '',
    'success',
    'validating'
];
const getStatusClassNames = (prefixCls, status, hasFeedback)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-status-success`]: status === 'success',
        [`${prefixCls}-status-warning`]: status === 'warning',
        [`${prefixCls}-status-error`]: status === 'error',
        [`${prefixCls}-status-validating`]: status === 'validating',
        [`${prefixCls}-has-feedback`]: hasFeedback
    });
};
const getMergedStatus = (contextStatus, customStatus)=>customStatus || contextStatus;
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
/**
 * Compatible for legacy `bordered` prop.
 */ const useVariant = (component, variant, legacyBordered, fallbackComponent)=>{
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { variant: configVariant, [component]: componentConfig } = config;
    const ctxVariant = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantContext"]);
    const fallbackComponentConfig = fallbackComponent ? config[fallbackComponent] : undefined;
    const configComponentVariant = componentConfig?.variant ?? fallbackComponentConfig?.variant;
    const isVariantConfigured = typeof variant !== 'undefined' || legacyBordered === false || typeof ctxVariant !== 'undefined' || typeof configComponentVariant !== 'undefined' || typeof configVariant !== 'undefined';
    let mergedVariant;
    if (typeof variant !== 'undefined') {
        mergedVariant = variant;
    } else if (legacyBordered === false) {
        mergedVariant = 'borderless';
    } else {
        // form variant > component global variant > fallback component global variant > global variant
        mergedVariant = ctxVariant ?? configComponentVariant ?? configVariant ?? 'outlined';
    }
    const enableVariantCls = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Variants"].includes(mergedVariant);
    return [
        mergedVariant,
        enableVariantCls,
        isVariantConfigured
    ];
};
const __TURBOPACK__default__export__ = useVariant;
}),
"[project]/apps/web/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initComponentToken",
    ()=>initComponentToken,
    "initInputToken",
    ()=>initInputToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
function initInputToken(token) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        inputAffixPadding: token.paddingXXS
    });
}
const initComponentToken = (token)=>{
    const { controlHeight, fontSize, lineHeight, lineWidth, lineWidthFocus, controlHeightSM, controlHeightLG, fontSizeLG, lineHeightLG, paddingSM, controlPaddingHorizontalSM, controlPaddingHorizontal, colorFillAlter, colorPrimaryHover, colorPrimary, controlOutlineWidth, controlOutline, colorErrorOutline, colorWarningOutline, colorBgContainer, inputFontSize, inputFontSizeLG, inputFontSizeSM } = token;
    const mergedFontSize = inputFontSize || fontSize;
    const mergedFontSizeSM = inputFontSizeSM || mergedFontSize;
    const mergedFontSizeLG = inputFontSizeLG || fontSizeLG;
    const paddingBlock = Math.round((controlHeight - mergedFontSize * lineHeight) / 2 * 10) / 10 - lineWidth;
    const paddingBlockSM = Math.round((controlHeightSM - mergedFontSizeSM * lineHeight) / 2 * 10) / 10 - lineWidth;
    const paddingBlockLG = Math.ceil((controlHeightLG - mergedFontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth;
    const componentToken = {
        lineWidthFocus: lineWidthFocus === 0 ? 0 : lineWidth,
        paddingBlock: Math.max(paddingBlock, 0),
        paddingBlockSM: Math.max(paddingBlockSM, 0),
        paddingBlockLG: Math.max(paddingBlockLG, 0),
        paddingInline: paddingSM - lineWidth,
        paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
        paddingInlineLG: controlPaddingHorizontal - lineWidth,
        addonBg: colorFillAlter,
        activeBorderColor: colorPrimary,
        hoverBorderColor: colorPrimaryHover,
        activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
        errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
        warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
        hoverBg: colorBgContainer,
        activeBg: colorBgContainer,
        inputFontSize: mergedFontSize,
        inputFontSizeLG: mergedFontSizeLG,
        inputFontSizeSM: mergedFontSizeSM
    };
    return componentToken;
};
}),
"[project]/apps/web/node_modules/antd/es/input/style/variants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genBaseOutlinedStyle",
    ()=>genBaseOutlinedStyle,
    "genBaseUnderlinedStyle",
    ()=>genBaseUnderlinedStyle,
    "genBorderlessStyle",
    ()=>genBorderlessStyle,
    "genDisabledStyle",
    ()=>genDisabledStyle,
    "genFilledGroupStyle",
    ()=>genFilledGroupStyle,
    "genFilledStyle",
    ()=>genFilledStyle,
    "genHoverStyle",
    ()=>genHoverStyle,
    "genOutlinedGroupStyle",
    ()=>genOutlinedGroupStyle,
    "genOutlinedStyle",
    ()=>genOutlinedStyle,
    "genUnderlinedStyle",
    ()=>genUnderlinedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
const genHoverStyle = (token)=>({
        borderColor: token.hoverBorderColor,
        backgroundColor: token.hoverBg
    });
const genDisabledStyle = (token)=>({
        color: token.colorTextDisabled,
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorderDisabled,
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1,
        'input[disabled], textarea[disabled]': {
            cursor: 'not-allowed'
        },
        '&:hover:not([disabled])': {
            ...genHoverStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
                hoverBorderColor: token.colorBorderDisabled,
                hoverBg: token.colorBgContainerDisabled
            }))
        }
    });
const genBaseOutlinedStyle = (token, options)=>({
        background: token.colorBgContainer,
        borderWidth: token.lineWidth,
        borderStyle: token.lineType,
        borderColor: options.borderColor,
        '&:hover': {
            borderColor: options.hoverBorderColor,
            backgroundColor: token.hoverBg
        },
        '&:focus, &:focus-within': {
            borderColor: options.activeBorderColor,
            boxShadow: options.activeShadow,
            outline: 0,
            backgroundColor: token.activeBg
        }
    });
const genOutlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
            ...genBaseOutlinedStyle(token, options),
            [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
                color: options.affixColor
            }
        },
        [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
            borderColor: options.borderColor
        }
    });
const genOutlinedStyle = (token, extraStyles)=>({
        '&-outlined': {
            ...genBaseOutlinedStyle(token, {
                borderColor: token.colorBorder,
                hoverBorderColor: token.hoverBorderColor,
                activeBorderColor: token.activeBorderColor,
                activeShadow: token.activeShadow
            }),
            [`&${token.componentCls}-disabled, &[disabled]`]: {
                ...genDisabledStyle(token)
            },
            ...genOutlinedStatusStyle(token, {
                status: 'error',
                borderColor: token.colorError,
                hoverBorderColor: token.colorErrorBorderHover,
                activeBorderColor: token.colorError,
                activeShadow: token.errorActiveShadow,
                affixColor: token.colorErrorAffix
            }),
            ...genOutlinedStatusStyle(token, {
                status: 'warning',
                borderColor: token.colorWarning,
                hoverBorderColor: token.colorWarningBorderHover,
                activeBorderColor: token.colorWarning,
                activeShadow: token.warningActiveShadow,
                affixColor: token.colorWarningAffix
            }),
            ...extraStyles
        }
    });
const genOutlinedGroupStatusStyle = (token, options)=>({
        [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
            [`${token.componentCls}-group-addon`]: {
                borderColor: options.addonBorderColor,
                color: options.addonColor
            }
        }
    });
const genOutlinedGroupStyle = (token)=>({
        '&-outlined': {
            [`${token.componentCls}-group`]: {
                '&-addon': {
                    background: token.addonBg,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
                },
                '&-addon:first-child': {
                    borderInlineEnd: 0
                },
                '&-addon:last-child': {
                    borderInlineStart: 0
                }
            },
            ...genOutlinedGroupStatusStyle(token, {
                status: 'error',
                addonBorderColor: token.colorError,
                addonColor: token.colorErrorText
            }),
            ...genOutlinedGroupStatusStyle(token, {
                status: 'warning',
                addonBorderColor: token.colorWarning,
                addonColor: token.colorWarningText
            }),
            [`&${token.componentCls}-group-wrapper-disabled`]: {
                [`${token.componentCls}-group-addon`]: {
                    ...genDisabledStyle(token)
                }
            }
        }
    });
/* ============ Borderless ============ */ const borderlessFocusVisibleSelector = '&:focus-visible, &:has(input:focus-visible), &:has(textarea:focus-visible)';
const genBorderlessFocusVisibleStyle = (token, outlineColor)=>({
        outline: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus)} ${token.lineType} ${outlineColor}`,
        outlineOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.lineWidth).mul(-1).equal()),
        transition: [
            `outline-offset`,
            `outline`
        ].map((prop)=>`${prop} 0s`).join(', ')
    });
const genBorderlessStatusStyle = (token, options)=>({
        '&, & input, & textarea': {
            color: options.color
        },
        [borderlessFocusVisibleSelector]: genBorderlessFocusVisibleStyle(token, options.color),
        [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
            color: options.affixColor
        }
    });
const genBorderlessStyle = (token, extraStyles)=>{
    const { componentCls } = token;
    return {
        '&-borderless': {
            background: 'transparent',
            border: 'none',
            // Compensate for the removed border to maintain consistent height with other components
            // (e.g. Select borderless) that keep a transparent border.
            paddingBlock: token.calc(token.paddingBlock).add(token.lineWidth).equal(),
            [`&${componentCls}-sm, &${componentCls}-affix-wrapper-sm`]: {
                paddingBlock: token.calc(token.paddingBlockSM).add(token.lineWidth).equal()
            },
            [`&${componentCls}-lg, &${componentCls}-affix-wrapper-lg`]: {
                paddingBlock: token.calc(token.paddingBlockLG).add(token.lineWidth).equal()
            },
            '&:focus, &:focus-within': {
                outline: 'none'
            },
            [borderlessFocusVisibleSelector]: genBorderlessFocusVisibleStyle(token, token.activeBorderColor),
            // >>>>> Disabled
            [`&${componentCls}-disabled, &[disabled]`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            },
            // >>>>> Status
            [`&${componentCls}-status-error`]: genBorderlessStatusStyle(token, {
                color: token.colorError,
                affixColor: token.colorErrorAffix
            }),
            [`&${componentCls}-status-warning`]: genBorderlessStatusStyle(token, {
                color: token.colorWarning,
                affixColor: token.colorWarningAffix
            }),
            ...extraStyles
        }
    };
};
/* ============== Filled ============== */ const genBaseFilledStyle = (token, options)=>({
        background: options.bg,
        borderWidth: token.lineWidth,
        borderStyle: token.lineType,
        borderColor: 'transparent',
        'input&, & input, textarea&, & textarea': {
            color: options?.inputColor ?? 'unset'
        },
        '&:hover': {
            background: options.hoverBg
        },
        '&:focus, &:focus-within': {
            outline: 0,
            borderColor: options.activeBorderColor,
            backgroundColor: token.activeBg
        }
    });
const genFilledStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
            ...genBaseFilledStyle(token, options),
            [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
                color: options.affixColor
            }
        }
    });
const genFilledStyle = (token, extraStyles)=>({
        '&-filled': {
            ...genBaseFilledStyle(token, {
                bg: token.colorFillTertiary,
                hoverBg: token.colorFillSecondary,
                activeBorderColor: token.activeBorderColor,
                inputColor: token.colorText
            }),
            [`&${token.componentCls}-disabled, &[disabled]`]: {
                ...genDisabledStyle(token)
            },
            ...genFilledStatusStyle(token, {
                status: 'error',
                bg: token.colorErrorBg,
                hoverBg: token.colorErrorBgHover,
                activeBorderColor: token.colorError,
                inputColor: token.colorErrorText,
                affixColor: token.colorErrorAffix
            }),
            ...genFilledStatusStyle(token, {
                status: 'warning',
                bg: token.colorWarningBg,
                hoverBg: token.colorWarningBgHover,
                activeBorderColor: token.colorWarning,
                inputColor: token.colorWarningText,
                affixColor: token.colorWarningAffix
            }),
            ...extraStyles
        }
    });
const genFilledGroupStatusStyle = (token, options)=>({
        [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
            [`${token.componentCls}-group-addon`]: {
                background: options.addonBg,
                color: options.addonColor
            }
        }
    });
const genFilledGroupStyle = (token)=>({
        '&-filled': {
            [`${token.componentCls}-group-addon`]: {
                background: token.colorFillTertiary,
                '&:last-child': {
                    position: 'static'
                }
            },
            ...genFilledGroupStatusStyle(token, {
                status: 'error',
                addonBg: token.colorErrorBg,
                addonColor: token.colorErrorText
            }),
            ...genFilledGroupStatusStyle(token, {
                status: 'warning',
                addonBg: token.colorWarningBg,
                addonColor: token.colorWarningText
            }),
            [`&${token.componentCls}-group-wrapper-disabled`]: {
                [`${token.componentCls}-group`]: {
                    '&-addon': {
                        background: token.colorFillTertiary,
                        color: token.colorTextDisabled
                    },
                    '&-addon:first-child': {
                        borderInlineStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                        borderTop: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                        borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
                    },
                    '&-addon:last-child': {
                        borderInlineEnd: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                        borderTop: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                        borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
                    }
                }
            }
        }
    });
const genBaseUnderlinedStyle = (token, options)=>({
        background: token.colorBgContainer,
        borderWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} 0`,
        borderStyle: `${token.lineType} none`,
        borderColor: `transparent transparent ${options.borderColor} transparent`,
        borderRadius: 0,
        '&:hover': {
            borderColor: `transparent transparent ${options.hoverBorderColor} transparent`,
            backgroundColor: token.hoverBg
        },
        '&:focus, &:focus-within': {
            borderColor: `transparent transparent ${options.activeBorderColor} transparent`,
            outline: 0,
            backgroundColor: token.activeBg
        }
    });
const genUnderlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
            ...genBaseUnderlinedStyle(token, options),
            [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
                color: options.affixColor
            }
        },
        [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
            borderColor: `transparent transparent ${options.borderColor} transparent`
        }
    });
const genUnderlinedStyle = (token, extraStyles)=>({
        '&-underlined': {
            ...genBaseUnderlinedStyle(token, {
                borderColor: token.colorBorder,
                hoverBorderColor: token.hoverBorderColor,
                activeBorderColor: token.activeBorderColor,
                activeShadow: token.activeShadow
            }),
            // >>>>> Disabled
            [`&${token.componentCls}-disabled, &[disabled]`]: {
                color: token.colorTextDisabled,
                boxShadow: 'none',
                cursor: 'not-allowed',
                '&:hover': {
                    borderColor: `transparent transparent ${token.colorBorder} transparent`
                }
            },
            'input[disabled], textarea[disabled]': {
                cursor: 'not-allowed'
            },
            ...genUnderlinedStatusStyle(token, {
                status: 'error',
                borderColor: token.colorError,
                hoverBorderColor: token.colorErrorBorderHover,
                activeBorderColor: token.colorError,
                activeShadow: token.errorActiveShadow,
                affixColor: token.colorErrorAffix
            }),
            ...genUnderlinedStatusStyle(token, {
                status: 'warning',
                borderColor: token.colorWarning,
                hoverBorderColor: token.colorWarningBorderHover,
                activeBorderColor: token.colorWarning,
                activeShadow: token.warningActiveShadow,
                affixColor: token.colorWarningAffix
            }),
            ...extraStyles
        }
    });
}),
"[project]/apps/web/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genActiveStyle",
    ()=>genActiveStyle,
    "genAffixStyle",
    ()=>genAffixStyle,
    "genBasicInputStyle",
    ()=>genBasicInputStyle,
    "genInputGroupStyle",
    ()=>genInputGroupStyle,
    "genInputLargeStyle",
    ()=>genInputLargeStyle,
    "genInputSmallStyle",
    ()=>genInputSmallStyle,
    "genInputStyle",
    ()=>genInputStyle,
    "genPlaceholderStyle",
    ()=>genPlaceholderStyle,
    "useSharedStyle",
    ()=>useSharedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/variants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const genPlaceholderStyle = (color)=>({
        // Firefox
        '&::-moz-placeholder': {
            opacity: 1
        },
        '&::placeholder': {
            color,
            userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
        },
        '&:placeholder-shown': {
            textOverflow: 'ellipsis'
        }
    });
const genActiveStyle = (token)=>({
        borderColor: token.activeBorderColor,
        boxShadow: token.activeShadow,
        outline: 0,
        backgroundColor: token.activeBg
    });
const genInputLargeStyle = (token)=>{
    const { paddingBlockLG, lineHeightLG, borderRadiusLG, paddingInlineLG } = token;
    return {
        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlockLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingInlineLG)}`,
        fontSize: token.inputFontSizeLG,
        lineHeight: lineHeightLG,
        borderRadius: borderRadiusLG
    };
};
const genInputSmallStyle = (token)=>({
        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingBlockSM)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInlineSM)}`,
        fontSize: token.inputFontSizeSM,
        borderRadius: token.borderRadiusSM
    });
const genBasicInputStyle = (token, option = {})=>({
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        minWidth: 0,
        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingBlock)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInline)}`,
        color: token.colorText,
        fontSize: token.inputFontSize,
        lineHeight: token.lineHeight,
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationMid}`,
        ...genPlaceholderStyle(token.colorTextPlaceholder),
        // Size
        '&-lg': {
            ...genInputLargeStyle(token),
            ...option.largeStyle
        },
        '&-sm': {
            ...genInputSmallStyle(token),
            ...option.smallStyle
        },
        // RTL
        '&-rtl, &-textarea-rtl': {
            direction: 'rtl'
        }
    });
const genInputGroupStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        position: 'relative',
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        // Undo padding and float of grid classes
        "&[class*='col-']": {
            paddingInlineEnd: token.paddingXS,
            '&:last-child': {
                paddingInlineEnd: 0
            }
        },
        // Sizing options
        [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
            ...genInputLargeStyle(token)
        },
        [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
            ...genInputSmallStyle(token)
        },
        // Fix https://github.com/ant-design/ant-design/issues/5754
        [`&-lg ${antCls}-select-single`]: {
            height: token.controlHeightLG
        },
        [`&-sm ${antCls}-select-single`]: {
            height: token.controlHeightSM
        },
        [`> ${componentCls}`]: {
            display: 'table-cell',
            '&:not(:first-child):not(:last-child)': {
                borderRadius: 0
            }
        },
        [`${componentCls}-group`]: {
            '&-addon, &-wrap': {
                display: 'table-cell',
                width: 1,
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
                '&:not(:first-child):not(:last-child)': {
                    borderRadius: 0
                }
            },
            '&-wrap > *': {
                display: 'block !important'
            },
            '&-addon': {
                position: 'relative',
                padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInline)}`,
                color: token.colorText,
                fontWeight: 'normal',
                fontSize: token.inputFontSize,
                textAlign: 'center',
                borderRadius: token.borderRadius,
                transition: `all ${token.motionDurationSlow}`,
                lineHeight: 1,
                // Reset Select's style in addon
                [`${antCls}-select`]: {
                    margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingInline).mul(-1).equal())}`,
                    [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
                        backgroundColor: 'inherit',
                        border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`,
                        boxShadow: 'none'
                    }
                },
                // https://github.com/ant-design/ant-design/issues/31333
                [`${antCls}-cascader-picker`]: {
                    margin: `-9px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingInline).mul(-1).equal())}`,
                    backgroundColor: 'transparent',
                    [`${antCls}-cascader-input`]: {
                        textAlign: 'start',
                        border: 0,
                        boxShadow: 'none'
                    }
                }
            }
        },
        [componentCls]: {
            width: '100%',
            marginBottom: 0,
            textAlign: 'inherit',
            '&:focus': {
                zIndex: 1,
                // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
                borderInlineEndWidth: 1
            },
            '&:hover': {
                zIndex: 1,
                borderInlineEndWidth: 1
            }
        },
        // Reset rounded corners
        [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            // Reset Select's style in addon
            [`${antCls}-select`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        [`> ${componentCls}-affix-wrapper`]: {
            [`&:not(:first-child) ${componentCls}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            },
            [`&:not(:last-child) ${componentCls}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            // Reset Select's style in addon
            [`${antCls}-select`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        },
        [`${componentCls}-affix-wrapper`]: {
            '&:not(:last-child)': {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            },
            '&:not(:first-child)': {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        },
        [`&${componentCls}-group-compact`]: {
            display: 'block',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
            [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
                '&:not(:first-child):not(:last-child)': {
                    borderInlineEndWidth: token.lineWidth,
                    '&:hover, &:focus': {
                        zIndex: 1
                    }
                }
            },
            '& > *': {
                display: 'inline-flex',
                float: 'none',
                verticalAlign: 'top',
                // https://github.com/ant-design/ant-design-pro/issues/139
                borderRadius: 0
            },
            [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
                display: 'inline-flex'
            },
            '& > *:not(:last-child)': {
                marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
                borderInlineEndWidth: token.lineWidth
            },
            // Undo float for .ant-input-group .ant-input
            [componentCls]: {
                float: 'none'
            },
            // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
            [`& > ${antCls}-select,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
                borderInlineEndWidth: token.lineWidth,
                borderRadius: 0,
                '&:hover, &:focus': {
                    zIndex: 1
                }
            },
            [`& > ${antCls}-select-focused`]: {
                zIndex: 1
            },
            // update z-index for arrow icon
            [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
                zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
            },
            [`& > *:first-child,
      & > ${antCls}-select:first-child,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
                borderStartStartRadius: token.borderRadius,
                borderEndStartRadius: token.borderRadius
            },
            [`& > *:last-child,
      & > ${antCls}-select:last-child,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
                borderInlineEndWidth: token.lineWidth,
                borderStartEndRadius: token.borderRadius,
                borderEndEndRadius: token.borderRadius
            },
            // https://github.com/ant-design/ant-design/issues/12493
            [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
                verticalAlign: 'top'
            },
            [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
                marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
                [`${componentCls}-affix-wrapper`]: {
                }
            }
        }
    };
};
const genInputStyle = (token)=>{
    const { componentCls, controlHeightSM, lineWidth, calc } = token;
    const FIXED_CHROME_COLOR_HEIGHT = 16;
    const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...genBasicInputStyle(token),
            // Variants
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genOutlinedStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFilledStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genBorderlessStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genUnderlinedStyle"])(token),
            '&[type="color"]': {
                height: token.controlHeight,
                [`&${componentCls}-lg`]: {
                    height: token.controlHeightLG
                },
                [`&${componentCls}-sm`]: {
                    height: controlHeightSM,
                    paddingTop: colorSmallPadding,
                    paddingBottom: colorSmallPadding
                }
            },
            '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
                appearance: 'none'
            }
        }
    };
};
const genAllowClearStyle = (token)=>{
    const { componentCls } = token;
    return {
        // ========================= Input =========================
        [`${componentCls}-clear-icon`]: {
            margin: 0,
            padding: 0,
            lineHeight: 0,
            color: token.colorTextQuaternary,
            fontSize: token.fontSizeIcon,
            verticalAlign: -1,
            // https://github.com/ant-design/ant-design/pull/18151
            // https://codesandbox.io/s/wizardly-sun-u10br
            cursor: 'pointer',
            transition: `color ${token.motionDurationSlow}`,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            '&:hover': {
                color: token.colorIcon
            },
            '&:focus-visible': {
                color: token.colorIcon,
                borderRadius: token.borderRadiusSM,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token)
            },
            '&:active': {
                color: token.colorText
            },
            '&-hidden': {
                visibility: 'hidden'
            },
            '&-has-suffix': {
                margin: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.inputAffixPadding)}`
            }
        }
    };
};
const genAffixStyle = (token)=>{
    const { componentCls, inputAffixPadding, colorTextDescription, motionDurationSlow, colorIcon, colorIconHover } = token;
    const affixCls = `${componentCls}-affix-wrapper`;
    const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;
    return {
        [affixCls]: {
            ...genBasicInputStyle(token),
            display: 'inline-flex',
            '&-focused, &:focus': {
                zIndex: 1
            },
            [`> input${componentCls}`]: {
                padding: 0
            },
            [`> input${componentCls}, > textarea${componentCls}`]: {
                fontSize: 'inherit',
                border: 'none',
                borderRadius: 0,
                outline: 'none',
                background: 'transparent',
                color: 'inherit',
                '&::-ms-reveal': {
                    display: 'none'
                },
                '&:focus': {
                    boxShadow: 'none !important'
                }
            },
            '&::before': {
                display: 'inline-block',
                width: 0,
                visibility: 'hidden',
                content: '"\\a0"'
            },
            [componentCls]: {
                '&-prefix, &-suffix': {
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    '> *:not(:last-child)': {
                        marginInlineEnd: token.paddingXS
                    }
                },
                '&-show-count-suffix': {
                    color: colorTextDescription,
                    direction: 'ltr'
                },
                '&-show-count-has-suffix': {
                    marginInlineEnd: token.paddingXXS
                },
                '&-prefix': {
                    marginInlineEnd: inputAffixPadding
                },
                '&-suffix': {
                    marginInlineStart: inputAffixPadding
                },
                // password
                '&-password-icon': {
                    display: 'inline-flex',
                    color: colorIcon,
                    cursor: 'pointer',
                    transition: `all ${motionDurationSlow}`,
                    '&:hover': {
                        color: colorIconHover
                    }
                }
            },
            ...genAllowClearStyle(token)
        },
        // 覆盖 affix-wrapper borderRadius！
        [`${componentCls}-underlined`]: {
            borderRadius: 0
        },
        [affixClsDisabled]: {
            // password disabled
            [`${componentCls}-password-icon`]: {
                color: colorIcon,
                cursor: 'not-allowed',
                '&:hover': {
                    color: colorIcon
                }
            }
        }
    };
};
const genGroupStyle = (token)=>{
    const { componentCls, borderRadiusLG, borderRadiusSM } = token;
    return {
        [`${componentCls}-group`]: {
            // Style for input-group: input with label, with button or dropdown...
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...genInputGroupStyle(token),
            '&-rtl': {
                direction: 'rtl'
            },
            '&-wrapper': {
                display: 'inline-block',
                width: '100%',
                textAlign: 'start',
                verticalAlign: 'top',
                // https://github.com/ant-design/ant-design/issues/6403
                '&-rtl': {
                    direction: 'rtl'
                },
                // Size
                '&-lg': {
                    [`${componentCls}-group-addon`]: {
                        borderRadius: borderRadiusLG,
                        fontSize: token.inputFontSizeLG
                    }
                },
                '&-sm': {
                    [`${componentCls}-group-addon`]: {
                        borderRadius: borderRadiusSM
                    }
                },
                // Variants
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genOutlinedGroupStyle"])(token),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFilledGroupStyle"])(token),
                // '&-disabled': {
                //   [`${componentCls}-group-addon`]: {
                //     ...genDisabledStyle(token),
                //   },
                // },
                // Fix the issue of using icons in Space Compact mode
                // https://github.com/ant-design/ant-design/issues/42122
                [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
                    [`${componentCls}, ${componentCls}-group-addon`]: {
                        borderRadius: 0
                    }
                },
                [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
                    [`${componentCls}, ${componentCls}-group-addon`]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0
                    }
                },
                [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
                    [`${componentCls}, ${componentCls}-group-addon`]: {
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0
                    }
                },
                // Fix the issue of input use show-count param in space compact mode
                // https://github.com/ant-design/ant-design/issues/46872
                [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
                    [`${componentCls}-affix-wrapper`]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0
                    }
                },
                // Fix the issue of input use `addonAfter` param in space compact mode
                // https://github.com/ant-design/ant-design/issues/52483
                [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-item`]: {
                    [`${componentCls}-affix-wrapper`]: {
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0
                    }
                }
            }
        }
    };
};
// ============================== Range ===============================
const genRangeStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-out-of-range`]: {
            [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
                color: token.colorError
            }
        }
    };
};
const useSharedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Shared'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return [
        genInputStyle(inputToken),
        genAffixStyle(inputToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Component'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return [
        genGroupStyle(inputToken),
        genRangeStyle(inputToken),
        // =====================================================
        // ==             Space Compact                       ==
        // =====================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(inputToken, {
            focus: true,
            focusElCls: `${inputToken.componentCls}-affix-wrapper-focused`
        })
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
}),
"[project]/apps/web/node_modules/antd/es/input/style/textarea.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
;
;
;
const genTextAreaStyle = (token)=>{
    const { componentCls, paddingLG } = token;
    const textareaPrefixCls = `${componentCls}-textarea`;
    return {
        // Raw Textarea
        [`textarea${componentCls}`]: {
            maxWidth: '100%',
            // prevent textarea resize from coming out of its container
            height: 'auto',
            minHeight: token.controlHeight,
            lineHeight: token.lineHeight,
            verticalAlign: 'bottom',
            transition: `all ${token.motionDurationSlow}`,
            resize: 'vertical',
            '@media (hover: none) and (pointer: coarse)': {
                resize: 'none'
            },
            [`&${componentCls}-mouse-active`]: {
                transition: `all ${token.motionDurationSlow}, height 0s, width 0s`
            }
        },
        // Wrapper for resize
        [`${componentCls}-textarea-affix-wrapper-resize-dirty`]: {
            width: 'auto'
        },
        [textareaPrefixCls]: {
            position: 'relative',
            '&-show-count': {
                [`${componentCls}-data-count`]: {
                    position: 'absolute',
                    bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
                    insetInlineEnd: 0,
                    color: token.colorTextDescription,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none'
                }
            },
            [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
                paddingInlineEnd: paddingLG
            },
            [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
                padding: 0,
                [`> textarea${componentCls}`]: {
                    fontSize: 'inherit',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    minHeight: token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal(),
                    '&:focus': {
                        boxShadow: 'none !important'
                    }
                },
                [`${componentCls}-suffix`]: {
                    margin: 0,
                    '> *:not(:last-child)': {
                        marginInline: 0
                    },
                    // Clear Icon
                    [`${componentCls}-clear-icon`]: {
                        position: 'absolute',
                        insetInlineEnd: token.paddingInline,
                        insetBlockStart: token.paddingXS
                    },
                    // Feedback Icon
                    [`${textareaPrefixCls}-suffix`]: {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: token.paddingInline,
                        bottom: 0,
                        zIndex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        margin: 'auto',
                        pointerEvents: 'none'
                    }
                }
            },
            [`&-affix-wrapper${componentCls}-affix-wrapper-rtl`]: {
                [`${componentCls}-suffix`]: {
                    [`${componentCls}-data-count`]: {
                        direction: 'ltr',
                        insetInlineStart: 0
                    }
                }
            },
            [`&-affix-wrapper${componentCls}-affix-wrapper-sm`]: {
                [`${componentCls}-suffix`]: {
                    [`${componentCls}-clear-icon`]: {
                        insetInlineEnd: token.paddingInlineSM
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'TextArea'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return genTextAreaStyle(inputToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
}),
"[project]/apps/web/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/input/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextArea$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/input/es/TextArea.js [app-client] (ecmascript) <export default as TextArea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/textarea.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const TextArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls: customizePrefixCls, bordered = true, size: customizeSize, disabled: customDisabled, status: customStatus, allowClear, classNames, rootClassName, className, style, styles, variant: customVariant, showCount, onMouseDown, onResize, ...rest } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const { deprecated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('TextArea');
        deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    const { getPrefixCls, direction, allowClear: contextAllowClear, autoComplete: contextAutoComplete, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('textArea');
    // =================== Disabled ===================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    // ==================== Status ====================
    const { status: contextStatus, hasFeedback, feedbackIcon } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const styleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        styleRoot
    ], {
        props
    });
    // ===================== Ref ======================
    const innerRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "TextArea.useImperativeHandle": ()=>({
                resizableTextArea: innerRef.current?.resizableTextArea,
                focus: ({
                    "TextArea.useImperativeHandle": (option)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerFocus"])(innerRef.current?.resizableTextArea?.textArea, option);
                    }
                })["TextArea.useImperativeHandle"],
                blur: ({
                    "TextArea.useImperativeHandle": ()=>innerRef.current?.blur()
                })["TextArea.useImperativeHandle"],
                nativeElement: innerRef.current?.nativeElement || null
            })
    }["TextArea.useImperativeHandle"]);
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    // ==================== Style =====================
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSharedStyle"])(prefixCls, rootClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(prefixCls, rootCls);
    // ================= Compact Item =================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    // ===================== Size =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TextArea.useSize[mergedSize]": (ctx)=>customizeSize ?? compactSize ?? ctx
    }["TextArea.useSize[mergedSize]"]);
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('textArea', customVariant, bordered);
    const mergedAllowClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllowClear"])({
        allowClear,
        contextAllowClear,
        componentName: 'TextArea'
    });
    // ==================== Resize ====================
    // https://github.com/ant-design/ant-design/issues/51594
    const [isMouseDown, setIsMouseDown] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // When has wrapper, resize will make as dirty for `resize: both` style
    const [resizeDirty, setResizeDirty] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const onInternalMouseDown = (e)=>{
        setIsMouseDown(true);
        onMouseDown?.(e);
        const onMouseUp = ()=>{
            setIsMouseDown(false);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mouseup', onMouseUp);
    };
    const onInternalResize = (size)=>{
        onResize?.(size);
        // Change to dirty since this maybe from the `resize: both` style
        if (isMouseDown && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(getComputedStyle)) {
            const ele = innerRef.current?.nativeElement?.querySelector('textarea');
            if (ele && getComputedStyle(ele).resize === 'both') {
                setResizeDirty(true);
            }
        }
    };
    // ==================== Render ====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextArea$3e$__["TextArea"], {
        autoComplete: contextAutoComplete,
        ...rest,
        style: mergedStyles.root,
        styles: mergedStyles,
        disabled: mergedDisabled,
        allowClear: mergedAllowClear,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(cssVarCls, rootCls, className, rootClassName, compactItemClassnames, contextClassName, mergedClassNames.root, // Only for wrapper
        {
            [`${prefixCls}-textarea-affix-wrapper-resize-dirty`]: resizeDirty
        }),
        classNames: {
            ...mergedClassNames,
            textarea: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-sm`]: mergedSize === 'small',
                [`${prefixCls}-lg`]: mergedSize === 'large'
            }, hashId, mergedClassNames.textarea, isMouseDown && `${prefixCls}-mouse-active`),
            variant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-${variant}`]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus)),
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-textarea-affix-wrapper`, {
                [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
                [`${prefixCls}-affix-wrapper-sm`]: mergedSize === 'small',
                [`${prefixCls}-affix-wrapper-lg`]: mergedSize === 'large',
                [`${prefixCls}-textarea-show-count`]: showCount || props.count?.show
            }, hashId)
        },
        prefixCls: prefixCls,
        suffix: hasFeedback && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-textarea-suffix`
        }, feedbackIcon),
        showCount: showCount,
        ref: innerRef,
        onResize: onInternalResize,
        onMouseDown: onInternalMouseDown
    });
});
const __TURBOPACK__default__export__ = TextArea;
}),
"[project]/apps/web/node_modules/antd/es/typography/style/mixins.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCopyableStyles",
    ()=>getCopyableStyles,
    "getEditableStyles",
    ()=>getEditableStyles,
    "getEllipsisStyles",
    ()=>getEllipsisStyles,
    "getLinkStyles",
    ()=>getLinkStyles,
    "getResetStyles",
    ()=>getResetStyles,
    "getTitleStyles",
    ()=>getTitleStyles
]);
/*
.typography-title(@fontSize; @fontWeight; @lineHeight; @headingColor; @headingMarginBottom;) {
 margin-bottom: @headingMarginBottom;
 color: @headingColor;
 font-weight: @fontWeight;
 fontSize: @fontSize;
 line-height: @lineHeight;
}
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/presets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
;
;
;
const getTitleStyle = (fontSize, lineHeight, color, token)=>{
    const { titleMarginBottom, fontWeightStrong } = token;
    return {
        marginBottom: titleMarginBottom,
        color,
        fontWeight: fontWeightStrong,
        fontSize,
        lineHeight
    };
};
const getTitleStyles = (token)=>{
    const headings = [
        1,
        2,
        3,
        4,
        5
    ];
    const styles = {};
    headings.forEach((headingLevel)=>{
        styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
    });
    return styles;
};
const getLinkStyles = (token)=>{
    const { componentCls } = token;
    const linkCls = `${componentCls}-link`;
    return {
        [`&${linkCls}`]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationUnit"])(token),
            userSelect: 'text',
            [`&[disabled], &${componentCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed',
                '&:active, &:hover': {
                    color: token.colorTextDisabled
                },
                '&:active': {
                    pointerEvents: 'none',
                    // Action buttons (copy, edit, expand) must remain interactive even when
                    // the disabled link is being clicked, otherwise their click events get
                    // swallowed by the parent's pointer-events: none during :active.
                    [`${componentCls}-actions`]: {
                        pointerEvents: 'auto'
                    }
                }
            }
        }
    };
};
const getResetStyles = (token)=>({
        code: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.2em 0.1em',
            fontSize: '85%',
            fontFamily: token.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.1)',
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} rgba(100, 100, 100, 0.2)`,
            borderRadius: 3
        },
        kbd: {
            margin: '0 0.2em',
            paddingInline: '0.4em',
            paddingBlock: '0.15em 0.1em',
            fontSize: '90%',
            fontFamily: token.fontFamilyCode,
            background: 'rgba(150, 150, 150, 0.06)',
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} rgba(100, 100, 100, 0.2)`,
            borderBottomWidth: 2,
            borderRadius: 3
        },
        mark: {
            padding: 0,
            // FIXME hardcode in v4
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gold"][2]
        },
        'u, ins': {
            textDecoration: 'underline',
            textDecorationSkipInk: 'auto'
        },
        's, del': {
            textDecoration: 'line-through'
        },
        strong: {
            fontWeight: token.fontWeightStrong
        },
        // list
        'ul, ol': {
            marginInline: 0,
            marginBlock: '0 1em',
            padding: 0,
            li: {
                marginInline: '20px 0',
                marginBlock: 0,
                paddingInline: '4px 0',
                paddingBlock: 0
            }
        },
        ul: {
            listStyleType: 'circle',
            ul: {
                listStyleType: 'disc'
            }
        },
        ol: {
            listStyleType: 'decimal'
        },
        // pre & block
        'pre, blockquote': {
            margin: '1em 0'
        },
        pre: {
            padding: '0.4em 0.6em',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            background: 'rgba(150, 150, 150, 0.1)',
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} rgba(100, 100, 100, 0.2)`,
            borderRadius: 3,
            fontFamily: token.fontFamilyCode,
            // Compatible for marked
            code: {
                display: 'inline',
                margin: 0,
                padding: 0,
                fontSize: 'inherit',
                fontFamily: 'inherit',
                background: 'transparent',
                border: 0
            }
        },
        blockquote: {
            paddingInline: '0.6em 0',
            paddingBlock: 0,
            borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
            opacity: 0.85
        },
        // table - Follow Table component default style
        table: {
            width: '100%',
            textAlign: 'start',
            borderCollapse: 'separate',
            borderSpacing: 0,
            marginBlock: '1em',
            'th, td': {
                padding: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding),
                overflowWrap: 'break-word',
                borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
            },
            'thead > tr:first-child > th:first-child': {
                borderStartStartRadius: token.borderRadiusLG
            },
            'thead > tr:first-child > th:last-child': {
                borderStartEndRadius: token.borderRadiusLG
            },
            'thead > tr > th': {
                textAlign: 'start',
                position: 'relative',
                color: token.colorTextHeading,
                fontWeight: token.fontWeightStrong,
                backgroundColor: token.colorFillAlter,
                transition: `background-color ${token.motionDurationMid} ease`,
                '&:not(:last-child)::before': {
                    position: 'absolute',
                    top: '50%',
                    insetInlineEnd: 0,
                    width: 1,
                    height: '1.6em',
                    backgroundColor: token.colorSplit,
                    transform: 'translateY(-50%)',
                    content: '""'
                }
            },
            'tbody > tr': {
                '> th, > td': {
                    transition: `background-color ${token.motionDurationMid} ease`
                },
                '&:hover > th, &:hover > td': {
                    backgroundColor: token.colorFillAlter
                }
            }
        }
    });
const getEditableStyles = (token)=>{
    const { componentCls, paddingSM } = token;
    const inputShift = paddingSM;
    return {
        '&-edit-content': {
            position: 'relative',
            'div&': {
                insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
                insetBlockStart: token.calc(inputShift).div(-2).add(1).equal(),
                marginBottom: token.calc(inputShift).div(2).sub(2).equal()
            },
            [`${componentCls}-edit-content-confirm`]: {
                position: 'absolute',
                insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
                insetBlockEnd: token.marginXS,
                color: token.colorIcon,
                // default style
                fontWeight: 'normal',
                fontSize: token.fontSize,
                fontStyle: 'normal',
                pointerEvents: 'none'
            },
            // Double the `-edit-content` class to raise this selector's specificity
            // above Input's own `textarea.ant-input { line-height: token.lineHeight }`
            // rule. Both otherwise share the same (0,1,1) specificity and Input is
            // injected after Typography, so on the raw TextArea path the Input rule
            // would win the cascade and the inherited font props below (notably
            // `line-height`) would not apply.
            [`&${componentCls}-edit-content textarea`]: {
                margin: '0!important',
                // Inherit the edited element's typography so the editing textarea
                // matches the rendered text (including customized heading tokens such
                // as `fontSizeHeading1` and the strong heading weight), keeping editing
                // WYSIWYG. Browsers do not inherit font properties for form controls by
                // default, so they are set explicitly here.
                fontSize: 'inherit',
                lineHeight: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                // Fix Editable Textarea flash in Firefox
                MozTransition: 'none',
                height: '1em'
            }
        }
    };
};
const getCopyableStyles = (token)=>({
        [`${token.componentCls}-copy-success`]: {
            '&, &:hover, &:focus': {
                color: token.colorSuccess
            }
        },
        [`${token.componentCls}-copy-icon-only`]: {
            marginInlineStart: 0
        }
    });
const getEllipsisStyles = ()=>({
        'a&-ellipsis, span&-ellipsis': {
            display: 'inline-block',
            maxWidth: '100%'
        },
        '&-ellipsis-single-line': {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
            // https://blog.csdn.net/iefreer/article/details/50421025
            'a&, span&': {
                verticalAlign: 'bottom'
            },
            '> code': {
                paddingBlock: 0,
                maxWidth: 'calc(100% - 1.2em)',
                display: 'inline-block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                verticalAlign: 'bottom',
                // https://github.com/ant-design/ant-design/issues/45953
                boxSizing: 'content-box'
            }
        },
        '&-ellipsis-multiple-line': {
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
        }
    });
}),
"[project]/apps/web/node_modules/antd/es/typography/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/style/mixins.js [app-client] (ecmascript)");
;
;
;
const genTypographyStyle = (token)=>{
    const { componentCls, titleMarginTop } = token;
    return {
        [componentCls]: {
            color: token.colorText,
            wordBreak: 'break-word',
            lineHeight: token.lineHeight,
            [`&${componentCls}-secondary, &${componentCls}-link${componentCls}-secondary`]: {
                color: token.colorTextDescription
            },
            [`&${componentCls}-success, &${componentCls}-link${componentCls}-success`]: {
                color: token.colorSuccessText
            },
            [`&${componentCls}-warning, &${componentCls}-link${componentCls}-warning`]: {
                color: token.colorWarningText
            },
            [`&${componentCls}-danger, &${componentCls}-link${componentCls}-danger`]: {
                color: token.colorErrorText,
                [`&${componentCls}-link:active, &${componentCls}-link:focus`]: {
                    color: token.colorErrorTextActive
                },
                [`&${componentCls}-link:hover`]: {
                    color: token.colorErrorTextHover
                }
            },
            [`&${componentCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed',
                userSelect: 'none'
            },
            'div&, p': {
                marginBottom: '1em'
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTitleStyles"])(token),
            [`& + h1${componentCls}, & + h2${componentCls}, & + h3${componentCls}, & + h4${componentCls}, & + h5${componentCls}`]: {
                marginTop: titleMarginTop
            },
            'div, ul, li, p, h1, h2, h3, h4, h5': {
                '+ h1, + h2, + h3, + h4, + h5': {
                    marginTop: titleMarginTop
                }
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResetStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkStyles"])(token),
            // Operation
            [`${componentCls}-actions`]: {
                display: 'inline'
            },
            [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationUnit"])(token),
                marginInlineStart: token.marginXXS
            },
            [`${componentCls}-actions-start`]: {
                [`
          ${componentCls}-expand,
          ${componentCls}-collapse,
          ${componentCls}-edit,
          ${componentCls}-copy:not(${componentCls}-copy-icon-only)
        `]: {
                    marginInlineStart: 0,
                    marginInlineEnd: token.marginXXS
                }
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEditableStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCopyableStyles"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$mixins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEllipsisStyles"])(),
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = ()=>({
        titleMarginTop: '1.2em',
        titleMarginBottom: '0.5em'
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Typography', genTypographyStyle, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/typography/Editable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnterOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EnterOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyCode$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript) <export default as KeyCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Editable = (props)=>{
    const { prefixCls, 'aria-label': ariaLabel, className, style, classNames, styles, direction, maxLength, autoSize = true, value, onSave, onCancel, onEnd, component, enterIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnterOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inCompositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const lastKeyCodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [current, setCurrent] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](value);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Editable.useEffect": ()=>{
            setCurrent(value);
        }
    }["Editable.useEffect"], [
        value
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Editable.useEffect": ()=>{
            if (ref.current?.resizableTextArea) {
                const { textArea } = ref.current.resizableTextArea;
                textArea.focus();
                const { length } = textArea.value;
                textArea.setSelectionRange(length, length);
            }
        }
    }["Editable.useEffect"], []);
    const onChange = ({ target })=>{
        setCurrent(target.value.replace(/[\n\r]/g, ''));
    };
    const onCompositionStart = ()=>{
        inCompositionRef.current = true;
    };
    const onCompositionEnd = ()=>{
        inCompositionRef.current = false;
    };
    const onKeyDown = ({ keyCode })=>{
        // We don't record keyCode when IME is using
        if (inCompositionRef.current) {
            return;
        }
        lastKeyCodeRef.current = keyCode;
    };
    const confirmChange = ()=>{
        onSave(current.trim());
    };
    const onKeyUp = ({ keyCode, ctrlKey, altKey, metaKey, shiftKey })=>{
        // Check if it's a real key
        if (lastKeyCodeRef.current !== keyCode || inCompositionRef.current || ctrlKey || altKey || metaKey || shiftKey) {
            return;
        }
        if (keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyCode$3e$__["KeyCode"].ENTER) {
            confirmChange();
            onEnd?.();
        } else if (keyCode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyCode$3e$__["KeyCode"].ESC) {
            onCancel();
        }
    };
    const onBlur = ()=>{
        confirmChange();
    };
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const textAreaClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-edit-content`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-${component}`]: !!component
    }, className, classNames.root, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: textAreaClassName,
        style: {
            ...styles.root,
            ...style
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        maxLength: maxLength,
        value: current,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onCompositionStart: onCompositionStart,
        onCompositionEnd: onCompositionEnd,
        onBlur: onBlur,
        "aria-label": ariaLabel,
        rows: 1,
        autoSize: autoSize,
        className: classNames.textarea,
        style: styles.textarea
    }), enterIcon !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(enterIcon, {
        className: `${prefixCls}-edit-content-confirm`
    }) : null);
};
const __TURBOPACK__default__export__ = Editable;
}),
"[project]/apps/web/node_modules/antd/es/_util/copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
const execCopy = (text, isHtmlFormat)=>{
    let copySuccess = false;
    const onCopy = (event)=>{
        event.stopPropagation();
        event.preventDefault();
        event.clipboardData?.clearData();
        event.clipboardData?.setData('text/plain', text);
        if (isHtmlFormat) {
            event.clipboardData?.setData('text/html', text);
        }
        copySuccess = true;
    };
    try {
        document.addEventListener('copy', onCopy, {
            capture: true
        });
        document.execCommand('copy');
        return copySuccess;
    } catch  {
        return false;
    } finally{
        document.removeEventListener('copy', onCopy, {
            capture: true
        });
    }
};
const asyncCopy = async (text, isHtmlFormat)=>{
    try {
        if (isHtmlFormat) {
            await navigator.clipboard.write([
                new ClipboardItem({
                    'text/html': new Blob([
                        text
                    ], {
                        type: 'text/html'
                    }),
                    'text/plain': new Blob([
                        text
                    ], {
                        type: 'text/plain'
                    })
                })
            ]);
        } else {
            await navigator.clipboard.writeText(text);
        }
        return true;
    } catch  {
        return false;
    }
};
async function copy(text, config) {
    if (typeof text !== 'string') {
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'The clipboard content must be of string type', '') : "TURBOPACK unreachable";
        return false;
    }
    const isHtmlFormat = config?.format === 'text/html';
    if (await asyncCopy(text, isHtmlFormat)) {
        return true;
    }
    if (execCopy(text, isHtmlFormat)) {
        return true;
    }
    return false;
}
const __TURBOPACK__default__export__ = copy;
}),
"[project]/apps/web/node_modules/antd/es/_util/toList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
const toList = (val, config = {})=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(val) && config?.skipEmpty) {
        return [];
    }
    return Array.isArray(val) ? val : [
        val
    ];
};
const __TURBOPACK__default__export__ = toList;
}),
"[project]/apps/web/node_modules/antd/es/typography/hooks/useCopyClick.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/toList.js [app-client] (ecmascript)");
;
;
;
;
;
const useCopyClick = ({ copyConfig, children })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    const [copyLoading, setCopyLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const copyOptions = {};
    if (copyConfig.format) {
        copyOptions.format = copyConfig.format;
    }
    // Keep copy action up to date
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useCopyClick.useEvent[onClick]": async (e)=>{
            e?.preventDefault();
            e?.stopPropagation();
            setCopyLoading(true);
            try {
                const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(copyConfig.text) ? await copyConfig.text() : copyConfig.text;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(text || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children, {
                    skipEmpty: true
                }).join('') || '', copyOptions);
                setCopyLoading(false);
                setCopied(true, true);
                // Trigger tips update
                setCopied(false, {
                    ms: 3000
                });
                copyConfig.onCopy?.(e);
            } catch (error) {
                setCopyLoading(false);
                throw error;
            }
        }
    }["useCopyClick.useEvent[onClick]"]);
    return {
        copied,
        copyLoading,
        onClick
    };
};
const __TURBOPACK__default__export__ = useCopyClick;
}),
"[project]/apps/web/node_modules/antd/es/typography/hooks/useMergedConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const useMergedConfig = (propConfig, templateConfig)=>{
    const support = Boolean(propConfig);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMergedConfig.useMemo": ()=>{
            const config = {
                ...templateConfig,
                ...support && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(propConfig) ? propConfig : null
            };
            return [
                support,
                config
            ];
        }
    }["useMergedConfig.useMemo"], [
        support,
        propConfig,
        templateConfig
    ]);
};
const __TURBOPACK__default__export__ = useMergedConfig;
}),
"[project]/apps/web/node_modules/antd/es/typography/hooks/usePrevious.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const usePrevious = (value)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"]);
    return ref.current;
};
const __TURBOPACK__default__export__ = usePrevious;
}),
"[project]/apps/web/node_modules/antd/es/typography/hooks/useTooltipProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const useTooltipProps = (tooltip, editConfigText, children)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTooltipProps.useMemo": ()=>{
            if (tooltip === true) {
                return {
                    title: editConfigText ?? children
                };
            }
            if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(tooltip)) {
                return {
                    title: tooltip
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(tooltip)) {
                return {
                    title: editConfigText ?? children,
                    ...tooltip
                };
            }
            return {
                title: tooltip
            };
        }
    }["useTooltipProps.useMemo"], [
        tooltip,
        editConfigText,
        children
    ]);
const __TURBOPACK__default__export__ = useTooltipProps;
}),
"[project]/apps/web/node_modules/antd/es/typography/hooks/useTypographySemantic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypographySemantic",
    ()=>useTypographySemantic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
;
;
;
const useTypographySemantic = (customizePrefixCls, classNames, styles, typographyDirection, props)=>{
    const { getPrefixCls, direction: contextDirection, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('typography');
    const direction = typographyDirection ?? contextDirection;
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const mergedProps = {
        ...props,
        prefixCls,
        direction
    };
    const contextClassNamesObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTypographySemantic.useMemo[contextClassNamesObject]": ()=>({
                root: contextClassName
            })
    }["useTypographySemantic.useMemo[contextClassNamesObject]"], [
        contextClassName
    ]);
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNamesObject,
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles
    ], {
        props: mergedProps
    });
    return [
        mergedClassNames,
        mergedStyles,
        prefixCls,
        direction
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/typography/Typography.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalTypography",
    ()=>InternalTypography,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTypographySemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/useTypographySemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const InternalTypography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { component: Component = 'article', className, rootClassName, children, direction, style, classNames, styles, prefixCls, ...restProps } = props;
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const componentClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls, classNames?.root);
    const mergedStyle = {
        ...styles?.root,
        ...style
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
        ...restProps,
        className: componentClassName,
        style: mergedStyle,
        ref: ref
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    InternalTypography.displayName = 'InternalTypography';
}
const Typography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, direction: typographyDirection, classNames, styles, ...restProps } = props;
    const [mergedClassNames, mergedStyles, mergedPrefixCls, mergedDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTypographySemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypographySemantic"])(customizePrefixCls, classNames, styles, typographyDirection, props);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](InternalTypography, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, rootClassName),
        direction: mergedDirection,
        classNames: mergedClassNames,
        styles: mergedStyles,
        prefixCls: mergedPrefixCls,
        ...restProps
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Typography.displayName = 'Typography';
}
const __TURBOPACK__default__export__ = Typography;
;
}),
"[project]/apps/web/node_modules/antd/es/typography/Base/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNode",
    ()=>getNode,
    "isEleEllipsis",
    ()=>isEleEllipsis,
    "isValidText",
    ()=>isValidText,
    "toCopyConfigList",
    ()=>toCopyConfigList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/toList.js [app-client] (ecmascript)");
;
const toCopyConfigList = (val)=>{
    if (val === false) {
        return [
            false,
            false
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$toList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(val);
};
function getNode(dom, defaultNode, needDom) {
    if (dom === true || dom === undefined) {
        return defaultNode;
    }
    return dom || needDom && defaultNode;
}
function isEleEllipsis(ele) {
    // Create a new div to get the size
    const childDiv = document.createElement('em');
    ele.appendChild(childDiv);
    // For test case
    if ("TURBOPACK compile-time truthy", 1) {
        childDiv.className = 'ant-typography-css-ellipsis-content-measure';
    }
    const rect = ele.getBoundingClientRect();
    const childRect = childDiv.getBoundingClientRect();
    // Reset
    ele.removeChild(childDiv);
    // Range checker
    return(// Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right || // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom);
}
const isValidText = (val)=>[
        'string',
        'number'
    ].includes(typeof val);
}),
"[project]/apps/web/node_modules/antd/es/typography/Base/CopyBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CopyOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CopyBtn = (props)=>{
    const { prefixCls, copied, locale, iconOnly, tooltips, icon, tabIndex, onCopy, loading: btnLoading, className, style } = props;
    const tooltipNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCopyConfigList"])(tooltips);
    const iconNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCopyConfigList"])(icon);
    const { copied: copiedText, copy: copyText } = locale ?? {};
    const systemStr = copied ? copiedText : copyText;
    const copyTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNode"])(tooltipNodes[copied ? 1 : 0], systemStr);
    const ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: copyTitle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-copy`, className, {
            [`${prefixCls}-copy-success`]: copied,
            [`${prefixCls}-copy-icon-only`]: iconOnly
        }),
        style: style,
        onClick: onCopy,
        "aria-label": ariaLabel,
        tabIndex: tabIndex
    }, copied ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNode"])(iconNodes[1], /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNode"])(iconNodes[0], btnLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), true)));
};
const __TURBOPACK__default__export__ = CopyBtn;
}),
"[project]/apps/web/node_modules/antd/es/typography/Base/Ellipsis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EllipsisMeasure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const MeasureText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ style, children }, ref)=>{
    const spanRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "MeasureText.useImperativeHandle": ()=>({
                isExceed: ({
                    "MeasureText.useImperativeHandle": ()=>{
                        const span = spanRef.current;
                        return span.scrollHeight > span.clientHeight;
                    }
                })["MeasureText.useImperativeHandle"],
                getHeight: ({
                    "MeasureText.useImperativeHandle": ()=>spanRef.current.clientHeight
                })["MeasureText.useImperativeHandle"]
            })
    }["MeasureText.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-hidden": true,
        ref: spanRef,
        style: {
            position: 'fixed',
            display: 'block',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            backgroundColor: 'rgba(255, 0, 0, 0.65)',
            ...style
        }
    }, children);
});
const getNodesLen = (nodeList)=>nodeList.reduce((totalLen, node)=>totalLen + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidText"])(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
    let currLen = 0;
    const currentNodeList = [];
    for(let i = 0; i < nodeList.length; i += 1){
        // Match to return
        if (currLen === len) {
            return currentNodeList;
        }
        const node = nodeList[i];
        const canCut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidText"])(node);
        const nodeLen = canCut ? String(node).length : 1;
        const nextLen = currLen + nodeLen;
        // Exceed but current not which means we need cut this
        // This will not happen on validate ReactElement
        if (nextLen > len) {
            const restLen = len - currLen;
            currentNodeList.push(String(node).slice(0, restLen));
            return currentNodeList;
        }
        currentNodeList.push(node);
        currLen = nextLen;
    }
    return nodeList;
}
// Measure for the `text` is exceed the `rows` or not
const STATUS_MEASURE_NONE = 0;
const STATUS_MEASURE_PREPARE = 1;
const STATUS_MEASURE_START = 2;
const STATUS_MEASURE_NEED_ELLIPSIS = 3;
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
const lineClipStyle = {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical'
};
function EllipsisMeasure(props) {
    const { enableMeasure, width, text, children, rows, expanded, measureDeps, miscDeps, onEllipsis } = props;
    const nodeList = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EllipsisMeasure.useMemo[nodeList]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(text)
    }["EllipsisMeasure.useMemo[nodeList]"], [
        text
    ]);
    const nodeLen = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EllipsisMeasure.useMemo[nodeLen]": ()=>getNodesLen(nodeList)
    }["EllipsisMeasure.useMemo[nodeLen]"], [
        text
    ]);
    // ========================= Full Content =========================
    // Used for measure only, which means it's always render as no need ellipsis
    const fullContent = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EllipsisMeasure.useMemo[fullContent]": ()=>children(nodeList, false)
    }["EllipsisMeasure.useMemo[fullContent]"], [
        text
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(measureDeps)));
    // ========================= Cut Content ==========================
    const [ellipsisCutIndex, setEllipsisCutIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const cutMidRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ========================= NeedEllipsis =========================
    const measureWhiteSpaceRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const needEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Measure for `rows-1` height, to avoid operation exceed the line height
    const descRowsEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const symbolRowEllipsisRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [canEllipsis, setCanEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [needEllipsis, setNeedEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](STATUS_MEASURE_NONE);
    const [ellipsisHeight, setEllipsisHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [parentWhiteSpace, setParentWhiteSpace] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Trigger start measure
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "EllipsisMeasure.useLayoutEffect": ()=>{
            if (enableMeasure && width && nodeLen) {
                setNeedEllipsis(STATUS_MEASURE_PREPARE);
            } else {
                setNeedEllipsis(STATUS_MEASURE_NONE);
            }
        }
    }["EllipsisMeasure.useLayoutEffect"], [
        width,
        text,
        rows,
        enableMeasure,
        nodeList
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(measureDeps)));
    // Measure process
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "EllipsisMeasure.useLayoutEffect": ()=>{
            if (needEllipsis === STATUS_MEASURE_PREPARE) {
                setNeedEllipsis(STATUS_MEASURE_START);
                // Parent ref `white-space`
                const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
                setParentWhiteSpace(nextWhiteSpace);
            } else if (needEllipsis === STATUS_MEASURE_START) {
                const isOverflow = !!needEllipsisRef.current?.isExceed();
                setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
                setEllipsisCutIndex(isOverflow ? [
                    0,
                    nodeLen
                ] : null);
                setCanEllipsis(isOverflow);
                // Get the basic height of ellipsis rows
                const baseRowsEllipsisHeight = needEllipsisRef.current?.getHeight() || 0;
                // Get the height of `rows - 1` + symbol height
                const descRowsEllipsisHeight = rows === 1 ? 0 : descRowsEllipsisRef.current?.getHeight() || 0;
                const symbolRowEllipsisHeight = symbolRowEllipsisRef.current?.getHeight() || 0;
                const maxRowsHeight = Math.max(baseRowsEllipsisHeight, // height of rows with ellipsis
                descRowsEllipsisHeight + symbolRowEllipsisHeight);
                setEllipsisHeight(maxRowsHeight + 1);
                onEllipsis(isOverflow);
            }
        }
    }["EllipsisMeasure.useLayoutEffect"], [
        needEllipsis
    ]);
    // ========================= Cut Measure ==========================
    const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "EllipsisMeasure.useLayoutEffect": ()=>{
            const [minIndex, maxIndex] = ellipsisCutIndex || [
                0,
                0
            ];
            if (minIndex !== maxIndex) {
                const midHeight = cutMidRef.current?.getHeight() || 0;
                const isOverflow = midHeight > ellipsisHeight;
                let targetMidIndex = cutMidIndex;
                if (maxIndex - minIndex === 1) {
                    targetMidIndex = isOverflow ? minIndex : maxIndex;
                }
                setEllipsisCutIndex(isOverflow ? [
                    minIndex,
                    targetMidIndex
                ] : [
                    targetMidIndex,
                    maxIndex
                ]);
            }
        }
    }["EllipsisMeasure.useLayoutEffect"], [
        ellipsisCutIndex,
        cutMidIndex
    ]);
    // ========================= Text Content =========================
    const finalContent = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EllipsisMeasure.useMemo[finalContent]": ()=>{
            // Skip everything if `enableMeasure` is disabled
            if (!enableMeasure) {
                return children(nodeList, false);
            }
            if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
                const content = children(nodeList, false);
                // Limit the max line count to avoid scrollbar blink unless no need ellipsis
                // https://github.com/ant-design/ant-design/issues/42958
                if ([
                    STATUS_MEASURE_NO_NEED_ELLIPSIS,
                    STATUS_MEASURE_NONE
                ].includes(needEllipsis)) {
                    return content;
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                    style: {
                        ...lineClipStyle,
                        WebkitLineClamp: rows
                    }
                }, content);
            }
            return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
        }
    }["EllipsisMeasure.useMemo[finalContent]"], [
        expanded,
        needEllipsis,
        ellipsisCutIndex,
        nodeList
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(miscDeps)));
    // ============================ Render ============================
    const measureStyle = {
        width,
        margin: 0,
        padding: 0,
        whiteSpace: parentWhiteSpace === 'nowrap' ? 'normal' : 'inherit'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, finalContent, needEllipsis === STATUS_MEASURE_START && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: rows
        },
        ref: needEllipsisRef
    }, fullContent), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: rows - 1
        },
        ref: descRowsEllipsisRef
    }, fullContent), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            ...lineClipStyle,
            WebkitLineClamp: 1
        },
        ref: symbolRowEllipsisRef
    }, children([], true))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MeasureText, {
        style: {
            ...measureStyle,
            top: 400
        },
        ref: cutMidRef
    }, children(sliceNodes(nodeList, cutMidIndex), true)), needEllipsis === STATUS_MEASURE_PREPARE && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: {
            whiteSpace: 'inherit'
        },
        ref: measureWhiteSpaceRef
    }));
}
}),
"[project]/apps/web/node_modules/antd/es/typography/Base/EllipsisTooltip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
"use client";
;
;
const EllipsisTooltip = ({ enableEllipsis, isEllipsis, disabled, children, tooltipProps })=>{
    if (!tooltipProps?.title || !enableEllipsis) {
        return children;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...tooltipProps,
        disabled: !isEllipsis || disabled
    }, children);
};
if ("TURBOPACK compile-time truthy", 1) {
    EllipsisTooltip.displayName = 'EllipsisTooltip';
}
const __TURBOPACK__default__export__ = EllipsisTooltip;
}),
"[project]/apps/web/node_modules/antd/es/typography/Base/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EditOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/styleChecker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Editable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useCopyClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/useCopyClick.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/useMergedConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/usePrevious.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/useTooltipProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTypographySemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/hooks/useTypographySemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$CopyBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/CopyBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$Ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/Ellipsis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$EllipsisTooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/EllipsisTooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function wrapperDecorations({ mark, code, underline, delete: del, strong, keyboard, italic }, content) {
    let currentContent = content;
    function wrap(tag, needed) {
        if (!needed) {
            return;
        }
        currentContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](tag, {}, currentContent);
    }
    wrap('strong', strong);
    wrap('u', underline);
    wrap('del', del);
    wrap('code', code);
    wrap('mark', mark);
    wrap('kbd', keyboard);
    wrap('i', italic);
    return currentContent;
}
const ELLIPSIS_STR = '...';
const DECORATION_PROPS = [
    'delete',
    'mark',
    'code',
    'underline',
    'strong',
    'keyboard',
    'italic'
];
const Base = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, style, classNames, styles, direction: typographyDirection, type, disabled, children, ellipsis, editable, copyable, actions, component, title, onMouseEnter, onMouseLeave, ...restProps } = props;
    const [textLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Text');
    const typographyRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const editIconRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [mergedClassNames, mergedStyles, prefixCls, direction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTypographySemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypographySemantic"])(customizePrefixCls, classNames, styles, typographyDirection, props);
    const textProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, DECORATION_PROPS);
    // ========================== Editable ==========================
    const [enableEdit, editConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(editable);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(false, editConfig.editing);
    const { triggerType = [
        'icon'
    ] } = editConfig;
    const triggerEdit = (edit)=>{
        if (edit) {
            editConfig.onStart?.();
        }
        setEditing(edit);
    };
    // Focus edit icon when back
    const prevEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(editing);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "Base.useLayoutEffect": ()=>{
            if (!editing && prevEditing) {
                editIconRef.current?.focus();
            }
        }
    }["Base.useLayoutEffect"], [
        editing
    ]);
    const onEditClick = (e)=>{
        e?.preventDefault();
        triggerEdit(true);
    };
    const onEditChange = (value)=>{
        editConfig.onChange?.(value);
        triggerEdit(false);
    };
    const onEditCancel = ()=>{
        editConfig.onCancel?.();
        triggerEdit(false);
    };
    // ========================== Copyable ==========================
    const [enableCopy, copyConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(copyable);
    const { placement = 'end' } = actions ?? {};
    const { copied, copyLoading, onClick: onCopyClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useCopyClick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        copyConfig,
        children
    });
    // ========================== Ellipsis ==========================
    const [isLineClampSupport, setIsLineClampSupport] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTextOverflowSupport, setIsTextOverflowSupport] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isJsEllipsis, setIsJsEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isNativeEllipsis, setIsNativeEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isNativeVisible, setIsNativeVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [enableEllipsis, ellipsisConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useMergedConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ellipsis, {
        expandable: false,
        symbol: {
            "Base.useMergedConfig": (isExpanded)=>isExpanded ? textLocale?.collapse : textLocale?.expand
        }["Base.useMergedConfig"]
    });
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(ellipsisConfig.defaultExpanded || false, ellipsisConfig.expanded);
    const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === 'collapsible');
    // Shared prop to reduce bundle size
    const { rows = 1 } = ellipsisConfig;
    const needMeasureEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Base.useMemo[needMeasureEllipsis]": ()=>// Disable ellipsis
            mergedEnableEllipsis && (// Provide suffix
            ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
            ellipsisConfig.expandable || enableEdit || enableCopy)
    }["Base.useMemo[needMeasureEllipsis]"], [
        mergedEnableEllipsis,
        ellipsisConfig,
        enableEdit,
        enableCopy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "Base.useLayoutEffect": ()=>{
            if (enableEllipsis && !needMeasureEllipsis) {
                setIsLineClampSupport((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStyleSupport"])('webkitLineClamp'));
                setIsTextOverflowSupport((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStyleSupport"])('textOverflow'));
            }
        }
    }["Base.useLayoutEffect"], [
        needMeasureEllipsis,
        enableEllipsis
    ]);
    const [cssEllipsis, setCssEllipsis] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](mergedEnableEllipsis);
    const canUseCssEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Base.useMemo[canUseCssEllipsis]": ()=>{
            if (needMeasureEllipsis) {
                return false;
            }
            if (rows === 1) {
                return isTextOverflowSupport;
            }
            return isLineClampSupport;
        }
    }["Base.useMemo[canUseCssEllipsis]"], [
        needMeasureEllipsis,
        rows,
        isLineClampSupport,
        isTextOverflowSupport
    ]);
    // We use effect to change from css ellipsis to js ellipsis.
    // To make SSR still can see the ellipsis.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "Base.useLayoutEffect": ()=>{
            setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
        }
    }["Base.useLayoutEffect"], [
        canUseCssEllipsis,
        mergedEnableEllipsis
    ]);
    const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$hooks$2f$useTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ellipsisConfig.tooltip, editConfig.text, children);
    const needNativeEllipsisMeasure = cssEllipsis && !!tooltipProps.title;
    const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? needNativeEllipsisMeasure && isNativeEllipsis : isJsEllipsis);
    const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
    const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
    // >>>>> Expand
    const onExpandClick = (e, info)=>{
        setExpanded(info.expanded);
        ellipsisConfig.onExpand?.(e, info);
    };
    const [ellipsisWidth, setEllipsisWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [isHoveringOperations, setIsHoveringOperations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    const isHoveringTypographyRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const onResize = ({ offsetWidth })=>{
        setEllipsisWidth(offsetWidth);
    };
    // >>>>> JS Ellipsis
    const onJsEllipsis = (jsEllipsis)=>{
        setIsJsEllipsis(jsEllipsis);
        // Trigger if changed
        if (isJsEllipsis !== jsEllipsis) {
            ellipsisConfig.onEllipsis?.(jsEllipsis);
        }
    };
    // >>>>> Native ellipsis
    const measureNativeEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Base.useCallback[measureNativeEllipsis]": ()=>{
            const textEle = typographyRef.current;
            if (enableEllipsis && needNativeEllipsisMeasure && textEle) {
                const currentEllipsis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEleEllipsis"])(textEle);
                setIsNativeEllipsis({
                    "Base.useCallback[measureNativeEllipsis]": (prev)=>prev === currentEllipsis ? prev : currentEllipsis
                }["Base.useCallback[measureNativeEllipsis]"]);
            }
        }
    }["Base.useCallback[measureNativeEllipsis]"], [
        enableEllipsis,
        needNativeEllipsisMeasure
    ]);
    // Keep the result current while the Typography is hovered, but do not force every
    // Typography instance to read layout during a bulk render or resize.
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Base.useEffect": ()=>{
            if (isHoveringTypographyRef.current) {
                measureNativeEllipsis();
            }
        }
    }["Base.useEffect"], [
        measureNativeEllipsis,
        children,
        cssLineClamp,
        isNativeVisible,
        ellipsisWidth
    ]);
    // https://github.com/ant-design/ant-design/issues/36786
    // Use IntersectionObserver to check if element is invisible
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Base.useEffect": ()=>{
            const textEle = typographyRef.current;
            if (typeof IntersectionObserver === 'undefined' || !textEle || !needNativeEllipsisMeasure || !mergedEnableEllipsis) {
                return;
            }
            const observer = new IntersectionObserver({
                "Base.useEffect": ()=>{
                    setIsNativeVisible(!!textEle.offsetParent);
                }
            }["Base.useEffect"]);
            observer.observe(textEle);
            return ({
                "Base.useEffect": ()=>{
                    observer.disconnect();
                }
            })["Base.useEffect"];
        }
    }["Base.useEffect"], [
        needNativeEllipsisMeasure,
        mergedEnableEllipsis
    ]);
    // ========================== Tooltip ===========================
    const topAriaLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Base.useMemo[topAriaLabel]": ()=>{
            if (!enableEllipsis || cssEllipsis) {
                return undefined;
            }
            return [
                editConfig.text,
                children,
                title,
                tooltipProps.title
            ].find(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidText"]);
        }
    }["Base.useMemo[topAriaLabel]"], [
        enableEllipsis,
        cssEllipsis,
        title,
        tooltipProps.title,
        isMergedEllipsis,
        editConfig.text
    ]);
    // =========================== Render ===========================
    // >>>>>>>>>>> Editing input
    if (editing) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Editable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: editConfig.text ?? (typeof children === 'string' ? children : ''),
            onSave: onEditChange,
            onCancel: onEditCancel,
            onEnd: editConfig.onEnd,
            prefixCls: prefixCls,
            className: className,
            style: style,
            direction: direction,
            component: component,
            maxLength: editConfig.maxLength,
            autoSize: editConfig.autoSize,
            enterIcon: editConfig.enterIcon,
            classNames: mergedClassNames,
            styles: mergedStyles
        });
    }
    // >>>>>>>>>>> Typography
    // Expand
    const renderExpand = ()=>{
        const { expandable, symbol } = ellipsisConfig;
        return expandable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
            type: "button",
            key: "expand",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-${expanded ? 'collapse' : 'expand'}`, mergedClassNames.action),
            style: mergedStyles.action,
            onClick: (e)=>onExpandClick(e, {
                    expanded: !expanded
                }),
            "aria-label": expanded ? textLocale.collapse : textLocale?.expand
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(symbol) ? symbol(expanded) : symbol) : null;
    };
    // Edit
    const renderEdit = ()=>{
        if (!enableEdit) {
            return;
        }
        const { icon, tooltip, tabIndex } = editConfig;
        const editTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(tooltip)[0] || textLocale?.edit;
        const ariaLabel = typeof editTitle === 'string' ? editTitle : '';
        return triggerType.includes('icon') ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: "edit",
            title: tooltip === false ? '' : editTitle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
            type: "button",
            ref: editIconRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-edit`, mergedClassNames.action),
            style: mergedStyles.action,
            onClick: onEditClick,
            "aria-label": ariaLabel,
            tabIndex: tabIndex
        }, icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            role: "button"
        }))) : null;
    };
    // Copy
    const renderCopy = ()=>{
        if (!enableCopy) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$CopyBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: "copy",
            ...copyConfig,
            prefixCls: prefixCls,
            copied: copied,
            locale: textLocale,
            onCopy: onCopyClick,
            loading: copyLoading,
            iconOnly: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(children),
            className: mergedClassNames.action,
            style: mergedStyles.action
        });
    };
    const renderOperations = (canEllipsis)=>{
        const expandNode = canEllipsis && renderExpand();
        const editNode = renderEdit();
        const copyNode = renderCopy();
        if (!expandNode && !editNode && !copyNode) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            key: "operations",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-actions`, mergedClassNames.actions, {
                [`${prefixCls}-actions-start`]: placement === 'start'
            }),
            style: mergedStyles.actions,
            onMouseEnter: ()=>setIsHoveringOperations(true, true),
            onMouseLeave: ()=>setIsHoveringOperations(false, {
                    // Delay 500ms for better user experience
                    ms: 500
                })
        }, expandNode, editNode, copyNode);
    };
    const renderEllipsis = (canEllipsis)=>[
            canEllipsis && !expanded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                "aria-hidden": true,
                key: "ellipsis"
            }, ELLIPSIS_STR),
            ellipsisConfig.suffix
        ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onResize,
        disabled: !mergedEnableEllipsis
    }, (resizeRef)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$EllipsisTooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            tooltipProps: tooltipProps,
            enableEllipsis: mergedEnableEllipsis,
            isEllipsis: isMergedEllipsis,
            disabled: isHoveringOperations
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTypography"], {
            onMouseEnter: (e)=>{
                isHoveringTypographyRef.current = true;
                measureNativeEllipsis();
                onMouseEnter?.(e);
            },
            onMouseLeave: (e)=>{
                isHoveringTypographyRef.current = false;
                onMouseLeave?.(e);
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-ellipsis`]: enableEllipsis,
                [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
                [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp,
                [`${prefixCls}-link`]: component === 'a'
            }, className),
            classNames: mergedClassNames,
            styles: mergedStyles,
            prefixCls: prefixCls,
            style: {
                ...style,
                WebkitLineClamp: cssLineClamp ? rows : undefined
            },
            component: component,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(resizeRef, typographyRef, ref),
            direction: direction,
            onClick: triggerType.includes('text') ? onEditClick : undefined,
            "aria-label": topAriaLabel?.toString(),
            title: title,
            ...textProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$Ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            enableMeasure: mergedEnableEllipsis && !cssEllipsis,
            text: children,
            rows: rows,
            width: ellipsisWidth,
            onEllipsis: onJsEllipsis,
            expanded: expanded,
            measureDeps: [
                placement
            ],
            miscDeps: [
                copied,
                expanded,
                copyLoading,
                enableEdit,
                enableCopy,
                placement,
                textLocale
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(DECORATION_PROPS.map((key)=>props[key])))
        }, (node, canEllipsis)=>wrapperDecorations(props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, placement === 'start' ? renderOperations(canEllipsis) : null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                key: "show-content",
                "aria-hidden": true
            }, node) : node, renderEllipsis(canEllipsis), placement === 'start' ? null : renderOperations(canEllipsis)))))));
});
const __TURBOPACK__default__export__ = Base;
}),
"[project]/apps/web/node_modules/antd/es/typography/Link.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Link = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { ellipsis, rel, children, // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
    navigate: _navigate, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Link');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(ellipsis), 'usage', '`ellipsis` only supports boolean value.') : "TURBOPACK unreachable";
    }
    const mergedProps = {
        ...restProps,
        rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...mergedProps,
        ref: ref,
        ellipsis: !!ellipsis,
        component: "a"
    }, children);
});
const __TURBOPACK__default__export__ = Link;
}),
"[project]/apps/web/node_modules/antd/es/typography/Paragraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/index.js [app-client] (ecmascript)");
"use client";
;
;
const Paragraph = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { children, ...restProps } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        component: "div"
    }, children);
});
const __TURBOPACK__default__export__ = Paragraph;
}),
"[project]/apps/web/node_modules/antd/es/typography/Text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Text = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { ellipsis, children, ...restProps } = props;
    const mergedEllipsis = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Text.useMemo[mergedEllipsis]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(ellipsis)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(ellipsis, [
                    'expandable',
                    'rows'
                ]);
            }
            return ellipsis;
        }
    }["Text.useMemo[mergedEllipsis]"], [
        ellipsis
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Text');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(ellipsis) || !('expandable' in ellipsis) && !('rows' in ellipsis), 'usage', '`ellipsis` do not support `expandable` or `rows` props.') : "TURBOPACK unreachable";
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        ellipsis: mergedEllipsis,
        component: "span"
    }, children);
});
const __TURBOPACK__default__export__ = Text;
}),
"[project]/apps/web/node_modules/antd/es/typography/Title.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Base/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const TITLE_ELE_LIST = [
    1,
    2,
    3,
    4,
    5
];
const Title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { level = 1, children, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Typography.Title');
        ("TURBOPACK compile-time truthy", 1) ? warning(TITLE_ELE_LIST.includes(level), 'usage', 'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.') : "TURBOPACK unreachable";
    }
    const component = TITLE_ELE_LIST.includes(level) ? `h${level}` : `h1`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Base$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...restProps,
        component: component
    }, children);
});
const __TURBOPACK__default__export__ = Title;
}),
"[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Paragraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Title.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/Typography.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Typography = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Typography.Text = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Typography.Link = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Typography.Title = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Typography.Paragraph = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Typography;
}),
"[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Typography",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/spin/Indicator/Progress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const viewSize = 100;
const borderWidth = viewSize / 5;
const radius = viewSize / 2 - borderWidth / 2;
const circumference = radius * 2 * Math.PI;
const position = 50;
const CustomCircle = (props)=>{
    const { dotClassName, style, hasCircleCls } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("circle", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${dotClassName}-circle`, {
            [`${dotClassName}-circle-bg`]: hasCircleCls
        }),
        r: radius,
        cx: position,
        cy: position,
        strokeWidth: borderWidth,
        style: style
    });
};
const Progress = ({ percent, prefixCls })=>{
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    const [render, setRender] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // ==================== Visible =====================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "Progress.useLayoutEffect": ()=>{
            if (percent !== 0) {
                setRender(true);
            }
        }
    }["Progress.useLayoutEffect"], [
        percent
    ]);
    // ==================== Progress ====================
    const safePtg = Math.max(Math.min(percent, 100), 0);
    // ===================== Render =====================
    if (!render) {
        return null;
    }
    const circleStyle = {
        strokeDashoffset: `${circumference / 4}`,
        strokeDasharray: `${circumference * safePtg / 100} ${circumference * (100 - safePtg) / 100}`
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(holderClassName, `${dotClassName}-progress`, {
            [hideClassName]: safePtg <= 0
        })
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: `0 0 ${viewSize} ${viewSize}`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": safePtg
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CustomCircle, {
        dotClassName: dotClassName,
        hasCircleCls: true
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CustomCircle, {
        dotClassName: dotClassName,
        style: circleStyle
    })));
};
const __TURBOPACK__default__export__ = Progress;
}),
"[project]/apps/web/node_modules/antd/es/spin/Indicator/Looper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Looper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/Indicator/Progress.js [app-client] (ecmascript)");
"use client";
;
;
;
function Looper(props) {
    const { prefixCls, percent = 0, className, style } = props;
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    // ===================== Render =====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(holderClassName, className, percent > 0 && hideClassName),
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(dotClassName, `${prefixCls}-dot-spin`)
    }, [
        1,
        2,
        3,
        4
    ].map((i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("i", {
            className: `${prefixCls}-dot-item`,
            key: i
        })))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent
    }));
}
}),
"[project]/apps/web/node_modules/antd/es/spin/Indicator/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Indicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/Indicator/Looper.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Indicator(props) {
    const { prefixCls, indicator, percent, className, style } = props;
    const dotClassName = `${prefixCls}-dot`;
    if (indicator && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](indicator)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(indicator, (currentProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(currentProps.className, dotClassName, className),
                style: {
                    ...currentProps.style,
                    ...style
                },
                percent
            }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent,
        className: className,
        style: style
    });
}
}),
"[project]/apps/web/node_modules/antd/es/spin/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const antSpinMove = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSpinMove', {
    to: {
        opacity: 1
    }
});
const antRotate = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antRotate', {
    to: {
        transform: 'rotate(405deg)'
    }
});
// =============================== Spin ===============================
const genSpinStyle = (token)=>{
    const { componentCls } = token;
    const sectionCls = `${componentCls}-section`;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            '&-rtl': {
                direction: 'rtl'
            },
            // ========================== Section ===========================
            [`&${sectionCls}, > ${sectionCls}`]: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: token.paddingSM,
                color: token.colorPrimary
            },
            [`&${sectionCls}`]: {
                display: 'inline-flex'
            },
            [`> ${sectionCls}`]: {
                position: 'absolute',
                top: '50%',
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translate(-50%, -50%)',
                zIndex: 1
            },
            [`${componentCls}-description`]: {
                fontSize: token.fontSize,
                lineHeight: 1
            },
            // ========================= Container ==========================
            [`${componentCls}-container`]: {
                position: 'relative',
                transition: `opacity ${token.motionDurationSlow}`,
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: '100%',
                    height: '100%',
                    background: token.colorBgContainer,
                    opacity: 0,
                    transition: `all ${token.motionDurationSlow}`,
                    content: '""',
                    pointerEvents: 'none'
                }
            },
            // ========================== Spinning ==========================
            '&-spinning': {
                [`${componentCls}-description`]: {
                    textShadow: `0 0px 5px ${token.colorBgContainer}`
                },
                [`${componentCls}-container`]: {
                    clear: 'both',
                    opacity: 0.5,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    '&::after': {
                        opacity: 0.4,
                        pointerEvents: 'auto'
                    }
                }
            },
            // ========================= Fullscreen =========================
            '&-fullscreen': {
                position: 'fixed',
                inset: 0,
                backgroundColor: token.colorBgMask,
                zIndex: token.zIndexPopupBase,
                opacity: 0,
                pointerEvents: 'none',
                transition: `all ${token.motionDurationMid}`,
                [`&${componentCls}-spinning`]: {
                    opacity: 1,
                    pointerEvents: 'auto'
                },
                [`> ${sectionCls}`]: {
                    color: token.colorWhite,
                    [`${componentCls}-description`]: {
                        color: token.colorTextLightSolid
                    }
                }
            }
        }
    };
};
// ============================ Indicator =============================
const genIndicatorStyle = (token)=>{
    const { componentCls, antCls, motionDurationSlow } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'spin');
    return {
        [componentCls]: {
            [varName('dot-holder-size')]: token.dotSize,
            [varName('dot-item-size')]: `calc((${varRef('dot-holder-size')} - ${token.marginXXS} / 2) / 2)`,
            [`${componentCls}-dot`]: {
                // >>> holder
                '&-holder': {
                    width: '1em',
                    height: '1em',
                    fontSize: varRef('dot-holder-size'),
                    display: 'inline-block',
                    transition: [
                        'transform',
                        'opacity'
                    ].map((prop)=>`${prop} ${motionDurationSlow} ease`).join(', '),
                    transformOrigin: '50% 50%',
                    lineHeight: 1,
                    '&-hidden': {
                        transform: 'scale(0.3)',
                        opacity: 0
                    }
                },
                // >>> holder > dot
                position: 'relative',
                display: 'inline-block',
                fontSize: varRef('dot-holder-size'),
                width: '1em',
                height: '1em',
                '&-spin': {
                    transform: 'rotate(45deg)',
                    animationName: antRotate,
                    animationDuration: '1.2s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                },
                // >>> holder > dot > item
                '&-item': {
                    position: 'absolute',
                    display: 'block',
                    width: varRef('dot-item-size'),
                    height: varRef('dot-item-size'),
                    background: 'currentColor',
                    borderRadius: '100%',
                    transform: 'scale(0.75)',
                    transformOrigin: '50% 50%',
                    opacity: 0.3,
                    animationName: antSpinMove,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDirection: 'alternate',
                    '&:nth-child(1)': {
                        top: 0,
                        insetInlineStart: 0,
                        animationDelay: '0s'
                    },
                    '&:nth-child(2)': {
                        top: 0,
                        insetInlineEnd: 0,
                        animationDelay: '0.4s'
                    },
                    '&:nth-child(3)': {
                        insetInlineEnd: 0,
                        bottom: 0,
                        animationDelay: '0.8s'
                    },
                    '&:nth-child(4)': {
                        bottom: 0,
                        insetInlineStart: 0,
                        animationDelay: '1.2s'
                    }
                },
                // ========================= Progress =========================
                '&-progress': {
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    transform: 'translateX(-50%)'
                },
                '&-circle': {
                    strokeLinecap: 'round',
                    transition: [
                        'stroke-dashoffset',
                        'stroke-dasharray',
                        'stroke',
                        'stroke-width',
                        'opacity'
                    ].map((item)=>`${item} ${motionDurationSlow} ease`).join(','),
                    fillOpacity: 0,
                    stroke: 'currentcolor'
                },
                '&-circle-bg': {
                    stroke: token.colorFillSecondary
                }
            }
        }
    };
};
// =============================== Size ===============================
const genSizeStyle = (token)=>{
    const { componentCls } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(token.antCls, 'spin');
    return {
        [componentCls]: {
            '&-sm': {
                [varName('dot-holder-size')]: token.dotSizeSM
            },
            '&-lg': {
                [varName('dot-holder-size')]: token.dotSizeLG
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { controlHeightLG, controlHeight } = token;
    return {
        contentHeight: 400,
        dotSize: controlHeightLG / 2,
        dotSizeSM: controlHeightLG * 0.35,
        dotSizeLG: controlHeight
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Spin', (token)=>{
    const spinToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spinDotDefault: token.colorTextDescription
    });
    return [
        genSpinStyle(spinToken),
        genIndicatorStyle(spinToken),
        genSizeStyle(spinToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/spin/usePercent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePercent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AUTO_INTERVAL = 200;
const STEP_BUCKETS = [
    [
        30,
        0.05
    ],
    [
        70,
        0.03
    ],
    [
        96,
        0.01
    ]
];
function usePercent(spinning, percent) {
    const [mockPercent, setMockPercent] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const mockIntervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const isAuto = percent === 'auto';
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePercent.useEffect": ()=>{
            if (isAuto && spinning) {
                setMockPercent(0);
                mockIntervalRef.current = setInterval({
                    "usePercent.useEffect": ()=>{
                        setMockPercent({
                            "usePercent.useEffect": (prev)=>{
                                const restPTG = 100 - prev;
                                for(let i = 0; i < STEP_BUCKETS.length; i += 1){
                                    const [limit, stepPtg] = STEP_BUCKETS[i];
                                    if (prev <= limit) {
                                        return prev + restPTG * stepPtg;
                                    }
                                }
                                return prev;
                            }
                        }["usePercent.useEffect"]);
                    }
                }["usePercent.useEffect"], AUTO_INTERVAL);
            }
            return ({
                "usePercent.useEffect": ()=>{
                    if (mockIntervalRef.current) {
                        clearInterval(mockIntervalRef.current);
                        mockIntervalRef.current = null;
                    }
                }
            })["usePercent.useEffect"];
        }
    }["usePercent.useEffect"], [
        isAuto,
        spinning
    ]);
    return isAuto ? mockPercent : percent;
}
}),
"[project]/apps/web/node_modules/antd/es/spin/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/throttle-debounce/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/Indicator/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/usePercent.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Render indicator
let defaultIndicator;
function shouldDelay(spinning, delay) {
    return !!spinning && !!delay && !Number.isNaN(Number(delay));
}
const Spin = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, spinning: customSpinning = true, delay = 0, className, rootClassName, size, tip, description, wrapperClassName, style, children, fullscreen = false, indicator, percent, classNames, styles, ...restProps } = props;
    const { getPrefixCls, direction, indicator: contextIndicator, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('spin');
    const prefixCls = getPrefixCls('spin', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [spinning, setSpinning] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Spin.useState": ()=>customSpinning && !shouldDelay(customSpinning, delay)
    }["Spin.useState"]);
    const mergedPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(spinning, percent);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Spin.useEffect": ()=>{
            if (customSpinning) {
                const showSpinning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])(delay, {
                    "Spin.useEffect.showSpinning": ()=>{
                        setSpinning(true);
                    }
                }["Spin.useEffect.showSpinning"]);
                showSpinning();
                return ({
                    "Spin.useEffect": ()=>{
                        showSpinning?.cancel?.();
                    }
                })["Spin.useEffect"];
            }
            setSpinning(false);
        }
    }["Spin.useEffect"], [
        delay,
        customSpinning
    ]);
    // ======================= Size ======================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Spin.useSize[mergedSize]": (ctx)=>size ?? ctx
    }["Spin.useSize[mergedSize]"]);
    // ======================= Description ======================
    const mergedDescription = description ?? tip;
    // =============== Merged Props for Semantic ================
    const mergedProps = {
        ...props,
        size: mergedSize,
        spinning,
        tip: mergedDescription,
        description: mergedDescription,
        fullscreen,
        children,
        percent: mergedPercent
    };
    // ========================= Style ==========================
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles
    ], {
        props: mergedProps
    });
    // ======================== Warning =========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Spin');
        warning.deprecated(size !== 'default', 'size="default"', 'size="medium"');
        warning.deprecated(!tip, 'tip', 'description');
        warning.deprecated(!wrapperClassName, 'wrapperClassName', 'classNames.root');
        warning.deprecated(!(mergedClassNames?.tip || mergedStyles?.tip), 'classNames.tip and styles.tip', 'classNames.description and styles.description');
        warning.deprecated(!(mergedClassNames?.mask || mergedStyles?.mask), 'classNames.mask and styles.mask', 'classNames.root and styles.root');
    }
    // ======================= Indicator ========================
    const mergedIndicator = indicator ?? contextIndicator ?? defaultIndicator;
    // ========================= Render =========================
    const hasChildren = typeof children !== 'undefined';
    const isNested = hasChildren || fullscreen;
    const indicatorNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.indicator),
        style: mergedStyles.indicator,
        prefixCls: prefixCls,
        indicator: mergedIndicator,
        percent: mergedPercent
    }), mergedDescription && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-description`, mergedClassNames.tip, mergedClassNames.description),
        style: {
            ...mergedStyles.tip,
            ...mergedStyles.description
        }
    }, mergedDescription));
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Spin.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Spin.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
            [`${prefixCls}-sm`]: mergedSize === 'small',
            [`${prefixCls}-lg`]: mergedSize === 'large',
            [`${prefixCls}-spinning`]: spinning,
            [`${prefixCls}-rtl`]: direction === 'rtl',
            [`${prefixCls}-fullscreen`]: fullscreen
        }, rootClassName, mergedClassNames.root, fullscreen && mergedClassNames.mask, isNested ? wrapperClassName : [
            `${prefixCls}-section`,
            mergedClassNames.section
        ], contextClassName, className, hashId, cssVarCls),
        style: {
            ...mergedStyles.root,
            ...!isNested ? mergedStyles.section : {},
            ...fullscreen ? mergedStyles.mask : {},
            ...style
        },
        "aria-live": "polite",
        "aria-busy": spinning,
        ...restProps
    }, spinning && (isNested ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-section`, mergedClassNames.section),
        style: mergedStyles.section
    }, indicatorNode) : indicatorNode), hasChildren && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-container`, mergedClassNames.container),
        style: mergedStyles.container
    }, children));
});
Spin.setDefaultIndicator = (indicator)=>{
    defaultIndicator = indicator;
};
if ("TURBOPACK compile-time truthy", 1) {
    Spin.displayName = 'Spin';
}
const __TURBOPACK__default__export__ = Spin;
}),
"[project]/apps/web/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0rrk_antd_es_1_sax8e._.js.map