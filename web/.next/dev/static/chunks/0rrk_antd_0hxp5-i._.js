(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDocument",
    ()=>isDocument,
    "isFunction",
    ()=>isFunction,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isNonNullable",
    ()=>isNonNullable,
    "isNumber",
    ()=>isNumber,
    "isPlainObject",
    ()=>isPlainObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isReactRenderable",
    ()=>isReactRenderable,
    "isString",
    ()=>isString,
    "isThenable",
    ()=>isThenable,
    "isTransitionEvent",
    ()=>isTransitionEvent,
    "isWindow",
    ()=>isWindow
]);
const isNonNullable = (val)=>{
    return val !== undefined && val !== null;
};
const isReactRenderable = (val)=>{
    return isNonNullable(val) && val !== false && val !== '';
};
const isNumber = (val)=>{
    return typeof val === 'number' && !Number.isNaN(val);
};
const isString = (val)=>{
    return typeof val === 'string';
};
const isPlainObject = (val)=>{
    return val !== null && typeof val === 'object';
};
const isFunction = (val)=>{
    return typeof val === 'function';
};
const isThenable = (val)=>{
    return isNonNullable(val) && isFunction(val.then);
};
const isPrimitive = (val)=>{
    return typeof val !== 'object' && !isFunction(val) || val === null;
};
const isTransitionEvent = (event)=>{
    return isPlainObject(event) && 'propertyName' in event && isString(event.propertyName);
};
const isWindow = (val)=>{
    if (!isNonNullable(val)) {
        return false;
    }
    return val === val.window;
};
const isDocument = (val)=>{
    if (!isNonNullable(val)) {
        return false;
    }
    return val instanceof Document || val.constructor.name === 'HTMLDocument' || val.nodeType === window.Node.DOCUMENT_NODE;
};
const isHTMLElement = (val)=>{
    if (!isNonNullable(val)) {
        return false;
    }
    return typeof HTMLElement !== 'undefined' && val instanceof HTMLElement;
};
}),
"[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WarningContext",
    ()=>WarningContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "devUseWarning",
    ()=>devUseWarning,
    "noop",
    ()=>noop,
    "resetWarned",
    ()=>resetWarned,
    "useDevWarning",
    ()=>useDevWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript) <export default as warning>");
;
;
function noop() {}
const { resetWarned: rcResetWarned } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"];
let deprecatedWarnList = null;
function resetWarned() {
    deprecatedWarnList = null;
    rcResetWarned();
}
let _warning = noop;
if ("TURBOPACK compile-time truthy", 1) {
    _warning = (valid, component, message)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(valid, `[antd: ${component}] ${message}`);
        // StrictMode will inject console which will not throw warning in React 17.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
}
const warning = _warning;
const WarningContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const useDevWarning = ("TURBOPACK compile-time truthy", 1) ? (component)=>{
    const { strict } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) {
            if (strict === false && type === 'deprecated') {
                const existWarning = deprecatedWarnList;
                if (!deprecatedWarnList) {
                    deprecatedWarnList = {};
                }
                deprecatedWarnList[component] = deprecatedWarnList[component] || [];
                if (!deprecatedWarnList[component].includes(message || '')) {
                    deprecatedWarnList[component].push(message || '');
                }
                // Warning for the first time
                if (!existWarning) {
                    console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
                }
            } else {
                ("TURBOPACK compile-time truthy", 1) ? warning(valid, component, message) : "TURBOPACK unreachable";
            }
        }
    };
    typeWarning.deprecated = (valid, oldProp, newProp, message = '')=>{
        typeWarning(valid, 'deprecated', `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${message ? ` ${message}` : ''}`);
    };
    return typeWarning;
} : "TURBOPACK unreachable";
const devUseWarning = useDevWarning;
const __TURBOPACK__default__export__ = warning;
}),
"[project]/apps/web/node_modules/antd/es/form/validateMessagesContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
}),
"[project]/apps/web/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const locale = {
    placeholder: 'Select time',
    rangePlaceholder: [
        'Start time',
        'End time'
    ]
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/apps/web/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/picker/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)");
;
;
// Merge into a locale object
const locale = {
    lang: {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: [
            'Start date',
            'End date'
        ],
        rangeYearPlaceholder: [
            'Start year',
            'End year'
        ],
        rangeQuarterPlaceholder: [
            'Start quarter',
            'End quarter'
        ],
        rangeMonthPlaceholder: [
            'Start month',
            'End month'
        ],
        rangeWeekPlaceholder: [
            'Start week',
            'End week'
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    timePickerLocale: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/apps/web/node_modules/antd/es/calendar/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/pagination/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/calendar/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)");
;
;
;
;
const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
    locale: 'en',
    Pagination: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    DatePicker: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TimePicker: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    global: {
        placeholder: 'Please select',
        close: 'Close',
        sortable: 'sortable',
        show: 'Show',
        hide: 'Hide'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting'
    },
    Tour: {
        Next: 'Next',
        Previous: 'Previous',
        Finish: 'Finish'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse'
    },
    Carousel: {
        prevSlide: 'Previous slide',
        nextSlide: 'Next slide'
    },
    Form: {
        optional: '(optional)',
        defaultValidateMessages: {
            default: 'Field validation error for ${label}',
            required: 'Please enter ${label}',
            enum: '${label} must be one of [${enum}]',
            whitespace: '${label} cannot be a blank character',
            date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
            },
            number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
            },
            array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
            },
            pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
            }
        }
    },
    QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned'
    },
    ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient'
    }
};
const __TURBOPACK__default__export__ = localeValues;
}),
"[project]/apps/web/node_modules/antd/es/modal/locale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeConfirmLocale",
    ()=>changeConfirmLocale,
    "getConfirmLocale",
    ()=>getConfirmLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
;
let runtimeLocale = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Modal
};
let localeList = [];
const generateLocale = ()=>localeList.reduce((merged, locale)=>({
            ...merged,
            ...locale
        }), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        const cloneLocale = {
            ...newLocale
        };
        localeList.push(cloneLocale);
        runtimeLocale = generateLocale();
        return ()=>{
            localeList = localeList.filter((locale)=>locale !== cloneLocale);
            runtimeLocale = generateLocale();
        };
    }
    runtimeLocale = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Modal
    };
}
function getConfirmLocale() {
    return runtimeLocale;
}
}),
"[project]/apps/web/node_modules/antd/es/locale/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const __TURBOPACK__default__export__ = LocaleContext;
}),
"[project]/apps/web/node_modules/antd/es/locale/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANT_MARK",
    ()=>ANT_MARK,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ANT_MARK = 'internalMark';
const LocaleProvider = (props)=>{
    const { locale = {}, children, _ANT_MARK__ } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('LocaleProvider');
        ("TURBOPACK compile-time truthy", 1) ? warning(_ANT_MARK__ === ANT_MARK, 'deprecated', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : "TURBOPACK unreachable";
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "LocaleProvider.useEffect": ()=>{
            const clearLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changeConfirmLocale"])(locale?.Modal);
            return clearLocale;
        }
    }["LocaleProvider.useEffect"], [
        locale
    ]);
    const getMemoizedContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LocaleProvider.useMemo[getMemoizedContextValue]": ()=>({
                ...locale,
                exist: true
            })
    }["LocaleProvider.useMemo[getMemoizedContextValue]"], [
        locale
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: getMemoizedContextValue
    }, children);
};
if ("TURBOPACK compile-time truthy", 1) {
    LocaleProvider.displayName = 'LocaleProvider';
}
const __TURBOPACK__default__export__ = LocaleProvider;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultPresetColors",
    ()=>defaultPresetColors
]);
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = {
    // preset color palettes
    ...defaultPresetColors,
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Focus Outline
    focusOutline: true,
    // Motion
    motion: true
};
const __TURBOPACK__default__export__ = seedToken;
}),
"[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetColors",
    ()=>PresetColors
]);
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genColorMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
;
function genColorMapToken(seed, { generateColorPalettes, generateNeutralColorPalettes }) {
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[1]).mix(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[3]), 50).toHexString();
    const presetColorTokens = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].forEach((colorKey)=>{
        const colorBase = seed[colorKey];
        if (colorBase) {
            const colorPalette = generateColorPalettes(colorBase);
            presetColorTokens[`${colorKey}Hover`] = colorPalette[5];
            presetColorTokens[`${colorKey}Active`] = colorPalette[7];
        }
    });
    return {
        ...neutralColors,
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        ...presetColorTokens,
        colorBgMask: new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    };
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genRadius.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusLG = 16;
    }
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
    } else if (radiusBase >= 16) {
        radiusSM = 8;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
    } else if (radiusBase >= 8) {
        radiusOuter = 6;
    }
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const __TURBOPACK__default__export__ = genRadius;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genCommonMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genRadius.js [app-client] (ecmascript)");
;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return {
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1,
        // radius
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(borderRadius)
    };
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
const __TURBOPACK__default__export__ = genControlHeight;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFontSizes,
    "getLineHeight",
    ()=>getLineHeight
]);
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.E ** (i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)");
;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const __TURBOPACK__default__export__ = genFontMapToken;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSizeMapToken
]);
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3) // 4
    };
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlphaColor",
    ()=>getAlphaColor,
    "getSolidColor",
    ()=>getSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
const getAlphaColor = (baseColor, alpha)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor);
    return instance.darken(brightness).toHexString();
};
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/default/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateColorPalettes",
    ()=>generateColorPalettes,
    "generateNeutralColorPalettes",
    ()=>generateNeutralColorPalettes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-client] (ecmascript)");
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor, shadowColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    const colorShadow = shadowColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorShadow,
        colorText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.88),
        colorTextSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.65),
        colorTextTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.45),
        colorTextQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.25),
        colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.15),
        colorFillSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.06),
        colorFillTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorFillQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.02),
        colorBgSolid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 1),
        colorBgSolidHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.75),
        colorBgSolidActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.95),
        colorBgLayout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 4),
        colorBgContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgElevated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgSpotlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderDisabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 6)
    };
};
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>derivative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/presets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/colors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].magenta;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"].magenta;
    const colorPalettes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPresetColors"]).map((colorKey)=>{
        const colors = token[colorKey] === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"][colorKey] ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"][colorKey] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = {
            ...prev,
            ...cur
        };
        return prev;
    }, {});
    return {
        ...token,
        ...colorPalettes,
        // Colors
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, {
            generateColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalettes"],
            generateNeutralColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNeutralColorPalettes"]
        }),
        // Font
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token.fontSize),
        // Size
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token),
        // Height
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token),
        // Others
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token)
    };
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)");
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript) <export default as defaultTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignTokenContext",
    ()=>DesignTokenContext,
    "defaultConfig",
    ()=>defaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
;
;
;
const defaultConfig = {
    token: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    override: {
        override: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    hashed: true
};
const DesignTokenContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultConfig);
}),
"[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneElement",
    ()=>cloneElement,
    "isFragment",
    ()=>isFragment,
    "replaceElement",
    ()=>replaceElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
function isFragment(child) {
    return child && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
        return replacement;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(props) ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
}),
"[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigConsumer",
    ()=>ConfigConsumer,
    "ConfigContext",
    ()=>ConfigContext,
    "Variants",
    ()=>Variants,
    "defaultIconPrefixCls",
    ()=>defaultIconPrefixCls,
    "defaultPrefixCls",
    ()=>defaultPrefixCls,
    "useComponentConfig",
    ()=>useComponentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const Variants = [
    'outlined',
    'borderless',
    'filled',
    'underlined'
];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) {
        return customizePrefixCls;
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ConfigContext);
    const { getPrefixCls, direction, getPopupContainer, renderEmpty } = context;
    const propValue = context[propName];
    return {
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        ...propValue,
        getPrefixCls,
        direction,
        getPopupContainer,
        renderEmpty
    };
}
}),
"[project]/apps/web/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const MotionContent = ({ children })=>{
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    // This will never reach since we will not render this when no children
    /* istanbul ignore next */ if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionName: `${rootPrefixCls}-fade`,
        motionAppear: true,
        motionEnter: true,
        motionLeave: false,
        removeOnLeave: false
    }, ({ style: motionStyle, className: motionClassName })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, motionClassName),
                style: {
                    ...oriProps.style,
                    ...motionStyle
                }
            }));
    });
};
const __TURBOPACK__default__export__ = MotionContent;
}),
"[project]/apps/web/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript) <export default as UniqueProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const cachedPlacements = [
    null,
    null
];
function uniqueBuiltinPlacements(ori) {
    if (cachedPlacements[0] !== ori) {
        const target = {};
        Object.keys(ori).forEach((placement)=>{
            target[placement] = {
                ...ori[placement],
                dynamicInset: false
            };
        });
        cachedPlacements[0] = ori;
        cachedPlacements[1] = target;
    }
    return cachedPlacements[1];
}
const UniqueProvider = ({ children })=>{
    const renderPopup = (options)=>{
        const { id, builtinPlacements, popup } = options;
        const popupEle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(popup) ? popup() : popup;
        const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
        return {
            ...options,
            getPopupContainer: null,
            arrow: false,
            popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                key: id
            }, popupEle),
            builtinPlacements: parsedPlacements
        };
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__["UniqueProvider"], {
        postTriggerProps: renderPopup
    }, children);
};
const __TURBOPACK__default__export__ = UniqueProvider;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisabledContextProvider",
    ()=>DisabledContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const DisabledContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
const DisabledContextProvider = ({ children, disabled })=>{
    const originDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DisabledContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DisabledContext.Provider, {
        value: disabled ?? originDisabled
    }, children);
};
const __TURBOPACK__default__export__ = DisabledContext;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeContextProvider",
    ()=>SizeContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const SizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const SizeContextProvider = ({ children, size })=>{
    const originSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SizeContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SizeContext.Provider, {
        value: size || originSize
    }, children);
};
const __TURBOPACK__default__export__ = SizeContext;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/hooks/useConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
;
;
;
function useConfig() {
    const componentDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const componentSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return {
        componentDisabled,
        componentSize
    };
}
const __TURBOPACK__default__export__ = useConfig;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/hooks/useTheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEqual$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/isEqual.js [app-client] (ecmascript) <export default as isEqual>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMemo$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useMemo.js [app-client] (ecmascript) <export default as useMemo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
function useTheme(theme, parentTheme, config) {
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"],
        hashed: parentTheme?.hashed ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"].hashed,
        cssVar: parentTheme?.cssVar
    } : parentTheme;
    // Generate a unique key for cssVar
    const themeKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    if ("TURBOPACK compile-time truthy", 1) {
        const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
        const validKey = !!((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(themeConfig.cssVar) && themeConfig.cssVar?.key || themeKey);
        ("TURBOPACK compile-time truthy", 1) ? warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.') : "TURBOPACK unreachable";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMemo$3e$__["useMemo"])({
        "useTheme.useMemo": ()=>{
            if (!theme) {
                return parentTheme;
            }
            // Override
            const mergedComponents = {
                ...parentThemeConfig.components
            };
            Object.keys(theme.components || {}).forEach({
                "useTheme.useMemo": (componentName)=>{
                    mergedComponents[componentName] = {
                        ...mergedComponents[componentName],
                        ...theme.components[componentName]
                    };
                }
            }["useTheme.useMemo"]);
            const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
            const mergedCssVar = {
                prefix: config?.prefixCls,
                // Same as prefixCls by default
                ...parentThemeConfig.cssVar,
                ...themeConfig.cssVar,
                key: themeConfig.cssVar?.key || cssVarKey
            };
            // Base token
            return {
                ...parentThemeConfig,
                ...themeConfig,
                token: {
                    ...parentThemeConfig.token,
                    ...themeConfig.token
                },
                components: mergedComponents,
                cssVar: mergedCssVar
            };
        }
    }["useTheme.useMemo"], [
        themeConfig,
        parentThemeConfig,
        config?.prefixCls,
        themeKey
    ], {
        "useTheme.useMemo": (prev, next)=>prev.some({
                "useTheme.useMemo": (prevTheme, index)=>{
                    const nextTheme = next[index];
                    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isEqual$3e$__["isEqual"])(prevTheme, nextTheme, true);
                }
            }["useTheme.useMemo"])
    }["useTheme.useMemo"]);
}
}),
"[project]/apps/web/node_modules/antd/es/version/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '6.6.1';
}),
"[project]/apps/web/node_modules/antd/es/version/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/version/version.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](frontColor).toRgb();
    if (originAlpha < 1) {
        return frontColor;
    }
    const { r: bR, g: bG, b: bB } = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]({
                r,
                g,
                b,
                a: Math.round(fA * 100) / 100
            }).toRgbString();
        }
    }
    // fallback
    /* istanbul ignore next */ return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const __TURBOPACK__default__export__ = getAlphaColor;
}),
"[project]/apps/web/node_modules/antd/es/theme/util/alias.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)");
;
;
;
function formatToken(derivativeToken) {
    const { override, ...restToken } = derivativeToken;
    const overrideTokens = {
        ...override
    };
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = {
        ...restToken,
        ...overrideTokens
    };
    const shadowBaseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](mergedToken.colorShadow);
    const shadowBaseAlpha = shadowBaseColor.a;
    const getShadowColor = (alpha)=>shadowBaseColor.clone().setA(shadowBaseAlpha * alpha).toRgbString();
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    const screenXXXL = 1920;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = {
        ...mergedToken,
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        colorErrorAffix: mergedToken.colorError,
        colorWarningAffix: mergedToken.colorWarning,
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.focusOutline === false ? 0 : mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowSecondary: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowTertiary: `
      0 1px 2px 0 ${getShadowColor(0.05)},
      0 1px 6px -1px ${getShadowColor(0.03)},
      0 2px 4px 0 ${getShadowColor(0.03)}
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        screenXXLMax: screenXXXL - 1,
        screenXXXL,
        screenXXXLMin: screenXXXL,
        boxShadowPopoverArrow: `2px 2px 5px ${getShadowColor(0.05)}`,
        dropShadowPopover: `drop-shadow(0 6px 16px ${getShadowColor(0.08)}) drop-shadow(0 3px 6px ${getShadowColor(0.12)}) drop-shadow(0 9px 28px ${getShadowColor(0.05)})`,
        boxShadowCard: `
      0 1px 2px -2px ${getShadowColor(0.16)},
      0 3px 6px 0 ${getShadowColor(0.12)},
      0 5px 12px 4px ${getShadowColor(0.09)}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 ${getShadowColor(0.08)},
      -3px 0 6px -4px ${getShadowColor(0.12)},
      -9px 0 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 ${getShadowColor(0.08)},
      3px 0 6px -4px ${getShadowColor(0.12)},
      9px 0 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 ${getShadowColor(0.08)},
      0 3px 6px -4px ${getShadowColor(0.12)},
      0 9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 ${getShadowColor(0.08)},
      0 -3px 6px -4px ${getShadowColor(0.12)},
      0 -9px 28px 8px ${getShadowColor(0.05)}
    `,
        boxShadowTabsOverflowLeft: `inset 10px 0 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowRight: `inset -10px 0 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowTop: `inset 0 10px 8px -8px ${getShadowColor(0.08)}`,
        boxShadowTabsOverflowBottom: `inset 0 -10px 8px -8px ${getShadowColor(0.08)}`,
        // Override AliasToken
        ...overrideTokens
    };
    return aliasToken;
}
}),
"[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useToken,
    "getComputedToken",
    ()=>getComputedToken,
    "ignore",
    ()=>ignore,
    "unitless",
    ()=>unitless
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [app-client] (ecmascript) <export default as useCacheToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/version/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/alias.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true,
    screenXXLMax: true,
    screenXXXL: true,
    screenXXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override, ...components } = overrideToken;
    // Merge with override
    let mergedDerivativeToken = {
        ...derivativeToken,
        override
    };
    // Format if needed
    mergedDerivativeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach(([key, value])=>{
            const { theme: componentTheme, ...componentTokens } = value;
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken({
                    ...mergedDerivativeToken,
                    ...componentTokens
                }, {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar: ctxCssVar, zeroRuntime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"]);
    const { csp, getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const cssVar = {
        prefix: ctxCssVar?.prefix ?? getPrefixCls(),
        key: ctxCssVar?.key ?? 'css-var-root'
    };
    const salt = `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]}-${hashed || ''}`;
    const mergedTheme = theme || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
    const [token, hashId, realToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__["useCacheToken"])(mergedTheme, [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken,
        cssVar: {
            ...cssVar,
            unitless,
            ignore,
            preserve
        },
        nonce: csp?.nonce
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar,
        !!zeroRuntime
    ];
}
}),
"[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/config-provider/MotionWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/context.js [app-client] (ecmascript) <export default as Provider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
"use client";
;
;
;
const MotionCacheContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](true);
if ("TURBOPACK compile-time truthy", 1) {
    MotionCacheContext.displayName = 'MotionCacheContext';
}
function MotionWrapper(props) {
    const parentMotion = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](MotionCacheContext);
    const { children } = props;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const { motion } = token;
    const needWrapMotionProviderRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    needWrapMotionProviderRef.current || (needWrapMotionProviderRef.current = parentMotion !== motion);
    if (needWrapMotionProviderRef.current) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MotionCacheContext.Provider, {
            value: motion
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__["Provider"], {
            motion: motion
        }, children));
    }
    return children;
}
}),
"[project]/apps/web/node_modules/antd/es/config-provider/PropWarning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
"use client";
;
;
/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */ const PropWarning = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((props)=>{
    const { dropdownMatchSelectWidth } = props;
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
    warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
    return null;
});
if ("TURBOPACK compile-time truthy", 1) {
    PropWarning.displayName = 'PropWarning';
}
const __TURBOPACK__default__export__ = ("TURBOPACK compile-time truthy", 1) ? PropWarning : "TURBOPACK unreachable";
}),
"[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearFix",
    ()=>clearFix,
    "genCommonStyle",
    ()=>genCommonStyle,
    "genFocusOutline",
    ()=>genFocusOutline,
    "genFocusStyle",
    ()=>genFocusStyle,
    "genIconStyle",
    ()=>genIconStyle,
    "genLinkStyle",
    ()=>genLinkStyle,
    "operationUnit",
    ()=>operationUnit,
    "resetComponent",
    ()=>resetComponent,
    "resetIcon",
    ()=>resetIcon,
    "textEllipsis",
    ()=>textEllipsis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
"use client";
;
const textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
};
const resetComponent = (token, needInheritFontFamily = false)=>({
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token.lineHeight,
        listStyle: 'none',
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    });
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block',
            verticalAlign: 'inherit'
        }
    });
const loadingCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('loadingCircle', {
    '100%': {
        transform: 'rotate(360deg)'
    }
});
const clearFix = ()=>({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        '&::before': {
            display: 'table',
            content: '""'
        },
        '&::after': {
            // https://github.com/ant-design/ant-design/issues/21864
            display: 'table',
            clear: 'both',
            content: '""'
        }
    });
const genFocusOutline = (token, offset)=>({
        outline: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
        outlineOffset: offset ?? 1,
        transition: [
            `outline-offset`,
            `outline`
        ].map((prop)=>`${prop} 0s`).join(', ')
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': genFocusOutline(token, offset)
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            // remove the gray background on active links in IE 10.
            outline: 'none',
            cursor: 'pointer',
            transition: `color ${token.motionDurationSlow}`,
            '-webkit-text-decoration-skip': 'objects',
            // remove gaps in links underline in iOS 8+ and Safari 8+.
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            // https://github.com/ant-design/ant-design/issues/22503
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            ...genFocusStyle(token),
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
        resetFontStyle = {
            fontFamily: token.fontFamily,
            fontSize: token.fontSize
        };
    }
    return {
        [rootPrefixSelector]: {
            ...resetFontStyle,
            ...resetStyle,
            [prefixSelector]: resetStyle
        }
    };
};
const genIconStyle = (iconPrefixCls)=>({
        [`.${iconPrefixCls}`]: {
            ...resetIcon(),
            '&::before': {
                display: 'none'
            },
            '&[tabindex]': {
                cursor: 'pointer'
            }
        },
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
            display: 'block'
        },
        [`.${iconPrefixCls}-spin`]: {
            animationName: loadingCircle,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        }
    });
const operationUnit = (token)=>({
        // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
        // And Typography use this to generate link style which should not do this.
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        outline: 'none',
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        border: 0,
        padding: 0,
        background: 'none',
        userSelect: 'none',
        ...genFocusStyle(token),
        '&:hover': {
            color: token.colorLinkHover,
            textDecoration: token.linkHoverDecoration
        },
        '&:focus': {
            color: token.colorLinkHover,
            textDecoration: token.linkFocusDecoration
        },
        '&:active': {
            color: token.colorLinkActive,
            textDecoration: token.linkHoverDecoration
        }
    });
}),
"[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useStyleRegister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useStyleRegister$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js [app-client] (ecmascript) <export default as useStyleRegister>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
;
;
;
const useResetIconStyle = (iconPrefixCls, csp)=>{
    const [theme, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Generate style for icons
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useStyleRegister$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useStyleRegister$3e$__["useStyleRegister"])({
        theme,
        token,
        hashId: '',
        path: [
            'ant-design-icons',
            iconPrefixCls
        ],
        nonce: {
            "useResetIconStyle.useStyleRegister": ()=>csp?.nonce
        }["useResetIconStyle.useStyleRegister"],
        layer: {
            name: 'antd'
        }
    }, {
        "useResetIconStyle.useStyleRegister": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genIconStyle"])(iconPrefixCls)
    }["useResetIconStyle.useStyleRegister"]);
};
const __TURBOPACK__default__export__ = useResetIconStyle;
}),
"[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript) <export default as useResetIconStyle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetIconStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript) <export default as useResetIconStyle> <export useResetIconStyle as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResetIconStyle$3e$__["useResetIconStyle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResetIconStyle$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript) <export default as useResetIconStyle>");
}),
"[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configConsumerProps",
    ()=>configConsumerProps,
    "default",
    ()=>__TURBOPACK__default__export__,
    "globalConfig",
    ()=>globalConfig,
    "warnContext",
    ()=>warnContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$StyleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StyleContext$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/StyleContext.js [app-client] (ecmascript) <export default as StyleContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/components/Context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/utils/set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMemo$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useMemo.js [app-client] (ecmascript) <export default as useMemo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/validateMessagesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$MotionWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/MotionWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$PropWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/PropWarning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResetIconStyle$3e$__$3c$export__useResetIconStyle__as__default$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/useResetIconStyle.js [app-client] (ecmascript) <export default as useResetIconStyle> <export useResetIconStyle as default>");
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
/**
 * This component registers icon styles inside the DesignTokenContext.Provider
 * so that CSS variables use the correct cssVar key from the theme config.
 */ const IconStyle = ({ iconPrefixCls, csp })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$useResetIconStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useResetIconStyle$3e$__$3c$export__useResetIconStyle__as__default$3e$__["default"])(iconPrefixCls, csp);
    return null;
};
;
/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */ let existThemeConfig = false;
const warnContext = ("TURBOPACK compile-time truthy", 1) ? (componentName)=>{
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!existThemeConfig, componentName, `Static function can not consume context like dynamic theme. Please use 'App' component instead.`) : "TURBOPACK unreachable";
} : /* istanbul ignore next */ "TURBOPACK unreachable";
;
const configConsumerProps = [
    'getTargetContainer',
    'getPopupContainer',
    'rootPrefixCls',
    'getPrefixCls',
    'renderEmpty',
    'csp',
    'autoInsertSpaceInButton',
    'locale'
];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button'
];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
    return globalPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"];
}
function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"];
}
const setGlobalConfig = (props)=>{
    const { prefixCls, iconPrefixCls, theme, holderRender } = props;
    if (prefixCls !== undefined) {
        globalPrefixCls = prefixCls;
    }
    if (iconPrefixCls !== undefined) {
        globalIconPrefixCls = iconPrefixCls;
    }
    if ('holderRender' in props) {
        globalHolderRender = holderRender;
    }
    if (theme) {
        globalTheme = theme;
    }
};
const globalConfig = ()=>({
        getPrefixCls: (suffixCls, customizePrefixCls)=>{
            if (customizePrefixCls) {
                return customizePrefixCls;
            }
            return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
        },
        getIconPrefixCls: getGlobalIconPrefixCls,
        getRootPrefixCls: ()=>{
            // If Global prefixCls provided, use this
            if (globalPrefixCls) {
                return globalPrefixCls;
            }
            // Fallback to default prefixCls
            return getGlobalPrefixCls();
        },
        getTheme: ()=>globalTheme,
        holderRender: globalHolderRender
    });
const ProviderChildren = (props)=>{
    const { children, csp: customCsp, autoInsertSpaceInButton, alert, affix, anchor, app, form, locale: rawLocale, componentSize, direction, space, splitter, virtual, dropdownMatchSelectWidth, popupMatchSelectWidth, popupOverflow, legacyLocale, parentContext, iconPrefixCls: customIconPrefixCls, theme, componentDisabled, segmented, statistic, spin, calendar, carousel, cascader, collapse, typography, checkbox, descriptions, divider, drawer, skeleton, steps, image, layout, list, listy, mentions, modal, progress, result, slider, breadcrumb, masonry, menu, pagination, input, inputPassword, inputSearch, textArea, otp, empty, badge, borderBeam, radio, rate, ribbon, switch: SWITCH, transfer, avatar, message, tag, table, card, cardMeta, tabs, timeline, timePicker, upload, notification, tree, colorPicker, datePicker, rangePicker, flex, wave, dropdown, warning: warningConfig, tour, tooltip, popover, popconfirm, qrcode, floatButton, floatButtonGroup, variant, inputNumber, treeSelect, watermark } = props;
    // https://github.com/ant-design/ant-design/issues/57295
    const locale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[locale]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(rawLocale) && Object.prototype.hasOwnProperty.call(rawLocale, 'default') && rawLocale.default?.locale) {
                return rawLocale.default;
            }
            return rawLocale;
        }
    }["ProviderChildren.useMemo[locale]"], [
        rawLocale
    ]);
    // =================================== Context ===================================
    const getPrefixCls = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ProviderChildren.useCallback[getPrefixCls]": (suffixCls, customizePrefixCls)=>{
            const { prefixCls } = props;
            if (customizePrefixCls) {
                return customizePrefixCls;
            }
            const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
            return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
        }
    }["ProviderChildren.useCallback[getPrefixCls]"], [
        parentContext.getPrefixCls,
        props.prefixCls
    ]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"];
    const csp = customCsp || parentContext.csp;
    const mergedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme, parentContext.theme, {
        prefixCls: getPrefixCls('')
    });
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        existThemeConfig = existThemeConfig || !!mergedTheme;
    }
    const baseConfig = {
        csp,
        autoInsertSpaceInButton,
        alert,
        affix,
        anchor,
        app,
        locale: locale || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: popupMatchSelectWidth ?? dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic,
        spin,
        calendar,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        inputPassword,
        inputSearch,
        textArea,
        otp,
        layout,
        list,
        listy,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        masonry,
        menu,
        pagination,
        empty,
        badge,
        borderBeam,
        radio,
        rate,
        ribbon,
        switch: SWITCH,
        transfer,
        avatar,
        message,
        tag,
        table,
        card,
        cardMeta,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        tooltip,
        popover,
        popconfirm,
        qrcode,
        floatButton,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect,
        watermark
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const warningFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('ConfigProvider');
        warningFn(!('autoInsertSpaceInButton' in props), 'deprecated', '`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.');
    }
    const config = {
        ...parentContext
    };
    Object.keys(baseConfig).forEach((key)=>{
        if (baseConfig[key] !== undefined) {
            config[key] = baseConfig[key];
        }
    });
    // Pass the props used by `useContext` directly with child component.
    // These props should merged into `config`.
    PASSED_PROPS.forEach((propName)=>{
        const propValue = props[propName];
        if (propValue) {
            config[propName] = propValue;
        }
    });
    if (typeof autoInsertSpaceInButton !== 'undefined') {
        // merge deprecated api
        config.button = {
            autoInsertSpace: autoInsertSpaceInButton,
            ...config.button
        };
    }
    // https://github.com/ant-design/ant-design/issues/27617
    const memoedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMemo$3e$__["useMemo"])({
        "ProviderChildren.useMemo[memoedConfig]": ()=>config
    }["ProviderChildren.useMemo[memoedConfig]"], config, {
        "ProviderChildren.useMemo[memoedConfig]": (prevConfig, currentConfig)=>{
            const prevKeys = Object.keys(prevConfig);
            const currentKeys = Object.keys(currentConfig);
            return prevKeys.length !== currentKeys.length || prevKeys.some({
                "ProviderChildren.useMemo[memoedConfig]": (key)=>prevConfig[key] !== currentConfig[key]
            }["ProviderChildren.useMemo[memoedConfig]"]);
        }
    }["ProviderChildren.useMemo[memoedConfig]"]);
    const { layer } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$StyleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StyleContext$3e$__["StyleContext"]);
    const memoIconContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[memoIconContextValue]": ()=>({
                prefixCls: iconPrefixCls,
                csp,
                layer: layer ? 'antd' : undefined,
                zeroRuntime: !!layer || mergedTheme?.zeroRuntime
            })
    }["ProviderChildren.useMemo[memoIconContextValue]"], [
        iconPrefixCls,
        csp,
        layer,
        mergedTheme?.zeroRuntime
    ]);
    let childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](IconStyle, {
        iconPrefixCls: iconPrefixCls,
        csp: csp
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$PropWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        dropdownMatchSelectWidth: dropdownMatchSelectWidth
    }), children);
    const validateMessages = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[validateMessages]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Form?.defaultValidateMessages || {}, memoedConfig.locale?.Form?.defaultValidateMessages || {}, memoedConfig.form?.validateMessages || {}, form?.validateMessages || {})
    }["ProviderChildren.useMemo[validateMessages]"], [
        memoedConfig,
        form?.validateMessages
    ]);
    if (Object.keys(validateMessages).length > 0) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: validateMessages
        }, childNode);
    }
    if (locale) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            locale: locale,
            _ANT_MARK__: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ANT_MARK"]
        }, childNode);
    }
    if (iconPrefixCls || csp) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$Context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: memoIconContextValue
        }, childNode);
    }
    if (componentSize) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeContextProvider"], {
            size: componentSize
        }, childNode);
    }
    // =================================== Motion ===================================
    childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$MotionWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null, childNode);
    // ================================ Tooltip Unique ===============================
    if (tooltip?.unique) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null, childNode);
    }
    // ================================ Dynamic theme ================================
    const memoTheme = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ProviderChildren.useMemo[memoTheme]": ()=>{
            const { algorithm, token, components, cssVar, ...rest } = mergedTheme || {};
            const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(algorithm) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
            const parsedComponents = {};
            Object.entries(components || {}).forEach({
                "ProviderChildren.useMemo[memoTheme]": ([componentName, componentToken])=>{
                    const parsedToken = {
                        ...componentToken
                    };
                    if ('algorithm' in parsedToken) {
                        if (parsedToken.algorithm === true) {
                            parsedToken.theme = themeObj;
                        } else if (Array.isArray(parsedToken.algorithm) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(parsedToken.algorithm)) {
                            parsedToken.theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(parsedToken.algorithm);
                        }
                        delete parsedToken.algorithm;
                    }
                    parsedComponents[componentName] = parsedToken;
                }
            }["ProviderChildren.useMemo[memoTheme]"]);
            const mergedToken = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                ...token
            };
            return {
                ...rest,
                theme: themeObj,
                token: mergedToken,
                components: parsedComponents,
                override: {
                    override: mergedToken,
                    ...parsedComponents
                },
                cssVar
            };
        }
    }["ProviderChildren.useMemo[memoTheme]"], [
        mergedTheme
    ]);
    if (theme) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"].Provider, {
            value: memoTheme
        }, childNode);
    }
    // ================================== Warning ===================================
    if (memoedConfig.warning) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningContext"].Provider, {
            value: memoedConfig.warning
        }, childNode);
    }
    // =================================== Render ===================================
    if (componentDisabled !== undefined) {
        childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledContextProvider"], {
            disabled: componentDisabled
        }, childNode);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"].Provider, {
        value: memoedConfig
    }, childNode);
};
const ConfigProvider = (props)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const antLocale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ProviderChildren, {
        parentContext: context,
        legacyLocale: antLocale,
        ...props
    });
};
ConfigProvider.ConfigContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"];
ConfigProvider.SizeContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Object.defineProperty(ConfigProvider, 'SizeContext', {
    get: ()=>{
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'ConfigProvider', 'ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.') : "TURBOPACK unreachable";
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
});
if ("TURBOPACK compile-time truthy", 1) {
    ConfigProvider.displayName = 'ConfigProvider';
}
const __TURBOPACK__default__export__ = ConfigProvider;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals> <export default as ConfigProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fill object structure by schema, initialize empty objects for keys with `_default` property.
 */ __turbopack_context__.s([
    "fillObjectBySchema",
    ()=>fillObjectBySchema
]);
const fillObjectBySchema = (obj, schema)=>{
    const newObj = {
        ...obj
    };
    Object.keys(schema).forEach((key)=>{
        if (schema[key]._default) {
            newObj[key] || (newObj[key] = {});
        } else {
            newObj[key] = fillObjectBySchema(newObj[key], schema[key]);
        }
    });
    return newObj;
};
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeStyles",
    ()=>mergeStyles,
    "resolveStyleOrClass",
    ()=>resolveStyleOrClass,
    "useMergeSemantic",
    ()=>useMergeSemantic,
    "useSemanticRootStyle",
    ()=>useSemanticRootStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const mergeClassNames = (schema = {}, ...classNames)=>{
    return classNames.filter((item)=>Boolean(item)).reduce((acc, cur)=>{
        // Loop keys of the current classNames
        Object.keys(cur).forEach((key)=>{
            const keySchema = schema[key];
            const curVal = cur[key];
            if (keySchema) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(curVal)) {
                    // Loop fill
                    acc[key] = mergeClassNames(keySchema, acc[key], curVal);
                } else {
                    // Convert string to object structure
                    const { _default: defaultField } = keySchema;
                    if (defaultField) {
                        acc[key] = acc[key] || {};
                        acc[key][defaultField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(acc[key][defaultField], curVal);
                    }
                }
            } else {
                // Flatten fill
                acc[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(acc[key], curVal);
            }
        });
        return acc;
    }, {});
};
const useSemanticClassNames = (schema, ...classNames)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSemanticClassNames.useMemo": ()=>mergeClassNames.apply(void 0, [
                schema
            ].concat(classNames))
    }["useSemanticClassNames.useMemo"], [
        schema
    ].concat(classNames));
};
const mergeStyles = (...styles)=>{
    return styles.filter((item)=>Boolean(item)).reduce((acc, cur = {})=>{
        Object.keys(cur).forEach((key)=>{
            acc[key] = {
                ...acc[key],
                ...cur[key]
            };
        });
        return acc;
    }, {});
};
const useSemanticStyles = (...styles)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSemanticStyles.useMemo": ()=>mergeStyles.apply(void 0, styles)
    }["useSemanticStyles.useMemo"], [].concat(styles));
};
const useSemanticRootStyle = (style, key = 'root')=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSemanticRootStyle.useMemo": ()=>style ? {
                [key]: style
            } : undefined
    }["useSemanticRootStyle.useMemo"], [
        style,
        key
    ]);
};
const resolveStyleOrClass = (value, info)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value) ? value(info) : value;
};
const useMergeSemantic = (classNamesList, stylesList, info, schema)=>{
    const resolvedClassNamesList = classNamesList.map((classNames)=>classNames ? resolveStyleOrClass(classNames, info) : undefined);
    const resolvedStylesList = stylesList.map((styles)=>styles ? resolveStyleOrClass(styles, info) : undefined);
    const mergedClassNames = useSemanticClassNames.apply(void 0, [
        schema
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolvedClassNamesList)));
    const mergedStyles = useSemanticStyles.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolvedStylesList));
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMergeSemantic.useMemo": ()=>{
            if (!schema) {
                return [
                    mergedClassNames,
                    mergedStyles
                ];
            }
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillObjectBySchema"])(mergedClassNames, schema),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillObjectBySchema"])(mergedStyles, schema)
            ];
        }
    }["useMergeSemantic.useMemo"], [
        mergedClassNames,
        mergedStyles,
        schema
    ]);
};
}),
"[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */ const useCSSVarCls = (prefixCls)=>`${prefixCls}-css-var`;
const __TURBOPACK__default__export__ = useCSSVarCls;
}),
"[project]/apps/web/node_modules/antd/es/notification/hooks/useStackConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const useStackConfig = (stackConfig, defaultStackConfig)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useStackConfig.useMemo": ()=>{
            const mergedStackConfig = stackConfig ?? defaultStackConfig;
            if (!mergedStackConfig) {
                return false;
            }
            return {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(defaultStackConfig) ? defaultStackConfig : {},
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(mergedStackConfig) ? mergedStackConfig : {}
            };
        }
    }["useStackConfig.useMemo"], [
        stackConfig,
        defaultStackConfig
    ]);
