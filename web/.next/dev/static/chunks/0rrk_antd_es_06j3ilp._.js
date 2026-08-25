(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
;
;
function useDebounce(value) {
    const [cacheValue, setCacheValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDebounce.useEffect": ()=>{
            setCacheValue(value, {
                ms: value.length ? 0 : 10
            });
        }
    }["useDebounce.useEffect"], [
        value
    ]);
    return cacheValue;
}
}),
"[project]/apps/web/node_modules/antd/es/form/style/explain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genFormValidateMotionStyle = (token)=>{
    const { componentCls, motionDurationFast, motionEaseInOut } = token;
    const helpCls = `${componentCls}-show-help`;
    const helpItemCls = `${componentCls}-show-help-item`;
    return {
        [helpCls]: {
            // Explain holder
            transition: `opacity ${motionDurationFast} ${motionEaseInOut}`,
            '&-appear, &-enter': {
                opacity: 0,
                '&-active': {
                    opacity: 1
                }
            },
            '&-leave': {
                opacity: 1,
                '&-active': {
                    opacity: 0
                }
            },
            // Explain
            [helpItemCls]: {
                overflow: 'hidden',
                transition: `${[
                    'height',
                    'opacity',
                    'transform'
                ].map((prop)=>`${prop} ${motionDurationFast} ${motionEaseInOut}`).join(', ')} !important`,
                [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
                    transform: `translateY(-5px)`,
                    opacity: 0,
                    '&-active': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                [`&${helpItemCls}-leave-active`]: {
                    transform: `translateY(-5px)`
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genFormValidateMotionStyle;
}),
"[project]/apps/web/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$explain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/explain.js [app-client] (ecmascript)");
;
;
;
;
;
;
const resetForm = (token)=>({
        legend: {
            display: 'block',
            width: '100%',
            marginBottom: token.marginLG,
            padding: 0,
            color: token.colorTextDescription,
            fontSize: token.fontSizeLG,
            lineHeight: 'inherit',
            border: 0,
            borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        'input[type="search"]': {
            boxSizing: 'border-box'
        },
        // Position radios and checkboxes better
        'input[type="radio"], input[type="checkbox"]': {
            lineHeight: 'normal'
        },
        'input[type="file"]': {
            display: 'block'
        },
        // Make range inputs behave like textual form controls
        'input[type="range"]': {
            display: 'block',
            width: '100%'
        },
        // Make multiple select elements height not fixed
        'select[multiple], select[size]': {
            height: 'auto'
        },
        // Focus for file, radio, and checkbox
        "input[type='file']:focus, input[type='radio']:focus, input[type='checkbox']:focus": {
            outline: 0,
            boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth)} ${token.controlOutline}`
        },
        // Adjust output element
        output: {
            display: 'block',
            paddingTop: 15,
            color: token.colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight
        }
    });
const genFormSize = (token, height)=>{
    const { formItemCls } = token;
    return {
        [formItemCls]: {
            [`${formItemCls}-label > label`]: {
                height
            },
            [`${formItemCls}-control-input`]: {
                minHeight: height
            }
        }
    };
};
const genFormStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...resetForm(token),
            [`${componentCls}-text`]: {
                display: 'inline-block',
                paddingInlineEnd: token.paddingSM
            },
            // ================================================================
            // =                             Size                             =
            // ================================================================
            '&-small': {
                ...genFormSize(token, token.controlHeightSM)
            },
            '&-large': {
                ...genFormSize(token, token.controlHeightLG)
            }
        }
    };
};
const genFormItemStyle = (token)=>{
    const { formItemCls, iconCls, rootPrefixCls, antCls, labelRequiredMarkColor, labelColor, labelFontSize, labelHeight, labelColonMarginInlineStart, labelColonMarginInlineEnd, itemMarginBottom } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'grid');
    return {
        [formItemCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            marginBottom: itemMarginBottom,
            verticalAlign: 'top',
            '&-with-help': {
                transition: 'none'
            },
            [`&-hidden,
        &-hidden${antCls}-row`]: {
                // https://github.com/ant-design/ant-design/issues/26141
                display: 'none'
            },
            // ==============================================================
            // =                            Label                           =
            // ==============================================================
            [`${formItemCls}-label`]: {
                flexGrow: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: 'end',
                verticalAlign: 'middle',
                '&-left': {
                    textAlign: 'start'
                },
                '&-wrap': {
                    overflow: 'unset',
                    lineHeight: token.lineHeight,
                    whiteSpace: 'unset',
                    '> label': {
                        verticalAlign: 'middle',
                        textWrap: 'balance'
                    }
                },
                '> label': {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                    height: labelHeight,
                    color: labelColor,
                    fontSize: labelFontSize,
                    [`> ${iconCls}`]: {
                        fontSize: token.fontSize,
                        verticalAlign: 'top'
                    },
                    [`&${formItemCls}-required`]: {
                        '&::before': {
                            display: 'inline-block',
                            marginInlineEnd: token.marginXXS,
                            color: labelRequiredMarkColor,
                            fontSize: token.fontSize,
                            fontFamily: 'sans-serif',
                            lineHeight: 1,
                            content: '"*"'
                        },
                        [`&${formItemCls}-required-mark-hidden, &${formItemCls}-required-mark-optional`]: {
                            '&::before': {
                                display: 'none'
                            }
                        }
                    },
                    // Optional mark
                    [`${formItemCls}-optional`]: {
                        display: 'inline-block',
                        marginInlineStart: token.marginXXS,
                        color: token.colorTextDescription,
                        [`&${formItemCls}-required-mark-hidden`]: {
                            display: 'none'
                        }
                    },
                    // Optional mark
                    [`${formItemCls}-tooltip`]: {
                        color: token.colorTextDescription,
                        cursor: 'help',
                        writingMode: 'horizontal-tb',
                        marginInlineStart: token.marginXXS
                    },
                    '&::after': {
                        content: '":"',
                        position: 'relative',
                        marginBlock: 0,
                        marginInlineStart: labelColonMarginInlineStart,
                        marginInlineEnd: labelColonMarginInlineEnd
                    },
                    [`&${formItemCls}-no-colon::after`]: {
                        content: '"\\a0"'
                    }
                }
            },
            // ==============================================================
            // =                            Input                           =
            // ==============================================================
            [`${formItemCls}-control`]: {
                [varName('display')]: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
                    width: '100%'
                },
                '&-input': {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: token.controlHeight,
                    '&-content': {
                        flex: 'auto',
                        maxWidth: '100%',
                        // Fix https://github.com/ant-design/ant-design/issues/54042
                        // Remove impact of whitespaces
                        [`&:has(> ${antCls}-switch:only-child, > ${antCls}-rate:only-child)`]: {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }
                }
            },
            // ==============================================================
            // =                           Explain                          =
            // ==============================================================
            [formItemCls]: {
                '&-additional': {
                    display: 'flex',
                    flexDirection: 'column'
                },
                '&-explain, &-extra': {
                    clear: 'both',
                    color: token.colorTextDescription,
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight
                },
                '&-explain-connected': {
                    width: '100%'
                },
                '&-extra': {
                    minHeight: token.controlHeightSM,
                    transition: `color ${token.motionDurationMid} ${token.motionEaseOut}` // sync input color transition
                },
                '&-explain': {
                    '&-error': {
                        color: token.colorError
                    },
                    '&-warning': {
                        color: token.colorWarning
                    }
                }
            },
            [`&-with-help ${formItemCls}-explain`]: {
                height: 'auto',
                opacity: 1
            },
            // ==============================================================
            // =                        Feedback Icon                       =
            // ==============================================================
            [`${formItemCls}-feedback-icon`]: {
                fontSize: token.fontSize,
                textAlign: 'center',
                visibility: 'visible',
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomIn"],
                animationDuration: token.motionDurationMid,
                animationTimingFunction: token.motionEaseOutBack,
                pointerEvents: 'none',
                '&-success': {
                    color: token.colorSuccess
                },
                '&-error': {
                    color: token.colorError
                },
                '&-warning': {
                    color: token.colorWarning
                },
                '&-validating': {
                    color: token.colorPrimary
                }
            }
        }
    };
};
const makeVerticalLayoutLabelBase = (token)=>({
        padding: token.verticalLabelPadding,
        whiteSpace: 'initial',
        textAlign: 'start',
        '> label': {
            margin: 0,
            '&::after': {
                // https://github.com/ant-design/ant-design/issues/43538
                visibility: 'hidden'
            }
        }
    });
const makeVerticalLayoutLabel = (token)=>({
        ...makeVerticalLayoutLabelBase(token),
        margin: token.verticalLabelMargin
    });
const makeVerticalLayoutLabelWithOffset = (token)=>{
    const [formVarName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(token.antCls, 'form');
    return {
        ...makeVerticalLayoutLabelBase(token),
        [formVarName('item-label-margin')]: token.verticalLabelMargin
    };
};
const genHorizontalStyle = (token)=>{
    const { antCls, formItemCls } = token;
    return {
        [`${formItemCls}-horizontal`]: {
            [`${formItemCls}-label`]: {
                flexGrow: 0
            },
            [`${formItemCls}-control`]: {
                flex: '1 1 0',
                // https://github.com/ant-design/ant-design/issues/32777
                // https://github.com/ant-design/ant-design/issues/33773
                minWidth: 0
            },
            // Do not change this to `ant-col-24`! `-24` match all the responsive rules
            // https://github.com/ant-design/ant-design/issues/32980
            // https://github.com/ant-design/ant-design/issues/34903
            // https://github.com/ant-design/ant-design/issues/44538
            [`${formItemCls}-label[class$='-24'], ${formItemCls}-label[class*='-24 ']`]: {
                [`& + ${formItemCls}-control`]: {
                    minWidth: 'unset'
                }
            },
            [`> ${formItemCls}-row > ${antCls}-col-24${formItemCls}-label,
        > ${formItemCls}-row > ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
    };
};
const genInlineStyle = (token)=>{
    const { componentCls, formItemCls, inlineItemMarginBottom } = token;
    return {
        [`${componentCls}-inline`]: {
            display: 'flex',
            flexWrap: 'wrap',
            [`${formItemCls}-inline`]: {
                flex: 'none',
                marginInlineEnd: token.margin,
                marginBottom: inlineItemMarginBottom,
                '&-row': {
                    flexWrap: 'nowrap'
                },
                [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
                    display: 'inline-block',
                    verticalAlign: 'top'
                },
                [`> ${formItemCls}-label`]: {
                    flex: 'none'
                },
                [`${componentCls}-text`]: {
                    display: 'inline-block'
                },
                [`${formItemCls}-has-feedback`]: {
                    display: 'inline-block'
                }
            }
        }
    };
};
const makeVerticalLayout = (token)=>{
    const { componentCls, formItemCls, rootPrefixCls } = token;
    return {
        [`${formItemCls}:not(${formItemCls}-vertical) > ${formItemCls}-row > ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
        // ref: https://github.com/ant-design/ant-design/issues/45122
        [`${componentCls}:not(${componentCls}-inline)`]: {
            [formItemCls]: {
                flexWrap: 'wrap',
                [`${formItemCls}-label, ${formItemCls}-control`]: {
                    // When developer pass `xs: { span }`,
                    // It should follow the `xs` screen config
                    // ref: https://github.com/ant-design/ant-design/issues/44386
                    [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
                        flex: '0 0 100%',
                        maxWidth: '100%'
                    }
                }
            }
        }
    };
};
const genVerticalStyle = (token)=>{
    const { componentCls, formItemCls, antCls, verticalLabelHeight } = token;
    const [formVarName, formVarRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'form');
    return {
        [formItemCls]: {
            [formVarName('item-label-margin')]: 'initial'
        },
        [`${formItemCls}-label`]: {
            margin: formVarRef('item-label-margin')
        },
        [`${formItemCls}-vertical`]: {
            [`${formItemCls}-row`]: {
                flexDirection: 'column'
            },
            [`${formItemCls}-label > label`]: {
                height: verticalLabelHeight
            },
            [`${formItemCls}-control`]: {
                width: '100%'
            },
            [`> ${formItemCls}-row > ${formItemCls}-label,
        > ${formItemCls}-row > ${antCls}-col-24${formItemCls}-label,
        > ${formItemCls}-row > ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabelWithOffset(token)
        },
        [`@media (max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenXSMax)})`]: [
            makeVerticalLayout(token),
            {
                [componentCls]: {
                    [`${formItemCls}:not(${formItemCls}-horizontal):not(${formItemCls}-vertical)`]: {
                        [`> ${formItemCls}-row > ${antCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
                    }
                }
            }
        ],
        [`@media (max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenSMMax)})`]: {
            [componentCls]: {
                [`${formItemCls}:not(${formItemCls}-horizontal):not(${formItemCls}-vertical)`]: {
                    [`> ${formItemCls}-row > ${antCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
                }
            }
        },
        [`@media (max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenMDMax)})`]: {
            [componentCls]: {
                [`${formItemCls}:not(${formItemCls}-horizontal):not(${formItemCls}-vertical)`]: {
                    [`> ${formItemCls}-row > ${antCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
                }
            }
        },
        [`@media (max-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenLGMax)})`]: {
            [componentCls]: {
                [`${formItemCls}:not(${formItemCls}-horizontal):not(${formItemCls}-vertical)`]: {
                    [`> ${formItemCls}-row > ${antCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        labelRequiredMarkColor: token.colorError,
        labelColor: token.colorTextHeading,
        labelFontSize: token.fontSize,
        labelHeight: token.controlHeight,
        verticalLabelHeight: token.labelHeight ?? 'auto',
        labelColonMarginInlineStart: token.marginXXS / 2,
        labelColonMarginInlineEnd: token.marginXS,
        itemMarginBottom: token.marginLG,
        verticalLabelPadding: `0 0 ${token.paddingXS}px`,
        verticalLabelMargin: 0,
        inlineItemMarginBottom: 0
    });
const prepareToken = (token, rootPrefixCls)=>{
    const formToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        formItemCls: `${token.componentCls}-item`,
        rootPrefixCls
    });
    return formToken;
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Form', (token, { rootPrefixCls })=>{
    const formToken = prepareToken(token, rootPrefixCls);
    return [
        genFormStyle(formToken),
        genFormItemStyle(formToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$explain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(formToken),
        genHorizontalStyle(formToken),
        genInlineStyle(formToken),
        genVerticalStyle(formToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(formToken),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomIn"]
    ];
}, prepareComponentToken, {
    // Let From style before the Grid
    // ref https://github.com/ant-design/ant-design/issues/44386
    order: -1000
});
}),
"[project]/apps/web/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/CSSMotionList.js [app-client] (ecmascript) <export default as CSSMotionList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
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
const EMPTY_LIST = [];
function toErrorEntity(error, prefix, errorStatus, index = 0) {
    return {
        key: typeof error === 'string' ? error : `${prefix}-${index}`,
        error,
        errorStatus
    };
}
const ErrorList = ({ help, helpStatus, errors = EMPTY_LIST, warnings = EMPTY_LIST, className: rootClassName, fieldId, onVisibleChanged })=>{
    const { prefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"]);
    const { classNames: contextClassNames, styles: contextStyles } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const baseClassName = `${prefixCls}-item-explain`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const collapseMotion = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[collapseMotion]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls)
    }["ErrorList.useMemo[collapseMotion]"], [
        prefixCls
    ]);
    // We have to debounce here again since somewhere use ErrorList directly still need no shaking
    // ref: https://github.com/ant-design/ant-design/issues/36336
    const debounceErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(errors);
    const debounceWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(warnings);
    const hasHelp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(help);
    const fullKeyList = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[fullKeyList]": ()=>{
            if (hasHelp) {
                return [
                    toErrorEntity(help, 'help', helpStatus)
                ];
            }
            return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(debounceErrors.map({
                "ErrorList.useMemo[fullKeyList]": (error, index)=>toErrorEntity(error, 'error', 'error', index)
            }["ErrorList.useMemo[fullKeyList]"])), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(debounceWarnings.map({
                "ErrorList.useMemo[fullKeyList]": (warning, index)=>toErrorEntity(warning, 'warning', 'warning', index)
            }["ErrorList.useMemo[fullKeyList]"])));
        }
    }["ErrorList.useMemo[fullKeyList]"], [
        help,
        helpStatus,
        hasHelp,
        debounceErrors,
        debounceWarnings
    ]);
    const filledKeyFullKeyList = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[filledKeyFullKeyList]": ()=>{
            const keysCount = {};
            fullKeyList.forEach({
                "ErrorList.useMemo[filledKeyFullKeyList]": ({ key })=>{
                    keysCount[key] = (keysCount[key] || 0) + 1;
                }
            }["ErrorList.useMemo[filledKeyFullKeyList]"]);
            return fullKeyList.map({
                "ErrorList.useMemo[filledKeyFullKeyList]": (entity, index)=>({
                        ...entity,
                        key: keysCount[entity.key] > 1 ? `${entity.key}-fallback-${index}` : entity.key
                    })
            }["ErrorList.useMemo[filledKeyFullKeyList]"]);
        }
    }["ErrorList.useMemo[filledKeyFullKeyList]"], [
        fullKeyList
    ]);
    const helpProps = {};
    if (fieldId) {
        helpProps.id = `${fieldId}_help`;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        motionDeadline: collapseMotion.motionDeadline,
        motionName: `${prefixCls}-show-help`,
        visible: !!filledKeyFullKeyList.length,
        onVisibleChanged: onVisibleChanged
    }, (holderProps)=>{
        const { className: holderClassName, style: holderStyle } = holderProps;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ...helpProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseClassName, holderClassName, contextClassNames?.help, cssVarCls, rootCls, rootClassName, hashId),
            style: {
                ...contextStyles?.help,
                ...holderStyle
            }
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__["CSSMotionList"], {
            keys: filledKeyFullKeyList,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls),
            motionName: `${prefixCls}-show-help-item`,
            component: false
        }, (itemProps)=>{
            const { key, error, errorStatus, className: itemClassName, style: itemStyle } = itemProps;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                key: key,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemClassName, contextClassNames?.helpItem, {
                    [`${baseClassName}-${errorStatus}`]: errorStatus
                }),
                style: {
                    ...contextStyles?.helpItem,
                    ...itemStyle
                }
            }, error);
        }));
    });
};
const __TURBOPACK__default__export__ = ErrorList;
}),
"[project]/apps/web/node_modules/antd/es/form/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFieldId",
    ()=>getFieldId,
    "getStatus",
    ()=>getStatus,
    "toArray",
    ()=>toArray
]);
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
const formItemNameBlackList = [
    'parentNode'
];
// default form item id prefix.
const defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
    if (candidate === undefined || candidate === false) {
        return [];
    }
    return Array.isArray(candidate) ? candidate : [
        candidate
    ];
}
function getFieldId(namePath, formName) {
    if (!namePath.length) {
        return undefined;
    }
    const mergedId = namePath.join('_');
    if (formName) {
        return `${formName}_${mergedId}`;
    }
    const isIllegalName = formItemNameBlackList.includes(mergedId);
    return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
    let status = defaultValidateStatus;
    if (validateStatus !== undefined) {
        status = validateStatus;
    } else if (meta.validating) {
        status = 'validating';
    } else if (errors.length) {
        status = 'error';
    } else if (warnings.length) {
        status = 'warning';
    } else if (meta.touched || hasFeedback && meta.validated) {
        // success feedback should display when pass hasFeedback prop and current value is valid value
        status = 'success';
    }
    return status;
}
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForm,
    "toNamePathStr",
    ()=>toNamePathStr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
