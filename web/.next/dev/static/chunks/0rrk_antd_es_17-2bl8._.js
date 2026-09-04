(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/antd/es/layout/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutContext",
    ()=>LayoutContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const LayoutContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    siderHook: {
        addSider: ()=>null,
        removeSider: ()=>null
    }
});
}),
"[project]/apps/web/node_modules/antd/es/layout/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_TOKENS",
    ()=>DEPRECATED_TOKENS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genLayoutStyle = (token)=>{
    const { antCls, // .ant
    componentCls, // .ant-layout
    colorText, footerBg, headerHeight, headerPadding, headerColor, footerPadding, fontSize, bodyBg, headerBg } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flex: 'auto',
            flexDirection: 'column',
            /* fix firefox can't set height smaller than content on flex item */ minHeight: 0,
            background: bodyBg,
            '&, *': {
                boxSizing: 'border-box'
            },
            [`&${componentCls}-has-sider`]: {
                flexDirection: 'row',
                [`> ${componentCls}, > ${componentCls}-content`]: {
                    // https://segmentfault.com/a/1190000019498300
                    width: 0
                }
            },
            [`${componentCls}-header, &${componentCls}-footer`]: {
                flex: '0 0 auto'
            },
            // RTL
            '&-rtl': {
                direction: 'rtl'
            }
        },
        // ==================== Header ====================
        [`${componentCls}-header`]: {
            height: headerHeight,
            padding: headerPadding,
            color: headerColor,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerHeight),
            background: headerBg,
            // Other components/menu/style/index.less line:686
            // Integration with header element so menu items have the same height
            [`${antCls}-menu`]: {
                lineHeight: 'inherit'
            }
        },
        // ==================== Footer ====================
        [`${componentCls}-footer`]: {
            padding: footerPadding,
            color: colorText,
            fontSize,
            background: footerBg
        },
        // =================== Content ====================
        [`${componentCls}-content`]: {
            flex: 'auto',
            color: colorText,
            // fix firefox can't set height smaller than content on flex item
            minHeight: 0
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorBgLayout, controlHeight, controlHeightLG, colorText, controlHeightSM, marginXXS, colorTextLightSolid, colorBgContainer } = token;
    const paddingInline = controlHeightLG * 1.25;
    return {
        // Deprecated
        colorBgHeader: '#001529',
        colorBgBody: colorBgLayout,
        colorBgTrigger: '#002140',
        bodyBg: colorBgLayout,
        headerBg: '#001529',
        headerHeight: controlHeight * 2,
        headerPadding: `0 ${paddingInline}px`,
        headerColor: colorText,
        footerPadding: `${controlHeightSM}px ${paddingInline}px`,
        footerBg: colorBgLayout,
        siderBg: '#001529',
        triggerHeight: controlHeightLG + marginXXS * 2,
        triggerBg: '#002140',
        triggerColor: colorTextLightSolid,
        zeroTriggerWidth: controlHeightLG,
        zeroTriggerHeight: controlHeightLG,
        lightSiderBg: colorBgContainer,
        lightTriggerBg: colorBgContainer,
        lightTriggerColor: colorText
    };
};
const DEPRECATED_TOKENS = [
    [
        'colorBgBody',
        'bodyBg'
    ],
    [
        'colorBgHeader',
        'headerBg'
    ],
    [
        'colorBgTrigger',
        'triggerBg'
    ]
];
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Layout', genLayoutStyle, prepareComponentToken, {
    deprecatedTokens: DEPRECATED_TOKENS
});
}),
"[project]/apps/web/node_modules/antd/es/layout/style/sider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
const genSiderStyle = (token)=>{
    const { componentCls, siderBg, motionDurationMid, motionDurationSlow, antCls, triggerHeight, triggerColor, triggerBg, headerHeight, zeroTriggerWidth, zeroTriggerHeight, borderRadiusLG, lightSiderBg, lightTriggerColor, lightTriggerBg, bodyBg } = token;
    return {
        [componentCls]: {
            position: 'relative',
            // fix firefox can't set width smaller than content on flex item
            minWidth: 0,
            background: siderBg,
            transition: `all ${motionDurationMid}, background 0s`,
            '&-has-trigger': {
                paddingBottom: triggerHeight
            },
            '&-right': {
                order: 1
            },
            [`${componentCls}-children`]: {
                height: '100%',
                // Hack for fixing margin collapse bug
                // https://github.com/ant-design/ant-design/issues/7967
                // solution from https://stackoverflow.com/a/33132624/3040605
                marginTop: -0.1,
                paddingTop: 0.1,
                [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
                    width: 'auto'
                }
            },
            [`&-zero-width ${componentCls}-children`]: {
                overflow: 'hidden'
            },
            [`${componentCls}-trigger`]: {
                position: 'fixed',
                bottom: 0,
                zIndex: 1,
                height: triggerHeight,
                color: triggerColor,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(triggerHeight),
                textAlign: 'center',
                background: triggerBg,
                cursor: 'pointer',
                transition: `all ${motionDurationMid}`
            },
            [`${componentCls}-zero-width-trigger`]: {
                position: 'absolute',
                top: headerHeight,
                insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
                zIndex: 1,
                width: zeroTriggerWidth,
                height: zeroTriggerHeight,
                color: triggerColor,
                fontSize: token.fontSizeXL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: siderBg,
                borderRadius: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG)} 0`,
                cursor: 'pointer',
                transition: `background-color ${motionDurationSlow} ease`,
                '&::after': {
                    position: 'absolute',
                    inset: 0,
                    background: 'transparent',
                    transition: `all ${motionDurationSlow}`,
                    content: '""'
                },
                '&:hover::after': {
                    background: `rgba(255, 255, 255, 0.2)`
                },
                '&-right': {
                    insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
                    borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG)} 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG)}`
                }
            },
            // Light
            '&-light': {
                background: lightSiderBg,
                [`${componentCls}-trigger`]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg
                },
                [`${componentCls}-zero-width-trigger`]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${bodyBg}`,
                    // Safe to modify to any other color
                    borderInlineStart: 0
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Layout',
    'Sider'
], genSiderStyle, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    deprecatedTokens: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPRECATED_TOKENS"]
});
}),
"[project]/apps/web/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiderContext",
    ()=>SiderContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/BarsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/style/sider.js [app-client] (ecmascript)");
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
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
    xxxl: `1839.98px`
};
const isNumeric = (val)=>!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val));
const SiderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const generateId = (()=>{
    let i = 0;
    return (prefix = '')=>{
        i += 1;
        return `${prefix}${i}`;
    };
})();
const Sider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, trigger, children, defaultCollapsed = false, theme = 'dark', style = {}, collapsible = false, reverseArrow = false, width = 200, collapsedWidth = 80, zeroWidthTriggerStyle, breakpoint, onCollapse, onBreakpoint, classNames, styles, ...otherProps } = props;
    const { siderHook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutContext"]);
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('collapsed' in props ? props.collapsed : defaultCollapsed);
    const [below, setBelow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            if ('collapsed' in props) {
                setCollapsed(props.collapsed);
            }
        }
    }["Sider.useEffect"], [
        props.collapsed
    ]);
    const handleSetCollapsed = (value, type)=>{
        if (!('collapsed' in props)) {
            setCollapsed(value);
        }
        onCollapse?.(value, type);
    };
    const semanticProps = {
        ...props,
        collapsed,
        defaultCollapsed,
        theme,
        style,
        collapsible,
        reverseArrow,
        width,
        collapsedWidth,
        zeroWidthTriggerStyle,
        breakpoint,
        onCollapse,
        onBreakpoint
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        styles
    ], {
        props: semanticProps
    });
    // =========================== Prefix ===========================
    const { getPrefixCls, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ========================= Responsive =========================
    const responsiveHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    responsiveHandlerRef.current = (mql)=>{
        setBelow(mql.matches);
        onBreakpoint?.(mql.matches);
        if (collapsed !== mql.matches) {
            handleSetCollapsed(mql.matches, 'responsive');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            function responsiveHandler(mql) {
                return responsiveHandlerRef.current?.(mql);
            }
            let mql;
            if (typeof window?.matchMedia !== 'undefined' && breakpoint && breakpoint in dimensionMaxMap) {
                mql = window.matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(mql?.addEventListener)) {
                    mql.addEventListener('change', responsiveHandler);
                }
                responsiveHandler(mql);
            }
            return ({
                "Sider.useEffect": ()=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(mql?.removeEventListener)) {
                        mql.removeEventListener('change', responsiveHandler);
                    }
                }
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], [
        breakpoint
    ]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            const uniqueId = generateId('ant-sider-');
            siderHook.addSider(uniqueId);
            return ({
                "Sider.useEffect": ()=>siderHook.removeSider(uniqueId)
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], []);
    const toggle = ()=>{
        handleSetCollapsed(!collapsed, 'clickTrigger');
    };
    const divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(otherProps, [
        'collapsed'
    ]);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = Number.parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        onClick: toggle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
        style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const reverseIcon = direction === 'rtl' === !reverseArrow;
    const iconObj = {
        expanded: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        collapsed: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-trigger`,
        onClick: toggle,
        style: {
            width: siderWidth
        }
    }, trigger || defaultTrigger) : null;
    const divStyle = {
        ...style,
        flex: `0 0 ${siderWidth}`,
        maxWidth: siderWidth,
        // Fix width transition bug in IE11
        minWidth: siderWidth,
        // https://github.com/ant-design/ant-design/issues/6349
        width: siderWidth
    };
    const siderCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-${theme}`, {
        [`${prefixCls}-collapsed`]: !!collapsed,
        [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
        [`${prefixCls}-below`]: !!below,
        [`${prefixCls}-zero-width`]: Number.parseFloat(siderWidth) === 0
    }, className, mergedClassNames.root, hashId, cssVarCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Sider.useMemo[contextValue]": ()=>({
                siderCollapsed: collapsed
            })
    }["Sider.useMemo[contextValue]"], [
        collapsed
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SiderContext.Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("aside", {
        className: siderCls,
        ...divProps,
        style: {
            ...mergedStyles.root,
            ...divStyle
        },
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-children`, mergedClassNames.body),
        style: mergedStyles.body
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null));
});
if ("TURBOPACK compile-time truthy", 1) {
    Sider.displayName = 'Sider';
}
const __TURBOPACK__default__export__ = Sider;
}),
"[project]/apps/web/node_modules/antd/es/layout/hooks/useHasSider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useHasSider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)");
;
;
function useHasSider(siders, children, hasSider) {
    if (typeof hasSider === 'boolean') {
        return hasSider;
    }
    if (siders.length) {
        return true;
    }
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    return childNodes.some((node)=>node.type === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}),
"[project]/apps/web/node_modules/antd/es/layout/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Footer",
    ()=>Footer,
    "Header",
    ()=>Header,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$hooks$2f$useHasSider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/hooks/useHasSider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/style/index.js [app-client] (ecmascript)");
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
const generator = ({ suffixCls, tagName, displayName })=>{
    return (Component)=>{
        const Adapter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
                ref: ref,
                suffixCls: suffixCls,
                tagName: tagName,
                ...props
            }));
        if ("TURBOPACK compile-time truthy", 1) {
            Adapter.displayName = displayName;
        }
        return Adapter;
    };
};
const Basic = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, suffixCls, className, tagName: TagName, ...others } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('layout', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](TagName, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
        ref: ref,
        ...others
    });
});
const BasicLayout = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [siders, setSiders] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const { prefixCls: customizePrefixCls, className, rootClassName, children, hasSider, tagName: Tag, style, ...others } = props;
    const passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(others, [
        'suffixCls'
    ]);
    const { getPrefixCls, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('layout');
    const prefixCls = getPrefixCls('layout', customizePrefixCls);
    const mergedHasSider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$hooks$2f$useHasSider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(siders, children, hasSider);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-has-sider`]: mergedHasSider,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, contextClassName, className, rootClassName, hashId, cssVarCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "BasicLayout.useMemo[contextValue]": ()=>({
                siderHook: {
                    addSider: ({
                        "BasicLayout.useMemo[contextValue]": (id)=>{
                            setSiders({
                                "BasicLayout.useMemo[contextValue]": (prev)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prev), [
                                        id
                                    ])
                            }["BasicLayout.useMemo[contextValue]"]);
                        }
                    })["BasicLayout.useMemo[contextValue]"],
                    removeSider: ({
                        "BasicLayout.useMemo[contextValue]": (id)=>{
                            setSiders({
                                "BasicLayout.useMemo[contextValue]": (prev)=>prev.filter({
                                        "BasicLayout.useMemo[contextValue]": (currentId)=>currentId !== id
                                    }["BasicLayout.useMemo[contextValue]"])
                            }["BasicLayout.useMemo[contextValue]"]);
                        }
                    })["BasicLayout.useMemo[contextValue]"]
                }
            })
    }["BasicLayout.useMemo[contextValue]"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutContext"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Tag, {
        ref: ref,
        className: classString,
        style: {
            ...contextStyle,
            ...style
        },
        ...passedProps
    }, children));
});
const Layout = generator({
    tagName: 'div',
    displayName: 'Layout'
})(BasicLayout);
const Header = generator({
    suffixCls: 'header',
    tagName: 'header',
    displayName: 'Header'
})(Basic);
const Footer = generator({
    suffixCls: 'footer',
    tagName: 'footer',
    displayName: 'Footer'
})(Basic);
const Content = generator({
    suffixCls: 'content',
    tagName: 'main',
    displayName: 'Content'
})(Basic);
;
const __TURBOPACK__default__export__ = Layout;
}),
"[project]/apps/web/node_modules/antd/es/layout/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)");
"use client";
;
;
const Layout = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Layout.Header = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"];
Layout.Footer = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"];
Layout.Content = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"];
Layout.Sider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Layout._InternalSiderContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiderContext"];
const __TURBOPACK__default__export__ = Layout;
}),
"[project]/apps/web/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/badge/SingleNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
const UnitNumber = (props)=>{
    const { prefixCls, value, current, offset = 0 } = props;
    let style;
    if (offset) {
        style = {
            position: 'absolute',
            top: `${offset}00%`,
            left: 0
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-only-unit`, {
            current
        })
    }, value);
};
function getOffset(start, end, unit) {
    let index = start;
    let offset = 0;
    while((index + 10) % 10 !== end){
        index += unit;
        offset += unit;
    }
    return offset;
}
const SingleNumber = (props)=>{
    const { prefixCls, count: originCount, value: originValue } = props;
    const value = Number(originValue);
    const count = Math.abs(originCount);
    const [prevValue, setPrevValue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](value);
    const [prevCount, setPrevCount] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](count);
    // ============================= Events =============================
    const onTransitionEnd = ()=>{
        setPrevValue(value);
        setPrevCount(count);
    };
    // Fallback if transition events are not supported
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SingleNumber.useEffect": ()=>{
            const timer = setTimeout(onTransitionEnd, 1000);
            return ({
                "SingleNumber.useEffect": ()=>clearTimeout(timer)
            })["SingleNumber.useEffect"];
        }
    }["SingleNumber.useEffect"], [
        value
    ]);
    // ============================= Render =============================
    // Render unit list
    let unitNodes;
    let offsetStyle;
    if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
        // Nothing to change
        unitNodes = [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](UnitNumber, {
                ...props,
                key: value,
                current: true
            })
        ];
        offsetStyle = {
            transition: 'none'
        };
    } else {
        unitNodes = [];
        // Fill basic number units
        const end = value + 10;
        const unitNumberList = [];
        for(let index = value; index <= end; index += 1){
            unitNumberList.push(index);
        }
        const unit = prevCount < count ? 1 : -1;
        // Fill with number unit nodes
        const prevIndex = unitNumberList.findIndex((n)=>n % 10 === prevValue);
        // Cut list
        const cutUnitNumberList = unit < 0 ? unitNumberList.slice(0, prevIndex + 1) : unitNumberList.slice(prevIndex);
        unitNodes = cutUnitNumberList.map((n, index)=>{
            const singleUnit = n % 10;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](UnitNumber, {
                ...props,
                key: n,
                value: singleUnit,
                offset: unit < 0 ? index - prevIndex : index,
                current: index === prevIndex
            });
        });
        // Calculate container offset value
        offsetStyle = {
            transform: `translateY(${-getOffset(prevValue, value, unit)}00%)`
        };
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-only`,
        style: offsetStyle,
        onTransitionEnd: onTransitionEnd
    }, unitNodes);
};
const __TURBOPACK__default__export__ = SingleNumber;
}),
"[project]/apps/web/node_modules/antd/es/badge/ScrollNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$SingleNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/SingleNumber.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ScrollNumber = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, count, className, motionClassName, style, title, show, component: Component = 'sup', children, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('scroll-number', customizePrefixCls);
    // ============================ Render ============================
    const newProps = {
        ...restProps,
        'data-show': show,
        style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, motionClassName),
        title: title
    };
    // Only integer need motion
    let numberNodes = count;
    if (count && Number(count) % 1 === 0) {
        const numberList = String(count).split('');
        numberNodes = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bdi", null, numberList.map((num, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$SingleNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                count: Number(count),
                value: num,
                // eslint-disable-next-line react/no-array-index-key
                key: numberList.length - i
            })));
    }
    // allow specify the border
    // mock border-color by box-shadow for compatible with old usage:
    // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
    if (style?.borderColor) {
        newProps.style = {
            ...style,
            boxShadow: `0 0 0 1px ${style.borderColor} inset`
        };
    }
    if (children) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-custom-component`, oriProps?.className, motionClassName)
            }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
        ...newProps,
        ref: ref
    }, numberNodes);
});
const __TURBOPACK__default__export__ = ScrollNumber;
}),
"[project]/apps/web/node_modules/antd/es/badge/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
const antStatusProcessing = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antStatusProcessing', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0.5
    },
    '100%': {
        transform: 'scale(2.4)',
        opacity: 0
    }
});
const antZoomBadgeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBadgeIn', {
    '0%': {
        transform: 'scale(0) translate(50%, -50%)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1) translate(50%, -50%)'
    }
});
const antZoomBadgeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBadgeOut', {
    '0%': {
        transform: 'scale(1) translate(50%, -50%)'
    },
    '100%': {
        transform: 'scale(0) translate(50%, -50%)',
        opacity: 0
    }
});
const antNoWrapperZoomBadgeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antNoWrapperZoomBadgeIn', {
    '0%': {
        transform: 'scale(0)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)'
    }
});
const antNoWrapperZoomBadgeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antNoWrapperZoomBadgeOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0)',
        opacity: 0
    }
});
const antBadgeLoadingCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antBadgeLoadingCircle', {
    '0%': {
        transformOrigin: '50%'
    },
    '100%': {
        transform: 'translate(50%, -50%) rotate(360deg)',
        transformOrigin: '50%'
    }
});
const genSharedBadgeStyle = (token)=>{
    const { componentCls, iconCls, antCls, badgeShadowSize, textFontSize, textFontSizeSM, statusSize, dotSize, textFontWeight, indicatorHeight, indicatorHeightSM, marginXS, calc } = token;
    const numberPrefixCls = `${antCls}-scroll-number`;
    const colorPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
            [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
                background: darkColor,
                [`&:not(${componentCls}-count)`]: {
                    color: darkColor
                },
                'a:hover &': {
                    background: darkColor
                }
            }
        }));
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'inline-block',
            width: 'fit-content',
            lineHeight: 1,
            [`${componentCls}-count`]: {
                display: 'inline-flex',
                justifyContent: 'center',
                zIndex: token.indicatorZIndex,
                minWidth: indicatorHeight,
                height: indicatorHeight,
                color: token.badgeTextColor,
                fontWeight: textFontWeight,
                fontSize: textFontSize,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(indicatorHeight),
                whiteSpace: 'nowrap',
                textAlign: 'center',
                background: token.badgeColor,
                borderRadius: calc(indicatorHeight).div(2).equal(),
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(badgeShadowSize)} ${token.badgeShadowColor}`,
                transition: `background-color ${token.motionDurationMid}`,
                a: {
                    color: token.badgeTextColor
                },
                'a:hover': {
                    color: token.badgeTextColor
                },
                'a:hover &': {
                    background: token.badgeColorHover
                }
            },
            [`${componentCls}-count-sm`]: {
                minWidth: indicatorHeightSM,
                height: indicatorHeightSM,
                fontSize: textFontSizeSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(indicatorHeightSM),
                borderRadius: calc(indicatorHeightSM).div(2).equal()
            },
            [`${componentCls}-multiple-words`]: {
                paddingInline: token.paddingInline,
                bdi: {
                    unicodeBidi: 'plaintext'
                }
            },
            [`${componentCls}-dot`]: {
                zIndex: token.indicatorZIndex,
                width: dotSize,
                minWidth: dotSize,
                height: dotSize,
                background: token.badgeColor,
                borderRadius: '100%',
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(badgeShadowSize)} ${token.badgeShadowColor}`
            },
            [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                transform: 'translate(50%, -50%)',
                transformOrigin: '100% 0%',
                [`&${iconCls}-spin`]: {
                    animationName: antBadgeLoadingCircle,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                }
            },
            [`&${componentCls}-status`]: {
                lineHeight: 'inherit',
                verticalAlign: 'baseline',
                [`${componentCls}-status-dot`]: {
                    position: 'relative',
                    top: -1,
                    // Magic number, but seems better experience
                    display: 'inline-block',
                    width: statusSize,
                    height: statusSize,
                    verticalAlign: 'middle',
                    borderRadius: '50%'
                },
                [`${componentCls}-status-success`]: {
                    backgroundColor: token.colorSuccess
                },
                [`${componentCls}-status-processing`]: {
                    overflow: 'visible',
                    color: token.colorInfoTextHover,
                    backgroundColor: token.colorInfo,
                    borderColor: 'currentcolor',
                    '&::after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        borderWidth: badgeShadowSize,
                        borderStyle: 'solid',
                        borderColor: 'inherit',
                        borderRadius: '50%',
                        animationName: antStatusProcessing,
                        animationDuration: token.badgeProcessingDuration,
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'ease-in-out',
                        content: '""'
                    }
                },
                [`${componentCls}-status-default`]: {
                    backgroundColor: token.colorTextPlaceholder
                },
                [`${componentCls}-status-error`]: {
                    backgroundColor: token.colorError
                },
                [`${componentCls}-status-warning`]: {
                    backgroundColor: token.colorWarning
                },
                [`${componentCls}-status-text`]: {
                    marginInlineStart: marginXS,
                    color: token.colorText,
                    fontSize: token.fontSize
                }
            },
            ...colorPreset,
            [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
                animationName: antZoomBadgeIn,
                animationDuration: token.motionDurationSlow,
                animationTimingFunction: token.motionEaseOutBack,
                animationFillMode: 'both'
            },
            [`${componentCls}-zoom-leave`]: {
                animationName: antZoomBadgeOut,
                animationDuration: token.motionDurationSlow,
                animationTimingFunction: token.motionEaseOutBack,
                animationFillMode: 'both'
            },
            [`&${componentCls}-not-a-wrapper`]: {
                [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
                    animationName: antNoWrapperZoomBadgeIn,
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseOutBack
                },
                [`${componentCls}-zoom-leave`]: {
                    animationName: antNoWrapperZoomBadgeOut,
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseOutBack
                },
                [`&:not(${componentCls}-status)`]: {
                    verticalAlign: 'middle'
                },
                [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
                    transform: 'none'
                },
                [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
                    position: 'relative',
                    top: 'auto',
                    display: 'block',
                    transformOrigin: '50% 50%'
                }
            },
            [numberPrefixCls]: {
                overflow: 'hidden',
                transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack}`,
                [`${numberPrefixCls}-only`]: {
                    position: 'relative',
                    display: 'inline-block',
                    height: indicatorHeight,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseOutBack}`,
                    WebkitTransformStyle: 'preserve-3d',
                    WebkitBackfaceVisibility: 'hidden',
                    [`> p${numberPrefixCls}-only-unit`]: {
                        height: indicatorHeight,
                        margin: 0,
                        WebkitTransformStyle: 'preserve-3d',
                        WebkitBackfaceVisibility: 'hidden'
                    }
                },
                [`${numberPrefixCls}-symbol`]: {
                    verticalAlign: 'top'
                }
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl',
                [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
                    transform: 'translate(-50%, -50%)'
                }
            }
        }
    };
};
const prepareToken = (token)=>{
    const { fontHeight, lineWidth, marginXS, colorBorderBg } = token;
    const badgeFontHeight = fontHeight;
    const badgeShadowSize = lineWidth;
    const badgeTextColor = token.colorTextLightSolid;
    const badgeColor = token.colorError;
    const badgeColorHover = token.colorErrorHover;
    const badgeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        badgeFontHeight,
        badgeShadowSize,
        badgeTextColor,
        badgeColor,
        badgeColorHover,
        badgeShadowColor: colorBorderBg,
        badgeProcessingDuration: '1.2s',
        badgeRibbonOffset: marginXS,
        // Follow token just by Design. Not related with token
        badgeRibbonCornerTransform: 'scaleY(0.75)',
        badgeRibbonCornerFilter: `brightness(75%)`
    });
    return badgeToken;
};
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, fontSizeSM, lineWidth, paddingXS } = token;
    return {
        indicatorZIndex: 'auto',
        indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
        indicatorHeightSM: fontSize,
        dotSize: fontSizeSM / 2,
        textFontSize: fontSizeSM,
        textFontSizeSM: fontSizeSM,
        textFontWeight: 'normal',
        statusSize: fontSizeSM / 2,
        paddingInline: paddingXS
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Badge', (token)=>{
    const badgeToken = prepareToken(token);
    return genSharedBadgeStyle(badgeToken);
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/badge/Badge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$ScrollNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/ScrollNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/style/index.js [app-client] (ecmascript)");
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
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, scrollNumberPrefixCls: customizeScrollNumberPrefixCls, children, status, text, color, count = null, overflowCount = 99, dot = false, size = 'medium', title, offset, style, className, rootClassName, classNames, styles, showZero = false, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('badge');
    const prefixCls = getPrefixCls('badge', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Badge');
        warning.deprecated(size !== 'default', 'size="default"', 'size="medium"');
    }
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        overflowCount,
        size,
        dot,
        showZero
    };
    // ================================ Misc ================================
    const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
    const isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0 || text === '0' || text === 0;
    const ignoreCount = count === null || isZero && !showZero;
    const hasStatus = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(status) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(color)) && ignoreCount;
    const hasStatusValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(status) || !isZero;
    const isStatusBadge = Boolean(!children && hasStatus && (text || hasStatusValue || !ignoreCount));
    // =============================== Styles ===============================
    const offsetStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Badge.useMemo[offsetStyle]": ()=>{
            if (!offset) {
                return undefined;
            }
            const horizontalOffset = Number.parseInt(offset[0], 10);
            return {
                marginTop: offset[1],
                insetInlineEnd: -horizontalOffset
            };
        }
    }["Badge.useMemo[offsetStyle]"], [
        offset
    ]);
    const mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Badge.useMemo[mergedStyle]": ()=>({
                ...offsetStyle,
                ...contextStyle,
                ...style
            })
    }["Badge.useMemo[mergedStyle]"], [
        offsetStyle,
        style,
        contextStyle
    ]);
    const legacyStyleKey = isStatusBadge ? 'root' : 'indicator';
    const contextLegacyStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, legacyStyleKey);
    const componentLegacyStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, legacyStyleKey);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextLegacyStyle,
        styles,
        componentLegacyStyle
    ], {
        props: mergedProps
    });
    const showAsDot = dot && !isZero;
    const mergedCount = showAsDot ? '' : numberedDisplayCount;
    const isHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Badge.useMemo[isHidden]": ()=>{
            const isEmpty = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(mergedCount) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(text);
            return (isEmpty || isZero && !showZero) && !showAsDot;
        }
    }["Badge.useMemo[isHidden]"], [
        mergedCount,
        isZero,
        showZero,
        showAsDot,
        text
    ]);
    // Count should be cache in case hidden change it
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(count);
    if (!isHidden) {
        countRef.current = count;
    }
    const livingCount = countRef.current;
    // We need cache count since remove motion should not change count display
    const displayCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mergedCount);
    if (!isHidden) {
        displayCountRef.current = mergedCount;
    }
    const displayCount = displayCountRef.current;
    // We will cache the dot status to avoid shaking on leaved motion
    const isDotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(showAsDot);
    if (!isHidden) {
        isDotRef.current = showAsDot;
    }
    // =============================== Render ===============================
    // >>> Title
    const fallbackTitleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(livingCount) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(livingCount) ? livingCount : undefined;
    const titleNode = title === null || title === false ? undefined : title ?? fallbackTitleNode;
    // >>> Status Text
    const showStatusTextNode = !isHidden && (text === 0 ? showZero : !!text && text !== true);
    const statusTextNode = !showStatusTextNode ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-status-text`
    }, text);
    // >>> Display Component
    const displayNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(livingCount) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(livingCount, (oriProps)=>({
            style: {
                ...mergedStyle,
                ...oriProps.style
            }
        })) : undefined;
    // InternalColor
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetColor"])(color, false);
    // Shared styles
    const statusCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.indicator, {
        [`${prefixCls}-status-dot`]: hasStatus,
        [`${prefixCls}-status-${status}`]: !!status,
        [`${prefixCls}-color-${color}`]: isInternalColor
    });
    const statusStyle = {};
    if (color && !isInternalColor) {
        statusStyle.color = color;
        statusStyle.background = color;
    }
    const badgeClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-status`]: hasStatus,
        [`${prefixCls}-not-a-wrapper`]: !children,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, contextClassName, mergedClassNames.root, hashId, cssVarCls);
    // <Badge status="success" />
    if (isStatusBadge) {
        const statusTextColor = mergedStyles.root?.color;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            ref: ref,
            ...restProps,
            className: badgeClassName,
            style: {
                ...offsetStyle,
                ...mergedStyles.root
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: statusCls,
            style: {
                ...mergedStyles.indicator,
                ...statusStyle
            }
        }), showStatusTextNode && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            style: {
                color: statusTextColor
            },
            className: `${prefixCls}-status-text`
        }, text));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ref: ref,
        ...restProps,
        className: badgeClassName,
        style: mergedStyles.root
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: !isHidden,
        motionName: `${prefixCls}-zoom`,
        motionAppear: false,
        motionDeadline: 1000
    }, ({ className: motionClassName })=>{
        const scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
        const isDot = isDotRef.current;
        const scrollNumberCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.indicator, {
            [`${prefixCls}-dot`]: isDot,
            [`${prefixCls}-count`]: !isDot,
            [`${prefixCls}-count-sm`]: size === 'small',
            [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
            [`${prefixCls}-status-${status}`]: !!status,
            [`${prefixCls}-color-${color}`]: isInternalColor
        });
        let scrollNumberStyle = {
            ...offsetStyle,
            ...mergedStyles.indicator
        };
        if (color && !isInternalColor) {
            scrollNumberStyle = scrollNumberStyle || {};
            scrollNumberStyle.background = color;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$ScrollNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: scrollNumberPrefixCls,
            show: !isHidden,
            motionClassName: motionClassName,
            className: scrollNumberCls,
            count: displayCount,
            title: titleNode,
            style: scrollNumberStyle,
            key: "scrollNumber"
        }, displayNode);
    }), statusTextNode);
});
if ("TURBOPACK compile-time truthy", 1) {
    Badge.displayName = 'Badge';
}
const __TURBOPACK__default__export__ = Badge;
}),
"[project]/apps/web/node_modules/antd/es/badge/style/ribbon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
;
// ============================== Ribbon ==============================
const genRibbonStyle = (token)=>{
    const { antCls, badgeFontHeight, marginXS, badgeRibbonOffset, calc } = token;
    const ribbonPrefixCls = `${antCls}-ribbon`;
    const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
    const statusRibbonPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
            [`&${ribbonPrefixCls}-color-${colorKey}`]: {
                background: darkColor,
                color: darkColor
            }
        }));
    return {
        [ribbonWrapperPrefixCls]: {
            position: 'relative'
        },
        [ribbonPrefixCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'absolute',
            top: marginXS,
            padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)}`,
            color: token.colorPrimary,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(badgeFontHeight),
            whiteSpace: 'nowrap',
            backgroundColor: token.colorPrimary,
            borderRadius: token.borderRadiusSM,
            [`${ribbonPrefixCls}-content`]: {
                color: token.badgeTextColor
            },
            [`${ribbonPrefixCls}-corner`]: {
                position: 'absolute',
                top: '100%',
                width: badgeRibbonOffset,
                height: badgeRibbonOffset,
                color: 'currentcolor',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(badgeRibbonOffset).div(2).equal())} solid`,
                transform: token.badgeRibbonCornerTransform,
                transformOrigin: 'top',
                filter: token.badgeRibbonCornerFilter
            },
            ...statusRibbonPreset,
            [`&${ribbonPrefixCls}-placement-end`]: {
                insetInlineEnd: calc(badgeRibbonOffset).mul(-1).equal(),
                borderEndEndRadius: 0,
                [`${ribbonPrefixCls}-corner`]: {
                    insetInlineEnd: 0,
                    borderInlineEndColor: 'transparent',
                    borderBlockEndColor: 'transparent'
                }
            },
            [`&${ribbonPrefixCls}-placement-start`]: {
                insetInlineStart: calc(badgeRibbonOffset).mul(-1).equal(),
                borderEndStartRadius: 0,
                [`${ribbonPrefixCls}-corner`]: {
                    insetInlineStart: 0,
                    borderBlockEndColor: 'transparent',
                    borderInlineStartColor: 'transparent'
                }
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Badge',
    'Ribbon'
], (token)=>{
    const badgeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genRibbonStyle(badgeToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/badge/Ribbon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$ribbon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/style/ribbon.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Ribbon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, prefixCls: customizePrefixCls, style, color, children, text, placement = 'end', rootClassName, styles, classNames: ribbonClassNames } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('ribbon');
    const prefixCls = getPrefixCls('ribbon', customizePrefixCls);
    const wrapperCls = `${prefixCls}-wrapper`;
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$style$2f$ribbon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, wrapperCls);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        placement
    };
    const contextIndicatorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, 'indicator');
    const indicatorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, 'indicator');
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        ribbonClassNames
    ], [
        contextStyles,
        contextIndicatorStyle,
        styles,
        indicatorStyle
    ], {
        props: mergedProps
    });
    const colorInPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetColor"])(color, false);
    const ribbonCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-placement-${placement}`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-color-${color}`]: colorInPreset
    }, className, contextClassName, mergedClassNames.indicator);
    const colorStyle = {};
    const cornerColorStyle = {};
    if (color && !colorInPreset) {
        colorStyle.background = color;
        cornerColorStyle.color = color;
    }
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Ribbon.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Ribbon.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(wrapperCls, rootClassName, hashId, cssVarCls, mergedClassNames.root),
        style: mergedStyles.root
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(ribbonCls, hashId),
        style: {
            ...colorStyle,
            ...mergedStyles.indicator
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-content`, mergedClassNames.content),
        style: mergedStyles.content
    }, text), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-corner`,
        style: cornerColorStyle
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Ribbon.displayName = 'Ribbon';
}
const __TURBOPACK__default__export__ = Ribbon;
}),
"[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/Badge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Ribbon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/Ribbon.js [app-client] (ecmascript)");
"use client";
;
;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Badge.Ribbon = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$Ribbon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Badge;
}),
"[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSlideMotion",
    ()=>initSlideMotion,
    "slideDownIn",
    ()=>slideDownIn,
    "slideDownOut",
    ()=>slideDownOut,
    "slideLeftIn",
    ()=>slideLeftIn,
    "slideLeftOut",
    ()=>slideLeftOut,
    "slideRightIn",
    ()=>slideRightIn,
    "slideRightOut",
    ()=>slideRightOut,
    "slideUpIn",
    ()=>slideUpIn,
    "slideUpOut",
    ()=>slideUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const slideUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    }
});
const slideDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    }
});
const slideLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    }
});
const slideRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    }
});
const slideMotion = {
    'slide-up': {
        inKeyframes: slideUpIn,
        outKeyframes: slideUpOut
    },
    'slide-down': {
        inKeyframes: slideDownIn,
        outKeyframes: slideDownOut
    },
    'slide-left': {
        inKeyframes: slideLeftIn,
        outKeyframes: slideLeftOut
    },
    'slide-right': {
        inKeyframes: slideRightIn,
        outKeyframes: slideRightOut
    }
};
const initSlideMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = slideMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
                transform: 'scale(0)',
                transformOrigin: '0% 0%',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutQuint,
                '&-prepare': {
                    transform: 'scale(1)'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInQuint
            }
        }
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/style/motion/move.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMoveMotion",
    ()=>initMoveMotion,
    "moveDownIn",
    ()=>moveDownIn,
    "moveDownOut",
    ()=>moveDownOut,
    "moveLeftIn",
    ()=>moveLeftIn,
    "moveLeftOut",
    ()=>moveLeftOut,
    "moveRightIn",
    ()=>moveRightIn,
    "moveRightOut",
    ()=>moveRightOut,
    "moveUpIn",
    ()=>moveUpIn,
    "moveUpOut",
    ()=>moveUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const moveDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveDownIn', {
    '0%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveDownOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, 100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveLeftIn', {
    '0%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveLeftOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(-100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveRightIn', {
    '0%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveRightOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(100%, 0, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveUpIn', {
    '0%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    }
});
const moveUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antMoveUpOut', {
    '0%': {
        transform: 'translate3d(0, 0, 0)',
        transformOrigin: '0 0',
        opacity: 1
    },
    '100%': {
        transform: 'translate3d(0, -100%, 0)',
        transformOrigin: '0 0',
        opacity: 0
    }
});
const moveMotion = {
    'move-up': {
        inKeyframes: moveUpIn,
        outKeyframes: moveUpOut
    },
    'move-down': {
        inKeyframes: moveDownIn,
        outKeyframes: moveDownOut
    },
    'move-left': {
        inKeyframes: moveLeftIn,
        outKeyframes: moveLeftOut
    },
    'move-right': {
        inKeyframes: moveRightIn,
        outKeyframes: moveRightOut
    }
};
const initMoveMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = moveMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/dropdown/style/status.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genStatusStyle = (token)=>{
    const { componentCls, menuCls, colorError, colorTextLightSolid } = token;
    const itemCls = `${menuCls}-item`;
    return {
        [`${componentCls}, ${componentCls}-menu-submenu`]: {
            [`${menuCls} ${itemCls}`]: {
                [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
                    color: colorError,
                    '&:hover': {
                        color: colorTextLightSolid,
                        backgroundColor: colorError
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genStatusStyle;
}),
"[project]/apps/web/node_modules/antd/es/dropdown/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/move.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/style/status.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, menuCls, zIndexPopup, dropdownArrowDistance, sizePopupArrow, antCls, iconCls, motionDurationMid, paddingBlock, fontSize, dropdownEdgeChildPadding, colorTextDisabled, fontSizeIcon, controlPaddingHorizontal, colorBgElevated, controlHeightLG } = token;
    return [
        {
            [componentCls]: {
                position: 'absolute',
                top: -9999,
                left: {
                    _skip_check_: true,
                    value: -9999
                },
                zIndex: zIndexPopup,
                display: 'block',
                // A placeholder out of dropdown visible range to avoid close when user moving
                '&::before': {
                    position: 'absolute',
                    insetBlock: token.calc(sizePopupArrow).div(2).sub(dropdownArrowDistance).equal(),
                    // insetInlineStart: -7, // FIXME: Seems not work for hidden element
                    zIndex: -9999,
                    opacity: 0.0001,
                    content: '""'
                },
                // Makes vertical dropdowns have a scrollbar once they become taller than the viewport.
                // Leave some viewport spacing so the menu stays on-screen when the trigger is centered.
                // https://github.com/ant-design/ant-design/issues/56044
                '&-menu-vertical': {
                    maxHeight: `calc(100vh - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(controlHeightLG).mul(2.5).equal())})`,
                    overflowY: 'auto'
                },
                [`&-trigger${antCls}-btn`]: {
                    [`& > ${iconCls}-down, & > ${antCls}-btn-icon > ${iconCls}-down`]: {
                        fontSize: fontSizeIcon
                    }
                },
                [`${componentCls}-wrap`]: {
                    position: 'relative',
                    [`${antCls}-btn > ${iconCls}-down`]: {
                        fontSize: fontSizeIcon
                    },
                    [`${iconCls}-down::before`]: {
                        transition: `transform ${motionDurationMid}`
                    }
                },
                [`${componentCls}-wrap-open`]: {
                    [`${iconCls}-down::before`]: {
                        transform: `rotate(180deg)`
                    }
                },
                '&-hidden, &-menu-hidden, &-menu-submenu-hidden': {
                    display: 'none'
                },
                // =============================================================
                // ==                         Motion                          ==
                // =============================================================
                // When position is not enough for dropdown, the placement will revert.
                // We will handle this with revert motion name.
                [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomRight`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideUpIn"]
                },
                [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topRight`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideDownIn"]
                },
                [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomRight`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideUpOut"]
                },
                [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topRight`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideDownOut"]
                },
                [`&${antCls}-slide-right-enter${antCls}-slide-right-enter-active${componentCls}-placement-right,
          &${antCls}-slide-right-appear${antCls}-slide-right-appear-active${componentCls}-placement-right,
          &${antCls}-slide-right-enter${antCls}-slide-right-enter-active${componentCls}-placement-rightTop,
          &${antCls}-slide-right-appear${antCls}-slide-right-appear-active${componentCls}-placement-rightTop,
          &${antCls}-slide-right-enter${antCls}-slide-right-enter-active${componentCls}-placement-rightBottom,
          &${antCls}-slide-right-appear${antCls}-slide-right-appear-active${componentCls}-placement-rightBottom`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideLeftIn"]
                },
                [`&${antCls}-slide-left-enter${antCls}-slide-left-enter-active${componentCls}-placement-left,
          &${antCls}-slide-left-appear${antCls}-slide-left-appear-active${componentCls}-placement-left,
          &${antCls}-slide-left-enter${antCls}-slide-left-enter-active${componentCls}-placement-leftTop,
          &${antCls}-slide-left-appear${antCls}-slide-left-appear-active${componentCls}-placement-leftTop,
          &${antCls}-slide-left-enter${antCls}-slide-left-enter-active${componentCls}-placement-leftBottom,
          &${antCls}-slide-left-appear${antCls}-slide-left-appear-active${componentCls}-placement-leftBottom`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideRightIn"]
                },
                [`&${antCls}-slide-right-leave${antCls}-slide-right-leave-active${componentCls}-placement-right,
          &${antCls}-slide-right-leave${antCls}-slide-right-leave-active${componentCls}-placement-rightTop,
          &${antCls}-slide-right-leave${antCls}-slide-right-leave-active${componentCls}-placement-rightBottom`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideLeftOut"]
                },
                [`&${antCls}-slide-left-leave${antCls}-slide-left-leave-active${componentCls}-placement-left,
          &${antCls}-slide-left-leave${antCls}-slide-left-leave-active${componentCls}-placement-leftTop,
          &${antCls}-slide-left-leave${antCls}-slide-left-leave-active${componentCls}-placement-leftBottom`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideRightOut"]
                }
            }
        },
        // =============================================================
        // ==                        Arrow style                      ==
        // =============================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, colorBgElevated),
        {
            // =============================================================
            // ==                          Menu                           ==
            // =============================================================
            [`${componentCls} ${menuCls}`]: {
                position: 'relative',
                margin: 0
            },
            [`${menuCls}-submenu-popup`]: {
                position: 'absolute',
                zIndex: zIndexPopup,
                background: 'transparent',
                boxShadow: 'none',
                transformOrigin: '0 0',
                'ul, li': {
                    listStyle: 'none',
                    margin: 0
                }
            },
            [`${componentCls}, ${componentCls}-menu-submenu`]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                [menuCls]: {
                    padding: dropdownEdgeChildPadding,
                    listStyleType: 'none',
                    backgroundColor: colorBgElevated,
                    backgroundClip: 'padding-box',
                    borderRadius: token.borderRadiusLG,
                    outline: 'none',
                    boxShadow: token.boxShadowSecondary,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                    '&:empty': {
                        padding: 0,
                        boxShadow: 'none'
                    },
                    [`${menuCls}-item-group-title`]: {
                        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlock)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(controlPaddingHorizontal)}`,
                        color: token.colorTextDescription,
                        transition: `all ${motionDurationMid}`
                    },
                    // ======================= Item Content =======================
                    [`${menuCls}-item`]: {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    [`${menuCls}-item-icon`]: {
                        minWidth: fontSize,
                        marginInlineEnd: token.marginXS,
                        fontSize: token.fontSizeSM
                    },
                    [`${menuCls}-title-content`]: {
                        flex: 'auto',
                        '&-with-extra': {
                            display: 'inline-flex',
                            alignItems: 'center',
                            width: '100%'
                        },
                        [`> a, > ${menuCls}-item-label > a`]: {
                            color: 'inherit',
                            transition: `all ${motionDurationMid}`,
                            '&:hover': {
                                color: 'inherit'
                            },
                            '&::after': {
                                position: 'absolute',
                                inset: 0,
                                content: '""'
                            }
                        },
                        [`${menuCls}-item-extra`]: {
                            paddingInlineStart: token.padding,
                            marginInlineStart: 'auto',
                            fontSize: token.fontSizeSM,
                            color: token.colorTextDescription
                        }
                    },
                    // =========================== Item ===========================
                    [`${menuCls}-item, ${menuCls}-submenu-title`]: {
                        display: 'flex',
                        margin: 0,
                        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlock)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(controlPaddingHorizontal)}`,
                        color: token.colorText,
                        fontWeight: 'normal',
                        fontSize,
                        lineHeight: token.lineHeight,
                        cursor: 'pointer',
                        transition: `all ${motionDurationMid}`,
                        borderRadius: token.borderRadiusSM,
                        '&:hover, &-active': {
                            backgroundColor: token.controlItemBgHover
                        },
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                        '&-selected': {
                            color: token.colorPrimary,
                            backgroundColor: token.controlItemBgActive,
                            '&:hover, &-active': {
                                backgroundColor: token.controlItemBgActiveHover
                            }
                        },
                        '&-disabled': {
                            color: colorTextDisabled,
                            cursor: 'not-allowed',
                            '&:hover': {
                                color: colorTextDisabled,
                                backgroundColor: colorBgElevated,
                                cursor: 'not-allowed'
                            },
                            a: {
                                pointerEvents: 'none'
                            }
                        },
                        '&-divider': {
                            height: 1,
                            // By design
                            margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS)} 0`,
                            overflow: 'hidden',
                            lineHeight: 0,
                            backgroundColor: token.colorSplit
                        },
                        [`${componentCls}-menu-submenu-expand-icon`]: {
                            position: 'absolute',
                            insetInlineEnd: token.paddingXS,
                            [`${componentCls}-menu-submenu-arrow-icon`]: {
                                marginInlineEnd: '0 !important',
                                color: token.colorIcon,
                                fontSize: fontSizeIcon,
                                fontStyle: 'normal'
                            }
                        }
                    },
                    [`${menuCls}-item-group-list`]: {
                        margin: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXS)}`,
                        padding: 0,
                        listStyle: 'none'
                    },
                    [`${menuCls}-submenu-title`]: {
                        paddingInlineEnd: token.calc(controlPaddingHorizontal).add(token.fontSizeSM).equal()
                    },
                    [`${menuCls}-submenu-vertical`]: {
                        position: 'relative'
                    },
                    [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
                        [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
                            color: colorTextDisabled,
                            backgroundColor: colorBgElevated,
                            cursor: 'not-allowed'
                        }
                    },
                    // https://github.com/ant-design/ant-design/issues/19264
                    [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
                        color: token.colorPrimary
                    }
                }
            }
        },
        // Follow code may reuse in other components
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-left'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-right'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big')
        ]
    ];
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + 50,
        paddingBlock: (token.controlHeight - token.fontSize * token.lineHeight) / 2,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: token.borderRadiusLG,
            limitVerticalRadius: true
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowToken"])(token)
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Dropdown', (token)=>{
    const { marginXXS, sizePopupArrow, paddingXXS, componentCls } = token;
    const dropdownToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        menuCls: `${componentCls}-menu`,
        dropdownArrowDistance: token.calc(sizePopupArrow).div(2).add(marginXXS).equal(),
        dropdownEdgeChildPadding: paddingXXS
    });
    return [
        genBaseStyle(dropdownToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$status$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dropdownToken)
    ];
}, prepareComponentToken, {
    resetStyle: false
});
}),
"[project]/apps/web/node_modules/antd/es/dropdown/dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/dropdown/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/placements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/menu/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/menu/OverrideContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/style/index.js [app-client] (ecmascript)");
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
const _Placements = [
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'top',
    'bottom',
    'left',
    'leftTop',
    'leftBottom',
    'right',
    'rightTop',
    'rightBottom'
];
const Dropdown = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { menu, arrow, prefixCls: customizePrefixCls, children, trigger, disabled, dropdownRender, popupRender, getPopupContainer, overlayClassName, rootClassName, overlayStyle, open, onOpenChange, mouseEnterDelay = 0.15, mouseLeaveDelay = 0.1, autoAdjustOverflow = true, placement = '', transitionName, classNames, styles, destroyPopupOnHide, destroyOnHidden } = props;
    const { getPrefixCls, direction, getPopupContainer: getContextPopupContainer, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('dropdown');
    const mergedProps = {
        ...props,
        mouseEnterDelay,
        mouseLeaveDelay,
        autoAdjustOverflow
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
    const mergedRootStyles = {
        ...mergedStyles.root
    };
    const mergedPopupRender = popupRender || dropdownRender;
    // =================== Warning =====================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Dropdown');
    if ("TURBOPACK compile-time truthy", 1) {
        const deprecatedProps = {
            dropdownRender: 'popupRender',
            destroyPopupOnHide: 'destroyOnHidden',
            overlayClassName: 'classNames.root',
            overlayStyle: 'styles.root'
        };
        Object.entries(deprecatedProps).forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        if (placement.includes('Center')) {
            warning.deprecated(!placement.includes('Center'), `placement: ${placement}`, `placement: ${placement.slice(0, placement.indexOf('Center'))}`);
        }
    }
    const memoTransitionName = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Dropdown.useMemo[memoTransitionName]": ()=>{
            const rootPrefixCls = getPrefixCls();
            if (transitionName !== undefined) {
                return transitionName;
            }
            if (placement.startsWith('top')) {
                return `${rootPrefixCls}-slide-down`;
            }
            if (placement.startsWith('left')) {
                return `${rootPrefixCls}-slide-right`;
            }
            if (placement.startsWith('right')) {
                return `${rootPrefixCls}-slide-left`;
            }
            return `${rootPrefixCls}-slide-up`;
        }
    }["Dropdown.useMemo[memoTransitionName]"], [
        getPrefixCls,
        placement,
        transitionName
    ]);
    const memoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Dropdown.useMemo[memoPlacement]": ()=>{
            if (!placement) {
                return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
            }
            if (placement.includes('Center')) {
                return placement.slice(0, placement.indexOf('Center'));
            }
            return placement;
        }
    }["Dropdown.useMemo[memoPlacement]"], [
        placement,
        direction
    ]);
    const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(children) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children) : children);
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(child));
    const popupTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-trigger`, {
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }, child.props.className),
        disabled: child.props.disabled ?? disabled,
        ref: composedRef
    });
    const triggerActions = disabled ? [] : trigger;
    const alignPoint = !!triggerActions?.includes('contextMenu');
    // =========================== Open ============================
    const [mergedOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(false, open);
    const onInnerOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "Dropdown.useEvent[onInnerOpenChange]": (nextOpen)=>{
            onOpenChange?.(nextOpen, {
                source: 'trigger'
            });
            setOpen(nextOpen);
        }
    }["Dropdown.useEvent[onInnerOpenChange]"]);
    // =========================== Overlay ============================
    const overlayClassNameCustomized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, contextClassName, mergedClassNames.root, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    const builtinPlacements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        arrowPointAtCenter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(arrow) && arrow.pointAtCenter,
        autoAdjustOverflow,
        offset: token.marginXXS,
        arrowWidth: arrow ? token.sizePopupArrow : 0,
        borderRadius: token.borderRadius
    });
    const onMenuClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "Dropdown.useEvent[onMenuClick]": ()=>{
            if (menu?.selectable && menu?.multiple) {
                return;
            }
            onOpenChange?.(false, {
                source: 'menu'
            });
            setOpen(false);
        }
    }["Dropdown.useEvent[onMenuClick]"]);
    const renderOverlay = ()=>{
        // @rc-component/dropdown already can process the function of overlay, but we have check logic here.
        // So we need render the element to check and pass back to @rc-component/dropdown.
        const menuClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedClassNames, [
            'root'
        ]);
        const menuStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedStyles, [
            'root'
        ]);
        let overlayNode;
        if (menu?.items) {
            overlayNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...menu,
                classNames: {
                    ...menuClassNames,
                    subMenu: {
                        ...menuClassNames
                    }
                },
                styles: {
                    ...menuStyles,
                    subMenu: {
                        ...menuStyles
                    }
                }
            });
        }
        if (mergedPopupRender) {
            overlayNode = mergedPopupRender(overlayNode);
        }
        overlayNode = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(typeof overlayNode === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, overlayNode) : overlayNode);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverrideProvider"], {
            prefixCls: `${prefixCls}-menu`,
            rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(cssVarCls, rootCls),
            expandIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                className: `${prefixCls}-menu-submenu-arrow`
            }, direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: `${prefixCls}-menu-submenu-arrow-icon`
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: `${prefixCls}-menu-submenu-arrow-icon`
            })),
            mode: "vertical",
            selectable: false,
            onClick: onMenuClick,
            validator: ({ mode })=>{
                // Warning if use other mode
                ("TURBOPACK compile-time truthy", 1) ? warning(!mode || mode === 'vertical', 'usage', `mode="${mode}" is not supported for Dropdown's Menu.`) : "TURBOPACK unreachable";
            }
        }, overlayNode);
    };
    // =========================== zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Dropdown', mergedRootStyles.zIndex);
    // ============================ Render ============================
    let renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        alignPoint: alignPoint,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
            'rootClassName',
            'onOpenChange'
        ]),
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        visible: mergedOpen,
        builtinPlacements: builtinPlacements,
        arrow: !!arrow,
        overlayClassName: overlayClassNameCustomized,
        prefixCls: prefixCls,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        transitionName: memoTransitionName,
        trigger: triggerActions,
        overlay: renderOverlay,
        placement: memoPlacement,
        onVisibleChange: onInnerOpenChange,
        overlayStyle: {
            ...mergedRootStyles,
            zIndex
        },
        autoDestroy: destroyOnHidden ?? destroyPopupOnHide
    }, popupTrigger);
    if (zIndex) {
        renderNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: contextZIndex
        }, renderNode);
    }
    return renderNode;
});
// We don't care debug panel
const PurePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Dropdown, 'align', undefined, 'dropdown', (prefixCls)=>prefixCls);
/* istanbul ignore next */ const WrapPurePanel = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PurePanel, {
        ...props
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Dropdown.displayName = 'Dropdown';
}
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/apps/web/node_modules/antd/es/dropdown/dropdown-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/dropdown.js [app-client] (ecmascript)");
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
/** @deprecated Please use Space.Compact + Dropdown + Button instead */ const DropdownButton = (props)=>{
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, type = 'default', danger, disabled, loading, onClick, htmlType, children, className, menu, arrow, autoFocus, trigger, align, open, onOpenChange, placement, getPopupContainer, href, icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), title, buttonsRender = (buttons)=>buttons, mouseEnterDelay, mouseLeaveDelay, overlayClassName, overlayStyle, destroyOnHidden, destroyPopupOnHide, dropdownRender, popupRender, ...restProps } = props;
    const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
    const buttonPrefixCls = `${prefixCls}-button`;
    const mergedPopupRender = popupRender || dropdownRender;
    const dropdownProps = {
        menu,
        arrow,
        autoFocus,
        align,
        disabled,
        trigger: disabled ? [] : trigger,
        onOpenChange,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        mouseEnterDelay,
        mouseLeaveDelay,
        classNames: {
            root: overlayClassName
        },
        styles: {
            root: overlayStyle
        },
        destroyOnHidden,
        popupRender: mergedPopupRender
    };
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(buttonPrefixCls, compactItemClassnames, className);
    if ('destroyPopupOnHide' in props) {
        dropdownProps.destroyPopupOnHide = destroyPopupOnHide;
    }
    if ('open' in props) {
        dropdownProps.open = open;
    }
    if ('placement' in props) {
        dropdownProps.placement = placement;
    } else {
        dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
    }
    // ============================== Warn ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Dropdown.Button');
        warning.deprecated(false, 'Dropdown.Button', 'Space.Compact + Dropdown + Button');
    }
    const leftButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        type: type,
        danger: danger,
        disabled: disabled,
        loading: loading,
        onClick: onClick,
        htmlType: htmlType,
        href: href,
        title: title
    }, children);
    const rightButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        type: type,
        danger: danger,
        icon: icon
    });
    const [leftButtonToRender, rightButtonToRender] = buttonsRender([
        leftButton,
        rightButton
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Compact, {
        className: classes,
        size: compactSize,
        block: true,
        ...restProps
    }, leftButtonToRender, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...dropdownProps
    }, rightButtonToRender));
};
DropdownButton.__ANT_BUTTON = true;
const __TURBOPACK__default__export__ = DropdownButton;
}),
"[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/dropdown-button.js [app-client] (ecmascript)");
"use client";
;
;
const Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
/** @deprecated Please use Space.Compact + Dropdown + Button instead */ Dropdown.Button = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$dropdown$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript) <export default as Dropdown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/_util/gapSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPresetSize",
    ()=>isPresetSize,
    "isValidGapNumber",
    ()=>isValidGapNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