const __TURBOPACK__default__export__ = useStackConfig;
}),
"[project]/apps/web/node_modules/antd/es/notification/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCloseIconConfig",
    ()=>getCloseIconConfig,
    "getMotion",
    ()=>getMotion,
    "getPlacementOffsetStyle",
    ()=>getPlacementOffsetStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
function getPlacementOffsetStyle(top, bottom) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(top) && {
            '--notification-top': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(top)
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(bottom) && {
            '--notification-bottom': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(bottom)
        }
    };
}
function getMotion(prefixCls) {
    return {
        motionName: `${prefixCls}-fade`
    };
}
function getCloseIconConfig(closeIcon, notificationConfig, notification) {
    if (typeof closeIcon !== 'undefined') {
        return closeIcon;
    }
    if (typeof notificationConfig?.closeIcon !== 'undefined') {
        return notificationConfig.closeIcon;
    }
    return notification?.closeIcon;
}
}),
"[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ZIndexContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ZIndexContext.displayName = 'ZIndexContext';
}
const __TURBOPACK__default__export__ = ZIndexContext;
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTAINER_MAX_OFFSET",
    ()=>CONTAINER_MAX_OFFSET,
    "consumerBaseZIndexOffset",
    ()=>consumerBaseZIndexOffset,
    "containerBaseZIndexOffset",
    ()=>containerBaseZIndexOffset,
    "useZIndex",
    ()=>useZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
;
;
;
;
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */ const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
const isContainerType = (type)=>{
    return type in containerBaseZIndexOffset;
};
const useZIndex = (componentType, customZIndex)=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const parentZIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== undefined) {
        result = [
            customZIndex,
            customZIndex
        ];
    } else {
        let zIndex = parentZIndex ?? 0;
        if (isContainer) {
            zIndex += // Use preset token zIndex by default but not stack when has parent container
            (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
            containerBaseZIndexOffset[componentType];
        } else {
            zIndex += consumerBaseZIndexOffset[componentType];
        }
        result = [
            parentZIndex === undefined ? customZIndex : zIndex,
            zIndex
        ];
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        ("TURBOPACK compile-time truthy", 1) ? warning(customZIndex !== undefined || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.') : "TURBOPACK unreachable";
    }
    return result;
};
}),
"[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genComponentStyleHook",
    ()=>genComponentStyleHook,
    "genCssVar",
    ()=>genCssVar,
    "genStyleHooks",
    ()=>genStyleHooks,
    "genSubStyleComponent",
    ()=>genSubStyleComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [app-client] (ecmascript) <export default as genStyleUtils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
;
;
;
;
;
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__["genStyleUtils"])({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar, zeroRuntime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar,
            zeroRuntime
        };
    },
    useCSP: ()=>{
        const { csp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        return csp ?? {};
    },
    getResetStyles: (token, config)=>{
        const linkStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genLinkStyle"])(token);
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genIconStyle"])(config?.prefix.iconPrefixCls ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"])
        ];
    },
    getCommonStyle: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCommonStyle"],
    getCompUnitless: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unitless"]
});
const genCssVar = (antCls, component)=>{
    const cssPrefix = `--${antCls.replace(/\./g, '')}-${component}-`;
    const varName = (name)=>{
        return `${cssPrefix}${name}`;
    };
    const varRef = (name, fallback)=>{
        return fallback ? `var(${cssPrefix}${name}, ${fallback})` : `var(${cssPrefix}${name})`;
    };
    return [
        varName,
        varRef
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/notification/style/notification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genListItemSharedStyle",
    ()=>genListItemSharedStyle,
    "genPurePanelStyle",
    ()=>genPurePanelStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
// ============================== Shared ==============================
/** Generate motion transitions shared by notification-like notice cards. */ const genNotificationItemMotionStyle = (token)=>{
    const { motionDurationMid, motionEaseInOut } = token;
    const transition = `${motionDurationMid} ${motionEaseInOut}`;
    return {
        transform: 'scale(var(--notification-scale, 1))',
        transition: [
            'transform',
            'inset',
            'clip-path',
            'opacity'
        ].map((property)=>`${property} ${transition}`).join(', ')
    };
};
const genListItemSharedStyle = (token, config)=>{
    const { componentCls, antCls, colorSuccess, colorInfo, colorWarning, colorError, colorTextHeading, colorText, boxShadow, borderRadiusLG, fontSize, lineHeight, notificationBg, notificationPadding, notificationMarginEdge, margin, calc } = token;
    const noticeCls = `${componentCls}-notice`;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'notification');
    return {
        [noticeCls]: {
            // ============================== Base ==============================
            position: 'absolute',
            width: config.width,
            maxWidth: `calc(100vw - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(notificationMarginEdge).mul(2).equal())})`,
            padding: notificationPadding,
            pointerEvents: 'auto',
            [varName('icon-font-size')]: config.iconFontSize,
            [varName('title-font-size')]: config.titleFontSize,
            [varName('title-line-height')]: config.titleLineHeight,
            boxSizing: 'border-box',
            color: colorText,
            background: notificationBg,
            borderRadius: borderRadiusLG,
            boxShadow,
            fontSize,
            lineHeight,
            wordWrap: 'break-word',
            overflow: 'visible',
            ...genNotificationItemMotionStyle(token),
            ...config.noticeStyle,
            '&::after': {
                position: 'absolute',
                insetInline: 0,
                top: calc(margin).mul(-1).equal(),
                height: margin,
                content: '""'
            },
            // ============================== Type ==============================
            ...config.typeStyle && {
                '&-success': {
                    background: varRef('color-success-bg', notificationBg)
                },
                '&-error': {
                    background: varRef('color-error-bg', notificationBg)
                },
                '&-info': {
                    background: varRef('color-info-bg', notificationBg)
                },
                '&-warning': {
                    background: varRef('color-warning-bg', notificationBg)
                }
            }
        },
        // ============================ Wrapper ============================
        [`${noticeCls}-wrapper`]: {
            display: 'flex',
            ...config.contentStyle
        },
        [`${noticeCls}-title`]: {
            color: colorTextHeading,
            fontSize: varRef('title-font-size'),
            lineHeight: varRef('title-line-height')
        },
        // ============================= Icon =============================
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${noticeCls}-icon`]: {
            flex: 'none',
            fontSize: varRef('icon-font-size'),
            lineHeight: 1,
            [`&${noticeCls}-icon-success`]: {
                color: colorSuccess
            },
            [`&${noticeCls}-icon-info, &${noticeCls}-icon-loading`]: {
                color: colorInfo
            },
            [`&${noticeCls}-icon-warning`]: {
                color: colorWarning
            },
            [`&${noticeCls}-icon-error`]: {
                color: colorError
            }
        }
    };
};
// =========================== Notification ===========================
/** Generate the complete notice item styles for Notification. */ const genNotificationItemStyle = (token)=>{
    const { componentCls, progressBg, notificationProgressHeight, fontSize, borderRadiusLG, width, notificationIconSize, colorText, motionDurationMid, fontSizeLG, lineHeightLG, marginSM, marginXS, paddingLG, notificationPaddingVertical, notificationPaddingHorizontal, notificationCloseButtonSize, colorIcon, borderRadiusSM, colorIconHover, colorBgTextHover, colorBgTextActive } = token;
    const noticeCls = `${componentCls}-notice`;
    return {
        ...genListItemSharedStyle(token, {
            width,
            iconFontSize: notificationIconSize,
            titleFontSize: fontSizeLG,
            titleLineHeight: lineHeightLG,
            contentStyle: {
                alignItems: 'flex-start',
                gap: marginSM
            },
            typeStyle: true
        }),
        [`${noticeCls}-section`]: {
            display: 'flex',
            flexDirection: 'column',
            flex: 'auto',
            gap: marginXS,
            minWidth: 0
        },
        [`${noticeCls}-description`]: {
            color: colorText,
            fontSize
        },
        [`${noticeCls}-closable`]: {
            [`${noticeCls}-title, ${noticeCls}-description`]: {
                paddingInlineEnd: paddingLG
            },
            [`${noticeCls}-title + ${noticeCls}-description`]: {
                paddingInlineEnd: 0
            }
        },
        // ============================ Close =============================
        [`${noticeCls}-close`]: {
            position: 'absolute',
            top: notificationPaddingVertical,
            insetInlineEnd: notificationPaddingHorizontal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: notificationCloseButtonSize,
            height: notificationCloseButtonSize,
            color: colorIcon,
            background: 'none',
            border: 'none',
            borderRadius: borderRadiusSM,
            outline: 'none',
            transition: [
                'color',
                'background-color'
            ].map((prop)=>`${prop} ${motionDurationMid}`).join(', '),
            '&:hover': {
                color: colorIconHover,
                backgroundColor: colorBgTextHover
            },
            '&:active': {
                backgroundColor: colorBgTextActive
            },
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)
        },
        // =========================== Progress ===========================
        [`${noticeCls}-progress`]: {
            position: 'absolute',
            bottom: 0,
            display: 'block',
            appearance: 'none',
            inlineSize: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG)} * 2)`,
            blockSize: notificationProgressHeight,
            border: 0,
            left: {
                _skip_check_: true,
                value: borderRadiusLG
            },
            right: {
                _skip_check_: true,
                value: borderRadiusLG
            },
            '&, &::-webkit-progress-bar': {
                borderRadius: borderRadiusLG,
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
            },
            '&::-moz-progress-bar': {
                background: progressBg
            },
            '&::-webkit-progress-value': {
                borderRadius: borderRadiusLG,
                background: progressBg
            }
        },
        // ============================ Action ============================
        [`${noticeCls}-actions`]: {
            float: 'right',
            marginTop: marginSM
        }
    };
};
const genPurePanelStyle = (token)=>{
    const { componentCls, width } = token;
    const noticeCls = `${componentCls}-notice`;
    const actionsCls = `${noticeCls}-actions`;
    const notificationItemStyle = genNotificationItemStyle(token);
    return {
        [`${noticeCls}-pure-panel`]: {
            width,
            maxWidth: '100%',
            ...notificationItemStyle,
            [noticeCls]: {
                ...notificationItemStyle[noticeCls],
                position: 'relative',
                width: '100%',
                maxWidth: '100%'
            },
            [actionsCls]: {
                ...notificationItemStyle[actionsCls],
                float: 'none',
                textAlign: 'end'
            }
        }
    };
};
// ============================== Export ==============================
/** Wrap Notification item styles under the component root selector. */ const genNotificationStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: genNotificationItemStyle(token)
    };
};
const __TURBOPACK__default__export__ = genNotificationStyle;
}),
"[project]/apps/web/node_modules/antd/es/notification/interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPlacements",
    ()=>NotificationPlacements
]);
const NotificationPlacements = [
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight'
];
}),
"[project]/apps/web/node_modules/antd/es/notification/style/placement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/interface.js [app-client] (ecmascript)");
;
;
const notificationMarginEdgeVar = '--notification-margin-edge';
// ============================== Shared ==============================
/** Resolve the opposite block and inline edges for a placement. */ const getPlacementOffset = (vertical, horizontal)=>({
        blockEnd: vertical === 'top' ? 'bottom' : 'top',
        inlineEnd: horizontal === 'left' ? 'right' : 'left'
    });
/** Convert placement offsets into the transform used by notice motion. */ const getMotionTransform = (motionOffset)=>{
    const x = motionOffset?.x ?? '0';
    const y = motionOffset?.y ?? '0';
    return `translate3d(${x}, ${y}, 0) scale(var(--notification-scale, 1))`;
};
/** Build the placement metadata used by position and motion styles. */ const getPlacementStyleConfig = (placement, motionOffset)=>{
    const vertical = placement.startsWith('bottom') ? 'bottom' : 'top';
    const horizontal = placement.endsWith('Right') ? 'right' : 'left';
    const { blockEnd, inlineEnd } = getPlacementOffset(vertical, horizontal);
    const isCenterPlacement = placement === 'top' || placement === 'bottom';
    const offset = placement === 'top' || placement.endsWith('Left') ? `-${motionOffset}` : motionOffset;
    return {
        placement,
        vertical,
        blockEnd,
        horizontal,
        inlineEnd,
        motionOffset: isCenterPlacement ? {
            x: '-50%',
            y: offset
        } : {
            x: offset
        },
        baseMotionOffset: isCenterPlacement ? {
            x: '-50%'
        } : undefined,
        isCenterPlacement
    };
};
/** Get the list direction for a vertical placement. */ const getPlacementFlexDirection = (vertical)=>vertical === 'bottom' ? 'column-reverse' : 'column';
/** Keep configured top/bottom as the visible notice edge while list padding preserves shadows. */ const getPlacementInset = (vertical)=>{
    const marginEdge = `var(${notificationMarginEdgeVar}, 0px)`;
    return `calc(var(--notification-${vertical}, ${marginEdge}) - ${marginEdge})`;
};
/** Get the transform origin used by stacked notice scaling. */ const getPlacementTransformOrigin = (vertical)=>vertical === 'bottom' ? 'center top' : 'center bottom';
/** Calculate the clip offset that preserves stack shadows. */ const getStackShadowClipOffset = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.marginXXL).mul(-1).equal());
/** Build the default stack clip-path for a visible notice. */ const getStackNoticeClipPath = (token)=>{
    const offset = getStackShadowClipOffset(token);
    return `inset(${offset} ${offset} ${offset} ${offset})`;
};
/** Build the collapsed stack clip-path for a placement. */ const getPlacementStackClipPath = (token, vertical)=>{
    const offset = getStackShadowClipOffset(token);
    return vertical === 'bottom' ? `inset(${offset} ${offset} 50% ${offset})` : `inset(50% ${offset} ${offset} ${offset})`;
};
// ============================= Placement =============================
/** Generate styles for a single notification placement. */ const genPlacementStyle = (token, config)=>{
    const { componentCls } = token;
    const { placement, vertical, blockEnd, horizontal, inlineEnd, // Horizontal centered
    isCenterPlacement } = config;
    const noticeCls = `${componentCls}-notice`;
    const noticeMotionCls = `${noticeCls}${componentCls}-fade`;
    // Transform used for enter start and leave end states.
    const enterTransform = getMotionTransform(config.motionOffset);
    // Transform used when fully visible; top/bottom keep translateX(-50%) for centering.
    const baseTransform = getMotionTransform(config.baseMotionOffset);
    const transformOrigin = getPlacementTransformOrigin(vertical);
    return {
        [`&${componentCls}-${placement}`]: {
            [vertical]: getPlacementInset(vertical),
            [blockEnd]: 'auto',
            display: 'flex',
            flexDirection: getPlacementFlexDirection(vertical),
            ...isCenterPlacement ? {
                marginInline: 0,
                left: '50%',
                right: 'auto',
                transform: 'translateX(-50%)'
            } : {
                [horizontal]: 0,
                [inlineEnd]: 'auto'
            },
            [noticeCls]: {
                [vertical]: 'var(--notification-y, 0)',
                ...isCenterPlacement ? {
                    left: '50%',
                    transform: baseTransform
                } : {
                    [horizontal]: 'var(--notification-x, 0)'
                },
                transformOrigin
            },
            [`${noticeMotionCls}-appear-prepare, ${noticeMotionCls}-enter-prepare`]: {
                opacity: 0,
                transform: enterTransform,
                transition: 'none'
            },
            [`${noticeMotionCls}-appear-start, ${noticeMotionCls}-enter-start`]: {
                opacity: 0,
                transform: enterTransform
            },
            [`${noticeMotionCls}-appear-active, ${noticeMotionCls}-enter-active`]: {
                opacity: 1,
                transform: baseTransform
            },
            [`${noticeMotionCls}-leave-start`]: {
                opacity: 1,
                transform: baseTransform
            },
            [`${noticeMotionCls}-leave-active`]: {
                opacity: 0,
                transform: enterTransform
            },
            [`&${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
                [noticeCls]: {
                    clipPath: getPlacementStackClipPath(token, vertical)
                },
                [`${noticeCls}[data-notification-index='0']`]: {
                    clipPath: getStackNoticeClipPath(token)
                }
            }
        }
    };
};
/** Generate placement styles for all enabled notification placements. */ const genNotificationPlacementRootStyle = (token, placements = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationPlacements"])=>{
    const { notificationMotionOffset } = token;
    const motionOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(notificationMotionOffset);
    return {
        ...placements.reduce((styles, placement)=>({
                ...styles,
                ...genPlacementStyle(token, getPlacementStyleConfig(placement, motionOffset))
            }), {})
    };
};
// ============================== Export ==============================
/** Wrap placement styles under the component root selector. */ const genNotificationPlacementStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: genNotificationPlacementRootStyle(token)
    };
};
const __TURBOPACK__default__export__ = genNotificationPlacementStyle;
}),
"[project]/apps/web/node_modules/antd/es/notification/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PurePanelStyle",
    ()=>PurePanelStyle,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareNotificationToken",
    ()=>prepareNotificationToken,
    "sharedGenerateStyle",
    ()=>sharedGenerateStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$placement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/placement.js [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_COLLAPSED_STACK_VISIBLE_COUNT = 3;
// =============================== Token ===============================
/** Provide default public ComponentToken values for Notification. */ const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTAINER_MAX_OFFSET"] + 50,
        width: 384,
        progressBg: `linear-gradient(90deg, ${token.colorPrimaryBorderHover}, ${token.colorPrimary})`,
        // Fix notification background color issue
        // https://github.com/ant-design/ant-design/issues/55649
        // https://github.com/ant-design/ant-design/issues/56055
        colorSuccessBg: undefined,
        colorErrorBg: undefined,
        colorInfoBg: undefined,
        colorWarningBg: undefined
    });
const prepareNotificationToken = (token)=>{
    const notificationPaddingVertical = token.paddingMD;
    const notificationPaddingHorizontal = token.paddingLG;
    const notificationToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        notificationBg: token.colorBgElevated,
        notificationPaddingVertical,
        notificationPaddingHorizontal,
        notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
        notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
        notificationMarginBottom: token.margin,
        notificationPadding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingMD)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingContentHorizontalLG)}`,
        notificationMarginEdge: token.marginLG,
        notificationProgressHeight: 2,
        notificationMotionOffset: 64
    });
    return notificationToken;
};
// =============================== List ================================
/** Build a clip-path inset that keeps stack shadows visible. */ const getStackNoticeClipPath = (offset)=>`inset(${offset} ${offset} ${offset} ${offset})`;
/** Generate shared list content and motion base styles. */ const genNotificationListContentStyle = (token)=>{
    const { componentCls, motionDurationMid, motionDurationSlow, motionEaseInOut } = token;
    const listCls = `${componentCls}-list`;
    const listContentCls = `${listCls}-content`;
    return {
        [listContentCls]: {
            position: 'relative',
            display: 'flex',
            flexShrink: 0,
            flexDirection: 'column',
            gap: token.notificationMarginBottom,
            width: '100%',
            willChange: 'height, transform',
            transition: 'none',
            [`&${listContentCls}-decrease`]: {
                transition: `height calc(${motionDurationSlow} * 2) ${motionEaseInOut} ${motionDurationMid}`
            }
        },
        // ============================ Motion ============================
        [`${componentCls}-fade`]: {
            backfaceVisibility: 'hidden',
            willChange: 'transform, opacity'
        }
    };
};
/** Generate the root holder, list, stack, and RTL styles for notifications. */ const genNotificationListStyle = (token, config)=>{
    const { componentCls, notificationMarginEdge } = token;
    const notificationMarginEdgeVar = '--notification-margin-edge';
    const noticeCls = `${componentCls}-notice`;
    const listCls = `${componentCls}-list`;
    const listWidth = config.listWidthKey ? token.calc(token[config.listWidthKey]).add(token.calc(notificationMarginEdge).mul(2)).equal() : '100%';
    const stackVisibleCount = config.stackVisibleCount ?? DEFAULT_COLLAPSED_STACK_VISIBLE_COUNT;
    const noticeBeyondStackVisibleCountCls = `${noticeCls}:nth-last-child(n + ${stackVisibleCount + 1})`;
    const stackShadowClipOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.marginXXL).mul(-1).equal());
    const stackNoticeClipPath = getStackNoticeClipPath(stackShadowClipOffset);
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            [notificationMarginEdgeVar]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(notificationMarginEdge),
            // ============================ Holder ============================
            position: 'fixed',
            zIndex: token.zIndexPopup,
            width: listWidth,
            maxWidth: '100vw',
            height: '100vh',
            overflow: 'hidden',
            overscrollBehavior: 'contain',
            [`${componentCls}-hook-holder`]: {
                position: 'relative'
            },
            // ============================= List =============================
            [`&${listCls}`]: {
                maxHeight: '100vh',
                padding: `var(${notificationMarginEdgeVar})`,
                overflowX: 'hidden',
                overflowY: 'auto',
                overscrollBehavior: 'contain',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                pointerEvents: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none',
                    width: 0,
                    height: 0
                }
            },
            ...genNotificationListContentStyle(token),
            // ============================ Stack ============================
            [`&${componentCls}-stack`]: {
                [noticeCls]: {
                    clipPath: stackNoticeClipPath
                },
                [`&:not(${componentCls}-stack-expanded)`]: {
                    [noticeCls]: {
                        '--notification-scale': 'calc(1 - min(var(--notification-index, 0), 2) * 0.06)'
                    },
                    [`${noticeCls}:not(${noticeCls}-stack-in-threshold)`]: {
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    [noticeBeyondStackVisibleCountCls]: {
                        opacity: 0,
                        pointerEvents: 'none'
                    }
                }
            },
            // ============================== RTL =============================
            '&-rtl': {
                direction: 'rtl',
                [`${noticeCls}-actions`]: {
                    float: 'left'
                }
            }
        }
    };
};
const PurePanelStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Notification',
    'PurePanel'
], (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genPurePanelStyle"])(prepareNotificationToken(token)), prepareComponentToken);
const sharedGenerateStyle = (token, config)=>{
    const itemStyle = config.itemStyle ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return [
        genNotificationListStyle(token, config),
        itemStyle(token),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$placement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token)
    ];
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Notification', (token)=>{
    const notificationToken = prepareNotificationToken(token);
    return sharedGenerateStyle(notificationToken, {
        listWidthKey: 'width'
    });
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/message/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PurePanelStyle",
    ()=>PurePanelStyle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
// =============================== Token ===============================
/** Map Message component tokens onto the shared Notification token shape. */ const prepareMessageToken = (token)=>{
    const messagePaddingVertical = token.calc(token.controlHeightLG).sub(token.calc(token.fontSize).mul(token.lineHeight)).div(2).equal();
    const messagePaddingHorizontal = token.paddingSM;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareNotificationToken"])(token), {
        notificationBg: token.contentBg,
        notificationPadding: token.contentPadding,
        notificationPaddingVertical: messagePaddingVertical,
        notificationPaddingHorizontal: messagePaddingHorizontal
    });
};
/** Provide default public ComponentToken values for Message. */ const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTAINER_MAX_OFFSET"] + 10,
        contentBg: token.colorBgElevated,
        contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
    });
// =============================== Base ===============================
/** Generate the shared item card styles for Message notices. */ const genMessageItemStyle = (token)=>{
    const { fontSize, fontSizeLG, lineHeight } = token;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genListItemSharedStyle"])(token, {
        // Adjust card style since Message is not same as Notification.
        // Message needs horizontal center and not fix width.
        width: 'max-content',
        iconFontSize: fontSizeLG,
        titleFontSize: fontSize,
        titleLineHeight: lineHeight,
        contentStyle: {
            alignItems: 'center',
            gap: token.marginXS
        },
        noticeStyle: {
            zIndex: 1
        }
    });
};
// =============================== Stack ===============================
/** Generate the collapsed stack placeholder styles for Message notices. */ const generateMessageStackStyle = (token)=>{
    const { componentCls } = token;
    const noticeCls = `${componentCls}-notice`;
    const listContentCls = `${componentCls}-list-content`;
    const messageItemStyle = genMessageItemStyle(token);
    const { '&::after': _hoverAfterStyle, ...messageNoticeStyle } = messageItemStyle[noticeCls];
    const placeholderStyle = {
        ...messageNoticeStyle,
        position: 'absolute',
        zIndex: -1,
        left: '50%',
        height: token.calc(token.marginXS).mul(2).equal(),
        padding: 0,
        boxShadow: token.boxShadowTertiary,
        opacity: 0,
        pointerEvents: 'none',
        transform: 'translateX(-50%) translateY(100%)',
        transition: [
            `opacity ${token.motionDurationFast} ${token.motionEaseInOut}`,
            `transform ${token.motionDurationFast} ${token.motionEaseInOut}`,
            `width ${token.motionDurationSlow} ${token.motionEaseInOut}`
        ].join(', '),
        content: '""'
    };
    return {
        [componentCls]: {
            [`&${componentCls}-stack`]: {
                [listContentCls]: {
                    isolation: 'isolate',
                    '&::before': {
                        ...placeholderStyle,
                        top: `calc(var(--top-notificiation-height) - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXS)})`,
                        width: `calc(var(--top-notificiation-width) - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.margin)})`
                    },
                    '&::after': {
                        ...placeholderStyle,
                        zIndex: -2,
                        top: 'var(--top-notificiation-height)',
                        width: `calc(var(--top-notificiation-width) - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.margin).mul(2).equal())})`
                    }
                },
                [`&:not(${componentCls}-stack-expanded)`]: {
                    [listContentCls]: {
                        '&::before, &::after': {
                            opacity: 1,
                            transform: 'translateX(-50%) translateY(0)'
                        }
                    }
                }
            }
        }
    };
};
// ============================= PurePanel =============================
/** Generate standalone PurePanel styles for Message. */ const generateMessagePurePanelStyle = (token)=>{
    const { componentCls } = token;
    const noticeCls = `${componentCls}-notice`;
    const messageItemStyle = genMessageItemStyle(token);
    return {
        [`${noticeCls}-pure-panel`]: {
            width: 'max-content',
            maxWidth: '100%',
            ...messageItemStyle,
            [noticeCls]: {
                ...messageItemStyle[noticeCls],
                position: 'relative',
                width: 'max-content',
                maxWidth: '100%'
            }
        }
    };
};
const PurePanelStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Message',
    'PurePanel'
], (token)=>generateMessagePurePanelStyle(prepareMessageToken(token)), prepareComponentToken);
// ============================== Export ==============================
/** Wrap Message item styles under the component root selector. */ const generateMessageStyle = (token)=>({
        [token.componentCls]: genMessageItemStyle(token)
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Message', (token)=>{
    const messageToken = prepareMessageToken(token);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sharedGenerateStyle"])(messageToken, {
            stackVisibleCount: 1,
            itemStyle: generateMessageStyle
        }),
        generateMessageStackStyle(messageToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/message/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeIcon",
    ()=>TypeIcon,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMessageIcon",
    ()=>getMessageIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/Notification.js [app-client] (ecmascript) <export default as Notification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/style/index.js [app-client] (ecmascript)");
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
const TypeIcon = {
    info: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    success: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    error: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    warning: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    loading: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
};
const getMessageIcon = (type, icon)=>icon || type && TypeIcon[type] || null;
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: staticPrefixCls, className, style, type, icon, content, classNames: messageClassNames, styles, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('message');
    const prefixCls = staticPrefixCls || getPrefixCls('message');
    const noticePrefixCls = `${prefixCls}-notice`;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        messageClassNames
    ], [
        contextStyles,
        styles
    ], {
        props: props
    });
    const iconNode = getMessageIcon(type, icon);
    const typeIconCls = type ? `${noticePrefixCls}-icon-${type}` : undefined;
    const rcClassNames = {
        wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(type && `${prefixCls}-${type}`, mergedClassNames.wrapper),
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(typeIconCls, mergedClassNames.icon),
        title: mergedClassNames.title
    };
    const rcStyles = {
        wrapper: mergedStyles.wrapper,
        icon: mergedStyles.icon,
        title: mergedStyles.title
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls, mergedClassNames.root),
        style: mergedStyles.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PurePanelStyle"], {
        prefixCls: prefixCls
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification$3e$__["Notification"], {
        ...restProps,
        prefixCls: prefixCls,
        className: contextClassName,
        style: {
            ...contextStyle,
            ...style
        },
        duration: null,
        icon: iconNode,
        title: content,
        classNames: rcClassNames,
        styles: rcStyles
    }));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/apps/web/node_modules/antd/es/message/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMotion",
    ()=>getMotion,
    "wrapPromiseFn",
    ()=>wrapPromiseFn
]);
function getMotion(prefixCls, transitionName) {
    return {
        motionName: transitionName ?? `${prefixCls}-fade`
    };
}
function wrapPromiseFn(openFn) {
    let closeFn;
    const closePromise = new Promise((resolve)=>{
        closeFn = openFn(()=>{
            resolve(true);
        });
    });
    const result = ()=>{
        closeFn?.();
    };
    result.then = (filled, rejected)=>closePromise.then(filled, rejected);
    result.promise = closePromise;
    return result;
}
}),
"[project]/apps/web/node_modules/antd/es/message/useMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMessage,
    "useInternalMessage",
    ()=>useInternalMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/NotificationProvider.js [app-client] (ecmascript) <export default as NotificationProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/hooks/useNotification.js [app-client] (ecmascript) <export default as useNotification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$hooks$2f$useStackConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/hooks/useStackConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/util.js [app-client] (ecmascript)");
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
const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const DEFAULT_STACK_CONFIG = false;
const Wrapper = ({ children, prefixCls })=>{
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__["NotificationProvider"], {
        classNames: {
            list: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, rootCls)
        }
    }, children);
};
const renderNotifications = (node, { prefixCls, key })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Wrapper, {
        prefixCls: prefixCls,
        key: key
    }, node);
const Holder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { // Placement
    top, // Config
    prefixCls: staticPrefixCls, getContainer: staticGetContainer, maxCount, duration = DEFAULT_DURATION, // Style
    rtl, classNames, styles, // Motion
    transitionName, // UI
    pauseOnHover = true, stack, // Life Cycle
    onAllRemoved } = props;
    const { getPrefixCls, direction, getPopupContainer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('message');
    const { message } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = staticPrefixCls || getPrefixCls('message');
    // Use useMergeSemantic to merge classNames and styles
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(message?.style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        message?.classNames,
        classNames
    ], [
        message?.styles,
        contextStyleRoot,
        styles
    ], {
        props: props
    });
    // =============================== Style ===============================
    const getStyle = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlacementOffsetStyle"])(top ?? DEFAULT_OFFSET);
    const getClassName = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            [`${prefixCls}-rtl`]: rtl ?? direction === 'rtl'
        });
    // ============================== Motion ===============================
    const getNotificationMotion = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(prefixCls, transitionName);
    // =============================== Stack ===============================
    const stackConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$hooks$2f$useStackConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stack, DEFAULT_STACK_CONFIG);
    // ============================== Origin ===============================
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__["useNotification"])({
        prefixCls,
        style: getStyle,
        className: getClassName,
        motion: getNotificationMotion,
        // closable=false requires-no closeIcon
        closable: false,
        duration,
        getContainer: {
            "Holder.useRcNotification": ()=>staticGetContainer?.() || getPopupContainer?.() || document.body
        }["Holder.useRcNotification"],
        maxCount,
        onAllRemoved,
        classNames: mergedClassNames,
        styles: mergedStyles,
        renderNotifications,
        pauseOnHover,
        stack: stackConfig
    });
    // ================================ Ref ================================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Holder.useImperativeHandle": ()=>({
                ...api,
                prefixCls,
                message
            })
    }["Holder.useImperativeHandle"]);
    return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
    const holderRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Message');
    // ================================ API ================================
    const wrapAPI = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useInternalMessage.useMemo[wrapAPI]": ()=>{
            // Wrap with notification content
            // >>> close
            const close = {
                "useInternalMessage.useMemo[wrapAPI].close": (key)=>{
                    holderRef.current?.close(key);
                }
            }["useInternalMessage.useMemo[wrapAPI].close"];
            // >>> Open
            const open = {
                "useInternalMessage.useMemo[wrapAPI].open": (config)=>{
                    if (!holderRef.current) {
                        ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : "TURBOPACK unreachable";
                        const fakeResult = {
                            "useInternalMessage.useMemo[wrapAPI].open.fakeResult": ()=>{}
                        }["useInternalMessage.useMemo[wrapAPI].open.fakeResult"];
                        fakeResult.then = ({
                            "useInternalMessage.useMemo[wrapAPI].open": ()=>{}
                        })["useInternalMessage.useMemo[wrapAPI].open"];
                        return fakeResult;
                    }
                    const { open: originOpen, prefixCls, message } = holderRef.current;
                    const contextClassName = message?.className || {};
                    const noticePrefixCls = `${prefixCls}-notice`;
                    const { content, icon, type, key, className, style, onClose, classNames: configClassNames = {}, styles = {}, ...restConfig } = config;
                    let mergedKey = key;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(mergedKey)) {
                        keyIndex += 1;
                        mergedKey = `antd-message-${keyIndex}`;
                    }
                    const contextConfig = {
                        ...messageConfig,
                        ...config
                    };
                    const semanticClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyleOrClass"])(configClassNames, {
                        props: contextConfig
                    });
                    const semanticStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyleOrClass"])(styles, {
                        props: contextConfig
                    });
                    const iconNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessageIcon"])(type, icon);
                    const typeIconCls = type ? `${noticePrefixCls}-icon-${type}` : undefined;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPromiseFn"])({
                        "useInternalMessage.useMemo[wrapAPI].open": (resolve)=>{
                            originOpen({
                                ...restConfig,
                                key: mergedKey,
                                icon: iconNode,
                                title: content,
                                classNames: {
                                    ...semanticClassNames,
                                    wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(type && `${prefixCls}-${type}`, semanticClassNames?.wrapper),
                                    icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(typeIconCls, semanticClassNames?.icon)
                                },
                                styles: semanticStyles,
                                placement: 'top',
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                                    [`${noticePrefixCls}-${type}`]: type
                                }, className, contextClassName),
                                style,
                                onClose: {
                                    "useInternalMessage.useMemo[wrapAPI].open": ()=>{
                                        onClose?.();
                                        resolve();
                                    }
                                }["useInternalMessage.useMemo[wrapAPI].open"]
                            });
                            // Return close function
                            return ({
                                "useInternalMessage.useMemo[wrapAPI].open": ()=>{
                                    close(mergedKey);
                                }
                            })["useInternalMessage.useMemo[wrapAPI].open"];
                        }
                    }["useInternalMessage.useMemo[wrapAPI].open"]);
                }
            }["useInternalMessage.useMemo[wrapAPI].open"];
            // >>> destroy
            const destroy = {
                "useInternalMessage.useMemo[wrapAPI].destroy": (key)=>{
                    if (key !== undefined) {
                        close(key);
                    } else {
                        holderRef.current?.destroy();
                    }
                }
            }["useInternalMessage.useMemo[wrapAPI].destroy"];
            const clone = {
                open,
                destroy
            };
            const keys = [
                'info',
                'success',
                'warning',
                'error',
                'loading'
            ];
            keys.forEach({
                "useInternalMessage.useMemo[wrapAPI]": (type)=>{
                    const typeOpen = {
                        "useInternalMessage.useMemo[wrapAPI].typeOpen": (jointContent, duration, onClose)=>{
                            let config;
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(jointContent) && 'content' in jointContent) {
                                config = jointContent;
                            } else {
                                config = {
                                    content: jointContent
                                };
                            }
                            // Params
                            let mergedDuration;
                            let mergedOnClose;
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(duration)) {
                                mergedOnClose = duration;
                            } else {
                                mergedDuration = duration;
                                mergedOnClose = onClose;
                            }
                            const mergedConfig = {
                                onClose: mergedOnClose,
                                duration: mergedDuration,
                                ...config,
                                type
                            };
                            return open(mergedConfig);
                        }
                    }["useInternalMessage.useMemo[wrapAPI].typeOpen"];
                    clone[type] = typeOpen;
                }
            }["useInternalMessage.useMemo[wrapAPI]"]);
            return clone;
        }
    }["useInternalMessage.useMemo[wrapAPI]"], []);
    // ============================== Return ===============================
    return [
        wrapAPI,
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Holder, {
            key: "message-holder",
            ...messageConfig,
            ref: holderRef
        })
    ];
}
function useMessage(messageConfig) {
    return useInternalMessage(messageConfig);
}
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/usePatchElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePatchElement",
    ()=>usePatchElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const usePatchElement = ()=>{
    const [elements, setElements] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const patchElement = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "usePatchElement.useCallback[patchElement]": (element)=>{
            // append a new element to elements (and create a new ref)
            setElements({
                "usePatchElement.useCallback[patchElement]": (originElements)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(originElements), [
                        element
                    ])
            }["usePatchElement.useCallback[patchElement]"]);
            // return a function that removes the new element out of elements (and create a new ref)
            // it works a little like useEffect
            return ({
                "usePatchElement.useCallback[patchElement]": ()=>{
                    setElements({
                        "usePatchElement.useCallback[patchElement]": (originElements)=>originElements.filter({
                                "usePatchElement.useCallback[patchElement]": (ele)=>ele !== element
                            }["usePatchElement.useCallback[patchElement]"])
                    }["usePatchElement.useCallback[patchElement]"]);
                }
            })["usePatchElement.useCallback[patchElement]"];
        }
    }["usePatchElement.useCallback[patchElement]"], []);
    return [
        elements,
        patchElement
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/_util/fallbackProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Search for the first non-undefined value in the arguments and return it.
 *
 * ```js
 * const mergedIcon = fallbackProp(propIcon, contextIcon, defaultIcon);
 * ```
 *
 * Note: it is different from `??` operator which skips null
 */ __turbopack_context__.s([
    "default",
    ()=>fallbackProp
]);
function fallbackProp(...args) {
    return args.find((arg)=>arg !== undefined);
}
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useMergedMask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeMaskConfig",
    ()=>normalizeMaskConfig,
    "useMergedMask",
    ()=>useMergedMask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
const normalizeMaskConfig = (mask, maskClosable)=>{
    let maskConfig = {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(mask)) {
        maskConfig = mask;
    }
    if (typeof mask === 'boolean') {
        maskConfig = {
            enabled: mask
        };
    }
    if (maskConfig.closable === undefined && maskClosable !== undefined) {
        maskConfig.closable = maskClosable;
    }
    return maskConfig;
};
const useMergedMask = (mask, contextMask, prefixCls, maskClosable)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMergedMask.useMemo": ()=>{
            const maskConfig = normalizeMaskConfig(mask, maskClosable);
            const contextMaskConfig = normalizeMaskConfig(contextMask);
            const mergedConfig = {
                blur: false,
                ...contextMaskConfig,
                ...maskConfig,
                closable: maskConfig.closable ?? maskClosable ?? contextMaskConfig.closable ?? true
            };
            const className = mergedConfig.blur ? `${prefixCls}-mask-blur` : undefined;
            return [
                mergedConfig.enabled !== false,
                {
                    mask: className
                },
                !!mergedConfig.closable
            ];
        }
    }["useMergedMask.useMemo"], [
        mask,
        contextMask,
        prefixCls,
        maskClosable
    ]);
};
}),
"[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTransitionName",
    ()=>getTransitionName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>({
        height: node?.scrollHeight ?? 0,
        opacity: node ? 1 : 0
    });
