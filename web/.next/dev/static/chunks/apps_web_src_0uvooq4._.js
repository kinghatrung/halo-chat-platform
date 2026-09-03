(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/lib/socket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSocket",
    ()=>getSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
const SOCKET_URL = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SOCKET_URL || undefined;
let socket = null;
const getSocket = ()=>{
    if (!socket) {
        socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SOCKET_URL, {
            withCredentials: true,
            autoConnect: false
        });
    }
    return socket;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosClient = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api',
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Request interceptor
axiosClient.interceptors.request.use(async (config)=>{
    return config;
}, (error)=>Promise.reject(error));
// Response interceptor
axiosClient.interceptors.response.use((response)=>{
    return response.data;
}, async (error)=>{
    const originalRequest = error.config;
    const isAuthRoute = originalRequest?.url?.includes('/auth/refresh') || originalRequest?.url?.includes('/auth/login');
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthRoute) {
        originalRequest._retry = true;
        try {
            await axiosClient.post('/auth/refresh');
            return axiosClient(originalRequest);
        } catch (refreshError) {
            const isPublicPage = ("TURBOPACK compile-time value", "object") !== 'undefined' && (window.location.pathname === '/signin' || window.location.pathname === '/signup');
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && !isPublicPage) {
                window.location.href = '/signin';
            }
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/auth.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const authService = {
    login: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/login', payload);
    },
    register: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/register', payload);
    },
    logout: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/logout');
    },
    logoutAll: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/logout-all');
    },
    refresh: async (refreshToken)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/refresh', {
            refreshToken
        });
    },
    getMe: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/auth/me');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetMe",
    ()=>useGetMe,
    "useLogin",
    ()=>useLogin,
    "useLogout",
    ()=>useLogout,
    "useLogoutAll",
    ()=>useLogoutAll,
    "useRefresh",
    ()=>useRefresh,
    "useRegister",
    ()=>useRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/auth.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