function isPresetSize(size) {
    return [
        'small',
        'middle',
        'medium',
        'large'
    ].includes(size);
}
function isValidGapNumber(size) {
    if (!size) {
        // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size);
}
}),
"[project]/apps/web/node_modules/antd/es/_util/capitalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>capitalize
]);
function capitalize(str) {
    if (typeof str !== 'string') {
        return str;
    }
    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
}
}),
"[project]/apps/web/node_modules/antd/es/_util/convertToTooltipProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const convertToTooltipProps = (tooltip, context)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(tooltip)) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(tooltip) && !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(tooltip)) {
        return {
            ...context,
            ...tooltip
        };
    }
    return {
        ...context,
        title: tooltip
    };
};
const __TURBOPACK__default__export__ = convertToTooltipProps;
}),
"[project]/apps/web/node_modules/antd/es/space/style/addon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
;
const genSpaceAddonStyle = (token)=>{
    const { componentCls, borderRadius, paddingSM, colorBorder, paddingXS, fontSizeLG, fontSizeSM, borderRadiusLG, borderRadiusSM, colorBgContainerDisabled, lineWidth, lineType, antCls } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'space-addon');
    return {
        [componentCls]: [
            // ==========================================================
            // ==                         Base                         ==
            // ==========================================================
            {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0,
                whiteSpace: 'nowrap',
                paddingInline: paddingSM,
                margin: 0,
                borderWidth: lineWidth,
                borderStyle: lineType,
                borderRadius,
                '&:hover': {
                    zIndex: 0
                },
                [`&${componentCls}-disabled`]: {
                    color: token.colorTextDisabled
                },
                '&-large': {
                    fontSize: fontSizeLG,
                    borderRadius: borderRadiusLG
                },
                '&-small': {
                    paddingInline: paddingXS,
                    borderRadius: borderRadiusSM,
                    fontSize: fontSizeSM
                },
                '&-compact-last-item': {
                    borderEndStartRadius: 0,
                    borderStartStartRadius: 0
                },
                '&-compact-first-item': {
                    borderEndEndRadius: 0,
                    borderStartEndRadius: 0
                },
                '&-compact-item:not(:first-child):not(:last-child)': {
                    borderRadius: 0
                },
                '&-compact-item:not(:last-child)': {
                    borderInlineEndWidth: 0
                },
                '&-compact-item:not(:first-child)': {
                    borderInlineStartWidth: 0
                }
            },
            // ==========================================================
            // ==                       Variants                       ==
            // ==========================================================
            {
                [varName('addon-border-color')]: colorBorder,
                [varName('addon-background')]: colorBgContainerDisabled,
                // Filled
                [varName('addon-border-color-outlined')]: colorBorder,
                [varName('addon-background-filled')]: colorBgContainerDisabled,
                borderColor: varRef('addon-border-color'),
                background: varRef('addon-background'),
                // ======================= Outlined =======================
                '&-variant-outlined': {
                    [varName('addon-border-color')]: varRef('addon-border-color-outlined')
                },
                // ======================== Filled ========================
                '&-variant-filled': {
                    [varName('addon-border-color')]: 'transparent',
                    [varName('addon-background')]: varRef('addon-background-filled'),
                    // Disabled
                    [`&${componentCls}-disabled`]: {
                        [varName('addon-border-color')]: colorBorder,
                        [varName('addon-background')]: colorBgContainerDisabled
                    }
                },
                // ====================== Borderless ======================
                '&-variant-borderless': {
                    border: 'none',
                    background: 'transparent'
                },
                // ====================== Underlined ======================
                '&-variant-underlined': {
                    border: 'none',
                    background: 'transparent'
                }
            },
            // ==========================================================
            // ==                        Status                        ==
            // ==========================================================
            {
                '&-status-error': {
                    [varName('addon-border-color-outlined')]: token.colorError,
                    [varName('addon-background-filled')]: token.colorErrorBg,
                    color: token.colorError
                },
                '&-status-warning': {
                    [varName('addon-border-color-outlined')]: token.colorWarning,
                    [varName('addon-background-filled')]: token.colorWarningBg,
                    color: token.colorWarning
                }
            }
        ]
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Addon', (token)=>[
        genSpaceAddonStyle(token),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
            focus: false
        })
    ]);
}),
"[project]/apps/web/node_modules/antd/es/space/Addon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/style/addon.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SpaceAddon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { className, children, style, prefixCls: customizePrefixCls, variant = 'outlined', disabled, status, ...restProps } = props;
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('space-addon', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { compactItemClassnames, compactSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, directionConfig);
    const statusCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, status);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, compactItemClassnames, cssVarCls, `${prefixCls}-variant-${variant}`, statusCls, {
        [`${prefixCls}-${compactSize}`]: compactSize,
        [`${prefixCls}-disabled`]: disabled
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: ref,
        className: classes,
        style: style,
        ...restProps
    }, children);
});
const __TURBOPACK__default__export__ = SpaceAddon;
}),
"[project]/apps/web/node_modules/antd/es/space/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceContext",
    ()=>SpaceContext,
    "SpaceContextProvider",
    ()=>SpaceContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SpaceContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
}),
"[project]/apps/web/node_modules/antd/es/space/Item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Item = (props)=>{
    const { className, prefix, index, children, separator, style, classNames, styles } = props;
    const { latestIndex } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaceContext"]);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(children)) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: className,
        style: style
    }, children), index < latestIndex && separator && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefix}-item-separator`, classNames?.separator),
        style: styles?.separator
    }, separator));
};
const __TURBOPACK__default__export__ = Item;
}),
"[project]/apps/web/node_modules/antd/es/space/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
const genSpaceStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-rtl': {
                direction: 'rtl'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-align': {
                flexDirection: 'column',
                '&-center': {
                    alignItems: 'center'
                },
                '&-start': {
                    alignItems: 'flex-start'
                },
                '&-end': {
                    alignItems: 'flex-end'
                },
                '&-baseline': {
                    alignItems: 'baseline'
                }
            },
            [`${componentCls}-item:empty`]: {
                display: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/47875
            [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
                display: 'block'
            }
        }
    };
};
const genSpaceGapStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            '&-gap-row-small': {
                rowGap: token.spaceGapSmallSize
            },
            '&-gap-row-medium, &-gap-row-middle': {
                rowGap: token.spaceGapMiddleSize
            },
            '&-gap-row-large': {
                rowGap: token.spaceGapLargeSize
            },
            '&-gap-col-small': {
                columnGap: token.spaceGapSmallSize
            },
            '&-gap-col-medium, &-gap-col-middle': {
                columnGap: token.spaceGapMiddleSize
            },
            '&-gap-col-large': {
                columnGap: token.spaceGapLargeSize
            }
        }
    };
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Space', (token)=>{
    const spaceToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spaceGapSmallSize: token.paddingXS,
        spaceGapMiddleSize: token.padding,
        spaceGapLargeSize: token.paddingLG
    });
    return [
        genSpaceStyle(spaceToken),
        genSpaceGapStyle(spaceToken)
    ];
}, ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/gapSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Addon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/style/index.js [app-client] (ecmascript)");
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
const InternalSpace = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction: directionConfig, size: contextSize, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('space');
    const { size = contextSize ?? 'small', align, className, rootClassName, children, direction, orientation, prefixCls: customizePrefixCls, split, separator, style, vertical, wrap = false, classNames, styles, ...restProps } = props;
    const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [
        size,
        size
    ];
    const isPresetVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(verticalSize);
    const isPresetHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(horizontalSize);
    const isValidVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(verticalSize);
    const isValidHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(horizontalSize);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children, {
        keepEmpty: true
    });
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, direction);
    const mergedAlign = align === undefined && !mergedVertical ? 'center' : align;
    const mergedSeparator = separator ?? split;
    const prefixCls = getPrefixCls('space', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size,
        orientation: mergedOrientation,
        align: mergedAlign
    };
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
        props: mergedProps
    });
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, hashId, `${prefixCls}-${mergedOrientation}`, {
        [`${prefixCls}-rtl`]: directionConfig === 'rtl',
        [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
        [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
        [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
    }, className, rootClassName, cssVarCls, mergedClassNames.root);
    const itemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-item`, mergedClassNames.item);
    // Calculate latest one
    const renderedItems = childNodes.map((child, i)=>{
        const key = child?.key || `${itemClassName}-${i}`;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefix: prefixCls,
            classNames: mergedClassNames,
            styles: mergedStyles,
            className: itemClassName,
            key: key,
            index: i,
            separator: mergedSeparator,
            style: mergedStyles.item
        }, child);
    });
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Space');
        [
            [
                'direction',
                'orientation'
            ],
            [
                'split',
                'separator'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const memoizedSpaceContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSpace.useMemo[memoizedSpaceContext]": ()=>{
            const calcLatestIndex = childNodes.reduce({
                "InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex": (latest, child, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(child) ? i : latest
            }["InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex"], 0);
            return {
                latestIndex: calcLatestIndex
            };
        }
    }["InternalSpace.useMemo[memoizedSpaceContext]"], [
        childNodes
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    const gapStyle = {};
    if (wrap) {
        gapStyle.flexWrap = 'wrap';
    }
    if (!isPresetHorizontalSize && isValidHorizontalSize) {
        gapStyle.columnGap = horizontalSize;
    }
    if (!isPresetVerticalSize && isValidVerticalSize) {
        gapStyle.rowGap = verticalSize;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: ref,
        className: rootClassNames,
        style: {
            ...gapStyle,
            ...mergedStyles.root
        },
        ...restProps
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaceContextProvider"], {
        value: memoizedSpaceContext
    }, renderedItems));
});
const Space = InternalSpace;
Space.Compact = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Space.Addon = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Space.displayName = 'Space';
}
const __TURBOPACK__default__export__ = Space;
}),
"[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Space",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/apps/web/node_modules/antd/es/empty/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAsSolidColor",
    ()=>getAsSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