const getCurrentHeight = (node)=>({
        height: node?.offsetHeight ?? 0
    });
const skipOpacityTransition = (_, event)=>{
    return event?.deadline === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransitionEvent"])(event) && event.propertyName === 'height';
};
const initCollapseMotion = (rootCls = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"])=>({
        motionName: `${rootCls}-motion-collapse`,
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    });
const _SelectPlacements = [
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
];
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (transitionName !== undefined) {
        return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
};
;
const __TURBOPACK__default__export__ = initCollapseMotion;
}),
"[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
;
;
;
;
const useLocale = (componentName, defaultLocale)=>{
    const fullLocale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const getLocale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocale]": ()=>{
            const locale = defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][componentName];
            const localeFromContext = fullLocale?.[componentName] ?? {};
            return {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(locale) ? locale() : locale,
                ...localeFromContext || {}
            };
        }
    }["useLocale.useMemo[getLocale]"], [
        componentName,
        defaultLocale,
        fullLocale
    ]);
    const getLocaleCode = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocaleCode]": ()=>{
            const localeCode = fullLocale?.locale;
            // Had use LocaleProvide but didn't set locale
            if (fullLocale?.exist && !localeCode) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale;
            }
            return localeCode;
        }
    }["useLocale.useMemo[getLocaleCode]"], [
        fullLocale
    ]);
    return [
        getLocale,
        getLocaleCode
    ];
};
const __TURBOPACK__default__export__ = useLocale;
}),
"[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genWaveStyle = (token)=>{
    const { componentCls, colorPrimary, motionDurationSlow, motionEaseInOut, motionEaseOutCirc, antCls } = token;
    const [, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'wave');
    return {
        [componentCls]: {
            position: 'absolute',
            background: 'transparent',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            color: varRef('color', colorPrimary),
            boxShadow: `0 0 0 0 currentcolor`,
            opacity: 0.2,
            // =================== Motion ===================
            '&.wave-motion-appear': {
                transition: [
                    `box-shadow 0.4s`,
                    `opacity 2s`
                ].map((prop)=>`${prop} ${motionEaseOutCirc}`).join(','),
                '&-active': {
                    boxShadow: `0 0 0 6px currentcolor`,
                    opacity: 0
                },
                '&.wave-quick': {
                    transition: [
                        `box-shadow`,
                        `opacity`
                    ].map((prop)=>`${prop} ${motionDurationSlow} ${motionEaseInOut}`).join(',')
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genComponentStyleHook"])('Wave', genWaveStyle);
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TARGET_CLS",
    ()=>TARGET_CLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
;
const TARGET_CLS = `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"]}-wave-target`;
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTargetWaveColor",
    ()=>getTargetWaveColor,
    "isValidWaveColor",
    ()=>isValidWaveColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
const isValidWaveColor = (color)=>{
    if (!color) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(color) && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && !/rgba\((?:\d*, ){3}0\)/i.test(color) && // any transparent rgba color
    !/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i.test(color) && // any transparent hex color
    color !== 'transparent' && color !== 'canvastext';
};
function getTargetWaveColor(node, colorSource = null) {
    const style = getComputedStyle(node);
    const { borderTopColor, borderColor, backgroundColor } = style;
    if (colorSource && isValidWaveColor(style[colorSource])) {
        return style[colorSource];
    }
    return [
        borderTopColor,
        borderColor,
        backgroundColor
    ].find(isValidWaveColor) ?? null;
}
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/WaveEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/React/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/util.js [app-client] (ecmascript)");
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
function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props)=>{
    const { className, target, component, colorSource } = props;
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(rootPrefixCls, 'wave');
    // ===================== Effect =====================
    const [waveColor, setWaveColor] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [borderRadius, setBorderRadius] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [left, setLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [top, setTop] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [enabled, setEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const waveStyle = {
        left,
        top,
        width,
        height,
        borderRadius: borderRadius.map((radius)=>`${radius}px`).join(' ')
    };
    if (waveColor) {
        waveStyle[varName('color')] = waveColor;
    }
    function syncPos() {
        const nodeStyle = getComputedStyle(target);
        // Get wave color from target
        setWaveColor((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTargetWaveColor"])(target, colorSource));
        const isStatic = nodeStyle.position === 'static';
        // Rect
        const { borderLeftWidth, borderTopWidth } = nodeStyle;
        setLeft(isStatic ? target.offsetLeft : validateNum(-Number.parseFloat(borderLeftWidth)));
        setTop(isStatic ? target.offsetTop : validateNum(-Number.parseFloat(borderTopWidth)));
        setWidth(target.offsetWidth);
        setHeight(target.offsetHeight);
        // Get border radius
        const { borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius } = nodeStyle;
        setBorderRadius([
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius
        ].map((radius)=>validateNum(Number.parseFloat(radius))));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "WaveEffect.useEffect": ()=>{
            if (target) {
                // We need delay to check position here
                // since UI may change after click
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])({
                    "WaveEffect.useEffect.id": ()=>{
                        syncPos();
                        setEnabled(true);
                    }
                }["WaveEffect.useEffect.id"]);
                // Add resize observer to follow size
                let resizeObserver;
                if (typeof ResizeObserver !== 'undefined') {
                    resizeObserver = new ResizeObserver(syncPos);
                    resizeObserver.observe(target);
                }
                return ({
                    "WaveEffect.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(id);
                        resizeObserver?.disconnect();
                    }
                })["WaveEffect.useEffect"];
            }
        }
    }["WaveEffect.useEffect"], [
        target
    ]);
    if (!enabled) {
        return null;
    }
    const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && target?.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_CLS"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionAppear: true,
        motionName: "wave-motion",
        motionDeadline: 5000,
        onAppearEnd: (_, event)=>{
            if (event.deadline || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransitionEvent"])(event) && event.propertyName === 'opacity') {
                const holder = divRef.current?.parentElement;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unmount"])(holder).then(()=>{
                    holder?.remove();
                });
            }
            return false;
        }
    }, ({ className: motionClassName }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(divRef, ref),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, motionClassName, {
                'wave-quick': isSmallComponent
            }),
            style: waveStyle
        }));
};
const showWaveEffect = (target, info)=>{
    const { component } = info;
    // Skip for unchecked checkbox
    if (component === 'Checkbox' && !target.querySelector('input')?.checked) {
        return;
    }
    // Create holder
    const holder = document.createElement('div');
    holder.style.position = 'absolute';
    holder.style.left = '0px';
    holder.style.top = '0px';
    target?.insertBefore(holder, target?.firstChild);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](WaveEffect, {
        ...info,
        target: target
    }), holder);
};
const __TURBOPACK__default__export__ = showWaveEffect;
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/useWave.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript) <export default as raf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/WaveEffect.js [app-client] (ecmascript)");
;
;
;
;
;
;
const useWave = (nodeRef, className, component, colorSource)=>{
    const { wave } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [, token, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useWave.useEvent[showWave]": (event)=>{
            const node = nodeRef.current;
            if (wave?.disabled || !node) {
                return;
            }
            const targetNode = node.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_CLS"]}`) || node;
            const { showEffect } = wave || {};
            // Customize wave effect
            (showEffect || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(targetNode, {
                className,
                token,
                component,
                event,
                hashId,
                colorSource
            });
        }
    }["useWave.useEvent[showWave]"]);
    const rafIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Clean up RAF on unmount to prevent memory leaks and stale callbacks
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useWave.useEffect": ()=>({
                "useWave.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(rafIdRef.current);
                }
            })["useWave.useEffect"]
    }["useWave.useEffect"], []);
    // Merge trigger event into one for each frame
    const showDebounceWave = (event)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"].cancel(rafIdRef.current);
        rafIdRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__raf$3e$__["raf"])(()=>{
            showWave(event);
        });
    };
    return showDebounceWave;
};
const __TURBOPACK__default__export__ = useWave;
}),
"[project]/apps/web/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isVisible$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/isVisible.js [app-client] (ecmascript) <export default as isVisible>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/useWave.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const TRIGGER_TYPE_TO_EVENT_MAP = {
    click: 'click',
    mousedown: 'mousedown',
    mouseup: 'mouseup',
    pointerdown: 'pointerdown',
    pointerup: 'pointerup'
};
const Wave = (props)=>{
    const { children, disabled, component, colorSource } = props;
    const { getPrefixCls, wave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ============================== Style ===============================
    const prefixCls = getPrefixCls('wave');
    const hashId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // =============================== Wave ===============================
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(containerRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId), component, colorSource);
    // ============================== Effect ==============================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Wave.useEffect": ()=>{
            const node = containerRef.current;
            if (!node || node.nodeType !== window.Node.ELEMENT_NODE || disabled) {
                return;
            }
            const onClick = {
                "Wave.useEffect.onClick": (e)=>{
                    // Fix radio button click twice
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isVisible$3e$__["isVisible"])(e.target) || !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') && !node.className.includes('disabled:') || node.getAttribute('aria-disabled') === 'true' || node.className.includes('-leave')) {
                        return;
                    }
                    showWave(e);
                }
            }["Wave.useEffect.onClick"];
            const triggerType = wave?.triggerType;
            const eventName = triggerType && triggerType in TRIGGER_TYPE_TO_EVENT_MAP ? TRIGGER_TYPE_TO_EVENT_MAP[triggerType] : 'click';
            node.addEventListener(eventName, onClick, true);
            return ({
                "Wave.useEffect": ()=>{
                    node.removeEventListener(eventName, onClick, true);
                }
            })["Wave.useEffect"];
        }
    }["Wave.useEffect"], [
        disabled,
        wave?.triggerType
    ]);
    // ============================== Render ==============================
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children ?? null;
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children), containerRef) : containerRef;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        ref
    });
};
if ("TURBOPACK compile-time truthy", 1) {
    Wave.displayName = 'Wave';
}
const __TURBOPACK__default__export__ = Wave;
}),
"[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
;
;
;
const useSize = (customSize)=>{
    const size = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSize.useMemo[mergedSize]": ()=>{
            if (!customSize) {
                return size;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(customSize)) {
                return customSize ?? size;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(customSize)) {
                return customSize(size);
            }
            return size;
        }
    }["useSize.useMemo[mergedSize]"], [
        customSize,
        size
    ]);
    return mergedSize;
};
const __TURBOPACK__default__export__ = useSize;
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrientation",
    ()=>useOrientation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const isValidOrientation = (orientation)=>{
    return orientation === 'horizontal' || orientation === 'vertical';
};
const useOrientation = (orientation, vertical, legacyDirection)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOrientation.useMemo": ()=>{
            const validOrientation = isValidOrientation(orientation);
            let mergedOrientation;
            if (validOrientation) {
                mergedOrientation = orientation;
            } else if (typeof vertical === 'boolean') {
                mergedOrientation = vertical ? 'vertical' : 'horizontal';
            } else {
                const validLegacyDirection = isValidOrientation(legacyDirection);
                mergedOrientation = validLegacyDirection ? legacyDirection : 'horizontal';
            }
            return [
                mergedOrientation,
                mergedOrientation === 'vertical'
            ];
        }
    }["useOrientation.useMemo"], [
        legacyDirection,
        orientation,
        vertical
    ]);
};
}),
"[project]/apps/web/node_modules/antd/es/space/style/compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
const genSpaceCompactStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-block': {
                display: 'flex',
                width: '100%'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Compact'
], genSpaceCompactStyle, ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoCompactStyle",
    ()=>NoCompactStyle,
    "SpaceCompactItemContext",
    ()=>SpaceCompactItemContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCompactItemContext",
    ()=>useCompactItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/style/compact.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SpaceCompactItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const useCompactItemContext = (prefixCls, direction)=>{
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const compactItemClassnames = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompactItemContext.useMemo[compactItemClassnames]": ()=>{
            if (!compactItemContext) {
                return '';
            }
            const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
            const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-compact${separator}item`, {
                [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
                [`${prefixCls}-compact${separator}last-item`]: isLastItem,
                [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
            });
        }
    }["useCompactItemContext.useMemo[compactItemClassnames]"], [
        prefixCls,
        direction,
        compactItemContext
    ]);
    return {
        compactSize: compactItemContext?.compactSize,
        compactDirection: compactItemContext?.compactDirection,
        compactItemClassnames
    };
};
const NoCompactStyle = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: null
    }, children);
};
const CompactItem = (props)=>{
    const { children, ...others } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "CompactItem.useMemo": ()=>others
        }["CompactItem.useMemo"], [
            others
        ])
    }, children);
};
const Compact = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { size, direction, orientation, block, prefixCls: customizePrefixCls, className, rootClassName, children, vertical, ...restProps } = props;
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Space.Compact');
        warning.deprecated(!direction, 'direction', 'orientation');
    }
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, direction);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Compact.useSize[mergedSize]": (ctx)=>size ?? ctx
    }["Compact.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
    const [hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const clx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, {
        [`${prefixCls}-rtl`]: directionConfig === 'rtl',
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-vertical`]: mergedVertical
    }, className, rootClassName);
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "Compact.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Compact.useImperativeHandle"]);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Compact.useMemo[nodes]": ()=>childNodes.map({
                "Compact.useMemo[nodes]": (child, i)=>{
                    const key = child?.key || `${prefixCls}-item-${i}`;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CompactItem, {
                        key: key,
                        compactSize: mergedSize,
                        compactDirection: mergedOrientation,
                        isFirstItem: i === 0 && (!compactItemContext || compactItemContext?.isFirstItem),
                        isLastItem: i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)
                    }, child);
                }
            }["Compact.useMemo[nodes]"])
    }["Compact.useMemo[nodes]"], [
        childNodes,
        compactItemContext,
        mergedOrientation,
        mergedSize,
        prefixCls
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: nativeElementRef,
        className: clx,
        ...restProps
    }, nodes);
});
const __TURBOPACK__default__export__ = Compact;
}),
"[project]/apps/web/node_modules/antd/es/button/ButtonGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupSizeContext",
    ()=>GroupSizeContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
"use client";
;
;
;
;
;
const GroupSizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const ButtonGroup = (props)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, size, className, ...others } = props;
    const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
    const [, , hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const sizeCls = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ButtonGroup.useMemo[sizeCls]": ()=>{
            switch(size){
                case 'large':
                    return 'lg';
                case 'small':
                    return 'sm';
                default:
                    return '';
            }
        }
    }["ButtonGroup.useMemo[sizeCls]"], [
        size
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button.Group');
        warning.deprecated(false, 'Button.Group', 'Space.Compact');
        ("TURBOPACK compile-time truthy", 1) ? warning(!size || [
            'large',
            'medium',
            'small'
        ].includes(size), 'usage', 'Invalid prop `size`.') : "TURBOPACK unreachable";
    }
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, hashId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](GroupSizeContext.Provider, {
        value: size
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        className: classes
    }));
};
const __TURBOPACK__default__export__ = ButtonGroup;
}),
"[project]/apps/web/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_ButtonColorTypes",
    ()=>_ButtonColorTypes,
    "_ButtonVariantTypes",
    ()=>_ButtonVariantTypes,
    "convertLegacyProps",
    ()=>convertLegacyProps,
    "isTwoCNChar",
    ()=>isTwoCNChar,
    "isUnBorderedButtonVariant",
    ()=>isUnBorderedButtonVariant,
    "spaceChildren",
    ()=>spaceChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
    if (type === 'danger') {
        return {
            danger: true
        };
    }
    return {
        type
    };
}
function isUnBorderedButtonVariant(type) {
    return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted, style, className) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(child)) {
        return;
    }
    const SPACE = needInserted ? ' ' : '';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(child) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(child) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(child.type) && isTwoCNChar(child.props.children)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, (oriProps)=>{
            const mergedCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, className) || undefined;
            const mergedStyle = {
                ...style,
                ...oriProps.style
            };
            return {
                ...oriProps,
                children: oriProps.children.split('').join(SPACE),
                className: mergedCls,
                style: mergedStyle
            };
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(child)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: className,
            style: style
        }, isTwoCNChar(child) ? child.split('').join(SPACE) : child);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(child)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: className,
            style: style
        }, child);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, (oriProps)=>({
            ...oriProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, className) || undefined,
            style: {
                ...oriProps.style,
                ...style
            }
        }));
}
function spaceChildren(children, needInserted, style, className) {
    let isPrevChildPure = false;
    const childList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        const isCurrentChildPure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(child) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(child);
        if (isPrevChildPure && isCurrentChildPure) {
            const lastIndex = childList.length - 1;
            const lastChild = childList[lastIndex];
            childList[lastIndex] = `${lastChild}${child}`;
        } else {
            childList.push(child);
        }
        isPrevChildPure = isCurrentChildPure;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(childList, (child)=>splitCNCharsBySpace(child, needInserted, style, className));
}
const _ButtonTypes = [
    'default',
    'primary',
    'dashed',
    'link',
    'text'
];
const _ButtonShapes = [
    'default',
    'circle',
    'round',
    'square'
];
const _ButtonHTMLTypes = [
    'submit',
    'button',
    'reset'
];
const _ButtonVariantTypes = [
    'outlined',
    'dashed',
    'solid',
    'filled',
    'text',
    'link'
];
const _ButtonColorTypes = [
    'default',
    'primary',
    'danger'
].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"]));
}),
"[project]/apps/web/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const IconWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { className, style, children, prefixCls } = props;
    const iconWrapperCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-icon`, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ref: ref,
        className: iconWrapperCls,
        style: style
    }, children);
});
const __TURBOPACK__default__export__ = IconWrapper;
}),
"[project]/apps/web/node_modules/antd/es/button/DefaultLoadingIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const InnerLoadingIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls, className, style, iconClassName } = props;
    const mergedIconCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-loading-icon`, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        className: mergedIconCls,
        style: style,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: iconClassName
    }));
});
const getCollapsedWidth = ()=>({
        width: 0,
        opacity: 0,
        transform: 'scale(0)'
    });
const getRealWidth = (node)=>({
        width: node.scrollWidth,
        opacity: 1,
        transform: 'scale(1)'
    });
const DefaultLoadingIcon = (props)=>{
    const { prefixCls, loading, existIcon, className, style, mount } = props;
    const visible = !!loading;
    if (existIcon) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: className,
            style: style
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: visible,
        // Used for minus flex gap style only
        motionName: `${prefixCls}-loading-icon-motion`,
        motionAppear: !mount,
        motionEnter: !mount,
        motionLeave: !mount,
        removeOnLeave: true,
        onAppearStart: getCollapsedWidth,
        onAppearActive: getRealWidth,
        onEnterStart: getCollapsedWidth,
        onEnterActive: getRealWidth,
        onLeaveStart: getRealWidth,
        onLeaveActive: getCollapsedWidth
    }, ({ className: motionCls, style: motionStyle }, ref)=>{
        const mergedStyle = {
            ...style,
            ...motionStyle
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, motionCls),
            style: mergedStyle,
            ref: ref
        });
    });
};
const __TURBOPACK__default__export__ = DefaultLoadingIcon;
}),
"[project]/apps/web/node_modules/antd/es/style/motion/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genNoMotionRawStyle",
    ()=>genNoMotionRawStyle,
    "genNoMotionStyle",
    ()=>genNoMotionStyle
]);
const genNoMotionStyle = ()=>{
    return {
        '@media (prefers-reduced-motion: reduce)': {
            '&, &::before, &::after': {
                transition: 'none',
                animation: 'none'
            }
        }
    };
};
const genNoMotionRawStyle = ()=>{
    return {
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
            animation: 'none'
        }
    };
};
}),
"[project]/apps/web/node_modules/antd/es/button/style/group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genButtonBorderStyle = (buttonTypeCls, borderColor)=>({
        // Border
        [`> span, > ${buttonTypeCls}`]: {
            '&:not(:last-child)': {
                [`&, & > ${buttonTypeCls}`]: {
                    '&:not(:disabled)': {
                        borderInlineEndColor: borderColor
                    }
                }
            },
            '&:not(:first-child)': {
                [`&, & > ${buttonTypeCls}`]: {
                    '&:not(:disabled)': {
                        borderInlineStartColor: borderColor
                    }
                }
            }
        }
    });
const genGroupStyle = (token)=>{
    const { componentCls, fontSize, lineWidth, groupBorderColor, colorErrorHover } = token;
    return {
        [`${componentCls}-group`]: [
            {
                position: 'relative',
                display: 'inline-flex',
                // Border
                [`> span, > ${componentCls}`]: {
                    '&:not(:last-child)': {
                        [`&, & > ${componentCls}`]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    '&:not(:first-child)': {
                        marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
                        [`&, & > ${componentCls}`]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                },
                [componentCls]: {
                    position: 'relative',
                    zIndex: 1,
                    '&:hover, &:focus, &:active': {
                        zIndex: 2
                    },
                    '&[disabled]': {
                        zIndex: 0
                    }
                },
                [`${componentCls}-icon-only`]: {
                    fontSize
                }
            },
            // Border Color
            genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
            genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
        ]
    };
};
const __TURBOPACK__default__export__ = genGroupStyle;
}),
"[project]/apps/web/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AggregationColor",
    ()=>AggregationColor,
    "getHex",
    ()=>getHex,
    "toHexFormat",
    ()=>toHexFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
;
;
;
const toHexFormat = (value, alpha)=>value?.replace(/[^0-9a-f]/gi, '').slice(0, alpha ? 8 : 6) || '';
const getHex = (value, alpha)=>value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/ function() {
    function AggregationColor(color) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, AggregationColor);
        this.cleared = false;
        // Clone from another AggregationColor
        if (color instanceof AggregationColor) {
            this.metaColor = color.metaColor.clone();
            this.colors = color.colors?.map((info)=>({
                    color: new AggregationColor(info.color),
                    percent: info.percent
                }));
            this.cleared = color.cleared;
            return;
        }
        const isArray = Array.isArray(color);
        if (isArray && color.length) {
            this.colors = color.map(({ color: c, percent })=>({
                    color: new AggregationColor(c),
                    percent
                }));
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](this.colors[0].color.metaColor);
        } else {
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](isArray ? '' : color);
        }
        if (!color || isArray && !this.colors) {
            this.metaColor = this.metaColor.setA(0);
            this.cleared = true;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(AggregationColor, [
        {
            key: "toHsb",
            value: function toHsb() {
                return this.metaColor.toHsb();
            }
        },
        {
            key: "toHsbString",
            value: function toHsbString() {
                return this.metaColor.toHsbString();
            }
        },
        {
            key: "toHex",
            value: function toHex() {
                return getHex(this.toHexString(), this.metaColor.a < 1);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this.metaColor.toHexString();
            }
        },
        {
            key: "toRgb",
            value: function toRgb() {
                return this.metaColor.toRgb();
            }
        },
        {
            key: "toRgbString",
            value: function toRgbString() {
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "isGradient",
            value: function isGradient() {
                return !!this.colors && !this.cleared;
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return this.colors || [
                    {
                        color: this,
                        percent: 0
                    }
                ];
            }
        },
        {
            key: "toCssString",
            value: function toCssString() {
                const { colors } = this;
                // CSS line-gradient
                if (colors) {
                    const colorsStr = colors.map((c)=>`${c.color.toRgbString()} ${c.percent}%`).join(', ');
                    return `linear-gradient(90deg, ${colorsStr})`;
                }
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "equals",
            value: function equals(color) {
                if (!color || this.isGradient() !== color.isGradient()) {
                    return false;
                }
                if (!this.isGradient()) {
                    return this.toHexString() === color.toHexString();
                }
                return this.colors.length === color.colors.length && this.colors.every((c, i)=>{
                    const target = color.colors[i];
                    return c.percent === target.percent && c.color.equals(target.color);
                });
            }
        }
    ]);
}();
}),
"[project]/apps/web/node_modules/antd/es/collapse/CollapsePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/collapse/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const CollapsePanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse.Panel');
        warning.deprecated(!('disabled' in props), 'disabled', 'collapsible="disabled"');
    }
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, showArrow = true } = props;
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const collapsePanelClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-no-arrow`]: !showArrow
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Panel, {
        ref: ref,
        ...props,
        prefixCls: prefixCls,
        className: collapsePanelClassName
    });
});
const __TURBOPACK__default__export__ = CollapsePanel;
}),
"[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genCollapseMotion = (token)=>{
    const { componentCls, antCls, motionDurationMid, motionEaseInOut } = token;
    return {
        [componentCls]: {
            // For common/openAnimation
            [`${antCls}-motion-collapse-legacy`]: {
                overflow: 'hidden',
                '&-active': {
                    transition: `${[
                        'height',
                        'opacity'
                    ].map((prop)=>`${prop} ${motionDurationMid} ${motionEaseInOut}`).join(', ')} !important`
                }
            },
            [`${antCls}-motion-collapse`]: {
                overflow: 'hidden',
                transition: `${[
                    'height',
                    'opacity'
                ].map((prop)=>`${prop} ${motionDurationMid} ${motionEaseInOut}`).join(', ')} !important`
            }
        }
    };
};
const __TURBOPACK__default__export__ = genCollapseMotion;
}),
"[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCollapseMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/collapse/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genBaseStyle",
    ()=>genBaseStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genBaseStyle = (token)=>{
    const { componentCls, contentBg, padding, headerBg, headerPadding, headerPaddingSM, headerPaddingLG, collapsePanelBorderRadius, lineWidth, lineType, colorBorder, colorText, colorTextHeading, colorTextDisabled, fontSizeLG, lineHeight, lineHeightLG, marginSM, paddingSM, paddingLG, paddingXS, motionDurationSlow, fontSizeIcon, contentPadding, contentPaddingSM, contentPaddingLG, fontHeight, fontHeightLG } = token;
    const borderBase = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth)} ${lineType} ${colorBorder}`;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            backgroundColor: headerBg,
            border: borderBase,
            borderRadius: collapsePanelBorderRadius,
            '&-rtl': {
                direction: 'rtl'
            },
            [`& > ${componentCls}-item`]: {
                borderBottom: borderBase,
                '&:first-child': {
                    [`
            &,
            & > ${componentCls}-header`]: {
                        borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)} 0 0`
                    }
                },
                '&:last-child': {
                    [`
            &,
            & > ${componentCls}-header`]: {
                        borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)}`
                    }
                },
                [`> ${componentCls}-header`]: {
                    position: 'relative',
                    // Compatible with old version of antd, should remove in next version
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    padding: headerPadding,
                    color: colorTextHeading,
                    lineHeight,
                    cursor: 'pointer',
                    transition: `all ${motionDurationSlow}, visibility 0s`,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                    [`> ${componentCls}-title`]: {
                        flex: 'auto'
                    },
                    // >>>>> Arrow
                    [`${componentCls}-expand-icon`]: {
                        height: fontHeight,
                        display: 'flex',
                        alignItems: 'center',
                        marginInlineEnd: marginSM
                    },
                    [`${componentCls}-arrow`]: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetIcon"])(),
                        fontSize: fontSizeIcon,
                        // when `transform: rotate()` is applied to icon's root element
                        transition: `transform ${motionDurationSlow}`,
                        // when `transform: rotate()` is applied to icon's child element
                        svg: {
                            transition: `transform ${motionDurationSlow}`
                        }
                    },
                    // >>>>> Text
                    [`${componentCls}-title`]: {
                        marginInlineEnd: 'auto',
                        // Icons from third-party libraries render as a bare `<svg>`, which the `.anticon`
                        // reset never reaches. An `<svg>` has no baseline of its own, so it is aligned by its
                        // bottom margin edge (CSS 2.1 §10.8.1) and rides above the title text.
                        // `display: inline-block` keeps it an atomic inline box so `vertical-align` still applies
                        // even under a CSS reset that forces `svg { display: block }` (e.g. Tailwind Preflight),
                        // which would otherwise drop the icon onto its own line. `vertical-align: middle` centres
                        // its margin box on the x-height line; `margin-block-end` then lifts it by half its own
                        // value onto the cap-height centre (capHeight − xHeight ≈ 0.2em across typical fonts),
                        // keeping it centred at any icon size.
                        // Only matches a bare `<svg>`: an `.anticon` keeps its `<svg>` one level deeper.
                        '> svg': {
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            marginBlockEnd: '0.2em'
                        }
                    }
                },
                [`${componentCls}-collapsible-header`]: {
                    cursor: 'default',
                    [`${componentCls}-title`]: {
                        flex: 'none',
                        cursor: 'pointer'
                    },
                    [`${componentCls}-expand-icon`]: {
                        cursor: 'pointer'
                    }
                },
                [`${componentCls}-collapsible-icon`]: {
                    cursor: 'unset',
                    [`${componentCls}-expand-icon`]: {
                        cursor: 'pointer'
                    }
                }
            },
            [`${componentCls}-panel`]: {
                color: colorText,
                backgroundColor: contentBg,
                borderTop: borderBase,
                [`& > ${componentCls}-body`]: {
                    padding: contentPadding
                },
                '&-hidden': {
                    display: 'none'
                }
            },
            '&-small': {
                [`> ${componentCls}-item`]: {
                    [`> ${componentCls}-header`]: {
                        padding: headerPaddingSM,
                        [`> ${componentCls}-expand-icon`]: {
                            // Arrow offset
                            marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
                        }
                    },
                    [`> ${componentCls}-panel > ${componentCls}-body`]: {
                        padding: contentPaddingSM
                    }
                }
            },
            '&-large': {
                [`> ${componentCls}-item`]: {
                    fontSize: fontSizeLG,
                    lineHeight: lineHeightLG,
                    [`> ${componentCls}-header`]: {
                        padding: headerPaddingLG,
                        [`> ${componentCls}-expand-icon`]: {
                            height: fontHeightLG,
                            // Arrow offset
                            marginInlineStart: token.calc(paddingLG).sub(padding).equal()
                        }
                    },
                    [`> ${componentCls}-panel > ${componentCls}-body`]: {
                        padding: contentPaddingLG
                    }
                }
            },
            [`${componentCls}-item:last-child`]: {
                borderBottom: 0,
                [`> ${componentCls}-panel`]: {
                    borderRadius: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius)}`
                }
            },
            [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
                '&, & > .arrow': {
                    color: colorTextDisabled,
                    cursor: 'not-allowed'
                }
            },
            // ========================== Icon Placement ==========================
            [`&${componentCls}-icon-placement-end`]: {
                [`& > ${componentCls}-item`]: {
                    [`> ${componentCls}-header`]: {
                        [`${componentCls}-expand-icon`]: {
                            order: 1,
                            marginInlineEnd: 0,
                            marginInlineStart: marginSM
                        }
                    }
                }
            }
        }
    };
};
const genArrowStyle = (token)=>{
    const { componentCls } = token;
    const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow`;
    return {
        [`${componentCls}-rtl`]: {
            [fixedSelector]: {
                transform: `rotate(180deg)`
            }
        }
    };
};
const genBorderlessStyle = (token)=>{
    const { componentCls, headerBg, borderlessContentPadding, borderlessContentBg, colorBorder } = token;
    return {
        [`${componentCls}-borderless`]: {
            backgroundColor: headerBg,
            border: 0,
            [`> ${componentCls}-item`]: {
                borderBottom: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${colorBorder}`
            },
            [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
                borderRadius: 0
            },
            [`> ${componentCls}-item:last-child`]: {
                borderBottom: 0
            },
            [`> ${componentCls}-item > ${componentCls}-panel`]: {
                backgroundColor: borderlessContentBg,
                borderTop: 0
            },
            [`> ${componentCls}-item > ${componentCls}-panel > ${componentCls}-body`]: {
                padding: borderlessContentPadding
            }
        }
    };
};
const genGhostStyle = (token)=>{
    const { componentCls, paddingSM } = token;
    return {
        [`${componentCls}-ghost`]: {
            backgroundColor: 'transparent',
            border: 0,
            [`> ${componentCls}-item`]: {
                borderBottom: 0,
                [`> ${componentCls}-panel`]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    [`> ${componentCls}-body`]: {
                        paddingBlock: paddingSM
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const componentToken = {
        headerPadding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)}`,
        headerPaddingSM: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)}`,
        headerPaddingLG: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)}`,
        headerBg: token.colorFillAlter,
        contentPadding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(16)}`,
        // Fixed Value
        contentPaddingSM: token.paddingSM,
        contentPaddingLG: token.paddingLG,
        contentBg: token.colorBgContainer,
        borderlessContentPadding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(16)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)}`,
        borderlessContentBg: 'transparent'
    };
    return componentToken;
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Collapse', (token)=>{
    const collapseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [
        genBaseStyle(collapseToken),
        genBorderlessStyle(collapseToken),
        genGhostStyle(collapseToken),
        genArrowStyle(collapseToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(collapseToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/collapse/Collapse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/collapse/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/collapse/CollapsePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/collapse/style/index.js [app-client] (ecmascript)");
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
const Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction, expandIcon: contextExpandIcon, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('collapse');
    const { prefixCls: customizePrefixCls, className, rootClassName, style, bordered = true, ghost, size: customizeSize, expandIconPlacement, expandIconPosition, children, destroyInactivePanel, destroyOnHidden, expandIcon, classNames, styles } = props;
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Collapse.useSize[mergedSize]": (ctx)=>customizeSize ?? ctx ?? 'middle'
    }["Collapse.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedPlacement = expandIconPlacement ?? expandIconPosition ?? 'start';
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size: mergedSize,
        bordered,
        expandIconPlacement: mergedPlacement
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
    const mergedExpandIcon = expandIcon ?? contextExpandIcon;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse');
        [
            [
                'destroyInactivePanel',
                'destroyOnHidden'
            ],
            [
                'expandIconPosition',
                'expandIconPlacement'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const renderExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Collapse.useCallback[renderExpandIcon]": (panelProps = {})=>{
            const iconIsInteractive = panelProps.collapsible === 'header' || panelProps.collapsible === 'icon';
            const icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(mergedExpandIcon) ? mergedExpandIcon(panelProps) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rotate: panelProps.isActive ? direction === 'rtl' ? -90 : 90 : undefined,
                ...iconIsInteractive ? {
                    'aria-label': panelProps.isActive ? 'expanded' : 'collapsed'
                } : {
                    'aria-hidden': true
                }
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
                "Collapse.useCallback[renderExpandIcon]": (oriProps)=>({
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, `${prefixCls}-arrow`)
                    })
            }["Collapse.useCallback[renderExpandIcon]"]);
        }
    }["Collapse.useCallback[renderExpandIcon]"], [
        mergedExpandIcon,
        prefixCls,
        direction
    ]);
    const collapseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-icon-placement-${mergedPlacement}`, {
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-ghost`]: !!ghost,
        [`${prefixCls}-large`]: mergedSize === 'large',
        [`${prefixCls}-small`]: mergedSize === 'small'
    }, contextClassName, className, rootClassName, hashId, cssVarCls, mergedClassNames.root);
    const openMotion = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[openMotion]": ()=>({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls),
                motionAppear: false,
                leavedClassName: `${prefixCls}-panel-hidden`
            })
    }["Collapse.useMemo[openMotion]"], [
        rootPrefixCls,
        prefixCls
    ]);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[items]": ()=>{
            if (children) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map({
                    "Collapse.useMemo[items]": (child)=>child
                }["Collapse.useMemo[items]"]);
            }
            return null;
        }
    }["Collapse.useMemo[items]"], [
        children
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        openMotion: openMotion,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
            'rootClassName'
        ]),
        expandIcon: renderExpandIcon,
        prefixCls: prefixCls,
        className: collapseClassName,
        style: mergedStyles.root,
        classNames: mergedClassNames,
        styles: mergedStyles,
        destroyOnHidden: destroyOnHidden ?? destroyInactivePanel
    }, items);
});
if ("TURBOPACK compile-time truthy", 1) {
    Collapse.displayName = 'Collapse';
}
const __TURBOPACK__default__export__ = Object.assign(Collapse, {
    Panel: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/apps/web/node_modules/antd/es/collapse/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/collapse/Collapse.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genAlphaColor",
    ()=>genAlphaColor,
    "generateColor",
    ()=>generateColor,
    "getColorAlpha",
    ()=>getColorAlpha,
    "getGradientPercentColor",
    ()=>getGradientPercentColor,
    "getRoundNumber",
    ()=>getRoundNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)");
;
;
;
const generateColor = (color)=>{
    if (color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"]) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"](color);
};
const getRoundNumber = (value)=>Math.round(Number(value || 0));
const getColorAlpha = (color)=>getRoundNumber(color.toHsb().a * 100);
const genAlphaColor = (color, alpha)=>{
    const rgba = color.toRgb();
    // Color from hsb input may get `rgb` is (0/0/0) when `hsb.b` is 0
    // So if rgb is empty, we should get from hsb
    if (!rgba.r && !rgba.g && !rgba.b) {
        const hsba = color.toHsb();
        hsba.a = alpha || 1;
        return generateColor(hsba);
    }
    rgba.a = alpha || 1;
    return generateColor(rgba);
};
const getGradientPercentColor = (colors, percent)=>{
    const filledColors = [
        {
            percent: 0,
            color: colors[0].color
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(colors), [
        {
            percent: 100,
            color: colors[colors.length - 1].color
        }
    ]);
    for(let i = 0; i < filledColors.length - 1; i += 1){
        const startPtg = filledColors[i].percent;
        const endPtg = filledColors[i + 1].percent;
        const startColor = filledColors[i].color;
        const endColor = filledColors[i + 1].color;
        if (startPtg <= percent && percent <= endPtg) {
            const dist = endPtg - startPtg;
            if (dist === 0) {
                return startColor;
            }
            const ratio = (percent - startPtg) / dist * 100;
            const startRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](startColor);
            const endRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](endColor);
            return startRcColor.mix(endRcColor, ratio).toRgbString();
        }
    }
    // This will never reach
    /* istanbul ignore next */ return '';
};
}),
"[project]/apps/web/node_modules/antd/es/color-picker/components/ColorPresets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBright",
    ()=>isBright
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/components/ColorBlock.js [app-client] (ecmascript) <export default as ColorBlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/collapse/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const genPresetColor = (list)=>list.map((value)=>{
        value.colors = value.colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"]);
        return value;
    });