function useLogin() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogin.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].login(payload)
        }["useLogin.useMutation"]
    });
}
_s(useLogin, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRegister() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRegister.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].register(payload)
        }["useRegister.useMutation"]
    });
}
_s1(useRegister, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLogout() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogout.useMutation": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logout()
        }["useLogout.useMutation"],
        onSuccess: {
            "useLogout.useMutation": ()=>{
                queryClient.clear();
            }
        }["useLogout.useMutation"]
    });
}
_s2(useLogout, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLogoutAll() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogoutAll.useMutation": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logoutAll()
        }["useLogoutAll.useMutation"],
        onSuccess: {
            "useLogoutAll.useMutation": ()=>{
                queryClient.clear();
            }
        }["useLogoutAll.useMutation"]
    });
}
_s3(useLogoutAll, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRefresh() {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRefresh.useMutation": (refreshToken)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].refresh(refreshToken)
        }["useRefresh.useMutation"]
    });
}
_s4(useRefresh, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useGetMe() {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'me'
        ],
        queryFn: {
            "useGetMe.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].getMe()
        }["useGetMe.useQuery"]
    });
}
_s5(useGetMe, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvePresence",
    ()=>resolvePresence,
    "useChatStore",
    ()=>useChatStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useChatStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        selectedConversationId: null,
        searchQuery: '',
        onlineStatusOverrides: {},
        typingByConversation: {},
        setSelectedConversationId: (id)=>set({
                selectedConversationId: id
            }),
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        setUserOnline: (userId)=>set((state)=>({
                    onlineStatusOverrides: {
                        ...state.onlineStatusOverrides,
                        [userId]: 'online'
                    }
                })),
        setUserOffline: (userId)=>set((state)=>({
                    onlineStatusOverrides: {
                        ...state.onlineStatusOverrides,
                        [userId]: 'offline'
                    }
                })),
        setUserTyping: (conversationId, userId)=>set((state)=>({
                    typingByConversation: {
                        ...state.typingByConversation,
                        [conversationId]: {
                            ...state.typingByConversation[conversationId],
                            [userId]: true
                        }
                    }
                })),
        setUserStoppedTyping: (conversationId, userId)=>set((state)=>{
                const next = {
                    ...state.typingByConversation[conversationId] || {}
                };
                delete next[userId];
                return {
                    typingByConversation: {
                        ...state.typingByConversation,
                        [conversationId]: next
                    }
                };
            })
    }), {
    name: 'hudu-chat-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>sessionStorage),
    partialize: (state)=>({
            selectedConversationId: state.selectedConversationId
        })
}));
const resolvePresence = (overrides, userId, fallback)=>userId ? overrides[userId] ?? fallback : fallback;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/SocketProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocketProvider",
    ()=>SocketProvider,
    "useSocketContext",
    ()=>useSocketContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSocketContext() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SocketContext);
    if (!ctx) {
        throw new Error('useSocketContext phải được dùng bên trong SocketProvider');
    }
    return ctx;
}
_s(useSocketContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function SocketProvider({ children }) {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: meData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"])();
    const currentUserId = meData?.data?._id;
    const setUserOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "SocketProvider.useChatStore[setUserOnline]": (s)=>s.setUserOnline
    }["SocketProvider.useChatStore[setUserOnline]"]);
    const setUserOffline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "SocketProvider.useChatStore[setUserOffline]": (s)=>s.setUserOffline
    }["SocketProvider.useChatStore[setUserOffline]"]);
    const setUserTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "SocketProvider.useChatStore[setUserTyping]": (s)=>s.setUserTyping
    }["SocketProvider.useChatStore[setUserTyping]"]);
    const setUserStoppedTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "SocketProvider.useChatStore[setUserStoppedTyping]": (s)=>s.setUserStoppedTyping
    }["SocketProvider.useChatStore[setUserStoppedTyping]"]);
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedConversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "SocketProvider.useChatStore[selectedConversationId]": (s)=>s.selectedConversationId
    }["SocketProvider.useChatStore[selectedConversationId]"]);
    const selectedConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedConversationId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocketProvider.useEffect": ()=>{
            selectedConversationIdRef.current = selectedConversationId;
        }
    }["SocketProvider.useEffect"], [
        selectedConversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocketProvider.useEffect": ()=>{
            if (!currentUserId) return;
            socket.connect();
            const onConnect = {
                "SocketProvider.useEffect.onConnect": ()=>setConnected(true)
            }["SocketProvider.useEffect.onConnect"];
            const onDisconnect = {
                "SocketProvider.useEffect.onDisconnect": ()=>setConnected(false)
            }["SocketProvider.useEffect.onDisconnect"];
            const onConnectError = {
                "SocketProvider.useEffect.onConnectError": (err)=>{
                    console.error('Socket connect_error:', err.message);
                }
            }["SocketProvider.useEffect.onConnectError"];
            const patchMessagesCache = {
                "SocketProvider.useEffect.patchMessagesCache": (conversationId, updater)=>{
                    queryClient.setQueriesData({
                        queryKey: [
                            'messages',
                            conversationId
                        ],
                        exact: false
                    }, {
                        "SocketProvider.useEffect.patchMessagesCache": (old)=>old ? {
                                ...old,
                                data: updater(old.data)
                            } : old
                    }["SocketProvider.useEffect.patchMessagesCache"]);
                }
            }["SocketProvider.useEffect.patchMessagesCache"];
            const patchConversationsCache = {
                "SocketProvider.useEffect.patchConversationsCache": (message)=>{
                    let matched = false;
                    const isOwnMessage = message.senderId._id === currentUserId;
                    const isViewingConversation = selectedConversationIdRef.current === message.conversationId;
                    queryClient.setQueriesData({
                        queryKey: [
                            'conversations'
                        ],
                        exact: false
                    }, {
                        "SocketProvider.useEffect.patchConversationsCache": (old)=>{
                            if (!old || !Array.isArray(old.data?.items)) return old;
                            const items = old.data.items;
                            const idx = items.findIndex({
                                "SocketProvider.useEffect.patchConversationsCache.idx": (c)=>c._id === message.conversationId
                            }["SocketProvider.useEffect.patchConversationsCache.idx"]);
                            if (idx === -1) return old;
                            matched = true;
                            const updatedConversation = {
                                ...items[idx],
                                lastMessageId: message._id,
                                lastMessageAt: message.createdAt,
                                lastMessage: {
                                    _id: message._id,
                                    content: message.content,
                                    type: message.type,
                                    senderId: {
                                        _id: message.senderId._id,
                                        username: message.senderId.username
                                    },
                                    isDeleted: message.isDeleted,
                                    createdAt: message.createdAt
                                },
                                unreadCount: !isOwnMessage && !isViewingConversation ? (items[idx].unreadCount || 0) + 1 : items[idx].unreadCount
                            };
                            const rest = items.filter({
                                "SocketProvider.useEffect.patchConversationsCache.rest": (_, i)=>i !== idx
                            }["SocketProvider.useEffect.patchConversationsCache.rest"]);
                            return {
                                ...old,
                                data: {
                                    ...old.data,
                                    items: [
                                        updatedConversation,
                                        ...rest
                                    ]
                                }
                            };
                        }
                    }["SocketProvider.useEffect.patchConversationsCache"]);
                    return matched;
                }
            }["SocketProvider.useEffect.patchConversationsCache"];
            const onMessageCreated = {
                "SocketProvider.useEffect.onMessageCreated": ({ message, tempId })=>{
                    patchMessagesCache(message.conversationId, {
                        "SocketProvider.useEffect.onMessageCreated": (result)=>{
                            const withoutTemp = tempId ? result.items.filter({
                                "SocketProvider.useEffect.onMessageCreated": (m)=>m.tempId !== tempId
                            }["SocketProvider.useEffect.onMessageCreated"]) : result.items;
                            if (withoutTemp.some({
                                "SocketProvider.useEffect.onMessageCreated": (m)=>m._id === message._id
                            }["SocketProvider.useEffect.onMessageCreated"])) return result;
                            return {
                                ...result,
                                items: [
                                    ...withoutTemp,
                                    message
                                ]
                            };
                        }
                    }["SocketProvider.useEffect.onMessageCreated"]);
                    const matched = patchConversationsCache(message);
                    if (!matched) {
                        queryClient.invalidateQueries({
                            queryKey: [
                                'conversations'
                            ]
                        });
                    }
                }
            }["SocketProvider.useEffect.onMessageCreated"];
            const onMessageUpdated = {
                "SocketProvider.useEffect.onMessageUpdated": ({ message })=>{
                    patchMessagesCache(message.conversationId, {
                        "SocketProvider.useEffect.onMessageUpdated": (result)=>({
                                ...result,
                                items: result.items.map({
                                    "SocketProvider.useEffect.onMessageUpdated": (m)=>m._id === message._id ? message : m
                                }["SocketProvider.useEffect.onMessageUpdated"])
                            })
                    }["SocketProvider.useEffect.onMessageUpdated"]);
                }
            }["SocketProvider.useEffect.onMessageUpdated"];
            const onMessageDeleted = {
                "SocketProvider.useEffect.onMessageDeleted": ({ messageId, conversationId })=>{
                    patchMessagesCache(conversationId, {
                        "SocketProvider.useEffect.onMessageDeleted": (result)=>({
                                ...result,
                                items: result.items.map({
                                    "SocketProvider.useEffect.onMessageDeleted": (m)=>m._id === messageId ? {
                                            ...m,
                                            isDeleted: true,
                                            content: ''
                                        } : m
                                }["SocketProvider.useEffect.onMessageDeleted"])
                            })
                    }["SocketProvider.useEffect.onMessageDeleted"]);
                }
            }["SocketProvider.useEffect.onMessageDeleted"];
            const onPresenceOnline = {
                "SocketProvider.useEffect.onPresenceOnline": ({ userId })=>setUserOnline(userId)
            }["SocketProvider.useEffect.onPresenceOnline"];
            const onPresenceOffline = {
                "SocketProvider.useEffect.onPresenceOffline": ({ userId })=>setUserOffline(userId)
            }["SocketProvider.useEffect.onPresenceOffline"];
            const onTypingStart = {
                "SocketProvider.useEffect.onTypingStart": ({ conversationId, userId })=>setUserTyping(conversationId, userId)
            }["SocketProvider.useEffect.onTypingStart"];
            const onTypingStop = {
                "SocketProvider.useEffect.onTypingStop": ({ conversationId, userId })=>setUserStoppedTyping(conversationId, userId)
            }["SocketProvider.useEffect.onTypingStop"];
            const onMessageRead = {
                "SocketProvider.useEffect.onMessageRead": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'conversations'
                        ]
                    });
                }
            }["SocketProvider.useEffect.onMessageRead"];
            const onFriendRequestChanged = {
                "SocketProvider.useEffect.onFriendRequestChanged": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'friends'
                        ]
                    });
                    queryClient.invalidateQueries({
                        queryKey: [
                            'friendRequests'
                        ]
                    });
                }
            }["SocketProvider.useEffect.onFriendRequestChanged"];
            const onNotificationNew = {
                "SocketProvider.useEffect.onNotificationNew": ({ notification })=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'notifications'
                        ]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].info(notification.content);
                }
            }["SocketProvider.useEffect.onNotificationNew"];
            const onStoryNew = {
                "SocketProvider.useEffect.onStoryNew": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'stories',
                            'feed'
                        ]
                    });
                }
            }["SocketProvider.useEffect.onStoryNew"];
            const onNotificationReadBulk = {
                "SocketProvider.useEffect.onNotificationReadBulk": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'notifications'
                        ]
                    });
                }
            }["SocketProvider.useEffect.onNotificationReadBulk"];
            const onBlockStatusChanged = {
                "SocketProvider.useEffect.onBlockStatusChanged": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'conversations'
                        ]
                    });
                    queryClient.invalidateQueries({
                        queryKey: [
                            'users',
                            'blocked'
                        ]
                    });
                }
            }["SocketProvider.useEffect.onBlockStatusChanged"];
            socket.on('connect', onConnect);
            socket.on('disconnect', onDisconnect);
            socket.on('connect_error', onConnectError);
            socket.on('message:created', onMessageCreated);
            socket.on('message:updated', onMessageUpdated);
            socket.on('message:deleted', onMessageDeleted);
            socket.on('presence:online', onPresenceOnline);
            socket.on('presence:offline', onPresenceOffline);
            socket.on('typing:start', onTypingStart);
            socket.on('typing:stop', onTypingStop);
            socket.on('message:read', onMessageRead);
            socket.on('friend_request:new', onFriendRequestChanged);
            socket.on('friend_request:accepted', onFriendRequestChanged);
            socket.on('friend_request:removed', onFriendRequestChanged);
            socket.on('notification:new', onNotificationNew);
            socket.on('story:new', onStoryNew);
            socket.on('user:blocked', onBlockStatusChanged);
            socket.on('user:unblocked', onBlockStatusChanged);
            socket.on('notification:read-bulk', onNotificationReadBulk);
            return ({
                "SocketProvider.useEffect": ()=>{
                    socket.off('connect', onConnect);
                    socket.off('disconnect', onDisconnect);
                    socket.off('connect_error', onConnectError);
                    socket.off('message:created', onMessageCreated);
                    socket.off('message:updated', onMessageUpdated);
                    socket.off('message:deleted', onMessageDeleted);
                    socket.off('presence:online', onPresenceOnline);
                    socket.off('presence:offline', onPresenceOffline);
                    socket.off('typing:start', onTypingStart);
                    socket.off('typing:stop', onTypingStop);
                    socket.off('message:read', onMessageRead);
                    socket.off('friend_request:new', onFriendRequestChanged);
                    socket.off('friend_request:accepted', onFriendRequestChanged);
                    socket.off('friend_request:removed', onFriendRequestChanged);
                    socket.off('notification:new', onNotificationNew);
                    socket.off('story:new', onStoryNew);
                    socket.off('user:blocked', onBlockStatusChanged);
                    socket.off('user:unblocked', onBlockStatusChanged);
                    socket.off('notification:read-bulk', onNotificationReadBulk);
                    socket.disconnect();
                }
            })["SocketProvider.useEffect"];
        }
    }["SocketProvider.useEffect"], [
        currentUserId,
        queryClient,
        socket,
        setUserOnline,
        setUserOffline,
        setUserTyping,
        setUserStoppedTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocketProvider.useEffect": ()=>{
            if (!connected || !selectedConversationId) return;
            socket.emit('conversation:join', {
                conversationId: selectedConversationId
            });
            return ({
                "SocketProvider.useEffect": ()=>{
                    socket.emit('conversation:leave', {
                        conversationId: selectedConversationId
                    });
                }
            })["SocketProvider.useEffect"];
        }
    }["SocketProvider.useEffect"], [
        connected,
        selectedConversationId,
        socket
    ]);
    const value = {
        socket,
        connected,
        sendMessage: (conversationId, payload)=>new Promise((resolve)=>{
                socket.emit('message:send', {
                    conversationId,
                    ...payload
                }, (res)=>{
                    resolve(res);
                });
            }),
        startTyping: (conversationId)=>socket.emit('typing:start', {
                conversationId
            }),
        stopTyping: (conversationId)=>socket.emit('typing:stop', {
                conversationId
            }),
        markRead: (conversationId, lastReadMessageId)=>{
            queryClient.setQueriesData({
                queryKey: [
                    'conversations'
                ],
                exact: false
            }, (old)=>{
                if (!old || !Array.isArray(old.data?.items)) return old;
                const idx = old.data.items.findIndex((c)=>c._id === conversationId);
                if (idx === -1 || !old.data.items[idx].unreadCount) return old;
                const items = old.data.items.slice();
                items[idx] = {
                    ...items[idx],
                    unreadCount: 0
                };
                return {
                    ...old,
                    data: {
                        ...old.data,
                        items
                    }
                };
            });
            socket.emit('message:read', {
                conversationId,
                lastReadMessageId
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocketContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/providers/SocketProvider.tsx",
        lineNumber: 280,
        columnNumber: 10
    }, this);
}
_s1(SocketProvider, "g2pM8+KB09qjoMp2xJyRAxBvK9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"]
    ];
});
_c = SocketProvider;
var _c;
__turbopack_context__.k.register(_c, "SocketProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallStore",
    ()=>useCallStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const initialState = {
    phase: 'idle',
    call: null,
    token: null,
    serverUrl: null,
    error: null
};
const useCallStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        ...initialState,
        setOutgoing: (call, token = null, serverUrl = null)=>set({
                phase: 'outgoing',
                call,
                token,
                serverUrl,
                error: null
            }),
        setIncoming: (call)=>set({
                phase: 'incoming',
                call,
                token: null,
                serverUrl: null,
                error: null
            }),
        setConnecting: ()=>set({
                phase: 'connecting',
                error: null
            }),
        setInCall: (call, token, serverUrl)=>set({
                phase: 'in-call',
                call,
                token,
                serverUrl,
                error: null
            }),
        patchCall: (call)=>{
            const current = get().call;
            if (!current || current._id !== call._id) return;
            set({
                call
            });
        },
        setError: (message)=>set({
                error: message
            }),
        reset: ()=>set({
                ...initialState
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorForId",
    ()=>colorForId,
    "initialOf",
    ()=>initialOf
]);
const PALETTE = [
    '#5b5bf6',
    '#8c5bf6',
    '#f65ba3',
    '#f6a05b',
    '#3ab795',
    '#3a8ef6'
];
function colorForId(id) {
    let hash = 0;
    for(let i = 0; i < id.length; i++){
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return PALETTE[Math.abs(hash) % PALETTE.length];
}
function initialOf(name) {
    return name?.trim()?.[0]?.toUpperCase() || '?';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncomingCallModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PhoneOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PhoneOutlined.js [app-client] (ecmascript) <export default as PhoneOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$VideoCameraOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js [app-client] (ecmascript) <export default as VideoCameraOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/CallProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function IncomingCallModal() {
    _s();
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "IncomingCallModal.useCallStore[call]": (s)=>s.call
    }["IncomingCallModal.useCallStore[call]"]);
    const { acceptCall, declineCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    const [accepting, setAccepting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!call) return null;
    const caller = call.initiatorId;
    const isVideo = call.type === 'video';
    const handleAccept = async ()=>{
        setAccepting(true);
        await acceptCall();
        setAccepting(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: true,
        closable: false,
        maskClosable: false,
        footer: null,
        centered: true,
        width: 340,
        onCancel: declineCall,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                padding: '12px 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                    size: 88,
                    src: caller.avatar || undefined,
                    style: {
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(caller._id)
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(caller.username)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                            level: 4,
                            style: {
                                margin: 0
                            },
                            children: caller.username
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            type: "secondary",
                            children: isVideo ? 'Cuộc gọi video đến...' : 'Cuộc gọi thoại đến...'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 24,
                        marginTop: 8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            shape: "circle",
                            size: "large",
                            danger: true,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                                lineNumber: 67,
                                columnNumber: 19
                            }, this),
                            onClick: declineCall,
                            disabled: accepting
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            shape: "circle",
                            size: "large",
                            type: "primary",
                            style: {
                                backgroundColor: '#52c41a',
                                borderColor: '#52c41a'
                            },
                            icon: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$VideoCameraOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraOutlined$3e$__["VideoCameraOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PhoneOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutlined$3e$__["PhoneOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                                lineNumber: 76,
                                columnNumber: 55
                            }, this),
                            loading: accepting,
                            onClick: handleAccept
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(IncomingCallModal, "F5MT+n0saHk88TzfDV0vAGU1cQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"]
    ];
});
_c = IncomingCallModal;
var _c;
__turbopack_context__.k.register(_c, "IncomingCallModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OutgoingCallOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/CallProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function OutgoingCallOverlay() {
    _s();
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "OutgoingCallOverlay.useCallStore[call]": (s)=>s.call
    }["OutgoingCallOverlay.useCallStore[call]"]);
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "OutgoingCallOverlay.useCallStore[phase]": (s)=>s.phase
    }["OutgoingCallOverlay.useCallStore[phase]"]);
    const { cancelCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    const { data: meData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"])();
    const currentUserId = meData?.data?._id;
    if (!call) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: overlayStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                size: "large"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    const isVideo = call.type === 'video';
    const otherParticipants = call.participants.filter((p)=>p.userId._id !== currentUserId);
    const callee = otherParticipants[0]?.userId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: overlayStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                    size: 96,
                    src: callee?.avatar || undefined,
                    style: {
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(callee?._id || call._id)
                    },
                    children: callee ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(callee.username) : undefined
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                            level: 4,
                            style: {
                                margin: 0,
                                color: '#fff'
                            },
                            children: otherParticipants.length > 1 ? 'Cuộc gọi nhóm' : callee?.username || 'Đang kết nối...'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                color: 'rgba(255,255,255,0.65)'
                            },
                            children: phase === 'connecting' ? 'Đang kết nối...' : isVideo ? 'Đang gọi video...' : 'Đang đổ chuông...'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    shape: "circle",
                    size: "large",
                    danger: true,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                        lineNumber: 54,
                        columnNumber: 58
                    }, this),
                    onClick: cancelCall
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(OutgoingCallOverlay, "FsX1eKHwUi7j7BOf2d3Nf9K8BRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"]
    ];
});
_c = OutgoingCallOverlay;
const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(10, 12, 20, 0.92)'
};
var _c;
__turbopack_context__.k.register(_c, "OutgoingCallOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/InCallView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InCallView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Bfb4OWAI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__LiveKitRoom$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@livekit/components-react/dist/room-Bfb4OWAI.mjs [app-client] (ecmascript) <export t as LiveKitRoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$prefabs$2d$BEB1UEnC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__VideoConference$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@livekit/components-react/dist/prefabs-BEB1UEnC.mjs [app-client] (ecmascript) <export r as VideoConference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/CallProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function InCallView() {
    _s();
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "InCallView.useCallStore[call]": (s)=>s.call
    }["InCallView.useCallStore[call]"]);
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "InCallView.useCallStore[token]": (s)=>s.token
    }["InCallView.useCallStore[token]"]);
    const serverUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "InCallView.useCallStore[serverUrl]": (s)=>s.serverUrl
    }["InCallView.useCallStore[serverUrl]"]);
    const { leaveCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    if (!call || !token || !serverUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-lk-theme": "default",
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: '#000'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Bfb4OWAI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__LiveKitRoom$3e$__["LiveKitRoom"], {
            token: token,
            serverUrl: serverUrl,
            connect: true,
            video: call.type === 'video',
            audio: true,
            style: {
                height: '100%'
            },
            onDisconnected: leaveCall,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$prefabs$2d$BEB1UEnC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__VideoConference$3e$__["VideoConference"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/InCallView.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/InCallView.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/InCallView.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(InCallView, "vjLGgjcyjDFkTBPLkGT/bAt0ehg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"]
    ];
});
_c = InCallView;
var _c;
__turbopack_context__.k.register(_c, "InCallView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/CallProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallProvider",
    ()=>CallProvider,
    "useCallContext",
    ()=>useCallContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/SocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/IncomingCallModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$OutgoingCallOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/OutgoingCallOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$InCallView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/InCallView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const CallContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useCallContext() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CallContext);
    if (!ctx) {
        throw new Error('useCallContext phải được dùng bên trong CallProvider');
    }
    return ctx;
}
_s(useCallContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function CallProvider({ children }) {
    _s1();
    const { socket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: meData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"])();
    const currentUserId = meData?.data?._id;
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[phase]": (s)=>s.phase
    }["CallProvider.useCallStore[phase]"]);
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[call]": (s)=>s.call
    }["CallProvider.useCallStore[call]"]);
    const setOutgoing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[setOutgoing]": (s)=>s.setOutgoing
    }["CallProvider.useCallStore[setOutgoing]"]);
    const setIncoming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[setIncoming]": (s)=>s.setIncoming
    }["CallProvider.useCallStore[setIncoming]"]);
    const setConnecting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[setConnecting]": (s)=>s.setConnecting
    }["CallProvider.useCallStore[setConnecting]"]);
    const setInCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[setInCall]": (s)=>s.setInCall
    }["CallProvider.useCallStore[setInCall]"]);
    const patchCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[patchCall]": (s)=>s.patchCall
    }["CallProvider.useCallStore[patchCall]"]);
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[setError]": (s)=>s.setError
    }["CallProvider.useCallStore[setError]"]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "CallProvider.useCallStore[reset]": (s)=>s.reset
    }["CallProvider.useCallStore[reset]"]);
    // Play ringtone audio on incoming / outgoing call phases using Web Audio API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            if (phase !== 'incoming' && phase !== 'outgoing' && phase !== 'connecting') {
                return;
            }
            let audioCtx = null;
            let timerId = null;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioContextClass) return;
                audioCtx = new AudioContextClass();
                const playTonePattern = {
                    "CallProvider.useEffect.playTonePattern": ()=>{
                        if (!audioCtx || audioCtx.state === 'closed') return;
                        if (audioCtx.state === 'suspended') {
                            audioCtx.resume().catch({
                                "CallProvider.useEffect.playTonePattern": ()=>{}
                            }["CallProvider.useEffect.playTonePattern"]);
                        }
                        const now = audioCtx.currentTime;
                        const isIncoming = phase === 'incoming';
                        if (isIncoming) {
                            // Melodic Messenger/Marimba Style Arpeggio (Notes: E5, G#5, B5, E6)
                            const notes = [
                                659.25,
                                830.61,
                                987.77,
                                1318.51
                            ];
                            notes.forEach({
                                "CallProvider.useEffect.playTonePattern": (freq, index)=>{
                                    if (!audioCtx || audioCtx.state === 'closed') return;
                                    const startTime = now + index * 0.12;
                                    const osc = audioCtx.createOscillator();
                                    const gain = audioCtx.createGain();
                                    osc.type = 'triangle'; // Warm, marimba/bell tone
                                    osc.frequency.setValueAtTime(freq, startTime);
                                    gain.gain.setValueAtTime(0.001, startTime);
                                    gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.02);
                                    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
                                    osc.connect(gain);
                                    gain.connect(audioCtx.destination);
                                    osc.start(startTime);
                                    osc.stop(startTime + 0.35);
                                }
                            }["CallProvider.useEffect.playTonePattern"]);
                        } else {
                            // Soft Outgoing Ringing Pulse (Soft 440Hz / 880Hz harmonic tone)
                            const osc1 = audioCtx.createOscillator();
                            const osc2 = audioCtx.createOscillator();
                            const gain = audioCtx.createGain();
                            osc1.type = 'sine';
                            osc2.type = 'sine';
                            osc1.frequency.setValueAtTime(440, now);
                            osc2.frequency.setValueAtTime(880, now);
                            gain.gain.setValueAtTime(0.001, now);
                            gain.gain.exponentialRampToValueAtTime(0.08, now + 0.05);
                            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
                            osc1.connect(gain);
                            osc2.connect(gain);
                            gain.connect(audioCtx.destination);
                            osc1.start(now);
                            osc2.start(now);
                            osc1.stop(now + 1.0);
                            osc2.stop(now + 1.0);
                        }
                    }
                }["CallProvider.useEffect.playTonePattern"];
                playTonePattern();
                timerId = setInterval(playTonePattern, phase === 'incoming' ? 1800 : 3000);
            } catch (e) {
                console.warn('Could not play ringtone audio:', e);
            }
            return ({
                "CallProvider.useEffect": ()=>{
                    if (timerId) clearInterval(timerId);
                    if (audioCtx && audioCtx.state !== 'closed') {
                        audioCtx.close().catch({
                            "CallProvider.useEffect": ()=>{}
                        }["CallProvider.useEffect"]);
                    }
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], [
        phase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            const onIncoming = {
                "CallProvider.useEffect.onIncoming": ({ call })=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"].getState().phase !== 'idle') return;
                    setIncoming(call);
                }
            }["CallProvider.useEffect.onIncoming"];
            const onOutgoing = {
                "CallProvider.useEffect.onOutgoing": ({ call })=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"].getState().phase === 'idle') {
                        setOutgoing(call);
                    }
                }
            }["CallProvider.useEffect.onOutgoing"];
            const onAccepted = {
                "CallProvider.useEffect.onAccepted": ({ call })=>{
                    const state = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"].getState();
                    if (!state.call || state.call._id !== call._id) return;
                    // The caller (or any tab already holding a token) transitions into the
                    // room as soon as someone else accepts -- they never went through their
                    // own call:accept/call:join ack, so nothing else moves them forward.
                    if (state.phase !== 'in-call' && state.token && state.serverUrl) {
                        setInCall(call, state.token, state.serverUrl);
                    } else {
                        patchCall(call);
                    }
                }
            }["CallProvider.useEffect.onAccepted"];
            const onDeclined = {
                "CallProvider.useEffect.onDeclined": ({ call })=>patchCall(call)
            }["CallProvider.useEffect.onDeclined"];
            const onEnded = {
                "CallProvider.useEffect.onEnded": ({ conversationId })=>{
                    queryClient.invalidateQueries({
                        queryKey: [
                            'calls',
                            'active',
                            conversationId
                        ]
                    });
                    reset();
                }
            }["CallProvider.useEffect.onEnded"];
            const onCallError = {
                "CallProvider.useEffect.onCallError": ({ message })=>{
                    setError(message);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(message);
                }
            }["CallProvider.useEffect.onCallError"];
            socket.on('call:incoming', onIncoming);
            socket.on('call:outgoing', onOutgoing);
            socket.on('call:accepted', onAccepted);
            socket.on('call:declined', onDeclined);
            socket.on('call:ended', onEnded);
            socket.on('call:error', onCallError);
            return ({
                "CallProvider.useEffect": ()=>{
                    socket.off('call:incoming', onIncoming);
                    socket.off('call:outgoing', onOutgoing);
                    socket.off('call:accepted', onAccepted);
                    socket.off('call:declined', onDeclined);
                    socket.off('call:ended', onEnded);
                    socket.off('call:error', onCallError);
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], [
        socket,
        queryClient,
        setIncoming,
        setOutgoing,
        setInCall,
        patchCall,
        reset,
        setError
    ]);
    const emitWithAck = (event, payload)=>new Promise((resolve)=>{
            socket.emit(event, payload, (res)=>resolve(res));
        });
    const startCall = async (conversationId, type)=>{
        setConnecting();
        const res = await emitWithAck('call:invite', {
            conversationId,
            type
        });
        if (!res.success || !res.data) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(res.error || 'Không thể thực hiện cuộc gọi!');
            reset();
            return;
        }
        const { call: resultCall, token, serverUrl } = res.data;
        const selfParticipant = resultCall.participants.find((p)=>p.userId._id === currentUserId);
        if (resultCall.status === 'ongoing' && selfParticipant?.status === 'accepted') {
            setInCall(resultCall, token, serverUrl);
        } else {
            setOutgoing(resultCall, token, serverUrl);
        }
    };
    const acceptCall = async ()=>{
        if (!call) return;
        const res = await emitWithAck('call:accept', {
            callId: call._id
        });
        if (!res.success || !res.data) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(res.error || 'Không thể chấp nhận cuộc gọi!');
            reset();
            return;
        }
        setInCall(res.data.call, res.data.token, res.data.serverUrl);
    };
    const declineCall = ()=>{
        if (!call) return;
        socket.emit('call:decline', {
            callId: call._id
        });
        reset();
    };
    const cancelCall = ()=>{
        if (!call) return;
        socket.emit('call:cancel', {
            callId: call._id
        });
        reset();
    };
    const leaveCall = ()=>{
        if (!call) return;
        socket.emit('call:leave', {
            callId: call._id
        });
        reset();
    };
    const joinOngoingCall = async (conversationId)=>{
        const res = await emitWithAck('call:join', {
            conversationId
        });
        if (!res.success || !res.data) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(res.error || 'Không thể tham gia cuộc gọi!');
            reset();
            return;
        }
        setInCall(res.data.call, res.data.token, res.data.serverUrl);
    };
    const value = {
        startCall,
        acceptCall,
        declineCall,
        cancelCall,
        leaveCall,
        joinOngoingCall
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CallContext.Provider, {
        value: value,
        children: [
            children,
            phase === 'incoming' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/providers/CallProvider.tsx",
                lineNumber: 260,
                columnNumber: 32
            }, this),
            (phase === 'outgoing' || phase === 'connecting') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$OutgoingCallOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/providers/CallProvider.tsx",
                lineNumber: 261,
                columnNumber: 60
            }, this),
            phase === 'in-call' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$InCallView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/providers/CallProvider.tsx",
                lineNumber: 262,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/providers/CallProvider.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_s1(CallProvider, "uMX0cFggMxaCGTqyBt5XKfOqf8s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"]
    ];
});
_c = CallProvider;
var _c;
__turbopack_context__.k.register(_c, "CallProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_0uvooq4._.js.map