const getAsSolidColor = (color, background)=>{
    if (color?.startsWith('var(') || background?.startsWith('var(')) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](color).onBackground(background).toHexString();
};
}),
"[project]/apps/web/node_modules/antd/es/empty/empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Empty = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const { colorBgContainer, colorFill, colorFillSecondary, colorFillTertiary, colorTextQuaternary } = token;
    const { panelBgColor, borderColor, detailColor, shadowColor, iconColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Empty.useMemo": ()=>({
                panelBgColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFillTertiary, colorBgContainer),
                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorTextQuaternary, colorBgContainer),
                detailColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFill, colorBgContainer),
                shadowColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFillSecondary, colorBgContainer),
                iconColor: colorBgContainer
            })
    }["Empty.useMemo"], [
        colorBgContainer,
        colorFill,
        colorFillSecondary,
        colorFillTertiary,
        colorTextQuaternary
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, locale?.description || 'Empty'), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        transform: "translate(24 31.7)"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ellipse", {
        fillOpacity: ".8",
        fill: shadowColor,
        cx: "67.8",
        cy: "106.9",
        rx: "67.8",
        ry: "12.7"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: borderColor,
        d: "M122 69.7 98.1 40.2a6 6 0 0 0-4.6-2.2H42.1a6 6 0 0 0-4.6 2.2l-24 29.5V85H122z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: panelBgColor,
        d: "M33.8 0h68a4 4 0 0 1 4 4v93.3a4 4 0 0 1-4 4h-68a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: detailColor,
        d: "M42.7 10h50.2a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H42.7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m.2 39.8h49.8a2.3 2.3 0 1 1 0 4.5H42.9a2.3 2.3 0 0 1 0-4.5m0 11.7h49.8a2.3 2.3 0 1 1 0 4.6H42.9a2.3 2.3 0 0 1 0-4.6m79 43.5a7 7 0 0 1-6.8 5.4H20.5a7 7 0 0 1-6.7-5.4l-.2-1.8V69.7h26.3c2.9 0 5.2 2.4 5.2 5.4s2.4 5.4 5.3 5.4h34.8c2.9 0 5.3-2.4 5.3-5.4s2.3-5.4 5.2-5.4H122v33.5q0 1-.2 1.8"
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: detailColor,
        d: "m149.1 33.3-6.8 2.6a1 1 0 0 1-1.3-1.2l2-6.2q-4.1-4.5-4.2-10.4c0-10 10.1-18.1 22.6-18.1S184 8.1 184 18.1s-10.1 18-22.6 18q-6.8 0-12.3-2.8"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        fill: iconColor,
        transform: "translate(149.7 15.4)"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("circle", {
        cx: "20.7",
        cy: "3.2",
        r: "2.8"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M5.7 5.6H0L2.9.7zM9.3.7h5v5h-5z"
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    Empty.displayName = 'EmptyImage';
}
const __TURBOPACK__default__export__ = Empty;
}),
"[project]/apps/web/node_modules/antd/es/empty/simple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Simple = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const { colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer } = token;
    const { borderColor, shadowColor, contentColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Simple.useMemo": ()=>({
                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFill, colorBgContainer),
                shadowColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFillTertiary, colorBgContainer),
                contentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsSolidColor"])(colorFillQuaternary, colorBgContainer)
            })
    }["Simple.useMemo"], [
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, locale?.description || 'Empty'), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        transform: "translate(0 1)",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ellipse", {
        fill: shadowColor,
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("g", {
        fillRule: "nonzero",
        stroke: borderColor
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M55 12.8 44.9 1.3Q44 0 42.9 0H21.1q-1.2 0-2 1.3L9 12.8V22h46z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M41.6 16c0-1.7 1-3 2.2-3H55v18.1c0 2.2-1.3 3.9-3 3.9H12c-1.7 0-3-1.7-3-3.9V13h11.2c1.2 0 2.2 1.3 2.2 3s1 2.9 2.2 2.9h14.8c1.2 0 2.2-1.4 2.2-3",
        fill: contentColor
    }))));
};
if ("TURBOPACK compile-time truthy", 1) {
    Simple.displayName = 'SimpleImage';
}
const __TURBOPACK__default__export__ = Simple;
}),
"[project]/apps/web/node_modules/antd/es/empty/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
// ============================== Shared ==============================
const genSharedEmptyStyle = (token)=>{
    const { componentCls, margin, marginXS, marginXL, fontSize, lineHeight } = token;
    return {
        [componentCls]: {
            marginInline: marginXS,
            fontSize,
            lineHeight,
            textAlign: 'center',
            // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
            [`${componentCls}-image`]: {
                height: token.emptyImgHeight,
                marginBottom: marginXS,
                opacity: token.opacityImage,
                img: {
                    height: '100%'
                },
                svg: {
                    maxWidth: '100%',
                    height: '100%',
                    margin: 'auto'
                }
            },
            [`${componentCls}-description`]: {
                color: token.colorTextDescription
            },
            // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
            [`${componentCls}-footer`]: {
                marginTop: margin
            },
            '&-normal': {
                marginBlock: marginXL,
                color: token.colorTextDescription,
                [`${componentCls}-description`]: {
                    color: token.colorTextDescription
                },
                [`${componentCls}-image`]: {
                    height: token.emptyImgHeightMD
                }
            },
            '&-small': {
                marginBlock: marginXS,
                color: token.colorTextDescription,
                [`${componentCls}-image`]: {
                    height: token.emptyImgHeightSM
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Empty', (token)=>{
    const { componentCls, controlHeightLG, calc } = token;
    const emptyToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        emptyImgCls: `${componentCls}-img`,
        emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
        emptyImgHeightMD: controlHeightLG,
        emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
    });
    return genSharedEmptyStyle(emptyToken);
});
}),
"[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$simple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/simple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/style/index.js [app-client] (ecmascript)");
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
const defaultEmptyImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const simpleEmptyImg = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$simple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const Empty = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, rootClassName, prefixCls: customizePrefixCls, image, description, children, imageStyle, style, classNames, styles, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, image: contextImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('empty');
    const prefixCls = getPrefixCls('empty', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
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
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Empty');
    const des = typeof description !== 'undefined' ? description : locale?.description;
    const alt = typeof des === 'string' ? des : 'empty';
    const mergedImage = image ?? contextImage ?? defaultEmptyImg;
    let imageNode = null;
    if (typeof mergedImage === 'string') {
        imageNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("img", {
            draggable: false,
            alt: alt,
            src: mergedImage
        });
    } else {
        imageNode = mergedImage;
    }
    // ============================= Warning ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Empty');
        [
            [
                'imageStyle',
                'styles.image'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Empty.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Empty.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, prefixCls, contextClassName, {
            [`${prefixCls}-normal`]: mergedImage === simpleEmptyImg,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }, className, rootClassName, mergedClassNames.root),
        style: mergedStyles.root,
        ...restProps
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-image`, mergedClassNames.image),
        style: {
            ...imageStyle,
            ...mergedStyles.image
        }
    }, imageNode), des && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-description`, mergedClassNames.description),
        style: mergedStyles.description
    }, des), children && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-footer`, mergedClassNames.footer),
        style: mergedStyles.footer
    }, children));
});
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if ("TURBOPACK compile-time truthy", 1) {
    Empty.displayName = 'Empty';
}
const __TURBOPACK__default__export__ = Empty;
}),
"[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Empty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/flex/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignItemsValues",
    ()=>alignItemsValues,
    "default",
    ()=>__TURBOPACK__default__export__,
    "flexWrapValues",
    ()=>flexWrapValues,
    "justifyContentValues",
    ()=>justifyContentValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const flexWrapValues = [
    'wrap',
    'nowrap',
    'wrap-reverse'
];
const justifyContentValues = [
    'flex-start',
    'flex-end',
    'start',
    'end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'normal',
    'left',
    'right'
];
const alignItemsValues = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'self-start',
    'self-end',
    'baseline',
    'normal',
    'stretch'
];
const genClsWrap = (prefixCls, props)=>{
    const wrap = props.wrap === true ? 'wrap' : props.wrap;
    return {
        [`${prefixCls}-wrap-${wrap}`]: wrap && flexWrapValues.includes(wrap)
    };
};
const genClsAlign = (prefixCls, props)=>{
    const alignCls = {};
    alignItemsValues.forEach((cssKey)=>{
        alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
    });
    alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
    return alignCls;
};
const genClsJustify = (prefixCls, props)=>{
    const justifyCls = {};
    justifyContentValues.forEach((cssKey)=>{
        justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
    });
    return justifyCls;
};
const createFlexClassNames = (prefixCls, props)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ...genClsWrap(prefixCls, props),
        ...genClsAlign(prefixCls, props),
        ...genClsJustify(prefixCls, props)
    });
};
const __TURBOPACK__default__export__ = createFlexClassNames;
}),
"[project]/apps/web/node_modules/antd/es/flex/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/utils.js [app-client] (ecmascript)");
;
;
const genFlexStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'flex',
            margin: 0,
            padding: 0,
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-rtl': {
                direction: 'rtl'
            },
            '&:empty': {
                display: 'none'
            }
        }
    };
};
const genFlexGapStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            '&-gap-small': {
                gap: token.flexGapSM
            },
            '&-gap-medium, &-gap-middle': {
                gap: token.flexGap
            },
            '&-gap-large': {
                gap: token.flexGapLG
            }
        }
    };
};
const genFlexWrapStyle = (token)=>{
    const { componentCls } = token;
    const wrapStyle = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flexWrapValues"].forEach((value)=>{
        wrapStyle[`${componentCls}-wrap-${value}`] = {
            flexWrap: value
        };
    });
    return wrapStyle;
};
const genAlignItemsStyle = (token)=>{
    const { componentCls } = token;
    const alignStyle = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alignItemsValues"].forEach((value)=>{
        alignStyle[`${componentCls}-align-${value}`] = {
            alignItems: value
        };
    });
    return alignStyle;
};
const genJustifyContentStyle = (token)=>{
    const { componentCls } = token;
    const justifyStyle = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["justifyContentValues"].forEach((value)=>{
        justifyStyle[`${componentCls}-justify-${value}`] = {
            justifyContent: value
        };
    });
    return justifyStyle;
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Flex', (token)=>{
    const { paddingXS, padding, paddingLG } = token;
    const flexToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        flexGapSM: paddingXS,
        flexGap: padding,
        flexGapLG: paddingLG
    });
    return [
        genFlexStyle(flexToken),
        genFlexGapStyle(flexToken),
        genFlexWrapStyle(flexToken),
        genAlignItemsStyle(flexToken),
        genJustifyContentStyle(flexToken)
    ];
}, prepareComponentToken, {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: false
});
}),
"[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/gapSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/utils.js [app-client] (ecmascript)");
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
const Flex = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, rootClassName, className, style, flex, gap, vertical, orientation, component: Component = 'div', children, ...othersProps } = props;
    const { flex: ctxFlex, direction: ctxDirection, getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('flex', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical ?? ctxFlex?.vertical);
    const mergedCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, rootClassName, ctxFlex?.className, prefixCls, hashId, cssVarCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, {
        ...props,
        vertical: mergedVertical
    }), {
        [`${prefixCls}-rtl`]: ctxDirection === 'rtl',
        [`${prefixCls}-gap-${gap}`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(gap),
        [`${prefixCls}-vertical`]: mergedVertical
    });
    const mergedStyle = {
        ...ctxFlex?.style,
        ...style
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(flex)) {
        mergedStyle.flex = flex;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(gap) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(gap)) {
        mergedStyle.gap = gap;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
        ref: ref,
        className: mergedCls,
        style: mergedStyle,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(othersProps, [
            'justify',
            'wrap',
            'align'
        ])
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Flex.displayName = 'Flex';
}
const __TURBOPACK__default__export__ = Flex;
}),
"[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/input/Group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
/** @deprecated Please use `Space.Compact` */ const Group = (props)=>{
    const { getPrefixCls, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className } = props;
    const prefixCls = getPrefixCls('input-group', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input');
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(inputPrefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, cssVarCls, {
        [`${prefixCls}-lg`]: props.size === 'large',
        [`${prefixCls}-sm`]: props.size === 'small',
        [`${prefixCls}-compact`]: props.compact,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, hashId, className);
    const formItemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const groupFormItemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Group.useMemo[groupFormItemContext]": ()=>({
                ...formItemContext,
                isFormItemInput: false
            })
    }["Group.useMemo[groupFormItemContext]"], [
        formItemContext
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input.Group');
        warning.deprecated(false, 'Input.Group', 'Space.Compact');
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: groupFormItemContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Compact, {
        className: cls,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onFocus: props.onFocus,
        onBlur: props.onBlur
    }, props.children));
};
const __TURBOPACK__default__export__ = Group;
}),
"[project]/apps/web/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useRemovePasswordTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
    const removePasswordTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const removePasswordTimeout = ()=>{
        removePasswordTimeoutRef.current.push(setTimeout(()=>{
            if (inputRef.current?.input && inputRef.current?.input.getAttribute('type') === 'password' && inputRef.current?.input.hasAttribute('value')) {
                inputRef.current?.input.removeAttribute('value');
            }
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRemovePasswordTimeout.useEffect": ()=>{
            if (triggerOnMount) {
                removePasswordTimeout();
            }
            return ({
                "useRemovePasswordTimeout.useEffect": ()=>removePasswordTimeoutRef.current.forEach({
                        "useRemovePasswordTimeout.useEffect": (timer)=>{
                            if (timer) {
                                clearTimeout(timer);
                            }
                        }
                    }["useRemovePasswordTimeout.useEffect"])
            })["useRemovePasswordTimeout.useEffect"];
        }
    }["useRemovePasswordTimeout.useEffect"], [
        triggerOnMount
    ]);
    return removePasswordTimeout;
}
}),
"[project]/apps/web/node_modules/antd/es/input/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPrefixSuffix",
    ()=>hasPrefixSuffix
]);
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}
}),
"[project]/apps/web/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/input/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/utils.js [app-client] (ecmascript)");
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
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls: customizePrefixCls, bordered = true, status: customStatus, size: customSize, disabled: customDisabled, onBlur, onFocus, suffix, allowClear, addonAfter, addonBefore, className, style, styles, rootClassName, onChange, classNames, variant: customVariant, ...rest } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const { deprecated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input');
        [
            [
                'bordered',
                'variant'
            ],
            [
                'addonAfter',
                'Space.Compact'
            ],
            [
                'addonBefore',
                'Space.Compact'
            ]
        ].forEach(([prop, newProp])=>{
            deprecated(!(prop in props), prop, newProp);
        });
    }
    const { getPrefixCls, direction, allowClear: contextAllowClear, autoComplete: contextAutoComplete, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('input');
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSharedStyle"])(prefixCls, rootClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(prefixCls, rootCls);
    // ===================== Compact Item =====================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    // ===================== Size =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Input.useSize[mergedSize]": (ctx)=>customSize ?? compactSize ?? ctx
    }["Input.useSize[mergedSize]"]);
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size: mergedSize,
        disabled: mergedDisabled
    };
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
        props: mergedProps
    });
    // ===================== Status =====================
    const { status: contextStatus, hasFeedback, feedbackIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    // ===================== Focus warning =====================
    const inputHasPrefixSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrefixSuffix"])(props) || !!hasFeedback;
    const prevHasPrefixSuffixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(inputHasPrefixSuffix);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Input.useEffect": ()=>{
                if (inputHasPrefixSuffix && !prevHasPrefixSuffixRef.current) {
                    ("TURBOPACK compile-time truthy", 1) ? warning(document.activeElement === inputRef.current?.input, 'usage', `When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ`) : "TURBOPACK unreachable";
                }
                prevHasPrefixSuffixRef.current = inputHasPrefixSuffix;
            }
        }["Input.useEffect"], [
            inputHasPrefixSuffix
        ]);
    }
    // ===================== Remove Password value =====================
    const removePasswordTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef, true);
    const handleBlur = (e)=>{
        removePasswordTimeout();
        onBlur?.(e);
    };
    const handleFocus = (e)=>{
        removePasswordTimeout();
        onFocus?.(e);
    };
    const handleChange = (e)=>{
        removePasswordTimeout();
        onChange?.(e);
    };
    const suffixNode = (hasFeedback || suffix) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, suffix, hasFeedback && feedbackIcon);
    const mergedAllowClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllowClear"])({
        allowClear,
        contextAllowClear,
        componentName: 'Input'
    });
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('input', customVariant, bordered);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, inputRef),
        prefixCls: prefixCls,
        autoComplete: contextAutoComplete,
        ...rest,
        disabled: mergedDisabled,
        onBlur: handleBlur,
        onFocus: handleFocus,
        style: mergedStyles.root,
        styles: mergedStyles,
        suffix: suffixNode,
        allowClear: mergedAllowClear,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, contextClassName, mergedClassNames.root),
        onChange: handleChange,
        addonBefore: addonBefore && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            form: true,
            space: true
        }, addonBefore),
        addonAfter: addonAfter && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            form: true,
            space: true
        }, addonAfter),
        classNames: {
            ...mergedClassNames,
            input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-sm`]: mergedSize === 'small',
                [`${prefixCls}-lg`]: mergedSize === 'large',
                [`${prefixCls}-rtl`]: direction === 'rtl'
            }, mergedClassNames.input, hashId),
            variant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-${variant}`]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus)),
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-affix-wrapper-sm`]: mergedSize === 'small',
                [`${prefixCls}-affix-wrapper-lg`]: mergedSize === 'large',
                [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl'
            }, hashId),
            wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-group-rtl`]: direction === 'rtl'
            }, hashId),
            groupWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                [`${prefixCls}-group-wrapper-sm`]: mergedSize === 'small',
                [`${prefixCls}-group-wrapper-lg`]: mergedSize === 'large',
                [`${prefixCls}-group-wrapper-rtl`]: direction === 'rtl',
                [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
        }
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Input.displayName = 'Input';
}
const __TURBOPACK__default__export__ = Input;
}),
"[project]/apps/web/node_modules/antd/es/input/style/otp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// =============================== OTP ================================
const genOTPStyle = (token)=>{
    const { componentCls, paddingXS } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            columnGap: paddingXS,
            [`${componentCls}-input-wrapper`]: {
                position: 'relative',
                [`${componentCls}-mask-icon`]: {
                    position: 'absolute',
                    zIndex: '1',
                    top: '50%',
                    right: '50%',
                    transform: 'translate(50%, -50%)',
                    pointerEvents: 'none'
                },
                [`${componentCls}-mask-input`]: {
                    color: 'transparent',
                    caretColor: token.colorText,
                    '&::selection': {
                        color: 'transparent'
                    }
                },
                [`${componentCls}-mask-input[type=number]::-webkit-inner-spin-button`]: {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                [`${componentCls}-mask-input[type=number]`]: {
                    '-moz-appearance': 'textfield'
                }
            },
            '&-rtl': {
                direction: 'rtl'
            },
            [`${componentCls}-input`]: {
                textAlign: 'center',
                paddingInline: token.paddingXXS
            },
            // ================= Size =================
            [`&${componentCls}-sm ${componentCls}-input`]: {
                paddingInline: token.calc(token.paddingXXS).div(2).equal()
            },
            [`&${componentCls}-lg ${componentCls}-input`]: {
                paddingInline: token.paddingXS
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'OTP'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return genOTPStyle(inputToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/input/OTP/OTPInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const DEFAULT_MASK_VALUE = '•';
const OTPInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, value, onChange, onActiveChange, index, mask, onFocus, type, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('otp');
    const maskValue = typeof mask === 'string' ? mask : DEFAULT_MASK_VALUE;
    // ========================== Ref ===========================
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "OTPInput.useImperativeHandle": ()=>inputRef.current
    }["OTPInput.useImperativeHandle"]);
    // ========================= Input ==========================
    const onInternalChange = (e)=>{
        onChange(index, e.target.value);
    };
    // ========================= Focus ==========================
    const syncSelection = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])(()=>{
            const inputEle = inputRef.current?.input;
            if (document.activeElement === inputEle && inputEle) {
                inputEle.select();
            }
        });
    };
    const onInternalFocus = (e)=>{
        onFocus?.(e);
        syncSelection();
    };
    // ======================== Keyboard ========================
    const onInternalKeyDown = (event)=>{
        const { key, ctrlKey, metaKey } = event;
        if (key === 'ArrowLeft') {
            onActiveChange(index - 1);
        } else if (key === 'ArrowRight') {
            onActiveChange(index + 1);
        } else if (key === 'z' && (ctrlKey || metaKey)) {
            event.preventDefault();
        } else if (key === 'Backspace' && !value) {
            onActiveChange(index - 1);
        }
        syncSelection();
    };
    // ========================= Render =========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-input-wrapper`,
        role: "presentation"
    }, mask && value !== '' && value !== undefined && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-mask-icon`,
        "aria-hidden": "true"
    }, maskValue), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        "aria-label": `OTP Input ${index + 1}`,
        ...restProps,
        type: type ?? (mask ? 'password' : 'text'),
        ref: inputRef,
        value: value,
        onInput: onInternalChange,
        onFocus: onInternalFocus,
        onKeyDown: onInternalKeyDown,
        onMouseDown: syncSelection,
        onMouseUp: syncSelection,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, {
            [`${prefixCls}-mask-input`]: mask
        })
    }));
});
const __TURBOPACK__default__export__ = OTPInput;
}),
"[project]/apps/web/node_modules/antd/es/input/OTP/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript) <export default as pickAttrs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$otp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/otp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$OTPInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/OTP/OTPInput.js [app-client] (ecmascript)");
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
function strToArr(str) {
    return (str || '').split('');
}
const Separator = (props)=>{
    const { index, prefixCls, separator, className: semanticClassName, style: semanticStyle } = props;
    const separatorNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(separator) ? separator(index) : separator;
    if (!separatorNode) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-separator`, semanticClassName),
        style: semanticStyle
    }, separatorNode);
};
const OTP = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, length = 6, size: customSize, defaultValue, value, onChange, formatter, separator, variant: customizeVariant, disabled, status: customStatus, autoFocus, mask, type, autoComplete, onInput, onFocus, inputMode, classNames, styles, className, style, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input.OTP');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof mask === 'string' && mask.length > 1), 'usage', '`mask` prop should be a single character.') : "TURBOPACK unreachable";
    }
    const { classNames: contextClassNames, styles: contextStyles, getPrefixCls, direction, style: contextStyle, className: contextClassName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('otp');
    const prefixCls = getPrefixCls('otp', customizePrefixCls);
    const [variant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('otp', customizeVariant, undefined, 'input');
    const mergedProps = {
        ...props,
        length,
        variant
    };
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
        props: mergedProps
    });
    const domAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(restProps, {
        aria: true,
        data: true,
        attr: true
    });
    // ========================= Root =========================
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$otp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ========================= Size =========================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "OTP.useSize[mergedSize]": (ctx)=>customSize ?? ctx
    }["OTP.useSize[mergedSize]"]);
    // ======================== Status ========================
    const formContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(formContext.status, customStatus);
    const proxyFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OTP.useMemo[proxyFormContext]": ()=>({
                ...formContext,
                status: mergedStatus,
                hasFeedback: false,
                feedbackIcon: null
            })
    }["OTP.useMemo[proxyFormContext]"], [
        formContext,
        mergedStatus
    ]);
    // ========================= Refs =========================
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inputsRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "OTP.useImperativeHandle": ()=>({
                focus: ({
                    "OTP.useImperativeHandle": ()=>{
                        inputsRef.current[0]?.focus();
                    }
                })["OTP.useImperativeHandle"],
                blur: ({
                    "OTP.useImperativeHandle": ()=>{
                        for(let i = 0; i < length; i += 1){
                            inputsRef.current[i]?.blur();
                        }
                    }
                })["OTP.useImperativeHandle"],
                nativeElement: containerRef.current
            })
    }["OTP.useImperativeHandle"]);
    // ======================= Formatter ======================
    const internalFormatter = (txt)=>formatter ? formatter(txt) : txt;
    // ======================== Values ========================
    const [valueCells, setValueCells] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "OTP.useState": ()=>strToArr(internalFormatter(defaultValue || ''))
    }["OTP.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OTP.useEffect": ()=>{
            if (value !== undefined) {
                setValueCells(strToArr(value));
            }
        }
    }["OTP.useEffect"], [
        value
    ]);
    const triggerValueCellsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "OTP.useEvent[triggerValueCellsChange]": (nextValueCells)=>{
            setValueCells(nextValueCells);
            if (onInput) {
                onInput(nextValueCells);
            }
            // Trigger if all cells are filled
            if (onChange && nextValueCells.length === length && nextValueCells.every({
                "OTP.useEvent[triggerValueCellsChange]": (c)=>c
            }["OTP.useEvent[triggerValueCellsChange]"]) && nextValueCells.some({
                "OTP.useEvent[triggerValueCellsChange]": (c, index)=>valueCells[index] !== c
            }["OTP.useEvent[triggerValueCellsChange]"])) {
                onChange(nextValueCells.join(''));
            }
        }
    }["OTP.useEvent[triggerValueCellsChange]"]);
    const patchValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "OTP.useEvent[patchValue]": (index, txt)=>{
            let nextCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(valueCells);
            // Fill cells till index
            for(let i = 0; i < index; i += 1){
                if (!nextCells[i]) {
                    nextCells[i] = '';
                }
            }
            if (txt.length <= 1) {
                nextCells[index] = txt;
            } else {
                nextCells = nextCells.slice(0, index).concat(strToArr(txt));
            }
            nextCells = nextCells.slice(0, length);
            // Clean the last empty cell
            for(let i = nextCells.length - 1; i >= 0; i -= 1){
                if (nextCells[i]) {
                    break;
                }
                nextCells.pop();
            }
            // Format if needed
            const formattedValue = internalFormatter(nextCells.map({
                "OTP.useEvent[patchValue].formattedValue": (c)=>c || ' '
            }["OTP.useEvent[patchValue].formattedValue"]).join(''));
            nextCells = strToArr(formattedValue).map({
                "OTP.useEvent[patchValue]": (c, i)=>{
                    if (c === ' ' && !nextCells[i]) {
                        return nextCells[i];
                    }
                    return c;
                }
            }["OTP.useEvent[patchValue]"]);
            return nextCells;
        }
    }["OTP.useEvent[patchValue]"]);
    // ======================== Change ========================
    const onInputChange = (index, txt)=>{
        const nextCells = patchValue(index, txt);
        const nextIndex = Math.min(index + txt.length, length - 1);
        if (nextIndex !== index && nextCells[index] !== undefined) {
            inputsRef.current[nextIndex]?.focus();
        }
        triggerValueCellsChange(nextCells);
    };
    const onInputActiveChange = (nextIndex)=>{
        inputsRef.current[nextIndex]?.focus();
    };
    // ======================== Focus ========================
    const onInputFocus = (event, index)=>{
        // keep focus on the first empty cell
        for(let i = 0; i < index; i += 1){
            if (!inputsRef.current[i]?.input?.value) {
                inputsRef.current[i]?.focus();
                break;
            }
        }
        onFocus?.(event);
    };
    // ======================== Render ========================
    const inputSharedProps = {
        variant,
        disabled,
        status: mergedStatus,
        mask,
        type,
        inputMode,
        autoComplete
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...domAttrs,
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, prefixCls, {
            [`${prefixCls}-sm`]: mergedSize === 'small',
            [`${prefixCls}-lg`]: mergedSize === 'large',
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }, cssVarCls, hashId, contextClassName, mergedClassNames.root),
        style: mergedStyles.root,
        role: "group"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: proxyFormContext
    }, Array.from({
        length
    }).map((_, index)=>{
        const key = `otp-${index}`;
        const singleValue = valueCells[index] || '';
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            key: key
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$OTPInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: (inputEle)=>{
                inputsRef.current[index] = inputEle;
            },
            index: index,
            size: mergedSize,
            htmlSize: 1,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.input, `${prefixCls}-input`),
            style: mergedStyles.input,
            onChange: onInputChange,
            value: singleValue,
            onActiveChange: onInputActiveChange,
            autoFocus: index === 0 && autoFocus,
            onFocus: (event)=>onInputFocus(event, index),
            ...inputSharedProps
        }), index < length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Separator, {
            separator: separator,
            index: index,
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.separator),
            style: mergedStyles.separator
        }));
    })));
});
const __TURBOPACK__default__export__ = OTP;
}),
"[project]/apps/web/node_modules/antd/es/input/Password.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
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
const defaultIconRender = (visible)=>visible ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const actionMap = {
    click: 'onClick',
    hover: 'onMouseOver'
};
const Password = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { disabled: customDisabled, action = 'click', visibilityToggle = true, iconRender, prefixCls: customizePrefixCls, inputPrefixCls: customizeInputPrefixCls, suffix, className, style, classNames, styles, variant: customizeVariant, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, iconRender: contextIconRender } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('inputPassword');
    const [variant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('inputPassword', customizeVariant, props.bordered, 'input');
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('global');
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        disabled: mergedDisabled,
        variant
    };
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
        props: mergedProps
    });
    const visibilityControlled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(visibilityToggle) && visibilityToggle.visible !== undefined;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Password.useState": ()=>visibilityControlled ? visibilityToggle.visible : false
    }["Password.useState"]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Password.useEffect": ()=>{
            if (visibilityControlled) {
                setVisible(visibilityToggle.visible);
            }
        }
    }["Password.useEffect"], [
        visibilityControlled,
        visibilityToggle
    ]);
    // Remove Password value
    const removePasswordTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef);
    const onVisibleChange = ()=>{
        if (mergedDisabled) {
            return;
        }
        if (visible) {
            removePasswordTimeout();
        }
        const nextVisible = !visible;
        setVisible(nextVisible);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(visibilityToggle)) {
            visibilityToggle.onVisibleChange?.(nextVisible);
        }
    };
    const getIcon = (prefixCls)=>{
        const iconTrigger = actionMap[action] || '';
        const iconRenderer = iconRender || contextIconRender || defaultIconRender;
        const icon = iconRenderer(visible);
        const iconTabIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(visibilityToggle) ? visibilityToggle.tabIndex : undefined;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            key: "passwordIcon",
            role: "button",
            tabIndex: mergedDisabled ? -1 : iconTabIndex ?? 0,
            className: `${prefixCls}-icon`,
            "aria-disabled": mergedDisabled,
            "aria-pressed": visible,
            "aria-label": visible ? locale.hide : locale.show,
            onMouseDown: (e)=>{
                // Prevent focused state lost
                // https://github.com/ant-design/ant-design/issues/15173
                e.preventDefault();
            },
            onMouseUp: (e)=>{
                // Prevent caret position change
                // https://github.com/ant-design/ant-design/issues/23524
                e.preventDefault();
            },
            onKeyDown: (e)=>{
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onVisibleChange();
                }
            },
            [iconTrigger]: onVisibleChange
        }, icon);
    };
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    const prefixCls = getPrefixCls('input-password', customizePrefixCls);
    const suffixIcon = visibilityToggle && getIcon(prefixCls);
    const inputClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, className, {
        [`${prefixCls}-${props.size}`]: !!props.size
    });
    const inputProps = {
        ...restProps,
        type: visible ? 'text' : 'password',
        prefixCls: inputPrefixCls,
        suffix: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, suffixIcon, suffix),
        disabled: mergedDisabled,
        className: inputClassName,
        classNames: mergedClassNames,
        styles: mergedStyles,
        variant
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, inputRef),
        ...inputProps
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Password.displayName = 'Input.Password';
}
const __TURBOPACK__default__export__ = Password;
}),
"[project]/apps/web/node_modules/antd/es/input/style/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
;
;
;
;
const genSearchStyle = (token)=>{
    const { componentCls, antCls, calc, max } = token;
    const btnCls = `${componentCls}-btn`;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'input-search');
    const inputFontSizeSM = token.inputFontSizeSM ?? token.fontSize;
    const smallButtonHeight = max(token.controlHeightSM, calc(inputFontSizeSM).mul(token.lineHeight).add(calc(token.paddingBlockSM).mul(2)).add(calc(token.lineWidth).mul(2)).equal());
    return {
        [componentCls]: {
            [varName('btn-height')]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlHeight),
            width: '100%',
            // =========================== Button ===========================
            [btnCls]: {
                height: varRef('btn-height'),
                '&:focus-visible': {
                    zIndex: 5
                },
                [`&${antCls}-btn-icon-only`]: {
                    width: varRef('btn-height')
                },
                '&-filled': {
                    background: token.colorFillTertiary,
                    '&:not(:disabled)': {
                        '&:hover': {
                            background: token.colorFillSecondary
                        },
                        '&:active': {
                            background: token.colorFill
                        }
                    }
                }
            },
            [`&${componentCls}-large`]: {
                [varName('btn-height')]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlHeightLG)
            },
            [`&${componentCls}-small`]: {
                [varName('btn-height')]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlHeightSM)
            },
            [`&${componentCls}-small ${btnCls}`]: {
                minHeight: smallButtonHeight,
                [`&${token.antCls}-btn-icon-only`]: {
                    minWidth: smallButtonHeight
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Search'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return genSearchStyle(inputToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/input/Search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript) <export default as pickAttrs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/fallbackProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/style/search.js [app-client] (ecmascript)");
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
const Search = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, inputPrefixCls: customizeInputPrefixCls, className, size: customizeSize, style, enterButton = false, searchIcon: customizeSearchIcon, addonAfter, loading, disabled, onSearch: customOnSearch, onChange: customOnChange, onCompositionStart, onCompositionEnd, variant: customizeVariant, onPressEnter: customOnPressEnter, classNames, styles, hidden, ...restProps } = props;
    const { direction, getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, searchIcon: contextSearchIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('inputSearch');
    const contextDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = disabled ?? contextDisabled;
    const [mergedVariant, , isVariantConfigured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('inputSearch', customizeVariant, props.bordered);
    const variant = isVariantConfigured ? mergedVariant : undefined;
    const [inputVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('inputSearch', customizeVariant, props.bordered, 'input');
    const mergedProps = {
        ...props,
        enterButton,
        variant
    };
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
        props: mergedProps
    }, {
        button: {
            _default: 'root'
        }
    });
    const composedRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const prefixCls = getPrefixCls('input-search', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { compactSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Search.useSize[size]": (ctx)=>customizeSize ?? compactSize ?? ctx
    }["Search.useSize[size]"]);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const onChange = (e)=>{
        if (e?.target && e.type === 'click' && customOnSearch) {
            customOnSearch(e.target.value, e, {
                source: 'clear'
            });
        }
        customOnChange?.(e);
    };
    const onMouseDown = (e)=>{
        if (document.activeElement === inputRef.current?.input) {
            e.preventDefault();
        }
    };
    const onSearch = (e)=>{
        if (customOnSearch) {
            customOnSearch(inputRef.current?.input?.value, e, {
                source: 'input'
            });
        }
    };
    const onPressEnter = (e)=>{
        if (composedRef.current || loading) {
            return;
        }
        customOnPressEnter?.(e);
        onSearch(e);
    };
    const searchIcon = typeof enterButton === 'boolean' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customizeSearchIcon, contextSearchIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const btnPrefixCls = `${prefixCls}-btn`;
    const btnClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(btnPrefixCls, {
        [`${btnPrefixCls}-${variant}`]: variant
    });
    let button;
    const enterButtonAsElement = enterButton || {};
    const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
    if (isAntdButton || enterButtonAsElement.type === 'button') {
        const enterButtonProps = enterButtonAsElement.props;
        button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(enterButtonAsElement, {
            disabled: mergedDisabled || enterButtonProps.disabled || !isAntdButton && loading,
            onMouseDown,
            onClick: (e)=>{
                enterButtonAsElement?.props?.onClick?.(e);
                onSearch(e);
            },
            key: 'enterButton',
            ...isAntdButton ? {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(btnClassName, enterButtonProps.className),
                loading: loading || enterButtonProps.loading,
                size
            } : {}
        });
    } else {
        button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            classNames: mergedClassNames.button,
            styles: mergedStyles.button,
            className: btnClassName,
            color: enterButton ? 'primary' : 'default',
            size: size,
            disabled: disabled,
            key: "enterButton",
            onMouseDown: onMouseDown,
            onClick: onSearch,
            loading: loading,
            icon: searchIcon,
            variant: variant === 'borderless' || variant === 'filled' || variant === 'underlined' ? 'text' : enterButton ? 'solid' : undefined
        }, enterButton);
    }
    if (addonAfter) {
        button = [
            button,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(addonAfter, {
                key: 'addonAfter'
            })
        ];
    }
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-${size}`]: !!size,
        [`${prefixCls}-with-button`]: !!enterButton
    }, className, contextClassName, hashId, mergedClassNames.root);
    const handleOnCompositionStart = (e)=>{
        composedRef.current = true;
        onCompositionStart?.(e);
    };
    const handleOnCompositionEnd = (e)=>{
        composedRef.current = false;
        onCompositionEnd?.(e);
    };
    // ========================== Render ==========================
    // >>> Root Props
    const rootProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(restProps, {
        data: true
    });
    const inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])({
        ...restProps,
        classNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedClassNames, [
            'button',
            'root'
        ]),
        styles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedStyles, [
            'button',
            'root'
        ]),
        prefixCls: inputPrefixCls,
        type: 'search',
        size,
        variant: inputVariant,
        onPressEnter,
        onCompositionStart: handleOnCompositionStart,
        onCompositionEnd: handleOnCompositionEnd,
        onChange,
        disabled
    }, Object.keys(rootProps));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: mergedClassName,
        style: mergedStyles.root,
        ...rootProps,
        hidden: hidden
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(inputRef, ref),
        ...inputProps
    }), button);
});
if ("TURBOPACK compile-time truthy", 1) {
    Search.displayName = 'Search';
}
const __TURBOPACK__default__export__ = Search;
}),
"[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/OTP/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Password$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Password.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Input.Group = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.Search = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.TextArea = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.Password = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$Password$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.OTP = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Input;
}),
"[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/tabs/hooks/useAnimateConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAnimateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
;
;
const motion = {
    motionAppear: false,
    motionEnter: true,
    motionLeave: true
};
function useAnimateConfig(prefixCls, animated = {
    inkBar: true,
    tabPane: false
}) {
    let mergedAnimated;
    if (animated === false) {
        mergedAnimated = {
            inkBar: false,
            tabPane: false
        };
    } else if (animated === true) {
        mergedAnimated = {
            inkBar: true,
            tabPane: true
        };
    } else {
        mergedAnimated = {
            inkBar: true,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(animated) ? animated : {}
        };
    }
    if (mergedAnimated.tabPane) {
        mergedAnimated.tabPaneMotion = {
            ...motion,
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, 'switch')
        };
    }
    return mergedAnimated;
}
}),
"[project]/apps/web/node_modules/antd/es/tabs/hooks/useLegacyItems.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
;
;
function filter(items) {
    return items.filter((item)=>item);
}
function useLegacyItems(items, children) {
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tabs');
        warning.deprecated(!children, 'Tabs.TabPane', 'items');
    }
    if (items) {
        return items.map((item)=>({
                ...item,
                destroyOnHidden: item.destroyOnHidden ?? item.destroyInactiveTabPane
            }));
    }
    const childrenItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map((node)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](node)) {
            const { key, props } = node;
            const { tab, ...restProps } = props || {};
            const item = {
                key: String(key),
                ...restProps,
                label: tab
            };
            return item;
        }
        return null;
    });
    return filter(childrenItems);
}
const __TURBOPACK__default__export__ = useLegacyItems;
}),
"[project]/apps/web/node_modules/antd/es/tabs/style/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)");
;
const genMotionStyle = (token)=>{
    const { componentCls, motionDurationSlow } = token;
    return [
        {
            [componentCls]: {
                [`${componentCls}-switch`]: {
                    '&-appear, &-enter': {
                        transition: 'none',
                        '&-start': {
                            opacity: 0
                        },
                        '&-active': {
                            opacity: 1,
                            transition: `opacity ${motionDurationSlow}`
                        }
                    },
                    '&-leave': {
                        position: 'absolute',
                        transition: 'none',
                        inset: 0,
                        '&-start': {
                            opacity: 1
                        },
                        '&-active': {
                            opacity: 0,
                            transition: `opacity ${motionDurationSlow}`
                        }
                    }
                }
            }
        },
        // Follow code may reuse in other components
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down')
        ]
    ];
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/apps/web/node_modules/antd/es/tabs/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/style/motion.js [app-client] (ecmascript)");
;
;
;
;
;
const genCardStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardBg, cardGutter, colorBorderSecondary, itemSelectedColor } = token;
    return {
        [`${componentCls}-card`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-tab`]: {
                    margin: 0,
                    padding: tabsCardPadding,
                    background: cardBg,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
                },
                [`${componentCls}-tab-active`]: {
                    color: itemSelectedColor,
                    background: token.colorBgContainer
                },
                [`${componentCls}-tab-focus:has(${componentCls}-tab-btn:focus-visible)`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token, -3),
                [`& ${componentCls}-tab${componentCls}-tab-focus ${componentCls}-tab-btn:focus-visible`]: {
                    outline: 'none'
                },
                [`${componentCls}-ink-bar`]: {
                    visibility: 'hidden'
                }
            },
            // ========================== Top & Bottom ==========================
            [`&${componentCls}-top, &${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(cardGutter)
                        }
                    }
                }
            },
            [`&${componentCls}-top`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0`
                    },
                    [`${componentCls}-tab-active`]: {
                        borderBottomColor: token.colorBgContainer
                    }
                }
            },
            [`&${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)}`
                    },
                    [`${componentCls}-tab-active`]: {
                        borderTopColor: token.colorBgContainer
                    }
                }
            },
            // ========================== Left & Right ==========================
            [`&${componentCls}-left, &${componentCls}-right`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginTop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(cardGutter)
                    }
                }
            },
            [`&${componentCls}-left`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)}`
                        }
                    },
                    [`${componentCls}-tab-active`]: {
                        borderRightColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            },
            [`&${componentCls}-right`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0`
                        }
                    },
                    [`${componentCls}-tab-active`]: {
                        borderLeftColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            }
        }
    };
};
const genDropdownStyle = (token)=>{
    const { antCls, componentCls, itemHoverColor, dropdownEdgeChildVerticalPadding } = token;
    return {
        [`${componentCls}-dropdown`]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'absolute',
            top: -9999,
            left: {
                _skip_check_: true,
                value: -9999
            },
            zIndex: token.zIndexPopup,
            display: 'block',
            '&-hidden': {
                display: 'none'
            },
            // When position is not enough for tabs dropdown, the placement will revert.
            // We will handle this with revert motion name.
            [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-dropdown-placement-bottomRight,
        &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-dropdown-placement-bottomRight`]: {
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideUpIn"]
            },
            [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topRight,
        &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topRight`]: {
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideDownIn"]
            },
            [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottomLeft,
        &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottom,
        &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-dropdown-placement-bottomRight`]: {
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideUpOut"]
            },
            [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft,
        &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-top,
        &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topRight`]: {
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideDownOut"]
            },
            [`${componentCls}-dropdown-menu`]: {
                maxHeight: token.tabsDropdownHeight,
                margin: 0,
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(dropdownEdgeChildVerticalPadding)} 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: {
                    _skip_check_: true,
                    value: 'left'
                },
                listStyleType: 'none',
                backgroundColor: token.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: token.borderRadiusLG,
                outline: 'none',
                boxShadow: token.boxShadowSecondary,
                '&-item': {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
                    display: 'flex',
                    alignItems: 'center',
                    minWidth: token.tabsDropdownWidth,
                    margin: 0,
                    padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)}`,
                    color: token.colorText,
                    fontWeight: 'normal',
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    cursor: 'pointer',
                    transition: `all ${token.motionDurationSlow}`,
                    '> span': {
                        flex: 1,
                        whiteSpace: 'nowrap'
                    },
                    '&-remove': {
                        flex: 'none',
                        marginLeft: {
                            _skip_check_: true,
                            value: token.marginSM
                        },
                        color: token.colorIcon,
                        fontSize: token.fontSizeSM,
                        background: 'transparent',
                        border: 0,
                        cursor: 'pointer',
                        '&:hover': {
                            color: itemHoverColor
                        }
                    },
                    '&:hover': {
                        background: token.controlItemBgHover
                    },
                    '&-disabled': {
                        '&, &:hover': {
                            color: token.colorTextDisabled,
                            background: 'transparent',
                            cursor: 'not-allowed'
                        }
                    }
                }
            }
        }
    };
};
const genPositionStyle = (token)=>{
    const { componentCls, margin, colorBorderSecondary, horizontalMargin, verticalItemPadding, verticalItemMargin, motionDurationSlow, calc } = token;
    return {
        // ========================== Top & Bottom ==========================
        [`${componentCls}-top, ${componentCls}-bottom`]: {
            flexDirection: 'column',
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                margin: horizontalMargin,
                '&::before': {
                    position: 'absolute',
                    right: {
                        _skip_check_: true,
                        value: 0
                    },
                    left: {
                        _skip_check_: true,
                        value: 0
                    },
                    borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
                    content: "''"
                },
                [`${componentCls}-ink-bar`]: {
                    height: token.lineWidthBold,
                    '&-animated': {
                        transition: [
                            'width',
                            'left',
                            'right'
                        ].map((prop)=>`${prop} ${motionDurationSlow}`).join(', ')
                    }
                },
                [`${componentCls}-nav-wrap`]: {
                    '&::before, &::after': {
                        top: 0,
                        bottom: 0,
                        width: token.controlHeight
                    },
                    '&::before': {
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowLeft
                    },
                    '&::after': {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowRight
                    },
                    [`&${componentCls}-nav-wrap-ping-left::before`]: {
                        opacity: 1
                    },
                    [`&${componentCls}-nav-wrap-ping-right::after`]: {
                        opacity: 1
                    }
                }
            }
        },
        [`${componentCls}-top`]: {
            [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
                '&::before': {
                    bottom: 0
                },
                [`${componentCls}-ink-bar`]: {
                    bottom: 0
                }
            }
        },
        [`${componentCls}-bottom`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                order: 1,
                marginTop: margin,
                marginBottom: 0,
                '&::before': {
                    top: 0
                },
                [`${componentCls}-ink-bar`]: {
                    top: 0
                }
            },
            [`> ${componentCls}-body-holder, > div > ${componentCls}-body-holder`]: {
                order: 0
            }
        },
        // ========================== Left & Right ==========================
        [`${componentCls}-left, ${componentCls}-right`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                flexDirection: 'column',
                minWidth: calc(token.controlHeight).mul(1.25).equal(),
                // >>>>>>>>>>> Tab
                [`${componentCls}-tab`]: {
                    padding: verticalItemPadding,
                    textAlign: 'center'
                },
                [`${componentCls}-tab + ${componentCls}-tab`]: {
                    margin: verticalItemMargin
                },
                // >>>>>>>>>>> Nav
                [`${componentCls}-nav-wrap`]: {
                    flexDirection: 'column',
                    '&::before, &::after': {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.controlHeight
                    },
                    '&::before': {
                        top: 0,
                        boxShadow: token.boxShadowTabsOverflowTop
                    },
                    '&::after': {
                        bottom: 0,
                        boxShadow: token.boxShadowTabsOverflowBottom
                    },
                    [`&${componentCls}-nav-wrap-ping-top::before`]: {
                        opacity: 1
                    },
                    [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
                        opacity: 1
                    }
                },
                // >>>>>>>>>>> Ink Bar
                [`${componentCls}-ink-bar`]: {
                    width: token.lineWidthBold,
                    '&-animated': {
                        transition: [
                            'height',
                            'top'
                        ].map((prop)=>`${prop} ${motionDurationSlow}`).join(', ')
                    }
                },
                [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
                    flex: '1 0 auto',
                    // fix safari scroll problem
                    flexDirection: 'column'
                }
            }
        },
        [`${componentCls}-left`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-ink-bar`]: {
                    right: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            [`> ${componentCls}-body-holder, > div > ${componentCls}-body-holder`]: {
                marginLeft: {
                    _skip_check_: true,
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.lineWidth).mul(-1).equal())
                },
                borderLeft: {
                    _skip_check_: true,
                    value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
                },
                [`> ${componentCls}-body > ${componentCls}-content`]: {
                    paddingLeft: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        },
        [`${componentCls}-right`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                order: 1,
                [`${componentCls}-ink-bar`]: {
                    left: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            [`> ${componentCls}-body-holder, > div > ${componentCls}-body-holder`]: {
                order: 0,
                marginRight: {
                    _skip_check_: true,
                    value: calc(token.lineWidth).mul(-1).equal()
                },
                borderRight: {
                    _skip_check_: true,
                    value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
                },
                [`> ${componentCls}-body > ${componentCls}-content`]: {
                    paddingRight: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        }
    };
};
const genSizeStyle = (token)=>{
    const { componentCls, cardPaddingSM, cardPaddingLG, cardHeightSM, cardHeightLG, horizontalItemPaddingSM, horizontalItemPaddingLG } = token;
    return {
        // >>>>> shared
        [componentCls]: {
            '&-small': {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: horizontalItemPaddingSM,
                        fontSize: token.titleFontSizeSM
                    }
                }
            },
            '&-large': {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: horizontalItemPaddingLG,
                        fontSize: token.titleFontSizeLG,
                        lineHeight: token.lineHeightLG
                    }
                }
            }
        },
        // >>>>> card
        [`${componentCls}-card`]: {
            // Small
            [`&${componentCls}-small`]: {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: cardPaddingSM
                    },
                    [`${componentCls}-nav-add`]: {
                        minWidth: cardHeightSM,
                        minHeight: cardHeightSM
                    }
                },
                [`&${componentCls}-bottom`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)}`
                    }
                },
                [`&${componentCls}-top`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} 0 0`
                    }
                },
                [`&${componentCls}-right`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} 0`
                        }
                    }
                },
                [`&${componentCls}-left`]: {
                    [`> ${componentCls}-nav ${componentCls}-tab`]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)} 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius)}`
                        }
                    }
                }
            },
            // Large
            [`&${componentCls}-large`]: {
                [`> ${componentCls}-nav`]: {
                    [`${componentCls}-tab`]: {
                        padding: cardPaddingLG
                    },
                    [`${componentCls}-nav-add`]: {
                        minWidth: cardHeightLG,
                        minHeight: cardHeightLG
                    }
                }
            }
        }
    };
};
const genTabStyle = (token)=>{
    const { componentCls, itemActiveColor, itemHoverColor, iconCls, tabsHorizontalItemMargin, horizontalItemPadding, itemSelectedColor, itemColor } = token;
    const tabCls = `${componentCls}-tab`;
    return {
        [tabCls]: {
            position: 'relative',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            padding: horizontalItemPadding,
            fontSize: token.titleFontSize,
            background: 'transparent',
            border: 0,
            outline: 'none',
            cursor: 'pointer',
            color: itemColor,
            '&-btn, &-remove': {
                '&:focus:not(:focus-visible), &:active': {
                    color: itemActiveColor
                }
            },
            '&-btn': {
                outline: 'none',
                transition: `all ${token.motionDurationSlow}`,
                [`${tabCls}-icon:not(:last-child)`]: {
                    marginInlineEnd: token.marginSM
                },
                // Icons from third-party libraries render as a bare `<svg>` inside the icon wrapper,
                // which the `.anticon` reset never reaches. An `<svg>` has no baseline of its own, so it
                // is aligned by its bottom margin edge (CSS 2.1 §10.8.1) and rides above the label.
                // `display: inline-block` keeps it an atomic inline box so `vertical-align` still applies
                // even under a CSS reset that forces `svg { display: block }` (e.g. Tailwind Preflight),
                // which would otherwise drop the icon onto its own line. `vertical-align: middle` centres its
                // margin box on the x-height line; `margin-block-end` then lifts it by half its own value onto
                // the cap-height centre (capHeight − xHeight ≈ 0.2em across typical fonts), keeping it centred
                // at any icon size.
                // Only matches a bare `<svg>`: an `.anticon` keeps its `<svg>` one level deeper.
                [`${tabCls}-icon > svg`]: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginBlockEnd: '0.2em'
                }
            },
            '&-remove': {
                flex: 'none',
                lineHeight: 1,
                marginRight: {
                    _skip_check_: true,
                    value: token.calc(token.marginXXS).mul(-1).equal()
                },
                marginLeft: {
                    _skip_check_: true,
                    value: token.marginXS
                },
                color: token.colorIcon,
                fontSize: token.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${token.motionDurationSlow}`,
                '&:hover': {
                    color: token.colorTextHeading
                },
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)
            },
            '&:hover': {
                color: itemHoverColor
            },
            [`&${tabCls}-active ${tabCls}-btn`]: {
                color: itemSelectedColor
            },
            [`&${tabCls}-focus ${tabCls}-btn:focus-visible`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
            [`&${tabCls}-disabled`]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            },
            [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
                '&:focus, &:active': {
                    color: token.colorTextDisabled
                }
            },
            [`& ${tabCls}-remove ${iconCls}`]: {
                margin: 0,
                verticalAlign: 'middle'
            },
            [`${iconCls}:not(:last-child)`]: {
                marginRight: {
                    _skip_check_: true,
                    value: token.marginSM
                }
            }
        },
        [`${tabCls} + ${tabCls}`]: {
            margin: {
                _skip_check_: true,
                value: tabsHorizontalItemMargin
            }
        }
    };
};
const genRtlStyle = (token)=>{
    const { componentCls, tabsHorizontalItemMarginRTL, iconCls, cardGutter, calc } = token;
    const rtlCls = `${componentCls}-rtl`;
    return {
        [rtlCls]: {
            direction: 'rtl',
            [`${componentCls}-nav`]: {
                [`${componentCls}-tab`]: {
                    margin: {
                        _skip_check_: true,
                        value: tabsHorizontalItemMarginRTL
                    },
                    [`${componentCls}-tab:last-of-type`]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    },
                    [iconCls]: {
                        marginRight: {
                            _skip_check_: true,
                            value: 0
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: token.marginSM
                        }
                    },
                    [`${componentCls}-tab-remove`]: {
                        marginRight: {
                            _skip_check_: true,
                            value: token.marginXS
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: calc(token.marginXXS).mul(-1).equal()
                        },
                        [iconCls]: {
                            margin: 0
                        }
                    }
                }
            },
            [`&${componentCls}-left`]: {
                [`> ${componentCls}-nav`]: {
                    order: 1
                },
                [`> ${componentCls}-body-holder`]: {
                    order: 0
                }
            },
            [`&${componentCls}-right`]: {
                [`> ${componentCls}-nav`]: {
                    order: 0
                },
                [`> ${componentCls}-body-holder`]: {
                    order: 1
                }
            },
            // ====================== Card ======================
            [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
                [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                    [`${componentCls}-tab + ${componentCls}-tab`]: {
                        marginRight: {
                            _skip_check_: true,
                            value: cardGutter
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    }
                }
            }
        },
        [`${componentCls}-dropdown-rtl`]: {
            direction: 'rtl'
        },
        [`${componentCls}-menu-item`]: {
            [`${componentCls}-dropdown-rtl`]: {
                textAlign: {
                    _skip_check_: true,
                    value: 'right'
                }
            }
        }
    };
};
const genTabsStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardHeight, cardGutter, itemHoverColor, itemActiveColor, colorBorderSecondary } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            display: 'flex',
            // ========================== Navigation ==========================
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                position: 'relative',
                display: 'flex',
                flex: 'none',
                alignItems: 'center',
                [`${componentCls}-nav-wrap`]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'auto',
                    alignSelf: 'stretch',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transform: 'translate(0)',
                    // Fix chrome render bug
                    // >>>>> Ping shadow
                    '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${token.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: 'none'
                    }
                },
                [`${componentCls}-nav-list`]: {
                    position: 'relative',
                    display: 'flex',
                    transition: `opacity ${token.motionDurationSlow}`
                },
                // >>>>>>>> Operations
                [`${componentCls}-nav-operations`]: {
                    display: 'flex',
                    alignSelf: 'stretch'
                },
                [`${componentCls}-nav-operations-hidden`]: {
                    position: 'absolute',
                    visibility: 'hidden',
                    pointerEvents: 'none'
                },
                [`${componentCls}-nav-more`]: {
                    position: 'relative',
                    padding: tabsCardPadding,
                    background: 'transparent',
                    border: 0,
                    color: token.colorText,
                    '&::after': {
                        position: 'absolute',
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        bottom: 0,
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.calc(token.controlHeightLG).div(8).equal(),
                        transform: 'translateY(100%)',
                        content: "''"
                    }
                },
                [`${componentCls}-nav-add`]: {
                    minWidth: cardHeight,
                    minHeight: cardHeight,
                    marginLeft: {
                        _skip_check_: true,
                        value: cardGutter
                    },
                    background: 'transparent',
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
                    borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0`,
                    outline: 'none',
                    cursor: 'pointer',
                    color: token.colorText,
                    transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
                    '&:hover': {
                        color: itemHoverColor
                    },
                    '&:active, &:focus:not(:focus-visible)': {
                        color: itemActiveColor
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token, -3)
                }
            },
            [`${componentCls}-extra-content`]: {
                flex: 'none'
            },
            // ============================ InkBar ============================
            [`${componentCls}-ink-bar`]: {
                position: 'absolute',
                background: token.inkBarColor,
                pointerEvents: 'none'
            },
            // ============================= Tabs =============================
            ...genTabStyle(token),
            // =========================== TabPanes ===========================
            [`${componentCls}-body`]: {
                position: 'relative',
                width: '100%'
            },
            [`${componentCls}-body-holder`]: {
                flex: 'auto',
                minWidth: 0,
                minHeight: 0
            },
            [`${componentCls}-content`]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                '&-hidden': {
                    display: 'none'
                }
            }
        },
        [`${componentCls}-centered`]: {
            [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
                [`${componentCls}-nav-wrap`]: {
                    [`&:not([class*='${componentCls}-nav-wrap-ping']) > ${componentCls}-nav-list`]: {
                        margin: 'auto'
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { cardHeight, cardHeightSM, cardHeightLG, controlHeight, controlHeightLG } = token;
    const mergedCardHeight = cardHeight || controlHeightLG;
    const mergedCardHeightSM = cardHeightSM || controlHeight;
    // `controlHeight` missing XL variable, so we directly write it here:
    const mergedCardHeightLG = cardHeightLG || controlHeightLG + 8;
    return {
        zIndexPopup: token.zIndexPopupBase + 50,
        cardBg: token.colorFillAlter,
        // We can not pass this as valid value,
        // Since `cardHeight` will lock nav add button height.
        cardHeight: mergedCardHeight,
        cardHeightSM: mergedCardHeightSM,
        cardHeightLG: mergedCardHeightLG,
        // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
        cardPadding: `${(mergedCardHeight - token.fontHeight) / 2 - token.lineWidth}px ${token.padding}px`,
        cardPaddingSM: `${(mergedCardHeightSM - token.fontHeight) / 2 - token.lineWidth}px ${token.paddingXS}px`,
        cardPaddingLG: `${(mergedCardHeightLG - token.fontHeightLG) / 2 - token.lineWidth}px ${token.padding}px`,
        titleFontSize: token.fontSize,
        titleFontSizeLG: token.fontSizeLG,
        titleFontSizeSM: token.fontSize,
        inkBarColor: token.colorPrimary,
        horizontalMargin: `0 0 ${token.margin}px 0`,
        horizontalItemGutter: 32,
        // Fixed Value
        // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
        horizontalItemMargin: ``,
        horizontalItemMarginRTL: ``,
        horizontalItemPadding: `${token.paddingSM}px 0`,
        horizontalItemPaddingSM: `${token.paddingXS}px 0`,
        horizontalItemPaddingLG: `${token.padding}px 0`,
        verticalItemPadding: `${token.paddingXS}px ${token.paddingLG}px`,
        verticalItemMargin: `${token.margin}px 0 0 0`,
        itemColor: token.colorText,
        itemSelectedColor: token.colorPrimary,
        itemHoverColor: token.colorPrimaryHover,
        itemActiveColor: token.colorPrimaryActive,
        cardGutter: token.marginXXS / 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tabs', (token)=>{
    const tabsToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
        tabsCardPadding: token.cardPadding,
        dropdownEdgeChildVerticalPadding: token.paddingXXS,
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.horizontalItemGutter)}`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.horizontalItemGutter)}`
    });
    return [
        genSizeStyle(tabsToken),
        genRtlStyle(tabsToken),
        genPositionStyle(tabsToken),
        genDropdownStyle(tabsToken),
        genCardStyle(tabsToken),
        genTabsStyle(tabsToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabsToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/tabs/TabPane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TabPane = ()=>null;
if ("TURBOPACK compile-time truthy", 1) {
    TabPane.displayName = 'DeprecatedTabPane';
}
const __TURBOPACK__default__export__ = TabPane;
}),
"[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tabs/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/hooks/useAnimateConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useLegacyItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/hooks/useLegacyItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/TabPane.js [app-client] (ecmascript)");
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
const InternalTabs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { type, className, rootClassName, size: customSize, onEdit, hideAdd, centered, addIcon, removeIcon, moreIcon, more, popupClassName, children, items, animated, style, indicatorSize, indicator, classNames, styles, destroyInactiveTabPane, destroyOnHidden, tabPlacement, tabPosition, ...restProps } = props;
    const { prefixCls: customizePrefixCls } = restProps;
    const { getPrefixCls, direction, getPopupContainer, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tabs');
    const { tabs } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tabs', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const tabsRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalTabs.useImperativeHandle": ()=>({
                nativeElement: tabsRef.current
            })
    }["InternalTabs.useImperativeHandle"]);
    let editable;
    if (type === 'editable-card') {
        editable = {
            onEdit: (editType, { key, event })=>{
                onEdit?.(editType === 'add' ? event : key, editType);
            },
            removeIcon: removeIcon ?? tabs?.removeIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            addIcon: (addIcon ?? tabs?.addIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            showAdd: hideAdd !== true
        };
    }
    const rootPrefixCls = getPrefixCls();
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tabs');
        [
            [
                'popupClassName',
                'classNames.popup'
            ],
            [
                'tabPosition',
                'tabPlacement'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!('onPrevClick' in props) && !('onNextClick' in props), 'breaking', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.') : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(indicatorSize || tabs?.indicatorSize), 'deprecated', '`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.') : "TURBOPACK unreachable";
        warning.deprecated(!('destroyInactiveTabPane' in props || items?.some((item)=>'destroyInactiveTabPane' in item)), 'destroyInactiveTabPane', 'destroyOnHidden');
    }
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customSize);
    const mergedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useLegacyItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(items, children);
    const mergedAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, animated);
    const mergedIndicator = {
        align: indicator?.align ?? tabs?.indicator?.align,
        size: indicator?.size ?? indicatorSize ?? tabs?.indicator?.size ?? tabs?.indicatorSize
    };
    const mergedPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTabs.useMemo[mergedPlacement]": ()=>{
            const placement = tabPlacement ?? tabPosition ?? undefined;
            const isRTL = direction === 'rtl';
            switch(placement){
                case 'start':
                    return isRTL ? 'right' : 'left';
                case 'end':
                    return isRTL ? 'left' : 'right';
                default:
                    return placement;
            }
        }
    }["InternalTabs.useMemo[mergedPlacement]"], [
        tabPlacement,
        tabPosition,
        direction
    ]);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size,
        tabPlacement: mergedPlacement,
        items: mergedItems
    };
    // ========================= Style ==========================
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
        props: mergedProps
    }, {
        popup: {
            _default: 'root'
        }
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: tabsRef,
        direction: direction,
        getPopupContainer: getPopupContainer,
        ...restProps,
        items: mergedItems,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            [`${prefixCls}-large`]: size === 'large',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-card`]: [
                'card',
                'editable-card'
            ].includes(type),
            [`${prefixCls}-editable-card`]: type === 'editable-card',
            [`${prefixCls}-centered`]: centered
        }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls, rootCls),
        classNames: {
            ...mergedClassNames,
            popup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, hashId, cssVarCls, rootCls, mergedClassNames.popup?.root)
        },
        styles: mergedStyles,
        style: mergedStyles.root,
        editable: editable,
        more: {
            icon: tabs?.more?.icon ?? tabs?.moreIcon ?? moreIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            transitionName: `${rootPrefixCls}-slide-up`,
            ...more
        },
        prefixCls: prefixCls,
        animated: mergedAnimated,
        indicator: mergedIndicator,
        destroyOnHidden: destroyOnHidden ?? destroyInactiveTabPane,
        tabPosition: mergedPlacement
    });
});
const Tabs = InternalTabs;
Tabs.TabPane = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Tabs.displayName = 'Tabs';
}
const __TURBOPACK__default__export__ = Tabs;
}),
"[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript) <export default as Tabs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/checkbox/GroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const GroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
const __TURBOPACK__default__export__ = GroupContext;
}),
"[project]/apps/web/node_modules/antd/es/checkbox/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genCheckboxStyle",
    ()=>genCheckboxStyle,
    "getStyle",
    ()=>getStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genCheckboxStyle = (token)=>{
    const { checkboxCls, checkboxSize, lineWidth } = token;
    const wrapperCls = `${checkboxCls}-wrapper`;
    const hoverMediaQuery = '@media (hover: hover) and (pointer: fine)';
    return [
        // ===================== Basic =====================
        {
            // Group
            [`${checkboxCls}-group`]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                display: 'inline-flex',
                flexWrap: 'wrap',
                columnGap: token.marginXS,
                // Group > Grid
                [`> ${token.antCls}-row`]: {
                    flex: 1
                }
            },
            // Wrapper
            [wrapperCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                display: 'inline-flex',
                alignItems: 'baseline',
                cursor: 'pointer',
                // Fix checkbox & radio in flex align #30260
                '&:after': {
                    display: 'inline-block',
                    width: 0,
                    overflow: 'hidden',
                    content: "'\\a0'"
                },
                // Checkbox near checkbox
                [`& + ${wrapperCls}`]: {
                    marginInlineStart: 0
                }
            },
            // Wrapper > Checkbox
            [checkboxCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'relative',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                cursor: 'pointer',
                // To make alignment right when `controlHeight` is changed
                // Ref: https://github.com/ant-design/ant-design/issues/41564
                alignSelf: 'center',
                // Styles moved from inner
                boxSizing: 'border-box',
                display: 'block',
                width: checkboxSize,
                height: checkboxSize,
                direction: 'ltr',
                backgroundColor: token.colorBgContainer,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${token.lineType} ${token.colorBorder}`,
                borderRadius: token.borderRadiusSM,
                borderCollapse: 'separate',
                transition: `all ${token.motionDurationSlow}`,
                flex: 'none',
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])(),
                // Checkmark
                '&:after': {
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: `calc(${checkboxSize} / 2 - ${lineWidth})`,
                    insetInlineStart: `calc(${checkboxSize} / 4 - ${lineWidth})`,
                    display: 'table',
                    width: token.calc(checkboxSize).div(14).mul(5).equal(),
                    height: token.calc(checkboxSize).div(14).mul(8).equal(),
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthBold)} solid ${token.colorWhite}`,
                    borderTop: 0,
                    borderInlineStart: 0,
                    transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                    opacity: 0,
                    content: '""',
                    transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionRawStyle"])()
                },
                // Wrapper > Checkbox > input
                [`${checkboxCls}-input`]: {
                    position: 'absolute',
                    // Since baseline align will get additional space offset,
                    // we need to move input to top to make it align with text.
                    // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
                    inset: `calc(-1 * (${lineWidth}))`,
                    zIndex: 1,
                    cursor: 'pointer',
                    opacity: 0,
                    margin: 0
                },
                // Focus outline on checkbox when input is focus-visible
                [`&:has(${checkboxCls}-input:focus-visible)`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
                // Wrapper > Checkbox + Text
                '& + span': {
                    paddingInlineStart: token.paddingXS,
                    paddingInlineEnd: token.paddingXS
                }
            }
        },
        // ===================== Hover =====================
        {
            [hoverMediaQuery]: {
                // Wrapper & Wrapper > Checkbox
                [`
          ${wrapperCls}:not(${wrapperCls}-disabled),
          ${checkboxCls}:not(${checkboxCls}-disabled)
        `]: {
                    [`&:hover ${checkboxCls}`]: {
                        borderColor: token.colorPrimary
                    }
                },
                [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
                    [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled)`]: {
                        backgroundColor: token.colorPrimaryHover,
                        borderColor: 'transparent'
                    }
                }
            }
        },
        // ==================== Checked ====================
        {
            // Wrapper > Checkbox
            [`${checkboxCls}-checked`]: {
                backgroundColor: token.colorPrimary,
                borderColor: token.colorPrimary,
                '&:after': {
                    opacity: 1,
                    transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                    transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionRawStyle"])()
                },
                [hoverMediaQuery]: {
                    // Hover on checked checkbox directly
                    [`&:not(${checkboxCls}-disabled):hover`]: {
                        backgroundColor: token.colorPrimaryHover,
                        borderColor: 'transparent'
                    }
                }
            }
        },
        // ================= Indeterminate =================
        {
            [checkboxCls]: {
                '&-indeterminate': {
                    backgroundColor: token.colorBgContainer,
                    borderColor: token.colorBorder,
                    '&:after': {
                        top: '50%',
                        insetInlineStart: '50%',
                        width: token.calc(token.fontSizeLG).div(2).equal(),
                        height: token.calc(token.fontSizeLG).div(2).equal(),
                        backgroundColor: token.colorPrimary,
                        border: 0,
                        transform: 'translate(-50%, -50%) scale(1)',
                        opacity: 1,
                        content: '""'
                    },
                    [hoverMediaQuery]: {
                        // https://github.com/ant-design/ant-design/issues/50074
                        [`&:not(${checkboxCls}-disabled):hover`]: {
                            backgroundColor: token.colorBgContainer,
                            borderColor: token.colorPrimary
                        }
                    }
                }
            }
        },
        // ==================== Disable ====================
        {
            // Wrapper
            [`${wrapperCls}-disabled`]: {
                cursor: 'not-allowed'
            },
            // Wrapper > Checkbox
            [`${checkboxCls}-disabled`]: {
                // Wrapper > Checkbox > input
                [`&, ${checkboxCls}-input`]: {
                    cursor: 'not-allowed',
                    // Disabled for native input to enable Tooltip event handler
                    // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
                    pointerEvents: 'none'
                },
                // Disabled checkbox styles
                background: token.colorBgContainerDisabled,
                borderColor: token.colorBorder,
                '&:after': {
                    borderColor: token.colorTextDisabled
                },
                '& + span': {
                    color: token.colorTextDisabled
                },
                [`&${checkboxCls}-indeterminate::after`]: {
                    background: token.colorTextDisabled
                }
            }
        }
    ];
};
function getStyle(prefixCls, token) {
    const checkboxToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        checkboxCls: `.${prefixCls}`,
        checkboxSize: token.controlInteractiveSize
    });
    return genCheckboxStyle(checkboxToken);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Checkbox', (token, { prefixCls })=>[
        getStyle(prefixCls, token)
    ]);
}),
"[project]/apps/web/node_modules/antd/es/checkbox/useBubbleLock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBubbleLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
;
;
function useBubbleLock(onOriginInputClick) {
    const labelClickLockRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const clearLock = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(labelClickLockRef.current);
        labelClickLockRef.current = null;
    };
    const onLabelClick = ()=>{
        clearLock();
        labelClickLockRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])(()=>{
            labelClickLockRef.current = null;
        });
    };
    const onInputClick = (e)=>{
        if (labelClickLockRef.current) {
            e.stopPropagation();
            clearLock();
        }
        onOriginInputClick?.(e);
    };
    return [
        onLabelClick,
        onInputClick
    ];
}
}),
"[project]/apps/web/node_modules/antd/es/checkbox/Checkbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$checkbox$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/checkbox/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/GroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/useBubbleLock.js [app-client] (ecmascript)");
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
const InternalCheckbox = (props, ref)=>{
    const { prefixCls: customizePrefixCls, children, indeterminate = false, onMouseEnter, onMouseLeave, skipGroup = false, disabled, // Style
    rootClassName, className, style, classNames, styles, // Name
    name, // Value
    value, // Checked
    checked, defaultChecked, onChange, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('checkbox');
    const checkboxGroup = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { isFormItemInput } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const contextDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = (checkboxGroup?.disabled || disabled) ?? contextDisabled;
    // ============================= Warning ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Checkbox');
        ("TURBOPACK compile-time truthy", 1) ? warning('checked' in props || !!checkboxGroup || !('value' in props), 'usage', '`value` is not a valid prop, do you mean `checked`?') : "TURBOPACK unreachable";
    }
    // ============================= Checked ==============================
    const [innerChecked, setInnerChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultChecked, checked);
    let mergedChecked = innerChecked;
    const onInternalChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "InternalCheckbox.useEvent[onInternalChange]": (event)=>{
            setInnerChecked(event.target.checked);
            onChange?.(event);
            if (!skipGroup && checkboxGroup?.toggleOption) {
                checkboxGroup.toggleOption({
                    label: children,
                    value
                });
            }
        }
    }["InternalCheckbox.useEvent[onInternalChange]"]);
    // ============================== Group ===============================
    if (checkboxGroup && !skipGroup) {
        mergedChecked = checkboxGroup.value.includes(value);
    }
    const checkboxRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, checkboxRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InternalCheckbox.useEffect": ()=>{
            if (skipGroup || !checkboxGroup) {
                return;
            }
            checkboxGroup.registerValue(value);
            return ({
                "InternalCheckbox.useEffect": ()=>{
                    checkboxGroup.cancelValue(value);
                }
            })["InternalCheckbox.useEffect"];
        }
    }["InternalCheckbox.useEffect"], [
        value,
        skipGroup
    ]);
    // ========================== Indeterminate ===========================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InternalCheckbox.useEffect": ()=>{
            if (checkboxRef.current?.input) {
                checkboxRef.current.input.indeterminate = indeterminate;
            }
        }
    }["InternalCheckbox.useEffect"], [
        indeterminate
    ]);
    // ============================== Style ===============================
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const checkboxProps = {
        ...restProps
    };
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        indeterminate,
        disabled: mergedDisabled,
        checked: mergedChecked
    };
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
        props: mergedProps
    });
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-wrapper`, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-wrapper-checked`]: mergedChecked,
        [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
        [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    }, contextClassName, className, mergedClassNames.root, rootClassName, cssVarCls, rootCls, hashId);
    const checkboxClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.icon, {
        [`${prefixCls}-indeterminate`]: indeterminate
    }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_CLS"], hashId);
    // ============================ Event Lock ============================
    const [onLabelClick, onInputClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$useBubbleLock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(checkboxProps.onClick);
    // ============================== Render ==============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: "Checkbox",
        disabled: mergedDisabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("label", {
        className: classString,
        style: mergedStyles.root,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onLabelClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$checkbox$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...checkboxProps,
        name: !skipGroup && checkboxGroup ? checkboxGroup.name : name,
        checked: mergedChecked,
        onClick: onInputClick,
        onChange: onInternalChange,
        prefixCls: prefixCls,
        className: checkboxClass,
        style: mergedStyles.icon,
        disabled: mergedDisabled,
        ref: mergedRef,
        value: value
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(children) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-label`, mergedClassNames.label),
        style: mergedStyles.label
    }, children)));
};
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalCheckbox);
if ("TURBOPACK compile-time truthy", 1) {
    Checkbox.displayName = 'Checkbox';
}
const __TURBOPACK__default__export__ = Checkbox;
}),
"[project]/apps/web/node_modules/antd/es/checkbox/Group.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/Checkbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/GroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/style/index.js [app-client] (ecmascript)");
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
const CheckboxGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { defaultValue, children, options = [], prefixCls: customizePrefixCls, className, rootClassName, style, onChange, role = 'group', ...restProps } = props;
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CheckboxGroup.useEffect": ()=>{
            if ('value' in restProps) {
                setValue(restProps.value || []);
            }
        }
    }["CheckboxGroup.useEffect"], [
        restProps.value
    ]);
    const memoizedOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CheckboxGroup.useMemo[memoizedOptions]": ()=>{
            return options.map({
                "CheckboxGroup.useMemo[memoizedOptions]": (option)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(option) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(option)) {
                        return {
                            label: option,
                            value: option
                        };
                    }
                    return option;
                }
            }["CheckboxGroup.useMemo[memoizedOptions]"]).filter({
                "CheckboxGroup.useMemo[memoizedOptions]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(item) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(item.value)
            }["CheckboxGroup.useMemo[memoizedOptions]"]);
        }
    }["CheckboxGroup.useMemo[memoizedOptions]"], [
        options
    ]);
    const cancelValue = (val)=>{
        setRegisteredValues((prevValues)=>prevValues.filter((v)=>v !== val));
    };
    const registerValue = (val)=>{
        setRegisteredValues((prevValues)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevValues), [
                val
            ]));
    };
    const toggleOption = (option)=>{
        const optionIndex = value.indexOf(option.value);
        const newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
        if (optionIndex === -1) {
            newValue.push(option.value);
        } else {
            newValue.splice(optionIndex, 1);
        }
        if (!('value' in restProps)) {
            setValue(newValue);
        }
        onChange?.(newValue.filter((val)=>registeredValues.includes(val)).sort((a, b)=>{
            const indexA = memoizedOptions.findIndex((opt)=>opt.value === a);
            const indexB = memoizedOptions.findIndex((opt)=>opt.value === b);
            return indexA - indexB;
        }));
    };
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
        'value',
        'disabled'
    ]);
    const childrenNode = Array.isArray(memoizedOptions) && memoizedOptions.length > 0 ? memoizedOptions.map((option)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : restProps.disabled,
            value: option.value,
            checked: value.includes(option.value),
            onChange: option.onChange,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-item`, option.className),
            style: option.style,
            title: option.title,
            id: option.id,
            required: option.required
        }, option.label)) : children;
    const memoizedContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CheckboxGroup.useMemo[memoizedContext]": ()=>({
                toggleOption,
                value,
                disabled: restProps.disabled,
                name: restProps.name,
                // https://github.com/ant-design/ant-design/issues/16376
                registerValue,
                cancelValue
            })
    }["CheckboxGroup.useMemo[memoizedContext]"], [
        toggleOption,
        value,
        restProps.disabled,
        restProps.name,
        registerValue,
        cancelValue
    ]);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(groupPrefixCls, {
        [`${groupPrefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, cssVarCls, rootCls, hashId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: classString,
        style: style,
        role: role,
        ...domProps,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$GroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: memoizedContext
    }, childrenNode));
});
;
const __TURBOPACK__default__export__ = CheckboxGroup;
}),
"[project]/apps/web/node_modules/antd/es/checkbox/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/Checkbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/Group.js [app-client] (ecmascript) <locals>");
"use client";
;
;
const Checkbox = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Checkbox.Group = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Checkbox.__ANT_CHECKBOX = true;
if ("TURBOPACK compile-time truthy", 1) {
    Checkbox.displayName = 'Checkbox';
}
const __TURBOPACK__default__export__ = Checkbox;
}),
"[project]/apps/web/node_modules/antd/es/checkbox/index.js [app-client] (ecmascript) <export default as Checkbox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/components/ColorPresets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
// ============================== Styles ==============================
const genBaseStyle = (token)=>{
    const { paddingXXS, lineWidth, tagPaddingHorizontal, componentCls, calc } = token;
    const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
    const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
    return {
        // Result
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            display: 'inline-block',
            height: 'auto',
            paddingInline,
            fontSize: token.tagFontSize,
            lineHeight: token.tagLineHeight,
            whiteSpace: 'nowrap',
            backgroundColor: token.defaultBg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
            borderRadius: token.borderRadiusSM,
            opacity: 1,
            transition: `all ${token.motionDurationMid}`,
            textAlign: 'start',
            position: 'relative',
            // RTL
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            '&, a, a:hover': {
                color: token.defaultColor
            },
            [`${componentCls}-close-icon`]: {
                marginInlineStart: iconMarginInline,
                fontSize: token.tagIconSize,
                color: token.colorIcon,
                cursor: 'pointer',
                transition: `all ${token.motionDurationMid}`,
                '&:hover': {
                    color: token.colorTextHeading
                }
            },
            '&-checkable': {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                cursor: 'pointer',
                [`&:not(${componentCls}-checkable-checked):hover`]: {
                    color: token.colorPrimary,
                    backgroundColor: token.colorFillSecondary
                },
                '&:active, &-checked': {
                    color: token.colorTextLightSolid
                },
                '&-checked': {
                    backgroundColor: token.colorPrimary,
                    '&:hover': {
                        backgroundColor: token.colorPrimaryHover
                    }
                },
                '&:active': {
                    backgroundColor: token.colorPrimaryActive
                },
                '&-disabled': {
                    cursor: 'not-allowed',
                    [`&:not(${componentCls}-checkable-checked)`]: {
                        color: token.colorTextDisabled,
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    },
                    [`&${componentCls}-checkable-checked`]: {
                        color: token.colorTextDisabled,
                        backgroundColor: token.colorBgContainerDisabled
                    },
                    '&:hover, &:active': {
                        backgroundColor: token.colorBgContainerDisabled,
                        color: token.colorTextDisabled
                    },
                    [`&:not(${componentCls}-checkable-checked):hover`]: {
                        color: token.colorTextDisabled
                    }
                },
                '&-group': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: token.paddingXS
                }
            },
            '&-hidden': {
                display: 'none'
            },
            // Icons from third-party libraries are a bare `<svg>`, which none of the `.anticon`
            // rules reach. An `<svg>` has no baseline of its own, so it is aligned by its bottom
            // margin edge (CSS 2.1 §10.8.1) and rides above the text. Centre it instead: unlike an
            // `.anticon` (whose `<svg>` is always `1em`, so a fixed `-0.125em` nudge suffices), a
            // third-party `<svg>` may be sized in `px`, so the correction must not depend on size.
            // `display: inline-block` keeps it an atomic inline box so `vertical-align` still applies even
            // under a CSS reset that forces `svg { display: block }` (e.g. Tailwind Preflight), which would
            // otherwise drop the icon onto its own line. `vertical-align: middle` centres the margin box on
            // the x-height line; `margin-block-end` then lifts it by half its own value onto the cap-height
            // centre (capHeight − xHeight ≈ 0.2em across typical fonts), keeping it centred at any icon size.
            // Only matches a bare `<svg>`: an `.anticon` keeps its `<svg>` one level deeper.
            '> svg': {
                display: 'inline-block',
                verticalAlign: 'middle',
                marginBlockEnd: '0.2em'
            },
            // To ensure that a space will be placed between character and `Icon`.
            [`> ${token.iconCls} + span, > span + ${token.iconCls}, > svg + span, > span + svg`]: {
                marginInlineStart: paddingInline
            }
        },
        [`&${token.componentCls}-solid`]: {
            borderColor: 'transparent',
            color: token.colorTextLightSolid,
            backgroundColor: token.colorBgSolid,
            [`&${componentCls}-default`]: {
                color: token.solidTextColor
            }
        },
        [`${componentCls}-filled`]: {
            borderColor: 'transparent',
            backgroundColor: token.tagBorderlessBg
        },
        [`&${componentCls}-disabled`]: {
            color: token.colorTextDisabled,
            cursor: 'not-allowed',
            backgroundColor: token.colorBgContainerDisabled,
            a: {
                cursor: 'not-allowed',
                pointerEvents: 'none',
                color: token.colorTextDisabled,
                '&:hover': {
                    color: token.colorTextDisabled
                }
            },
            'a&': {
                '&:hover, &:active': {
                    color: token.colorTextDisabled
                }
            },
            [`&${componentCls}-outlined`]: {
                borderColor: token.colorBorderDisabled
            },
            [`&${componentCls}-solid, &${componentCls}-filled`]: {
                color: token.colorTextDisabled,
                [`${componentCls}-close-icon`]: {
                    color: token.colorTextDisabled
                }
            },
            [`${componentCls}-close-icon`]: {
                cursor: 'not-allowed',
                color: token.colorTextDisabled,
                '&:hover': {
                    color: token.colorTextDisabled
                }
            }
        }
    };
};
const prepareToken = (token)=>{
    const { lineWidth, fontSizeIcon, calc } = token;
    const tagFontSize = token.fontSizeSM;
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        tagFontSize,
        tagLineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.lineHeightSM).mul(tagFontSize).equal()),
        tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
        // Tag icon is much smaller
        tagPaddingHorizontal: 8,
        // Fixed padding.
        tagBorderlessBg: token.defaultBg
    });
    return tagToken;
};
const prepareComponentToken = (token)=>{
    const solidTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBright"])(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"](token.colorBgSolid), '#fff') ? '#000' : '#fff';
    return {
        defaultBg: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](token.colorFillTertiary).onBackground(token.colorBgContainer).toHexString(),
        defaultColor: token.colorText,
        solidTextColor
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tag', (token)=>{
    const tagToken = prepareToken(token);
    return genBaseStyle(tagToken);
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/tag/CheckableTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const CheckableTag = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, style, className, checked, children, icon, onChange, onClick, onKeyDown, disabled: customDisabled, ...restProps } = props;
    const { getPrefixCls, tag } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    const handleClick = (e)=>{
        if (mergedDisabled) {
            return;
        }
        onChange?.(!checked);
        onClick?.(e);
    };
    const handleKeyDown = (e)=>{
        onKeyDown?.(e);
        if (e.defaultPrevented || mergedDisabled) {
            return;
        }
        if (e.key === ' ') {
            e.preventDefault();
            onChange?.(!checked);
        }
    };
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: checked,
        [`${prefixCls}-checkable-disabled`]: mergedDisabled
    }, tag?.className, className, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...restProps,
        ref: ref,
        role: "checkbox",
        "aria-checked": checked,
        "aria-disabled": mergedDisabled || undefined,
        tabIndex: mergedDisabled ? -1 : 0,
        style: {
            ...style,
            ...tag?.style
        },
        className: cls,
        onClick: handleClick,
        onKeyDown: handleKeyDown
    }, icon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children));
});
const __TURBOPACK__default__export__ = CheckableTag;
}),
"[project]/apps/web/node_modules/antd/es/tag/CheckableTagGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript) <export default as pickAttrs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/CheckableTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)");
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
const CheckableTagGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { id, prefixCls: customizePrefixCls, rootClassName, className, style, classNames, styles, disabled, options, value, defaultValue, onChange, multiple, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tag');
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-checkable-group`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // ====================== Styles ======================
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
    // =============================== Option ===============================
    const parsedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckableTagGroup.useMemo[parsedOptions]": ()=>{
            if (!Array.isArray(options)) {
                return [];
            }
            return options.map({
                "CheckableTagGroup.useMemo[parsedOptions]": (option)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(option)) {
                        return option;
                    }
                    return {
                        value: option,
                        label: option
                    };
                }
            }["CheckableTagGroup.useMemo[parsedOptions]"]);
        }
    }["CheckableTagGroup.useMemo[parsedOptions]"], [
        options
    ]);
    // =============================== Values ===============================
    const [mergedValue, setMergedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultValue, value);
    const handleChange = (checked, option)=>{
        let newValue = null;
        if (multiple) {
            const valueList = mergedValue || [];
            newValue = checked ? [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(valueList), [
                option.value
            ]) : valueList.filter((item)=>item !== option.value);
        } else {
            newValue = checked ? option.value : null;
        }
        setMergedValue(newValue);
        onChange?.(newValue); // TS not support generic type in function call
    };
    // ================================ Refs ================================
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CheckableTagGroup.useImperativeHandle": ()=>({
                nativeElement: divRef.current
            })
    }["CheckableTagGroup.useImperativeHandle"]);
    // ================================ ARIA ================================
    const ariaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(restProps, {
        aria: true,
        data: true
    });
    // =============================== Render ===============================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...ariaProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(groupPrefixCls, contextClassName, rootClassName, {
            [`${groupPrefixCls}-disabled`]: disabled,
            [`${groupPrefixCls}-rtl`]: direction === 'rtl'
        }, hashId, cssVarCls, className, mergedClassNames.root),
        style: mergedStyles.root,
        id: id,
        ref: divRef
    }, parsedOptions.map((option)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: option.value,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${groupPrefixCls}-item`, mergedClassNames.item, option.className),
            style: {
                ...mergedStyles.item,
                ...option.style
            },
            checked: multiple ? (mergedValue || []).includes(option.value) : mergedValue === option.value,
            onChange: (checked)=>handleChange(checked, option),
            disabled: disabled
        }, option.label)));
});
if ("TURBOPACK compile-time truthy", 1) {
    CheckableTagGroup.displayName = 'CheckableTagGroup';
}
const __TURBOPACK__default__export__ = CheckableTagGroup;
}),
"[project]/apps/web/node_modules/antd/es/tag/hooks/useColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)");
;
;
;
function useColor(props, contextVariant) {
    const { color, variant, bordered } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useColor.useMemo": ()=>{
            const isInverseColor = color?.endsWith('-inverse');
            // =================== Variant ===================
            let nextVariant;
            if (variant) {
                // `variant` first
                nextVariant = variant;
            } else if (isInverseColor) {
                // Fallback if using inverse color
                nextVariant = 'solid';
            } else if (bordered === false) {
                // Fallback if using filled
                nextVariant = 'filled';
            } else {
                // Finally not conflict, use context
                nextVariant = contextVariant || 'filled';
            }
            // ==================== Color ====================
            let nextColor = isInverseColor ? color?.replace('-inverse', '') : color;
            if (nextColor === undefined && nextVariant === 'solid') {
                nextColor = 'default';
            }
            // =============== Preset & Status ===============
            const nextIsPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetColor"])(nextColor);
            const nextIsStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetStatusColor"])(nextColor);
            // ================== Customize ==================
            // When `color` is not preset color,
            // dynamic calculate the color pair.
            const tagStyle = {};
            if (!nextIsPreset && !nextIsStatus && nextColor) {
                if (nextVariant === 'solid') {
                    tagStyle.backgroundColor = color;
                } else {
                    const hsl = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](nextColor).toHsl();
                    hsl.l = 0.95;
                    tagStyle.backgroundColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](hsl).toHexString();
                    tagStyle.color = color;
                    if (nextVariant === 'outlined') {
                        tagStyle.borderColor = color;
                    }
                }
            }
            return [
                nextVariant,
                nextColor,
                nextIsPreset,
                nextIsStatus,
                tagStyle
            ];
        }
    }["useColor.useMemo"], [
        color,
        variant,
        bordered,
        contextVariant
    ]);
}
}),
"[project]/apps/web/node_modules/antd/es/tag/style/presetCmp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Style as status component
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
// ============================== Preset ==============================
const genPresetStyle = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { textColor, lightBorderColor, lightColor, darkColor })=>({
            [`${token.componentCls}${token.componentCls}-${colorKey}:not(${token.componentCls}-disabled)`]: {
                [`&${token.componentCls}-outlined`]: {
                    backgroundColor: lightColor,
                    borderColor: lightBorderColor,
                    color: textColor
                },
                [`&${token.componentCls}-solid`]: {
                    backgroundColor: darkColor,
                    borderColor: darkColor,
                    color: token.colorTextLightSolid
                },
                [`&${token.componentCls}-filled`]: {
                    backgroundColor: lightColor,
                    color: textColor
                }
            }
        }));
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Tag',
    'preset'
], (token)=>{
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genPresetStyle(tagToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/tag/style/statusCmp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/capitalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
const genTagStatusStyle = (token, status, cssVariableType)=>{
    const capitalizedCssVariableType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$capitalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(cssVariableType);
    return {
        [`${token.componentCls}${token.componentCls}-${status}:not(${token.componentCls}-disabled)`]: {
            [`&${token.componentCls}-outlined`]: {
                backgroundColor: token[`color${capitalizedCssVariableType}Bg`],
                borderColor: token[`color${capitalizedCssVariableType}Border`],
                color: token[`color${cssVariableType}`]
            },
            [`&${token.componentCls}-solid`]: {
                backgroundColor: token[`color${cssVariableType}`],
                borderColor: token[`color${cssVariableType}`]
            },
            [`&${token.componentCls}-filled`]: {
                backgroundColor: token[`color${capitalizedCssVariableType}Bg`],
                color: token[`color${cssVariableType}`]
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Tag',
    'status'
], (token)=>{
    const tagToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        genTagStatusStyle(tagToken, 'success', 'Success'),
        genTagStatusStyle(tagToken, 'processing', 'Info'),
        genTagStatusStyle(tagToken, 'error', 'Error'),
        genTagStatusStyle(tagToken, 'warning', 'Warning')
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/tag/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/CheckableTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTagGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/CheckableTagGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$hooks$2f$useColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/hooks/useColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$presetCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/presetCmp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$statusCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/style/statusCmp.js [app-client] (ecmascript)");
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
const InternalTag = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, children, icon, color, variant: _variant, onClose, bordered, disabled: customDisabled, href, target, styles, classNames, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, variant: contextVariant, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tag');
    // ===================== Warnings =====================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tag');
        warning.deprecated(bordered !== false, 'bordered={false}', 'variant="filled"');
        warning.deprecated(!color?.endsWith('-inverse'), 'color="xxx-inverse"', 'variant="solid"');
    }
    // ====================== Colors ======================
    const [mergedVariant, mergedColor, isPreset, isStatus, customTagStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$hooks$2f$useColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, contextVariant);
    const isInternalColor = isPreset || isStatus;
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    const { tag: tagContext } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
        'closeIcon',
        'closable'
    ]);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        color: mergedColor,
        variant: mergedVariant,
        disabled: mergedDisabled
    };
    // ====================== Styles ======================
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
        props: mergedProps
    });
    const tagStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTag.useMemo[tagStyle]": ()=>{
            let nextTagStyle = mergedStyles.root;
            if (!mergedDisabled) {
                nextTagStyle = {
                    ...customTagStyle,
                    ...nextTagStyle
                };
            }
            return nextTagStyle;
        }
    }["InternalTag.useMemo[tagStyle]"], [
        mergedStyles.root,
        customTagStyle,
        mergedDisabled
    ]);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const tagClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, mergedClassNames.root, `${prefixCls}-${mergedVariant}`, {
        [`${prefixCls}-${mergedColor}`]: isInternalColor,
        [`${prefixCls}-hidden`]: !visible,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-disabled`]: mergedDisabled
    }, className, rootClassName, hashId, cssVarCls);
    // ===================== Closable =====================
    const triggerClose = (e)=>{
        if (mergedDisabled) {
            return;
        }
        e.stopPropagation();
        onClose?.(e);
        if (e.defaultPrevented) {
            return;
        }
        if (href) {
            e.preventDefault();
        }
        setVisible(false);
    };
    const handleCloseKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.currentTarget.click();
        }
    };
    const [, mergedCloseIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(tagContext), {
        closable: false,
        closeIconRender: {
            "InternalTag.useClosable": (iconNode)=>{
                const replacement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                    role: "button",
                    tabIndex: mergedDisabled ? -1 : 0,
                    "aria-disabled": mergedDisabled || undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-close-icon`, mergedClassNames.close),
                    onClick: triggerClose,
                    onKeyDown: handleCloseKeyDown,
                    style: mergedStyles.close
                }, iconNode);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceElement"])(iconNode, replacement, {
                    "InternalTag.useClosable": (originProps)=>({
                            onClick: ({
                                "InternalTag.useClosable": (e)=>{
                                    originProps?.onClick?.(e);
                                    triggerClose(e);
                                }
                            })["InternalTag.useClosable"],
                            onKeyDown: ({
                                "InternalTag.useClosable": (e)=>{
                                    originProps?.onKeyDown?.(e);
                                    if (!e.defaultPrevented) {
                                        handleCloseKeyDown(e);
                                    }
                                }
                            })["InternalTag.useClosable"],
                            role: 'button',
                            tabIndex: mergedDisabled ? -1 : 0,
                            'aria-disabled': mergedDisabled || undefined,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(originProps?.className, `${prefixCls}-close-icon`, mergedClassNames.close),
                            style: {
                                ...mergedStyles.close,
                                ...originProps?.style
                            }
                        })
                }["InternalTag.useClosable"]);
            }
        }["InternalTag.useClosable"]
    });
    // ====================== Render ======================
    const isNeedWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(restProps.onClick) || children && children.type === 'a';
    const iconNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](icon) ? icon.props?.className : undefined, mergedClassNames.icon),
        style: mergedStyles.icon
    });
    const child = iconNode ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, iconNode, children && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: mergedClassNames.content,
        style: mergedStyles.content
    }, children)) : children;
    const TagWrapper = href ? 'a' : 'span';
    const tagNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](TagWrapper, {
        ...domProps,
        ref: ref,
        className: tagClassName,
        style: tagStyle,
        href: mergedDisabled ? undefined : href,
        target: target,
        onClick: mergedDisabled ? undefined : domProps.onClick,
        ...href && mergedDisabled ? {
            'aria-disabled': true
        } : {}
    }, child, mergedCloseIcon, isPreset && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$presetCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        key: "preset",
        prefixCls: prefixCls
    }), isStatus && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$style$2f$statusCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        key: "status",
        prefixCls: prefixCls
    }));
    return isNeedWave ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: "Tag"
    }, tagNode) : tagNode;
});
const Tag = InternalTag;
if ("TURBOPACK compile-time truthy", 1) {
    Tag.displayName = 'Tag';
}
Tag.CheckableTag = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Tag.CheckableTagGroup = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$CheckableTagGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tag;
}),
"[project]/apps/web/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript) <export default as Popover>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/segmented/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// ============================== Mixins ==============================
function getItemDisabledStyle(cls, token) {
    return {
        [`${cls}, ${cls}:hover, ${cls}:focus`]: {
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
        }
    };
}
const getItemSelectedStyle = (token)=>{
    return {
        background: token.itemSelectedBg,
        boxShadow: token.boxShadowTertiary
    };
};
const segmentedTextEllipsisCss = {
    overflow: 'hidden',
    // handle text ellipsis
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"]
};
// ============================== Styles ==============================
const genSegmentedStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionEaseInOut, motionDurationMid } = token;
    const labelHeight = token.calc(token.controlHeight).sub(token.calc(token.trackPadding).mul(2)).equal();
    const labelHeightLG = token.calc(token.controlHeightLG).sub(token.calc(token.trackPadding).mul(2)).equal();
    const labelHeightSM = token.calc(token.controlHeightSM).sub(token.calc(token.trackPadding).mul(2)).equal();
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            display: 'inline-block',
            padding: token.trackPadding,
            color: token.itemColor,
            background: token.trackBg,
            borderRadius: token.borderRadius,
            transition: `all ${motionDurationMid}`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            [`${componentCls}-group`]: {
                position: 'relative',
                display: 'flex',
                alignItems: 'stretch',
                justifyItems: 'flex-start',
                flexDirection: 'row',
                width: '100%'
            },
            // RTL styles
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            [`&${componentCls}-vertical`]: {
                [`${componentCls}-group`]: {
                    flexDirection: 'column'
                },
                [`${componentCls}-thumb`]: {
                    width: '100%',
                    height: 0,
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS)}`
                }
            },
            // block styles
            [`&${componentCls}-block`]: {
                display: 'flex'
            },
            [`&${componentCls}-block ${componentCls}-item`]: {
                flex: 1,
                minWidth: 0
            },
            // item styles
            [`${componentCls}-item`]: {
                position: 'relative',
                textAlign: 'center',
                cursor: 'pointer',
                transition: `color ${motionDurationMid}`,
                borderRadius: token.borderRadiusSM,
                // Fix Safari render bug
                // https://github.com/ant-design/ant-design/issues/45250
                transform: 'translateZ(0)',
                '&-selected': {
                    ...getItemSelectedStyle(token),
                    color: token.itemSelectedColor
                },
                '&-focused': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    insetInlineStart: 0,
                    borderRadius: 'inherit',
                    opacity: 0,
                    // This is mandatory to make it not clickable or hoverable
                    // Ref: https://github.com/ant-design/ant-design/issues/40888
                    pointerEvents: 'none',
                    transition: [
                        'opacity',
                        'background-color'
                    ].map((prop)=>`${prop} ${motionDurationMid}`).join(', ')
                },
                [`&:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)`]: {
                    '&:hover, &:active': {
                        color: token.itemHoverColor
                    },
                    '&:hover::after': {
                        opacity: 1,
                        backgroundColor: token.itemHoverBg
                    },
                    '&:active::after': {
                        opacity: 1,
                        backgroundColor: token.itemActiveBg
                    }
                },
                '&-label': {
                    minHeight: labelHeight,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(labelHeight),
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.segmentedPaddingHorizontal)}`,
                    ...segmentedTextEllipsisCss
                },
                // syntactic sugar to add `icon` for Segmented Item
                '&-icon + *': {
                    marginInlineStart: token.calc(token.marginSM).div(2).equal()
                },
                // Icons from third-party libraries render as a bare `<svg>` inside the icon wrapper,
                // which the `.anticon` reset never reaches. An `<svg>` has no baseline of its own, so it
                // is aligned by its bottom margin edge (CSS 2.1 §10.8.1) and rides above the label.
                // `display: inline-block` keeps it an atomic inline box so `vertical-align` still applies
                // even under a CSS reset that forces `svg { display: block }` (e.g. Tailwind Preflight),
                // which would otherwise drop the icon onto its own line. `vertical-align: middle` centres its
                // margin box on the x-height line; `margin-block-end` then lifts it by half its own value onto
                // the cap-height centre (capHeight − xHeight ≈ 0.2em across typical fonts), keeping it centred
                // at any icon size.
                // Only matches a bare `<svg>`: an `.anticon` keeps its `<svg>` one level deeper.
                '&-icon > svg': {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginBlockEnd: '0.2em'
                },
                '&-input': {
                    position: 'absolute',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    width: 0,
                    height: 0,
                    opacity: 0,
                    pointerEvents: 'none'
                }
            },
            // thumb styles
            [`${componentCls}-thumb`]: {
                ...getItemSelectedStyle(token),
                position: 'absolute',
                insetBlockStart: 0,
                insetInlineStart: 0,
                width: 0,
                height: '100%',
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS)} 0`,
                borderRadius: token.borderRadiusSM,
                [`& ~ ${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)::after`]: {
                    backgroundColor: 'transparent'
                }
            },
            // size styles
            [`&${componentCls}-lg`]: {
                borderRadius: token.borderRadiusLG,
                [`${componentCls}-item-label`]: {
                    minHeight: labelHeightLG,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(labelHeightLG),
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.segmentedPaddingHorizontal)}`,
                    fontSize: token.fontSizeLG
                },
                [`${componentCls}-item, ${componentCls}-thumb`]: {
                    borderRadius: token.borderRadius
                }
            },
            [`&${componentCls}-sm`]: {
                borderRadius: token.borderRadiusSM,
                [`${componentCls}-item-label`]: {
                    minHeight: labelHeightSM,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(labelHeightSM),
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.segmentedPaddingHorizontalSM)}`
                },
                [`${componentCls}-item, ${componentCls}-thumb`]: {
                    borderRadius: token.borderRadiusXS
                }
            },
            // disabled styles
            ...getItemDisabledStyle(`&-disabled ${componentCls}-item`, token),
            ...getItemDisabledStyle(`${componentCls}-item-disabled`, token),
            // transition effect when `appear-active`
            [`${componentCls}-thumb-motion-appear-active`]: {
                willChange: 'transform, width',
                transition: [
                    `transform`,
                    `width`
                ].map((prop)=>`${prop} ${motionDurationSlow} ${motionEaseInOut}`).join(', ')
            },
            [`&${componentCls}-shape-round`]: {
                borderRadius: 9999,
                [`${componentCls}-item, ${componentCls}-thumb`]: {
                    borderRadius: 9999
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorTextLabel, colorText, colorFillSecondary, colorBgElevated, colorFill, lineWidthBold, colorBgLayout } = token;
    return {
        trackPadding: lineWidthBold,
        trackBg: colorBgLayout,
        itemColor: colorTextLabel,
        itemHoverColor: colorText,
        itemHoverBg: colorFillSecondary,
        itemSelectedBg: colorBgElevated,
        itemActiveBg: colorFill,
        itemSelectedColor: colorText
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Segmented', (token)=>{
    const { lineWidth, calc } = token;
    const segmentedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        segmentedPaddingHorizontal: calc(token.controlPaddingHorizontal).sub(lineWidth).equal(),
        segmentedPaddingHorizontalSM: calc(token.controlPaddingHorizontalSM).sub(lineWidth).equal()
    });
    return genSegmentedStyle(segmentedToken);
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/segmented/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$segmented$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/segmented/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useId$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useId.js [app-client] (ecmascript) <export default as useId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/segmented/style/index.js [app-client] (ecmascript)");
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
function isSegmentedLabeledOptionWithIcon(option) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(option) && !!option?.icon;
}
const InternalSegmented = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const defaultName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useId$3e$__["useId"])();
    const { prefixCls: customizePrefixCls, className, rootClassName, block, options = [], size: customSize, style, vertical, orientation, shape = 'default', name = defaultName, styles, classNames, ...restProps } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('segmented');
    const mergedProps = {
        ...props,
        options,
        size: customSize,
        shape
    };
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
        props: mergedProps
    });
    const prefixCls = getPrefixCls('segmented', customizePrefixCls);
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ===================== Size =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customSize);
    // syntactic sugar to support `icon` for Segmented Item
    const extendedOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSegmented.useMemo[extendedOptions]": ()=>options.map({
                "InternalSegmented.useMemo[extendedOptions]": (option)=>{
                    if (isSegmentedLabeledOptionWithIcon(option)) {
                        const { icon, label, ...restOption } = option;
                        return {
                            ...restOption,
                            label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-item-icon`, mergedClassNames.icon),
                                style: mergedStyles.icon
                            }, icon), label && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, label))
                        };
                    }
                    return option;
                }
            }["InternalSegmented.useMemo[extendedOptions]"])
    }["InternalSegmented.useMemo[extendedOptions]"], [
        options,
        prefixCls,
        mergedClassNames.icon,
        mergedStyles.icon
    ]);
    const [, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, rootClassName, contextClassName, mergedClassNames.root, {
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-lg`]: mergedSize === 'large',
        [`${prefixCls}-vertical`]: mergedVertical,
        [`${prefixCls}-shape-${shape}`]: shape === 'round'
    }, hashId, cssVarCls);
    const itemRender = (node, { item })=>{
        if (!item.tooltip) {
            return node;
        }
        const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(item.tooltip) ? item.tooltip : {
            title: item.tooltip
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...tooltipProps
        }, node);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$segmented$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...restProps,
        name: name,
        className: cls,
        style: mergedStyles.root,
        classNames: mergedClassNames,
        styles: mergedStyles,
        itemRender: itemRender,
        options: extendedOptions,
        ref: ref,
        prefixCls: prefixCls,
        direction: direction,
        vertical: mergedVertical
    });
});
const Segmented = InternalSegmented;
if ("TURBOPACK compile-time truthy", 1) {
    Segmented.displayName = 'Segmented';
}
const __TURBOPACK__default__export__ = Segmented;
}),
"[project]/apps/web/node_modules/antd/es/segmented/index.js [app-client] (ecmascript) <export default as Segmented>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Segmented",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/segmented/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/slider/Context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/** @private Internal context. Do not use in your production. */ const SliderInternalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const __TURBOPACK__default__export__ = SliderInternalContext;
}),
"[project]/apps/web/node_modules/antd/es/slider/SliderTooltip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const SliderTooltip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { open, draggingDelete, value } = props;
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedOpen = open && !draggingDelete;
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function cancelKeepAlign() {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(rafRef.current);
        rafRef.current = null;
    }
    function keepAlign() {
        rafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])(()=>{
            innerRef.current?.forceAlign();
            rafRef.current = null;
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SliderTooltip.useEffect": ()=>{
            if (mergedOpen) {
                keepAlign();
            } else {
                cancelKeepAlign();
            }
            return cancelKeepAlign;
        }
    }["SliderTooltip.useEffect"], [
        mergedOpen,
        props.title,
        value
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(innerRef, ref),
        ...props,
        open: mergedOpen
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    SliderTooltip.displayName = 'SliderTooltip';
}
const __TURBOPACK__default__export__ = SliderTooltip;
}),
"[project]/apps/web/node_modules/antd/es/slider/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, antCls, controlSize, dotSize, marginFull, marginPart, colorFillContentHover, handleColorDisabled, calc, handleSize, handleSizeHover, handleActiveColor, handleActiveOutlineColor, handleLineWidth, handleLineWidthHover, motionDurationMid } = token;
    const disabledHandle = {
        backgroundColor: token.colorBgElevated,
        cursor: 'not-allowed',
        width: handleSize,
        height: handleSize,
        boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(handleLineWidth)} ${handleColorDisabled}`,
        insetInlineStart: 0,
        insetBlockStart: 0
    };
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            height: controlSize,
            margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(marginPart)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(marginFull)}`,
            padding: 0,
            cursor: 'pointer',
            touchAction: 'none',
            // https://github.com/ant-design/ant-design/issues/55686
            // Prevent text selection on adjacent content when dragging the handle in Safari.
            userSelect: 'none',
            '&-vertical': {
                margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(marginFull)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(marginPart)}`
            },
            [`${componentCls}-rail`]: {
                position: 'absolute',
                backgroundColor: token.railBg,
                borderRadius: token.borderRadiusXS,
                transition: `background-color ${motionDurationMid}`
            },
            [`${componentCls}-track,${componentCls}-tracks`]: {
                position: 'absolute',
                transition: `background-color ${motionDurationMid}`
            },
            [`${componentCls}-track`]: {
                backgroundColor: token.trackBg,
                borderRadius: token.borderRadiusXS
            },
            [`${componentCls}-track-draggable`]: {
                boxSizing: 'content-box',
                backgroundClip: 'content-box',
                border: 'solid rgba(0,0,0,0)'
            },
            '&:hover': {
                [`${componentCls}-rail`]: {
                    backgroundColor: token.railHoverBg
                },
                [`${componentCls}-track`]: {
                    backgroundColor: token.trackHoverBg
                },
                [`${componentCls}-dot`]: {
                    borderColor: colorFillContentHover
                },
                [`${componentCls}-handle:not(${componentCls}-handle-disabled)::after`]: {
                    boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(handleLineWidth)} ${token.colorPrimaryBorderHover}`
                },
                [`${componentCls}-dot-active`]: {
                    borderColor: token.dotActiveBorderColor
                }
            },
            [`${componentCls}-handle`]: {
                position: 'absolute',
                width: handleSize,
                height: handleSize,
                outline: 'none',
                userSelect: 'none',
                // Dragging status
                '&-dragging-delete': {
                    opacity: 0
                },
                // 扩大选区
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    insetInlineStart: calc(handleLineWidth).mul(-1).equal(),
                    insetBlockStart: calc(handleLineWidth).mul(-1).equal(),
                    width: calc(handleSize).add(calc(handleLineWidth).mul(2)).equal(),
                    height: calc(handleSize).add(calc(handleLineWidth).mul(2)).equal(),
                    backgroundColor: 'transparent'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    width: handleSize,
                    height: handleSize,
                    backgroundColor: token.colorBgElevated,
                    boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(handleLineWidth)} ${token.handleColor}`,
                    outline: `0px solid transparent`,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: [
                        'inset-inline-start',
                        'inset-block-start',
                        'width',
                        'height',
                        'box-shadow',
                        'outline'
                    ].map((prop)=>`${prop} ${motionDurationMid}`).join(', ')
                },
                '&:hover, &:active, &:focus': {
                    [`&:not(${componentCls}-handle-disabled)::before`]: {
                        insetInlineStart: calc(handleSizeHover).sub(handleSize).div(2).add(handleLineWidthHover).mul(-1).equal(),
                        insetBlockStart: calc(handleSizeHover).sub(handleSize).div(2).add(handleLineWidthHover).mul(-1).equal(),
                        width: calc(handleSizeHover).add(calc(handleLineWidthHover).mul(2)).equal(),
                        height: calc(handleSizeHover).add(calc(handleLineWidthHover).mul(2)).equal()
                    },
                    [`&:not(${componentCls}-handle-disabled)::after`]: {
                        boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(handleLineWidthHover)} ${handleActiveColor}`,
                        outline: `6px solid ${handleActiveOutlineColor}`,
                        width: handleSizeHover,
                        height: handleSizeHover,
                        insetInlineStart: token.calc(handleSize).sub(handleSizeHover).div(2).equal(),
                        insetBlockStart: token.calc(handleSize).sub(handleSizeHover).div(2).equal()
                    }
                }
            },
            [`&-lock ${componentCls}-handle`]: {
                '&::before, &::after': {
                    transition: 'none'
                }
            },
            [`${componentCls}-mark`]: {
                position: 'absolute',
                fontSize: token.fontSize
            },
            [`${componentCls}-mark-text`]: {
                position: 'absolute',
                display: 'inline-block',
                color: token.colorTextDescription,
                textAlign: 'center',
                wordBreak: 'keep-all',
                cursor: 'pointer',
                userSelect: 'none',
                '&-active': {
                    color: token.colorText
                }
            },
            [`${componentCls}-step`]: {
                position: 'absolute',
                background: 'transparent',
                pointerEvents: 'none'
            },
            [`${componentCls}-dot`]: {
                position: 'absolute',
                width: dotSize,
                height: dotSize,
                backgroundColor: token.colorBgElevated,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(handleLineWidth)} solid ${token.dotBorderColor}`,
                borderRadius: '50%',
                cursor: 'pointer',
                transition: `border-color ${token.motionDurationSlow}`,
                pointerEvents: 'auto',
                '&-active': {
                    borderColor: token.dotActiveBorderColor
                }
            },
            [`&${componentCls}-disabled`]: {
                cursor: 'not-allowed',
                [`${componentCls}-rail`]: {
                    backgroundColor: `${token.railBg} !important`
                },
                [`${componentCls}-track`]: {
                    backgroundColor: `${token.trackBgDisabled} !important`
                },
                [`
          ${componentCls}-dot
        `]: {
                    backgroundColor: token.colorBgElevated,
                    borderColor: token.trackBgDisabled,
                    boxShadow: 'none',
                    cursor: 'not-allowed'
                },
                [`${componentCls}-handle::after`]: {
                    ...disabledHandle
                },
                [`
          ${componentCls}-mark-text,
          ${componentCls}-dot
        `]: {
                    cursor: `not-allowed !important`
                }
            },
            [`${componentCls}-handle-disabled::after`]: {
                ...disabledHandle
            },
            [`&-tooltip ${antCls}-tooltip-container`]: {
                minWidth: 'unset'
            }
        }
    };
};
// ============================ Horizontal ============================
const genDirectionStyle = (token, horizontal)=>{
    const { componentCls, railSize, handleSize, dotSize, marginFull, calc } = token;
    const railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
    const full = horizontal ? 'width' : 'height';
    const part = horizontal ? 'height' : 'width';
    const handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
    const markInset = horizontal ? 'top' : 'insetInlineStart';
    const handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
    const draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
    const draggableBorder = horizontal ? {
        borderWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(draggableBorderSize)} 0`,
        transform: `translateY(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(draggableBorderSize).mul(-1).equal())})`
    } : {
        borderWidth: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(draggableBorderSize)}`,
        transform: `translateX(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(draggableBorderSize).mul(-1).equal())})`
    };
    return {
        [railPadding]: railSize,
        [part]: calc(railSize).mul(3).equal(),
        [`${componentCls}-rail`]: {
            [full]: '100%',
            [part]: railSize
        },
        [`${componentCls}-track,${componentCls}-tracks`]: {
            [part]: railSize
        },
        [`${componentCls}-track-draggable`]: {
            ...draggableBorder
        },
        [`${componentCls}-handle`]: {
            [handlePos]: handlePosSize
        },
        [`${componentCls}-mark`]: {
            // Reset all
            insetInlineStart: 0,
            top: 0,
            // https://github.com/ant-design/ant-design/issues/43731
            [markInset]: calc(railSize).mul(3).add(horizontal ? 0 : marginFull).equal(),
            [full]: '100%'
        },
        [`${componentCls}-step`]: {
            // Reset all
            insetInlineStart: 0,
            top: 0,
            [markInset]: railSize,
            [full]: '100%',
            [part]: railSize
        },
        [`${componentCls}-dot`]: {
            position: 'absolute',
            [handlePos]: calc(railSize).sub(dotSize).div(2).equal()
        }
    };
};
// ============================ Horizontal ============================
const genHorizontalStyle = (token)=>{
    const { componentCls, marginPartWithMark } = token;
    return {
        [`${componentCls}-horizontal`]: {
            ...genDirectionStyle(token, true),
            [`&${componentCls}-with-marks`]: {
                marginBottom: marginPartWithMark
            }
        }
    };
};
// ============================= Vertical =============================
const genVerticalStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-vertical`]: {
            ...genDirectionStyle(token, false),
            height: '100%'
        }
    };
};
const prepareComponentToken = (token)=>{
    // Handle line width is always width-er 1px
    const increaseHandleWidth = 1;
    const controlSize = token.controlHeightLG / 4;
    const controlSizeHover = token.controlHeightSM / 2;
    const handleLineWidth = token.lineWidth + increaseHandleWidth;
    const handleLineWidthHover = token.lineWidth + increaseHandleWidth * 1.5;
    const handleActiveColor = token.colorPrimary;
    const handleActiveOutlineColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](handleActiveColor).setA(0.2).toRgbString();
    return {
        controlSize,
        railSize: 4,
        handleSize: controlSize,
        handleSizeHover: controlSizeHover,
        dotSize: 8,
        handleLineWidth,
        handleLineWidthHover,
        railBg: token.colorFillTertiary,
        railHoverBg: token.colorFillSecondary,
        trackBg: token.colorPrimaryBorder,
        trackHoverBg: token.colorPrimaryBorderHover,
        handleColor: token.colorPrimaryBorder,
        handleActiveColor,
        handleActiveOutlineColor,
        handleColorDisabled: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](token.colorTextDisabled).onBackground(token.colorBgContainer).toHexString(),
        dotBorderColor: token.colorBorderSecondary,
        dotActiveBorderColor: token.colorPrimaryBorder,
        trackBgDisabled: token.colorBgContainerDisabled
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Slider', (token)=>{
    const sliderToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        marginPart: token.calc(token.controlHeight).sub(token.controlSize).div(2).equal(),
        marginFull: token.calc(token.controlSize).div(2).equal(),
        marginPartWithMark: token.calc(token.controlHeightLG).sub(token.controlSize).equal()
    });
    return [
        genBaseStyle(sliderToken),
        genHorizontalStyle(sliderToken),
        genVerticalStyle(sliderToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/slider/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$slider$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/slider/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/slider/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$SliderTooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/slider/SliderTooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/slider/style/index.js [app-client] (ecmascript)");
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
function getTipFormatter(tipFormatter) {
    if (tipFormatter || tipFormatter === null) {
        return tipFormatter;
    }
    return (val)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(val) ? val.toString() : '';
}
const Slider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, range, className, rootClassName, style, disabled, // Deprecated Props
    tooltip = {}, onChangeComplete, classNames, styles, vertical, orientation, ...restProps } = props;
    const [, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical);
    const { getPrefixCls, direction: contextDirection, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, getPopupContainer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('slider');
    const contextDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = disabled ?? contextDisabled;
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        disabled: mergedDisabled,
        vertical: mergedVertical
    };
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
        props: mergedProps
    });
    // ============================= Context ==============================
    const { handleRender: contextHandleRender, direction: internalContextDirection } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDirection = internalContextDirection || contextDirection;
    const isRTL = mergedDirection === 'rtl';
    // =============================== Open ===============================
    const [hoverOpen, setHoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    const [focusOpen, setFocusOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    const tooltipProps = {
        ...tooltip
    };
    const { open: tooltipOpen, placement: tooltipPlacement, getPopupContainer: getTooltipPopupContainer, prefixCls: customizeTooltipPrefixCls, formatter: tipFormatter } = tooltipProps;
    const lockOpen = tooltipOpen;
    const activeOpen = (hoverOpen || focusOpen) && lockOpen !== false;
    const mergedTipFormatter = getTipFormatter(tipFormatter);
    // ============================= Change ==============================
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    const onInternalChangeComplete = (nextValues)=>{
        onChangeComplete?.(nextValues);
        setDragging(false);
    };
    // ============================ Placement ============================
    const getTooltipPlacement = (placement, vert)=>{
        if (placement) {
            return placement;
        }
        if (!vert) {
            return 'top';
        }
        return isRTL ? 'left' : 'right';
    };
    // ============================== Style ===============================
    const prefixCls = getPrefixCls('slider', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, contextClassName, mergedClassNames.root, rootClassName, {
        [`${prefixCls}-rtl`]: isRTL,
        [`${prefixCls}-lock`]: dragging
    }, hashId, cssVarCls);
    // make reverse default on rtl direction
    if (isRTL && !mergedVertical) {
        restProps.reverse = !restProps.reverse;
    }
    // ============================= Warning ==============================
    // Warning for deprecated usage
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Slider');
        [
            [
                'tooltipPrefixCls',
                'prefixCls'
            ],
            [
                'getTooltipPopupContainer',
                'getPopupContainer'
            ],
            [
                'tipFormatter',
                'formatter'
            ],
            [
                'tooltipPlacement',
                'placement'
            ],
            [
                'tooltipVisible',
                'open'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, `tooltip.${newName}`);
        });
    }
    // ============================== Handle ==============================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Slider.useEffect": ()=>{
            const onMouseUp = {
                "Slider.useEffect.onMouseUp": ()=>{
                    // Delay for 1 frame to make the click to enable hide tooltip
                    // even when the handle is focused
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])({
                        "Slider.useEffect.onMouseUp": ()=>{
                            setFocusOpen(false);
                        }
                    }["Slider.useEffect.onMouseUp"], 1);
                }
            }["Slider.useEffect.onMouseUp"];
            document.addEventListener('mouseup', onMouseUp);
            return ({
                "Slider.useEffect": ()=>{
                    document.removeEventListener('mouseup', onMouseUp);
                }
            })["Slider.useEffect"];
        }
    }["Slider.useEffect"], []);
    const useActiveTooltipHandle = range && !lockOpen;
    const handleRender = contextHandleRender || ((node, info)=>{
        const { index } = info;
        const nodeProps = node.props;
        function proxyEvent(eventName, event) {
            nodeProps[eventName]?.(event);
        }
        const passedProps = {
            ...nodeProps,
            onMouseEnter: (e)=>{
                setHoverOpen(true, true);
                proxyEvent('onMouseEnter', e);
            },
            onMouseLeave: (e)=>{
                setHoverOpen(false);
                proxyEvent('onMouseLeave', e);
            },
            onMouseDown: (e)=>{
                setFocusOpen(true, true);
                setDragging(true, true);
                proxyEvent('onMouseDown', e);
            },
            onFocus: (e)=>{
                setFocusOpen(true, true);
                proxyEvent('onFocus', e);
            },
            onBlur: (e)=>{
                setFocusOpen(false);
                proxyEvent('onBlur', e);
            }
        };
        const cloneNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(node, passedProps);
        const open = (!!lockOpen || activeOpen) && mergedTipFormatter !== null;
        // Wrap on handle with Tooltip when is single mode or multiple with all show tooltip
        if (!useActiveTooltipHandle) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$SliderTooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...tooltipProps,
                prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls),
                title: mergedTipFormatter ? mergedTipFormatter(info.value) : undefined,
                value: info.value,
                open: open,
                placement: getTooltipPlacement(tooltipPlacement, mergedVertical),
                key: index,
                classNames: {
                    root: `${prefixCls}-tooltip`
                },
                getPopupContainer: getTooltipPopupContainer || getPopupContainer
            }, cloneNode);
        }
        return cloneNode;
    });
    // ========================== Active Handle ===========================
    const activeHandleRender = useActiveTooltipHandle ? (handle, info)=>{
        const cloneNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(handle, {
            style: {
                ...handle.props.style,
                visibility: 'hidden'
            }
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$SliderTooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...tooltipProps,
            prefixCls: getPrefixCls('tooltip', customizeTooltipPrefixCls),
            title: mergedTipFormatter ? mergedTipFormatter(info.value) : undefined,
            open: mergedTipFormatter !== null && activeOpen,
            placement: getTooltipPlacement(tooltipPlacement, mergedVertical),
            key: "tooltip",
            classNames: {
                root: `${prefixCls}-tooltip`
            },
            getPopupContainer: getTooltipPopupContainer || getPopupContainer,
            draggingDelete: info.draggingDelete
        }, cloneNode);
    } : undefined;
    // ============================== Render ==============================
    const rootStyle = {
        ...mergedStyles.root
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$slider$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ...restProps,
        classNames: mergedClassNames,
        styles: mergedStyles,
        step: restProps.step,
        range: range,
        className: rootClassNames,
        style: rootStyle,
        disabled: mergedDisabled,
        vertical: mergedVertical,
        ref: ref,
        prefixCls: prefixCls,
        handleRender: handleRender,
        activeHandleRender: activeHandleRender,
        onChangeComplete: onInternalChangeComplete
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Slider.displayName = 'Slider';
}
const __TURBOPACK__default__export__ = Slider;
}),
"[project]/apps/web/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/slider/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript) <export default as Tooltip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/upload/style/dragger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
;
const genDraggerStyle = (token)=>{
    const { componentCls, iconCls } = token;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-drag`]: {
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                background: token.colorFillAlter,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} dashed ${token.colorBorder}`,
                borderRadius: token.borderRadiusLG,
                cursor: 'pointer',
                transition: `border-color ${token.motionDurationSlow}`,
                [componentCls]: {
                    padding: token.padding
                },
                [`${componentCls}-btn`]: {
                    display: 'table',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    borderRadius: token.borderRadiusLG,
                    '&:focus-visible': {
                        outline: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`
                    }
                },
                [`${componentCls}-drag-container`]: {
                    display: 'table-cell',
                    verticalAlign: 'middle'
                },
                [`
          &:not(${componentCls}-disabled):hover,
          &-hover:not(${componentCls}-disabled)
        `]: {
                    borderColor: token.colorPrimaryHover
                },
                [`p${componentCls}-drag-icon`]: {
                    marginBottom: token.margin,
                    [iconCls]: {
                        color: token.colorPrimary,
                        fontSize: token.uploadThumbnailSize
                    }
                },
                [`p${componentCls}-text`]: {
                    margin: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS)}`,
                    color: token.colorTextHeading,
                    fontSize: token.fontSizeLG
                },
                [`p${componentCls}-hint`]: {
                    color: token.colorTextDescription,
                    fontSize: token.fontSize
                },
                // ===================== Disabled =====================
                [`&${componentCls}-disabled`]: {
                    [`p${componentCls}-drag-icon ${iconCls},
            p${componentCls}-text,
            p${componentCls}-hint
          `]: {
                        color: token.colorTextDisabled
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genDraggerStyle;
}),
"[project]/apps/web/node_modules/antd/es/upload/style/list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
;
;
const genListStyle = (token)=>{
    const { componentCls, iconCls, fontSize, lineHeight, motionDurationSlow, calc } = token;
    const itemCls = `${componentCls}-list-item`;
    const actionsCls = `${itemCls}-actions`;
    const actionCls = `${itemCls}-action`;
    return {
        [`${componentCls}-wrapper`]: {
            [`${componentCls}-list`]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
                lineHeight: token.lineHeight,
                [itemCls]: {
                    position: 'relative',
                    height: calc(token.lineHeight).mul(fontSize).equal(),
                    marginTop: token.marginXS,
                    fontSize,
                    display: 'flex',
                    alignItems: 'center',
                    transition: `background-color ${motionDurationSlow}`,
                    borderRadius: token.borderRadiusSM,
                    '&:hover': {
                        backgroundColor: token.controlItemBgHover
                    },
                    [`${itemCls}-name`]: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)}`,
                        lineHeight,
                        flex: 'auto',
                        transition: `all ${motionDurationSlow}`
                    },
                    [actionsCls]: {
                        whiteSpace: 'nowrap',
                        [actionCls]: {
                            opacity: 0
                        },
                        '@media (hover: none), (pointer: coarse)': {
                            [actionCls]: {
                                opacity: 1
                            }
                        },
                        [iconCls]: {
                            color: token.actionsColor,
                            transition: `all ${motionDurationSlow}`
                        },
                        [`
              ${actionCls}:focus-visible,
              &.picture ${actionCls}
            `]: {
                            opacity: 1
                        }
                    },
                    [`${componentCls}-icon ${iconCls}`]: {
                        color: token.colorIcon,
                        fontSize
                    },
                    [`${itemCls}-progress`]: {
                        position: 'absolute',
                        bottom: token.calc(token.uploadProgressOffset).mul(-1).equal(),
                        width: '100%',
                        paddingInlineStart: calc(fontSize).add(token.paddingXS).equal(),
                        fontSize,
                        lineHeight: 0,
                        pointerEvents: 'none',
                        '> div': {
                            margin: 0
                        }
                    }
                },
                [`${itemCls}:hover ${actionCls}`]: {
                    opacity: 1
                },
                [`${itemCls}-error`]: {
                    color: token.colorError,
                    [`${itemCls}-name, ${componentCls}-icon ${iconCls}`]: {
                        color: token.colorError
                    },
                    [actionsCls]: {
                        [`${iconCls}, ${iconCls}:hover`]: {
                            color: token.colorError
                        },
                        [actionCls]: {
                            opacity: 1
                        }
                    }
                },
                [`${componentCls}-list-item-container`]: {
                    transition: [
                        'opacity',
                        'height'
                    ].map((prop)=>`${prop} ${motionDurationSlow}`).join(', '),
                    // For smooth removing animation
                    '&::before': {
                        display: 'table',
                        width: 0,
                        height: 0,
                        content: '""'
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genListStyle;
}),
"[project]/apps/web/node_modules/antd/es/upload/style/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)");
;
;
// =========================== Motion ===========================
const genMotionStyle = (token)=>{
    const { componentCls } = token;
    const uploadAnimateInlineIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('uploadAnimateInlineIn', {
        from: {
            width: 0,
            height: 0,
            padding: 0,
            opacity: 0,
            margin: token.calc(token.marginXS).div(-2).equal()
        }
    });
    const uploadAnimateInlineOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('uploadAnimateInlineOut', {
        to: {
            width: 0,
            height: 0,
            padding: 0,
            opacity: 0,
            margin: token.calc(token.marginXS).div(-2).equal()
        }
    });
    const inlineCls = `${componentCls}-animate-inline`;
    return [
        {
            [`${componentCls}-wrapper`]: {
                [`${inlineCls}-appear, ${inlineCls}-enter, ${inlineCls}-leave`]: {
                    animationDuration: token.motionDurationSlow,
                    animationTimingFunction: token.motionEaseInOutCirc,
                    animationFillMode: 'forwards'
                },
                [`${inlineCls}-appear, ${inlineCls}-enter`]: {
                    animationName: uploadAnimateInlineIn
                },
                [`${inlineCls}-leave`]: {
                    animationName: uploadAnimateInlineOut
                }
            }
        },
        {
            [`${componentCls}-wrapper`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initFadeMotion"])(token)
        },
        uploadAnimateInlineIn,
        uploadAnimateInlineOut
    ];
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/apps/web/node_modules/antd/es/upload/style/picture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPictureCardStyle",
    ()=>genPictureCardStyle,
    "genPictureStyle",
    ()=>genPictureStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
;
;
const genPictureStyle = (token)=>{
    const { componentCls, iconCls, uploadThumbnailSize, uploadProgressOffset, calc } = token;
    const listCls = `${componentCls}-list`;
    const itemCls = `${listCls}-item`;
    return {
        [`${componentCls}-wrapper`]: {
            // ${listCls} 增加优先级
            [`
        ${listCls}${listCls}-picture,
        ${listCls}${listCls}-picture-card,
        ${listCls}${listCls}-picture-circle
      `]: {
                [itemCls]: {
                    position: 'relative',
                    height: calc(uploadThumbnailSize).add(calc(token.lineWidth).mul(2)).add(calc(token.paddingXS).mul(2)).equal(),
                    padding: token.paddingXS,
                    border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
                    borderRadius: token.borderRadiusLG,
                    '&:hover': {
                        background: 'transparent'
                    },
                    [`${itemCls}-thumbnail`]: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
                        width: uploadThumbnailSize,
                        height: uploadThumbnailSize,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(uploadThumbnailSize).add(token.paddingSM).equal()),
                        textAlign: 'center',
                        flex: 'none',
                        [iconCls]: {
                            fontSize: token.fontSizeHeading2,
                            color: token.colorPrimary
                        },
                        img: {
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                        }
                    },
                    [`${itemCls}-progress`]: {
                        bottom: calc(token.fontSize).mul(token.lineHeight).div(2).add(uploadProgressOffset).equal(),
                        width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingSM).mul(2).equal())})`,
                        marginTop: 0,
                        paddingInlineStart: calc(uploadThumbnailSize).add(token.paddingXS).equal()
                    }
                },
                [`${itemCls}-error`]: {
                    borderColor: token.colorError,
                    [`${itemCls}-thumbnail${itemCls}-file ${iconCls}`]: {
                        color: token.colorError
                    }
                },
                [`${itemCls}-uploading`]: {
                    borderStyle: 'dashed',
                    [`${itemCls}-name`]: {
                        marginBottom: uploadProgressOffset
                    }
                }
            },
            [`${listCls}${listCls}-picture-circle ${itemCls}`]: {
                [`&, &::before, ${itemCls}-thumbnail`]: {
                    borderRadius: '50%'
                }
            }
        }
    };
};
const genPictureCardStyle = (token)=>{
    const { componentCls, iconCls, fontSizeLG, colorTextLightSolid, calc } = token;
    const listCls = `${componentCls}-list`;
    const itemCls = `${listCls}-item`;
    const uploadPictureCardSize = token.uploadPicCardSize;
    return {
        [`
      ${componentCls}-wrapper${componentCls}-picture-card-wrapper,
      ${componentCls}-wrapper${componentCls}-picture-circle-wrapper
    `]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
            display: 'block',
            [`${componentCls}${componentCls}-select`]: {
                width: uploadPictureCardSize,
                height: uploadPictureCardSize,
                textAlign: 'center',
                verticalAlign: 'top',
                backgroundColor: token.colorFillAlter,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} dashed ${token.colorBorder}`,
                borderRadius: token.borderRadiusLG,
                cursor: 'pointer',
                transition: `border-color ${token.motionDurationSlow}`,
                [`> ${componentCls}`]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center'
                },
                [`&:not(${componentCls}-disabled):hover`]: {
                    borderColor: token.colorPrimary
                }
            },
            // list
            [`${listCls}${listCls}-picture-card, ${listCls}${listCls}-picture-circle`]: {
                display: 'flex',
                flexWrap: 'wrap',
                '&:not(:empty)': {
                    minHeight: uploadPictureCardSize
                },
                '@supports not (gap: 1px)': {
                    '& > *': {
                        marginBlockEnd: token.marginXS,
                        marginInlineEnd: token.marginXS
                    }
                },
                '@supports (gap: 1px)': {
                    gap: token.marginXS
                },
                [`${listCls}-item-container`]: {
                    display: 'inline-block',
                    width: uploadPictureCardSize,
                    height: uploadPictureCardSize,
                    verticalAlign: 'top'
                },
                '&::after': {
                    display: 'none'
                },
                '&::before': {
                    display: 'none'
                },
                [itemCls]: {
                    height: '100%',
                    margin: 0,
                    '&::before': {
                        position: 'absolute',
                        zIndex: 1,
                        width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                        height: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                        backgroundColor: token.colorBgMask,
                        opacity: 0,
                        transition: `all ${token.motionDurationSlow}`,
                        content: '" "'
                    }
                },
                [`${itemCls}:hover`]: {
                    [`&::before, ${itemCls}-actions`]: {
                        opacity: 1
                    }
                },
                [`${itemCls}-actions`]: {
                    position: 'absolute',
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: '100%',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    opacity: 0,
                    transition: `all ${token.motionDurationSlow}`,
                    [`
            ${iconCls}-eye,
            ${iconCls}-download,
            ${iconCls}-delete
          `]: {
                        zIndex: 10,
                        width: fontSizeLG,
                        margin: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXXS)}`,
                        fontSize: fontSizeLG,
                        cursor: 'pointer',
                        transition: `all ${token.motionDurationSlow}`,
                        color: colorTextLightSolid,
                        '&:hover': {
                            color: colorTextLightSolid
                        },
                        svg: {
                            verticalAlign: 'baseline'
                        }
                    }
                },
                [`${itemCls}-thumbnail, ${itemCls}-thumbnail img`]: {
                    position: 'static',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                },
                [`${itemCls}-name`]: {
                    display: 'none',
                    textAlign: 'center'
                },
                [`${itemCls}-file + ${itemCls}-name`]: {
                    position: 'absolute',
                    bottom: token.margin,
                    display: 'block',
                    width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`
                },
                [`${itemCls}-uploading`]: {
                    [`&${itemCls}`]: {
                        backgroundColor: token.colorFillAlter
                    },
                    [`&::before, ${iconCls}-eye, ${iconCls}-download, ${iconCls}-delete`]: {
                        display: 'none'
                    }
                },
                [`${itemCls}-progress`]: {
                    bottom: token.marginXL,
                    width: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.paddingXS).mul(2).equal())})`,
                    paddingInlineStart: 0
                }
            }
        },
        [`${componentCls}-wrapper${componentCls}-picture-circle-wrapper`]: {
            [`${componentCls}${componentCls}-select`]: {
                borderRadius: '50%'
            }
        }
    };
};
;
}),
"[project]/apps/web/node_modules/antd/es/upload/style/rtl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// =========================== Motion ===========================
const genRtlStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-rtl`]: {
            direction: 'rtl'
        }
    };
};
const __TURBOPACK__default__export__ = genRtlStyle;
}),
"[project]/apps/web/node_modules/antd/es/upload/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$dragger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/dragger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/picture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/rtl.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const genBaseStyle = (token)=>{
    const { componentCls, colorTextDisabled } = token;
    return {
        [`${componentCls}-wrapper`]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            [componentCls]: {
                outline: 0,
                "input[type='file']": {
                    cursor: 'pointer'
                }
            },
            [`${componentCls}-select`]: {
                display: 'inline-block'
            },
            [`${componentCls}-hidden`]: {
                display: 'none'
            },
            [`${componentCls}-disabled`]: {
                color: colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        actionsColor: token.colorIcon,
        pictureCardSize: token.controlHeightLG * 2.55
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Upload', (token)=>{
    const { fontSizeHeading3, marginXS, lineWidth, pictureCardSize, calc } = token;
    const uploadToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        uploadThumbnailSize: calc(fontSizeHeading3).mul(2).equal(),
        uploadProgressOffset: calc(calc(marginXS).div(2)).add(lineWidth).equal(),
        uploadPicCardSize: pictureCardSize
    });
    return [
        genBaseStyle(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$dragger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genPictureStyle"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$picture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genPictureCardStyle"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uploadToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(uploadToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/upload/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "file2Obj",
    ()=>file2Obj,
    "getFileItem",
    ()=>getFileItem,
    "isImageUrl",
    ()=>isImageUrl,
    "previewImage",
    ()=>previewImage,
    "removeFileItem",
    ()=>removeFileItem,
    "updateFileList",
    ()=>updateFileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
;
function file2Obj(file) {
    return {
        ...file,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        percent: 0,
        originFileObj: file
    };
}
function updateFileList(file, fileList) {
    const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fileList);
    const fileIndex = nextFileList.findIndex(({ uid })=>uid === file.uid);
    if (fileIndex === -1) {
        nextFileList.push(file);
    } else {
        nextFileList[fileIndex] = file;
    }
    return nextFileList;
}
function getFileItem(file, fileList) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter((item)=>item[matchKey] === file[matchKey])[0];
}
function removeFileItem(file, fileList) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    const removed = fileList.filter((item)=>item[matchKey] !== file[matchKey]);
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}
// ==================== Default Image Preview ====================
const extname = (url = '')=>{
    const temp = url.split('/');
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [
        ''
    ])[0];
};
const isImageFileType = (type)=>type.indexOf('image/') === 0;
const imageExtensions = [
    '.avif',
    '.bmp',
    '.dpg',
    '.gif',
    '.heic',
    '.heif',
    '.ico',
    '.jfif',
    '.jpg',
    '.jpeg',
    '.png',
    '.svg',
    '.tif',
    '.tiff',
    '.webp'
];
const isImageUrl = (file)=>{
    if (file.type && !file.thumbUrl) {
        return isImageFileType(file.type);
    }
    const url = file.thumbUrl || file.url || '';
    const extension = extname(url || file.name);
    if (/^data:image\//.test(url) || imageExtensions.includes(extension?.toLowerCase() || '')) {
        return true;
    }
    if (/^data:/.test(url)) {
        // other file types of base64
        return false;
    }
    if (extension) {
        // other file types which have extension
        return false;
    }
    return true;
};
const MEASURE_SIZE = 200;
function previewImage(file) {
    return new Promise((resolve)=>{
        if (!file.type || !isImageFileType(file.type)) {
            resolve('');
            return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = MEASURE_SIZE;
        canvas.height = MEASURE_SIZE;
        canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = ()=>{
            const { width, height } = img;
            let drawWidth = MEASURE_SIZE;
            let drawHeight = MEASURE_SIZE;
            let offsetX = 0;
            let offsetY = 0;
            if (width > height) {
                drawHeight = height * (MEASURE_SIZE / width);
                offsetY = -(drawHeight - drawWidth) / 2;
            } else {
                drawWidth = width * (MEASURE_SIZE / height);
                offsetX = -(drawWidth - drawHeight) / 2;
            }
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            const dataURL = canvas.toDataURL();
            document.body.removeChild(canvas);
            window.URL.revokeObjectURL(img.src);
            resolve(dataURL);
        };
        img.crossOrigin = 'anonymous';
        if (file.type.startsWith('image/svg+xml')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result && typeof reader.result === 'string') {
                    img.src = reader.result;
                }
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('image/gif')) {
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.result) {
                    resolve(reader.result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            img.src = window.URL.createObjectURL(file);
        }
    });
}
}),
"[project]/apps/web/node_modules/antd/es/upload/UploadList/ListItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/DownloadOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
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
const ListItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ prefixCls, className, style, classNames: itemClassNames, styles, locale, listType, file, items, progress: progressProps, iconRender, actionIconRender, itemRender, isImgUrl, showPreviewIcon, showRemoveIcon, showDownloadIcon, previewIcon: customPreviewIcon, removeIcon: customRemoveIcon, downloadIcon: customDownloadIcon, extra: customExtra, onPreview, onDownload, onClose }, ref)=>{
    // Status: which will ignore `removed` status
    const { status } = file;
    const [mergedStatus, setMergedStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](status);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ListItem.useEffect": ()=>{
            if (status !== 'removed') {
                setMergedStatus(status);
            }
        }
    }["ListItem.useEffect"], [
        status
    ]);
    // Delay to show the progress bar
    const [showProgress, setShowProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ListItem.useEffect": ()=>{
            setShowProgress(true, {
                ms: 300
            });
        }
    }["ListItem.useEffect"], []);
    const iconNode = iconRender(file);
    let icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-icon`
    }, iconNode);
    if (listType === 'picture' || listType === 'picture-card' || listType === 'picture-circle') {
        if (mergedStatus === 'uploading' || !file.thumbUrl && !file.url) {
            const uploadingClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-thumbnail`, {
                [`${prefixCls}-list-item-file`]: mergedStatus !== 'uploading'
            });
            icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: uploadingClassName
            }, iconNode);
        } else {
            const thumbnail = isImgUrl?.(file) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("img", {
                src: file.thumbUrl || file.url,
                alt: file.name,
                className: `${prefixCls}-list-item-image`,
                crossOrigin: file.crossOrigin
            }) : iconNode;
            const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-thumbnail`, {
                [`${prefixCls}-list-item-file`]: isImgUrl && !isImgUrl(file)
            });
            icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
                className: aClassName,
                onClick: (e)=>onPreview(file, e),
                href: file.url || file.thumbUrl,
                target: "_blank",
                rel: "noopener noreferrer"
            }, thumbnail);
        }
    }
    const listItemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item`, `${prefixCls}-list-item-${mergedStatus}`, itemClassNames?.item);
    const linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    const removeIcon = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(showRemoveIcon) ? showRemoveIcon(file) : showRemoveIcon) ? actionIconRender(((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(customRemoveIcon) ? customRemoveIcon(file) : customRemoveIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), ()=>onClose(file), prefixCls, locale.removeFile, // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    true) : null;
    const downloadIcon = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(showDownloadIcon) ? showDownloadIcon(file) : showDownloadIcon) && mergedStatus === 'done' ? actionIconRender(((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(customDownloadIcon) ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), ()=>onDownload(file), prefixCls, locale.downloadFile) : null;
    const downloadOrDelete = listType !== 'picture-card' && listType !== 'picture-circle' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        key: "download-delete",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-actions`, {
            picture: listType === 'picture'
        })
    }, downloadIcon, removeIcon);
    const extraContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(customExtra) ? customExtra(file) : customExtra;
    const extra = extraContent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-list-item-extra`
    }, extraContent);
    const listItemNameClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-name`);
    const onPreviewKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onPreview(file, e);
        }
    };
    const fileName = file.url ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        key: "view",
        target: "_blank",
        rel: "noopener noreferrer",
        className: listItemNameClass,
        title: file.name,
        ...linkProps,
        href: file.url,
        onClick: (e)=>onPreview(file, e)
    }, file.name, extra) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        key: "view",
        role: "button",
        tabIndex: 0,
        className: listItemNameClass,
        onClick: (e)=>onPreview(file, e),
        onKeyDown: onPreviewKeyDown,
        title: file.name
    }, file.name, extra);
    const previewIcon = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(showPreviewIcon) ? showPreviewIcon(file) : showPreviewIcon) && (file.url || file.thumbUrl) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        href: file.url || file.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e)=>onPreview(file, e),
        title: locale.previewFile,
        "aria-label": locale.previewFile || undefined
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(customPreviewIcon) ? customPreviewIcon(file) : customPreviewIcon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const pictureCardActions = (listType === 'picture-card' || listType === 'picture-circle') && mergedStatus !== 'uploading' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${prefixCls}-list-item-actions`
    }, previewIcon, mergedStatus === 'done' && downloadIcon, removeIcon);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: listItemClassName,
        style: styles?.item
    }, icon, fileName, downloadOrDelete, pictureCardActions, showProgress && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        motionName: `${rootPrefixCls}-fade`,
        visible: mergedStatus === 'uploading',
        motionDeadline: 2000
    }, ({ className: motionClassName })=>{
        // show loading icon if upload progress listener is disabled
        const loadingProgress = 'percent' in file ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "line",
            percent: file.percent,
            "aria-label": file['aria-label'],
            "aria-labelledby": file['aria-labelledby'],
            ...progressProps
        }) : null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-progress`, motionClassName)
        }, loadingProgress);
    }));
    const message = file.response && typeof file.response === 'string' ? file.response : file.error?.statusText || file.error?.message || locale.uploadError;
    const item = mergedStatus === 'error' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: message,
        getPopupContainer: (node)=>node.parentNode
    }, dom) : dom;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list-item-container`, className),
        style: style,
        ref: ref
    }, itemRender ? itemRender(item, file, items, {
        download: onDownload.bind(null, file),
        preview: onPreview.bind(null, file),
        remove: onClose.bind(null, file)
    }) : item);
});
const __TURBOPACK__default__export__ = ListItem;
}),
"[project]/apps/web/node_modules/antd/es/upload/UploadList/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/FileOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PictureOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/CSSMotionList.js [app-client] (ecmascript) <export default as CSSMotionList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/UploadList/ListItem.js [app-client] (ecmascript)");
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
const InternalUploadList = (props, ref)=>{
    const { listType = 'text', previewFile = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewImage"], onPreview, onDownload, onRemove, locale, iconRender, isImageUrl: isImgUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isImageUrl"], prefixCls: customizePrefixCls, items = [], showPreviewIcon = true, showRemoveIcon = true, showDownloadIcon = false, removeIcon, previewIcon, downloadIcon, extra, progress = {
        size: [
            -1,
            2
        ],
        showInfo: false
    }, appendAction, appendActionVisible = true, itemRender, disabled, classNames: uploadListClassNames, styles } = props;
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const [motionAppear, setMotionAppear] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const isPictureCardOrCirle = [
        'picture-card',
        'picture-circle'
    ].includes(listType);
    // ============================= Effect =============================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InternalUploadList.useEffect": ()=>{
            if (!listType.startsWith('picture')) {
                return;
            }
            (items || []).forEach({
                "InternalUploadList.useEffect": (file)=>{
                    if (!(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
                        return;
                    }
                    file.thumbUrl = '';
                    previewFile?.(file.originFileObj).then({
                        "InternalUploadList.useEffect": (previewDataUrl)=>{
                            // Need append '' to avoid dead loop
                            file.thumbUrl = previewDataUrl || '';
                            forceUpdate();
                        }
                    }["InternalUploadList.useEffect"]);
                }
            }["InternalUploadList.useEffect"]);
        }
    }["InternalUploadList.useEffect"], [
        listType,
        items,
        previewFile
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InternalUploadList.useEffect": ()=>{
            setMotionAppear(true);
        }
    }["InternalUploadList.useEffect"], []);
    // ============================= Events =============================
    const onInternalPreview = (file, e)=>{
        if (!onPreview) {
            return;
        }
        e?.preventDefault();
        return onPreview(file);
    };
    const onInternalDownload = (file)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(onDownload)) {
            onDownload(file);
        } else if (file.url) {
            window.open(file.url, '_blank', 'noopener');
        }
    };
    const onInternalClose = (file)=>{
        onRemove?.(file);
    };
    const internalIconRender = (file)=>{
        if (iconRender) {
            return iconRender(file, listType);
        }
        const isLoading = file.status === 'uploading';
        if (listType.startsWith('picture')) {
            const loadingIcon = listType === 'picture' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : locale.uploading;
            const fileIcon = isImgUrl?.(file) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
            return isLoading ? loadingIcon : fileIcon;
        }
        return isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
    };
    const actionIconRender = (customIcon, callback, prefixCls, title, acceptUploadDisabled)=>{
        const btnProps = {
            type: 'text',
            size: 'small',
            title,
            'aria-label': title || undefined,
            onClick: (e)=>{
                callback();
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](customIcon)) {
                    customIcon.props.onClick?.(e);
                }
            },
            className: `${prefixCls}-list-item-action`,
            disabled: acceptUploadDisabled ? disabled : false
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](customIcon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...btnProps,
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(customIcon, {
                ...customIcon.props,
                onClick: ()=>{}
            })
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...btnProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, customIcon));
    };
    // ============================== Ref ===============================
    // Test needs
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalUploadList.useImperativeHandle": ()=>({
                handlePreview: onInternalPreview,
                handleDownload: onInternalDownload
            })
    }["InternalUploadList.useImperativeHandle"]);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    // ============================= Render =============================
    const prefixCls = getPrefixCls('upload', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const listClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-list`, `${prefixCls}-list-${listType}`, uploadListClassNames?.list);
    const listItemMotion = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalUploadList.useMemo[listItemMotion]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls), [
                'onAppearEnd',
                'onEnterEnd',
                'onLeaveEnd'
            ])
    }["InternalUploadList.useMemo[listItemMotion]"], [
        rootPrefixCls
    ]);
    const motionConfig = {
        ...isPictureCardOrCirle ? {} : listItemMotion,
        motionDeadline: 2000,
        motionName: `${prefixCls}-${isPictureCardOrCirle ? 'animate-inline' : 'animate'}`,
        keys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(items.map((file)=>({
                key: file.uid,
                file
            }))),
        motionAppear
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: listClassNames,
        style: styles?.list
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__["CSSMotionList"], {
        ...motionConfig,
        component: false
    }, ({ key, file, className: motionClassName, style: motionStyle })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: key,
            locale: locale,
            prefixCls: prefixCls,
            className: motionClassName,
            style: motionStyle,
            classNames: uploadListClassNames,
            styles: styles,
            file: file,
            items: items,
            progress: progress,
            listType: listType,
            isImgUrl: isImgUrl,
            showPreviewIcon: showPreviewIcon,
            showRemoveIcon: showRemoveIcon,
            showDownloadIcon: showDownloadIcon,
            removeIcon: removeIcon,
            previewIcon: previewIcon,
            downloadIcon: downloadIcon,
            extra: extra,
            iconRender: internalIconRender,
            actionIconRender: actionIconRender,
            itemRender: itemRender,
            onPreview: onInternalPreview,
            onDownload: onInternalDownload,
            onClose: onInternalClose
        })), appendAction && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ...motionConfig,
        visible: appendActionVisible,
        forceRender: true
    }, ({ className: motionClassName, style: motionStyle })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(appendAction, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, motionClassName),
                style: {
                    ...motionStyle,
                    // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
                    pointerEvents: motionClassName ? 'none' : undefined,
                    ...oriProps.style
                }
            }))));
};
const UploadList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalUploadList);
if ("TURBOPACK compile-time truthy", 1) {
    UploadList.displayName = 'UploadList';
}
const __TURBOPACK__default__export__ = UploadList;
}),
"[project]/apps/web/node_modules/antd/es/upload/Upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIST_IGNORE",
    ()=>LIST_IGNORE,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$upload$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/upload/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/fallbackProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/UploadList/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/utils.js [app-client] (ecmascript)");
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
const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;
const InternalUpload = (props, ref)=>{
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('upload');
    const { fileList, defaultFileList, onRemove, showUploadList = true, listType = 'text', onPreview, onDownload, onChange, onDrop, previewFile, disabled: customDisabled, locale: propLocale, iconRender, isImageUrl, progress: customProgress, prefixCls: customizePrefixCls, className, type = 'select', children, style, itemRender, maxCount, data = {}, multiple = false, hasControlInside = true, action = '', accept: customAccept, supportServerRender = true, rootClassName, styles, classNames } = props;
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    const customRequest = props.customRequest || config.customRequest;
    const mergedProgress = config.progress || customProgress ? {
        ...config.progress,
        ...customProgress
    } : undefined;
    const mergedAccept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customAccept, config.accept, '');
    const [internalFileList, setMergedFileList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultFileList, fileList);
    const mergedFileList = internalFileList || [];
    const getMergedFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "InternalUpload.useEvent[getMergedFileList]": ()=>mergedFileList
    }["InternalUpload.useEvent[getMergedFileList]"]);
    const [dragState, setDragState] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('drop');
    const uploadRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const wrapRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Upload');
        ("TURBOPACK compile-time truthy", 1) ? warning('fileList' in props || !('value' in props), 'usage', '`value` is not a valid prop, do you mean `fileList`?') : "TURBOPACK unreachable";
    }
    // Control mode will auto fill file uid if not provided
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalUpload.useMemo": ()=>{
            const timestamp = Date.now();
            (fileList || []).forEach({
                "InternalUpload.useMemo": (file, index)=>{
                    if (!file.uid && !Object.isFrozen(file)) {
                        file.uid = `__AUTO__${timestamp}_${index}__`;
                    }
                }
            }["InternalUpload.useMemo"]);
        }
    }["InternalUpload.useMemo"], [
        fileList
    ]);
    const onInternalChange = (file, changedFileList, event)=>{
        let cloneList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(changedFileList);
        let exceedMaxCount = false;
        // Cut to match count
        if (maxCount === 1) {
            cloneList = cloneList.slice(-1);
        } else if (maxCount) {
            exceedMaxCount = cloneList.length > maxCount;
            cloneList = cloneList.slice(0, maxCount);
        }
        // Prevent React18 auto batch since input[upload] trigger process at same time
        // which makes fileList closure problem
        // eslint-disable-next-line react-dom/no-flush-sync
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
            setMergedFileList(cloneList);
        });
        const changeInfo = {
            file: file,
            fileList: cloneList
        };
        if (event) {
            changeInfo.event = event;
        }
        if (!exceedMaxCount || file.status === 'removed' || // We should ignore event if current file is exceed `maxCount`
        cloneList.some((f)=>f.uid === file.uid)) {
            // eslint-disable-next-line react-dom/no-flush-sync
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                onChange?.(changeInfo);
            });
        }
    };
    const mergedBeforeUpload = async (file, fileListArgs)=>{
        const { beforeUpload } = props;
        let parsedFile = file;
        if (beforeUpload) {
            const result = await beforeUpload(file, fileListArgs);
            if (result === false) {
                return false;
            }
            // Hack for LIST_IGNORE, we add additional info to remove from the list
            delete file[LIST_IGNORE];
            if (result === LIST_IGNORE) {
                Object.defineProperty(file, LIST_IGNORE, {
                    value: true,
                    configurable: true
                });
                return false;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(result)) {
                parsedFile = result;
            }
        }
        return parsedFile;
    };
    const onBatchStart = (batchFileInfoList)=>{
        // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
        const filteredFileInfoList = batchFileInfoList.filter((info)=>!info.file[LIST_IGNORE]);
        // Nothing to do since no file need upload
        if (!filteredFileInfoList.length) {
            return;
        }
        const objectFileList = filteredFileInfoList.map((info)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["file2Obj"])(info.file));
        // Concat new files with prev files
        let newFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedFileList);
        objectFileList.forEach((fileObj)=>{
            // Replace file if exist
            newFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileList"])(fileObj, newFileList);
        });
        objectFileList.forEach((fileObj, index)=>{
            // Repeat trigger `onChange` event for compatible
            let triggerFileObj = fileObj;
            if (!filteredFileInfoList[index].parsedFile) {
                // `beforeUpload` return false
                const { originFileObj } = fileObj;
                let clone;
                try {
                    clone = new File([
                        originFileObj
                    ], originFileObj.name, {
                        type: originFileObj.type
                    });
                } catch  {
                    clone = new Blob([
                        originFileObj
                    ], {
                        type: originFileObj.type
                    });
                    clone.name = originFileObj.name;
                    clone.lastModifiedDate = new Date();
                    clone.lastModified = new Date().getTime();
                }
                clone.uid = fileObj.uid;
                triggerFileObj = clone;
            } else {
                // Inject `uploading` status
                fileObj.status = 'uploading';
            }
            onInternalChange(triggerFileObj, newFileList);
        });
    };
    const onSuccess = (response, file, xhr)=>{
        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch  {
        /* do nothing */ }
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.status = 'done';
        targetItem.percent = 100;
        targetItem.response = response;
        targetItem.xhr = xhr;
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList);
    };
    const onProgress = (e, file)=>{
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.status = 'uploading';
        targetItem.percent = e.percent;
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList, e);
    };
    const onError = (error, response, file)=>{
        // removed
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileItem"])(file, mergedFileList)) {
            return;
        }
        const targetItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["file2Obj"])(file);
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';
        const nextFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFileList"])(targetItem, mergedFileList);
        onInternalChange(targetItem, nextFileList);
    };
    const handleRemove = (file)=>{
        let currentFile;
        Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(onRemove) ? onRemove(file) : onRemove).then((ret)=>{
            // Prevent removing file
            if (ret === false) {
                return;
            }
            const currentFileList = getMergedFileList();
            const removedFileList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFileItem"])(file, currentFileList);
            if (removedFileList) {
                currentFile = {
                    ...file,
                    status: 'removed'
                };
                currentFileList.forEach((item)=>{
                    const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
                    if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
                        item.status = 'removed';
                    }
                });
                uploadRef.current?.abort(currentFile);
                onInternalChange(currentFile, removedFileList);
            }
        });
    };
    const onFileDrop = (e)=>{
        setDragState(e.type);
        if (e.type === 'drop') {
            onDrop?.(e);
        }
    };
    // Test needs
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalUpload.useImperativeHandle": ()=>({
                onBatchStart,
                onSuccess,
                onProgress,
                onError,
                fileList: mergedFileList,
                upload: uploadRef.current,
                nativeElement: wrapRef.current
            })
    }["InternalUpload.useImperativeHandle"]);
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('upload');
    const prefixCls = getPrefixCls('upload', customizePrefixCls);
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        listType,
        showUploadList,
        type,
        multiple,
        hasControlInside,
        supportServerRender,
        disabled: mergedDisabled
    };
    const contextTriggerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, 'trigger');
    const triggerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, 'trigger');
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextTriggerStyle,
        styles,
        triggerStyle
    ], {
        props: mergedProps
    });
    const rcUploadProps = {
        onBatchStart,
        onError,
        onProgress,
        onSuccess,
        ...props,
        customRequest,
        data,
        multiple,
        action,
        accept: mergedAccept,
        supportServerRender,
        prefixCls,
        disabled: mergedDisabled,
        beforeUpload: mergedBeforeUpload,
        onChange: undefined,
        hasControlInside
    };
    delete rcUploadProps.className;
    delete rcUploadProps.style;
    // Remove id to avoid open by label when trigger is hidden
    // !children: https://github.com/ant-design/ant-design/issues/14298
    // disabled: https://github.com/ant-design/ant-design/issues/16478
    //           https://github.com/ant-design/ant-design/issues/24197
    if (!children || mergedDisabled) {
        delete rcUploadProps.id;
    }
    const wrapperCls = `${prefixCls}-wrapper`;
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, wrapperCls);
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Upload', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Upload);
    const { showRemoveIcon, showPreviewIcon, showDownloadIcon, removeIcon, previewIcon, downloadIcon, extra } = typeof showUploadList === 'boolean' ? {} : showUploadList;
    // use showRemoveIcon if it is specified explicitly
    const realShowRemoveIcon = typeof showRemoveIcon === 'undefined' ? !mergedDisabled : showRemoveIcon;
    const renderUploadList = (button, buttonVisible)=>{
        if (!showUploadList) {
            return button;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$UploadList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            classNames: mergedClassNames,
            styles: mergedStyles,
            prefixCls: prefixCls,
            listType: listType,
            items: mergedFileList,
            previewFile: previewFile,
            onPreview: onPreview,
            onDownload: onDownload,
            onRemove: handleRemove,
            showRemoveIcon: realShowRemoveIcon,
            showPreviewIcon: showPreviewIcon,
            showDownloadIcon: showDownloadIcon,
            removeIcon: removeIcon,
            previewIcon: previewIcon,
            downloadIcon: downloadIcon,
            iconRender: iconRender,
            extra: extra,
            locale: {
                ...contextLocale,
                ...propLocale
            },
            isImageUrl: isImageUrl,
            progress: mergedProgress,
            appendAction: button,
            appendActionVisible: buttonVisible,
            itemRender: itemRender,
            disabled: mergedDisabled
        });
    };
    const mergedRootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(wrapperCls, className, rootClassName, hashId, cssVarCls, contextClassName, mergedClassNames.root, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-picture-card-wrapper`]: listType === 'picture-card',
        [`${prefixCls}-picture-circle-wrapper`]: listType === 'picture-circle'
    });
    const mergedRootStyle = {
        ...mergedStyles.root
    };
    // ======================== Render ========================
    if (type === 'drag') {
        const dragCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, prefixCls, `${prefixCls}-drag`, {
            [`${prefixCls}-drag-uploading`]: mergedFileList.some((file)=>file.status === 'uploading'),
            [`${prefixCls}-drag-hover`]: dragState === 'dragover',
            [`${prefixCls}-disabled`]: mergedDisabled,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        }, mergedClassNames.trigger);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: mergedRootCls,
            ref: wrapRef,
            style: mergedRootStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: dragCls,
            style: mergedStyles.trigger,
            onDrop: onFileDrop,
            onDragOver: onFileDrop,
            onDragLeave: onFileDrop
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$upload$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...rcUploadProps,
            ref: uploadRef,
            className: `${prefixCls}-btn`
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: `${prefixCls}-drag-container`
        }, children))), renderUploadList());
    }
    const uploadBtnCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-select`, {
        [`${prefixCls}-disabled`]: mergedDisabled,
        [`${prefixCls}-hidden`]: !children
    }, mergedClassNames.trigger);
    const uploadButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: uploadBtnCls,
        style: mergedStyles.trigger
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$upload$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...rcUploadProps,
        ref: uploadRef
    }));
    if (listType === 'picture-card' || listType === 'picture-circle') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: mergedRootCls,
            ref: wrapRef,
            style: mergedRootStyle
        }, renderUploadList(uploadButton, !!children));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: mergedRootCls,
        ref: wrapRef,
        style: mergedRootStyle
    }, uploadButton, renderUploadList());
};
const Upload = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalUpload);
if ("TURBOPACK compile-time truthy", 1) {
    Upload.displayName = 'Upload';
}
const __TURBOPACK__default__export__ = Upload;
}),
"[project]/apps/web/node_modules/antd/es/upload/Dragger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/Upload.js [app-client] (ecmascript)");
"use client";
;
;
const Dragger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { style, height, hasControlInside = false, children, ...restProps } = props;
    const mergedStyle = {
        ...style,
        height
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        hasControlInside: hasControlInside,
        ...restProps,
        style: mergedStyle,
        type: "drag"
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Dragger.displayName = 'Dragger';
}
const __TURBOPACK__default__export__ = Dragger;
}),
"[project]/apps/web/node_modules/antd/es/upload/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Dragger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/Dragger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/Upload.js [app-client] (ecmascript)");
"use client";
;
;
const Upload = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Upload.Dragger = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Dragger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Upload.LIST_IGNORE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$Upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_IGNORE"];
const __TURBOPACK__default__export__ = Upload;
}),
"[project]/apps/web/node_modules/antd/es/upload/index.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/alert/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genActionStyle",
    ()=>genActionStyle,
    "genBaseStyle",
    ()=>genBaseStyle,
    "genTypeStyle",
    ()=>genTypeStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
const genAlertTypeStyle = (bgColor, iconColor, alertCls)=>({
        background: bgColor,
        [`${alertCls}-icon`]: {
            color: iconColor
        }
    });
const genBaseStyle = (token)=>{
    const { componentCls, motionDurationSlow: duration, marginXS, marginSM, fontSize, fontSizeLG, lineHeight, motionEaseInOutCirc, borderRadius, withDescriptionIconSize, colorText, colorTextHeading, withDescriptionPadding, defaultPadding, lineWidth, lineType, colorSuccessBorder, colorWarningBorder, colorErrorBorder, colorInfoBorder } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: defaultPadding,
            wordWrap: 'break-word',
            borderRadius,
            borderWidth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth),
            borderStyle: lineType,
            [`&${componentCls}-success`]: {
                borderColor: colorSuccessBorder
            },
            [`&${componentCls}-info`]: {
                borderColor: colorInfoBorder
            },
            [`&${componentCls}-warning`]: {
                borderColor: colorWarningBorder
            },
            [`&${componentCls}-error`]: {
                borderColor: colorErrorBorder
            },
            [`&${componentCls}-filled`]: {
                borderColor: 'transparent'
            },
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            },
            [`${componentCls}-section`]: {
                flex: 1,
                minWidth: 0
            },
            [`${componentCls}-icon`]: {
                marginInlineEnd: marginXS,
                lineHeight: 0
            },
            '&-description': {
                display: 'none',
                fontSize,
                lineHeight
            },
            '&-title': {
                color: colorTextHeading
            },
            [`&${componentCls}-motion-leave`]: {
                overflow: 'hidden',
                opacity: 1,
                transition: [
                    `max-height`,
                    `opacity`,
                    `padding-top`,
                    `padding-bottom`,
                    `margin-bottom`
                ].map((prop)=>`${prop} ${duration} ${motionEaseInOutCirc}`).join(', ')
            },
            [`&${componentCls}-motion-leave-active`]: {
                maxHeight: 0,
                marginBottom: '0 !important',
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0
            },
            [`&${componentCls}-with-description`]: {
                alignItems: 'flex-start',
                padding: withDescriptionPadding,
                [`${componentCls}-icon`]: {
                    marginInlineEnd: marginSM,
                    fontSize: withDescriptionIconSize,
                    lineHeight: 0
                },
                [`${componentCls}-title`]: {
                    display: 'block',
                    marginBottom: marginXS,
                    color: colorTextHeading,
                    fontSize: fontSizeLG
                },
                [`${componentCls}-description`]: {
                    display: 'block',
                    color: colorText
                }
            },
            [`&${componentCls}-banner`]: {
                marginBottom: 0,
                border: '0 !important',
                borderRadius: 0
            }
        }
    };
};
const genTypeStyle = (token)=>{
    const { componentCls, colorSuccess, colorSuccessBg, colorWarning, colorWarningBg, colorError, colorErrorBg, colorInfo, colorInfoBg } = token;
    return {
        [componentCls]: {
            '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccess, componentCls),
            '&-info': genAlertTypeStyle(colorInfoBg, colorInfo, componentCls),
            '&-warning': genAlertTypeStyle(colorWarningBg, colorWarning, componentCls),
            '&-error': {
                ...genAlertTypeStyle(colorErrorBg, colorError, componentCls),
                [`${componentCls}-description > pre`]: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    };
};
const genActionStyle = (token)=>{
    const { componentCls, iconCls, motionDurationMid, marginXS, fontSizeIcon, colorIcon, colorIconHover } = token;
    return {
        [componentCls]: {
            [`${componentCls}-actions`]: {
                marginInlineStart: marginXS
            },
            [`${componentCls}-close-icon`]: {
                marginInlineStart: marginXS,
                padding: 0,
                overflow: 'hidden',
                fontSize: fontSizeIcon,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(fontSizeIcon),
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                [`${iconCls}-close`]: {
                    color: colorIcon,
                    transition: `color ${motionDurationMid}`,
                    '&:hover': {
                        color: colorIconHover
                    }
                }
            },
            '&-close-text': {
                color: colorIcon,
                transition: `color ${motionDurationMid}`,
                '&:hover': {
                    color: colorIconHover
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const paddingHorizontal = 12; // Fixed value here.
    return {
        borderRadius: token.borderRadiusLG,
        withDescriptionIconSize: token.fontSizeHeading3,
        defaultPadding: `${token.paddingContentVerticalSM}px ${paddingHorizontal}px`,
        withDescriptionPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Alert', (token)=>[
        genBaseStyle(token),
        genTypeStyle(token),
        genActionStyle(token)
    ], prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/alert/Alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript) <export default as pickAttrs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/style/index.js [app-client] (ecmascript)");
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
const IconNode = (props)=>{
    const { icon, type, className, style, successIcon, infoIcon, warningIcon, errorIcon } = props;
    const iconMapFilled = {
        success: successIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        info: infoIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        error: errorIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        warning: warningIcon ?? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: className,
        style: style
    }, icon ?? iconMapFilled[type]);
};
const CloseIconNode = (props)=>{
    const { isClosable, prefixCls, closeIcon, handleClose, ariaProps, className, style } = props;
    const mergedCloseIcon = closeIcon === true || closeIcon === undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : closeIcon;
    return isClosable ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
        type: "button",
        onClick: handleClose,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-close-icon`, className),
        tabIndex: 0,
        style: style,
        ...ariaProps
    }, mergedCloseIcon) : null;
};
const Alert = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { description, prefixCls: customizePrefixCls, message, title, banner, className, rootClassName, style, onMouseEnter, onMouseLeave, onClick, afterClose, showIcon, closable, closeText, closeIcon, action, id, styles, classNames, ...otherProps } = props;
    const mergedTitle = title ?? message;
    const [closed, setClosed] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Alert');
        [
            [
                'closeText',
                'closable.closeIcon'
            ],
            [
                'message',
                'title'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const internalRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Alert.useImperativeHandle": ()=>({
                nativeElement: internalRef.current
            })
    }["Alert.useImperativeHandle"]);
    const { getPrefixCls, direction, variant: contextVariant, closable: contextClosable, closeIcon: contextCloseIcon, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, successIcon, infoIcon, warningIcon, errorIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('alert');
    const prefixCls = getPrefixCls('alert', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { onClose: closableOnClose, afterClose: closableAfterClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable) ? closable : {};
    const handleClose = (e)=>{
        setClosed(true);
        (closableOnClose ?? props.onClose)?.(e);
    };
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Alert.useMemo[type]": ()=>{
            if (props.type !== undefined) {
                return props.type;
            }
            // banner mode defaults to 'warning'
            return banner ? 'warning' : 'info';
        }
    }["Alert.useMemo[type]"], [
        props.type,
        banner
    ]);
    const mergedVariant = props.variant ?? contextVariant ?? 'outlined';
    // closeable when closeText or closeIcon is assigned
    const isClosable = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Alert.useMemo[isClosable]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable)) {
                return true;
            }
            if (closeText) {
                return true;
            }
            if (typeof closable === 'boolean') {
                return closable;
            }
            // should be true when closeIcon is 0 or ''
            if (closeIcon !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(closeIcon)) {
                return true;
            }
            return !!contextClosable;
        }
    }["Alert.useMemo[isClosable]"], [
        closeText,
        closeIcon,
        closable,
        contextClosable
    ]);
    // banner mode defaults to Icon
    const isShowIcon = banner && showIcon === undefined ? true : showIcon;
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        prefixCls,
        variant: mergedVariant,
        type,
        showIcon: isShowIcon,
        closable: isClosable
    };
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
        props: mergedProps
    });
    const alertCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${mergedVariant}`, {
        [`${prefixCls}-with-description`]: !!description,
        [`${prefixCls}-no-icon`]: !isShowIcon,
        [`${prefixCls}-banner`]: !!banner,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, contextClassName, className, rootClassName, mergedClassNames.root, cssVarCls, hashId);
    const restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(otherProps, {
        aria: true,
        data: true
    });
    const mergedCloseIcon = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Alert.useMemo[mergedCloseIcon]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable) && closable.closeIcon) {
                return closable.closeIcon;
            }
            if (closeText) {
                return closeText;
            }
            if (closeIcon !== undefined) {
                return closeIcon;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(contextClosable) && contextClosable.closeIcon) {
                return contextClosable.closeIcon;
            }
            return contextCloseIcon;
        }
    }["Alert.useMemo[mergedCloseIcon]"], [
        closeIcon,
        closable,
        contextClosable,
        closeText,
        contextCloseIcon
    ]);
    const mergedAriaProps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Alert.useMemo[mergedAriaProps]": ()=>{
            const merged = closable ?? contextClosable;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(merged)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(merged, {
                    data: true,
                    aria: true
                });
            }
            return {};
        }
    }["Alert.useMemo[mergedAriaProps]"], [
        closable,
        contextClosable
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: !closed,
        motionName: `${prefixCls}-motion`,
        motionAppear: false,
        motionEnter: false,
        onLeaveStart: (node)=>({
                maxHeight: node.offsetHeight
            }),
        onLeaveEnd: closableAfterClose ?? afterClose
    }, ({ className: motionClassName, style: motionStyle }, setRef)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            id: id,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(internalRef, setRef),
            "data-show": !closed,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(alertCls, motionClassName),
            style: {
                ...mergedStyles.root,
                ...motionStyle
            },
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
            role: "alert",
            ...restProps
        }, isShowIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](IconNode, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-icon`, mergedClassNames.icon),
            style: mergedStyles.icon,
            description: description,
            icon: props.icon,
            prefixCls: prefixCls,
            type: type,
            successIcon: successIcon,
            infoIcon: infoIcon,
            warningIcon: warningIcon,
            errorIcon: errorIcon
        }) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-section`, mergedClassNames.section),
            style: mergedStyles.section
        }, mergedTitle ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-title`, mergedClassNames.title),
            style: mergedStyles.title
        }, mergedTitle) : null, description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-description`, mergedClassNames.description),
            style: mergedStyles.description
        }, description) : null), action ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-actions`, mergedClassNames.actions),
            style: mergedStyles.actions
        }, action) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CloseIconNode, {
            className: mergedClassNames.close,
            style: mergedStyles.close,
            isClosable: isClosable,
            prefixCls: prefixCls,
            closeIcon: mergedCloseIcon,
            handleClose: handleClose,
            ariaProps: mergedAriaProps
        })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Alert.displayName = 'Alert';
}
const __TURBOPACK__default__export__ = Alert;
}),
"[project]/apps/web/node_modules/antd/es/alert/ErrorBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$callSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/callSuper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/Alert.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
let ErrorBoundary = /*#__PURE__*/ function(_React$PureComponent) {
    function ErrorBoundary() {
        var _this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, ErrorBoundary);
        _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$callSuper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, ErrorBoundary, arguments);
        _this.state = {
            error: undefined,
            info: {}
        };
        return _this;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ErrorBoundary, _React$PureComponent);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, info) {
                this.setState({
                    error,
                    info
                });
            }
        },
        {
            key: "render",
            value: function render() {
                const { message, title, description, id, children } = this.props;
                const { error, info } = this.state;
                const mergedTitle = title ?? message;
                const componentStack = info?.componentStack || null;
                const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(mergedTitle) ? mergedTitle : error?.toString();
                const errorDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(description) ? description : componentStack;
                if (error) {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: id,
                        type: "error",
                        title: errorMessage,
                        description: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("pre", {
                            style: {
                                fontSize: '0.9em',
                                overflowX: 'auto'
                            }
                        }, errorDescription)
                    });
                }
                return children;
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"]);
const __TURBOPACK__default__export__ = ErrorBoundary;
}),
"[project]/apps/web/node_modules/antd/es/alert/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$ErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/ErrorBoundary.js [app-client] (ecmascript)");
"use client";
;
;
const Alert = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Alert.ErrorBoundary = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$ErrorBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Alert;
}),
"[project]/apps/web/node_modules/antd/es/alert/index.js [app-client] (ecmascript) <export default as Alert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/image/hooks/useMergedPreviewConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergedMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
;
;
;
;
const useMergedPreviewConfig = (previewConfig, contextPreviewConfig, prefixCls, mergedRootClassName, getContextPopupContainer, icons, defaultCover)=>{
    const [zIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('ImagePreview', previewConfig?.zIndex);
    const [mergedPreviewMask, blurClassName, mergedMaskClosable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedMask"])(previewConfig?.mask, contextPreviewConfig?.mask, `${prefixCls}-preview`);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useMergedPreviewConfig.useMemo": ()=>{
            if (!previewConfig) {
                return previewConfig;
            }
            const { cover, getContainer, closeIcon, rootClassName: previewRootClassName } = previewConfig;
            const { closeIcon: contextCloseIcon } = contextPreviewConfig ?? {};
            return {
                motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(`${prefixCls}-preview`, 'fade'),
                ...previewConfig,
                ...defaultCover ? {
                    cover: cover ?? defaultCover
                } : {},
                icons,
                getContainer: getContainer ?? getContextPopupContainer,
                zIndex,
                closeIcon: closeIcon ?? contextCloseIcon,
                rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedRootClassName, previewRootClassName),
                mask: mergedPreviewMask,
                maskClosable: mergedMaskClosable,
                blurClassName: blurClassName.mask
            };
        }
    }["useMergedPreviewConfig.useMemo"], [
        previewConfig,
        contextPreviewConfig,
        prefixCls,
        mergedRootClassName,
        getContextPopupContainer,
        defaultCover,
        icons,
        zIndex,
        mergedPreviewMask,
        mergedMaskClosable,
        blurClassName
    ]);
};
const __TURBOPACK__default__export__ = useMergedPreviewConfig;
}),
"[project]/apps/web/node_modules/antd/es/image/hooks/usePlaceholderConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePlaceholderConfig,
    "isPlaceholderConfig",
    ()=>isPlaceholderConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