const isBright = (value, bgColorToken)=>{
    const { r, g, b, a } = value.toRgb();
    const hsv = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
        // Adapted to dark mode
        return hsv.v > 0.5;
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (preset, index)=>{
    const mergedKey = preset.key ?? index;
    return `panel-${mergedKey}`;
};
const ColorPresets = ({ prefixCls, presets, value: color, onChange })=>{
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const presetsValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ColorPresets.useMemo[presetsValue]": ()=>genPresetColor(presets)
    }["ColorPresets.useMemo[presetsValue]"], [
        presets
    ]);
    const colorPresetsPrefixCls = `${prefixCls}-presets`;
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ColorPresets.useMemo[activeKeys]": ()=>presetsValue.reduce({
                "ColorPresets.useMemo[activeKeys]": (acc, preset, index)=>{
                    const { defaultOpen = true } = preset;
                    if (defaultOpen) {
                        acc.push(genCollapsePanelKey(preset, index));
                    }
                    return acc;
                }
            }["ColorPresets.useMemo[activeKeys]"], [])
    }["ColorPresets.useMemo[activeKeys]"], [
        presetsValue
    ]);
    const handleClick = (colorValue)=>{
        onChange?.(colorValue);
    };
    const items = presetsValue.map((preset, index)=>({
            key: genCollapsePanelKey(preset, index),
            label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: `${colorPresetsPrefixCls}-label`
            }, preset?.label),
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: `${colorPresetsPrefixCls}-items`
            }, Array.isArray(preset?.colors) && preset.colors?.length > 0 ? preset.colors.map((presetColor, index)=>{
                const colorInst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(presetColor);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__["ColorBlock"], {
                    // eslint-disable-next-line react/no-array-index-key
                    key: `preset-${index}-${presetColor.toHexString()}`,
                    color: colorInst.toCssString(),
                    prefixCls: prefixCls,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${colorPresetsPrefixCls}-color`, {
                        [`${colorPresetsPrefixCls}-color-checked`]: presetColor.toCssString() === color?.toCssString(),
                        [`${colorPresetsPrefixCls}-color-bright`]: isBright(presetColor, token.colorBgElevated)
                    }),
                    onClick: ()=>handleClick(presetColor)
                });
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: `${colorPresetsPrefixCls}-empty`
            }, locale.presetEmpty))
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorPresetsPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        defaultActiveKey: activeKeys,
        ghost: true,
        items: items
    }));
};
const __TURBOPACK__default__export__ = ColorPresets;
}),
"[project]/apps/web/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/components/ColorPresets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)");
;
;
;
;
;
;
const prepareToken = (token)=>{
    const { paddingInline, onlyIconSize, borderColorDisabled } = token;
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        buttonPaddingHorizontal: paddingInline,
        buttonPaddingVertical: 0,
        buttonIconOnlyFontSize: onlyIconSize,
        colorBorderDisabled: borderColorDisabled
    });
    return buttonToken;
};
const prepareComponentToken = (token)=>{
    const contentFontSize = token.contentFontSize ?? token.fontSize;
    const contentFontSizeSM = token.contentFontSizeSM ?? token.fontSize;
    const contentFontSizeLG = token.contentFontSizeLG ?? token.fontSizeLG;
    const contentLineHeight = token.contentLineHeight ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSize);
    const contentLineHeightSM = token.contentLineHeightSM ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeSM);
    const contentLineHeightLG = token.contentLineHeightLG ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeLG);
    const solidTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBright"])(new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"](token.colorBgSolid), '#fff') ? '#000' : '#fff';
    const shadowColorTokens = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>({
            ...prev,
            [`${colorKey}ShadowColor`]: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth)} 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token[`${colorKey}1`], token.colorBgContainer)}`
        }), {});
    const defaultBgDisabled = token.colorBgContainerDisabled;
    const dashedBgDisabled = token.colorBgContainerDisabled;
    return {
        ...shadowColorTokens,
        fontWeight: 400,
        iconGap: token.marginXS,
        defaultShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,
        primaryShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,
        dangerShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`,
        primaryColor: token.colorTextLightSolid,
        dangerColor: token.colorTextLightSolid,
        borderColorDisabled: token.colorBorderDisabled,
        defaultGhostColor: token.colorBgContainer,
        ghostBg: 'transparent',
        defaultGhostBorderColor: token.colorBgContainer,
        paddingInline: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineSM: 8 - token.lineWidth,
        onlyIconSize: 'inherit',
        onlyIconSizeSM: 'inherit',
        onlyIconSizeLG: 'inherit',
        groupBorderColor: token.colorPrimaryHover,
        linkHoverBg: 'transparent',
        textTextColor: token.colorText,
        textTextHoverColor: token.colorText,
        textTextActiveColor: token.colorText,
        textHoverBg: token.colorFillTertiary,
        defaultColor: token.colorText,
        defaultBg: token.colorBgContainer,
        defaultBorderColor: token.colorBorder,
        defaultBorderColorDisabled: token.colorBorder,
        defaultHoverBg: token.colorBgContainer,
        defaultHoverColor: token.colorPrimaryHover,
        defaultHoverBorderColor: token.colorPrimaryHover,
        defaultActiveBg: token.colorBgContainer,
        defaultActiveColor: token.colorPrimaryActive,
        defaultActiveBorderColor: token.colorPrimaryActive,
        solidTextColor,
        contentFontSize,
        contentFontSizeSM,
        contentFontSizeLG,
        contentLineHeight,
        contentLineHeightSM,
        contentLineHeightLG,
        paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
        paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
        paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0),
        defaultBgDisabled,
        dashedBgDisabled
    };
};
}),
"[project]/apps/web/node_modules/antd/es/button/style/variant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genVariantStyle = (token)=>{
    const { componentCls, antCls, lineWidth, lineType } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'btn');
    return {
        [componentCls]: [
            // ==============================================================
            // ==                         Variable                         ==
            // ==============================================================
            {
                // Border
                [varName('border-width')]: lineWidth,
                [varName('border-color')]: '#000',
                [varName('border-color-hover')]: varRef('border-color'),
                [varName('border-color-active')]: varRef('border-color'),
                [varName('border-color-disabled')]: varRef('border-color'),
                [varName('border-style')]: lineType,
                // Text
                [varName('text-color')]: '#000',
                [varName('text-color-hover')]: varRef('text-color'),
                [varName('text-color-active')]: varRef('text-color'),
                [varName('text-color-disabled')]: varRef('text-color'),
                // Background
                [varName('bg-color')]: '#ddd',
                [varName('bg-color-hover')]: varRef('bg-color'),
                [varName('bg-color-active')]: varRef('bg-color'),
                [varName('bg-color-disabled')]: token.colorBgContainerDisabled,
                [varName('bg-color-container')]: token.colorBgContainer,
                // Shadow
                [varName('shadow')]: 'none'
            },
            // ==============================================================
            // ==                         Template                         ==
            // ==============================================================
            {
                // Basic
                border: [
                    varRef('border-width'),
                    varRef('border-style'),
                    varRef('border-color')
                ].join(' '),
                color: varRef('text-color'),
                backgroundColor: varRef('bg-color'),
                // Status
                [`&:not(:disabled):not(${componentCls}-disabled)`]: {
                    // Hover
                    '&:hover': {
                        border: [
                            varRef('border-width'),
                            varRef('border-style'),
                            varRef('border-color-hover')
                        ].join(' '),
                        color: varRef('text-color-hover'),
                        backgroundColor: varRef('bg-color-hover')
                    },
                    // Active
                    '&:active': {
                        border: [
                            varRef('border-width'),
                            varRef('border-style'),
                            varRef('border-color-active')
                        ].join(' '),
                        color: varRef('text-color-active'),
                        backgroundColor: varRef('bg-color-active')
                    }
                }
            },
            // ==============================================================
            // ==                         Variants                         ==
            // ==============================================================
            {
                // >>>>> Solid
                [`&${componentCls}-variant-solid`]: {
                    // Solid Variables
                    [varName('solid-bg-color')]: varRef('color-base'),
                    [varName('solid-bg-color-hover')]: varRef('color-hover'),
                    [varName('solid-bg-color-active')]: varRef('color-active'),
                    // Variables
                    [varName('border-color')]: 'transparent',
                    [varName('text-color')]: token.colorTextLightSolid,
                    [varName('bg-color')]: varRef('solid-bg-color'),
                    [varName('bg-color-hover')]: varRef('solid-bg-color-hover'),
                    [varName('bg-color-active')]: varRef('solid-bg-color-active'),
                    // Box Shadow
                    boxShadow: varRef('shadow')
                },
                // >>>>> Outlined & Dashed
                [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
                    [varName('border-color')]: varRef('color-base'),
                    [varName('border-color-hover')]: varRef('color-hover'),
                    [varName('border-color-active')]: varRef('color-active'),
                    [varName('bg-color')]: varRef('bg-color-container'),
                    [varName('text-color')]: varRef('color-base'),
                    [varName('text-color-hover')]: varRef('color-hover'),
                    [varName('text-color-active')]: varRef('color-active'),
                    // Box Shadow
                    boxShadow: varRef('shadow')
                },
                // >>>>> Dashed
                [`&${componentCls}-variant-dashed`]: {
                    [varName('border-style')]: 'dashed',
                    [varName('bg-color-disabled')]: token.dashedBgDisabled
                },
                // >>>>> Filled
                [`&${componentCls}-variant-filled`]: {
                    [varName('border-color')]: 'transparent',
                    [varName('text-color')]: varRef('color-base'),
                    [varName('bg-color')]: varRef('color-light'),
                    [varName('bg-color-hover')]: varRef('color-light-hover'),
                    [varName('bg-color-active')]: varRef('color-light-active')
                },
                // >>>>> Text & Link
                [`&${componentCls}-variant-text, &${componentCls}-variant-link`]: {
                    [varName('border-color')]: 'transparent',
                    [varName('text-color')]: varRef('color-base'),
                    [varName('text-color-hover')]: varRef('color-hover'),
                    [varName('text-color-active')]: varRef('color-active'),
                    [varName('bg-color')]: 'transparent',
                    [varName('bg-color-hover')]: 'transparent',
                    [varName('bg-color-active')]: 'transparent',
                    [`&:disabled, &${token.componentCls}-disabled`]: {
                        background: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                // >>>>> Text
                [`&${componentCls}-variant-text`]: {
                    [varName('bg-color-hover')]: varRef('color-light'),
                    [varName('bg-color-active')]: varRef('color-light-active')
                }
            },
            // ==============================================================
            // ==                          Colors                          ==
            // ==============================================================
            {
                // ======================== By Default ========================
                // >>>>> Link
                [`&${componentCls}-variant-link`]: {
                    [varName('color-base')]: token.colorLink,
                    [varName('color-hover')]: token.colorLinkHover,
                    [varName('color-active')]: token.colorLinkActive,
                    [varName('bg-color-hover')]: token.linkHoverBg
                },
                // ======================== Compatible ========================
                // >>>>> Primary
                [`&${componentCls}-color-primary`]: {
                    [varName('color-base')]: token.colorPrimary,
                    [varName('color-hover')]: token.colorPrimaryHover,
                    [varName('color-active')]: token.colorPrimaryActive,
                    [varName('color-light')]: token.colorPrimaryBg,
                    [varName('color-light-hover')]: token.colorPrimaryBgHover,
                    [varName('color-light-active')]: token.colorPrimaryBorder,
                    [varName('shadow')]: token.primaryShadow,
                    [`&${componentCls}-variant-solid`]: {
                        [varName('text-color')]: token.primaryColor,
                        [varName('text-color-hover')]: varRef('text-color'),
                        [varName('text-color-active')]: varRef('text-color')
                    }
                },
                // >>>>> Danger
                [`&${componentCls}-color-dangerous`]: {
                    [varName('color-base')]: token.colorError,
                    [varName('color-hover')]: token.colorErrorHover,
                    [varName('color-active')]: token.colorErrorActive,
                    [varName('color-light')]: token.colorErrorBg,
                    [varName('color-light-hover')]: token.colorErrorBgFilledHover,
                    [varName('color-light-active')]: token.colorErrorBgActive,
                    [varName('shadow')]: token.dangerShadow,
                    [`&${componentCls}-variant-solid`]: {
                        [varName('text-color')]: token.dangerColor,
                        [varName('text-color-hover')]: varRef('text-color'),
                        [varName('text-color-active')]: varRef('text-color')
                    }
                },
                // >>>>> Default
                [`&${componentCls}-color-default`]: {
                    [varName('solid-bg-color')]: token.colorBgSolid,
                    [varName('solid-bg-color-hover')]: token.colorBgSolidHover,
                    [varName('solid-bg-color-active')]: token.colorBgSolidActive,
                    [varName('color-base')]: token.defaultBorderColor,
                    [varName('color-hover')]: token.defaultHoverBorderColor,
                    [varName('color-active')]: token.defaultActiveBorderColor,
                    [varName('color-light')]: token.colorFillTertiary,
                    [varName('color-light-hover')]: token.colorFillSecondary,
                    [varName('color-light-active')]: token.colorFill,
                    [varName('text-color')]: token.defaultColor,
                    [varName('text-color-hover')]: token.defaultHoverColor,
                    [varName('text-color-active')]: token.defaultActiveColor,
                    [varName('shadow')]: token.defaultShadow,
                    [`&${componentCls}-variant-outlined`]: {
                        [varName('bg-color-disabled')]: token.defaultBgDisabled
                    },
                    [`&${componentCls}-variant-solid`]: {
                        [varName('text-color')]: token.solidTextColor,
                        [varName('text-color-hover')]: varRef('text-color'),
                        [varName('text-color-active')]: varRef('text-color')
                    },
                    [`&${componentCls}-variant-filled, &${componentCls}-variant-text`]: {
                        [varName('text-color-hover')]: varRef('text-color'),
                        [varName('text-color-active')]: varRef('text-color')
                    },
                    [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
                        [varName('text-color')]: token.defaultColor,
                        [varName('text-color-hover')]: token.defaultHoverColor,
                        [varName('text-color-active')]: token.defaultActiveColor,
                        [varName('bg-color-container')]: token.defaultBg,
                        [varName('bg-color-hover')]: token.defaultHoverBg,
                        [varName('bg-color-active')]: token.defaultActiveBg
                    },
                    [`&${componentCls}-variant-text`]: {
                        [varName('text-color')]: token.textTextColor,
                        [varName('text-color-hover')]: token.textTextHoverColor,
                        [varName('text-color-active')]: token.textTextActiveColor,
                        [varName('bg-color-hover')]: token.textHoverBg
                    },
                    [`&${componentCls}-background-ghost`]: {
                        [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
                            [varName('text-color')]: token.defaultGhostColor,
                            [varName('border-color')]: token.defaultGhostBorderColor
                        }
                    }
                }
            },
            // >>>>> Preset Colors
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].map((colorKey)=>{
                const darkColor = token[`${colorKey}6`];
                const lightColor = token[`${colorKey}1`];
                const hoverColor = token[`${colorKey}Hover`];
                const lightHoverColor = token[`${colorKey}2`];
                const lightActiveColor = token[`${colorKey}3`];
                const activeColor = token[`${colorKey}Active`];
                const shadowColor = token[`${colorKey}ShadowColor`];
                return {
                    [`&${componentCls}-color-${colorKey}`]: {
                        [varName('color-base')]: darkColor,
                        [varName('color-hover')]: hoverColor,
                        [varName('color-active')]: activeColor,
                        [varName('color-light')]: lightColor,
                        [varName('color-light-hover')]: lightHoverColor,
                        [varName('color-light-active')]: lightActiveColor,
                        [varName('shadow')]: shadowColor
                    }
                };
            }),
            // ==============================================================
            // ==                         Disabled                         ==
            // ==============================================================
            {
                // Disabled
                [`&:disabled, &${token.componentCls}-disabled`]: {
                    cursor: 'not-allowed',
                    borderColor: token.colorBorderDisabled,
                    background: varRef('bg-color-disabled'),
                    color: token.colorTextDisabled,
                    boxShadow: 'none'
                }
            },
            // ==============================================================
            // ==                          Ghost                           ==
            // ==============================================================
            {
                // Ghost
                [`&${componentCls}-background-ghost`]: {
                    [varName('bg-color')]: token.ghostBg,
                    [varName('bg-color-hover')]: token.ghostBg,
                    [varName('bg-color-active')]: token.ghostBg,
                    [varName('shadow')]: 'none',
                    [`&${componentCls}-variant-outlined, &${componentCls}-variant-dashed`]: {
                        [varName('bg-color-hover')]: token.ghostBg,
                        [varName('bg-color-active')]: token.ghostBg
                    }
                }
            }
        ]
    };
};
const __TURBOPACK__default__export__ = genVariantStyle;
}),
"[project]/apps/web/node_modules/antd/es/button/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$variant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/variant.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// ============================== Shared ==============================
const genSharedButtonStyle = (token)=>{
    const { componentCls, iconCls, fontWeight, opacityLoading, motionDurationSlow, motionEaseInOut, iconGap, calc } = token;
    return {
        [componentCls]: {
            outline: 'none',
            position: 'relative',
            display: 'inline-flex',
            gap: iconGap,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            backgroundImage: 'none',
            cursor: 'pointer',
            transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
            userSelect: 'none',
            touchAction: 'manipulation',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genNoMotionStyle"])(),
            '&:disabled > *': {
                pointerEvents: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/51380
            [`${componentCls}-icon > svg`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetIcon"])(),
            // https://github.com/ant-design/ant-design/issues/57727
            [`${componentCls}-icon`]: {
                display: 'inline-flex',
                alignItems: 'center',
                [iconCls]: {
                    verticalAlign: 'middle',
                    // Baseline will align the first element.
                    // So the Button with SVG will make the baseline to be the bottom of the SVG.
                    // Let's use `:before` to add a space to make the baseline to be the center of the Button.
                    // https://github.com/ant-design/ant-design/issues/58428
                    '&:before': {
                        content: '"\\a0"',
                        display: 'inline-block',
                        width: 0
                    }
                }
            },
            '> a': {
                color: 'currentColor'
            },
            '&:not(:disabled)': (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            [`&${componentCls}-two-chinese-chars::first-letter`]: {
                letterSpacing: '0.34em'
            },
            [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
                marginInlineEnd: '-0.34em',
                letterSpacing: '0.34em'
            },
            [`&${componentCls}-icon-only`]: {
                paddingInline: 0,
                // make `btn-icon-only` not too narrow
                [`&${componentCls}-compact-item`]: {
                    flex: 'none'
                }
            },
            // Loading
            [`&${componentCls}-loading`]: {
                opacity: opacityLoading,
                cursor: 'default'
            },
            [`${componentCls}-loading-icon`]: {
                transition: [
                    'width',
                    'opacity',
                    'margin'
                ].map((prop)=>`${prop} ${motionDurationSlow} ${motionEaseInOut}`).join(',')
            },
            // iconPlacement
            [`&:not(${componentCls}-icon-end)`]: {
                [`${componentCls}-loading-icon-motion`]: {
                    '&-appear-start, &-enter-start, &-appear-prepare, &-enter-prepare': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal(),
                        opacity: 0
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineEnd: 0
                    },
                    '&-leave-start': {
                        marginInlineEnd: 0
                    },
                    '&-leave-active': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal()
                    }
                }
            },
            '&-icon-end': {
                flexDirection: 'row-reverse',
                [`${componentCls}-loading-icon-motion`]: {
                    '&-appear-start, &-enter-start, &-appear-prepare, &-enter-prepare': {
                        marginInlineStart: calc(iconGap).mul(-1).equal(),
                        opacity: 0
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineStart: 0
                    },
                    '&-leave-start': {
                        marginInlineStart: 0
                    },
                    '&-leave-active': {
                        marginInlineStart: calc(iconGap).mul(-1).equal()
                    }
                }
            }
        }
    };
};
// ============================== Shape ===============================
const genCircleButtonStyle = (token)=>({
        minWidth: token.controlHeight,
        paddingInline: 0,
        borderRadius: '50%'
    });
// =============================== Size ===============================
const genButtonStyle = (token, prefixCls = '')=>{
    const { componentCls, controlHeight, fontSize, borderRadius, buttonPaddingHorizontal, iconCls, buttonPaddingVertical, buttonIconOnlyFontSize } = token;
    return [
        {
            [prefixCls]: {
                fontSize,
                height: controlHeight,
                padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingVertical)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingHorizontal)}`,
                borderRadius,
                [`&${componentCls}-icon-only`]: {
                    width: controlHeight,
                    [iconCls]: {
                        fontSize: buttonIconOnlyFontSize
                    }
                }
            }
        },
        // Shape - patch prefixCls again to override solid border radius style
        {
            [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token)
        },
        {
            [`${componentCls}${componentCls}-round${prefixCls}`]: {
                borderRadius: token.controlHeight,
                [`&:not(${componentCls}-icon-only)`]: {
                    paddingInline: token.buttonPaddingHorizontal
                }
            }
        }
    ];
};
const genSizeBaseButtonStyle = (token)=>{
    const baseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        fontSize: token.contentFontSize
    });
    return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = (token)=>{
    const smallToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightSM,
        fontSize: token.contentFontSizeSM,
        padding: token.paddingXS,
        buttonPaddingHorizontal: token.paddingInlineSM,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusSM,
        buttonIconOnlyFontSize: token.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token)=>{
    const largeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightLG,
        fontSize: token.contentFontSizeLG,
        buttonPaddingHorizontal: token.paddingInlineLG,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusLG,
        buttonIconOnlyFontSize: token.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            [`&${componentCls}-block`]: {
                width: '100%'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Button', (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Shared
        genSharedButtonStyle(buttonToken),
        // Size
        genSizeBaseButtonStyle(buttonToken),
        genSizeSmallButtonStyle(buttonToken),
        genSizeLargeButtonStyle(buttonToken),
        // Block
        genBlockButtonStyle(buttonToken),
        // Variant
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$variant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonToken),
        // Button Group
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    unitless: {
        fontWeight: true,
        contentLineHeight: true,
        contentLineHeightSM: true,
        contentLineHeightLG: true
    }
});
}),
"[project]/apps/web/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCompactItemStyle",
    ()=>genCompactItemStyle
]);
// handle border collapse
function compactItemBorder(token, parentCls, options, prefixCls) {
    const { focusElCls, focus, borderElCls } = options;
    const childCombinator = borderElCls ? '> *' : '';
    const suffix = childCombinator ? ` ${childCombinator}` : '';
    const genEffects = (effects)=>effects.filter(Boolean).map((n)=>`&:${n}${suffix}`).join(',');
    const hoverEffects = genEffects([
        'hover',
        focusElCls ? `hover${focusElCls}` : null
    ]);
    const focusEffects = genEffects([
        focus ? 'focus' : null,
        'active'
    ]);
    return {
        [`&-item:not(${parentCls}-last-item)`]: {
            marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
        },
        [`&-item:not(${prefixCls}-status-success)`]: {
            zIndex: 2
        },
        '&-item': {
            [focusEffects]: {
                zIndex: 3
            },
            [hoverEffects]: {
                zIndex: 4
            },
            ...focusElCls ? {
                [`&${focusElCls}`]: {
                    zIndex: 3
                }
            } : {},
            [`&[disabled] ${childCombinator}`]: {
                zIndex: 0
            }
        }
    };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
    const { borderElCls } = options;
    const childCombinator = borderElCls ? `> ${borderElCls}` : '';
    return {
        [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
            borderRadius: 0
        },
        [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
            [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
            [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        }
    };
}
function genCompactItemStyle(token, options = {
    focus: true
}) {
    const { componentCls } = token;
    const { componentCls: customizePrefixCls } = options;
    const mergedComponentCls = customizePrefixCls || componentCls;
    const compactCls = `${mergedComponentCls}-compact`;
    return {
        [compactCls]: {
            ...compactItemBorder(token, compactCls, options, mergedComponentCls),
            ...compactItemBorderRadius(mergedComponentCls, compactCls, options)
        }
    };
}
}),
"[project]/apps/web/node_modules/antd/es/style/compact-item-vertical.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCompactItemVerticalStyle",
    ()=>genCompactItemVerticalStyle
]);
function compactItemVerticalBorder(token, parentCls, prefixCls) {
    return {
        // border collapse
        [`&-item:not(${parentCls}-last-item)`]: {
            marginBottom: token.calc(token.lineWidth).mul(-1).equal()
        },
        [`&-item:not(${prefixCls}-status-success)`]: {
            zIndex: 2
        },
        '&-item': {
            '&:focus,&:active': {
                zIndex: 3
            },
            '&:hover': {
                zIndex: 4
            },
            '&[disabled]': {
                zIndex: 0
            }
        }
    };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
        [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
            borderRadius: 0
        },
        [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
            [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
                borderEndEndRadius: 0,
                borderEndStartRadius: 0
            }
        },
        [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
            [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
                borderStartStartRadius: 0,
                borderStartEndRadius: 0
            }
        }
    };
}
function genCompactItemVerticalStyle(token) {
    const compactCls = `${token.componentCls}-compact-vertical`;
    return {
        [compactCls]: {
            ...compactItemVerticalBorder(token, compactCls, token.componentCls),
            ...compactItemBorderVerticalRadius(token.componentCls, compactCls)
        }
    };
}
}),
"[project]/apps/web/node_modules/antd/es/button/style/compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/compact-item-vertical.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)");
;
;
;
;
;
const genButtonCompactStyle = (token)=>{
    const { antCls, componentCls, lineWidth, calc, colorBgContainer } = token;
    const solidSelector = `${componentCls}-variant-solid:not([disabled])`;
    const insetOffset = calc(lineWidth).mul(-1).equal();
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'btn');
    const getCompactBorderStyle = (vertical)=>{
        const itemCls = `${componentCls}-compact${vertical ? '-vertical' : ''}-item`;
        return {
            // TODO: Border color transition should be not cover when has color.
            [itemCls]: {
                [varName('compact-connect-border-color')]: varRef('bg-color-hover'),
                [`&${solidSelector}`]: {
                    transition: `none`,
                    [`& + ${solidSelector}:before`]: [
                        {
                            position: 'absolute',
                            backgroundColor: varRef('compact-connect-border-color'),
                            content: '""'
                        },
                        vertical ? {
                            top: insetOffset,
                            insetInline: insetOffset,
                            height: lineWidth
                        } : {
                            insetBlock: insetOffset,
                            insetInlineStart: insetOffset,
                            width: lineWidth
                        }
                    ],
                    '&:hover:before': {
                        display: 'none'
                    }
                }
            }
        };
    };
    // Special styles for solid Button
    return [
        getCompactBorderStyle(),
        getCompactBorderStyle(true),
        {
            [`${solidSelector}${componentCls}-color-default`]: {
                [varName('compact-connect-border-color')]: `color-mix(in srgb, ${varRef('bg-color-hover')} 75%, ${colorBgContainer})`
            }
        }
    ];
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Button',
    'compact'
], (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Space Compact
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(buttonToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemVerticalStyle"])(buttonToken),
        genButtonCompactStyle(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useDelayState.js [app-client] (ecmascript) <export default as useDelayState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript) <export default as useLayoutEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$ButtonGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/ButtonGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/DefaultLoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/style/compact.js [app-client] (ecmascript)");
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
function getLoadingConfig(loading) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(loading)) {
        let delay = loading?.delay;
        delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(delay) ? delay : 0;
        return {
            loading: delay <= 0,
            delay
        };
    }
    return {
        loading: !!loading,
        delay: 0
    };
}
const ButtonTypeMap = {
    default: [
        'default',
        'outlined'
    ],
    primary: [
        'primary',
        'solid'
    ],
    dashed: [
        'default',
        'dashed'
    ],
    // `link` is not a real color but we should compatible with it
    link: [
        'link',
        'link'
    ],
    text: [
        'default',
        'text'
    ]
};
const InternalCompoundedButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { _skipSemantic, loading = false, prefixCls: customizePrefixCls, color, variant, type, danger = false, shape: customizeShape, size: customizeSize, disabled: customDisabled, className, rootClassName, children, icon, iconPosition, iconPlacement, ghost = false, block = false, // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = 'button', classNames, styles, style, autoInsertSpace, autoFocus, ...rest } = props;
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    // https://github.com/ant-design/ant-design/issues/47605
    // Compatible with original `type` behavior
    const mergedType = type || 'default';
    const { getPrefixCls, direction, autoInsertSpace: contextAutoInsertSpace, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, loadingIcon: contextLoadingIcon, shape: contextShape, color: contextColor, variant: contextVariant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('button');
    const mergedShape = customizeShape || contextShape || 'default';
    const [parsedColor, parsedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo": ()=>{
            // >>>>> Local
            // Color & Variant
            if (color && variant) {
                return [
                    color,
                    variant
                ];
            }
            // Sugar syntax
            if (type || danger) {
                const colorVariantPair = ButtonTypeMap[mergedType] || [];
                if (danger) {
                    return [
                        'danger',
                        colorVariantPair[1]
                    ];
                }
                return colorVariantPair;
            }
            if (variant === 'solid') {
                return [
                    'primary',
                    variant
                ];
            }
            // >>> Context fallback
            if (contextColor && contextVariant) {
                return [
                    contextColor,
                    contextVariant
                ];
            }
            if (contextVariant === 'solid') {
                return [
                    'primary',
                    contextVariant
                ];
            }
            return [
                'default',
                'outlined'
            ];
        }
    }["InternalCompoundedButton.useMemo"], [
        color,
        variant,
        type,
        danger,
        contextColor,
        contextVariant,
        mergedType
    ]);
    const [mergedColor, mergedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo": ()=>{
            if (ghost && parsedVariant === 'solid') {
                return [
                    parsedColor,
                    'outlined'
                ];
            }
            return [
                parsedColor,
                parsedVariant
            ];
        }
    }["InternalCompoundedButton.useMemo"], [
        parsedColor,
        parsedVariant,
        ghost
    ]);
    const isDanger = mergedColor === 'danger';
    const mergedColorText = isDanger ? 'dangerous' : mergedColor;
    const mergedInsertSpace = autoInsertSpace ?? contextAutoInsertSpace ?? true;
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const disabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled ?? disabled;
    const groupSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$ButtonGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupSizeContext"]);
    const loadingOrDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo[loadingOrDelay]": ()=>getLoadingConfig(loading)
    }["InternalCompoundedButton.useMemo[loadingOrDelay]"], [
        loading
    ]);
    const [innerLoading, setInnerLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useDelayState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDelayState$3e$__["useDelayState"])(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, buttonRef);
    const needInserted = childNodes.length === 1 && !icon && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant);
    // ========================= Mount ==========================
    // Record for mount status.
    // This will help to no to show the animation of loading on the first mount.
    const isMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InternalCompoundedButton.useEffect": ()=>{
            isMountRef.current = false;
            return ({
                "InternalCompoundedButton.useEffect": ()=>{
                    isMountRef.current = true;
                }
            })["InternalCompoundedButton.useEffect"];
        }
    }["InternalCompoundedButton.useEffect"], []);
    // ========================= Effect =========================
    // Loading. Should use `useLayoutEffect` to avoid low perf multiple click issue.
    // https://github.com/ant-design/ant-design/issues/51325
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLayoutEffect$3e$__["useLayoutEffect"])({
        "InternalCompoundedButton.useLayoutEffect": ()=>{
            if (loadingOrDelay.delay > 0) {
                setInnerLoading(true, {
                    ms: loadingOrDelay.delay
                });
            } else {
                setInnerLoading(loadingOrDelay.loading, true);
            }
        }
    }["InternalCompoundedButton.useLayoutEffect"], [
        loadingOrDelay.delay,
        loadingOrDelay.loading
    ]);
    // Two chinese characters check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            // FIXME: for HOC usage like <FormatMessage />
            if (!buttonRef.current || !mergedInsertSpace) {
                return;
            }
            const buttonText = buttonRef.current.textContent || '';
            if (needInserted && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTwoCNChar"])(buttonText)) {
                if (!hasTwoCNChar) {
                    setHasTwoCNChar(true);
                }
            } else if (hasTwoCNChar) {
                setHasTwoCNChar(false);
            }
        }
    }["InternalCompoundedButton.useEffect"]); // 这里不需要依赖数组
    // Auto focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            if (autoFocus) {
                buttonRef.current?.focus();
            }
        }
    }["InternalCompoundedButton.useEffect"], []); // 这里不需要依赖 autoFocus 变量，只需要在第一次 mount 时生效
    // ========================= Events =========================
    const handleClick = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "InternalCompoundedButton.useCallback[handleClick]": (e)=>{
            // FIXME: https://github.com/ant-design/ant-design/issues/30207
            if (innerLoading || mergedDisabled) {
                e.preventDefault();
                return;
            }
            props.onClick?.('href' in props ? e : e);
        }
    }["InternalCompoundedButton.useCallback[handleClick]"], [
        props.onClick,
        innerLoading,
        mergedDisabled
    ]);
    // ========================== Warn ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(ghost && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)), 'usage', "`link` or `text` button can't be a `ghost` button.") : "TURBOPACK unreachable";
        warning.deprecated(!iconPosition, 'iconPosition', 'iconPlacement');
    }
    // ========================== Size ==========================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const sizeFullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalCompoundedButton.useSize[sizeFullName]": (ctxSize)=>customizeSize ?? compactSize ?? groupSize ?? ctxSize
    }["InternalCompoundedButton.useSize[sizeFullName]"]);
    const iconType = innerLoading ? 'loading' : icon;
    const mergedIconPlacement = iconPlacement ?? iconPosition ?? 'start';
    const linkButtonRestProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(rest, [
        'navigate'
    ]);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        type: mergedType,
        color: mergedColor,
        variant: mergedVariant,
        danger: isDanger,
        shape: mergedShape,
        size: sizeFullName,
        disabled: mergedDisabled,
        loading: innerLoading,
        iconPlacement: mergedIconPlacement
    };
    // ========================= Style ==========================
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(contextStyle);
    const styleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        _skipSemantic ? undefined : contextClassNames,
        classNames
    ], [
        _skipSemantic ? undefined : contextStyles,
        contextStyleRoot,
        styles,
        styleRoot
    ], {
        props: mergedProps
    });
    // ========================= Render =========================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, cssVarCls, {
        [`${prefixCls}-${mergedShape}`]: mergedShape !== 'default' && mergedShape !== 'square' && mergedShape,
        // Compatible with versions earlier than 5.21.0
        [`${prefixCls}-${mergedType}`]: mergedType,
        [`${prefixCls}-dangerous`]: danger,
        [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
        [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
        [`${prefixCls}-lg`]: sizeFullName === 'large',
        [`${prefixCls}-sm`]: sizeFullName === 'small',
        [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
        [`${prefixCls}-background-ghost`]: ghost && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant),
        [`${prefixCls}-loading`]: innerLoading,
        [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-icon-end`]: mergedIconPlacement === 'end'
    }, compactItemClassnames, className, rootClassName, contextClassName, mergedClassNames.root);
    const iconSharedProps = {
        className: mergedClassNames.icon,
        style: mergedStyles.icon
    };
    /**
   * Extract icon node
   * If there is a custom icon and not in loading state: show custom icon
   */ const iconWrapperElement = (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            ...iconSharedProps
        }, child);
    const defaultLoadingIconElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        existIcon: !!icon,
        prefixCls: prefixCls,
        loading: innerLoading,
        mount: isMountRef.current,
        ...iconSharedProps
    });
    const mergedLoadingIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(loading) ? loading.icon || contextLoadingIcon : contextLoadingIcon;
    /**
   * Using if-else statements can improve code readability without affecting future expansion.
   */ let iconNode;
    if (icon && !innerLoading) {
        iconNode = iconWrapperElement(icon);
    } else if (loading && mergedLoadingIcon) {
        iconNode = iconWrapperElement(mergedLoadingIcon);
    } else {
        iconNode = defaultLoadingIconElement;
    }
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceChildren"])(children, needInserted && mergedInsertSpace, mergedStyles.content, mergedClassNames.content) : null;
    if (linkButtonRestProps.href !== undefined) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
            ...linkButtonRestProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classes, {
                [`${prefixCls}-disabled`]: mergedDisabled
            }),
            href: mergedDisabled ? undefined : linkButtonRestProps.href,
            style: mergedStyles.root,
            onClick: handleClick,
            ref: mergedRef,
            tabIndex: mergedDisabled ? -1 : 0,
            "aria-disabled": mergedDisabled
        }, iconNode, contentNode);
    }
    let buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...rest,
        type: htmlType,
        className: classes,
        style: mergedStyles.root,
        onClick: handleClick,
        disabled: mergedDisabled,
        ref: mergedRef
    }, iconNode, contentNode, compactItemClassnames && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)) {
        buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            component: "Button",
            disabled: innerLoading
        }, buttonNode);
    }
    return buttonNode;
});
const Button = InternalCompoundedButton;
Button.Group = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$ButtonGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Button.__ANT_BUTTON = true;
if ("TURBOPACK compile-time truthy", 1) {
    Button.displayName = 'Button';
}
const __TURBOPACK__default__export__ = Button;
}),
"[project]/apps/web/node_modules/antd/es/_util/ActionButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useState.js [app-client] (ecmascript) <export default as useState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ActionButton = (props)=>{
    const { type, children, prefixCls, buttonProps, close, autoFocus, emitEvent, isSilent, quitOnNullishReturnValue, actionFn } = props;
    const clickedRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const buttonRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useState$3e$__["useState"])(false);
    const onInternalClose = (...args)=>{
        close?.(...args);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActionButton.useEffect": ()=>{
            let timeoutId = null;
            if (autoFocus) {
                timeoutId = setTimeout({
                    "ActionButton.useEffect": ()=>{
                        buttonRef.current?.focus({
                            preventScroll: true
                        });
                    }
                }["ActionButton.useEffect"]);
            }
            return ({
                "ActionButton.useEffect": ()=>{
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                }
            })["ActionButton.useEffect"];
        }
    }["ActionButton.useEffect"], [
        autoFocus
    ]);
    const handlePromiseOnOk = (returnValueOfOnOk)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(returnValueOfOnOk)) {
            return;
        }
        setLoading(true);
        returnValueOfOnOk.then((...args)=>{
            setLoading(false, true);
            onInternalClose.apply(void 0, args);
            clickedRef.current = false;
        }, (e)=>{
            // See: https://github.com/ant-design/ant-design/issues/6183
            setLoading(false, true);
            clickedRef.current = false;
            // Do not throw if is `await` mode
            if (isSilent?.()) {
                return;
            }
            return Promise.reject(e);
        });
    };
    const onClick = (e)=>{
        if (clickedRef.current) {
            return;
        }
        clickedRef.current = true;
        if (!actionFn) {
            onInternalClose();
            return;
        }
        let returnValueOfOnOk;
        if (emitEvent) {
            returnValueOfOnOk = actionFn(e);
            if (quitOnNullishReturnValue && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(returnValueOfOnOk)) {
                clickedRef.current = false;
                onInternalClose(e);
                return;
            }
        } else if (actionFn.length) {
            returnValueOfOnOk = actionFn(close);
            // https://github.com/ant-design/ant-design/issues/23358
            clickedRef.current = false;
        } else {
            returnValueOfOnOk = actionFn();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(returnValueOfOnOk)) {
                onInternalClose();
                return;
            }
        }
        handlePromiseOnOk(returnValueOfOnOk);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLegacyProps"])(type),
        onClick: onClick,
        loading: loading,
        prefixCls: prefixCls,
        ...buttonProps,
        ref: buttonRef
    }, children);
};
const __TURBOPACK__default__export__ = ActionButton;
}),
"[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalContext",
    ()=>ModalContext,
    "ModalContextProvider",
    ()=>ModalContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ModalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
const { Provider: ModalContextProvider } = ModalContext;
}),
"[project]/apps/web/node_modules/antd/es/modal/components/ConfirmCancelBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ActionButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ActionButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const ConfirmCancelBtn = ()=>{
    const { autoFocusButton, cancelButtonProps, cancelTextLocale, isSilent, mergedOkCancel, rootPrefixCls, close, onCancel, onConfirm, onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContext"]);
    return mergedOkCancel ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ActionButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isSilent: isSilent,
        actionFn: onCancel,
        close: (...args)=>{
            close?.(...args);
            onConfirm?.(false);
            onClose?.();
        },
        autoFocus: autoFocusButton === 'cancel',
        buttonProps: cancelButtonProps,
        prefixCls: `${rootPrefixCls}-btn`
    }, cancelTextLocale) : null;
};
const __TURBOPACK__default__export__ = ConfirmCancelBtn;
}),
"[project]/apps/web/node_modules/antd/es/modal/components/ConfirmOkBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ActionButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ActionButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const ConfirmOkBtn = ()=>{
    const { autoFocusButton, close, isSilent, okButtonProps, rootPrefixCls, okTextLocale, okType, onConfirm, onOk, onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContext"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ActionButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isSilent: isSilent,
        type: okType || 'primary',
        actionFn: onOk,
        close: (...args)=>{
            close?.(...args);
            onConfirm?.(true);
            onClose?.();
        },
        autoFocus: autoFocusButton === 'ok',
        buttonProps: okButtonProps,
        prefixCls: `${rootPrefixCls}-btn`
    }, okTextLocale);
};
const __TURBOPACK__default__export__ = ConfirmOkBtn;
}),
"[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "FormItemInputContext",
    ()=>FormItemInputContext,
    "FormItemPrefixContext",
    ()=>FormItemPrefixContext,
    "FormProvider",
    ()=>FormProvider,
    "NoFormStyle",
    ()=>NoFormStyle,
    "NoStyleItemContext",
    ()=>NoStyleItemContext,
    "VariantContext",
    ()=>VariantContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/form/es/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
"use client";
;
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    labelAlign: 'right',
    layout: 'horizontal',
    itemRef: ()=>{}
});
const NoStyleItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const FormProvider = (props)=>{
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
        'prefixCls'
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...providerProps
    });
};
const FormItemPrefixContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    FormItemInputContext.displayName = 'FormItemInputContext';
}
const NoFormStyle = ({ children, status, override })=>{
    const formItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormItemInputContext);
    const newFormItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NoFormStyle.useMemo[newFormItemInputContext]": ()=>{
            const newContext = {
                ...formItemInputContext
            };
            if (override) {
                delete newContext.isFormItemInput;
            }
            if (status) {
                delete newContext.status;
                delete newContext.hasFeedback;
                delete newContext.feedbackIcon;
            }
            return newContext;
        }
    }["NoFormStyle.useMemo[newFormItemInputContext]"], [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};
const VariantContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
}),
"[project]/apps/web/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(children)) {
        return null;
    }
    let result = children;
    if (form) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoFormStyle"], {
            override: true,
            status: true
        }, result);
    }
    if (space) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoCompactStyle"], null, result);
    }
    return result;
};
const __TURBOPACK__default__export__ = ContextIsolator;
}),
"[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeClosable",
    ()=>computeClosable,
    "pickClosable",
    ()=>pickClosable,
    "useClosable",
    ()=>useClosable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__mergeProps$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/mergeProps.js [app-client] (ecmascript) <export default as mergeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript) <export default as pickAttrs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const pickClosable = (context)=>{
    if (!context) {
        return undefined;
    }
    const { closable, closeIcon } = context;
    return {
        closable,
        closeIcon
    };
};
const EmptyFallbackCloseCollection = {};
const computeClosableConfig = (closable, closeIcon)=>{
    if (!closable && (closable === false || closeIcon === false || closeIcon === null)) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(closable) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(closeIcon)) {
        return null;
    }
    let closableConfig = {
        closeIcon: typeof closeIcon !== 'boolean' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(closeIcon) ? closeIcon : undefined
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable)) {
        closableConfig = {
            ...closableConfig,
            ...closable
        };
    }
    return closableConfig;
};
const mergeClosableConfigs = (propConfig, contextConfig, fallbackConfig)=>{
    if (propConfig === false) {
        return false;
    }
    if (propConfig) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__mergeProps$3e$__["mergeProps"])(fallbackConfig, contextConfig, propConfig);
    }
    if (contextConfig === false) {
        return false;
    }
    if (contextConfig) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__mergeProps$3e$__["mergeProps"])(fallbackConfig, contextConfig);
    }
    return fallbackConfig.closable ? fallbackConfig : false;
};
const computeCloseIcon = (mergedConfig, fallbackCloseCollection, closeLabel)=>{
    const { closeIconRender } = fallbackCloseCollection;
    const { closeIcon, ...restConfig } = mergedConfig;
    let finalCloseIcon = closeIcon;
    const ariaOrDataProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pickAttrs$3e$__["pickAttrs"])(restConfig, true);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(finalCloseIcon)) {
        if (closeIconRender) {
            finalCloseIcon = closeIconRender(finalCloseIcon);
        }
        finalCloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(finalCloseIcon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(finalCloseIcon, {
            'aria-label': closeLabel,
            ...finalCloseIcon.props,
            ...ariaOrDataProps
        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            "aria-label": closeLabel,
            ...ariaOrDataProps
        }, finalCloseIcon);
    }
    return [
        finalCloseIcon,
        {
            'aria-label': closeLabel,
            ...ariaOrDataProps
        }
    ];
};
const computeClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection, closeLabel = 'Close')=>{
    const propConfig = computeClosableConfig(propCloseCollection?.closable, propCloseCollection?.closeIcon);
    const contextConfig = computeClosableConfig(contextCloseCollection?.closable, contextCloseCollection?.closeIcon);
    const mergedFallback = {
        closeIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        ...fallbackCloseCollection
    };
    const mergedConfig = mergeClosableConfigs(propConfig, contextConfig, mergedFallback);
    const closeBtnIsDisabled = typeof mergedConfig !== 'boolean' ? !!mergedConfig?.disabled : false;
    if (mergedConfig === false) {
        return [
            false,
            null,
            closeBtnIsDisabled,
            {}
        ];
    }
    const [closeIcon, ariaProps] = computeCloseIcon(mergedConfig, mergedFallback, closeLabel);
    return [
        true,
        closeIcon,
        closeBtnIsDisabled,
        ariaProps
    ];
};
const useClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection)=>{
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('global', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useClosable.useMemo": ()=>{
            return computeClosable(propCloseCollection, contextCloseCollection, {
                closeIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
                ...fallbackCloseCollection
            }, contextLocale.close);
        }
    }["useClosable.useMemo"], [
        propCloseCollection,
        contextCloseCollection,
        fallbackCloseCollection,
        contextLocale.close
    ]);
};
}),
"[project]/apps/web/node_modules/antd/es/_util/styleChecker.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDocElement",
    ()=>canUseDocElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__canUseDom$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/canUseDom.js [app-client] (ecmascript) <export default as canUseDom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/Dom/styleChecker.js [app-client] (ecmascript)");
;
const canUseDocElement = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$canUseDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__canUseDom$3e$__["canUseDom"])() && window.document.documentElement;
;
}),
"[project]/apps/web/node_modules/antd/es/drawer/useFocusable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFocusable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useFocusable(focusable, defaultTrap, legacyFocusTriggerAfterClose) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFocusable.useMemo": ()=>{
            const ret = {
                trap: defaultTrap ?? true,
                focusTriggerAfterClose: legacyFocusTriggerAfterClose ?? true
            };
            return {
                ...ret,
                ...focusable
            };
        }
    }["useFocusable.useMemo"], [
        focusable,
        defaultTrap,
        legacyFocusTriggerAfterClose
    ]);
}
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Element = (props)=>{
    const { prefixCls, className, style, size, shape } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Skeleton');
        warning.deprecated(size !== 'default', 'size="default"', 'size="medium"');
    }
    const sizeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small'
    });
    const shapeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-circle`]: shape === 'circle',
        [`${prefixCls}-square`]: shape === 'square',
        [`${prefixCls}-round`]: shape === 'round'
    });
    const sizeStyle = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Element.useMemo[sizeStyle]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size) ? {
                width: size,
                height: size,
                lineHeight: `${size}px`
            } : {}
    }["Element.useMemo[sizeStyle]"], [
        size
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, sizeCls, shapeCls, className),
        style: {
            ...sizeStyle,
            ...style
        }
    });
};
const __TURBOPACK__default__export__ = Element;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
const skeletonClsLoading = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"](`ant-skeleton-loading`, {
    '0%': {
        backgroundPosition: '100% 50%'
    },
    '100%': {
        backgroundPosition: '0 50%'
    }
});
const genSkeletonElementCommonSize = (size)=>({
        height: size,
        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(size)
    });