function toNamePathStr(name) {
    const namePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name);
    return namePath.join('_');
}
function getFieldDOMNode(name, wrapForm) {
    const field = wrapForm.getFieldInstance(name);
    const fieldDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(field);
    if (fieldDom) {
        return fieldDom;
    }
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldId"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name), wrapForm.__INTERNAL__.name);
    if (fieldId) {
        return document.getElementById(fieldId);
    }
}
function useForm(form) {
    const [rcForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"])();
    const itemsRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const wrapForm = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForm.useMemo[wrapForm]": ()=>form ?? {
                ...rcForm,
                __INTERNAL__: {
                    itemRef: ({
                        "useForm.useMemo[wrapForm]": (name)=>({
                                "useForm.useMemo[wrapForm]": (node)=>{
                                    const namePathStr = toNamePathStr(name);
                                    if (node) {
                                        itemsRef.current[namePathStr] = node;
                                    } else {
                                        delete itemsRef.current[namePathStr];
                                    }
                                }
                            })["useForm.useMemo[wrapForm]"]
                    })["useForm.useMemo[wrapForm]"]
                },
                scrollToField: ({
                    "useForm.useMemo[wrapForm]": (name, options = {})=>{
                        const { focus, ...restOpt } = options;
                        const node = getFieldDOMNode(name, wrapForm);
                        if (node) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, {
                                scrollMode: 'if-needed',
                                block: 'nearest',
                                ...restOpt
                            });
                            // Focus if scroll success
                            if (focus) {
                                wrapForm.focusField(name);
                            }
                        }
                    }
                })["useForm.useMemo[wrapForm]"],
                focusField: ({
                    "useForm.useMemo[wrapForm]": (name)=>{
                        const itemRef = wrapForm.getFieldInstance(name);
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(itemRef?.focus)) {
                            itemRef.focus();
                        } else {
                            getFieldDOMNode(name, wrapForm)?.focus?.();
                        }
                    }
                })["useForm.useMemo[wrapForm]"],
                getFieldInstance: ({
                    "useForm.useMemo[wrapForm]": (name)=>{
                        const namePathStr = toNamePathStr(name);
                        return itemsRef.current[namePathStr];
                    }
                })["useForm.useMemo[wrapForm]"]
            }
    }["useForm.useMemo[wrapForm]"], [
        form,
        rcForm
    ]);
    return [
        wrapForm
    ];
}
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useFormWarning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFormWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
;
const names = {};
function useFormWarning({ name }) {
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevWarning"])('Form');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFormWarning.useEffect": ()=>{
            if (name) {
                names[name] = (names[name] || 0) + 1;
                ("TURBOPACK compile-time truthy", 1) ? warning(names[name] <= 1, 'usage', 'There exist multiple Form with same `name`.') : "TURBOPACK unreachable";
                return ({
                    "useFormWarning.useEffect": ()=>{
                        names[name] -= 1;
                    }
                })["useFormWarning.useEffect"];
            }
        }
    }["useFormWarning.useEffect"], [
        name
    ]);
}
}),
"[project]/apps/web/node_modules/antd/es/form/Form.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/hooks/useWatch.js [app-client] (ecmascript) <export default as useWatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useFormWarning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/validateMessagesContext.js [app-client] (ecmascript)");
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
const InternalForm = (props, ref)=>{
    const contextDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { getPrefixCls, direction, requiredMark: contextRequiredMark, colon: contextColon, scrollToFirstError: contextScrollToFirstError, className: contextClassName, style: contextStyle, styles: contextStyles, classNames: contextClassNames, tooltip: contextTooltip, labelAlign: contextLabelAlign, labelWrap: contextLabelWrap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('form');
    const { prefixCls: customizePrefixCls, className, rootClassName, size, disabled = contextDisabled, form, colon, labelAlign, labelWrap, labelCol, wrapperCol, layout = 'horizontal', scrollToFirstError, requiredMark, onFinishFailed, name, style, feedbackIcons, variant, classNames, styles, tooltip, ...restFormProps } = props;
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size);
    const contextValidateMessages = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props);
    }
    const mergedRequiredMark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalForm.useMemo[mergedRequiredMark]": ()=>{
            if (requiredMark !== undefined) {
                return requiredMark;
            }
            if (contextRequiredMark !== undefined) {
                return contextRequiredMark;
            }
            return true;
        }
    }["InternalForm.useMemo[mergedRequiredMark]"], [
        requiredMark,
        contextRequiredMark
    ]);
    const mergedColon = colon ?? contextColon;
    const mergedLabelAlign = labelAlign ?? contextLabelAlign;
    const mergedLabelWrap = labelWrap ?? contextLabelWrap;
    const mergedTooltip = {
        ...contextTooltip,
        ...tooltip
    };
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size: mergedSize,
        disabled,
        layout,
        colon: mergedColon,
        requiredMark: mergedRequiredMark,
        labelAlign: mergedLabelAlign,
        labelWrap: mergedLabelWrap
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
    const formClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-${layout}`, {
        [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
        // todo: remove in next major version
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-large`]: mergedSize === 'large',
        [`${prefixCls}-small`]: mergedSize === 'small'
    }, cssVarCls, rootCls, hashId, contextClassName, className, rootClassName, mergedClassNames.root);
    const [wrapForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(form);
    const { __INTERNAL__ } = wrapForm;
    __INTERNAL__.name = name;
    const formContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalForm.useMemo[formContextValue]": ()=>({
                name,
                labelAlign: mergedLabelAlign,
                labelCol,
                labelWrap: mergedLabelWrap,
                wrapperCol,
                layout,
                colon: mergedColon,
                requiredMark: mergedRequiredMark,
                itemRef: __INTERNAL__.itemRef,
                form: wrapForm,
                feedbackIcons,
                tooltip: mergedTooltip,
                classNames: mergedClassNames,
                styles: mergedStyles
            })
    }["InternalForm.useMemo[formContextValue]"], [
        name,
        mergedLabelAlign,
        mergedLabelWrap,
        labelCol,
        wrapperCol,
        layout,
        mergedColon,
        mergedRequiredMark,
        wrapForm,
        feedbackIcons,
        mergedClassNames,
        mergedStyles,
        mergedTooltip
    ]);
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalForm.useImperativeHandle": ()=>({
                ...wrapForm,
                nativeElement: nativeElementRef.current?.nativeElement
            })
    }["InternalForm.useImperativeHandle"]);
    const scrollToField = (options, fieldName)=>{
        if (options) {
            let defaultScrollToFirstError = {
                block: 'nearest'
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(options)) {
                defaultScrollToFirstError = {
                    ...defaultScrollToFirstError,
                    ...options
                };
            }
            wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
        }
    };
    const onInternalFinishFailed = (errorInfo)=>{
        onFinishFailed?.(errorInfo);
        if (errorInfo.errorFields.length) {
            const fieldName = errorInfo.errorFields[0].name;
            if (scrollToFirstError !== undefined) {
                scrollToField(scrollToFirstError, fieldName);
                return;
            }
            if (contextScrollToFirstError !== undefined) {
                scrollToField(contextScrollToFirstError, fieldName);
            }
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantContext"].Provider, {
        value: variant
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledContextProvider"], {
        disabled: disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: mergedSize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        // This is not list in API, we pass with spread
        validateMessages: contextValidateMessages
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"].Provider, {
        value: formContextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoFormStyle"], {
        status: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: name,
        ...restFormProps,
        name: name,
        onFinishFailed: onInternalFinishFailed,
        form: wrapForm,
        ref: nativeElementRef,
        style: mergedStyles?.root,
        className: formClassName
    })))))));
};
const Form = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalForm);
if ("TURBOPACK compile-time truthy", 1) {
    Form.displayName = 'Form';
}
;
const __TURBOPACK__default__export__ = Form;
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useChildren.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const useChildren = (children)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(children)) {
        return children;
    }
    const childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    return childList.length <= 1 ? childList[0] : childList;
};
const __TURBOPACK__default__export__ = useChildren;
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useFormItemStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
const useFormItemStatus = ()=>{
    const { status, errors = [], warnings = [] } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevWarning"])('Form.Item');
        ("TURBOPACK compile-time truthy", 1) ? warning(status !== undefined, 'usage', 'Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus') : "TURBOPACK unreachable";
    }
    return {
        status,
        errors,
        warnings
    };
};
// Only used for compatible package. Not promise this will work on future version.
useFormItemStatus.Context = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"];
const __TURBOPACK__default__export__ = useFormItemStatus;
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useFrameState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFrameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
;
;
function useFrameState(defaultValue) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultValue);
    const frameRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const batchRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const destroyRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFrameState.useEffect": ()=>{
            destroyRef.current = false;
            return ({
                "useFrameState.useEffect": ()=>{
                    destroyRef.current = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(frameRef.current);
                    frameRef.current = null;
                }
            })["useFrameState.useEffect"];
        }
    }["useFrameState.useEffect"], []);
    function setFrameValue(updater) {
        if (destroyRef.current) {
            return;
        }
        if (frameRef.current === null) {
            batchRef.current = [];
            frameRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])(()=>{
                frameRef.current = null;
                setValue((prevValue)=>{
                    let current = prevValue;
                    batchRef.current.forEach((func)=>{
                        current = func(current);
                    });
                    return current;
                });
            });
        }
        batchRef.current.push(updater);
    }
    return [
        value,
        setFrameValue
    ];
}
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useItemRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
;
const useItemRef = ()=>{
    const { itemRef } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const getRef = (name, children)=>{
        // Outer caller already check the `supportRef`
        const childrenRef = children && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(children) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children);
        const nameStr = name.join('_');
        if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
            cacheRef.current.name = nameStr;
            cacheRef.current.originRef = childrenRef;
            cacheRef.current.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(itemRef(name), childrenRef);
        }
        return cacheRef.current.ref;
    };
    return getRef;
};
const __TURBOPACK__default__export__ = useItemRef;
}),
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
"[project]/apps/web/node_modules/antd/es/form/style/fallbackCmp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Fallback of IE.
 * Safe to remove.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