function isPlaceholderConfig(placeholder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(placeholder) && !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(placeholder);
}
function usePlaceholderConfig(placeholder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePlaceholderConfig.useMemo": ()=>{
            if (!placeholder || !isPlaceholderConfig(placeholder)) {
                return {};
            }
            if (typeof placeholder.progress === 'boolean') {
                return {
                    progressConfig: placeholder.progress ? {} : undefined
                };
            }
            return {
                progressConfig: placeholder.progress
            };
        }
    }["usePlaceholderConfig.useMemo"], [
        placeholder
    ]);
}
}),
"[project]/apps/web/node_modules/antd/es/image/hooks/usePreviewConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePreviewConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
;
;
function normalizeMask(mask) {
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(mask)) {
        return [
            mask,
            undefined
        ];
    }
    if (typeof mask === 'boolean' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(mask)) {
        return [
            undefined,
            mask
        ];
    }
    return [
        undefined,
        undefined
    ];
}
function usePreviewConfig(preview) {
    // Get origin preview config
    const rawPreviewConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePreviewConfig.useMemo[rawPreviewConfig]": ()=>{
            if (typeof preview === 'boolean') {
                return preview ? {} : null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(preview) ? preview : {};
        }
    }["usePreviewConfig.useMemo[rawPreviewConfig]"], [
        preview
    ]);
    const splittedPreviewConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePreviewConfig.useMemo[splittedPreviewConfig]": ()=>{
            if (!rawPreviewConfig) {
                return [
                    rawPreviewConfig,
                    '',
                    ''
                ];
            }
            const { open, onOpenChange, cover, actionsRender, visible, onVisibleChange, rootClassName, maskClassName, mask, forceRender: _forceRender, destroyOnClose: _destroyOnClose, toolbarRender, ...restPreviewConfig } = rawPreviewConfig;
            let onInternalOpenChange;
            if (onOpenChange) {
                onInternalOpenChange = onOpenChange;
            } else if (onVisibleChange) {
                onInternalOpenChange = ({
                    "usePreviewConfig.useMemo[splittedPreviewConfig]": (nextOpen, info)=>{
                        const { current } = info || {};
                        if (current !== undefined) {
                            onVisibleChange(nextOpen, !nextOpen, current);
                        } else {
                            onVisibleChange(nextOpen, !nextOpen);
                        }
                    }
                })["usePreviewConfig.useMemo[splittedPreviewConfig]"];
            }
            const [coverElement, maskConfig] = normalizeMask(mask);
            return [
                {
                    ...restPreviewConfig,
                    open: open ?? visible,
                    onOpenChange: onInternalOpenChange,
                    cover: cover ?? coverElement,
                    mask: maskConfig,
                    actionsRender: actionsRender ?? toolbarRender
                },
                rootClassName,
                maskClassName
            ];
        }
    }["usePreviewConfig.useMemo[splittedPreviewConfig]"], [
        rawPreviewConfig
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Image');
        if (rawPreviewConfig) {
            [
                [
                    'visible',
                    'open'
                ],
                [
                    'onVisibleChange',
                    'onOpenChange'
                ],
                [
                    'maskClassName',
                    'classNames.cover'
                ],
                [
                    'rootClassName',
                    'classNames.root'
                ],
                [
                    'toolbarRender',
                    'actionsRender'
                ]
            ].forEach(([deprecatedName, newName])=>{
                warning.deprecated(!(deprecatedName in rawPreviewConfig), deprecatedName, newName);
            });
            ("TURBOPACK compile-time truthy", 1) ? warning(!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(rawPreviewConfig.mask), 'deprecated', '`mask` used as ReactNode is deprecated. Please use `cover` instead.') : "TURBOPACK unreachable";
            ("TURBOPACK compile-time truthy", 1) ? warning(!('forceRender' in rawPreviewConfig), 'breaking', '`forceRender` is no longer supported.') : "TURBOPACK unreachable";
            ("TURBOPACK compile-time truthy", 1) ? warning(!('destroyOnClose' in rawPreviewConfig), 'breaking', '`destroyOnClose` is no longer supported.') : "TURBOPACK unreachable";
        }
    }
    return splittedPreviewConfig;
}
}),
"[project]/apps/web/node_modules/antd/es/image/style/progressAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inkFlow1",
    ()=>inkFlow1,
    "inkFlow2",
    ()=>inkFlow2,
    "inkFlow3",
    ()=>inkFlow3,
    "progressActive",
    ()=>progressActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