const genSkeletonElementSize = (size)=>({
        width: size,
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonColor = (token)=>({
        background: token.skeletonLoadingBackground,
        backgroundSize: '400% 100%',
        animationName: skeletonClsLoading,
        animationDuration: token.skeletonLoadingMotionDuration,
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite'
    });
const genSkeletonElementInputSize = (size, calc)=>({
        width: calc(size).mul(5).equal(),
        minWidth: calc(size).mul(5).equal(),
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonElementAvatar = (token)=>{
    const { skeletonAvatarCls, gradientFromColor, controlHeight, controlHeightLG, controlHeightSM } = token;
    return {
        [skeletonAvatarCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            ...genSkeletonElementSize(controlHeight)
        },
        [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
            borderRadius: '50%'
        },
        [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
            ...genSkeletonElementSize(controlHeightLG)
        },
        [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
            ...genSkeletonElementSize(controlHeightSM)
        }
    };
};
const genSkeletonElementInput = (token)=>{
    const { controlHeight, borderRadiusSM, skeletonInputCls, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return {
        [skeletonInputCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM,
            ...genSkeletonElementInputSize(controlHeight, calc)
        },
        [`${skeletonInputCls}-lg`]: {
            ...genSkeletonElementInputSize(controlHeightLG, calc)
        },
        [`${skeletonInputCls}-sm`]: {
            ...genSkeletonElementInputSize(controlHeightSM, calc)
        }
    };
};
const genSkeletonElementShape = (token)=>{
    const { gradientFromColor, borderRadiusSM, imageSizeBase, calc } = token;
    return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        background: gradientFromColor,
        borderRadius: borderRadiusSM,
        ...genSkeletonElementSize(calc(imageSizeBase).mul(2).equal())
    };
};
const genSkeletonElementNode = (token)=>{
    return {
        [token.skeletonNodeCls]: {
            ...genSkeletonElementShape(token)
        }
    };
};
const genSkeletonElementImage = (token)=>{
    const { skeletonImageCls, imageSizeBase, calc } = token;
    return {
        [skeletonImageCls]: {
            ...genSkeletonElementShape(token),
            [`${skeletonImageCls}-path`]: {
                fill: '#bfbfbf'
            },
            [`${skeletonImageCls}-svg`]: {
                ...genSkeletonElementSize(imageSizeBase),
                maxWidth: calc(imageSizeBase).mul(4).equal(),
                maxHeight: calc(imageSizeBase).mul(4).equal()
            },
            [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
                borderRadius: '50%'
            }
        },
        [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
            borderRadius: '50%'
        }
    };
};
const genSkeletonElementButtonShape = (token, size, buttonCls)=>{
    const { skeletonButtonCls } = token;
    return {
        [`${buttonCls}${skeletonButtonCls}-circle`]: {
            width: size,
            minWidth: size,
            borderRadius: '50%'
        },
        [`${buttonCls}${skeletonButtonCls}-round`]: {
            borderRadius: size
        }
    };
};
const genSkeletonElementButtonSize = (size, calc)=>({
        width: calc(size).mul(2).equal(),
        minWidth: calc(size).mul(2).equal(),
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonElementButton = (token)=>{
    const { borderRadiusSM, skeletonButtonCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return {
        [skeletonButtonCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM,
            width: calc(controlHeight).mul(2).equal(),
            minWidth: calc(controlHeight).mul(2).equal(),
            ...genSkeletonElementButtonSize(controlHeight, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
        [`${skeletonButtonCls}-lg`]: {
            ...genSkeletonElementButtonSize(controlHeightLG, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),
        [`${skeletonButtonCls}-sm`]: {
            ...genSkeletonElementButtonSize(controlHeightSM, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`)
    };
};
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, skeletonAvatarCls, skeletonTitleCls, skeletonParagraphCls, skeletonButtonCls, skeletonInputCls, skeletonNodeCls, skeletonImageCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, padding, marginSM, borderRadius, titleHeight, blockRadius, paragraphLiHeight, controlHeightXS, paragraphMarginTop } = token;
    return {
        [componentCls]: {
            display: 'table',
            width: '100%',
            [`${componentCls}-header`]: {
                display: 'table-cell',
                paddingInlineEnd: padding,
                verticalAlign: 'top',
                // Avatar
                [skeletonAvatarCls]: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: gradientFromColor,
                    ...genSkeletonElementSize(controlHeight)
                },
                [`${skeletonAvatarCls}-circle`]: {
                    borderRadius: '50%'
                },
                [`${skeletonAvatarCls}-lg`]: {
                    ...genSkeletonElementSize(controlHeightLG)
                },
                [`${skeletonAvatarCls}-sm`]: {
                    ...genSkeletonElementSize(controlHeightSM)
                }
            },
            [`${componentCls}-section`]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                // Title
                [skeletonTitleCls]: {
                    width: '100%',
                    height: titleHeight,
                    background: gradientFromColor,
                    borderRadius: blockRadius,
                    [`+ ${skeletonParagraphCls}`]: {
                        marginBlockStart: controlHeightSM
                    }
                },
                // paragraph
                [skeletonParagraphCls]: {
                    padding: 0,
                    '> li': {
                        width: '100%',
                        height: paragraphLiHeight,
                        listStyle: 'none',
                        background: gradientFromColor,
                        borderRadius: blockRadius,
                        '+ li': {
                            marginBlockStart: controlHeightXS
                        }
                    }
                },
                [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
                    width: '61%'
                }
            },
            [`&-round ${componentCls}-section`]: {
                [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
                    borderRadius
                }
            }
        },
        [`${componentCls}-with-avatar ${componentCls}-section`]: {
            // Title
            [skeletonTitleCls]: {
                marginBlockStart: marginSM,
                [`+ ${skeletonParagraphCls}`]: {
                    marginBlockStart: paragraphMarginTop
                }
            }
        },
        // Skeleton with element
        [`${componentCls}${componentCls}-element`]: {
            display: 'inline-block',
            width: 'auto',
            ...genSkeletonElementButton(token),
            ...genSkeletonElementAvatar(token),
            ...genSkeletonElementInput(token),
            ...genSkeletonElementNode(token),
            ...genSkeletonElementImage(token)
        },
        // Skeleton Block Button, Input
        [`${componentCls}${componentCls}-block`]: {
            width: '100%',
            [skeletonButtonCls]: {
                width: '100%'
            },
            [skeletonInputCls]: {
                width: '100%'
            }
        },
        // With active animation
        [`${componentCls}${componentCls}-active`]: {
            [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonNodeCls},
        ${skeletonImageCls}
      `]: {
                ...genSkeletonColor(token)
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorFillContent, colorFill } = token;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
        color: gradientFromColor,
        colorGradientEnd: gradientToColor,
        gradientFromColor,
        gradientToColor,
        titleHeight: token.controlHeight / 2,
        blockRadius: token.borderRadiusSM,
        paragraphMarginTop: token.marginLG + token.marginXXS,
        paragraphLiHeight: token.controlHeight / 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Skeleton', (token)=>{
    const { componentCls, calc } = token;
    const skeletonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        skeletonAvatarCls: `${componentCls}-avatar`,
        skeletonTitleCls: `${componentCls}-title`,
        skeletonParagraphCls: `${componentCls}-paragraph`,
        skeletonButtonCls: `${componentCls}-button`,
        skeletonInputCls: `${componentCls}-input`,
        skeletonNodeCls: `${componentCls}-node`,
        skeletonImageCls: `${componentCls}-image`,
        imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
        borderRadius: 100,
        // Large number to make capsule shape
        skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
        skeletonLoadingMotionDuration: '1.4s'
    });
    return genBaseStyle(skeletonToken);
}, prepareComponentToken, {
    deprecatedTokens: [
        [
            'color',
            'gradientFromColor'
        ],
        [
            'colorGradientEnd',
            'gradientToColor'
        ]
    ]
});
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonAvatar = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, active, style, styles, shape = 'circle', size: customSize, ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "SkeletonAvatar.useSize[mergedSize]": (ctx)=>customSize ?? ctx
    }["SkeletonAvatar.useSize[mergedSize]"]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-element`, {
        [`${prefixCls}-active`]: active
    }, classNames?.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles?.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: `${prefixCls}-avatar`,
        className: classNames?.content,
        style: {
            ...styles?.content,
            ...style
        },
        shape: shape,
        size: mergedSize,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonAvatar;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonButton = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, classNames, active, style, styles, block = false, size: customSize, ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "SkeletonButton.useSize[mergedSize]": (ctx)=>customSize ?? ctx
    }["SkeletonButton.useSize[mergedSize]"]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-element`, {
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-block`]: block
    }, classNames?.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles?.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: `${prefixCls}-button`,
        className: classNames?.content,
        style: {
            ...styles?.content,
            ...style
        },
        size: mergedSize,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonButton;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const SkeletonNode = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, internalClassName, style, styles, active, children } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-element`, {
        [`${prefixCls}-active`]: active
    }, hashId, classNames?.root, className, rootClassName, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles?.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames?.content, internalClassName || `${prefixCls}-node`),
        style: {
            ...styles?.content,
            ...style
        }
    }, children));
};
const __TURBOPACK__default__export__ = SkeletonNode;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)");
"use client";
;
;
;
const SkeletonImage = (props)=>{
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', props.prefixCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        internalClassName: `${prefixCls}-image`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 1098 1024",
        xmlns: "http://www.w3.org/2000/svg",
        className: `${prefixCls}-image-svg`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, "Image placeholder"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
        className: `${prefixCls}-image-path`
    })));
};
const __TURBOPACK__default__export__ = SkeletonImage;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SkeletonInput = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, active, block, style, styles, size: customSize, ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "SkeletonInput.useSize[mergedSize]": (ctx)=>customSize ?? ctx
    }["SkeletonInput.useSize[mergedSize]"]);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-element`, {
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-block`]: block
    }, classNames?.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles?.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: `${prefixCls}-input`,
        className: classNames?.content,
        style: {
            ...styles?.content,
            ...style
        },
        size: mergedSize,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonInput;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Paragraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const getWidth = (index, props)=>{
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
        return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
        return width;
    }
    return undefined;
};
const Paragraph = (props)=>{
    const { prefixCls, className, style, rows = 0 } = props;
    const rowList = Array.from({
        length: rows
    }).map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
            key: index,
            style: {
                width: getWidth(index, props)
            }
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className),
        style: style
    }, rowList);
};
const __TURBOPACK__default__export__ = Paragraph;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Title.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* eslint-disable jsx-a11y/heading-has-content */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
const Title = ({ prefixCls, className, width, style })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className),
        style: {
            width,
            ...style
        }
    });
const __TURBOPACK__default__export__ = Title;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/Skeleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Paragraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Title.js [app-client] (ecmascript)");
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
function getComponentProps(prop) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(prop)) {
        return prop;
    }
    return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
        // Square avatar
        return {
            size: 'large',
            shape: 'square'
        };
    }
    return {
        size: 'large',
        shape: 'circle'
    };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
        return {
            width: '38%'
        };
    }
    if (hasAvatar && hasParagraph) {
        return {
            width: '50%'
        };
    }
    return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
    const basicProps = {};
    // Width
    if (!hasAvatar || !hasTitle) {
        basicProps.width = '61%';
    }
    // Rows
    if (!hasAvatar && hasTitle) {
        basicProps.rows = 3;
    } else {
        basicProps.rows = 2;
    }
    return basicProps;
}
// Tips: ctx.classNames.root < ctx.className < cpns.classNames.root < cpns.className < rootClassName
const Skeleton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, loading, className, rootClassName, classNames, style, styles, children, avatar = false, title = true, paragraph = true, active, round } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('skeleton');
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedProps = {
        ...props,
        avatar,
        title,
        paragraph
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
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "Skeleton.useImperativeHandle": ()=>({
                nativeElement: nativeElementRef.current
            })
    }["Skeleton.useImperativeHandle"]);
    if (loading || !('loading' in props)) {
        const hasAvatar = !!avatar;
        const hasTitle = !!title;
        const hasParagraph = !!paragraph;
        // Avatar
        let avatarNode;
        if (hasAvatar) {
            const avatarProps = {
                className: mergedClassNames.avatar,
                prefixCls: `${prefixCls}-avatar`,
                ...getAvatarBasicProps(hasTitle, hasParagraph),
                ...getComponentProps(avatar),
                style: mergedStyles.avatar
            };
            // We direct use SkeletonElement as avatar in skeleton internal.
            avatarNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.header, `${prefixCls}-header`),
                style: mergedStyles.header
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...avatarProps
            }));
        }
        let contentNode;
        if (hasTitle || hasParagraph) {
            // Title
            let $title;
            if (hasTitle) {
                const titleProps = {
                    className: mergedClassNames.title,
                    prefixCls: `${prefixCls}-title`,
                    ...getTitleBasicProps(hasAvatar, hasParagraph),
                    ...getComponentProps(title),
                    style: mergedStyles.title
                };
                $title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...titleProps
                });
            }
            // Paragraph
            let paragraphNode;
            if (hasParagraph) {
                const paragraphProps = {
                    className: mergedClassNames.paragraph,
                    prefixCls: `${prefixCls}-paragraph`,
                    ...getParagraphBasicProps(hasAvatar, hasTitle),
                    ...getComponentProps(paragraph),
                    style: mergedStyles.paragraph
                };
                paragraphNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...paragraphProps
                });
            }
            contentNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.section, `${prefixCls}-section`),
                style: mergedStyles.section
            }, $title, paragraphNode);
        }
        const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
            [`${prefixCls}-with-avatar`]: hasAvatar,
            [`${prefixCls}-active`]: active,
            [`${prefixCls}-rtl`]: direction === 'rtl',
            [`${prefixCls}-round`]: round
        }, mergedClassNames.root, contextClassName, className, rootClassName, hashId, cssVarCls);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: nativeElementRef,
            className: cls,
            style: mergedStyles.root
        }, avatarNode, contentNode);
    }
    return children ?? null;
});
Skeleton.Button = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Input = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Image = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Node = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Skeleton.displayName = 'Skeleton';
}
const __TURBOPACK__default__export__ = Skeleton;
}),
"[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/Skeleton.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/watermark/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "usePanelRef",
    ()=>usePanelRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
;
;
function voidFunc() {}
const WatermarkContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    add: voidFunc,
    remove: voidFunc
});
function usePanelRef(panelSelector) {
    const watermark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](WatermarkContext);
    const panelEleRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "usePanelRef.useEvent[panelRef]": (ele)=>{
            if (ele) {
                const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
                if (innerContentEle) {
                    watermark.add(innerContentEle);
                    panelEleRef.current = innerContentEle;
                }
            } else {
                watermark.remove(panelEleRef.current);
            }
        }
    }["usePanelRef.useEvent[panelRef]"]);
    return panelRef;
}
const __TURBOPACK__default__export__ = WatermarkContext;
}),
"[project]/apps/web/node_modules/antd/es/modal/components/NormalCancelBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const NormalCancelBtn = ()=>{
    const { cancelButtonProps, cancelTextLocale, onCancel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContext"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClick: onCancel,
        ...cancelButtonProps
    }, cancelTextLocale);
};
const __TURBOPACK__default__export__ = NormalCancelBtn;
}),
"[project]/apps/web/node_modules/antd/es/modal/components/NormalOkBtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const NormalOkBtn = ()=>{
    const { confirmLoading, okButtonProps, okType, okTextLocale, onOk } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContext"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertLegacyProps"])(okType),
        loading: confirmLoading,
        onClick: onOk,
        ...okButtonProps
    }, okTextLocale);
};
const __TURBOPACK__default__export__ = NormalOkBtn;
}),
"[project]/apps/web/node_modules/antd/es/modal/shared.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "renderCloseIcon",
    ()=>renderCloseIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/components/NormalCancelBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/components/NormalOkBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/locale.js [app-client] (ecmascript)");
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
function renderCloseIcon(prefixCls, closeIcon) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: `${prefixCls}-close-x`
    }, closeIcon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `${prefixCls}-close-icon`
    }));
}
const Footer = (props)=>{
    const { okText, okType = 'primary', cancelText, confirmLoading, onOk, onCancel, okButtonProps, cancelButtonProps, footer } = props;
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Modal', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfirmLocale"])());
    // ================== Locale Text ==================
    const okTextLocale = okText || locale?.okText;
    const cancelTextLocale = cancelText || locale?.cancelText;
    const memoizedValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Footer.useMemo[memoizedValue]": ()=>{
            return {
                confirmLoading,
                okButtonProps,
                cancelButtonProps,
                okTextLocale,
                cancelTextLocale,
                okType,
                onOk,
                onCancel
            };
        }
    }["Footer.useMemo[memoizedValue]"], [
        confirmLoading,
        okButtonProps,
        cancelButtonProps,
        okTextLocale,
        cancelTextLocale,
        okType,
        onOk,
        onCancel
    ]);
    let footerNode;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(footer) || typeof footer === 'undefined') {
        footerNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(footer)) {
            footerNode = footer(footerNode, {
                OkBtn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                CancelBtn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$NormalCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            });
        }
        footerNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContextProvider"], {
            value: memoizedValue
        }, footerNode);
    } else {
        footerNode = footer;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledContextProvider"], {
        disabled: false
    }, footerNode);
};
}),
"[project]/apps/web/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaSize",
    ()=>getMediaSize,
    "prepareColComponentToken",
    ()=>prepareColComponentToken,
    "prepareRowComponentToken",
    ()=>prepareRowComponentToken,
    "useColStyle",
    ()=>useColStyle,
    "useRowStyle",
    ()=>useRowStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
// ============================== Row-Shared ==============================
const genGridRowStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            display: 'flex',
            flexFlow: 'row wrap',
            minWidth: 0,
            '&::before, &::after': {
                display: 'flex'
            },
            '&-no-wrap': {
                flexWrap: 'nowrap'
            },
            // The origin of the X-axis
            '&-start': {
                justifyContent: 'flex-start'
            },
            // The center of the X-axis
            '&-center': {
                justifyContent: 'center'
            },
            // The opposite of the X-axis
            '&-end': {
                justifyContent: 'flex-end'
            },
            '&-space-between': {
                justifyContent: 'space-between'
            },
            '&-space-around': {
                justifyContent: 'space-around'
            },
            '&-space-evenly': {
                justifyContent: 'space-evenly'
            },
            // Align at the top
            '&-top': {
                alignItems: 'flex-start'
            },
            // Align at the center
            '&-middle': {
                alignItems: 'center'
            },
            '&-bottom': {
                alignItems: 'flex-end'
            }
        }
    };
};
// ============================== Col-Shared ==============================
const genGridColStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            position: 'relative',
            maxWidth: '100%',
            // Prevent columns from collapsing when empty
            minHeight: 1
        }
    };
};
const genLoopGridColumnsStyle = (token, sizeCls)=>{
    const { componentCls, gridColumns, antCls } = token;
    const [gridVarName, gridVarRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'grid');
    const [, colVarRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'col');
    const gridColumnsStyle = {};
    for(let i = gridColumns; i >= 0; i--){
        if (i === 0) {
            gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
                display: 'none'
            };
            gridColumnsStyle[`${componentCls}-push-${i}`] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle[`${componentCls}-pull-${i}`] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
                marginInlineStart: 0
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
                order: 0
            };
        } else {
            gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = [
                // https://github.com/ant-design/ant-design/issues/44456
                // Form set `display: flex` on Col which will override `display: block`.
                // Let's get it from css variable to support override.
                {
                    [gridVarName('display')]: 'block',
                    // Fallback to display if variable not support
                    display: 'block'
                },
                {
                    display: gridVarRef('display'),
                    flex: `0 0 ${i / gridColumns * 100}%`,
                    maxWidth: `${i / gridColumns * 100}%`
                }
            ];
            gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
                insetInlineStart: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
                insetInlineEnd: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
                marginInlineStart: `${i / gridColumns * 100}%`
            };
            gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
                order: i
            };
        }
    }
    // Flex CSS Var
    gridColumnsStyle[`${componentCls}${sizeCls}-flex`] = {
        flex: colVarRef(`${sizeCls.replace(/-/, '')}-flex`)
    };
    return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls)=>genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls)=>({
        [`@media (min-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(screenSize)})`]: {
            ...genGridStyle(token, sizeCls)
        }
    });
