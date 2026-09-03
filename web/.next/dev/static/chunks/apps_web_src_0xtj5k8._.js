(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messageApi",
    ()=>messageApi,
    "msg",
    ()=>msg,
    "notificationApi",
    ()=>notificationApi,
    "notify",
    ()=>notify,
    "setMessageApi",
    ()=>setMessageApi,
    "setNotificationApi",
    ()=>setNotificationApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/progress/index.js [app-client] (ecmascript) <export default as Progress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript) <export default as LoadingOutlined>");
let messageApi;
const setMessageApi = (api)=>{
    messageApi = api;
};
;
;
;
const msg = {
    success: (content)=>messageApi?.success(content),
    error: (content)=>messageApi?.error(content),
    info: (content)=>messageApi?.info(content),
    warning: (content)=>messageApi?.warning(content),
    loading: (content, key = 'global', percent)=>{
        let node = content;
        if (percent !== undefined) {
            node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '180px'
                }
            }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('span', {
                style: {
                    fontWeight: 500
                }
            }, content), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                percent,
                size: 'small',
                status: percent >= 100 ? 'success' : 'active',
                showInfo: true
            }));
        }
        return messageApi?.open({
            type: 'loading',
            content: node,
            key,
            duration: 0
        });
    },
    updateSuccess: (content, key = 'global')=>messageApi?.open({
            type: 'success',
            content,
            key,
            duration: 2
        }),
    updateError: (content, key = 'global')=>messageApi?.open({
            type: 'error',
            content,
            key,
            duration: 2
        }),
    destroy: (key)=>messageApi?.destroy(key),
    simulateProgress: (key = 'upload-progress', prefix = 'Đang xử lý', maxPercent = 85, ms = 400)=>{
        let percent = 0;
        msg.loading(prefix, key, 0);
        const interval = setInterval(()=>{
            if (percent < maxPercent) {
                percent += Math.floor(Math.random() * 15) + 5;
                if (percent > maxPercent) percent = maxPercent;
                msg.loading(prefix, key, percent);
            }
        }, ms);
        return ()=>clearInterval(interval);
    }
};
let notificationApi;
const setNotificationApi = (api)=>{
    notificationApi = api;
};
const notify = {
    success: (message, options)=>notificationApi?.success({
            title: message,
            ...options,
            placement: 'topRight',
            duration: 2
        }),
    error: (message, options)=>notificationApi?.error({
            title: message,
            duration: 2,
            ...options,
            placement: 'topRight'
        }),
    info: (message, options)=>notificationApi?.info({
            title: message,
            ...options,
            placement: 'topRight',
            duration: 2
        }),
    warning: (message, options)=>notificationApi?.warning({
            title: message,
            ...options,
            placement: 'topRight',
            duration: 2
        }),
    open: (args)=>notificationApi?.open({
            ...args,
            placement: 'topRight',
            duration: 2
        }),
    destroy: (key)=>notificationApi?.destroy(key),
    loading: (message, key = 'global', percent)=>{
        let node = undefined;
        if (percent !== undefined) {
            node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '220px',
                    marginTop: '8px'
                }
            }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$progress$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Progress$3e$__["Progress"], {
                percent,
                size: 'small',
                status: percent >= 100 ? 'success' : 'active',
                showInfo: true
            }));
        }
        return notificationApi?.open({
            key,
            message: message,
            description: node,
            icon: percent !== undefined && percent >= 100 ? undefined : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingOutlined$3e$__["LoadingOutlined"], {
                style: {
                    color: 'var(--color-primary)'
                }
            }),
            duration: 0,
            placement: 'topRight'
        });
    },
    simulateProgress: (key = 'upload-progress', prefix = 'Đang xử lý', maxPercent = 85, ms = 400)=>{
        let percent = 0;
        notify.loading(prefix, key, 0);
        const interval = setInterval(()=>{
            if (percent < maxPercent) {
                percent += Math.floor(Math.random() * 15) + 5;
                if (percent > maxPercent) percent = maxPercent;
                notify.loading(prefix, key, percent);
            }
        }, ms);
        return ()=>clearInterval(interval);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/message/index.js [app-client] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/notification/index.js [app-client] (ecmascript) <export default as notification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
/**
 * Notification – Provider khởi tạo antd message / notification / modal API.
 * Phải được mount một lần duy nhất trong App root (trước ConfigProvider).
 *
 * @example
 * // Trong App.tsx hoặc main layout:
 * <Notification />
 *
 * // Dùng ở bất kỳ đâu:
 * import { notify } from '@/utils/notify';
 * notify.success('Lưu thành công!');
 */ const Notification = ()=>{
    _s();
    const [messageApiInstance, messageHolder] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].useMessage();
    const [notificationApiInstance, notificationHolder] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__["notification"].useNotification();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMessageApi"])(messageApiInstance);
        }
    }["Notification.useEffect"], [
        messageApiInstance
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNotificationApi"])(notificationApiInstance);
        }
    }["Notification.useEffect"], [
        notificationApiInstance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            messageHolder,
            notificationHolder
        ]
    }, void 0, true);
};
_s(Notification, "ljCvzHdswnxAA1PVRnpb1zOKNYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].useMessage,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__["notification"].useNotification
    ];
});
_c = Notification;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(Notification);
var _c, _c1;
__turbopack_context__.k.register(_c, "Notification");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "antdTheme",
    ()=>antdTheme,
    "darkTheme",
    ()=>darkTheme,
    "lightTheme",
    ()=>lightTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript) <export default as theme>");
;
const BRAND_COLOR = '#5b5bf6';
const lightTheme = {
    algorithm: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].defaultAlgorithm,
    token: {
        colorPrimary: BRAND_COLOR,
        colorBgBase: '#ffffff',
        colorBgContainer: '#ffffff',
        colorBgLayout: '#f4f5fb',
        colorBorder: '#e2e4ed',
        colorBorderSecondary: '#eceef5',
        borderRadius: 8,
        fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif'
    }
};
const darkTheme = {
    algorithm: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].darkAlgorithm,
    token: {
        colorPrimary: BRAND_COLOR,
        colorBgBase: '#18181c',
        colorBgContainer: '#1f1f24',
        colorBgElevated: '#282830',
        colorBgLayout: '#121215',
        colorBorder: '#2e2e38',
        colorBorderSecondary: '#262630',
        borderRadius: 8,
        fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif'
    }
};
const antdTheme = lightTheme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/store/useThemeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeStore",
    ()=>useThemeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useThemeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        isDarkMode: false,
        toggleTheme: ()=>set((state)=>({
                    isDarkMode: !state.isDarkMode
                })),
        setDarkMode: (isDark)=>set({
                isDarkMode: isDark
            })
    }), {
    name: 'halo_chat_theme_mode'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals> <export default as ConfigProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$locale$2f$vi_VN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/locale/vi_VN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useThemeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Providers({ children }) {
    _s();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])({
        "Providers.useThemeStore[isDarkMode]": (s)=>s.isDarkMode
    }["Providers.useThemeStore[isDarkMode]"]);
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        retry: 1,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["Providers.useState"]);
    const themeConfig = isDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkTheme"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightTheme"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__["ConfigProvider"], {
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$locale$2f$vi_VN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        theme: themeConfig,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
                client: queryClient,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/providers.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/providers.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/providers.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/providers.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Providers, "sc83IZABck+hMOL2YtiE6cbImS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"]
    ];
});
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_0xtj5k8._.js.map