;
const progressActive = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antImageProgressActive', {
    '0%': {
        backgroundPosition: '200% 0'
    },
    '100%': {
        backgroundPosition: '-200% 0'
    }
});
// Create ink flow keyframes with custom transform and opacity values
const createInkFlow = (name, midTransform, midOpacity, startTransform = 'translate(0%, 0%)', startOpacity = 0.8)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"](name, {
        '0%': {
            transform: startTransform,
            opacity: startOpacity
        },
        '50%': {
            transform: midTransform,
            opacity: midOpacity
        },
        '100%': {
            transform: startTransform,
            opacity: startOpacity
        }
    });
const inkFlow1 = createInkFlow('antImageInkFlow1', 'translate(15%, -20%) scale(1.25)', 0.5);
const inkFlow2 = createInkFlow('antImageInkFlow2', 'translate(-18%, 15%) scale(0.85)', 0.9, 'translate(0%, 0%) scale(1.1)', 0.7);
const inkFlow3 = createInkFlow('antImageInkFlow3', 'translate(8%, 10%) scale(1.15)', 0.8, 'translate(0%, 0%) scale(0.85)', 0.65);
}),
"[project]/apps/web/node_modules/antd/es/image/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genBoxStyle",
    ()=>genBoxStyle,
    "genImageCoverStyle",
    ()=>genImageCoverStyle,
    "genImagePreviewStyle",
    ()=>genImagePreviewStyle,
    "genImageProgressStyle",
    ()=>genImageProgressStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/style/progressAnimation.js [app-client] (ecmascript)");