const prepareRowComponentToken = ()=>({});
const prepareColComponentToken = ()=>({});
const useRowStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', genGridRowStyle, prepareRowComponentToken);
const getMediaSize = (token)=>{
    const mediaSizesMap = {
        xs: token.screenXSMin,
        sm: token.screenSMMin,
        md: token.screenMDMin,
        lg: token.screenLGMin,
        xl: token.screenXLMin,
        xxl: token.screenXXLMin,
        xxxl: token.screenXXXLMin
    };
    return mediaSizesMap;
};
const useColStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', (token)=>{
    const gridToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        gridColumns: 24 // Row is divided into 24 parts in Grid
    });
    const gridMediaSizesMap = getMediaSize(gridToken);
    delete gridMediaSizesMap.xs;
    return [
        genGridColStyle(gridToken),
        genGridStyle(gridToken, ''),
        genGridStyle(gridToken, '-xs'),
        Object.keys(gridMediaSizesMap).map((key)=>genGridMediaStyle(gridToken, gridMediaSizesMap[key], `-${key}`)).reduce((pre, cur)=>({
                ...pre,
                ...cur
            }), {})
    ];
}, prepareColComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMotion",
    ()=>initMotion
]);
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false)=>{
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        [`${sameLevelPrefix}${motionCls}-leave`]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
}),
"[project]/apps/web/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "fadeOut",
    ()=>fadeOut,
    "initFadeMotion",
    ()=>initFadeMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const fadeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeIn', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const fadeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeOut', {
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
const initFadeMotion = (token, sameLevel = false)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
        {
            [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
                opacity: 0,
                animationTimingFunction: 'linear'
            },
            [`${sameLevelPrefix}${motionCls}-leave`]: {
                animationTimingFunction: 'linear'
            }
        }
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initZoomMotion",
    ()=>initZoomMotion,
    "zoomBigIn",
    ()=>zoomBigIn,
    "zoomBigOut",
    ()=>zoomBigOut,
    "zoomDownIn",
    ()=>zoomDownIn,
    "zoomDownOut",
    ()=>zoomDownOut,
    "zoomIn",
    ()=>zoomIn,
    "zoomLeftIn",
    ()=>zoomLeftIn,
    "zoomLeftOut",
    ()=>zoomLeftOut,
    "zoomOut",
    ()=>zoomOut,
    "zoomRightIn",
    ()=>zoomRightIn,
    "zoomRightOut",
    ()=>zoomRightOut,
    "zoomUpIn",
    ()=>zoomUpIn,
    "zoomUpOut",
    ()=>zoomUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const zoomIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = `${antCls}-${motionName}`;
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid),
        {
            [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            [`${motionCls}-leave`]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/modal/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genModalMaskStyle",
    ()=>genModalMaskStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
function box(position) {
    return {
        position,
        inset: 0
    };
}
const genModalMaskStyle = (token)=>{
    const { componentCls, antCls } = token;
    return [
        {
            [`${componentCls}-root`]: {
                [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
                    // reset scale avoid mousePosition bug
                    transform: 'none',
                    opacity: 0,
                    animationDuration: token.motionDurationSlow,
                    // https://github.com/ant-design/ant-design/issues/11777
                    userSelect: 'none'
                },
                // https://github.com/ant-design/ant-design/issues/37329
                // https://github.com/ant-design/ant-design/issues/40272
                [`${componentCls}${antCls}-zoom-leave ${componentCls}-container`]: {
                    pointerEvents: 'none'
                },
                [`${componentCls}-mask`]: {
                    ...box('fixed'),
                    zIndex: token.zIndexPopupBase,
                    height: '100%',
                    backgroundColor: token.colorBgMask,
                    pointerEvents: 'none',
                    [`&${componentCls}-mask-blur`]: {
                        backdropFilter: 'blur(4px)'
                    },
                    [`${componentCls}-hidden`]: {
                        display: 'none'
                    }
                },
                [`${componentCls}-wrap`]: {
                    ...box('fixed'),
                    zIndex: token.zIndexPopupBase,
                    overflow: 'auto',
                    outline: 0,
                    WebkitOverflowScrolling: 'touch'
                }
            }
        },
        {
            [`${componentCls}-root`]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initFadeMotion"])(token)
        }
    ];
};
const genModalStyle = (token)=>{
    const { componentCls, motionDurationMid } = token;
    return [
        // ======================== Root =========================
        {
            [`${componentCls}-root`]: {
                [`${componentCls}-wrap-rtl`]: {
                    direction: 'rtl'
                },
                [`${componentCls}-centered`]: {
                    textAlign: 'center',
                    '&::before': {
                        display: 'inline-block',
                        width: 0,
                        height: '100%',
                        verticalAlign: 'middle',
                        content: '""'
                    },
                    [componentCls]: {
                        top: 0,
                        display: 'inline-block',
                        paddingBottom: 0,
                        textAlign: 'start',
                        verticalAlign: 'middle'
                    }
                },
                [`@media (max-width: ${token.screenSMMax}px)`]: {
                    [componentCls]: {
                        maxWidth: 'calc(100vw - 16px)',
                        margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXS)} auto`
                    },
                    [`${componentCls}-centered`]: {
                        [componentCls]: {
                            flex: 1
                        }
                    }
                }
            }
        },
        // ======================== Modal ========================
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                pointerEvents: 'none',
                position: 'relative',
                top: 100,
                width: 'auto',
                maxWidth: `calc(100vw - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.margin).mul(2).equal())})`,
                margin: '0 auto',
                '&:focus-visible': {
                    borderRadius: token.borderRadiusLG,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token)
                },
                [`${componentCls}-title`]: {
                    margin: 0,
                    color: token.titleColor,
                    fontWeight: token.fontWeightStrong,
                    fontSize: token.titleFontSize,
                    lineHeight: token.titleLineHeight,
                    wordWrap: 'break-word'
                },
                [`${componentCls}-container`]: {
                    position: 'relative',
                    backgroundColor: token.contentBg,
                    backgroundClip: 'padding-box',
                    border: 0,
                    borderRadius: token.borderRadiusLG,
                    boxShadow: token.boxShadow,
                    pointerEvents: 'auto',
                    padding: token.contentPadding
                },
                [`${componentCls}-close`]: {
                    position: 'absolute',
                    top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
                    insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
                    zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
                    padding: 0,
                    color: token.modalCloseIconColor,
                    fontWeight: token.fontWeightStrong,
                    lineHeight: 1,
                    textDecoration: 'none',
                    background: 'transparent',
                    borderRadius: token.borderRadiusSM,
                    width: token.modalCloseBtnSize,
                    height: token.modalCloseBtnSize,
                    border: 0,
                    outline: 0,
                    cursor: 'pointer',
                    transition: [
                        'color',
                        'background-color'
                    ].map((prop)=>`${prop} ${motionDurationMid}`).join(', '),
                    '&-x': {
                        display: 'flex',
                        fontSize: token.fontSizeLG,
                        fontStyle: 'normal',
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.modalCloseBtnSize),
                        justifyContent: 'center',
                        textTransform: 'none',
                        textRendering: 'auto'
                    },
                    '&:disabled': {
                        pointerEvents: 'none'
                    },
                    '&:hover': {
                        color: token.modalCloseIconHoverColor,
                        backgroundColor: token.colorBgTextHover,
                        textDecoration: 'none'
                    },
                    '&:active': {
                        backgroundColor: token.colorBgTextActive
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)
                },
                [`${componentCls}-header`]: {
                    color: token.colorText,
                    background: token.headerBg,
                    borderRadius: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} 0 0`,
                    marginBottom: token.headerMarginBottom,
                    padding: token.headerPadding,
                    borderBottom: token.headerBorderBottom
                },
                [`${componentCls}-body`]: {
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    wordWrap: 'break-word',
                    padding: token.bodyPadding,
                    [`${componentCls}-body-skeleton`]: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.margin)} auto`
                    }
                },
                [`${componentCls}-footer`]: {
                    textAlign: 'end',
                    background: token.footerBg,
                    marginTop: token.footerMarginTop,
                    padding: token.footerPadding,
                    borderTop: token.footerBorderTop,
                    borderRadius: token.footerBorderRadius,
                    [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
                        marginInlineStart: token.marginXS
                    }
                },
                [`${componentCls}-open`]: {
                    overflow: 'hidden'
                }
            }
        },
        // ======================== Pure =========================
        {
            [`${componentCls}-pure-panel`]: {
                top: 'auto',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                [`${componentCls}-container,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 'auto'
                },
                [`${componentCls}-confirm-body`]: {
                    marginBottom: 'auto'
                }
            }
        }
    ];
};
const genRTLStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-root`]: {
            [`${componentCls}-wrap-rtl`]: {
                direction: 'rtl',
                [`${componentCls}-confirm-body`]: {
                    direction: 'rtl'
                }
            }
        }
    };
};
const genResponsiveWidthStyle = (token)=>{
    const { componentCls } = token;
    const oriGridMediaSizesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaSize"])(token);
    const gridMediaSizesMap = {
        ...oriGridMediaSizesMap
    };
    delete gridMediaSizesMap.xs;
    const cssVarPrefix = `--${componentCls.replace('.', '')}-`;
    const responsiveStyles = Object.keys(gridMediaSizesMap).map((key)=>({
            [`@media (min-width: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(gridMediaSizesMap[key])})`]: {
                width: `var(${cssVarPrefix}${key}-width)`
            }
        }));
    return {
        [`${componentCls}-root`]: {
            [componentCls]: [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.keys(oriGridMediaSizesMap).map((currentKey, index)=>{
                const previousKey = Object.keys(oriGridMediaSizesMap)[index - 1];
                return previousKey ? {
                    [`${cssVarPrefix}${currentKey}-width`]: `var(${cssVarPrefix}${previousKey}-width)`
                } : null;
            })), [
                {
                    width: `var(${cssVarPrefix}xs-width)`
                }
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(responsiveStyles))
        }
    };
};
const prepareToken = (token)=>{
    const headerPaddingVertical = token.padding;
    const headerFontSize = token.fontSizeHeading5;
    const headerLineHeight = token.lineHeightHeading5;
    const modalToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
        modalFooterBorderColorSplit: token.colorSplit,
        modalFooterBorderStyle: token.lineType,
        modalFooterBorderWidth: token.lineWidth,
        modalCloseIconColor: token.colorIcon,
        modalCloseIconHoverColor: token.colorIconHover,
        modalCloseBtnSize: token.controlHeight,
        modalConfirmIconSize: token.fontHeight,
        modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
    });
    return modalToken;
};
const prepareComponentToken = (token)=>({
        footerBg: 'transparent',
        headerBg: 'transparent',
        titleLineHeight: token.lineHeightHeading5,
        titleFontSize: token.fontSizeHeading5,
        contentBg: token.colorBgElevated,
        titleColor: token.colorTextHeading,
        // internal
        contentPadding: token.wireframe ? 0 : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingMD)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingContentHorizontalLG)}`,
        headerPadding: token.wireframe ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingLG)}` : 0,
        headerBorderBottom: token.wireframe ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
        headerMarginBottom: token.wireframe ? 0 : token.marginXS,
        bodyPadding: token.wireframe ? token.paddingLG : 0,
        footerPadding: token.wireframe ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding)}` : 0,
        footerBorderTop: token.wireframe ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
        footerBorderRadius: token.wireframe ? `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)}` : 0,
        footerMarginTop: token.wireframe ? 0 : token.marginSM,
        confirmBodyPadding: token.wireframe ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding * 2)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding * 2)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingLG)}` : 0,
        confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
        confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM,
        mask: true
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Modal', (token)=>{
    const modalToken = prepareToken(token);
    return [
        genModalStyle(modalToken),
        genRTLStyle(modalToken),
        genModalMaskStyle(modalToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(modalToken, 'zoom'),
        genResponsiveWidthStyle(modalToken)
    ];
}, prepareComponentToken, {
    unitless: {
        titleLineHeight: true
    }
});
}),
"[project]/apps/web/node_modules/antd/es/modal/Modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dialog$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/dialog/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergedMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/styleChecker.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$useFocusable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/useFocusable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/watermark/context.js [app-client] (ecmascript)");
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
let mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e)=>{
    mousePosition = {
        x: e.pageX,
        y: e.pageY
    };
    // 100ms 内发生过点击事件，则从点击位置动画展示
    // 否则直接 zoom 展示
    // 这样可以兼容非点击方式展开
    setTimeout(()=>{
        mousePosition = null;
    }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$styleChecker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["canUseDocElement"])()) {
    document.documentElement.addEventListener('click', getClickPosition, true);
}
const Modal = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, open, wrapClassName, centered, getContainer, style, width = 520, footer, classNames, styles, children, loading, confirmLoading, zIndex: customizeZIndex, mousePosition: customizeMousePosition, onOk, onCancel, okButtonProps, cancelButtonProps, destroyOnHidden, destroyOnClose, panelRef = null, closable, mask: modalMask, modalRender, maskClosable, _semanticOmit, scrollLock, // Focusable
    focusTriggerAfterClose, focusable, _renderSemanticContent, ...restProps } = props;
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, centered: contextCentered, cancelButtonProps: contextCancelButtonProps, okButtonProps: contextOkButtonProps, mask: contextMask, focusable: contextFocusable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('modal');
    const { modal: modalContext } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [closableAfterClose, onClose] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Modal.useMemo": ()=>{
            if (typeof closable === 'boolean') {
                return [
                    undefined,
                    undefined
                ];
            }
            return [
                closable?.afterClose,
                closable?.onClose
            ];
        }
    }["Modal.useMemo"], [
        closable
    ]);
    const prefixCls = getPrefixCls('modal', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    // ============================ Mask ============================
    const [mergedMask, maskBlurClassName, mergeMaskClosable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedMask"])(modalMask, contextMask, prefixCls, maskClosable);
    // ========================== Focusable =========================
    const mergedFocusable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$useFocusable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...contextFocusable,
        ...focusable
    }, mergedMask, focusTriggerAfterClose);
    // ============================ Open ============================
    const handleCancel = (e)=>{
        if (confirmLoading) {
            return;
        }
        onCancel?.(e);
        onClose?.();
    };
    const handleOk = (e)=>{
        onOk?.(e);
        onClose?.();
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Modal');
        [
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'maskStyle',
                'styles.mask'
            ],
            [
                'destroyOnClose',
                'destroyOnHidden'
            ],
            [
                'autoFocusButton',
                'focusable.autoFocusButton'
            ],
            [
                'focusTriggerAfterClose',
                'focusable.focusTriggerAfterClose'
            ],
            [
                'maskClosable',
                'mask.closable'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const wrapClassNameExtended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(wrapClassName, {
        [`${prefixCls}-centered`]: centered ?? contextCentered,
        [`${prefixCls}-wrap-rtl`]: direction === 'rtl'
    });
    const dialogFooter = footer !== null && !loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
        ...props,
        okButtonProps: {
            ...contextOkButtonProps,
            ...okButtonProps
        },
        onOk: handleOk,
        cancelButtonProps: {
            ...contextCancelButtonProps,
            ...cancelButtonProps
        },
        onCancel: handleCancel
    }) : null;
    const [rawClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(modalContext), {
        closable: true,
        closeIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-close-icon`
        }),
        closeIconRender: {
            "Modal.useClosable": (icon)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$shared$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderCloseIcon"])(prefixCls, icon)
        }["Modal.useClosable"]
    });
    const mergedClosable = rawClosable ? {
        disabled: closeBtnIsDisabled,
        closeIcon: mergedCloseIcon,
        afterClose: closableAfterClose,
        ...ariaProps
    } : false;
    // ============================ modalRender ============================
    const mergedModalRender = modalRender ? (node)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: `${prefixCls}-render`
        }, modalRender(node)) : undefined;
    // ============================ Refs ============================
    // Select `ant-modal-container` by `panelRef`
    const panelClassName = `.${prefixCls}-${modalRender ? 'render' : 'container'}`;
    const innerPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$watermark$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanelRef"])(panelClassName);
    const mergedPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(panelRef, innerPanelRef);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Modal', customizeZIndex);
    const mergedProps = {
        ...props,
        width,
        panelRef,
        focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
        focusable: mergedFocusable,
        mask: mergedMask,
        maskClosable: mergeMaskClosable,
        zIndex
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames,
        maskBlurClassName
    ], [
        contextStyles,
        styles
    ], {
        props: mergedProps
    });
    const dialogClassNames = _semanticOmit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedClassNames, _semanticOmit) : mergedClassNames;
    const dialogStyles = _semanticOmit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(mergedStyles, _semanticOmit) : mergedStyles;
    const semanticContent = _renderSemanticContent ? _renderSemanticContent({
        classNames: mergedClassNames,
        styles: mergedStyles
    }) : children;
    // =========================== Width ============================
    const [numWidth, responsiveWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Modal.useMemo": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(width)) {
                return [
                    undefined,
                    width
                ];
            }
            return [
                width,
                undefined
            ];
        }
    }["Modal.useMemo"], [
        width
    ]);
    const responsiveWidthVars = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Modal.useMemo[responsiveWidthVars]": ()=>{
            const vars = {};
            if (responsiveWidth) {
                Object.keys(responsiveWidth).forEach({
                    "Modal.useMemo[responsiveWidthVars]": (breakpoint)=>{
                        const breakpointWidth = responsiveWidth[breakpoint];
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullable"])(breakpointWidth)) {
                            vars[`--${prefixCls}-${breakpoint}-width`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(breakpointWidth) ? `${breakpointWidth}px` : breakpointWidth;
                        }
                    }
                }["Modal.useMemo[responsiveWidthVars]"]);
            }
            return vars;
        }
    }["Modal.useMemo[responsiveWidthVars]"], [
        prefixCls,
        responsiveWidth
    ]);
    // =========================== Render ===========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        form: true,
        space: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$dialog$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        width: numWidth,
        ...restProps,
        zIndex: zIndex,
        getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
        prefixCls: prefixCls,
        rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, rootClassName, cssVarCls, rootCls, dialogClassNames.root),
        rootStyle: dialogStyles.root,
        footer: dialogFooter,
        visible: open,
        mousePosition: customizeMousePosition ?? mousePosition,
        onClose: handleCancel,
        closable: mergedClosable,
        closeIcon: mergedCloseIcon,
        transitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom', props.transitionName),
        maskTransitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'fade', props.maskTransitionName),
        mask: mergedMask,
        maskClosable: mergeMaskClosable,
        scrollLock: scrollLock,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, className, contextClassName),
        style: {
            ...contextStyle,
            ...style,
            ...responsiveWidthVars
        },
        classNames: {
            ...dialogClassNames,
            wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(dialogClassNames.wrapper, wrapClassNameExtended)
        },
        styles: dialogStyles,
        panelRef: mergedPanelRef,
        destroyOnHidden: destroyOnHidden ?? destroyOnClose,
        modalRender: mergedModalRender,
        // Focusable
        focusTriggerAfterClose: mergedFocusable.focusTriggerAfterClose,
        focusTrap: mergedFocusable.trap
    }, loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        active: true,
        title: false,
        paragraph: {
            rows: 4
        },
        className: `${prefixCls}-body-skeleton`
    }) : semanticContent)));
};
const __TURBOPACK__default__export__ = Modal;
}),
"[project]/apps/web/node_modules/antd/es/modal/style/confirm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
;
// ============================= Confirm ==============================
const genModalConfirmStyle = (token)=>{
    const { componentCls, titleFontSize, titleLineHeight, modalConfirmIconSize, fontSize, lineHeight, modalTitleHeight, fontHeight, confirmBodyPadding } = token;
    const confirmComponentCls = `${componentCls}-confirm`;
    return {
        [confirmComponentCls]: {
            '&-rtl': {
                direction: 'rtl'
            },
            [`${token.antCls}-modal-header`]: {
                display: 'none'
            },
            [`${confirmComponentCls}-body-wrapper`]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])()
            },
            [`&${componentCls} ${componentCls}-body`]: {
                padding: confirmBodyPadding
            },
            // ====================== Body ======================
            [`${confirmComponentCls}-body`]: {
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'start',
                [`> ${token.iconCls}`]: {
                    flex: 'none',
                    fontSize: modalConfirmIconSize,
                    marginInlineEnd: token.confirmIconMarginInlineEnd,
                    marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
                },
                [`&-has-title > ${token.iconCls}`]: {
                    marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
                }
            },
            [`${confirmComponentCls}-paragraph`]: {
                display: 'flex',
                flexDirection: 'column',
                flex: 'auto',
                rowGap: token.marginXS,
                // https://github.com/ant-design/ant-design/issues/51912
                maxWidth: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginSM)})`
            },
            [`${confirmComponentCls}-body-no-icon ${confirmComponentCls}-paragraph`]: {
                maxWidth: '100%'
            },
            // https://github.com/ant-design/ant-design/issues/48159
            [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
                maxWidth: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
            },
            [`${confirmComponentCls}-title`]: {
                color: token.colorTextHeading,
                fontWeight: token.fontWeightStrong,
                fontSize: titleFontSize,
                lineHeight: titleLineHeight
            },
            [`${confirmComponentCls}-container`]: {
                color: token.colorText,
                fontSize,
                lineHeight
            },
            // ===================== Footer =====================
            [`${confirmComponentCls}-btns`]: {
                textAlign: 'end',
                marginTop: token.confirmBtnsMarginTop,
                [`${token.antCls}-btn + ${token.antCls}-btn`]: {
                    marginBottom: 0,
                    marginInlineStart: token.marginXS
                }
            }
        },
        [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
            color: token.colorError
        },
        [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
            color: token.colorWarning
        },
        [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
            color: token.colorInfo
        },
        [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
            color: token.colorSuccess
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Modal',
    'confirm'
], (token)=>{
    const modalToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return genModalConfirmStyle(modalToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    // confirm is weak than modal since no conflict here
    order: -1000
});
}),
"[project]/apps/web/node_modules/antd/es/modal/ConfirmDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmContent",
    ()=>ConfirmContent,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/fallbackProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergedMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/components/ConfirmCancelBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/components/ConfirmOkBtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/style/confirm.js [app-client] (ecmascript)");
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
const CONFIRM_OMIT_SEMANTIC_NAMES = [
    'body'
];
const ConfirmContent = (props)=>{
    const { prefixCls, icon, okText, cancelText, confirmPrefixCls, type, okCancel, footer, // Legacy for static function usage
    locale: staticLocale, autoFocusButton, focusable, contentClassName, contentStyle, ...restProps } = props;
    const { infoIcon, successIcon, errorIcon, warningIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('modal');
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Modal');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`) : "TURBOPACK unreachable";
    }
    // Icon
    let mergedIcon = icon;
    // 支持传入 { icon: null } 或 { icon: false } 来隐藏`Modal.confirm`默认的Icon
    if (icon === undefined) {
        switch(type){
            case 'info':
                mergedIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(infoIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
                break;
            case 'success':
                mergedIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(successIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
                break;
            case 'error':
                mergedIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(errorIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
                break;
            default:
                mergedIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$fallbackProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(warningIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
        }
    }
    // 默认为 true，保持向下兼容
    const mergedOkCancel = okCancel ?? type === 'confirm';
    const mergedAutoFocusButton = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ConfirmContent.useMemo[mergedAutoFocusButton]": ()=>{
            const base = focusable?.autoFocusButton || autoFocusButton;
            return base || base === null ? base : 'ok';
        }
    }["ConfirmContent.useMemo[mergedAutoFocusButton]"], [
        autoFocusButton,
        focusable?.autoFocusButton
    ]);
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Modal');
    const mergedLocale = staticLocale || locale;
    // ================== Locale Text ==================
    const okTextLocale = okText || (mergedOkCancel ? mergedLocale?.okText : mergedLocale?.justOkText);
    const cancelTextLocale = cancelText || mergedLocale?.cancelText;
    // ================= Context Value =================
    const { closable } = restProps;
    const { onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable) ? closable : {};
    const memoizedValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ConfirmContent.useMemo[memoizedValue]": ()=>{
            return {
                autoFocusButton: mergedAutoFocusButton,
                cancelTextLocale,
                okTextLocale,
                mergedOkCancel,
                onClose,
                ...restProps
            };
        }
    }["ConfirmContent.useMemo[memoizedValue]"], [
        mergedAutoFocusButton,
        cancelTextLocale,
        okTextLocale,
        mergedOkCancel,
        onClose,
        restProps
    ]);
    // ====================== Footer Origin Node ======================
    const footerOriginNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null));
    const hasTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(props.title);
    const hasIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(mergedIcon);
    const bodyCls = `${confirmPrefixCls}-body`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${confirmPrefixCls}-body-wrapper`
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(bodyCls, {
            [`${bodyCls}-has-title`]: hasTitle,
            [`${bodyCls}-no-icon`]: !hasIcon
        })
    }, mergedIcon, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${confirmPrefixCls}-paragraph`
    }, hasTitle && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: `${confirmPrefixCls}-title`
    }, props.title), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${confirmPrefixCls}-content`, contentClassName),
        style: contentStyle
    }, props.content))), footer === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(footer) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContextProvider"], {
        value: memoizedValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${confirmPrefixCls}-btns`
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(footer) ? footer(footerOriginNode, {
        OkBtn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmOkBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        CancelBtn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$components$2f$ConfirmCancelBtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }) : footerOriginNode)) : footer, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$style$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
};
const ConfirmDialog = (props)=>{
    const { close, zIndex, maskStyle, direction, prefixCls, wrapClassName, rootPrefixCls, bodyStyle, closable = false, onConfirm, styles, title, mask, maskClosable, okButtonProps, cancelButtonProps } = props;
    const { cancelButtonProps: contextCancelButtonProps, okButtonProps: contextOkButtonProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('modal');
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Modal');
        [
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'maskStyle',
                'styles.mask'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const confirmPrefixCls = `${prefixCls}-confirm`;
    const width = props.width || 416;
    const style = props.style || {};
    const semanticStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(styles) ? (info)=>({
            body: bodyStyle,
            mask: maskStyle,
            ...styles(info)
        }) : {
        body: bodyStyle,
        mask: maskStyle,
        ...styles
    };
    const modalProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
        'bodyStyle',
        'maskStyle'
    ]);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
        [`${confirmPrefixCls}-rtl`]: direction === 'rtl'
    }, props.className);
    // ========================== Mask ==========================
    // 默认为 false，保持旧版默认行为
    const mergedMask = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ConfirmDialog.useMemo[mergedMask]": ()=>{
            const nextMaskConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergedMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMaskConfig"])(mask, maskClosable);
            nextMaskConfig.closable ?? (nextMaskConfig.closable = false);
            return nextMaskConfig;
        }
    }["ConfirmDialog.useMemo[mergedMask]"], [
        mask,
        maskClosable
    ]);
    // ========================= zIndex =========================
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const mergedZIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ConfirmDialog.useMemo[mergedZIndex]": ()=>{
            if (zIndex !== undefined) {
                return zIndex;
            }
            // Static always use max zIndex
            return token.zIndexPopupBase + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTAINER_MAX_OFFSET"];
        }
    }["ConfirmDialog.useMemo[mergedZIndex]"], [
        zIndex,
        token
    ]);
    // ========================= Render =========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...modalProps,
        className: classString,
        wrapClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            [`${confirmPrefixCls}-centered`]: !!props.centered
        }, wrapClassName),
        onCancel: ()=>{
            close?.({
                triggerCancel: true
            });
            onConfirm?.(false);
        },
        title: title,
        footer: null,
        transitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls || '', 'zoom', props.transitionName),
        maskTransitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls || '', 'fade', props.maskTransitionName),
        mask: mergedMask,
        style: style,
        styles: semanticStyles,
        width: width,
        zIndex: mergedZIndex,
        closable: closable,
        _semanticOmit: CONFIRM_OMIT_SEMANTIC_NAMES,
        _renderSemanticContent: ({ classNames: mergedClassNames, styles: mergedStyles })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ConfirmContent, {
                ...props,
                confirmPrefixCls: confirmPrefixCls,
                okButtonProps: {
                    ...contextOkButtonProps,
                    ...okButtonProps
                },
                cancelButtonProps: {
                    ...contextCancelButtonProps,
                    ...cancelButtonProps
                },
                contentClassName: mergedClassNames.body,
                contentStyle: mergedStyles.body
            })
    });
};
const ConfirmDialogWrapper = (props)=>{
    const { rootPrefixCls, iconPrefixCls, direction, theme } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        direction: direction,
        theme: theme
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ConfirmDialog, {
        ...props
    }));
};
if ("TURBOPACK compile-time truthy", 1) {
    ConfirmDialog.displayName = 'ConfirmDialog';
    ConfirmDialogWrapper.displayName = 'ConfirmDialogWrapper';
}
const __TURBOPACK__default__export__ = ConfirmDialogWrapper;
}),
"[project]/apps/web/node_modules/antd/es/modal/destroyFns.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const destroyFns = [];
const __TURBOPACK__default__export__ = destroyFns;
}),
"[project]/apps/web/node_modules/antd/es/modal/confirm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>confirm,
    "modalGlobalConfig",
    ()=>modalGlobalConfig,
    "withConfirm",
    ()=>withConfirm,
    "withError",
    ()=>withError,
    "withInfo",
    ()=>withInfo,
    "withSuccess",
    ()=>withSuccess,
    "withWarn",
    ()=>withWarn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/React/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/ConfirmDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/destroyFns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/locale.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