// ============================= Fallback =============================
const genFallbackStyle = (token)=>{
    const { formItemCls } = token;
    return {
        '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
            // Fallback for IE, safe to remove we not support it anymore
            [`${formItemCls}-control`]: {
                display: 'flex'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Form',
    'item-item'
], (token, { rootPrefixCls })=>{
    const formToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token, rootPrefixCls);
    return genFallbackStyle(formToken);
});
}),
"[project]/apps/web/node_modules/antd/es/form/FormItemInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/utils/get.js [app-client] (ecmascript) <export default as get>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__set$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/utils/set.js [app-client] (ecmascript) <export default as set>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$fallbackCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/fallbackCmp.js [app-client] (ecmascript)");
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
const GRID_MAX = 24;
const FormItemInput = (props)=>{
    const { prefixCls, status, labelCol, wrapperCol, children, errors, warnings, _internalItemRender: formItemRender, extra, help, fieldId, marginBottom, onErrorVisibleChanged, label } = props;
    const baseClassName = `${prefixCls}-item`;
    const formContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const { classNames: contextClassNames, styles: contextStyles } = formContext;
    const mergedWrapperCol = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[mergedWrapperCol]": ()=>{
            let mergedWrapper = {
                ...wrapperCol || formContext.wrapperCol || {}
            };
            if (label === null && !labelCol && !wrapperCol && formContext.labelCol) {
                const list = [
                    undefined
                ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArrayReversed"]));
                list.forEach({
                    "FormItemInput.useMemo[mergedWrapperCol]": (size)=>{
                        const _size = size ? [
                            size
                        ] : [];
                        const formLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__["get"])(formContext.labelCol, _size);
                        const formLabelObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(formLabel) ? formLabel : {};
                        const wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__["get"])(mergedWrapper, _size);
                        const wrapperObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(wrapper) ? wrapper : {};
                        if ('span' in formLabelObj && !('offset' in wrapperObj) && formLabelObj.span < GRID_MAX) {
                            mergedWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__set$3e$__["set"])(mergedWrapper, [].concat(_size, [
                                'offset'
                            ]), formLabelObj.span);
                        }
                    }
                }["FormItemInput.useMemo[mergedWrapperCol]"]);
            }
            return mergedWrapper;
        }
    }["FormItemInput.useMemo[mergedWrapperCol]"], [
        wrapperCol,
        formContext.wrapperCol,
        formContext.labelCol,
        label,
        labelCol
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${baseClassName}-control`, mergedWrapperCol.className);
    // Pass to sub FormItem should not with col info
    const subFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[subFormContext]": ()=>{
            const { labelCol: _labelCol, wrapperCol: _wrapperCol, ...rest } = formContext;
            return rest;
        }
    }["FormItemInput.useMemo[subFormContext]"], [
        formContext
    ]);
    const extraRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [extraHeight, setExtraHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "FormItemInput.useLayoutEffect": ()=>{
            if (extra && extraRef.current) {
                setExtraHeight(extraRef.current.clientHeight);
            } else {
                setExtraHeight(0);
            }
        }
    }["FormItemInput.useLayoutEffect"], [
        extra
    ]);
    const inputDom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${baseClassName}-control-input`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${baseClassName}-control-input-content`, contextClassNames?.content),
        style: contextStyles?.content
    }, children));
    const formItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[formItemContext]": ()=>({
                prefixCls,
                status
            })
    }["FormItemInput.useMemo[formItemContext]"], [
        prefixCls,
        status
    ]);
    const errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"].Provider, {
        value: formItemContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fieldId: fieldId,
        errors: errors,
        warnings: warnings,
        help: help,
        helpStatus: status,
        className: `${baseClassName}-explain-connected`,
        onVisibleChanged: onErrorVisibleChanged
    })) : null;
    const extraProps = {};
    if (fieldId) {
        extraProps.id = `${fieldId}_extra`;
    }
    // If extra = 0, && will goes wrong
    // 0&&error -> 0
    const extraDom = extra ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...extraProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${baseClassName}-extra`, contextClassNames?.extra),
        style: contextStyles?.extra,
        ref: extraRef
    }, extra) : null;
    const additionalDom = errorListDom || extraDom ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${baseClassName}-additional`,
        style: marginBottom ? {
            minHeight: marginBottom + extraHeight
        } : {}
    }, errorListDom, extraDom) : null;
    const dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
        input: inputDom,
        errorList: errorListDom,
        extra: extraDom
    }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inputDom, additionalDom);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"].Provider, {
        value: subFormContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...mergedWrapperCol,
        className: className
    }, dom), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$fallbackCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
};
const __TURBOPACK__default__export__ = FormItemInput;
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
"[project]/apps/web/node_modules/antd/es/form/FormItemLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$convertToTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/convertToTooltipProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
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
const FormItemLabel = ({ prefixCls, label, htmlFor, labelCol, labelAlign, colon, required, requiredMark, tooltip, vertical })=>{
    const [formLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Form');
    const { labelAlign: contextLabelAlign, labelCol: contextLabelCol, labelWrap, colon: contextColon, classNames: contextClassNames, styles: contextStyles, tooltip: contextTooltip } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    if (!label) {
        return null;
    }
    const mergedLabelCol = labelCol || contextLabelCol || {};
    const mergedLabelAlign = labelAlign || contextLabelAlign;
    const labelClsBasic = `${prefixCls}-item-label`;
    const labelColClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(labelClsBasic, mergedLabelAlign === 'left' && `${labelClsBasic}-left`, mergedLabelCol.className, {
        [`${labelClsBasic}-wrap`]: !!labelWrap
    });
    let labelChildren = label;
    // Keep label is original where there should have no colon
    const computedColon = colon === true || contextColon !== false && colon !== false;
    const haveColon = computedColon && !vertical;
    // Remove duplicated user input colon
    if (haveColon && typeof label === 'string' && label.trim()) {
        labelChildren = label.replace(/[:|：]\s*$/, '');
    }
    const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$convertToTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tooltip, contextTooltip);
    if (tooltipProps) {
        const tooltipNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...tooltipProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-item-tooltip`,
            onClick: (e)=>{
                e.preventDefault();
            },
            tabIndex: -1
        }, tooltipProps.icon || tooltipProps.children || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)));
        labelChildren = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, labelChildren, tooltipNode);
    }
    // Required Mark
    const isOptionalMark = requiredMark === 'optional';
    const isRenderMark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(requiredMark);
    const hideRequiredMark = requiredMark === false;
    if (isRenderMark) {
        labelChildren = requiredMark(labelChildren, {
            required: !!required
        });
    } else if (isOptionalMark && !required) {
        labelChildren = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, labelChildren, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-item-optional`
        }, formLocale?.optional || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Form?.optional));
    }
    // https://github.com/ant-design/ant-design/pull/52950#discussion_r1980880316
    let markType;
    if (hideRequiredMark) {
        markType = 'hidden';
    } else if (isOptionalMark || isRenderMark) {
        markType = 'optional';
    }
    const labelClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextClassNames?.label, {
        [`${prefixCls}-item-required`]: required,
        [`${prefixCls}-item-required-mark-${markType}`]: markType,
        [`${prefixCls}-item-no-colon`]: !computedColon
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...mergedLabelCol,
        className: labelColClassName
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("label", {
        htmlFor: htmlFor,
        className: labelClassName,
        style: contextStyles?.label,
        title: typeof label === 'string' ? label : undefined
    }, labelChildren));
};
const __TURBOPACK__default__export__ = FormItemLabel;
}),
"[project]/apps/web/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const iconMap = {
    success: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    validating: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function StatusProvider({ children, errors, warnings, hasFeedback, validateStatus, prefixCls, meta, noStyle, name }) {
    const itemPrefixCls = `${prefixCls}-item`;
    const { feedbackIcons } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const mergedValidateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatus"])(errors, warnings, meta, null, !!hasFeedback, validateStatus);
    const { isFormItemInput: parentIsFormItemInput, status: parentStatus, hasFeedback: parentHasFeedback, feedbackIcon: parentFeedbackIcon, name: parentName } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    // ====================== Context =======================
    const formItemStatusContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "StatusProvider.useMemo[formItemStatusContext]": ()=>{
            let feedbackIcon;
            if (hasFeedback) {
                const customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
                const customIconNode = mergedValidateStatus && customIcons?.({
                    status: mergedValidateStatus,
                    errors,
                    warnings
                })?.[mergedValidateStatus];
                const IconNode = mergedValidateStatus ? iconMap[mergedValidateStatus] : null;
                feedbackIcon = customIconNode !== false && IconNode ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${itemPrefixCls}-feedback-icon`, `${itemPrefixCls}-feedback-icon-${mergedValidateStatus}`)
                }, customIconNode || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](IconNode, null)) : null;
            }
            const context = {
                status: mergedValidateStatus || '',
                errors,
                warnings,
                hasFeedback: !!hasFeedback,
                feedbackIcon,
                isFormItemInput: true,
                name
            };
            // No style will follow parent context
            if (noStyle) {
                context.status = (mergedValidateStatus ?? parentStatus) || '';
                context.isFormItemInput = parentIsFormItemInput;
                context.hasFeedback = !!(hasFeedback ?? parentHasFeedback);
                context.feedbackIcon = hasFeedback !== undefined ? context.feedbackIcon : parentFeedbackIcon;
                context.name = name ?? parentName;
            }
            return context;
        }
    }["StatusProvider.useMemo[formItemStatusContext]"], [
        mergedValidateStatus,
        errors,
        warnings,
        hasFeedback,
        feedbackIcons,
        noStyle,
        name,
        parentIsFormItemInput,
        parentStatus,
        itemPrefixCls,
        parentHasFeedback,
        parentFeedbackIcon,
        parentName
    ]);
    // ======================= Render =======================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: formItemStatusContext
    }, children);
}
const __TURBOPACK__default__export__ = StatusProvider;
}),
"[project]/apps/web/node_modules/antd/es/form/FormItem/ItemHolder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemHolder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isVisible$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/isVisible.js [app-client] (ecmascript) <export default as isVisible>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItemInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItemLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)");
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
function ItemHolder(props) {
    const { prefixCls, className, rootClassName, style, help, errors, warnings, validateStatus, meta, hasFeedback, hidden, children, fieldId, required, isRequired, onSubItemMetaChange, layout: propsLayout, name, ...restProps } = props;
    const itemPrefixCls = `${prefixCls}-item`;
    const { requiredMark, layout: formLayout } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const layout = propsLayout || formLayout;
    const vertical = layout === 'vertical';
    // ======================== Margin ========================
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const debounceErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(errors);
    const debounceWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(warnings);
    const hasHelp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(help);
    const hasError = !!(hasHelp || debounceErrors.length || debounceWarnings.length);
    const isOnScreen = !!itemRef.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isVisible$3e$__["isVisible"])(itemRef.current);
    const [marginBottom, setMarginBottom] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "ItemHolder.useLayoutEffect": ()=>{
            if (hasError && itemRef.current) {
                // The element must be part of the DOMTree to use getComputedStyle
                // https://stackoverflow.com/questions/35360711/getcomputedstyle-returns-a-cssstyledeclaration-but-all-properties-are-empty-on-a
                const itemStyle = getComputedStyle(itemRef.current);
                setMarginBottom(Number.parseInt(itemStyle.marginBottom, 10));
            }
        }
    }["ItemHolder.useLayoutEffect"], [
        hasError,
        isOnScreen
    ]);
    const onErrorVisibleChanged = (nextVisible)=>{
        if (!nextVisible && !hasError) {
            setMarginBottom(null);
        }
    };
    // ======================== Status ========================
    const getValidateState = (isDebounce = false)=>{
        const _errors = isDebounce ? debounceErrors : meta.errors;
        const _warnings = isDebounce ? debounceWarnings : meta.warnings;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatus"])(_errors, _warnings, meta, '', !!hasFeedback, validateStatus);
    };
    const mergedValidateStatus = getValidateState();
    // ======================== Render ========================
    const itemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemPrefixCls, className, rootClassName, {
        [`${itemPrefixCls}-with-help`]: hasHelp || debounceErrors.length || debounceWarnings.length,
        // Status
        [`${itemPrefixCls}-has-feedback`]: mergedValidateStatus && hasFeedback,
        [`${itemPrefixCls}-has-success`]: mergedValidateStatus === 'success',
        [`${itemPrefixCls}-has-warning`]: mergedValidateStatus === 'warning',
        [`${itemPrefixCls}-has-error`]: mergedValidateStatus === 'error',
        [`${itemPrefixCls}-is-validating`]: mergedValidateStatus === 'validating',
        [`${itemPrefixCls}-hidden`]: hidden,
        // Layout
        [`${itemPrefixCls}-${layout}`]: layout
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: itemClassName,
        style: style,
        ref: itemRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
        className: `${itemPrefixCls}-row`,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
            '_internalItemRender',
            'colon',
            'dependencies',
            'extra',
            'fieldKey',
            'getValueFromEvent',
            'getValueProps',
            'htmlFor',
            'id',
            // It is deprecated because `htmlFor` is its replacement.
            'initialValue',
            'isListField',
            'label',
            'labelAlign',
            'labelCol',
            'labelWrap',
            'messageVariables',
            'name',
            'normalize',
            'noStyle',
            'preserve',
            'requiredMark',
            'rules',
            'shouldUpdate',
            'trigger',
            'tooltip',
            'validateFirst',
            'validateTrigger',
            'valuePropName',
            'wrapperCol',
            'validateDebounce'
        ])
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        htmlFor: fieldId,
        ...props,
        requiredMark: requiredMark,
        required: required ?? isRequired,
        prefixCls: prefixCls,
        vertical: vertical
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        ...meta,
        errors: debounceErrors,
        warnings: debounceWarnings,
        prefixCls: prefixCls,
        status: mergedValidateStatus,
        help: help,
        marginBottom: marginBottom,
        onErrorVisibleChanged: onErrorVisibleChanged
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoStyleItemContext"].Provider, {
        value: onSubItemMetaChange
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        meta: meta,
        errors: meta.errors,
        warnings: meta.warnings,
        hasFeedback: hasFeedback,
        // Already calculated
        validateStatus: mergedValidateStatus,
        name: name
    }, children)))), !!marginBottom && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${itemPrefixCls}-margin-offset`,
        style: {
            marginBottom: -marginBottom
        }
    }));
}
}),
"[project]/apps/web/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Field$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/Field.js [app-client] (ecmascript) <export default as Field>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldContext$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/FieldContext.js [app-client] (ecmascript) <export default as FieldContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListContext$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/ListContext.js [app-client] (ecmascript) <export default as ListContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useState.js [app-client] (ecmascript) <export default as useState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useChildren.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormItemStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useFormItemStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFrameState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useFrameState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useItemRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useItemRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$ItemHolder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItem/ItemHolder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)");
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
const NAME_SPLIT = '__SPLIT__';
const _ValidateStatuses = [
    'success',
    'warning',
    'error',
    'validating',
    ''
];
// https://github.com/ant-design/ant-design/issues/46417
// `getValueProps` may modify the value props name,
// we should check if the control is similar.
function isSimilarControl(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    return keysA.length === keysB.length && keysA.every((key)=>{
        const propValueA = a[key];
        const propValueB = b[key];
        return propValueA === propValueB || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(propValueA) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(propValueB);
    });
}
const MemoInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((props)=>props.children, (prev, next)=>isSimilarControl(prev.control, next.control) && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every((value, index)=>value === next.childProps[index]));
function genEmptyMeta() {
    return {
        errors: [],
        warnings: [],
        touched: false,
        validating: false,
        name: [],
        validated: false
    };
}
function InternalFormItem(props) {
    const { name, noStyle, className, dependencies, prefixCls: customizePrefixCls, shouldUpdate, rules, children, required, label, messageVariables, trigger = 'onChange', validateTrigger, hidden, help, layout } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { name: formName } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const mergedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children);
    const isRenderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(mergedChildren);
    const notifyParentMetaChange = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoStyleItemContext"]);
    const { validateTrigger: contextValidateTrigger } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldContext$3e$__["FieldContext"]);
    const mergedValidateTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(validateTrigger) ? validateTrigger : contextValidateTrigger;
    const hasName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(name);
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // ========================= Warn =========================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevWarning"])('Form.Item');
    if ("TURBOPACK compile-time truthy", 1) {
        ("TURBOPACK compile-time truthy", 1) ? warning(name !== null, 'usage', '`null` is passed as `name` property') : "TURBOPACK unreachable";
    }
    // ========================= MISC =========================
    // Get `noStyle` required info
    const listContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListContext$3e$__["ListContext"]);
    const fieldKeyPathRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ======================== Errors ========================
    // >>>>> Collect sub field errors
    const [subFieldErrors, setSubFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFrameState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({});
    // >>>>> Current field errors
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useState$3e$__["useState"])({
        "InternalFormItem.useState": ()=>genEmptyMeta()
    }["InternalFormItem.useState"]);
    const onMetaChange = (nextMeta)=>{
        // This keyInfo is not correct when field is removed
        // Since origin keyManager no longer keep the origin key anymore
        // Which means we need cache origin one and reuse when removed
        const keyInfo = listContext?.getKey(nextMeta.name);
        // Destroy will reset all the meta
        setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
        // Bump to parent since noStyle
        if (noStyle && help !== false && notifyParentMetaChange) {
            let namePath = nextMeta.name;
            if (!nextMeta.destroy) {
                if (keyInfo !== undefined) {
                    const [fieldKey, restPath] = keyInfo;
                    namePath = [
                        fieldKey
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restPath));
                    fieldKeyPathRef.current = namePath;
                }
            } else {
                // Use origin cache data
                namePath = fieldKeyPathRef.current || namePath;
            }
            notifyParentMetaChange(nextMeta, namePath);
        }
    };
    // >>>>> Collect noStyle Field error to the top FormItem
    const onSubItemMetaChange = (subMeta, uniqueKeys)=>{
        // Only `noStyle` sub item will trigger
        setSubFieldErrors((prevSubFieldErrors)=>{
            const clone = {
                ...prevSubFieldErrors
            };
            // name: ['user', 1] + key: [4] = ['user', 4]
            const mergedNamePath = [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subMeta.name.slice(0, -1)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uniqueKeys));
            const mergedNameKey = mergedNamePath.join(NAME_SPLIT);
            if (subMeta.destroy) {
                // Remove
                delete clone[mergedNameKey];
            } else {
                // Update
                clone[mergedNameKey] = subMeta;
            }
            return clone;
        });
    };
    // >>>>> Get merged errors
    const [mergedErrors, mergedWarnings] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalFormItem.useMemo": ()=>{
            const errorList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(meta.errors);
            const warningList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(meta.warnings);
            Object.values(subFieldErrors).forEach({
                "InternalFormItem.useMemo": (subFieldError)=>{
                    errorList.push.apply(errorList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subFieldError.errors || []));
                    warningList.push.apply(warningList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subFieldError.warnings || []));
                }
            }["InternalFormItem.useMemo"]);
            return [
                errorList,
                warningList
            ];
        }
    }["InternalFormItem.useMemo"], [
        subFieldErrors,
        meta.errors,
        meta.warnings
    ]);
    // ===================== Children Ref =====================
    const getItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useItemRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // ======================== Render ========================
    function renderLayout(baseChildren, fieldId, isRequired) {
        if (noStyle && !hidden) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                hasFeedback: props.hasFeedback,
                validateStatus: props.validateStatus,
                meta: meta,
                errors: mergedErrors,
                warnings: mergedWarnings,
                noStyle: true,
                name: name
            }, baseChildren);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$ItemHolder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: "row",
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, cssVarCls, rootCls, hashId),
            prefixCls: prefixCls,
            fieldId: fieldId,
            isRequired: isRequired,
            errors: mergedErrors,
            warnings: mergedWarnings,
            meta: meta,
            onSubItemMetaChange: onSubItemMetaChange,
            layout: layout,
            name: name
        }, baseChildren);
    }
    if (!hasName && !isRenderProps && !dependencies) {
        return renderLayout(mergedChildren);
    }
    let variables = {};
    if (typeof label === 'string') {
        variables.label = label;
    } else if (name) {
        variables.label = String(name);
    }
    if (messageVariables) {
        variables = {
            ...variables,
            ...messageVariables
        };
    }
    // >>>>> With Field
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Field$3e$__["Field"], {
        ...props,
        messageVariables: variables,
        trigger: trigger,
        validateTrigger: mergedValidateTrigger,
        onMetaChange: onMetaChange
    }, (control, renderMeta, context)=>{
        const mergedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name).length && renderMeta ? renderMeta.name : [];
        const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldId"])(mergedName, formName);
        const isRequired = required !== undefined ? required : rules?.some((rule)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(rule) && rule.required && !rule.warningOnly) {
                return true;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(rule)) {
                const ruleEntity = rule(context);
                return ruleEntity?.required && !ruleEntity?.warningOnly;
            }
            return false;
        });
        // ======================= Children =======================
        const mergedControl = {
            ...control
        };
        let childNode = null;
        ("TURBOPACK compile-time truthy", 1) ? warning(!(shouldUpdate && dependencies), 'usage', "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps.") : "TURBOPACK unreachable";
        if (Array.isArray(mergedChildren) && hasName) {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item.') : "TURBOPACK unreachable";
            childNode = mergedChildren;
        } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
            ("TURBOPACK compile-time truthy", 1) ? warning(!!(shouldUpdate || dependencies), 'usage', 'A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`.') : "TURBOPACK unreachable";
            ("TURBOPACK compile-time truthy", 1) ? warning(!hasName, 'usage', 'A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.') : "TURBOPACK unreachable";
        } else if (dependencies && !isRenderProps && !hasName) {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Must set `name` or use a render function when `dependencies` is set.') : "TURBOPACK unreachable";
        } else if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](mergedChildren)) {
            ("TURBOPACK compile-time truthy", 1) ? warning(mergedChildren.props.defaultValue === undefined, 'usage', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.') : "TURBOPACK unreachable";
            const childProps = {
                ...mergedChildren.props,
                ...mergedControl
            };
            if (!childProps.id) {
                childProps.id = fieldId;
            }
            if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
                const describedbyArr = [];
                if (help || mergedErrors.length > 0) {
                    describedbyArr.push(`${fieldId}_help`);
                }
                if (props.extra) {
                    describedbyArr.push(`${fieldId}_extra`);
                }
                childProps['aria-describedby'] = describedbyArr.join(' ');
            }
            if (mergedErrors.length > 0) {
                childProps['aria-invalid'] = 'true';
            }
            if (isRequired) {
                childProps['aria-required'] = 'true';
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(mergedChildren)) {
                childProps.ref = getItemRef(mergedName, mergedChildren);
            }
            // We should keep user origin event handler
            const triggers = new Set([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(trigger)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(mergedValidateTrigger))));
            triggers.forEach((eventName)=>{
                childProps[eventName] = (...args)=>{
                    mergedControl[eventName]?.(...args);
                    mergedChildren.props[eventName]?.(...args);
                };
            });
            // List of props that need to be watched for changes -> if changes are detected in MemoInput -> rerender
            const watchingChildProps = [
                childProps['aria-required'],
                childProps['aria-invalid'],
                childProps['aria-describedby']
            ];
            childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MemoInput, {
                control: mergedControl,
                update: mergedChildren,
                childProps: watchingChildProps
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(mergedChildren, childProps));
        } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
            childNode = mergedChildren(context);
        } else {
            ("TURBOPACK compile-time truthy", 1) ? warning(!mergedName.length || !!noStyle, 'usage', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.') : "TURBOPACK unreachable";
            childNode = mergedChildren;
        }
        return renderLayout(childNode, fieldId, isRequired);
    });
}
const FormItem = InternalFormItem;
FormItem.useStatus = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormItemStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = FormItem;
}),
"[project]/apps/web/node_modules/antd/es/form/FormList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormList = ({ prefixCls: customizePrefixCls, children, ...props })=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevWarning"])('Form.List');
        ("TURBOPACK compile-time truthy", 1) ? warning((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(props.name) || (Array.isArray(props.name) ? !!props.name.length : !!props.name), 'usage', 'Miss `name` prop.') : "TURBOPACK unreachable";
    }
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormList.useMemo[contextValue]": ()=>({
                prefixCls,
                status: 'error'
            })
    }["FormList.useMemo[contextValue]"], [
        prefixCls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
        ...props
    }, (fields, operation, meta)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"].Provider, {
            value: contextValue
        }, children(fields.map((field)=>({
                ...field,
                fieldKey: field.key
            })), operation, {
            errors: meta.errors,
            warnings: meta.warnings
        })));
};
const __TURBOPACK__default__export__ = FormList;
}),
"[project]/apps/web/node_modules/antd/es/form/hooks/useFormInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFormInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
function useFormInstance() {
    const { form } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    return form;
}
}),
"[project]/apps/web/node_modules/antd/es/form/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/Form.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/hooks/useWatch.js [app-client] (ecmascript) <export default as useWatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/FormList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useFormInstance.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Form.Item = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.List = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.ErrorList = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.useForm = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"];
Form.useFormInstance = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.useWatch = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__["useWatch"];
Form.Provider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const __TURBOPACK__default__export__ = Form;
}),
"[project]/apps/web/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/index.js [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
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
            let nextCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(valueCells);
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
"[project]/apps/web/node_modules/antd/es/card/CardGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const CardGrid = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, className, hoverable = true, ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefix = getPrefixCls('card', prefixCls);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefix}-grid`, className, {
        [`${prefix}-grid-hoverable`]: hoverable
    });
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CardGrid.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["CardGrid.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        ...rest,
        className: classString
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    CardGrid.displayName = 'CardGrid';
}
const __TURBOPACK__default__export__ = CardGrid;
}),
"[project]/apps/web/node_modules/antd/es/card/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// ============================== Styles ==============================
// ============================== Head ==============================
const genCardHeadStyle = (token)=>{
    const { antCls, componentCls, headerHeight, headerPadding, tabsMarginBottom } = token;
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: headerHeight,
        marginBottom: -1,
        // Fix card grid overflow bug: https://gw.alipayobjects.com/zos/rmsportal/XonYxBikwpgbqIQBeuhk.png
        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPadding)}`,
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: token.headerFontSize,
        background: token.headerBg,
        borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`,
        borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0`,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '&-wrapper': {
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        '&-title': {
            display: 'inline-block',
            flex: 1,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
            [`
          > ${componentCls}-typography,
          > ${componentCls}-typography-edit-content
        `]: {
                insetInlineStart: 0,
                marginTop: 0,
                marginBottom: 0
            }
        },
        [`${antCls}-tabs-top`]: {
            clear: 'both',
            marginBottom: tabsMarginBottom,
            color: token.colorText,
            fontWeight: 'normal',
            fontSize: token.fontSize,
            '&-bar': {
                borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`
            }
        }
    };
};
// ============================== Grid ==============================
const genCardGridStyle = (token)=>{
    const { cardPaddingBase, colorBorderSecondary, cardShadow, lineWidth } = token;
    return {
        width: '33.33%',
        padding: cardPaddingBase,
        border: 0,
        borderRadius: 0,
        boxShadow: `
      ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0 0 ${colorBorderSecondary},
      0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0 ${colorBorderSecondary},
      ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0 ${colorBorderSecondary},
      ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0 0 ${colorBorderSecondary} inset,
      0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0 ${colorBorderSecondary} inset;
    `,
        transition: `all ${token.motionDurationMid}`,
        '&-hoverable:hover': {
            position: 'relative',
            zIndex: 1,
            boxShadow: cardShadow
        }
    };
};
// ============================== Actions ==============================
const genCardActionsStyle = (token)=>{
    const { componentCls, iconCls, actionsLiMargin, cardActionsIconSize, colorBorderSecondary, actionsBg } = token;
    return {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        background: actionsBg,
        borderTop: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
        display: 'flex',
        borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)}`,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '& > li': {
            margin: actionsLiMargin,
            color: token.colorTextDescription,
            textAlign: 'center',
            '> span': {
                position: 'relative',
                display: 'block',
                minWidth: token.calc(token.cardActionsIconSize).mul(2).equal(),
                fontSize: token.fontSize,
                lineHeight: token.lineHeight,
                cursor: 'pointer',
                '&:hover': {
                    color: token.colorPrimary,
                    transition: `color ${token.motionDurationMid}`
                },
                [`a:not(${componentCls}-btn), > ${iconCls}`]: {
                    display: 'inline-block',
                    width: '100%',
                    color: token.colorIcon,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.fontHeight),
                    transition: `color ${token.motionDurationMid}`,
                    '&:hover': {
                        color: token.colorPrimary
                    }
                },
                [`> ${iconCls}`]: {
                    fontSize: cardActionsIconSize,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(cardActionsIconSize).mul(token.lineHeight).equal())
                }
            },
            '&:not(:last-child)': {
                borderInlineEnd: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`
            }
        }
    };
};
// ============================== Meta ==============================
const genCardMetaStyle = (token)=>({
        margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.marginXXS).mul(-1).equal())} 0`,
        display: 'flex',
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '&-avatar': {
            paddingInlineEnd: token.padding
        },
        '&-section': {
            overflow: 'hidden',
            flex: 1,
            '> div:not(:last-child)': {
                marginBottom: token.marginXS
            }
        },
        '&-title': {
            color: token.colorTextHeading,
            fontWeight: token.fontWeightStrong,
            fontSize: token.fontSizeLG,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"]
        },
        '&-description': {
            color: token.colorTextDescription
        }
    });
// ============================== Inner ==============================
const genCardTypeInnerStyle = (token)=>{
    const { componentCls, colorFillAlter, headerPadding, bodyPadding } = token;
    return {
        [`${componentCls}-head`]: {
            padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPadding)}`,
            background: colorFillAlter,
            '&-title': {
                fontSize: token.fontSize
            }
        },
        [`${componentCls}-body`]: {
            padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(bodyPadding)}`
        }
    };
};
// ============================== Loading ==============================
const genCardLoadingStyle = (token)=>{
    const { componentCls } = token;
    return {
        overflow: 'hidden',
        [`${componentCls}-body`]: {
            userSelect: 'none'
        }
    };
};
// ============================== Basic ==============================
const genCardStyle = (token)=>{
    const { componentCls, cardShadow, cardHeadPadding, colorBorderSecondary, boxShadowTertiary, bodyPadding, extraColor, motionDurationMid } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            background: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            [`&:not(${componentCls}-bordered)`]: {
                boxShadow: boxShadowTertiary
            },
            [`${componentCls}-head`]: genCardHeadStyle(token),
            [`${componentCls}-extra`]: {
                // https://stackoverflow.com/a/22429853/3040605
                marginInlineStart: 'auto',
                color: extraColor,
                fontWeight: 'normal',
                fontSize: token.fontSize
            },
            [`${componentCls}-body`]: {
                padding: bodyPadding,
                borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)}`,
                '&:first-child': {
                    borderStartStartRadius: token.borderRadiusLG,
                    borderStartEndRadius: token.borderRadiusLG
                },
                '&:not(:last-child)': {
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`${componentCls}-grid`]: genCardGridStyle(token),
            [`${componentCls}-cover`]: {
                '> *': {
                    display: 'block',
                    width: '100%',
                    borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0`
                }
            },
            [`${componentCls}-actions`]: genCardActionsStyle(token),
            [`${componentCls}-meta`]: genCardMetaStyle(token)
        },
        [`${componentCls}-bordered`]: {
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
            [`${componentCls}-cover`]: {
                marginTop: -1,
                marginInlineStart: -1,
                marginInlineEnd: -1
            }
        },
        [`${componentCls}-hoverable`]: {
            cursor: 'pointer',
            transition: [
                `box-shadow`,
                `border-color`
            ].map((prop)=>`${prop} ${motionDurationMid}`).join(', '),
            '&:hover': {
                borderColor: 'transparent',
                boxShadow: cardShadow
            }
        },
        [`${componentCls}-contain-grid`]: {
            borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0 `,
            // Reset border radius when no head exists
            [`&:not(:has(> ${componentCls}-head))`]: {
                borderRadius: 0
            },
            [`${componentCls}-body`]: {
                display: 'flex',
                flexWrap: 'wrap'
            },
            [`&:not(${componentCls}-loading) ${componentCls}-body`]: {
                marginBlockStart: token.calc(token.lineWidth).mul(-1).equal(),
                marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
                padding: 0
            }
        },
        [`${componentCls}-contain-tabs`]: {
            [`> div${componentCls}-head`]: {
                minHeight: 0,
                [`${componentCls}-head-title, ${componentCls}-extra`]: {
                    paddingTop: cardHeadPadding
                }
            }
        },
        [`${componentCls}-type-inner`]: genCardTypeInnerStyle(token),
        [`${componentCls}-loading`]: genCardLoadingStyle(token),
        [`${componentCls}-rtl`]: {
            direction: 'rtl'
        }
    };
};
// ============================== Size ==============================
const genCardSizeStyle = (token)=>{
    const { componentCls, bodyPaddingSM, headerPaddingSM, headerHeightSM, headerFontSizeSM } = token;
    return {
        [`${componentCls}-small`]: {
            [`> ${componentCls}-head`]: {
                minHeight: headerHeightSM,
                padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPaddingSM)}`,
                fontSize: headerFontSizeSM,
                [`> ${componentCls}-head-wrapper`]: {
                    [`> ${componentCls}-extra`]: {
                        fontSize: token.fontSize
                    }
                }
            },
            [`> ${componentCls}-body`]: {
                padding: bodyPaddingSM
            }
        },
        [`${componentCls}-small${componentCls}-contain-tabs`]: {
            [`> ${componentCls}-head`]: {
                [`${componentCls}-head-title, ${componentCls}-extra`]: {
                    paddingTop: 0,
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        headerBg: 'transparent',
        headerFontSize: token.fontSizeLG,
        headerFontSizeSM: token.fontSize,
        headerHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
        headerHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
        actionsBg: token.colorBgContainer,
        actionsLiMargin: `${token.paddingSM}px 0`,
        tabsMarginBottom: -token.padding - token.lineWidth,
        extraColor: token.colorText,
        bodyPaddingSM: 12,
        // Fixed padding.
        headerPaddingSM: 12,
        bodyPadding: token.bodyPadding ?? token.paddingLG,
        headerPadding: token.headerPadding ?? token.paddingLG
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Card', (token)=>{
    const cardToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        cardShadow: token.boxShadowCard,
        cardHeadPadding: token.padding,
        cardPaddingBase: token.paddingLG,
        cardActionsIconSize: token.fontSize
    });
    return [
        // Style
        genCardStyle(cardToken),
        // Size
        genCardSizeStyle(cardToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/card/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/CardGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/style/index.js [app-client] (ecmascript)");
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
const ActionNode = (props)=>{
    const { actionClasses, actions = [], actionStyle } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        className: actionClasses,
        style: actionStyle
    }, actions.map((action, index)=>{
        // Move this out since eslint not allow index key
        // And eslint-disable makes conflict with rollup
        // ref https://github.com/ant-design/ant-design/issues/46022
        const key = `action-${index}`;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
            style: {
                width: `${100 / actions.length}%`
            },
            key: key
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, action));
    }));
};
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, extra, headStyle = {}, bodyStyle = {}, title, loading, bordered, variant: customVariant, size: customizeSize, type, cover, actions, tabList, children, activeTabKey, defaultActiveTabKey, tabBarExtraContent, hoverable, tabProps = {}, classNames, styles, ...rest } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('card');
    const [variant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('card', customVariant, bordered);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Card');
        warning.deprecated(customizeSize !== 'default', 'size="default"', 'size="medium"');
    }
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size: mergedSize,
        variant: variant
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
    // =================Warning===================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Card');
        [
            [
                'headStyle',
                'styles.header'
            ],
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'bordered',
                'variant'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const onTabChange = (key)=>{
        props.onTabChange?.(key);
    };
    const childNodes = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Card.useMemo[childNodes]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children)
    }["Card.useMemo[childNodes]"], [
        children
    ]);
    const isContainGrid = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Card.useMemo[isContainGrid]": ()=>childNodes.some({
                "Card.useMemo[isContainGrid]": (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }["Card.useMemo[isContainGrid]"])
    }["Card.useMemo[isContainGrid]"], [
        childNodes
    ]);
    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const loadingBlock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        loading: true,
        active: true,
        paragraph: {
            rows: 4
        },
        title: false
    }, children);
    const hasActiveTabKey = activeTabKey !== undefined;
    const extraProps = {
        ...tabProps,
        [hasActiveTabKey ? 'activeKey' : 'defaultActiveKey']: hasActiveTabKey ? activeTabKey : defaultActiveTabKey,
        tabBarExtraContent
    };
    let head;
    const tabSize = mergedSize !== 'small' ? 'large' : mergedSize;
    const tabs = tabList ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        size: tabSize,
        ...extraProps,
        className: `${prefixCls}-head-tabs`,
        onChange: onTabChange,
        items: tabList.map(({ tab, ...item })=>({
                label: tab,
                ...item
            }))
    }) : null;
    if (title || extra || tabs) {
        const headClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-head`, mergedClassNames.header);
        const titleClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-head-title`, mergedClassNames.title);
        const extraClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-extra`, mergedClassNames.extra);
        const mergedHeadStyle = {
            ...headStyle,
            ...mergedStyles.header
        };
        head = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: headClasses,
            style: mergedHeadStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: `${prefixCls}-head-wrapper`
        }, title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: titleClasses,
            style: mergedStyles.title
        }, title), extra && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: extraClasses,
            style: mergedStyles.extra
        }, extra)), tabs);
    }
    const coverClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-cover`, mergedClassNames.cover);
    const coverDom = cover ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: coverClasses,
        style: mergedStyles.cover
    }, cover) : null;
    const bodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-body`, mergedClassNames.body);
    const mergedBodyStyle = {
        ...bodyStyle,
        ...mergedStyles.body
    };
    const body = loading || childNodes.length ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: bodyClasses,
        style: mergedBodyStyle
    }, loading ? loadingBlock : children) : null;
    const actionClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-actions`, mergedClassNames.actions);
    const actionDom = actions?.length ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ActionNode, {
        actionClasses: actionClasses,
        actionStyle: mergedStyles.actions,
        actions: actions
    }) : null;
    const divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(rest, [
        'onTabChange'
    ]);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, {
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-bordered`]: variant !== 'borderless',
        [`${prefixCls}-hoverable`]: hoverable,
        [`${prefixCls}-contain-grid`]: isContainGrid,
        [`${prefixCls}-contain-tabs`]: tabList?.length,
        [`${prefixCls}-small`]: mergedSize === 'small',
        [`${prefixCls}-type-${type}`]: !!type,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls, mergedClassNames.root);
    const mergedStyle = {
        ...mergedStyles.root
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: ref,
        ...divProps,
        className: classString,
        style: mergedStyle
    }, head, coverDom, body, actionDom);
});
if ("TURBOPACK compile-time truthy", 1) {
    Card.displayName = 'Card';
}
const __TURBOPACK__default__export__ = Card;
}),
"[project]/apps/web/node_modules/antd/es/card/CardMeta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CardMeta = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, avatar, title, description, style, classNames: cardMetaClassNames, styles, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('cardMeta');
    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const metaPrefixCls = `${prefixCls}-meta`;
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const styleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        cardMetaClassNames
    ], [
        contextStyles,
        contextStyleRoot,
        styles,
        styleRoot
    ], {
        props
    });
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(metaPrefixCls, className, contextClassName, mergedClassNames.root);
    const rootStyles = {
        ...mergedStyles.root
    };
    const avatarClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${metaPrefixCls}-avatar`, mergedClassNames.avatar);
    const titleClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${metaPrefixCls}-title`, mergedClassNames.title);
    const descriptionClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${metaPrefixCls}-description`, mergedClassNames.description);
    const sectionClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${metaPrefixCls}-section`, mergedClassNames.section);
    const avatarDom = avatar ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: avatarClassNames,
        style: mergedStyles.avatar
    }, avatar) : null;
    const titleDom = title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: titleClassNames,
        style: mergedStyles.title
    }, title) : null;
    const descriptionDom = description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: descriptionClassNames,
        style: mergedStyles.description
    }, description) : null;
    const MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: sectionClassNames,
        style: mergedStyles.section
    }, titleDom, descriptionDom) : null;
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CardMeta.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["CardMeta.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        ...restProps,
        className: rootClassNames,
        style: rootStyles
    }, avatarDom, MetaDetail);
});
if ("TURBOPACK compile-time truthy", 1) {
    CardMeta.displayName = 'CardMeta';
}
const __TURBOPACK__default__export__ = CardMeta;
}),
"[project]/apps/web/node_modules/antd/es/card/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/CardGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/CardMeta.js [app-client] (ecmascript)");
"use client";
;
;
;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Card.Grid = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Card.Meta = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$CardMeta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Card;
}),
"[project]/apps/web/node_modules/antd/es/card/index.js [app-client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/card/index.js [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
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
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(measureDeps)));
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
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(measureDeps)));
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
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(miscDeps)));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
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
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(DECORATION_PROPS.map((key)=>props[key])))
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
"[project]/apps/web/node_modules/antd/es/divider/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
// ============================== Size ================================
const genSizeDividerStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            '&-horizontal': {
                [`&${componentCls}`]: {
                    '&-sm': {
                        marginBlock: token.marginXS
                    },
                    '&-md': {
                        marginBlock: token.margin
                    }
                }
            }
        }
    };
};
// ============================== Shared ==============================
const genSharedDividerStyle = (token)=>{
    const { componentCls, sizePaddingEdgeHorizontal, colorSplit, lineWidth, textPaddingInline, orientationMargin, verticalMarginInline } = token;
    const railCls = `${componentCls}-rail`;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            borderBlockStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid ${colorSplit}`,
            [railCls]: {
                borderBlockStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid ${colorSplit}`
            },
            // vertical
            '&-vertical': {
                position: 'relative',
                top: '-0.06em',
                display: 'inline-block',
                height: '0.9em',
                marginInline: verticalMarginInline,
                marginBlock: 0,
                verticalAlign: 'middle',
                borderTop: 0,
                borderInlineStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} solid ${colorSplit}`
            },
            '&-horizontal': {
                display: 'flex',
                clear: 'both',
                width: '100%',
                minWidth: '100%',
                // Fix https://github.com/ant-design/ant-design/issues/10914
                margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginLG)} 0`
            },
            [`&-horizontal${componentCls}-with-text`]: {
                display: 'flex',
                alignItems: 'center',
                margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.dividerHorizontalWithTextGutterMargin)} 0`,
                color: token.colorTextHeading,
                fontWeight: 500,
                fontSize: token.fontSizeLG,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                borderBlockStart: `0 ${colorSplit}`,
                [`${railCls}-start, ${railCls}-end`]: {
                    width: '50%',
                    // Chrome not accept `inherit` in `border-top`
                    borderBlockStartColor: 'inherit',
                    borderBlockEnd: 0,
                    content: "''"
                }
            },
            [`&-horizontal${componentCls}-with-text-start`]: {
                [`${railCls}-start`]: {
                    width: `calc(${orientationMargin} * 100%)`
                },
                [`${railCls}-end`]: {
                    width: `calc(100% - ${orientationMargin} * 100%)`
                }
            },
            [`&-horizontal${componentCls}-with-text-end`]: {
                [`${railCls}-start`]: {
                    width: `calc(100% - ${orientationMargin} * 100%)`
                },
                [`${railCls}-end`]: {
                    width: `calc(${orientationMargin} * 100%)`
                }
            },
            [`${componentCls}-inner-text`]: {
                display: 'inline-block',
                paddingBlock: 0,
                paddingInline: textPaddingInline
            },
            '&-dashed': {
                background: 'none',
                borderColor: colorSplit,
                borderStyle: 'dashed',
                borderWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0`,
                [railCls]: {
                    borderBlockStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} dashed ${colorSplit}`
                }
            },
            [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
                [`${railCls}-start, ${railCls}-end`]: {
                    borderStyle: 'dashed none none'
                }
            },
            [`&-vertical${componentCls}-dashed`]: {
                borderInlineStartWidth: lineWidth,
                borderInlineEnd: 0,
                borderBlockStart: 0,
                borderBlockEnd: 0
            },
            '&-dotted': {
                background: 'none',
                borderColor: colorSplit,
                borderStyle: 'dotted',
                borderWidth: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} 0 0`,
                [railCls]: {
                    borderBlockStart: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} dotted ${colorSplit}`
                }
            },
            [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
                '&::before, &::after': {
                    borderStyle: 'dotted none none'
                }
            },
            [`&-vertical${componentCls}-dotted`]: {
                borderInlineStartWidth: lineWidth,
                borderInlineEnd: 0,
                borderBlockStart: 0,
                borderBlockEnd: 0
            },
            [`&-plain${componentCls}-with-text`]: {
                color: token.colorText,
                fontWeight: 'normal',
                fontSize: token.fontSize
            },
            [`&-horizontal${componentCls}-with-text-start${componentCls}-no-default-orientation-margin-start`]: {
                [`${railCls}-start`]: {
                    width: 0
                },
                [`${railCls}-end`]: {
                    width: '100%'
                },
                [`${componentCls}-inner-text`]: {
                    paddingInlineStart: sizePaddingEdgeHorizontal
                }
            },
            [`&-horizontal${componentCls}-with-text-end${componentCls}-no-default-orientation-margin-end`]: {
                [`${railCls}-start`]: {
                    width: '100%'
                },
                [`${railCls}-end`]: {
                    width: 0
                },
                [`${componentCls}-inner-text`]: {
                    paddingInlineEnd: sizePaddingEdgeHorizontal
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        textPaddingInline: '1em',
        orientationMargin: 0.05,
        verticalMarginInline: token.marginXS
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Divider', (token)=>{
    const dividerToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        dividerHorizontalWithTextGutterMargin: token.margin,
        sizePaddingEdgeHorizontal: 0
    });
    return [
        genSharedDividerStyle(dividerToken),
        genSizeDividerStyle(dividerToken)
    ];
}, prepareComponentToken, {
    unitless: {
        orientationMargin: true
    }
});
}),
"[project]/apps/web/node_modules/antd/es/divider/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$divider$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/divider/style/index.js [app-client] (ecmascript)");
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
const titlePlacementList = [
    'left',
    'right',
    'center',
    'start',
    'end'
];
const Divider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('divider');
    const { prefixCls: customizePrefixCls, type, orientation, vertical, titlePlacement, orientationMargin, className, rootClassName, children, dashed, variant = 'solid', plain, style, size: customSize, classNames, styles, ...restProps } = props;
    const prefixCls = getPrefixCls('divider', customizePrefixCls);
    const railCls = `${prefixCls}-rail`;
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$divider$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const sizeFullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customSize);
    const hasChildren = !!children;
    const validTitlePlacement = titlePlacementList.includes(orientation || '');
    const mergedTitlePlacement = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Divider.useMemo[mergedTitlePlacement]": ()=>{
            const placement = titlePlacement ?? (validTitlePlacement ? orientation : 'center');
            if (placement === 'left') {
                return direction === 'rtl' ? 'end' : 'start';
            }
            if (placement === 'right') {
                return direction === 'rtl' ? 'start' : 'end';
            }
            return placement;
        }
    }["Divider.useMemo[mergedTitlePlacement]"], [
        direction,
        orientation,
        titlePlacement,
        validTitlePlacement
    ]);
    const hasMarginStart = mergedTitlePlacement === 'start' && orientationMargin != null;
    const hasMarginEnd = mergedTitlePlacement === 'end' && orientationMargin != null;
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, type);
    // ========================= Semantic =========================
    const mergedProps = {
        ...props,
        orientation: mergedOrientation,
        titlePlacement: mergedTitlePlacement,
        size: sizeFullName
    };
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
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, hashId, cssVarCls, `${prefixCls}-${mergedOrientation}`, {
        [`${prefixCls}-with-text`]: hasChildren,
        [`${prefixCls}-with-text-${mergedTitlePlacement}`]: hasChildren,
        [`${prefixCls}-dashed`]: !!dashed,
        [`${prefixCls}-${variant}`]: variant !== 'solid',
        [`${prefixCls}-plain`]: !!plain,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
        [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd,
        [`${prefixCls}-md`]: sizeFullName === 'medium' || sizeFullName === 'middle',
        [`${prefixCls}-sm`]: sizeFullName === 'small',
        [railCls]: !children,
        [mergedClassNames.rail]: mergedClassNames.rail && !children
    }, className, rootClassName, mergedClassNames.root);
    const memoizedPlacementMargin = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Divider.useMemo[memoizedPlacementMargin]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(orientationMargin)) {
                return orientationMargin;
            }
            if (/^\d+$/.test(orientationMargin)) {
                return Number(orientationMargin);
            }
            return orientationMargin;
        }
    }["Divider.useMemo[memoizedPlacementMargin]"], [
        orientationMargin
    ]);
    const innerStyle = {
        marginInlineStart: hasMarginStart ? memoizedPlacementMargin : undefined,
        marginInlineEnd: hasMarginEnd ? memoizedPlacementMargin : undefined
    };
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Divider.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Divider.useImperativeHandle"]);
    // =================== Warning =====================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Divider');
        ("TURBOPACK compile-time truthy", 1) ? warning(!children || !mergedVertical, 'usage', '`children` not working in `vertical` mode.') : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!validTitlePlacement, 'usage', '`orientation` is used for direction, please use `titlePlacement` replace this') : "TURBOPACK unreachable";
        [
            [
                'type',
                'orientation'
            ],
            [
                'orientationMargin',
                'styles.content.margin'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: classString,
        style: {
            ...mergedStyles.root,
            ...children ? {} : mergedStyles.rail,
            ...style
        },
        ...restProps,
        role: "separator"
    }, children && !mergedVertical && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(railCls, `${railCls}-start`, mergedClassNames.rail),
        style: mergedStyles.rail
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-inner-text`, mergedClassNames.content),
        style: {
            ...innerStyle,
            ...mergedStyles.content
        }
    }, children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(railCls, `${railCls}-end`, mergedClassNames.rail),
        style: mergedStyles.rail
    })));
});
if ("TURBOPACK compile-time truthy", 1) {
    Divider.displayName = 'Divider';
}
const __TURBOPACK__default__export__ = Divider;
}),
"[project]/apps/web/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/divider/index.js [app-client] (ecmascript)");
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
]);

//# sourceMappingURL=0rrk_antd_es_06j3ilp._.js.map