;
;
;
;
;
const genBoxStyle = (position)=>({
        position: position || 'absolute',
        inset: 0
    });
const genImageCoverStyle = (token)=>{
    const { componentCls, motionDurationSlow, colorTextLightSolid } = token;
    return {
        [componentCls]: {
            [`${componentCls}-cover`]: {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colorTextLightSolid,
                background: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('#000').setA(0.3).toRgbString(),
                cursor: 'pointer',
                opacity: 0,
                transition: `opacity ${motionDurationSlow}`
            },
            '&:hover, &:focus-visible': {
                [`${componentCls}-cover`]: {
                    opacity: 1
                }
            },
            [`${componentCls}-cover-top`]: {
                inset: '0 0 auto 0',
                justifyContent: 'center'
            },
            [`${componentCls}-cover-bottom`]: {
                inset: 'auto 0 0 0',
                justifyContent: 'center'
            }
        }
    };
};
const genImageProgressStyle = (token)=>{
    const { componentCls, motionDurationMid, motionEaseInOut, progressAnimationDuration } = token;
    // Common ink layer base styles
    const inkBaseStyle = {
        position: 'absolute',
        width: '150%',
        height: '150%',
        left: '-25%',
        top: '-25%',
        animationTimingFunction: motionEaseInOut,
        animationIterationCount: 'infinite',
        pointerEvents: 'none',
        willChange: 'transform, opacity'
    };
    return {
        // Progress root (wrapper)
        [`${componentCls}-progress-wrapper`]: {
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            borderRadius: 'inherit',
            backgroundColor: token.colorBgBase,
            backdropFilter: 'blur(8px)',
            // Ink group 1: Ink 1 (main) + Ink 2 (::before) + Ink 3 (::after)
            [`${componentCls}-progress-ink-1`]: {
                ...inkBaseStyle,
                // Ink 1 - Top left blue cloud
                background: `radial-gradient(ellipse 65% 55% at 25% 30%, rgba(100, 180, 255, 0.98) 0%, transparent 55%)`,
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkFlow1"],
                animationDuration: progressAnimationDuration,
                filter: 'blur(40px)',
                // Ink 2 - Center right lavender
                '&::before': {
                    content: '""',
                    ...inkBaseStyle,
                    background: `radial-gradient(ellipse 60% 65% at 75% 45%, rgba(180, 140, 255, 0.95) 0%, transparent 50%)`,
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkFlow2"],
                    animationDuration: `calc(${progressAnimationDuration} + 2s)`,
                    animationDelay: '-1s',
                    filter: 'blur(45px)'
                },
                // Ink 3 - Bottom center cyan
                '&::after': {
                    content: '""',
                    ...inkBaseStyle,
                    background: `radial-gradient(ellipse 55% 50% at 50% 70%, rgba(100, 220, 220, 0.9) 0%, transparent 45%)`,
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkFlow3"],
                    animationDuration: `calc(${progressAnimationDuration} + 0.5s)`,
                    animationDelay: '-2s',
                    filter: 'blur(38px)'
                }
            },
            // Ink group 2: Ink 4 (main) + Ink 5 (::before)
            [`${componentCls}-progress-ink-2`]: {
                ...inkBaseStyle,
                // Ink 4 - Scattered pink blossom
                background: `radial-gradient(ellipse 45% 40% at 60% 20%, rgba(255, 150, 200, 0.88) 0%, transparent 45%)`,
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkFlow3"],
                animationDuration: `calc(${progressAnimationDuration} + 1.5s)`,
                animationDelay: '-3s',
                filter: 'blur(42px)',
                // Ink 5 - Soft periwinkle accent
                '&::before': {
                    content: '""',
                    ...inkBaseStyle,
                    background: `radial-gradient(ellipse 50% 55% at 20% 75%, rgba(160, 190, 255, 0.88) 0%, transparent 50%)`,
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inkFlow1"],
                    animationDuration: `calc(${progressAnimationDuration} + 2.5s)`,
                    animationDelay: '-2.5s',
                    filter: 'blur(35px)'
                }
            },
            // Progress content
            [`${componentCls}-progress-content`]: {
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                paddingInline: token.paddingLG,
                textAlign: 'center',
                fontSize: token.fontSize,
                color: token.colorTextSecondary,
                zIndex: 1
            },
            // Progress rail (background container)
            [`${componentCls}-progress-rail`]: {
                width: '100%',
                height: 6,
                marginTop: token.marginSM,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: token.borderRadiusXS,
                overflow: 'hidden',
                backdropFilter: 'blur(4px)',
                // Track (filled portion) using ::before
                '&::before': {
                    content: '""',
                    display: 'block',
                    height: '100%',
                    width: 'var(--progress-percent, 0%)',
                    background: 'linear-gradient(90deg, rgba(120, 170, 255, 0.85) 0%, rgba(160, 150, 245, 0.85) 40%, rgba(130, 200, 220, 0.85) 60%, rgba(120, 170, 255, 0.85) 100%)',
                    backgroundSize: '200% 100%',
                    borderRadius: token.borderRadiusXS / 2,
                    transition: `width ${motionDurationMid} ease`,
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$progressAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressActive"],
                    animationDuration: progressAnimationDuration,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite'
                }
            },
            // Progress indicator (percent text)
            [`${componentCls}-progress-indicator`]: {
                marginTop: token.marginXS
            }
        }
    };
};
const genImagePreviewStyle = (token)=>{
    const { motionEaseOut, previewCls, motionDurationSlow, componentCls, colorBgMask, marginXL, marginSM, margin, colorTextLightSolid, paddingSM, paddingLG, previewOperationHoverColor, previewOperationColorDisabled, previewOperationSize, zIndexPopup } = token;
    const operationBg = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](colorBgMask).setA(0.1);
    const operationBgHover = operationBg.clone().setA(0.2);
    const singleBtn = {
        position: 'absolute',
        color: colorTextLightSolid,
        backgroundColor: operationBg.toRgbString(),
        borderRadius: '50%',
        padding: paddingSM,
        outline: 0,
        border: 0,
        cursor: 'pointer',
        transition: `all ${motionDurationSlow}`,
        display: 'flex',
        fontSize: previewOperationSize,
        '&:hover': {
            backgroundColor: operationBgHover.toRgbString()
        },
        '&:active': {
            backgroundColor: operationBg.toRgbString()
        },
        '&:focus-visible': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token)
    };
    return {
        [`${componentCls}-preview`]: {
            textAlign: 'center',
            inset: 0,
            position: 'fixed',
            userSelect: 'none',
            zIndex: zIndexPopup,
            // ================= Mask =================
            [`${previewCls}-mask`]: {
                inset: 0,
                position: 'absolute',
                background: colorBgMask,
                backdropFilter: 'blur(0px)',
                transition: `backdrop-filter ${motionDurationSlow}`,
                [`&${componentCls}-preview-mask-blur`]: {
                    backdropFilter: 'blur(4px)'
                },
                [`&${componentCls}-preview-mask-hidden`]: {
                    display: 'none'
                }
            },
            // ================= Body =================
            [`${previewCls}-body`]: {
                ...genBoxStyle(),
                'pointer-events': 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '> *': {
                    pointerEvents: 'auto'
                }
            },
            // Body > Image
            [`${previewCls}-img`]: {
                maxWidth: '100%',
                maxHeight: '70%',
                verticalAlign: 'middle',
                transform: 'scale3d(1, 1, 1)',
                transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`
            },
            [`&-movable ${previewCls}-img`]: {
                cursor: 'grab'
            },
            [`&-moving ${previewCls}-img`]: {
                cursor: 'grabbing'
            },
            // =============== CloseBtn ===============
            [`${previewCls}-close`]: {
                // Shared style
                ...singleBtn,
                top: marginSM,
                insetInlineEnd: marginSM
            },
            // ================ Switch ================
            [`${previewCls}-switch`]: {
                ...singleBtn,
                top: '50%',
                transform: `translateY(-50%)`,
                '&-disabled': {
                    '&, &:hover, &:active': {
                        color: previewOperationColorDisabled,
                        background: 'transparent',
                        cursor: 'not-allowed'
                    }
                },
                '&-prev': {
                    insetInlineStart: marginSM
                },
                '&-next': {
                    insetInlineEnd: marginSM
                }
            },
            // ================ Footer ================
            [`${previewCls}-footer`]: {
                position: 'absolute',
                bottom: marginXL,
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: token.previewOperationColor,
                transform: 'translateX(-50%)',
                gap: margin
            },
            // =============== Actions ================
            [`${previewCls}-actions`]: {
                display: 'flex',
                gap: paddingSM,
                padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingLG)}`,
                backgroundColor: operationBg.toRgbString(),
                borderRadius: 100,
                fontSize: previewOperationSize,
                '&-action': {
                    color: 'inherit',
                    background: 'transparent',
                    border: 0,
                    font: 'inherit',
                    padding: paddingSM,
                    cursor: 'pointer',
                    transition: `all ${motionDurationSlow}`,
                    display: 'flex',
                    [`&:not(${previewCls}-actions-action-disabled):hover`]: {
                        color: previewOperationHoverColor
                    },
                    '&:focus-visible': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
                    '&-disabled': {
                        color: previewOperationColorDisabled,
                        cursor: 'not-allowed'
                    }
                }
            }
        }
    };
};
const genImageStyle = (token)=>{
    const { componentCls } = token;
    return {
        // ============================== image ==============================
        [componentCls]: {
            position: 'relative',
            display: 'inline-block',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            [`${componentCls}-img`]: {
                width: '100%',
                height: 'auto',
                verticalAlign: 'middle'
            },
            [`${componentCls}-img-placeholder`]: {
                backgroundColor: token.colorBgContainerDisabled,
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '30%'
            },
            [`${componentCls}-placeholder`]: {
                ...genBoxStyle()
            }
        }
    };
};
const genPreviewMotion = (token)=>{
    const { previewCls, motionDurationSlow } = token;
    return {
        [previewCls]: {
            '&-fade': {
                transition: `opacity ${motionDurationSlow}`,
                '&-enter, &-appear': {
                    opacity: 0,
                    [`${previewCls}-body`]: {
                        transform: 'scale(0)'
                    },
                    '&-active': {
                        opacity: 1,
                        [`${previewCls}-body`]: {
                            transform: 'scale(1)',
                            transition: `transform ${motionDurationSlow}`
                        }
                    }
                },
                '&-leave': {
                    opacity: 1,
                    '&-active': {
                        opacity: 0,
                        [`${previewCls}-body`]: {
                            transform: 'scale(0)',
                            transition: `transform ${motionDurationSlow}`
                        }
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + 80,
        previewOperationColor: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](token.colorTextLightSolid).setA(0.65).toRgbString(),
        previewOperationHoverColor: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](token.colorTextLightSolid).setA(0.85).toRgbString(),
        previewOperationColorDisabled: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](token.colorTextLightSolid).setA(0.25).toRgbString(),
        previewOperationSize: token.fontSizeIcon * 1.5,
        // FIXME: fontSizeIconLG
        progressAnimationDuration: '3s'
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Image', (token)=>{
    const previewCls = `${token.componentCls}-preview`;
    const imageToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        previewCls,
        imagePreviewSwitchSize: token.controlHeightLG
    });
    return [
        genImageStyle(imageToken),
        genImageCoverStyle(imageToken),
        genImageProgressStyle(imageToken),
        genImagePreviewStyle(imageToken),
        genPreviewMotion(imageToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/image/PreviewGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "icons",
    ()=>icons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RotateLeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateRightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RotateRightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SwapOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SwapOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomInOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ZoomInOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomOutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ZoomOutOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/image/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$useMergedPreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/hooks/useMergedPreviewConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/hooks/usePreviewConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/style/index.js [app-client] (ecmascript)");
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
const icons = {
    rotateLeft: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    rotateRight: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateRightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    zoomIn: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomInOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    zoomOut: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomOutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    close: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    left: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    right: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    flipX: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SwapOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    flipY: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SwapOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        rotate: 90
    })
};
const InternalPreviewGroup = ({ previewPrefixCls: customizePrefixCls, preview, classNames, styles, ...otherProps })=>{
    // =============================== MISC ===============================
    // Context
    const { getPrefixCls, getPopupContainer: getContextPopupContainer, direction, preview: contextPreview, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('image');
    const prefixCls = getPrefixCls('image', customizePrefixCls);
    const previewPrefixCls = `${prefixCls}-preview`;
    // ============================== Style ===============================
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const mergedRootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, rootCls);
    // ============================= Preview ==============================
    const [previewConfig, previewRootClassName, previewMaskClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview);
    const [contextPreviewConfig, contextPreviewRootClassName, contextPreviewMaskClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextPreview);
    // ============================ Semantics =============================
    const memoizedIcons = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalPreviewGroup.useMemo[memoizedIcons]": ()=>({
                ...icons,
                left: direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
                right: direction === 'rtl' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
            })
    }["InternalPreviewGroup.useMemo[memoizedIcons]"], [
        direction
    ]);
    const mergedPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$useMergedPreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(// Preview config
    previewConfig, contextPreviewConfig, // MISC
    prefixCls, mergedRootClassName, getContextPopupContainer, icons);
    const { mask: mergedMask, blurClassName } = mergedPreview ?? {};
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...otherProps,
        classNames,
        styles
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames,
        {
            cover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextPreviewMaskClassName, previewMaskClassName),
            popup: {
                root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextPreviewRootClassName, previewRootClassName),
                mask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                    [`${prefixCls}-preview-mask-hidden`]: !mergedMask
                }, blurClassName)
            }
        }
    ], [
        contextStyles,
        styles
    ], {
        props: mergedProps
    }, {
        popup: {
            _default: 'root'
        }
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].PreviewGroup, {
        preview: mergedPreview,
        previewPrefixCls: previewPrefixCls,
        icons: memoizedIcons,
        ...otherProps,
        classNames: mergedClassNames,
        styles: mergedStyles
    });
};
const __TURBOPACK__default__export__ = InternalPreviewGroup;
}),
"[project]/apps/web/node_modules/antd/es/image/Progress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
"use client";
;
;
;
// Visually hidden styles for screen readers
const VISUALLY_HIDDEN_STYLE = {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
};
const Progress = (props)=>{
    const { prefixCls, percent, render: progressRender, classNames: progressClassNames, styles: progressStyles, rootClassName, rootStyle, width, height } = props;
    // Check if percent is a valid finite number
    const hasPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(percent) && Number.isFinite(percent);
    // Calculate percent value (clamped to 0-100 for progress bar width)
    const percentValue = hasPercent ? Math.max(0, Math.min(100, Math.round(percent))) : 0;
    // ARIA attributes for accessibility
    const ariaProps = hasPercent ? {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': percentValue,
        'aria-label': `${percentValue}%`
    } : {
        'aria-busy': true
    };
    // Render progress bar (rail with ::before pseudo for track)
    const progressBar = hasPercent ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-progress-rail`, progressClassNames?.rail),
        style: {
            ...progressStyles?.rail,
            '--progress-percent': `${percentValue}%`
        }
    }) : null;
    // Render progress content
    const progressContent = progressRender ? progressRender(progressBar, percentValue) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, progressBar, hasPercent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-progress-indicator`, progressClassNames?.indicator),
        style: progressStyles?.indicator
    }, `${percentValue}%`));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-progress-wrapper`, progressClassNames?.root, rootClassName),
        style: {
            width,
            height,
            ...rootStyle,
            ...progressStyles?.root
        },
        ...ariaProps
    }, !hasPercent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        role: "status",
        "aria-live": "polite",
        style: VISUALLY_HIDDEN_STYLE
    }, "Loading"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-progress-ink-1`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-progress-ink-2`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-progress-content`, progressClassNames?.content),
        style: progressStyles?.content
    }, progressContent));
};
if ("TURBOPACK compile-time truthy", 1) {
    Progress.displayName = 'ImageProgress';
}
const __TURBOPACK__default__export__ = Progress;
}),
"[project]/apps/web/node_modules/antd/es/image/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/image/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$useMergedPreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/hooks/useMergedPreviewConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePlaceholderConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/hooks/usePlaceholderConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/hooks/usePreviewConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$PreviewGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/PreviewGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/Progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/style/index.js [app-client] (ecmascript)");
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
const Image = (props)=>{
    const { prefixCls: customizePrefixCls, preview, className, rootClassName, style, styles, classNames, wrapperStyle, fallback, placeholder, ...otherProps } = props;
    // =============================== MISC ===============================
    // Context
    const { getPrefixCls, getPopupContainer: getContextPopupContainer, className: contextClassName, style: contextStyle, preview: contextPreview, styles: contextStyles, classNames: contextClassNames, fallback: contextFallback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('image');
    const prefixCls = getPrefixCls('image', customizePrefixCls);
    // ============================= Warning ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Image');
        warning.deprecated(!wrapperStyle, 'wrapperStyle', 'styles.root');
    }
    // ============================== Styles ==============================
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const mergedRootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootClassName, hashId, cssVarCls, rootCls);
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, hashId, contextClassName);
    // ============================= Preview ==============================
    const [previewConfig, previewRootClassName, previewMaskClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preview);
    const [contextPreviewConfig, contextPreviewRootClassName, contextPreviewMaskClassName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextPreview);
    const mergedPreviewConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$useMergedPreviewConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(// Preview config
    previewConfig, contextPreviewConfig, // MISC
    prefixCls, mergedRootClassName, getContextPopupContainer, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$PreviewGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["icons"], true);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        preview: mergedPreviewConfig
    };
    // ============================= Semantic =============================
    const mergedLegacyClassNames = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Image.useMemo[mergedLegacyClassNames]": ()=>({
                cover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextPreviewMaskClassName, previewMaskClassName),
                popup: {
                    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextPreviewRootClassName, previewRootClassName)
                }
            })
    }["Image.useMemo[mergedLegacyClassNames]"], [
        previewRootClassName,
        previewMaskClassName,
        contextPreviewRootClassName,
        contextPreviewMaskClassName
    ]);
    const { mask: mergedMask, blurClassName } = mergedPreviewConfig ?? {};
    const mergedPopupClassNames = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Image.useMemo[mergedPopupClassNames]": ()=>({
                mask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                    [`${prefixCls}-preview-mask-hidden`]: !mergedMask
                }, blurClassName)
            })
    }["Image.useMemo[mergedPopupClassNames]"], [
        mergedMask,
        prefixCls,
        blurClassName
    ]);
    const internalClassNames = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Image.useMemo[internalClassNames]": ()=>[
                contextClassNames,
                classNames,
                mergedLegacyClassNames,
                {
                    popup: mergedPopupClassNames
                }
            ]
    }["Image.useMemo[internalClassNames]"], [
        contextClassNames,
        classNames,
        mergedLegacyClassNames,
        mergedPopupClassNames
    ]);
    const contextImageStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, 'image');
    const imageStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, 'image');
    const contextRootStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const rootStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])(internalClassNames, [
        contextStyles,
        {
            root: wrapperStyle
        },
        contextImageStyle,
        styles,
        imageStyle
    ], {
        props: mergedProps
    }, {
        popup: {
            _default: 'root'
        },
        placeholder: {}
    });
    const [, progressMergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([], [
        contextStyles,
        contextRootStyle,
        {
            root: wrapperStyle
        },
        styles,
        rootStyle
    ], {
        props: mergedProps
    }, {
        popup: {
            _default: 'root'
        },
        placeholder: {}
    });
    const { image: mergedImageStyle, ...restMergedStyles } = mergedStyles;
    const mergedFallback = fallback ?? contextFallback;
    // ============================= Progress ==============================
    const { progressConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePlaceholderConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placeholder);
    const showProgressOverlay = progressConfig !== undefined;
    const { percent, render: progressRender } = progressConfig || {};
    // Get progress classNames and styles
    const progressClassNames = mergedClassNames?.placeholder?.progress;
    const progressStyles = progressMergedStyles?.placeholder?.progress;
    // ============================== Render ==============================
    const { width, height, src, ...restOtherProps } = otherProps;
    // When placeholder is ReactNode (not progress config) and src is not provided,
    // render it as an overlay since rc-image would set status to 'error' when src is empty
    const placeholderNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$hooks$2f$usePlaceholderConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlaceholderConfig"])(placeholder) ? undefined : placeholder;
    const shouldRenderPlaceholderOverlay = placeholderNode && !src;
    // Memoize the placeholder render function to avoid creating new function on each render
    const mergedProgressRender = shouldRenderPlaceholderOverlay ? (_progress)=>placeholderNode : progressRender;
    // When progress is active, render only progress layer with dimensions
    if (showProgressOverlay || shouldRenderPlaceholderOverlay) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            percent: percent,
            render: mergedProgressRender,
            classNames: progressClassNames,
            styles: progressStyles,
            rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedRootClassName, mergedClassName),
            rootStyle: progressMergedStyles?.root,
            width: width,
            height: height
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: prefixCls,
        preview: mergedPreviewConfig || false,
        rootClassName: mergedRootClassName,
        className: mergedClassName,
        style: mergedImageStyle,
        fallback: mergedFallback,
        placeholder: placeholderNode,
        width: width,
        height: height,
        src: src,
        ...restOtherProps,
        classNames: mergedClassNames,
        styles: restMergedStyles
    });
};
Image.PreviewGroup = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$PreviewGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Image.displayName = 'Image';
}
const __TURBOPACK__default__export__ = Image;
}),
"[project]/apps/web/node_modules/antd/es/image/index.js [app-client] (ecmascript) <export default as Image>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/drawer/DrawerPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const DrawerPanel = (props)=>{
    const { prefixCls, ariaId, title, footer, extra, closable, loading, onClose, headerStyle, bodyStyle, footerStyle, children, classNames: drawerClassNames, styles: drawerStyles } = props;
    const drawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('drawer');
    const { classNames: contextClassNames, styles: contextStyles, closable: contextClosable } = drawerContext;
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        drawerClassNames
    ], [
        contextStyles,
        drawerStyles
    ], {
        props: {
            ...props,
            closable: closable ?? contextClosable
        }
    });
    const closablePlacement = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DrawerPanel.useMemo[closablePlacement]": ()=>{
            const merged = closable ?? contextClosable;
            if (merged === false) {
                return undefined;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(merged) && merged?.placement === 'end') {
                return 'end';
            }
            return 'start';
        }
    }["DrawerPanel.useMemo[closablePlacement]"], [
        closable,
        contextClosable
    ]);
    const customCloseIconRender = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "DrawerPanel.useCallback[customCloseIconRender]": (icon)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
                type: "button",
                onClick: onClose,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-close`, {
                    [`${prefixCls}-close-${closablePlacement}`]: closablePlacement === 'end'
                }, mergedClassNames.close),
                style: mergedStyles.close
            }, icon)
    }["DrawerPanel.useCallback[customCloseIconRender]"], [
        onClose,
        prefixCls,
        closablePlacement,
        mergedClassNames.close,
        mergedStyles.close
    ]);
    const [mergedClosable, mergedCloseIcon, closeBtnIsDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(drawerContext), {
        closable: true,
        closeIconRender: customCloseIconRender
    });
    const mergedCloseButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(mergedCloseIcon, {
        disabled: closeBtnIsDisabled
    });
    const renderHeader = ()=>{
        if (!title && !mergedClosable) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            style: {
                ...mergedStyles.header,
                ...headerStyle
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-header`, mergedClassNames.header, {
                [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra
            })
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: `${prefixCls}-header-title`
        }, closablePlacement === 'start' && mergedCloseButton, title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-title`, mergedClassNames.title),
            style: mergedStyles.title,
            id: ariaId
        }, title)), extra && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-extra`, mergedClassNames.extra),
            style: mergedStyles.extra
        }, extra), closablePlacement === 'end' && mergedCloseButton);
    };
    const renderFooter = ()=>{
        if (!footer) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-footer`, mergedClassNames.footer),
            style: {
                ...mergedStyles.footer,
                ...footerStyle
            }
        }, footer);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, renderHeader(), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-body`, mergedClassNames.body),
        style: {
            ...mergedStyles.body,
            ...bodyStyle
        }
    }, loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        active: true,
        title: false,
        paragraph: {
            rows: 5
        },
        className: `${prefixCls}-body-skeleton`
    }) : children), renderFooter());
};
const __TURBOPACK__default__export__ = DrawerPanel;
}),
"[project]/apps/web/node_modules/antd/es/drawer/style/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getMoveTranslate = (direction)=>{
    const value = '100%';
    return ({
        left: `translateX(-${value})`,
        right: `translateX(${value})`,
        top: `translateY(-${value})`,
        bottom: `translateY(${value})`
    })[direction];
};
const getEnterLeaveStyle = (startStyle, endStyle)=>({
        '&-enter, &-appear': {
            ...startStyle,
            '&-active': endStyle
        },
        '&-leave': {
            ...endStyle,
            '&-active': startStyle
        }
    });