let defaultRootPrefixCls = '';
function getRootPrefixCls() {
    return defaultRootPrefixCls;
}
const ConfirmDialogWrapper = (props)=>{
    const { prefixCls: customizePrefixCls, getContainer, direction } = props;
    const runtimeLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfirmLocale"])();
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
    // because Modal.config set rootPrefixCls, which is different from other components
    const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
    let mergedGetContainer = getContainer;
    if (mergedGetContainer === false) {
        mergedGetContainer = undefined;
        if ("TURBOPACK compile-time truthy", 1) {
            ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Modal', 'Static method not support `getContainer` to be `false` since it do not have context env.') : "TURBOPACK unreachable";
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        rootPrefixCls: rootPrefixCls,
        prefixCls: prefixCls,
        iconPrefixCls: config.iconPrefixCls,
        theme: config.theme,
        direction: direction ?? config.direction,
        locale: config.locale?.Modal ?? runtimeLocale,
        getContainer: mergedGetContainer
    });
};
function confirm(config) {
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    if (("TURBOPACK compile-time value", "development") !== 'production' && !global.holderRender) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warnContext"])('Modal');
    }
    const container = document.createDocumentFragment();
    let currentConfig = {
        ...config,
        close,
        open: true
    };
    let timeoutId;
    function destroy(...args) {
        const triggerCancel = args.some((param)=>param?.triggerCancel);
        if (triggerCancel) {
            config.onCancel?.(()=>{}, ...args.slice(1));
        }
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].length; i++){
            const fn = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][i];
            if (fn === close) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].splice(i, 1);
                break;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unmount"])(container).then(()=>{
        // Do nothing
        });
    }
    const scheduleRender = (props)=>{
        clearTimeout(timeoutId);
        /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */ timeoutId = setTimeout(()=>{
            const rootPrefixCls = global.getPrefixCls(undefined, getRootPrefixCls());
            const iconPrefixCls = global.getIconPrefixCls();
            const theme = global.getTheme();
            const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ConfirmDialogWrapper, {
                ...props
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                prefixCls: rootPrefixCls,
                iconPrefixCls: iconPrefixCls,
                theme: theme
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(global.holderRender) ? global.holderRender(dom) : dom), container);
        });
    };
    function close(...args) {
        currentConfig = {
            ...currentConfig,
            open: false,
            afterClose: ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(config.afterClose)) {
                    config.afterClose();
                }
                // @ts-ignore
                destroy.apply(this, args);
            }
        };
        scheduleRender(currentConfig);
    }
    function update(configUpdate) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(configUpdate)) {
            currentConfig = configUpdate(currentConfig);
        } else {
            currentConfig = {
                ...currentConfig,
                ...configUpdate
            };
        }
        scheduleRender(currentConfig);
    }
    scheduleRender(currentConfig);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].push(close);
    return {
        destroy: close,
        update
    };
}
function withWarn(props) {
    return {
        ...props,
        type: 'warning'
    };
}
function withInfo(props) {
    return {
        ...props,
        type: 'info'
    };
}
function withSuccess(props) {
    return {
        ...props,
        type: 'success'
    };
}
function withError(props) {
    return {
        ...props,
        type: 'error'
    };
}
function withConfirm(props) {
    return {
        ...props,
        type: 'confirm'
    };
}
function modalGlobalConfig({ rootPrefixCls }) {
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.') : "TURBOPACK unreachable";
    defaultRootPrefixCls = rootPrefixCls;
}
}),
"[project]/apps/web/node_modules/antd/es/modal/useModal/HookModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/ConfirmDialog.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const HookModal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { afterClose: hookAfterClose, config, ...restProps } = props;
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [innerConfig, setInnerConfig] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](config);
    const { direction, getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('modal');
    const rootPrefixCls = getPrefixCls();
    const afterClose = ()=>{
        hookAfterClose();
        innerConfig.afterClose?.();
    };
    const close = (...args)=>{
        setOpen(false);
        const triggerCancel = args.some((param)=>param?.triggerCancel);
        if (triggerCancel) {
            innerConfig.onCancel?.(()=>{}, ...args.slice(1));
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "HookModal.useImperativeHandle": ()=>({
                destroy: close,
                update: ({
                    "HookModal.useImperativeHandle": (newConfig)=>{
                        setInnerConfig({
                            "HookModal.useImperativeHandle": (originConfig)=>{
                                const nextConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(newConfig) ? newConfig(originConfig) : newConfig;
                                return {
                                    ...originConfig,
                                    ...nextConfig
                                };
                            }
                        }["HookModal.useImperativeHandle"]);
                    }
                })["HookModal.useImperativeHandle"]
            })
    }["HookModal.useImperativeHandle"]);
    const mergedOkCancel = innerConfig.okCancel ?? innerConfig.type === 'confirm';
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Modal', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Modal);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$ConfirmDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        ...innerConfig,
        close: close,
        open: open,
        afterClose: afterClose,
        okText: innerConfig.okText || (mergedOkCancel ? contextLocale?.okText : contextLocale?.justOkText),
        direction: innerConfig.direction || direction,
        cancelText: innerConfig.cancelText || contextLocale?.cancelText,
        ...restProps
    });
});
const __TURBOPACK__default__export__ = HookModal;
}),
"[project]/apps/web/node_modules/antd/es/modal/useModal/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$usePatchElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/usePatchElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/confirm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/destroyFns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$HookModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/useModal/HookModal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
let uuid = 0;
const ElementsHolder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((_props, ref)=>{
    const [elements, patchElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$usePatchElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePatchElement"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "ElementsHolder.useImperativeHandle": ()=>({
                patchElement
            })
    }["ElementsHolder.useImperativeHandle"], [
        patchElement
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, elements);
}));
function useModal() {
    const holderRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ========================== Effect ==========================
    const [actionQueue, setActionQueue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useModal.useEffect": ()=>{
            if (actionQueue.length) {
                const cloneQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(actionQueue);
                cloneQueue.forEach({
                    "useModal.useEffect": (action)=>{
                        action();
                    }
                }["useModal.useEffect"]);
                setActionQueue([]);
            }
        }
    }["useModal.useEffect"], [
        actionQueue
    ]);
    // =========================== Hook ===========================
    const getConfirmFunc = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useModal.useCallback[getConfirmFunc]": (withFunc)=>function hookConfirm(config) {
                uuid += 1;
                const modalRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]();
                // Proxy to promise with `onClose`
                let resolvePromise;
                const promise = new Promise({
                    "useModal.useCallback[getConfirmFunc].hookConfirm": (resolve)=>{
                        resolvePromise = resolve;
                    }
                }["useModal.useCallback[getConfirmFunc].hookConfirm"]);
                let silent = false;
                let closeFunc;
                const modal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$HookModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    key: `modal-${uuid}`,
                    config: withFunc(config),
                    ref: modalRef,
                    afterClose: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm.modal": ()=>{
                            closeFunc?.();
                        }
                    }["useModal.useCallback[getConfirmFunc].hookConfirm.modal"],
                    isSilent: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm.modal": ()=>silent
                    }["useModal.useCallback[getConfirmFunc].hookConfirm.modal"],
                    onConfirm: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm.modal": (confirmed)=>{
                            resolvePromise(confirmed);
                        }
                    }["useModal.useCallback[getConfirmFunc].hookConfirm.modal"]
                });
                closeFunc = holderRef.current?.patchElement(modal);
                if (closeFunc) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$destroyFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].push(closeFunc);
                }
                const instance = {
                    destroy: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm": ()=>{
                            function destroyAction() {
                                modalRef.current?.destroy();
                            }
                            if (modalRef.current) {
                                destroyAction();
                            } else {
                                setActionQueue({
                                    "useModal.useCallback[getConfirmFunc].hookConfirm": (prev)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prev), [
                                            destroyAction
                                        ])
                                }["useModal.useCallback[getConfirmFunc].hookConfirm"]);
                            }
                        }
                    }["useModal.useCallback[getConfirmFunc].hookConfirm"],
                    update: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm": (newConfig)=>{
                            function updateAction() {
                                modalRef.current?.update(newConfig);
                            }
                            if (modalRef.current) {
                                updateAction();
                            } else {
                                setActionQueue({
                                    "useModal.useCallback[getConfirmFunc].hookConfirm": (prev)=>[].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prev), [
                                            updateAction
                                        ])
                                }["useModal.useCallback[getConfirmFunc].hookConfirm"]);
                            }
                        }
                    }["useModal.useCallback[getConfirmFunc].hookConfirm"],
                    then: {
                        "useModal.useCallback[getConfirmFunc].hookConfirm": (resolve)=>{
                            silent = true;
                            return promise.then(resolve);
                        }
                    }["useModal.useCallback[getConfirmFunc].hookConfirm"]
                };
                return instance;
            }
    }["useModal.useCallback[getConfirmFunc]"], []);
    const fns = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useModal.useMemo[fns]": ()=>({
                info: getConfirmFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withInfo"]),
                success: getConfirmFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withSuccess"]),
                error: getConfirmFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withError"]),
                warning: getConfirmFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withWarn"]),
                confirm: getConfirmFunc(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withConfirm"])
            })
    }["useModal.useMemo[fns]"], [
        getConfirmFunc
    ]);
    return [
        fns,
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ElementsHolder, {
            key: "modal-holder",
            ref: holderRef
        })
    ];
}
const __TURBOPACK__default__export__ = useModal;
}),
"[project]/apps/web/node_modules/antd/es/notification/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeIcon",
    ()=>TypeIcon,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCloseIcon",
    ()=>getCloseIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/Notification.js [app-client] (ecmascript) <export default as Notification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/index.js [app-client] (ecmascript)");
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
const TypeIcon = {
    info: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    success: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    error: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    warning: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
    loading: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
};
function getCloseIcon(prefixCls, closeIcon) {
    if (closeIcon === null || closeIcon === false) {
        return null;
    }
    return closeIcon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `${prefixCls}-close-icon`
    });
}
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: staticPrefixCls, icon, type, message, title, description, btn, actions, closeIcon: _closeIcon, className: notificationClassName, style, styles, classNames: notificationClassNames, closable, role, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('notification');
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        notificationClassNames
    ], [
        contextStyles,
        styles
    ], {
        props
    });
    const { notification: notificationContext } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const mergedActions = actions ?? btn;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Notification');
        [
            [
                'btn',
                'actions'
            ],
            [
                'message',
                'title'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const mergedTitle = title ?? message;
    const hasTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(mergedTitle);
    const prefixCls = staticPrefixCls || getPrefixCls('notification');
    const noticePrefixCls = `${prefixCls}-notice`;
    const iconNode = icon || (type ? TypeIcon[type] : null);
    const typeIconCls = !icon && type ? `${noticePrefixCls}-icon-${type}` : undefined;
    const { root: rootClassName, ...contentClassNames } = mergedClassNames;
    const { root: rootStyle, ...contentStyles } = mergedStyles;
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const [rawClosable, mergedCloseIcon, , ariaProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(notificationContext), {
        closable: true,
        closeIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: `${prefixCls}-close-icon`
        }),
        closeIconRender: {
            "PurePanel.useClosable": (icon)=>getCloseIcon(prefixCls, icon)
        }["PurePanel.useClosable"]
    });
    const mergedClosable = rawClosable ? {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable) ? closable?.onClose : undefined,
        closeIcon: mergedCloseIcon,
        ...ariaProps
    } : false;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${noticePrefixCls}-pure-panel`, hashId, notificationClassName, cssVarCls, rootCls, rootClassName),
        style: rootStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PurePanelStyle"], {
        prefixCls: prefixCls
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification$3e$__["Notification"], {
        style: {
            ...contextStyle,
            ...style
        },
        ...restProps,
        prefixCls: prefixCls,
        duration: null,
        closable: mergedClosable,
        className: contextClassName,
        title: hasTitle ? mergedTitle : null,
        description: description,
        icon: iconNode,
        actions: mergedActions,
        role: role,
        classNames: {
            ...contentClassNames,
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(typeIconCls, contentClassNames.icon)
        },
        styles: contentStyles
    }));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/apps/web/node_modules/antd/es/notification/useNotification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useNotification,
    "useInternalNotification",
    ()=>useInternalNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/NotificationProvider.js [app-client] (ecmascript) <export default as NotificationProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/hooks/useNotification.js [app-client] (ecmascript) <export default as useNotification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useClosable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$hooks$2f$useStackConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/hooks/useStackConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/util.js [app-client] (ecmascript)");
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
const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT = 'topRight';
const DEFAULT_STACK_CONFIG = {
    offset: 8
};
const Wrapper = ({ children, prefixCls })=>{
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationProvider$3e$__["NotificationProvider"], {
        classNames: {
            list: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, rootCls)
        }
    }, children);
};
const renderNotifications = (node, { prefixCls, key })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Wrapper, {
        prefixCls: prefixCls,
        key: key
    }, node);
const Holder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { top, bottom, prefixCls: staticPrefixCls, getContainer: staticGetContainer, maxCount, rtl, onAllRemoved, stack, duration = DEFAULT_DURATION, pauseOnHover = true, showProgress } = props;
    const { getPrefixCls, getPopupContainer, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('notification');
    const { notification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [contextLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('global', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global);
    const prefixCls = staticPrefixCls || getPrefixCls('notification');
    const mergedDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Holder.useMemo[mergedDuration]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(duration) && duration > 0 ? duration : false
    }["Holder.useMemo[mergedDuration]"], [
        duration
    ]);
    const contextStyleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSemanticRootStyle"])(notification?.style);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        notification?.classNames,
        props?.classNames
    ], [
        notification?.styles,
        contextStyleRoot,
        props?.styles
    ], {
        props
    });
    // =============================== Style ===============================
    const getStyle = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlacementOffsetStyle"])(top, bottom);
    const getClassName = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            [`${prefixCls}-rtl`]: rtl ?? direction === 'rtl'
        });
    // ============================== Motion ===============================
    const getNotificationMotion = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMotion"])(prefixCls);
    // =============================== Stack ===============================
    const stackConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$hooks$2f$useStackConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(stack, DEFAULT_STACK_CONFIG);
    // ============================== Origin ===============================
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$hooks$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useNotification$3e$__["useNotification"])({
        prefixCls,
        style: getStyle,
        className: getClassName,
        motion: getNotificationMotion,
        closable: {
            closeIcon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCloseIcon"])(prefixCls)
        },
        duration: mergedDuration,
        getContainer: {
            "Holder.useRcNotification": ()=>staticGetContainer?.() || getPopupContainer?.() || document.body
        }["Holder.useRcNotification"],
        maxCount,
        pauseOnHover,
        showProgress,
        classNames: mergedClassNames,
        styles: mergedStyles,
        onAllRemoved,
        renderNotifications,
        stack: stackConfig
    });
    // ================================ Ref ================================
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "Holder.useImperativeHandle": ()=>({
                ...api,
                prefixCls,
                notification,
                closeLabel: contextLocale.close ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global?.close ?? 'Close'
            })
    }["Holder.useImperativeHandle"]);
    return holder;
});
function useInternalNotification(notificationConfig) {
    const holderRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Notification');
    const { notification: notificationContext } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    // ================================ API ================================
    const wrapAPI = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useInternalNotification.useMemo[wrapAPI]": ()=>{
            // Wrap with notification content
            // >>> Open
            const open = {
                "useInternalNotification.useMemo[wrapAPI].open": (config)=>{
                    if (!holderRef.current) {
                        ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : "TURBOPACK unreachable";
                        return;
                    }
                    const { open: originOpen, prefixCls, notification, closeLabel } = holderRef.current;
                    const contextClassName = notification?.className || {};
                    const noticePrefixCls = `${prefixCls}-notice`;
                    const { title, message, description, icon, type, btn, actions, className, style, role = 'alert', closeIcon, closable, classNames: configClassNames = {}, styles = {}, ...restConfig } = config;
                    if ("TURBOPACK compile-time truthy", 1) {
                        [
                            [
                                'btn',
                                'actions'
                            ],
                            [
                                'message',
                                'title'
                            ]
                        ].forEach({
                            "useInternalNotification.useMemo[wrapAPI].open": ([deprecatedName, newName])=>{
                                warning.deprecated(!(deprecatedName in config), deprecatedName, newName);
                            }
                        }["useInternalNotification.useMemo[wrapAPI].open"]);
                    }
                    const mergedTitle = title ?? message;
                    const hasTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactRenderable"])(mergedTitle);
                    const mergedActions = actions ?? btn;
                    const realCloseIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCloseIcon"])(noticePrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCloseIconConfig"])(closeIcon, notificationConfig, notification));
                    const [rawClosable, mergedCloseIcon, , ariaProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeClosable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])({
                        ...notificationConfig || {},
                        ...config
                    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useClosable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickClosable"])(notificationContext), {
                        closable: true,
                        closeIcon: realCloseIcon
                    }, closeLabel);
                    const mergedClosable = rawClosable ? {
                        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(closable) ? closable.onClose : undefined,
                        closeIcon: mergedCloseIcon,
                        ...ariaProps
                    } : false;
                    const semanticClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyleOrClass"])(configClassNames, {
                        props: config
                    });
                    const semanticStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyleOrClass"])(styles, {
                        props: config
                    });
                    const iconNode = icon || (type ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeIcon"][type] : null);
                    const typeIconCls = !icon && type ? `${noticePrefixCls}-icon-${type}` : undefined;
                    return originOpen({
                        // use placement from props instead of hard-coding "topRight"
                        placement: notificationConfig?.placement ?? DEFAULT_PLACEMENT,
                        ...restConfig,
                        title: hasTitle ? mergedTitle : null,
                        description,
                        icon: iconNode,
                        actions: mergedActions,
                        role,
                        classNames: {
                            ...semanticClassNames,
                            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(typeIconCls, semanticClassNames?.icon)
                        },
                        styles: semanticStyles,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                            [`${noticePrefixCls}-${type}`]: type
                        }, className, contextClassName),
                        style,
                        closable: mergedClosable
                    });
                }
            }["useInternalNotification.useMemo[wrapAPI].open"];
            // >>> destroy
            const destroy = {
                "useInternalNotification.useMemo[wrapAPI].destroy": (key)=>{
                    if (key !== undefined) {
                        holderRef.current?.close(key);
                    } else {
                        holderRef.current?.destroy();
                    }
                }
            }["useInternalNotification.useMemo[wrapAPI].destroy"];
            const clone = {
                open,
                destroy
            };
            const keys = [
                'success',
                'info',
                'warning',
                'error'
            ];
            keys.forEach({
                "useInternalNotification.useMemo[wrapAPI]": (type)=>{
                    clone[type] = ({
                        "useInternalNotification.useMemo[wrapAPI]": (config)=>open({
                                ...config,
                                type
                            })
                    })["useInternalNotification.useMemo[wrapAPI]"];
                }
            }["useInternalNotification.useMemo[wrapAPI]"]);
            return clone;
        }
    }["useInternalNotification.useMemo[wrapAPI]"], [
        notificationConfig,
        notificationContext
    ]);
    // ============================== Return ===============================
    return [
        wrapAPI,
        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Holder, {
            key: "notification-holder",
            ...notificationConfig,
            ref: holderRef
        })
    ];
}
function useNotification(notificationConfig) {
    return useInternalNotification(notificationConfig);
}
}),
"[project]/apps/web/node_modules/antd/es/app/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppConfigContext",
    ()=>AppConfigContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AppConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
const AppContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    message: {},
    notification: {},
    modal: {}
});
const __TURBOPACK__default__export__ = AppContext;
}),
"[project]/apps/web/node_modules/antd/es/app/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, colorText, fontSize, lineHeight, fontFamily } = token;
    return {
        [componentCls]: {
            color: colorText,
            fontSize,
            lineHeight,
            fontFamily,
            [`&${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        }
    };
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('App', genBaseStyle, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/app/App.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/useMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/useModal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/useNotification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/style/index.js [app-client] (ecmascript)");
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
const App = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { prefixCls: customizePrefixCls, children, className, rootClassName, message, notification, style, component = 'div' } = props;
    const { direction, getPrefixCls, className: contextClassName, style: contextStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('app');
    const prefixCls = getPrefixCls('app', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const customClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, prefixCls, className, rootClassName, cssVarCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    });
    const appConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppConfigContext"]);
    const mergedAppConfig = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "App.useMemo[mergedAppConfig]": ()=>({
                message: {
                    ...appConfig.message,
                    ...message
                },
                notification: {
                    ...appConfig.notification,
                    ...notification
                }
            })
    }["App.useMemo[mergedAppConfig]"], [
        message,
        notification,
        appConfig.message,
        appConfig.notification
    ]);
    const [messageApi, messageContextHolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedAppConfig.message);
    const [notificationApi, notificationContextHolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedAppConfig.notification);
    const [ModalApi, ModalContextHolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$useModal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const memoizedContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "App.useMemo[memoizedContextValue]": ()=>({
                message: messageApi,
                notification: notificationApi,
                modal: ModalApi
            })
    }["App.useMemo[memoizedContextValue]"], [
        messageApi,
        notificationApi,
        ModalApi
    ]);
    const devWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevWarning"])('App');
    const hasRootProps = Boolean(className || rootClassName || style || contextClassName || contextStyle);
    // https://github.com/ant-design/ant-design/issues/48802#issuecomment-2097813526
    // https://github.com/ant-design/ant-design/issues/58876
    devWarning(!(cssVarCls && component === false && hasRootProps), 'usage', 'When using cssVar, ensure `component` is assigned a valid React component string.');
    devWarning(!ref || component !== false, 'usage', '`ref` is not supported when `component` is `false`. Please provide a valid `component` instead.');
    // ============================ Render ============================
    const Component = component === false ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment : component;
    const rootProps = {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextClassName, customClassName),
        style: {
            ...contextStyle,
            ...style
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: memoizedContextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppConfigContext"].Provider, {
        value: mergedAppConfig
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
        ...component === false ? undefined : {
            ...rootProps,
            ref
        }
    }, ModalContextHolder, messageContextHolder, notificationContextHolder, children)));
});
if ("TURBOPACK compile-time truthy", 1) {
    App.displayName = 'App';
}
const __TURBOPACK__default__export__ = App;
}),
"[project]/apps/web/node_modules/antd/es/app/useApp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/context.js [app-client] (ecmascript)");
;
;
const useApp = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = useApp;
}),
"[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/App.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$useApp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/useApp.js [app-client] (ecmascript)");
"use client";
;
;
const App = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
App.useApp = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$useApp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = App;
}),
"[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript) <export default as App>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/lib/time-picker/locale/vi_VN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const locale = {
    placeholder: 'Chọn thời gian',
    rangePlaceholder: [
        'Bắt đầu',
        'Kết thúc'
    ]
};
var _default = exports.default = locale;
}),
"[project]/apps/web/node_modules/antd/lib/date-picker/locale/vi_VN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vi_VN = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/@rc-component/picker/lib/locale/vi_VN.js [app-client] (ecmascript)"));
var _vi_VN2 = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/time-picker/locale/vi_VN.js [app-client] (ecmascript)"));
// Merge into a locale object
const locale = {
    lang: {
        placeholder: 'Chọn thời điểm',
        yearPlaceholder: 'Chọn năm',
        quarterPlaceholder: 'Chọn quý',
        monthPlaceholder: 'Chọn tháng',
        weekPlaceholder: 'Chọn tuần',
        rangePlaceholder: [
            'Ngày bắt đầu',
            'Ngày kết thúc'
        ],
        rangeYearPlaceholder: [
            'Năm bắt đầu',
            'Năm kết thúc'
        ],
        rangeQuarterPlaceholder: [
            'Quý bắt đầu',
            'Quý kết thúc'
        ],
        rangeMonthPlaceholder: [
            'Tháng bắt đầu',
            'Tháng kết thúc'
        ],
        rangeWeekPlaceholder: [
            'Tuần bắt đầu',
            'Tuần kết thúc'
        ],
        shortMonths: [
            'Th 01',
            'Th 02',
            'Th 03',
            'Th 04',
            'Th 05',
            'Th 06',
            'Th 07',
            'Th 08',
            'Th 09',
            'Th 10',
            'Th 11',
            'Th 12'
        ],
        shortWeekDays: [
            'CN',
            'T2',
            'T3',
            'T4',
            'T5',
            'T6',
            'T7'
        ],
        ..._vi_VN.default
    },
    timePickerLocale: {
        ..._vi_VN2.default
    }
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = exports.default = locale;
}),
"[project]/apps/web/node_modules/antd/lib/calendar/locale/vi_VN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vi_VN = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/date-picker/locale/vi_VN.js [app-client] (ecmascript)"));
var _default = exports.default = _vi_VN.default;
}),
"[project]/apps/web/node_modules/antd/lib/locale/vi_VN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)").default;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vi_VN = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/@rc-component/pagination/lib/locale/vi_VN.js [app-client] (ecmascript)"));
var _vi_VN2 = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/calendar/locale/vi_VN.js [app-client] (ecmascript)"));
var _vi_VN3 = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/date-picker/locale/vi_VN.js [app-client] (ecmascript)"));
var _vi_VN4 = _interopRequireDefault(__turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/time-picker/locale/vi_VN.js [app-client] (ecmascript)"));
const typeTemplate = '${label} không phải kiểu ${type} hợp lệ';
const localeValues = {
    locale: 'vi',
    Pagination: _vi_VN.default,
    DatePicker: _vi_VN3.default,
    TimePicker: _vi_VN4.default,
    Calendar: _vi_VN2.default,
    global: {
        placeholder: 'Vui lòng chọn',
        close: 'Đóng',
        show: 'Hiển thị',
        hide: 'Ẩn',
        sortable: 'có thể sắp xếp được'
    },
    Table: {
        filterTitle: 'Bộ lọc',
        filterConfirm: 'Đồng ý',
        filterReset: 'Bỏ lọc',
        filterEmptyText: 'Không có bộ lọc',
        filterCheckAll: 'Chọn tất cả',
        filterSearchPlaceholder: 'Tìm kiếm bộ lọc',
        emptyText: 'Trống',
        selectAll: 'Chọn tất cả',
        selectInvert: 'Chọn ngược lại',
        selectNone: 'Bỏ chọn tất cả',
        selectionAll: 'Chọn tất cả',
        sortTitle: 'Sắp xếp',
        expand: 'Mở rộng dòng',
        collapse: 'Thu gọn dòng',
        triggerDesc: 'Nhấp để sắp xếp giảm dần',
        triggerAsc: 'Nhấp để sắp xếp tăng dần',
        cancelSort: 'Nhấp để hủy sắp xếp'
    },
    Tour: {
        Next: 'Tiếp',
        Previous: 'Trước',
        Finish: 'Hoàn thành'
    },
    Modal: {
        okText: 'Đồng ý',
        cancelText: 'Hủy',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'Đồng ý',
        cancelText: 'Hủy'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Tìm ở đây',
        itemUnit: 'mục',
        itemsUnit: 'mục',
        remove: 'Gỡ bỏ',
        selectCurrent: 'Chọn trang hiện tại',
        removeCurrent: 'Gỡ bỏ trang hiện tại',
        selectAll: 'Chọn tất cả',
        removeAll: 'Gỡ bỏ tất cả',
        selectInvert: 'Đảo ngược trang hiện tại',
        deselectAll: 'Bỏ chọn tất cả'
    },
    Upload: {
        uploading: 'Đang tải lên...',
        removeFile: 'Gỡ bỏ tập tin',
        uploadError: 'Lỗi tải lên',
        previewFile: 'Xem trước tập tin',
        downloadFile: 'Tải tập tin'
    },
    Empty: {
        description: 'Trống'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Chỉnh sửa',
        copy: 'Sao chép',
        copied: 'Đã sao chép',
        expand: 'Mở rộng',
        collapse: 'Thu gọn'
    },
    Form: {
        optional: '(Tùy chọn)',
        defaultValidateMessages: {
            default: '${label} không đáp ứng điều kiện quy định',
            required: 'Hãy nhập thông tin cho trường ${label}',
            enum: '${label} phải có giá trị nằm trong tập [${enum}]',
            whitespace: '${label} không được chứa khoảng trắng',
            date: {
                format: '${label} sai định dạng ngày tháng',
                parse: 'Không thể chuyển ${label} sang kiểu Ngày tháng',
                invalid: '${label} không phải giá trị Ngày tháng hợp lệ'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} phải dài đúng ${len} ký tự',
                min: 'Độ dài tối thiểu trường ${label} là ${min} ký tự',
                max: 'Độ dài tối đa trường ${label} là ${max} ký tự',
                range: 'Độ dài trường ${label} phải từ ${min} đến ${max} ký tự'
            },
            number: {
                len: '${label} phải bằng ${len}',
                min: '${label} phải lớn hơn hoặc bằng ${min}',
                max: '${label} phải nhỏ hơn hoặc bằng ${max}',
                range: '${label} phải nằm trong khoảng ${min}-${max}'
            },
            array: {
                len: 'Mảng ${label} phải có ${len} phần tử ',
                min: 'Mảng ${label} phải chứa tối thiểu ${min} phần tử ',
                max: 'Mảng ${label} phải chứa tối đa ${max} phần tử ',
                range: 'Mảng ${label} phải chứa từ ${min}-${max} phần tử'
            },
            pattern: {
                mismatch: '${label} không thỏa mãn mẫu kiểm tra ${pattern}'
            }
        }
    },
    QRCode: {
        expired: 'Mã QR hết hạn',
        refresh: 'Làm mới',
        scanned: 'Đã quét'
    },
    ColorPicker: {
        presetEmpty: 'Trống',
        transparent: 'Trong suốt',
        singleColor: 'Màu đơn',
        gradientColor: 'Màu chuyển sắc'
    }
};
var _default = exports.default = localeValues;
}),
"[project]/apps/web/node_modules/antd/locale/vi_VN.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/apps/web/node_modules/antd/lib/locale/vi_VN.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/message/PureList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationList$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/NotificationList/index.js [app-client] (ecmascript) <export default as NotificationList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PureList = (props)=>{
    const { items, classNames, style } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('message');
    const prefixCls = getPrefixCls('message');
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const noticePrefixCls = `${prefixCls}-notice`;
    const configList = items.map((item)=>{
        const { content, duration, key, type } = item;
        const typeIconCls = type ? `${noticePrefixCls}-icon-${type}` : undefined;
        return {
            key,
            duration,
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessageIcon"])(type),
            title: content,
            className: `${noticePrefixCls}-${type}`,
            classNames: {
                wrapper: `${prefixCls}-${type}`,
                icon: typeIconCls
            }
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationList$3e$__["NotificationList"], {
        prefixCls: prefixCls,
        placement: "top",
        configList: configList,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, rootCls),
        classNames: {
            ...classNames,
            wrapper: classNames?.wrapper,
            title: classNames?.title
        },
        style: style,
        stack: false
    });
};
const __TURBOPACK__default__export__ = PureList;
}),
"[project]/apps/web/node_modules/antd/es/message/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actDestroy",
    ()=>actDestroy,
    "actWrapper",
    ()=>actWrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/React/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PureList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/PureList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/useMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/util.js [app-client] (ecmascript)");
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
let message = null;
let act = (callback)=>callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
    const { getContainer, duration, rtl, maxCount, top, stack } = defaultGlobalConfig;
    const mergedContainer = getContainer?.() || document.body;
    return {
        getContainer: ()=>mergedContainer,
        duration,
        rtl,
        maxCount,
        top,
        stack
    };
}
const GlobalHolder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { messageConfig, sync } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('message');
    const appConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppConfigContext"]);
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalMessage"])({
        ...messageConfig,
        prefixCls,
        ...appConfig.message
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "GlobalHolder.useImperativeHandle": ()=>{
            const instance = {
                ...api
            };
            Object.keys(instance).forEach({
                "GlobalHolder.useImperativeHandle": (method)=>{
                    instance[method] = ({
                        "GlobalHolder.useImperativeHandle": (...args)=>{
                            sync();
                            return api[method].apply(api, args);
                        }
                    })["GlobalHolder.useImperativeHandle"];
                }
            }["GlobalHolder.useImperativeHandle"]);
            return {
                instance,
                sync
            };
        }
    }["GlobalHolder.useImperativeHandle"]);
    return holder;
});
const GlobalHolderWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((_, ref)=>{
    const [messageConfig, setMessageConfig] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(getGlobalContext);
    const sync = ()=>{
        setMessageConfig(getGlobalContext);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(sync, []);
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    const rootPrefixCls = global.getRootPrefixCls();
    const rootIconPrefixCls = global.getIconPrefixCls();
    const theme = global.getTheme();
    const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GlobalHolder, {
        ref: ref,
        sync: sync,
        messageConfig: messageConfig
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: rootPrefixCls,
        iconPrefixCls: rootIconPrefixCls,
        theme: theme
    }, global.holderRender ? global.holderRender(dom) : dom);
});
const flushMessageQueue = ()=>{
    if (!message) {
        const holderFragment = document.createDocumentFragment();
        const newMessage = {
            fragment: holderFragment
        };
        message = newMessage;
        // Delay render to avoid sync issue
        act(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GlobalHolderWrapper, {
                ref: (node)=>{
                    const { instance, sync } = node || {};
                    // React 18 test env will throw if call immediately in ref
                    Promise.resolve().then(()=>{
                        if (!newMessage.instance && instance) {
                            newMessage.instance = instance;
                            newMessage.sync = sync;
                            flushMessageQueue();
                        }
                    });
                }
            }), holderFragment);
        });
        return;
    }
    // Notification not ready
    if (!message.instance) {
        return;
    }
    // >>> Execute task
    taskQueue.forEach((task)=>{
        const { type, skipped } = task;
        // Only `skipped` when user call notice but cancel it immediately
        // and instance not ready
        if (!skipped) {
            switch(type){
                case 'open':
                    {
                        act(()=>{
                            const closeFn = message.instance.open({
                                ...defaultGlobalConfig,
                                ...task.config
                            });
                            closeFn?.then(task.resolve);
                            task.setCloseFn(closeFn);
                        });
                        break;
                    }
                case 'destroy':
                    act(()=>{
                        message?.instance.destroy(task.key);
                    });
                    break;
                // Other type open
                default:
                    {
                        act(()=>{
                            var _message$instance;
                            const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(task.args));
                            closeFn?.then(task.resolve);
                            task.setCloseFn(closeFn);
                        });
                    }
            }
        }
    });
    // Clean up
    taskQueue = [];
};
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setMessageGlobalConfig(config) {
    defaultGlobalConfig = {
        ...defaultGlobalConfig,
        ...config
    };
    // Trigger sync for it
    act(()=>{
        message?.sync?.();
    });
}
function open(config) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPromiseFn"])((resolve)=>{
        let closeFn;
        const task = {
            type: 'open',
            config,
            resolve,
            setCloseFn: (fn)=>{
                closeFn = fn;
            }
        };
        taskQueue.push(task);
        return ()=>{
            if (closeFn) {
                act(()=>{
                    closeFn();
                });
            } else {
                task.skipped = true;
            }
        };
    });
    flushMessageQueue();
    return result;
}
function typeOpen(type, args) {
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    if (("TURBOPACK compile-time value", "development") !== 'production' && !global.holderRender) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warnContext"])('message');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapPromiseFn"])((resolve)=>{
        let closeFn;
        const task = {
            type,
            args,
            resolve,
            setCloseFn: (fn)=>{
                closeFn = fn;
            }
        };
        taskQueue.push(task);
        return ()=>{
            if (closeFn) {
                act(()=>{
                    closeFn();
                });
            } else {
                task.skipped = true;
            }
        };
    });
    flushMessageQueue();
    return result;
}
const destroy = (key)=>{
    taskQueue.push({
        type: 'destroy',
        key
    });
    flushMessageQueue();
};
const methods = [
    'success',
    'info',
    'warning',
    'error',
    'loading'
];
const baseStaticMethods = {
    open,
    destroy,
    config: setMessageGlobalConfig,
    useMessage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$useMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    _InternalPanelDoNotUseOrYouWillBeFired: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    _InternalListDoNotUseOrYouWillBeFired: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$PureList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const staticMethods = baseStaticMethods;
methods.forEach((type)=>{
    staticMethods[type] = (...args)=>typeOpen(type, args);
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = ()=>{};
let _actWrapper = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actWrapper = (wrapper)=>{
        act = wrapper;
    };
}
const actWrapper = _actWrapper;
;
let _actDestroy = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actDestroy = ()=>{
        message = null;
    };
}
const actDestroy = _actDestroy;
;
const __TURBOPACK__default__export__ = staticMethods;
}),
"[project]/apps/web/node_modules/antd/es/message/index.js [app-client] (ecmascript) <export default as message>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "message",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/notification/PureList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationList$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/notification/es/NotificationList/index.js [app-client] (ecmascript) <export default as NotificationList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PureList = (props)=>{
    const { items, classNames, placement = 'topRight', style } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('notification');
    const prefixCls = getPrefixCls('notification');
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const noticePrefixCls = `${prefixCls}-notice`;
    const configList = items.map((item)=>{
        const { actions, description, duration, key, showProgress, title, type } = item;
        const typeIconCls = `${noticePrefixCls}-icon-${type}`;
        return {
            key,
            actions,
            closable: {
                closeIcon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCloseIcon"])(noticePrefixCls)
            },
            description,
            duration,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeIcon"][type],
            showProgress,
            title,
            className: `${noticePrefixCls}-${type}`,
            classNames: {
                icon: typeIconCls
            }
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$notification$2f$es$2f$NotificationList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotificationList$3e$__["NotificationList"], {
        prefixCls: prefixCls,
        placement: placement,
        configList: configList,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(hashId, cssVarCls, rootCls),
        classNames: classNames,
        style: style,
        stack: false
    });
};
const __TURBOPACK__default__export__ = PureList;
}),
"[project]/apps/web/node_modules/antd/es/notification/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actDestroy",
    ()=>actDestroy,
    "actWrapper",
    ()=>actWrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/React/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PureList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/PureList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/useNotification.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
let notification = null;
let act = (callback)=>callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
    const { getContainer, rtl, maxCount, top, bottom, showProgress, pauseOnHover } = defaultGlobalConfig;
    const mergedContainer = getContainer?.() || document.body;
    return {
        getContainer: ()=>mergedContainer,
        rtl,
        maxCount,
        top,
        bottom,
        showProgress,
        pauseOnHover
    };
}
const GlobalHolder = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { notificationConfig, sync } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('notification');
    const appConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppConfigContext"]);
    const [api, holder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalNotification"])({
        ...notificationConfig,
        prefixCls,
        ...appConfig.notification
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(sync, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "GlobalHolder.useImperativeHandle": ()=>{
            const instance = {
                ...api
            };
            Object.keys(instance).forEach({
                "GlobalHolder.useImperativeHandle": (method)=>{
                    instance[method] = ({
                        "GlobalHolder.useImperativeHandle": (...args)=>{
                            sync();
                            return api[method].apply(api, args);
                        }
                    })["GlobalHolder.useImperativeHandle"];
                }
            }["GlobalHolder.useImperativeHandle"]);
            return {
                instance,
                sync
            };
        }
    }["GlobalHolder.useImperativeHandle"]);
    return holder;
});
const GlobalHolderWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((_, ref)=>{
    const [notificationConfig, setNotificationConfig] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(getGlobalContext);
    const sync = ()=>{
        setNotificationConfig(getGlobalContext);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(sync, []);
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    const rootPrefixCls = global.getRootPrefixCls();
    const rootIconPrefixCls = global.getIconPrefixCls();
    const theme = global.getTheme();
    const dom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GlobalHolder, {
        ref: ref,
        sync: sync,
        notificationConfig: notificationConfig
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        prefixCls: rootPrefixCls,
        iconPrefixCls: rootIconPrefixCls,
        theme: theme
    }, global.holderRender ? global.holderRender(dom) : dom);
});
const flushNotificationQueue = ()=>{
    if (!notification) {
        const holderFragment = document.createDocumentFragment();
        const newNotification = {
            fragment: holderFragment
        };
        notification = newNotification;
        // Delay render to avoid sync issue
        act(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GlobalHolderWrapper, {
                ref: (node)=>{
                    const { instance, sync } = node || {};
                    Promise.resolve().then(()=>{
                        if (!newNotification.instance && instance) {
                            newNotification.instance = instance;
                            newNotification.sync = sync;
                            flushNotificationQueue();
                        }
                    });
                }
            }), holderFragment);
        });
        return;
    }
    // Notification not ready
    if (!notification.instance) {
        return;
    }
    // >>> Execute task
    taskQueue.forEach((task)=>{
        switch(task.type){
            case 'open':
                {
                    act(()=>{
                        notification.instance.open({
                            ...defaultGlobalConfig,
                            ...task.config
                        });
                    });
                    break;
                }
            case 'destroy':
                act(()=>{
                    notification?.instance?.destroy(task.key);
                });
                break;
        }
    });
    // Clean up
    taskQueue = [];
};
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setNotificationGlobalConfig(config) {
    defaultGlobalConfig = {
        ...defaultGlobalConfig,
        ...config
    };
    // Trigger sync for it
    act(()=>{
        notification?.sync?.();
    });
}
function open(config) {
    const global = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalConfig"])();
    if (("TURBOPACK compile-time value", "development") !== 'production' && !global.holderRender) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warnContext"])('notification');
    }
    taskQueue.push({
        type: 'open',
        config
    });
    flushNotificationQueue();
}
const destroy = (key)=>{
    taskQueue.push({
        type: 'destroy',
        key
    });
    flushNotificationQueue();
};
const methods = [
    'success',
    'info',
    'warning',
    'error'
];
const baseStaticMethods = {
    open,
    destroy,
    config: setNotificationGlobalConfig,
    useNotification: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$useNotification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    _InternalPanelDoNotUseOrYouWillBeFired: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    _InternalListDoNotUseOrYouWillBeFired: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$PureList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const staticMethods = baseStaticMethods;
methods.forEach((type)=>{
    staticMethods[type] = (config)=>open({
            ...config,
            type
        });
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = ()=>{};
let _actWrapper = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actWrapper = (wrapper)=>{
        act = wrapper;
    };
}
const actWrapper = _actWrapper;
;
let _actDestroy = noop;
if (("TURBOPACK compile-time value", "development") === 'test') {
    _actDestroy = ()=>{
        notification = null;
    };
}
const actDestroy = _actDestroy;
;
const __TURBOPACK__default__export__ = staticMethods;
}),
"[project]/apps/web/node_modules/antd/es/notification/index.js [app-client] (ecmascript) <export default as notification>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notification",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genRoundedArrow",
    ()=>genRoundedArrow,
    "getArrowToken",
    ()=>getArrowToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
;
function getArrowToken(token) {
    const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
        arrowShadowWidth: shadowWidth,
        arrowPath,
        arrowPolygon
    };
}
const genRoundedArrow = (token, bgColor, boxShadow)=>{
    const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token;
    const afterStyle = {
        content: '""',
        position: 'absolute',
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: {
            _skip_check_: true,
            value: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusXS)} 0`
        },
        transform: 'translateY(50%) rotate(-135deg)',
        zIndex: 0,
        background: 'transparent'
    };
    if (boxShadow) {
        afterStyle.boxShadow = boxShadow;
    }
    return {
        pointerEvents: 'none',
        width: sizePopupArrow,
        height: sizePopupArrow,
        overflow: 'hidden',
        '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: sizePopupArrow,
            height: calc(sizePopupArrow).div(2).equal(),
            background: bgColor,
            clipPath: {
                _multi_value_: true,
                value: [
                    arrowPolygon,
                    arrowPath
                ]
            },
            content: '""'
        },
        '&::after': afterStyle
    };
};
}),
"[project]/apps/web/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_VERTICAL_CONTENT_RADIUS",
    ()=>MAX_VERTICAL_CONTENT_RADIUS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getArrowOffsetToken",
    ()=>getArrowOffsetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
;
;
;
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
        arrowOffsetHorizontal: arrowOffset,
        arrowOffsetVertical
    };
}
const getArrowStyle = (token, colorBg, options)=>{
    const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal, antCls } = token;
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    const { arrowDistance = 0, arrowShadow = true } = options || {};
    return {
        [componentCls]: {
            // ============================ Basic ============================
            [`${componentCls}-arrow`]: [
                {
                    position: 'absolute',
                    zIndex: 1,
                    // lift it up so the menu wouldn't cask shadow on it
                    display: 'block',
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genRoundedArrow"])(token, colorBg, arrowShadow ? boxShadowPopoverArrow : false),
                    '&:before': {
                        background: colorBg
                    }
                }
            ],
            // ========================== Placement ==========================
            // Here handle the arrow position and rotate stuff
            // >>>>> Top
            [[
                `&-placement-top > ${componentCls}-arrow`,
                `&-placement-topLeft > ${componentCls}-arrow`,
                `&-placement-topRight > ${componentCls}-arrow`
            ].join(',')]: {
                bottom: arrowDistance,
                transform: 'translateY(100%) rotate(180deg)'
            },
            [`&-placement-top > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
            },
            '&-placement-topLeft': {
                [varName('arrow-offset-x')]: arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-topRight': {
                [varName('arrow-offset-x')]: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            // >>>>> Bottom
            [[
                `&-placement-bottom > ${componentCls}-arrow`,
                `&-placement-bottomLeft > ${componentCls}-arrow`,
                `&-placement-bottomRight > ${componentCls}-arrow`
            ].join(',')]: {
                top: arrowDistance,
                transform: `translateY(-100%)`
            },
            [`&-placement-bottom > ${componentCls}-arrow`]: {
                left: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: `translateX(-50%) translateY(-100%)`
            },
            '&-placement-bottomLeft': {
                [varName('arrow-offset-x')]: arrowOffsetHorizontal,
                [`> ${componentCls}-arrow`]: {
                    left: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            '&-placement-bottomRight': {
                [varName('arrow-offset-x')]: `calc(100% - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal)})`,
                [`> ${componentCls}-arrow`]: {
                    right: {
                        _skip_check_: true,
                        value: arrowOffsetHorizontal
                    }
                }
            },
            // >>>>> Left
            [[
                `&-placement-left > ${componentCls}-arrow`,
                `&-placement-leftTop > ${componentCls}-arrow`,
                `&-placement-leftBottom > ${componentCls}-arrow`
            ].join(',')]: {
                right: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(100%) rotate(90deg)'
            },
            [`&-placement-left > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
            },
            [`&-placement-leftTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-leftBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            },
            // >>>>> Right
            [[
                `&-placement-right > ${componentCls}-arrow`,
                `&-placement-rightTop > ${componentCls}-arrow`,
                `&-placement-rightBottom > ${componentCls}-arrow`
            ].join(',')]: {
                left: {
                    _skip_check_: true,
                    value: arrowDistance
                },
                transform: 'translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-right > ${componentCls}-arrow`]: {
                top: {
                    _skip_check_: true,
                    value: '50%'
                },
                transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
            },
            [`&-placement-rightTop > ${componentCls}-arrow`]: {
                top: arrowOffsetVertical
            },
            [`&-placement-rightBottom > ${componentCls}-arrow`]: {
                bottom: arrowOffsetVertical
            }
        }
    };
};
const __TURBOPACK__default__export__ = getArrowStyle;
}),
"[project]/apps/web/node_modules/antd/es/_util/placements.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getPlacements,
    "getOverflowOptions",
    ()=>getOverflowOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
        return {
            adjustX: false,
            adjustY: false
        };
    }
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(autoAdjustOverflow) ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch(placement){
        case 'top':
        case 'bottom':
            baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
            baseOverflow.shiftY = true;
            baseOverflow.adjustY = true;
            break;
        case 'left':
        case 'right':
            baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
            baseOverflow.shiftX = true;
            baseOverflow.adjustX = true;
            break;
    }
    const mergedOverflow = {
        ...baseOverflow,
        ...overflow
    };
    // Support auto shift
    if (!mergedOverflow.shiftX) {
        mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
        mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
}
const PlacementAlignMap = {
    left: {
        points: [
            'cr',
            'cl'
        ]
    },
    right: {
        points: [
            'cl',
            'cr'
        ]
    },
    top: {
        points: [
            'bc',
            'tc'
        ]
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ]
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tr'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ]
    }
};
const ArrowCenterPlacementAlignMap = {
    topLeft: {
        points: [
            'bl',
            'tc'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'cl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tc'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'cr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'bc'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'cr'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bc'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'cl'
        ]
    }
};
const DisableAutoArrowList = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
]);
function getPlacements(config) {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    // Dynamic offset
    const arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: borderRadius,
        limitVerticalRadius: true
    });
    Object.keys(PlacementAlignMap).forEach((key)=>{
        const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
        const placementInfo = {
            ...template,
            offset: [
                0,
                0
            ],
            dynamicInset: true
        };
        placementMap[key] = placementInfo;
        // Disable autoArrow since design is fixed position
        if (DisableAutoArrowList.has(key)) {
            placementInfo.autoArrow = false;
        }
        // Static offset
        switch(key){
            case 'top':
            case 'topLeft':
            case 'topRight':
                placementInfo.offset[1] = -halfArrowWidth - offset;
                break;
            case 'bottom':
            case 'bottomLeft':
            case 'bottomRight':
                placementInfo.offset[1] = halfArrowWidth + offset;
                break;
            case 'left':
            case 'leftTop':
            case 'leftBottom':
                placementInfo.offset[0] = -halfArrowWidth - offset;
                break;
            case 'right':
            case 'rightTop':
            case 'rightBottom':
                placementInfo.offset[0] = halfArrowWidth + offset;
                break;
        }
        if (arrowPointAtCenter) {
            switch(key){
                case 'topLeft':
                case 'bottomLeft':
                    placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                    break;
                case 'topRight':
                case 'bottomRight':
                    placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                    break;
                case 'leftTop':
                case 'rightTop':
                    placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
                    break;
                case 'leftBottom':
                case 'rightBottom':
                    placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
                    break;
            }
        }
        // Overflow
        placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
        // VisibleFirst
        if (visibleFirst) {
            placementInfo.htmlRegion = 'visibleFirst';
        }
    });
    return placementMap;
}
}),
"[project]/apps/web/node_modules/antd/es/table/TableMeasureRowContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const TableMeasureRowContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(false);
const __TURBOPACK__default__export__ = TableMeasureRowContext;
}),
"[project]/apps/web/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useMergedArrow = (providedArrow, providedContextArrow)=>{
    const toConfig = (arrow)=>typeof arrow === 'boolean' ? {
            show: arrow
        } : arrow || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useMergedArrow.useMemo": ()=>{
            const arrowConfig = toConfig(providedArrow);
            const contextArrowConfig = toConfig(providedContextArrow);
            return {
                ...contextArrowConfig,
                ...arrowConfig,
                show: arrowConfig.show ?? contextArrowConfig.show ?? true
            };
        }
    }["useMergedArrow.useMemo"], [
        providedArrow,
        providedContextArrow
    ]);
};
const __TURBOPACK__default__export__ = useMergedArrow;
}),
"[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genPresetColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
function genPresetColor(token, genCss) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const lightColor = token[`${colorKey}1`];
        const lightBorderColor = token[`${colorKey}3`];
        const darkColor = token[`${colorKey}6`];
        const textColor = token[`${colorKey}7`];
        return {
            ...prev,
            ...genCss(colorKey, {
                lightColor,
                lightBorderColor,
                darkColor,
                textColor
            })
        };
    }, {});
}
}),
"[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPresetColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
;
const FALL_BACK_ORIGIN = '50%';
const genTooltipStyle = (token)=>{
    const { calc, componentCls, // ant-tooltip
    tooltipMaxWidth, tooltipColor, tooltipBg, tooltipBorderRadius, zIndexPopup, controlHeight, dropShadowPopover, paddingSM, paddingXS, arrowOffsetHorizontal, sizePopupArrow, antCls } = token;
    const [varName, varRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'tooltip');
    // arrowOffsetHorizontal + arrowWidth + borderRadius
    const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
    // borderRadius * 2 + arrowWidth
    const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
    const sharedBodyStyle = {
        minWidth: centerAlignMinWidth,
        minHeight: controlHeight,
        padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(paddingSM).div(2).equal())} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingXS)}`,
        color: varRef('overlay-color', tooltipColor),
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxSizing: 'border-box'
    };
    const sharedTransformOrigin = {
        // When use `autoArrow`, origin will follow the arrow position
        [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
        transformOrigin: [
            varRef('valid-offset-x', FALL_BACK_ORIGIN),
            `var(--arrow-y, ${FALL_BACK_ORIGIN})`
        ].join(' ')
    };
    return [
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'absolute',
                zIndex: zIndexPopup,
                display: 'block',
                width: 'max-content',
                maxWidth: tooltipMaxWidth,
                visibility: 'visible',
                filter: dropShadowPopover,
                ...sharedTransformOrigin,
                '&-hidden': {
                    display: 'none'
                },
                [varName('arrow-background-color')]: tooltipBg,
                // Wrapper for the tooltip content
                [`${componentCls}-container`]: [
                    sharedBodyStyle,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initFadeMotion"])(token, true)
                ],
                [`&:has(~ ${componentCls}-unique-container)`]: {
                    [`${componentCls}-container`]: {
                        border: 'none',
                        background: 'transparent'
                    }
                },
                // Align placement should have another min width
                [[
                    `&-placement-topLeft`,
                    `&-placement-topRight`,
                    `&-placement-bottomLeft`,
                    `&-placement-bottomRight`
                ].join(',')]: {
                    minWidth: edgeAlignMinWidth
                },
                // Limit left and right placement radius
                [[
                    `&-placement-left`,
                    `&-placement-leftTop`,
                    `&-placement-leftBottom`,
                    `&-placement-right`,
                    `&-placement-rightTop`,
                    `&-placement-rightBottom`
                ].join(',')]: {
                    [`${componentCls}-inner`]: {
                        borderRadius: token.min(tooltipBorderRadius, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_VERTICAL_CONTENT_RADIUS"])
                    }
                },
                [`${componentCls}-content`]: {
                    position: 'relative'
                },
                // generator for preset color
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, { darkColor })=>({
                        [`&${componentCls}-${colorKey}`]: {
                            [`${componentCls}-container`]: {
                                backgroundColor: darkColor
                            },
                            [`${componentCls}-arrow`]: {
                                [varName('arrow-background-color')]: darkColor
                            }
                        }
                    })),
                // RTL
                '&-rtl': {
                    direction: 'rtl'
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
                margin: token.sizePopupArrow
            }
        },
        // Unique Body
        {
            [`${componentCls}-unique-container`]: {
                ...sharedBodyStyle,
                ...sharedTransformOrigin,
                position: 'absolute',
                zIndex: calc(zIndexPopup).sub(1).equal(),
                filter: dropShadowPopover,
                '&-hidden': {
                    display: 'none'
                },
                '&-visible': {
                    transition: `all ${token.motionDurationSlow}`
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + 70,
        maxWidth: 250,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: token.borderRadius,
            limitVerticalRadius: true
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
        }))
    });
const __TURBOPACK__default__export__ = (prefixCls, rootCls, injectStyle = true)=>{
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tooltip', (token)=>{
        const { borderRadius, colorTextLightSolid, colorBgSpotlight, maxWidth } = token;
        const TooltipToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            // default variables
            tooltipMaxWidth: maxWidth,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgSpotlight
        });
        return [
            genTooltipStyle(TooltipToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big-fast')
        ];
    }, prepareComponentToken, {
        resetStyle: false,
        // Popover use Tooltip as internal component. We do not need to handle this.
        injectStyle
    });
    return useStyle(prefixCls, rootCls);
};
}),
"[project]/apps/web/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetStatusColors",
    ()=>PresetStatusColors,
    "isPresetColor",
    ()=>isPresetColor,
    "isPresetStatusColor",
    ()=>isPresetStatusColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
;
const inverseColors = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].map((color)=>`${color}-inverse`);
const PresetStatusColors = [
    'success',
    'processing',
    'error',
    'default',
    'warning'
];
function isPresetColor(color, includeInverse = true) {
    if (includeInverse) {
        return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inverseColors), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"])).includes(color);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].includes(color);
}
function isPresetStatusColor(color) {
    return PresetStatusColors.includes(color);
}
}),
"[project]/apps/web/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseColor",
    ()=>parseColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
;
const parseColor = (rootPrefixCls, prefixCls, color)=>{
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetColor"])(color);
    const [varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(rootPrefixCls, 'tooltip');
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(color).toRgb();
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    const textColor = luminance < 0.5 ? '#FFF' : '#000';
    if (color && !isInternalColor) {
        overlayStyle.background = color;
        overlayStyle[varName('overlay-color')] = textColor;
        arrowStyle[varName('arrow-background-color')] = color;
    }
    return {
        className,
        overlayStyle,
        arrowStyle
    };
};
}),
"[project]/apps/web/node_modules/antd/es/tooltip/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tooltip/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tooltip/es/Popup.js [app-client] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, placement = 'top', title, color, overlayInnerStyle, classNames, styles } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseColor"])(rootPrefixCls, prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const innerStyles = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PurePanel.useMemo[innerStyles]": ()=>{
            const mergedStyle = {
                ...overlayInnerStyle,
                ...colorInfo.overlayStyle
            };
            return {
                container: mergedStyle
            };
        }
    }["PurePanel.useMemo[innerStyles]"], [
        overlayInnerStyle,
        colorInfo.overlayStyle
    ]);
    const mergedProps = {
        ...props,
        placement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        innerStyles,
        styles
    ], {
        props: mergedProps
    });
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: rootClassName,
        style: arrowContentStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: `${prefixCls}-arrow`
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], {
        ...props,
        className: hashId,
        prefixCls: prefixCls,
        classNames: mergedClassNames,
        styles: mergedStyles
    }, title));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/tooltip/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/placements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$table$2f$TableMeasureRowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/table/TableMeasureRowContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)");
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
;
const InternalTooltip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, openClassName, getTooltipContainer, color, children, afterOpenChange, arrow: tooltipArrow, destroyTooltipOnHide, destroyOnHidden, title, overlay, trigger, builtinPlacements, autoAdjustOverflow = true, motion, getPopupContainer, placement = 'top', mouseEnterDelay, mouseLeaveDelay, rootClassName, styles, classNames, onOpenChange, // Legacy
    overlayInnerStyle, overlayStyle, overlayClassName, ...restProps } = props;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const injectFromPopover = props['data-popover-inject'];
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, ...semanticConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tooltip');
    // When injected from Popover/Popconfirm, skip tooltip-specific semantic config
    // to prevent ConfigProvider tooltip config from leaking into those components
    const { className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, arrow: contextArrow, trigger: contextTrigger, mouseEnterDelay: contextMouseEnterDelay, mouseLeaveDelay: contextMouseLeaveDelay } = injectFromPopover ? {} : semanticConfig;
    const mergedMouseEnterDelay = mouseEnterDelay ?? contextMouseEnterDelay ?? 0.1;
    const mergedMouseLeaveDelay = mouseLeaveDelay ?? contextMouseLeaveDelay ?? 0.1;
    const mergedArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tooltipArrow, contextArrow);
    const mergedShowArrow = mergedArrow.show;
    const mergedTrigger = trigger || contextTrigger || 'hover';
    const mergedGetPopupContainer = getPopupContainer || getContextPopupContainer;
    const mergedDestroyOnHidden = destroyOnHidden ?? !!destroyTooltipOnHide;
    const inTableMeasureRow = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$table$2f$TableMeasureRowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    // ============================== Ref ===============================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tooltip');
    const tooltipRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const forceAlign = ()=>{
        tooltipRef.current?.forceAlign();
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalTooltip.useImperativeHandle": ()=>({
                forceAlign,
                nativeElement: tooltipRef.current?.nativeElement,
                popupElement: tooltipRef.current?.popupElement
            })
    }["InternalTooltip.useImperativeHandle"]);
    // ============================== Warn ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        [
            [
                'overlayStyle',
                'styles.root'
            ],
            [
                'overlayInnerStyle',
                'styles.container'
            ],
            [
                'overlayClassName',
                'classNames.root'
            ],
            [
                'destroyTooltipOnHide',
                'destroyOnHidden'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : "TURBOPACK unreachable";
    }
    // ============================== Open ==============================
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])(props.defaultOpen ?? false, props.open);
    const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
    const onInternalOpenChange = (vis)=>{
        setOpen(noTitle ? false : vis);
        if (!noTitle && onOpenChange) {
            onOpenChange(vis);
        }
    };
    const tooltipPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[tooltipPlacements]": ()=>{
            return builtinPlacements || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                arrowPointAtCenter: mergedArrow?.pointAtCenter ?? false,
                autoAdjustOverflow,
                arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
                borderRadius: token.borderRadius,
                offset: token.marginXXS,
                visibleFirst: true
            });
        }
    }["InternalTooltip.useMemo[tooltipPlacements]"], [
        mergedArrow,
        builtinPlacements,
        token,
        mergedShowArrow,
        autoAdjustOverflow
    ]);
    const memoOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[memoOverlay]": ()=>{
            if (title === 0) {
                return title;
            }
            return overlay || title || '';
        }
    }["InternalTooltip.useMemo[memoOverlay]"], [
        overlay,
        title
    ]);
    const memoOverlayWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        space: true,
        form: true
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(memoOverlay) ? memoOverlay() : memoOverlay);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        trigger: mergedTrigger,
        builtinPlacements: tooltipPlacements,
        getPopupContainer: mergedGetPopupContainer,
        destroyOnHidden: mergedDestroyOnHidden,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay
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
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    let tempOpen = open;
    // Hide tooltip when there is no title or in table measure row
    if (!('open' in props) && noTitle || inTableMeasureRow) {
        tempOpen = false;
    }
    // ============================= Render =============================
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(children) ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls, !injectFromPopover);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseColor"])(rootPrefixCls, prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const themeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls);
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Tooltip', restProps.zIndex);
    const containerStyle = {
        ...mergedStyles.container,
        ...overlayInnerStyle,
        ...colorInfo.overlayStyle
    };
    const content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        unique: true,
        ...restProps,
        zIndex: zIndex,
        showArrow: mergedShowArrow,
        placement: placement,
        mouseEnterDelay: mergedMouseEnterDelay,
        mouseLeaveDelay: mergedMouseLeaveDelay,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            container: mergedClassNames.container,
            arrow: mergedClassNames.arrow,
            uniqueContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(themeCls, mergedClassNames.container)
        },
        styles: {
            root: {
                ...arrowContentStyle,
                ...mergedStyles.root
            },
            container: containerStyle,
            uniqueContainer: containerStyle,
            arrow: mergedStyles.arrow
        },
        ref: tooltipRef,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onInternalOpenChange,
        afterVisibleChange: afterOpenChange,
        arrowContent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: `${prefixCls}-arrow-content`
        }),
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big-fast', typeof motion?.motionName === 'string' ? motion?.motionName : undefined),
            motionDeadline: 1000
        },
        trigger: mergedTrigger,
        builtinPlacements: tooltipPlacements,
        getTooltipContainer: mergedGetPopupContainer,
        destroyOnHidden: mergedDestroyOnHidden
    }, tempOpen && !restProps.disabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: childCls
    }) : child);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, content);
});
const Tooltip = InternalTooltip;
if ("TURBOPACK compile-time truthy", 1) {
    Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Tooltip.UniqueProvider = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tooltip;
}),
"[project]/apps/web/node_modules/antd/es/progress/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPercentage",
    ()=>getPercentage,
    "getSize",
    ()=>getSize,
    "getStrokeColor",
    ()=>getStrokeColor,
    "getSuccessPercent",
    ()=>getSuccessPercent,
    "validProgress",
    ()=>validProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/presets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
;
;
function validProgress(progress) {
    if (!progress || progress < 0) {
        return 0;
    }
    if (progress > 100) {
        return 100;
    }
    return progress;
}
function getSuccessPercent({ success }) {
    let percent;
    if (success && 'percent' in success) {
        percent = success.percent;
    }
    return percent;
}
const getPercentage = ({ percent, success })=>{
    const realSuccessPercent = validProgress(getSuccessPercent({
        success
    }));
    return [
        realSuccessPercent,
        validProgress(validProgress(percent) - realSuccessPercent)
    ];
};
const getStrokeColor = ({ success = {}, strokeColor })=>{
    const { strokeColor: successColor } = success;
    return [
        successColor || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].green,
        strokeColor || null
    ];
};
const getSize = (size, type, extra)=>{
    let width = -1;
    let height = -1;
    if (type === 'step') {
        const steps = extra.steps;
        const strokeWidth = extra.strokeWidth;
        if (typeof size === 'string' || typeof size === 'undefined') {
            width = size === 'small' ? 2 : 14;
            height = strokeWidth ?? 8;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size)) {
            [width, height] = [
                size,
                size
            ];
        } else {
            [width = 14, height = 8] = Array.isArray(size) ? size : [
                size.width,
                size.height
            ];
        }
        width *= steps;
    } else if (type === 'line') {
        const strokeWidth = extra?.strokeWidth;
        if (typeof size === 'string' || typeof size === 'undefined') {
            height = strokeWidth || (size === 'small' ? 6 : 8);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size)) {
            [width, height] = [
                size,
                size
            ];
        } else {
            [width = -1, height = 8] = Array.isArray(size) ? size : [
                size.width,
                size.height
            ];
        }
    } else if (type === 'circle' || type === 'dashboard') {
        if (typeof size === 'string' || typeof size === 'undefined') {
            [width, height] = size === 'small' ? [
                60,
                60
            ] : [
                120,
                120
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(size)) {
            [width, height] = [
                size,
                size
            ];
        } else if (Array.isArray(size)) {
            width = size[0] ?? size[1] ?? 120;
            height = size[0] ?? size[1] ?? 120;
        }
    }
    return [
        width,
        height
    ];
};
}),
"[project]/apps/web/node_modules/antd/es/progress/Circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$progress$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/progress/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/progress/es/Circle/index.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const CIRCLE_MIN_STROKE_WIDTH = 3;
const getMinPercent = (width)=>CIRCLE_MIN_STROKE_WIDTH / width * 100;
const OMIT_SEMANTIC_NAMES = [
    'root',
    'body',
    'indicator'
];
const Circle = (props)=>{
    const { prefixCls, classNames, styles, railColor, trailColor, strokeLinecap = 'round', gapPosition, gapPlacement, gapDegree, width: originWidth = 120, type, children, success, size = originWidth, steps } = props;
    const { direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('progress');
    const mergedRailColor = railColor ?? trailColor;
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, 'circle');
    let { strokeWidth } = props;
    if (strokeWidth === undefined) {
        strokeWidth = Math.max(getMinPercent(width), 6);
    }
    const circleStyle = {
        width,
        height,
        fontSize: width * 0.15 + 6
    };
    const realGapDegree = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Circle.useMemo[realGapDegree]": ()=>{
            // Support gapDeg = 0 when type = 'dashboard'
            if (gapDegree || gapDegree === 0) {
                return gapDegree;
            }
            if (type === 'dashboard') {
                return 75;
            }
            return undefined;
        }
    }["Circle.useMemo[realGapDegree]"], [
        gapDegree,
        type
    ]);
    const percentArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentage"])(props);
    const gapPos = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Circle.useMemo[gapPos]": ()=>{
            const mergedPlacement = (gapPlacement ?? gapPosition) || type === 'dashboard' && 'bottom' || undefined;
            const isRTL = direction === 'rtl';
            switch(mergedPlacement){
                case 'start':
                    return isRTL ? 'right' : 'left';
                case 'end':
                    return isRTL ? 'left' : 'right';
                default:
                    return mergedPlacement;
            }
        }
    }["Circle.useMemo[gapPos]"], [
        direction,
        gapPlacement,
        gapPosition,
        type
    ]);
    // using className to style stroke color
    const isGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(props.strokeColor);
    const strokeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStrokeColor"])({
        success,
        strokeColor: props.strokeColor
    });
    const wrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-body`, {
        [`${prefixCls}-circle-gradient`]: isGradient
    }, classNames.body);
    const circleContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$progress$2f$es$2f$Circle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
        steps: steps,
        percent: steps ? percentArray[1] : percentArray,
        strokeWidth: strokeWidth,
        railWidth: strokeWidth,
        strokeColor: steps ? strokeColor[1] : strokeColor,
        strokeLinecap: strokeLinecap,
        railColor: mergedRailColor,
        prefixCls: prefixCls,
        gapDegree: realGapDegree,
        gapPosition: gapPos,
        classNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(classNames, OMIT_SEMANTIC_NAMES),
        styles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(styles, OMIT_SEMANTIC_NAMES)
    });
    const smallCircle = width <= 20;
    const node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: wrapperClassName,
        style: {
            ...circleStyle,
            ...styles.body
        }
    }, circleContent, !smallCircle && children);
    if (smallCircle) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: children
        }, node);
    }
    return node;
};
const __TURBOPACK__default__export__ = Circle;
}),
"[project]/apps/web/node_modules/antd/es/progress/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineStrokeColorVar",
    ()=>LineStrokeColorVar,
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
const LineStrokeColorVar = '--progress-line-stroke-color';
const genAntProgressActive = (isRtl)=>{
    const direction = isRtl ? '100%' : '-100%';
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"](`antProgress${isRtl ? 'RTL' : 'LTR'}Active`, {
        '0%': {
            transform: `translateX(${direction}) scaleX(0)`,
            opacity: 0.1
        },
        '20%': {
            transform: `translateX(${direction}) scaleX(0)`,
            opacity: 0.5
        },
        to: {
            transform: 'translateX(0) scaleX(1)',
            opacity: 0
        }
    });
};
// ====================================================================
// ==                              Base                              ==
// ====================================================================
const genBaseStyle = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [progressCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            display: 'inline-flex',
            '&-rtl': {
                direction: 'rtl'
            },
            [`${progressCls}-indicator`]: {
                color: token.colorText,
                lineHeight: 1,
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
                wordBreak: 'normal',
                [iconPrefixCls]: {
                    fontSize: token.fontSize
                }
            },
            [`&${progressCls}-status-exception`]: {
                [`${progressCls}-indicator`]: {
                    color: token.colorError
                }
            },
            [`&${progressCls}-status-success`]: {
                [`${progressCls}-indicator`]: {
                    color: token.colorSuccess
                }
            }
        }
    };
};
// ====================================================================
// ==                              Line                              ==
// ====================================================================
const genLineStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-line`]: {
            position: 'relative',
            width: '100%',
            fontSize: token.fontSize,
            [`${componentCls}-body`]: {
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%',
                gap: token.marginXS
            },
            [`${componentCls}-rail`]: {
                flex: 'auto',
                background: token.remainingColor,
                borderRadius: token.lineBorderRadius,
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
            },
            [`&${componentCls}-status-active`]: {
                [`${componentCls}-track:after`]: {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: token.colorBgContainer,
                    borderRadius: 'inherit',
                    opacity: 0,
                    animationName: genAntProgressActive(),
                    animationDuration: token.progressActiveMotionDuration,
                    animationTimingFunction: token.motionEaseOutQuint,
                    animationIterationCount: 'infinite'
                }
            },
            [`${componentCls}-track`]: {
                position: 'absolute',
                insetInlineStart: 0,
                insetBlock: 0,
                borderRadius: 'inherit',
                background: token.defaultColor,
                transition: `all ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
                minWidth: 'max-content',
                display: 'flex',
                alignItems: 'center',
                '&-success': {
                    background: token.colorSuccess
                }
            },
            [`&${componentCls}-status-exception`]: {
                [`${componentCls}-track`]: {
                    background: token.colorError
                }
            },
            [`&${componentCls}-status-success`]: {
                [`${componentCls}-track`]: {
                    background: token.colorSuccess
                }
            },
            // >>>>> indicator
            // >>> Outer
            [`${componentCls}-indicator-outer`]: {
                [`&${componentCls}-indicator-start`]: {
                    order: -1
                }
            },
            [`${componentCls}-body-layout-bottom`]: {
                flexDirection: 'column',
                alignItems: 'center',
                gap: token.marginXXS
            },
            // >>> Inner
            [`${componentCls}-indicator${componentCls}-indicator-inner`]: {
                color: token.colorWhite,
                paddingInline: token.paddingXXS,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                [`&${componentCls}-indicator-end`]: {
                    justifyContent: 'end'
                },
                [`&${componentCls}-indicator-start`]: {
                    justifyContent: 'start'
                },
                [`&${componentCls}-indicator-bright`]: {
                    color: 'rgba(0, 0, 0, 0.45)'
                }
            }
        }
    };
};
// ====================================================================
// ==                             Circle                             ==
// ====================================================================
const genCircleStyle = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [`${progressCls}-circle`]: {
            [`${progressCls}-circle-rail`]: {
                stroke: token.remainingColor
            },
            [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
                [`${progressCls}-circle-path`]: {
                    stroke: token.defaultColor
                }
            },
            [`${progressCls}-body`]: {
                position: 'relative',
                lineHeight: 1,
                backgroundColor: 'transparent'
            },
            [`${progressCls}-indicator`]: {
                position: 'absolute',
                insetBlockStart: '50%',
                insetInlineStart: 0,
                width: '100%',
                margin: 0,
                padding: 0,
                color: token.circleTextColor,
                fontSize: token.circleTextFontSize,
                lineHeight: 1,
                whiteSpace: 'normal',
                textAlign: 'center',
                transform: 'translateY(-50%)',
                [iconPrefixCls]: {
                    fontSize: token.circleIconFontSize
                }
            },
            [`&${progressCls}-status-exception`]: {
                [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
                    [`${progressCls}-circle-path`]: {
                        stroke: token.colorError
                    }
                }
            },
            [`&${progressCls}-status-success`]: {
                [`${progressCls}-body:not(${progressCls}-circle-gradient)`]: {
                    [`${progressCls}-circle-path`]: {
                        stroke: token.colorSuccess
                    }
                }
            }
        },
        [`${progressCls}-inline-circle`]: {
            lineHeight: 1,
            [`${progressCls}-inner`]: {
                verticalAlign: 'bottom'
            }
        }
    };
};
// ====================================================================
// ==                              Step                              ==
// ====================================================================
const genStepStyle = (token)=>{
    const { componentCls: progressCls } = token;
    return {
        [progressCls]: {
            [`${progressCls}-steps`]: {
                display: 'inline-block',
                '&-body': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: token.progressStepMarginInlineEnd,
                    [`${progressCls}-indicator`]: {
                        marginInlineStart: token.marginXS
                    }
                },
                '&-item': {
                    flexShrink: 0,
                    minWidth: token.progressStepMinWidth,
                    backgroundColor: token.remainingColor,
                    transition: `all ${token.motionDurationSlow}`,
                    '&-active': {
                        backgroundColor: token.defaultColor
                    }
                }
            }
        }
    };
};
// ====================================================================
// ==                           Small Line                           ==
// ====================================================================
const genSmallLine = (token)=>{
    const { componentCls: progressCls, iconCls: iconPrefixCls } = token;
    return {
        [progressCls]: {
            [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-indicator ${iconPrefixCls}`]: {
                fontSize: token.fontSizeSM
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        circleTextColor: token.colorText,
        defaultColor: token.colorInfo,
        remainingColor: token.colorFillSecondary,
        lineBorderRadius: 100,
        // magic for capsule shape, should be a very large number
        circleTextFontSize: '1em',
        circleIconFontSize: `${token.fontSize / token.fontSizeSM}em`
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Progress', (token)=>{
    const progressStepMarginInlineEnd = token.calc(token.marginXXS).div(2).equal();
    const progressToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        progressStepMarginInlineEnd,
        progressStepMinWidth: progressStepMarginInlineEnd,
        progressActiveMotionDuration: '2.4s'
    });
    return [
        genBaseStyle(progressToken),
        genLineStyle(progressToken),
        genCircleStyle(progressToken),
        genStepStyle(progressToken),
        genSmallLine(progressToken)
    ];
}, prepareComponentToken);
}),
"[project]/apps/web/node_modules/antd/es/progress/Line.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "handleGradient",
    ()=>handleGradient,
    "sortGradient",
    ()=>sortGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/presets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const sortGradient = (gradients)=>{
    let tempArr = [];
    Object.keys(gradients).forEach((key)=>{
        const formattedKey = Number.parseFloat(key.replace(/%/g, ''));
        if (!Number.isNaN(formattedKey)) {
            tempArr.push({
                key: formattedKey,
                value: gradients[key]
            });
        }
    });
    tempArr = tempArr.sort((a, b)=>a.key - b.key);
    return tempArr.map(({ key, value })=>`${value} ${key}%`).join(', ');
};
const handleGradient = (strokeColor, directionConfig)=>{
    const { from = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].blue, to = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].blue, direction = directionConfig === 'rtl' ? 'to left' : 'to right', ...rest } = strokeColor;
    if (Object.keys(rest).length !== 0) {
        const sortedGradients = sortGradient(rest);
        const background = `linear-gradient(${direction}, ${sortedGradients})`;
        return {
            background,
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: background
        };
    }
    const background = `linear-gradient(${direction}, ${from}, ${to})`;
    return {
        background,
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: background
    };
};
const Line = (props)=>{
    const { prefixCls, classNames, styles, direction: directionConfig, percent, size, strokeWidth, strokeColor, strokeLinecap = 'round', children, railColor, trailColor, percentPosition, success } = props;
    const { align: infoAlign, type: infoPosition } = percentPosition;
    const mergedRailColor = railColor ?? trailColor;
    const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Progress');
        warning.deprecated(!('strokeWidth' in props), 'strokeWidth', 'size');
    }
    // ========================= Size =========================
    const mergedSize = size ?? [
        -1,
        strokeWidth || (size === 'small' ? 6 : 8)
    ];
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(mergedSize, 'line', {
        strokeWidth
    });
    // ========================= Rail =========================
    const railStyle = {
        backgroundColor: mergedRailColor || undefined,
        borderRadius,
        height
    };
    // ======================== Tracks ========================
    const trackCls = `${prefixCls}-track`;
    const backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineStrokeColorVar"]]: strokeColor,
        background: strokeColor
    };
    const percentTrackStyle = {
        width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validProgress"])(percent)}%`,
        height,
        borderRadius,
        ...backgroundProps
    };
    const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
    const successTrackStyle = {
        width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validProgress"])(successPercent)}%`,
        height,
        borderRadius,
        backgroundColor: success?.strokeColor
    };
    // ======================== Render ========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-body`, classNames.body, {
            [`${prefixCls}-body-layout-bottom`]: infoAlign === 'center' && infoPosition === 'outer'
        }),
        style: {
            width: width > 0 ? width : '100%',
            ...styles.body
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-rail`, classNames.rail),
        style: {
            ...railStyle,
            ...styles.rail
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(trackCls, classNames.track),
        style: {
            ...percentTrackStyle,
            ...styles.track
        }
    }, infoPosition === 'inner' && children), successPercent !== undefined && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(trackCls, `${trackCls}-success`, classNames.track),
        style: {
            ...successTrackStyle,
            ...styles.track
        }
    })), infoPosition === 'outer' && children);
};
const __TURBOPACK__default__export__ = Line;
}),
"[project]/apps/web/node_modules/antd/es/progress/Steps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
const Steps = (props)=>{
    const { classNames, styles, size, steps, rounding: customRounding = Math.round, percent = 0, strokeWidth = 8, strokeColor, railColor, trailColor, prefixCls, children } = props;
    const current = customRounding(steps * (percent / 100));
    const stepWidth = size === 'small' ? 2 : 14;
    const mergedSize = size ?? [
        stepWidth,
        strokeWidth
    ];
    const [width, height] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(mergedSize, 'step', {
        steps,
        strokeWidth
    });
    const unitWidth = width / steps;
    const styledSteps = Array.from({
        length: steps
    });
    const mergedRailColor = railColor ?? trailColor;
    for(let i = 0; i < steps; i++){
        const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
        styledSteps[i] = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            key: i,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-steps-item`, {
                [`${prefixCls}-steps-item-active`]: i <= current - 1
            }, classNames.track),
            style: {
                backgroundColor: i <= current - 1 ? color : mergedRailColor,
                width: unitWidth,
                height,
                ...styles.track
            }
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-steps-body`, classNames.body),
        style: styles.body
    }, styledSteps, children);
};
const __TURBOPACK__default__export__ = Steps;
}),
"[project]/apps/web/node_modules/antd/es/progress/progress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressTypes",
    ()=>ProgressTypes,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/hooks/useMergeSemantic/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Steps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/Steps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/utils.js [app-client] (ecmascript)");
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
const ProgressTypes = [
    'line',
    'circle',
    'dashboard'
];
const ProgressStatuses = [
    'normal',
    'exception',
    'active',
    'success'
];
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, classNames, styles, steps, strokeColor, percent = 0, size = 'medium', showInfo = true, type = 'line', status, format, style, percentPosition = {}, ...restProps } = props;
    // ========================= MISC =========================
    const { align: infoAlign = 'end', type: infoPosition = 'outer' } = percentPosition;
    const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
    const strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
    const strokeColorIsBright = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Progress.useMemo[strokeColorIsBright]": ()=>{
            if (strokeColorNotArray) {
                const color = typeof strokeColorNotArray === 'string' ? strokeColorNotArray : Object.values(strokeColorNotArray)[0];
                return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](color).isLight();
            }
            return false;
        }
    }["Progress.useMemo[strokeColorIsBright]"], [
        strokeColor
    ]);
    const percentNumber = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Progress.useMemo[percentNumber]": ()=>{
            const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
            return Number.parseInt(successPercent !== undefined ? (successPercent ?? 0)?.toString() : (percent ?? 0)?.toString(), 10);
        }
    }["Progress.useMemo[percentNumber]"], [
        percent,
        props.success
    ]);
    const progressStatus = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Progress.useMemo[progressStatus]": ()=>{
            if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
                return 'success';
            }
            return status || 'normal';
        }
    }["Progress.useMemo[progressStatus]"], [
        status,
        percentNumber
    ]);
    // ======================= Context ========================
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('progress');
    const prefixCls = getPrefixCls('progress', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedProps = {
        ...props,
        percent,
        type,
        size,
        showInfo,
        percentPosition
    };
    // ======================== Styles ========================
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
    // ========================= Info =========================
    const isLineType = type === 'line';
    const isPureLineType = isLineType && !steps;
    const progressInfo = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Progress.useMemo[progressInfo]": ()=>{
            if (!showInfo) {
                return null;
            }
            const successPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSuccessPercent"])(props);
            let text;
            const textFormatter = format || ({
                "Progress.useMemo[progressInfo]": (number)=>`${number}%`
            })["Progress.useMemo[progressInfo]"];
            const isBrightInnerColor = isLineType && strokeColorIsBright && infoPosition === 'inner';
            if (infoPosition === 'inner' || format || progressStatus !== 'exception' && progressStatus !== 'success') {
                text = textFormatter((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validProgress"])(percent), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validProgress"])(successPercent));
            } else if (progressStatus === 'exception') {
                text = isLineType ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
            } else if (progressStatus === 'success') {
                text = isLineType ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(`${prefixCls}-indicator`, {
                    [`${prefixCls}-indicator-bright`]: isBrightInnerColor,
                    [`${prefixCls}-indicator-${infoAlign}`]: isPureLineType,
                    [`${prefixCls}-indicator-${infoPosition}`]: isPureLineType
                }, mergedClassNames.indicator),
                style: mergedStyles.indicator,
                title: typeof text === 'string' ? text : undefined
            }, text);
        }
    }["Progress.useMemo[progressInfo]"], [
        showInfo,
        percent,
        percentNumber,
        progressStatus,
        type,
        prefixCls,
        format,
        isLineType,
        strokeColorIsBright,
        infoPosition,
        infoAlign,
        isPureLineType,
        mergedClassNames.indicator,
        mergedStyles.indicator
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Progress');
        [
            [
                'width',
                'size'
            ],
            [
                'trailColor',
                'railColor'
            ],
            [
                'gapPosition',
                'gapPlacement'
            ]
        ].forEach(([deprecatedName, newName])=>{
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        if (type === 'circle' || type === 'dashboard') {
            if (Array.isArray(size)) {
                ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : "TURBOPACK unreachable";
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(size)) {
                ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.') : "TURBOPACK unreachable";
            }
        }
        warning.deprecated(size !== 'default', 'size="default"', 'size="medium"');
    }
    // ======================== Render ========================
    const sharedProps = {
        ...props,
        classNames: mergedClassNames,
        styles: mergedStyles
    };
    let progress;
    // Render progress shape
    if (type === 'line') {
        progress = steps ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Steps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...sharedProps,
            strokeColor: strokeColorNotGradient,
            prefixCls: prefixCls,
            steps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$_util$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(steps) ? steps.count : steps
        }, progressInfo) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...sharedProps,
            strokeColor: strokeColorNotArray,
            prefixCls: prefixCls,
            direction: direction,
            percentPosition: {
                align: infoAlign,
                type: infoPosition
            }
        }, progressInfo);
    } else if (type === 'circle' || type === 'dashboard') {
        progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...sharedProps,
            strokeColor: strokeColorNotArray,
            prefixCls: prefixCls,
            progressStatus: progressStatus
        }, progressInfo);
    }
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, `${prefixCls}-status-${progressStatus}`, {
        [`${prefixCls}-${type === 'dashboard' && 'circle' || type}`]: type !== 'line',
        [`${prefixCls}-inline-circle`]: type === 'circle' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, 'circle')[0] <= 20,
        [`${prefixCls}-line`]: isPureLineType,
        [`${prefixCls}-line-align-${infoAlign}`]: isPureLineType,
        [`${prefixCls}-line-position-${infoPosition}`]: isPureLineType,
        [`${prefixCls}-steps`]: steps,
        [`${prefixCls}-show-info`]: showInfo,
        [`${prefixCls}-small`]: size === 'small',
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: ref,
        style: mergedStyles.root,
        className: classString,
        role: "progressbar",
        "aria-valuenow": percentNumber,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
            'railColor',
            'trailColor',
            'strokeWidth',
            'width',
            'gapDegree',
            'gapPosition',
            'gapPlacement',
            'strokeLinecap',
            'success'
        ])
    }, progress);
});
if ("TURBOPACK compile-time truthy", 1) {
    Progress.displayName = 'Progress';
}
const __TURBOPACK__default__export__ = Progress;
}),
"[project]/apps/web/node_modules/antd/es/progress/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/progress.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/apps/web/node_modules/antd/es/progress/index.js [app-client] (ecmascript) <export default as Progress>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/index.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/antd/es/theme/getDesignToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/util/alias.js [app-client] (ecmascript)");
;
;
;
;
const getDesignToken = (config)=>{
    const theme = config?.algorithm ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(config.algorithm) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const mergedToken = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        ...config?.token
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedToken"])(mergedToken, {
        override: config?.token
    }, theme, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
};
const __TURBOPACK__default__export__ = getDesignToken;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/compact/genCompactSizeMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSizeMapToken
]);
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    const compactSizeStep = sizeStep - 2;
    return {
        sizeXXL: sizeUnit * (compactSizeStep + 10),
        sizeXL: sizeUnit * (compactSizeStep + 6),
        sizeLG: sizeUnit * (compactSizeStep + 2),
        sizeMD: sizeUnit * (compactSizeStep + 2),
        sizeMS: sizeUnit * (compactSizeStep + 1),
        size: sizeUnit * compactSizeStep,
        sizeSM: sizeUnit * compactSizeStep,
        sizeXS: sizeUnit * (compactSizeStep - 1),
        sizeXXS: sizeUnit * (compactSizeStep - 1)
    };
}
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/compact/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$compact$2f$genCompactSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/compact/genCompactSizeMapToken.js [app-client] (ecmascript)");
;
;
;
;
const derivative = (token, mapToken)=>{
    const mergedMapToken = mapToken ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token);
    const fontSize = mergedMapToken.fontSizeSM; // Smaller size font-size as base
    const controlHeight = mergedMapToken.controlHeight - 4;
    return {
        ...mergedMapToken,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$compact$2f$genCompactSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapToken ?? token),
        // font
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fontSize),
        // controlHeight
        controlHeight,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            ...mergedMapToken,
            controlHeight
        })
    };
};
const __TURBOPACK__default__export__ = derivative;
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/dark/colorAlgorithm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlphaColor",
    ()=>getAlphaColor,
    "getSolidColor",
    ()=>getSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
const getAlphaColor = (baseColor, alpha)=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor);
    return instance.lighten(brightness).toHexString();
};
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/dark/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateColorPalettes",
    ()=>generateColorPalettes,
    "generateNeutralColorPalettes",
    ()=>generateNeutralColorPalettes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/dark/colorAlgorithm.js [app-client] (ecmascript)");
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor, {
        theme: 'dark'
    });
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[6],
        6: colors[5],
        7: colors[4],
        8: colors[6],
        9: colors[5],
        10: colors[4]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor, shadowColor)=>{
    const colorBgBase = bgBaseColor || '#000';
    const colorTextBase = textBaseColor || '#fff';
    const colorShadow = shadowColor || 'rgba(255, 255, 255, 0.2)';
    return {
        colorBgBase,
        colorTextBase,
        colorShadow,
        colorText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.85),
        colorTextSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.65),
        colorTextTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.45),
        colorTextQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.25),
        colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.18),
        colorFillSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.12),
        colorFillTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.08),
        colorFillQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorBgSolid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.95),
        colorBgSolidHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 1),
        colorBgSolidActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.9),
        colorBgElevated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 12),
        colorBgContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 8),
        colorBgLayout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgSpotlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 26),
        colorBgBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 26),
        colorBorderDisabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 26),
        colorBorderSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 19)
    };
};
}),
"[project]/apps/web/node_modules/antd/es/theme/themes/dark/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/dark/colors.js [app-client] (ecmascript)");
;
;
;
;
;
;
const derivative = (token, mapToken)=>{
    const colorPalettes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPresetColors"]).map((colorKey)=>{
        const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(token[colorKey], {
            theme: 'dark'
        });
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev[`${colorKey}-${i + 1}`] = colors[i];
            prev[`${colorKey}${i + 1}`] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = {
            ...prev,
            ...cur
        };
        return prev;
    }, {});
    const mergedMapToken = mapToken ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token);
    const colorMapToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, {
        generateColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalettes"],
        generateNeutralColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNeutralColorPalettes"]
    });
    const presetColorHoverActiveTokens = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const colorBase = token[colorKey];
        if (colorBase) {
            const colorPalette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalettes"])(colorBase);
            prev[`${colorKey}Hover`] = colorPalette[7];
            prev[`${colorKey}Active`] = colorPalette[5];
        }
        return prev;
    }, {});
    return {
        ...mergedMapToken,
        // Dark tokens
        ...colorPalettes,
        // Colors
        ...colorMapToken,
        ...presetColorHoverActiveTokens,
        // Customize selected item background color
        // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
        colorPrimaryBg: colorMapToken.colorPrimaryBorder,
        colorPrimaryBgHover: colorMapToken.colorPrimaryBorderHover
    };
};
const __TURBOPACK__default__export__ = derivative;
}),
"[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$getDesignToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/getDesignToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$compact$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/compact/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/dark/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// ZombieJ: We export as object to user but array in internal.
// This is used to minimize the bundle size for antd package but safe to refactor as object also.
// Please do not export internal `useToken` directly to avoid something export unexpected.
/** Get current context Design Token. Will be different if you are using nest theme config. */ function useToken() {
    const [theme, token, hashId, cssVar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    return {
        theme,
        token,
        hashId,
        cssVar
    };
}
const theme = {
    /** Default seedToken */ defaultSeed: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"].token,
    useToken,
    defaultAlgorithm: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    darkAlgorithm: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$dark$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    compactAlgorithm: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$compact$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    getDesignToken: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$getDesignToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */ defaultConfig: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultConfig"],
    /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */ _internalContext: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"]
};
const __TURBOPACK__default__export__ = theme;
}),
"[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript) <export default as theme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0rrk_antd_0hxp5-i._.js.map