const getFadeStyle = (from, duration)=>({
        '&-enter, &-appear, &-leave': {
            '&-start': {
                transition: 'none'
            },
            '&-active': {
                transition: `all ${duration}`
            }
        },
        ...getEnterLeaveStyle({
            opacity: from
        }, {
            opacity: 1
        })
    });
const getPanelMotionStyles = (direction, duration)=>[
        getFadeStyle(0.7, duration),
        getEnterLeaveStyle({
            transform: getMoveTranslate(direction)
        }, {
            transform: 'none'
        })
    ];
const genMotionStyle = (token)=>{
    const { componentCls, motionDurationSlow } = token;
    return {
        [componentCls]: {
            // ======================== Mask ========================
            [`${componentCls}-mask-motion`]: getFadeStyle(0, motionDurationSlow),
            // ======================= Panel ========================
            [`${componentCls}-panel-motion`]: [
                'left',
                'right',
                'top',
                'bottom'
            ].reduce((obj, direction)=>{
                return {
                    ...obj,
                    [`&-${direction}`]: getPanelMotionStyles(direction, motionDurationSlow)
                };
            }, {})
        }
    };
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/apps/web/node_modules/antd/es/drawer/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/style/motion.js [app-client] (ecmascript)");
;
;
;
;
// =============================== Base ===============================
const genDrawerStyle = (token)=>{
    const { borderRadiusSM, componentCls, zIndexPopup, colorBgMask, colorBgElevated, motionDurationSlow, motionDurationMid, paddingXS, padding, paddingLG, fontSizeLG, lineHeightLG, lineWidth, lineType, colorSplit, marginXS, colorIcon, colorIconHover, colorBgTextHover, colorBgTextActive, colorText, fontWeightStrong, footerPaddingBlock, footerPaddingInline, draggerSize, calc } = token;
    const wrapperCls = `${componentCls}-content-wrapper`;
    const draggerCls = `${componentCls}-resizable-dragger`;
    return {
        [componentCls]: {
            position: 'fixed',
            inset: 0,
            zIndex: zIndexPopup,
            pointerEvents: 'none',
            color: colorText,
            '&-pure': {
                position: 'relative',
                background: colorBgElevated,
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: 'auto',
                [`&${componentCls}-left`]: {
                    boxShadow: token.boxShadowDrawerLeft
                },
                [`&${componentCls}-right`]: {
                    boxShadow: token.boxShadowDrawerRight
                },
                [`&${componentCls}-top`]: {
                    boxShadow: token.boxShadowDrawerUp
                },
                [`&${componentCls}-bottom`]: {
                    boxShadow: token.boxShadowDrawerDown
                }
            },
            '&-inline': {
                position: 'absolute'
            },
            // ====================== Mask ======================
            [`${componentCls}-mask`]: {
                position: 'absolute',
                inset: 0,
                zIndex: zIndexPopup,
                background: colorBgMask,
                pointerEvents: 'auto',
                [`&${componentCls}-mask-blur`]: {
                    backdropFilter: 'blur(4px)'
                }
            },
            // ==================== Content =====================
            [wrapperCls]: {
                position: 'absolute',
                zIndex: zIndexPopup,
                maxWidth: '100vw',
                transition: `all ${motionDurationSlow}`,
                '&-hidden': {
                    display: 'none'
                }
            },
            // Placement
            [`&-left > ${wrapperCls}`]: {
                top: 0,
                bottom: 0,
                left: {
                    _skip_check_: true,
                    value: 0
                },
                boxShadow: token.boxShadowDrawerLeft
            },
            [`&-right > ${wrapperCls}`]: {
                top: 0,
                right: {
                    _skip_check_: true,
                    value: 0
                },
                bottom: 0,
                boxShadow: token.boxShadowDrawerRight
            },
            [`&-top > ${wrapperCls}`]: {
                top: 0,
                insetInline: 0,
                boxShadow: token.boxShadowDrawerUp
            },
            [`&-bottom > ${wrapperCls}`]: {
                bottom: 0,
                insetInline: 0,
                boxShadow: token.boxShadowDrawerDown
            },
            [`${componentCls}-section`]: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                background: colorBgElevated,
                pointerEvents: 'auto'
            },
            // Header
            [`${componentCls}-header`]: {
                display: 'flex',
                flex: 0,
                alignItems: 'center',
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingLG)}`,
                fontSize: fontSizeLG,
                lineHeight: lineHeightLG,
                borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorSplit}`,
                '&-title': {
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    minWidth: 0,
                    minHeight: 0
                }
            },
            [`${componentCls}-extra`]: {
                flex: 'none'
            },
            [`${componentCls}-close`]: {
                display: 'inline-flex',
                width: calc(fontSizeLG).add(paddingXS).equal(),
                height: calc(fontSizeLG).add(paddingXS).equal(),
                borderRadius: borderRadiusSM,
                justifyContent: 'center',
                alignItems: 'center',
                color: colorIcon,
                fontWeight: fontWeightStrong,
                fontSize: fontSizeLG,
                fontStyle: 'normal',
                lineHeight: 1,
                textAlign: 'center',
                textTransform: 'none',
                textDecoration: 'none',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                transition: `all ${motionDurationMid}`,
                textRendering: 'auto',
                [`&${componentCls}-close-end`]: {
                    marginInlineStart: marginXS
                },
                [`&:not(${componentCls}-close-end)`]: {
                    marginInlineEnd: marginXS
                },
                '&:disabled': {
                    pointerEvents: 'none'
                },
                '&:hover': {
                    color: colorIconHover,
                    backgroundColor: colorBgTextHover,
                    textDecoration: 'none'
                },
                '&:active': {
                    backgroundColor: colorBgTextActive
                },
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)
            },
            [`${componentCls}-title`]: {
                flex: 1,
                margin: 0,
                fontWeight: token.fontWeightStrong,
                fontSize: fontSizeLG,
                lineHeight: lineHeightLG
            },
            // Body
            [`${componentCls}-body`]: {
                flex: 1,
                minWidth: 0,
                minHeight: 0,
                padding: paddingLG,
                overflow: 'auto',
                [`${componentCls}-body-skeleton`]: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }
            },
            // Footer
            [`${componentCls}-footer`]: {
                flexShrink: 0,
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(footerPaddingBlock)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(footerPaddingInline)}`,
                borderTop: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorSplit}`
            },
            // ==================== Resizable ===================
            [draggerCls]: {
                position: 'absolute',
                zIndex: 1,
                backgroundColor: 'transparent',
                userSelect: 'none',
                pointerEvents: 'auto',
                '&:hover': {
                    backgroundColor: token.colorPrimary,
                    opacity: 0.2
                },
                '&-dragging': {
                    backgroundColor: token.colorPrimary,
                    opacity: 0.3
                }
            },
            [`${draggerCls}-left`]: {
                top: 0,
                bottom: 0,
                right: {
                    _skip_check_: true,
                    value: 0
                },
                width: draggerSize,
                cursor: 'col-resize'
            },
            [`${draggerCls}-right`]: {
                top: 0,
                bottom: 0,
                left: {
                    _skip_check_: true,
                    value: 0
                },
                width: draggerSize,
                cursor: 'col-resize'
            },
            [`${draggerCls}-top`]: {
                insetInline: 0,
                bottom: 0,
                height: draggerSize,
                cursor: 'row-resize'
            },
            [`${draggerCls}-bottom`]: {
                insetInline: 0,
                top: 0,
                height: draggerSize,
                cursor: 'row-resize'
            },
            // Wrapper dragging state - disable transitions for smooth dragging
            [`${wrapperCls}-dragging`]: {
                userSelect: 'none',
                transition: 'none',
                willChange: 'width, height',
                [`${componentCls}-content`]: {
                    pointerEvents: 'none'
                },
                [`${componentCls}-section`]: {
                    pointerEvents: 'none'
                }
            },
            // ====================== RTL =======================
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase,
        footerPaddingBlock: token.paddingXS,
        footerPaddingInline: token.padding,
        draggerSize: 4
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Drawer', (token)=>{
    const drawerToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {});
    return [
        genDrawerStyle(drawerToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(drawerToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/drawer/Drawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$drawer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/drawer/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useId$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useId.js [app-client] (ecmascript) <export default as useId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergedMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/watermark/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/DrawerPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$useFocusable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/useFocusable.js [app-client] (ecmascript)");
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
const _SizeTypes = [
    'default',
    'large'
];
const DEFAULT_PUSH_STATE = {
    distance: 180
};
const DEFAULT_SIZE = 378;
const MOTION_CONFIG = {
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
};
const Drawer = (props)=>{
    const { rootClassName, size, defaultSize = DEFAULT_SIZE, height, width, mask: drawerMask, push = DEFAULT_PUSH_STATE, open, afterOpenChange, onClose, prefixCls: customizePrefixCls, getContainer: customizeGetContainer, panelRef = null, style, className, resizable, 'aria-labelledby': ariaLabelledby, // Focus
    focusable, // Deprecated
    maskClosable, maskStyle, drawerStyle, contentWrapperStyle, destroyOnClose, destroyOnHidden, ...rest } = props;
    const { placement } = rest;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useId$3e$__["useId"])();
    const ariaId = rest.title ? id : undefined;
    const { getPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, mask: contextMask, focusable: contextFocusable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('drawer');
    const prefixCls = getPrefixCls('drawer', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const getContainer = // 有可能为 false，所以不能直接判断
    customizeGetContainer === undefined && getPopupContainer ? ()=>getPopupContainer(document.body) : customizeGetContainer;
    // ============================ Size ============================
    const drawerSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Drawer.useMemo[drawerSize]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size)) {
                return size;
            }
            if (size === 'large') {
                return 736;
            }
            if (size === 'default') {
                return DEFAULT_SIZE;
            }
            if (typeof size === 'string') {
                if (/^\d+(\.\d+)?$/.test(size)) {
                    return Number(size);
                }
                return size;
            }
            if (!placement || placement === 'left' || placement === 'right') {
                return width;
            }
            return height;
        }
    }["Drawer.useMemo[drawerSize]"], [
        size,
        placement,
        width,
        height
    ]);
    // =========================== Motion ===========================
    const maskMotion = {
        motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, 'mask-motion'),
        ...MOTION_CONFIG
    };
    const panelMotion = (motionPlacement)=>({
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, `panel-motion-${motionPlacement}`),
            ...MOTION_CONFIG
        });
    // ============================ Refs ============================
    // Select `ant-drawer-content` by `panelRef`
    const innerPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanelRef"])();
    const mergedPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(panelRef, innerPanelRef);
    // =========================== zIndex ===========================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Drawer', rest.zIndex);
    // ============================ Mask ============================
    const [mergedMask, maskBlurClassName, mergedMaskClosable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedMask"])(drawerMask, contextMask, prefixCls, maskClosable);
    // ========================== Focusable =========================
    const mergedFocusable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$useFocusable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...contextFocusable,
        ...focusable
    }, getContainer !== false && mergedMask);
    // =========================== Render ===========================
    const { classNames, styles, rootStyle } = rest;
    const mergedProps = {
        ...props,
        zIndex,
        panelRef,
        mask: mergedMask,
        maskClosable: mergedMaskClosable,
        defaultSize,
        push,
        focusable: mergedFocusable
    };
    const contextSectionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle, 'section');
    const drawerSectionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(drawerStyle, 'section');
    const sectionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style, 'section');
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        contextSectionStyle,
        styles,
        drawerSectionStyle,
        sectionStyle
    ], {
        props: mergedProps
    });
    const drawerClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        'no-mask': !mergedMask,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, rootClassName, hashId, cssVarCls, mergedClassNames.root);
    // ========================== Warning ===========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Drawer');
        [
            [
                'headerStyle',
                'styles.header'
            ],
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'footerStyle',
                'styles.footer'
            ],
            [
                'contentWrapperStyle',
                'styles.wrapper'
            ],
            [
                'maskStyle',
                'styles.mask'
            ],
            [
                'drawerStyle',
                'styles.section'
            ],
            [
                'destroyInactivePanel',
                'destroyOnHidden'
            ],
            [
                'width',
                'size'
            ],
            [
                'height',
                'size'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        if (getContainer !== undefined && props.style?.position === 'absolute') {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'breaking', '`style` is replaced by `rootStyle` in v5. Please check that `position: absolute` is necessary.') : "TURBOPACK unreachable";
        }
        warning.deprecated(!(mergedClassNames?.content || mergedStyles?.content), 'classNames.content and styles.content', 'classNames.section and styles.section');
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        form: true,
        space: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$drawer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        onClose: onClose,
        maskMotion: maskMotion,
        motion: panelMotion,
        ...rest,
        classNames: {
            mask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.mask, maskBlurClassName.mask),
            section: mergedClassNames.section,
            wrapper: mergedClassNames.wrapper,
            dragger: mergedClassNames.dragger
        },
        styles: {
            mask: {
                ...mergedStyles.mask,
                ...maskStyle
            },
            section: mergedStyles.section,
            wrapper: {
                ...mergedStyles.wrapper,
                ...contentWrapperStyle
            },
            dragger: mergedStyles.dragger
        },
        open: open,
        mask: mergedMask,
        maskClosable: mergedMaskClosable,
        push: push,
        size: drawerSize,
        defaultSize: defaultSize,
        rootStyle: {
            ...mergedStyles.root,
            ...rootStyle
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextClassName, className),
        rootClassName: drawerClassName,
        getContainer: getContainer,
        afterOpenChange: afterOpenChange,
        panelRef: mergedPanelRef,
        zIndex: zIndex,
        ...resizable ? {
            resizable
        } : {},
        "aria-labelledby": ariaLabelledby ?? ariaId,
        destroyOnHidden: destroyOnHidden ?? destroyOnClose,
        // Focusable
        focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
        focusTrap: mergedFocusable.trap
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        size: size,
        ...rest,
        ariaId: ariaId,
        onClose: onClose
    }))));
};
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, style, className, placement = 'right', ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('drawer', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-pure`, `${prefixCls}-${placement}`, hashId, cssVarCls, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: style
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$DrawerPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        ...restProps
    }));
};
Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Drawer.displayName = 'Drawer';
}
const __TURBOPACK__default__export__ = Drawer;
}),
"[project]/apps/web/node_modules/antd/es/drawer/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/Drawer.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/drawer/index.js [app-client] (ecmascript) <export default as Drawer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/grid/hooks/useGutter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGutter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
;
;
function useGutter(gutter, screens) {
    const results = [
        undefined,
        undefined
    ];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [
        gutter,
        undefined
    ];
    // By default use as `xs`
    const mergedScreens = screens || {
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
    };
    normalizedGutter.forEach((g, index)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(g)) {
            for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
                const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"][i];
                if (mergedScreens[breakpoint] && g[breakpoint] !== undefined) {
                    results[index] = g[breakpoint];
                    break;
                }
            }
        } else {
            results[index] = g;
        }
    });
    return results;
}
}),
"[project]/apps/web/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const RowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const __TURBOPACK__default__export__ = RowContext;
}),
"[project]/apps/web/node_modules/antd/es/grid/row.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/hooks/useGutter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)");
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
const _RowAligns = [
    'top',
    'middle',
    'bottom',
    'stretch'
];
const _RowJustify = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly'
];
const useMergedPropByScreen = (oriProp, screen)=>{
    const [prop, setProp] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMergedPropByScreen.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(oriProp) ? oriProp : ''
    }["useMergedPropByScreen.useState"]);
    const calcMergedAlignOrJustify = ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(oriProp)) {
            setProp(oriProp);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(oriProp)) {
            return;
        }
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
            const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"][i];
            // if do not match, do nothing
            if (!screen || !screen[breakpoint]) {
                continue;
            }
            const curVal = oriProp[breakpoint];
            if (curVal !== undefined) {
                setProp(curVal);
                return;
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMergedPropByScreen.useEffect": ()=>{
            calcMergedAlignOrJustify();
        }
    }["useMergedPropByScreen.useEffect"], [
        JSON.stringify(oriProp),
        screen
    ]);
    return prop;
};
const Row = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, justify, align, className, style, children, gutter = 0, wrap, ...others } = props;
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const screens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(true, null);
    const mergedAlign = useMergedPropByScreen(align, screens);
    const mergedJustify = useMergedPropByScreen(justify, screens);
    const prefixCls = getPrefixCls('row', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRowStyle"])(prefixCls);
    const gutters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(gutter, screens);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-no-wrap`]: wrap === false,
        [`${prefixCls}-${mergedJustify}`]: mergedJustify,
        [`${prefixCls}-${mergedAlign}`]: mergedAlign,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, hashId, cssVarCls);
    // Add gutter related style
    const rowStyle = {};
    if (gutters?.[0]) {
        const horizontalGutter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(gutters[0]) ? `${gutters[0] / -2}px` : `calc(${gutters[0]} / -2)`;
        rowStyle.marginInline = horizontalGutter;
    }
    // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    const [gutterH, gutterV] = gutters;
    rowStyle.rowGap = gutterV;
    const rowContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Row.useMemo[rowContext]": ()=>({
                gutter: [
                    gutterH,
                    gutterV
                ],
                wrap
            })
    }["Row.useMemo[rowContext]"], [
        gutterH,
        gutterV,
        wrap
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: rowContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        className: classes,
        style: {
            ...rowStyle,
            ...style
        },
        ref: ref
    }, children));
});
if ("TURBOPACK compile-time truthy", 1) {
    Row.displayName = 'Row';
}
const __TURBOPACK__default__export__ = Row;
}),
"[project]/apps/web/node_modules/antd/es/grid/row.js [app-client] (ecmascript) <export default as Row>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/row.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/grid/col.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function parseFlex(flex) {
    if (flex === 'auto') {
        return '1 1 auto';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(flex)) {
        return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
const Col = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { gutter, wrap } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { prefixCls: customizePrefixCls, span, order, offset, push, pull, className, children, flex, style, ...others } = props;
    const prefixCls = getPrefixCls('col', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColStyle"])(prefixCls);
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(rootPrefixCls, 'col');
    // ===================== Size ======================
    const sizeStyle = {};
    let sizeClassObj = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArrayReversed"].forEach((size)=>{
        let sizeProps = {};
        const propSize = props[size];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(propSize)) {
            sizeProps.span = propSize;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(propSize)) {
            sizeProps = propSize || {};
        }
        delete others[size];
        sizeClassObj = {
            ...sizeClassObj,
            [`${prefixCls}-${size}-${sizeProps.span}`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(sizeProps.span),
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
            [`${prefixCls}-rtl`]: direction === 'rtl'
        };
        // Responsive flex layout
        if (sizeProps.flex || sizeProps.flex === 0) {
            sizeClassObj[`${prefixCls}-${size}-flex`] = true;
            sizeStyle[varName(`${size}-flex`)] = parseFlex(sizeProps.flex);
        }
    });
    // ==================== Normal =====================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull
    }, className, sizeClassObj, hashId, cssVarCls);
    const mergedStyle = {};
    // Horizontal gutter use padding
    if (gutter?.[0]) {
        const horizontalGutter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(gutter[0]) ? `${gutter[0] / 2}px` : `calc(${gutter[0]} / 2)`;
        mergedStyle.paddingInline = horizontalGutter;
    }
    if (flex || flex === 0) {
        mergedStyle.flex = parseFlex(flex);
        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = 0;
        }
    }
    // ==================== Render =====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        style: {
            ...mergedStyle,
            ...style,
            ...sizeStyle
        },
        className: classes,
        ref: ref
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Col.displayName = 'Col';
}
const __TURBOPACK__default__export__ = Col;
}),
"[project]/apps/web/node_modules/antd/es/switch/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
const genSwitchSmallStyle = (token)=>{
    const { componentCls, trackHeightSM, trackPadding, trackMinWidthSM, innerMinMarginSM, innerMaxMarginSM, handleSizeSM, calc } = token;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(innerMaxMarginSM).mul(2).equal());
    return {
        [componentCls]: {
            [`&${componentCls}-small`]: {
                minWidth: trackMinWidthSM,
                height: trackHeightSM,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(trackHeightSM),
                [`${componentCls}-inner`]: {
                    paddingInlineStart: innerMaxMarginSM,
                    paddingInlineEnd: innerMinMarginSM,
                    [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
                        minHeight: trackHeightSM
                    },
                    [`${switchInnerCls}-checked`]: {
                        marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
                        marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
                    },
                    [`${switchInnerCls}-unchecked`]: {
                        marginTop: calc(trackHeightSM).mul(-1).equal(),
                        marginInlineStart: 0,
                        marginInlineEnd: 0
                    }
                },
                [`${componentCls}-handle`]: {
                    width: handleSizeSM,
                    height: handleSizeSM
                },
                [`${componentCls}-loading-icon`]: {
                    top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
                    fontSize: token.switchLoadingIconSize
                },
                [`&${componentCls}-checked`]: {
                    [`${componentCls}-inner`]: {
                        paddingInlineStart: innerMinMarginSM,
                        paddingInlineEnd: innerMaxMarginSM,
                        [`${switchInnerCls}-checked`]: {
                            marginInlineStart: 0,
                            marginInlineEnd: 0
                        },
                        [`${switchInnerCls}-unchecked`]: {
                            marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
                            marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
                        }
                    },
                    [`${componentCls}-handle`]: {
                        insetInlineStart: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(handleSizeSM).add(trackPadding).equal())})`
                    }
                },
                [`&:not(${componentCls}-disabled):active`]: {
                    [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
                        [`${switchInnerCls}-unchecked`]: {
                            marginInlineStart: calc(token.marginXXS).div(2).equal(),
                            marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
                        }
                    },
                    [`&${componentCls}-checked ${switchInnerCls}`]: {
                        [`${switchInnerCls}-checked`]: {
                            marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
                            marginInlineEnd: calc(token.marginXXS).div(2).equal()
                        }
                    }
                }
            }
        }
    };
};
const genSwitchLoadingStyle = (token)=>{
    const { componentCls, handleSize, calc } = token;
    return {
        [componentCls]: {
            [`${componentCls}-loading-icon${token.iconCls}`]: {
                position: 'relative',
                top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
                color: token.switchLoadingIconColor,
                verticalAlign: 'top'
            },
            [`&${componentCls}-checked ${componentCls}-loading-icon`]: {
                color: token.switchColor
            }
        }
    };
};
const genSwitchHandleStyle = (token)=>{
    const { componentCls, trackPadding, handleBg, handleShadow, handleSize, calc } = token;
    const switchHandleCls = `${componentCls}-handle`;
    return {
        [componentCls]: {
            [switchHandleCls]: {
                position: 'absolute',
                top: trackPadding,
                insetInlineStart: trackPadding,
                width: handleSize,
                height: handleSize,
                transition: `all ${token.switchDuration} ease-in-out`,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])(),
                '&::before': {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    backgroundColor: handleBg,
                    borderRadius: calc(handleSize).div(2).equal(),
                    boxShadow: handleShadow,
                    transition: `all ${token.switchDuration} ease-in-out`,
                    content: '""',
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionRawStyle"])()
                }
            },
            [`&${componentCls}-checked ${switchHandleCls}`]: {
                insetInlineStart: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(handleSize).add(trackPadding).equal())})`
            },
            [`&:not(${componentCls}-disabled):active`]: {
                [`${switchHandleCls}::before`]: {
                    insetInlineEnd: token.switchHandleActiveInset,
                    insetInlineStart: 0
                },
                [`&${componentCls}-checked ${switchHandleCls}::before`]: {
                    insetInlineEnd: 0,
                    insetInlineStart: token.switchHandleActiveInset
                }
            }
        }
    };
};
const genSwitchInnerStyle = (token)=>{
    const { componentCls, trackHeight, trackPadding, innerMinMargin, innerMaxMargin, handleSize, switchDuration, calc } = token;
    const switchInnerCls = `${componentCls}-inner`;
    const trackPaddingCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
    const innerMaxMarginCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(innerMaxMargin).mul(2).equal());
    return {
        [componentCls]: {
            [switchInnerCls]: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: 100,
                height: '100%',
                paddingInlineStart: innerMaxMargin,
                paddingInlineEnd: innerMinMargin,
                transition: [
                    `padding-inline-start`,
                    `padding-inline-end`
                ].map((prop)=>`${prop} ${switchDuration} ease-in-out`).join(', '),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])(),
                [`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: token.colorTextLightSolid,
                    fontSize: token.fontSizeSM,
                    pointerEvents: 'none',
                    minHeight: trackHeight,
                    transition: [
                        `margin-inline-start`,
                        `margin-inline-end`
                    ].map((prop)=>`${prop} ${switchDuration} ease-in-out`).join(', '),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])()
                },
                [`${switchInnerCls}-checked`]: {
                    marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
                    marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
                },
                [`${switchInnerCls}-unchecked`]: {
                    marginTop: calc(trackHeight).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0
                }
            },
            [`&${componentCls}-checked ${switchInnerCls}`]: {
                paddingInlineStart: innerMinMargin,
                paddingInlineEnd: innerMaxMargin,
                [`${switchInnerCls}-checked`]: {
                    marginInlineStart: 0,
                    marginInlineEnd: 0
                },
                [`${switchInnerCls}-unchecked`]: {
                    marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
                    marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
                }
            },
            [`&:not(${componentCls}-disabled):active`]: {
                [`&:not(${componentCls}-checked) ${switchInnerCls}`]: {
                    [`${switchInnerCls}-unchecked`]: {
                        marginInlineStart: calc(trackPadding).mul(2).equal(),
                        marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
                    }
                },
                [`&${componentCls}-checked ${switchInnerCls}`]: {
                    [`${switchInnerCls}-checked`]: {
                        marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
                        marginInlineEnd: calc(trackPadding).mul(2).equal()
                    }
                }
            }
        }
    };
};
const genSwitchStyle = (token)=>{
    const { componentCls, trackHeight, trackMinWidth } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            minWidth: trackMinWidth,
            height: trackHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(trackHeight),
            verticalAlign: 'middle',
            background: token.colorTextQuaternary,
            border: '0',
            borderRadius: 100,
            cursor: 'pointer',
            transition: `all ${token.motionDurationMid}`,
            userSelect: 'none',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])(),
            [`&:hover:not(${componentCls}-disabled)`]: {
                background: token.colorTextTertiary
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            [`&${componentCls}-checked`]: {
                background: token.switchColor,
                [`&:hover:not(${componentCls}-disabled)`]: {
                    background: token.colorPrimaryHover
                }
            },
            [`&${componentCls}-loading, &${componentCls}-disabled`]: {
                cursor: 'not-allowed',
                opacity: token.switchDisabledOpacity,
                '*': {
                    boxShadow: 'none',
                    cursor: 'not-allowed'
                }
            },
            // rtl style
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, controlHeight, colorWhite } = token;
    const height = fontSize * lineHeight;
    const heightSM = controlHeight / 2;
    const padding = 2; // Fixed value
    const handleSize = height - padding * 2;
    const handleSizeSM = heightSM - padding * 2;
    return {
        trackHeight: height,
        trackHeightSM: heightSM,
        trackMinWidth: handleSize * 2 + padding * 4,
        trackMinWidthSM: handleSizeSM * 2 + padding * 2,
        trackPadding: padding,
        // Fixed value
        handleBg: colorWhite,
        handleSize,
        handleSizeSM,
        handleShadow: `0 2px 4px 0 ${new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('#00230b').setA(0.2).toRgbString()}`,
        innerMinMargin: handleSize / 2,
        innerMaxMargin: handleSize + padding + padding * 2,
        innerMinMarginSM: handleSizeSM / 2,
        innerMaxMarginSM: handleSizeSM + padding + padding * 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Switch', (token)=>{
    const switchToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        switchDuration: token.motionDurationMid,
        switchColor: token.colorPrimary,
        switchDisabledOpacity: token.opacityLoading,
        switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(0.75).equal(),
        switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
        switchHandleActiveInset: '-30%'
    });
    return [
        genSwitchStyle(switchToken),
        // inner style
        genSwitchInnerStyle(switchToken),
        // handle style
        genSwitchHandleStyle(switchToken),
        // loading style
        genSwitchLoadingStyle(switchToken),
        // small style
        genSwitchSmallStyle(switchToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/switch/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$switch$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/switch/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/switch/style/index.js [app-client] (ecmascript)");
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
const InternalSwitch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, size: customizeSize, disabled: customDisabled, loading, className, rootClassName, style, checked: checkedProp, value, defaultChecked: defaultCheckedProp, defaultValue, onChange, styles, classNames, ...restProps } = props;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(defaultCheckedProp ?? defaultValue ?? false, checkedProp ?? value);
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('switch');
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = (customDisabled ?? disabled) || loading;
    const prefixCls = getPrefixCls('switch', customizePrefixCls);
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Switch');
        warning.deprecated(customizeSize !== 'default', 'size="default"', 'size="medium"');
    }
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    const mergedProps = {
        ...props,
        size: mergedSize,
        disabled: mergedDisabled
    };
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
        props: mergedProps
    });
    const loadingIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-handle`, mergedClassNames.indicator),
        style: mergedStyles.indicator
    }, loading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `${prefixCls}-loading-icon`
    }));
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextClassName, {
        [`${prefixCls}-small`]: mergedSize === 'small',
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, mergedClassNames.root, hashId, cssVarCls);
    const changeHandler = (...args)=>{
        setChecked(args[0]);
        onChange?.(...args);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: "Switch",
        disabled: mergedDisabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$switch$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...restProps,
        classNames: mergedClassNames,
        styles: mergedStyles,
        checked: checked,
        onChange: changeHandler,
        prefixCls: prefixCls,
        className: classes,
        style: mergedStyles.root,
        disabled: mergedDisabled,
        ref: ref,
        loadingIcon: loadingIcon
    }));
});
const Switch = InternalSwitch;
Switch.__ANT_SWITCH = true;
if ("TURBOPACK compile-time truthy", 1) {
    Switch.displayName = 'Switch';
}
const __TURBOPACK__default__export__ = Switch;
}),
"[project]/apps/web/node_modules/antd/es/switch/index.js [app-client] (ecmascript) <export default as Switch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/switch/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0rrk_antd_es_17-2bl8._.js.map