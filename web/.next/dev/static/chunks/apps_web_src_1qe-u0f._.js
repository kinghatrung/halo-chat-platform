(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/services/user.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userService",
    ()=>userService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const userService = {
    updateProfile: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/users/me', payload);
    },
    changePassword: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/auth/me/change-password', payload);
    },
    viewProfilePublic: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${idUser}`);
    },
    searchUsers: async (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/search', {
            params
        });
    },
    getListBlockUser: async (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/me/blocks', {
            params
        });
    },
    blockUser: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/users/${idUser}/block`);
    },
    unblockUser: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/${idUser}/block`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useUser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlockUser",
    ()=>useBlockUser,
    "useChangePassword",
    ()=>useChangePassword,
    "useGetListBlockUser",
    ()=>useGetListBlockUser,
    "useSearchUsers",
    ()=>useSearchUsers,
    "useUnBlockUser",
    ()=>useUnBlockUser,
    "useUpdateProfile",
    ()=>useUpdateProfile,
    "useViewProfilePublic",
    ()=>useViewProfilePublic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/user.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
;
function useUpdateProfile() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateProfile.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].updateProfile(payload)
        }["useUpdateProfile.useMutation"],
        onSuccess: {
            "useUpdateProfile.useMutation": ()=>{
                // Invalidate current user query since profile updated
                queryClient.invalidateQueries({
                    queryKey: [
                        'auth',
                        'me'
                    ]
                });
            }
        }["useUpdateProfile.useMutation"]
    });
}
_s(useUpdateProfile, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useChangePassword() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useChangePassword.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].changePassword(payload)
        }["useChangePassword.useMutation"]
    });
}
_s1(useChangePassword, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useViewProfilePublic(idUser) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'users',
            idUser
        ],
        queryFn: {
            "useViewProfilePublic.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].viewProfilePublic(idUser)
        }["useViewProfilePublic.useQuery"],
        enabled: !!idUser
    });
}
_s2(useViewProfilePublic, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSearchUsers(params) {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'users',
            'search',
            params
        ],
        queryFn: {
            "useSearchUsers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].searchUsers(params)
        }["useSearchUsers.useQuery"]
    });
}
_s3(useSearchUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetListBlockUser(params) {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'users',
            'blocked',
            params
        ],
        queryFn: {
            "useGetListBlockUser.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].getListBlockUser(params)
        }["useGetListBlockUser.useQuery"]
    });
}
_s4(useGetListBlockUser, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useBlockUser() {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBlockUser.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].blockUser(idUser)
        }["useBlockUser.useMutation"],
        onSuccess: {
            "useBlockUser.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'users',
                        'blocked'
                    ]
                });
            }
        }["useBlockUser.useMutation"]
    });
}
_s5(useBlockUser, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUnBlockUser() {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUnBlockUser.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].unblockUser(idUser)
        }["useUnBlockUser.useMutation"],
        onSuccess: {
            "useUnBlockUser.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'users',
                        'blocked'
                    ]
                });
            }
        }["useUnBlockUser.useMutation"]
    });
}
_s6(useUnBlockUser, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/friend.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "friendService",
    ()=>friendService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const friendService = {
    getFriends: async (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/friends/me', {
            params
        });
    },
    getIncomingRequests: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/friends/me/requests/incoming');
    },
    getOutgoingRequests: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/friends/me/requests/outgoing');
    },
    sendFriendRequest: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/friends/${idUser}/request`);
    },
    cancelFriendRequest: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/friends/${idUser}/request`);
    },
    acceptFriendRequest: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/friends/${idUser}/accept`);
    },
    unfriend: async (idUser)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/friends/${idUser}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAcceptFriendRequest",
    ()=>useAcceptFriendRequest,
    "useCancelFriendRequest",
    ()=>useCancelFriendRequest,
    "useFriends",
    ()=>useFriends,
    "useIncomingFriendRequests",
    ()=>useIncomingFriendRequests,
    "useOutgoingFriendRequests",
    ()=>useOutgoingFriendRequests,
    "useSendFriendRequest",
    ()=>useSendFriendRequest,
    "useUnfriend",
    ()=>useUnfriend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/friend.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
;
const invalidateFriendQueries = (queryClient)=>{
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
};
function useFriends(params) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'friends',
            params
        ],
        queryFn: {
            "useFriends.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].getFriends(params)
        }["useFriends.useQuery"]
    });
}
_s(useFriends, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useIncomingFriendRequests() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'friendRequests',
            'incoming'
        ],
        queryFn: {
            "useIncomingFriendRequests.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].getIncomingRequests()
        }["useIncomingFriendRequests.useQuery"]
    });
}
_s1(useIncomingFriendRequests, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useOutgoingFriendRequests() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'friendRequests',
            'outgoing'
        ],
        queryFn: {
            "useOutgoingFriendRequests.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].getOutgoingRequests()
        }["useOutgoingFriendRequests.useQuery"]
    });
}
_s2(useOutgoingFriendRequests, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSendFriendRequest() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendFriendRequest.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].sendFriendRequest(idUser)
        }["useSendFriendRequest.useMutation"],
        onSuccess: {
            "useSendFriendRequest.useMutation": ()=>invalidateFriendQueries(queryClient)
        }["useSendFriendRequest.useMutation"]
    });
}
_s3(useSendFriendRequest, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCancelFriendRequest() {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCancelFriendRequest.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].cancelFriendRequest(idUser)
        }["useCancelFriendRequest.useMutation"],
        onSuccess: {
            "useCancelFriendRequest.useMutation": ()=>invalidateFriendQueries(queryClient)
        }["useCancelFriendRequest.useMutation"]
    });
}
_s4(useCancelFriendRequest, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useAcceptFriendRequest() {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAcceptFriendRequest.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].acceptFriendRequest(idUser)
        }["useAcceptFriendRequest.useMutation"],
        onSuccess: {
            "useAcceptFriendRequest.useMutation": ()=>invalidateFriendQueries(queryClient)
        }["useAcceptFriendRequest.useMutation"]
    });
}
_s5(useAcceptFriendRequest, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUnfriend() {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUnfriend.useMutation": (idUser)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$friend$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friendService"].unfriend(idUser)
        }["useUnfriend.useMutation"],
        onSuccess: {
            "useUnfriend.useMutation": ()=>invalidateFriendQueries(queryClient)
        }["useUnfriend.useMutation"]
    });
}
_s6(useUnfriend, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/conversation.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "conversationService",
    ()=>conversationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const conversationService = {
    createDirectConversation: async (targetUserId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/conversations/direct', {
            targetUserId
        });
    },
    createGroupConversation: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/conversations/group', payload);
    },
    listMyConversations: async (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/conversations', {
            params
        });
    },
    getConversationDetail: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/${id}`);
    },
    updateConversation: async (id, payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/conversations/${id}`, payload);
    },
    addMembers: async (id, userIds)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/${id}/members`, {
            userIds
        });
    },
    removeMember: async (id, userId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/conversations/${id}/members/${userId}`);
    },
    leaveConversation: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/${id}/leave`);
    },
    muteConversation: async (id, mutedUntil)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/conversations/${id}/mute`, {
            mutedUntil
        });
    },
    archiveConversation: async (id, isArchived)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/conversations/${id}/archive`, {
            isArchived
        });
    },
    generateInviteCode: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/${id}/invite-code`);
    },
    getConversationByInviteCode: async (code)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/invite/${code}`);
    },
    joinByInviteCode: async (code)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/join/${code}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddMembers",
    ()=>useAddMembers,
    "useArchiveConversation",
    ()=>useArchiveConversation,
    "useConversationDetail",
    ()=>useConversationDetail,
    "useCreateDirectConversation",
    ()=>useCreateDirectConversation,
    "useCreateGroupConversation",
    ()=>useCreateGroupConversation,
    "useGenerateInviteCode",
    ()=>useGenerateInviteCode,
    "useInvitePreview",
    ()=>useInvitePreview,
    "useJoinByInviteCode",
    ()=>useJoinByInviteCode,
    "useLeaveConversation",
    ()=>useLeaveConversation,
    "useListConversations",
    ()=>useListConversations,
    "useMuteConversation",
    ()=>useMuteConversation,
    "useRemoveMember",
    ()=>useRemoveMember,
    "useUpdateConversation",
    ()=>useUpdateConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/conversation.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
;
;
function useListConversations(params) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'conversations',
            params
        ],
        queryFn: {
            "useListConversations.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].listMyConversations(params)
        }["useListConversations.useQuery"]
    });
}
_s(useListConversations, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useConversationDetail(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'conversations',
            id
        ],
        queryFn: {
            "useConversationDetail.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].getConversationDetail(id)
        }["useConversationDetail.useQuery"],
        enabled: !!id
    });
}
_s1(useConversationDetail, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateDirectConversation() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateDirectConversation.useMutation": (targetUserId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].createDirectConversation(targetUserId)
        }["useCreateDirectConversation.useMutation"],
        onSuccess: {
            "useCreateDirectConversation.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
            }
        }["useCreateDirectConversation.useMutation"]
    });
}
_s2(useCreateDirectConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateGroupConversation() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateGroupConversation.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].createGroupConversation(payload)
        }["useCreateGroupConversation.useMutation"],
        onSuccess: {
            "useCreateGroupConversation.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
            }
        }["useCreateGroupConversation.useMutation"]
    });
}
_s3(useCreateGroupConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateConversation(id) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateConversation.useMutation": (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].updateConversation(id, payload)
        }["useUpdateConversation.useMutation"],
        onSuccess: {
            "useUpdateConversation.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useUpdateConversation.useMutation"]
    });
}
_s4(useUpdateConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useAddMembers(id) {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddMembers.useMutation": (userIds)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].addMembers(id, userIds)
        }["useAddMembers.useMutation"],
        onSuccess: {
            "useAddMembers.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useAddMembers.useMutation"]
    });
}
_s5(useAddMembers, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRemoveMember(id) {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRemoveMember.useMutation": (userId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].removeMember(id, userId)
        }["useRemoveMember.useMutation"],
        onSuccess: {
            "useRemoveMember.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useRemoveMember.useMutation"]
    });
}
_s6(useRemoveMember, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLeaveConversation() {
    _s7();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLeaveConversation.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].leaveConversation(id)
        }["useLeaveConversation.useMutation"],
        onSuccess: {
            "useLeaveConversation.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
            }
        }["useLeaveConversation.useMutation"]
    });
}
_s7(useLeaveConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMuteConversation() {
    _s8();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useMuteConversation.useMutation": ({ id, mutedUntil })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].muteConversation(id, mutedUntil)
        }["useMuteConversation.useMutation"],
        onSuccess: {
            "useMuteConversation.useMutation": (_, { id })=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useMuteConversation.useMutation"]
    });
}
_s8(useMuteConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useArchiveConversation() {
    _s9();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useArchiveConversation.useMutation": ({ id, isArchived })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].archiveConversation(id, isArchived)
        }["useArchiveConversation.useMutation"],
        onSuccess: {
            "useArchiveConversation.useMutation": (_, { id })=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useArchiveConversation.useMutation"]
    });
}
_s9(useArchiveConversation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useGenerateInviteCode(id) {
    _s10();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGenerateInviteCode.useMutation": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].generateInviteCode(id)
        }["useGenerateInviteCode.useMutation"],
        onSuccess: {
            "useGenerateInviteCode.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations',
                        id
                    ]
                });
            }
        }["useGenerateInviteCode.useMutation"]
    });
}
_s10(useGenerateInviteCode, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useInvitePreview(code) {
    _s11();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'invite-preview',
            code
        ],
        queryFn: {
            "useInvitePreview.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].getConversationByInviteCode(code)
        }["useInvitePreview.useQuery"],
        enabled: !!code,
        retry: false
    });
}
_s11(useInvitePreview, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useJoinByInviteCode() {
    _s12();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useJoinByInviteCode.useMutation": (code)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].joinByInviteCode(code)
        }["useJoinByInviteCode.useMutation"],
        onSuccess: {
            "useJoinByInviteCode.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
            }
        }["useJoinByInviteCode.useMutation"]
    });
}
_s12(useJoinByInviteCode, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/message.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messageService",
    ()=>messageService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const messageService = {
    listMessages: async (conversationId, params = {})=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/${conversationId}/messages`, {
            params
        });
    },
    sendMessage: async (conversationId, payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/${conversationId}/messages`, payload);
    },
    editMessage: async (id, content)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/messages/${id}`, {
            content
        });
    },
    deleteMessage: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/messages/${id}`);
    },
    markAsRead: async (conversationId, lastReadMessageId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/conversations/${conversationId}/read`, {
            lastReadMessageId
        });
    },
    getUnreadCount: async (conversationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/${conversationId}/unread-count`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteMessage",
    ()=>useDeleteMessage,
    "useEditMessage",
    ()=>useEditMessage,
    "useListMessages",
    ()=>useListMessages,
    "useMarkAsRead",
    ()=>useMarkAsRead,
    "useSendMessage",
    ()=>useSendMessage,
    "useUnreadCount",
    ()=>useUnreadCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/message.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/SocketProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
function useListMessages(conversationId, params = {}) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'messages',
            conversationId,
            params
        ],
        queryFn: {
            "useListMessages.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].listMessages(conversationId, params)
        }["useListMessages.useQuery"],
        enabled: !!conversationId
    });
}
_s(useListMessages, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSendMessage(conversationId) {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { connected, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendMessage.useMutation": async (payload)=>{
                const tempId = payload.tempId || `temp-${Date.now()}-${Math.random().toString(36).slice(2)}`;
                const meResponse = queryClient.getQueryData([
                    'auth',
                    'me'
                ]);
                const optimisticMessage = {
                    _id: tempId,
                    conversationId,
                    senderId: meResponse ? {
                        _id: meResponse.data._id,
                        username: meResponse.data.username,
                        avatar: meResponse.data.avatar
                    } : {
                        _id: '',
                        username: ''
                    },
                    content: payload.content || '',
                    type: payload.type || 'text',
                    attachmentIds: [],
                    replyToMessageId: null,
                    isEdited: false,
                    isDeleted: false,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    tempId,
                    status: 'sending'
                };
                queryClient.setQueriesData({
                    queryKey: [
                        'messages',
                        conversationId
                    ],
                    exact: false
                }, {
                    "useSendMessage.useMutation": (old)=>old ? {
                            ...old,
                            data: {
                                ...old.data,
                                items: [
                                    ...old.data.items,
                                    optimisticMessage
                                ]
                            }
                        } : old
                }["useSendMessage.useMutation"]);
                if (!connected) {
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].sendMessage(conversationId, {
                            ...payload,
                            tempId
                        });
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                tempId
                            }
                        };
                    } catch (error) {
                        markMessageFailed(queryClient, conversationId, tempId);
                        throw error;
                    }
                }
                const ack = await sendMessage(conversationId, {
                    ...payload,
                    tempId
                });
                if (!ack.success || !ack.data) {
                    markMessageFailed(queryClient, conversationId, tempId);
                    throw new Error(ack.error || 'Gửi tin nhắn thất bại!');
                }
                return {
                    success: true,
                    message: 'ok',
                    data: {
                        message: ack.data,
                        tempId
                    },
                    error: null
                };
            }
        }["useSendMessage.useMutation"],
        onSuccess: {
            "useSendMessage.useMutation": (res, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
                const serverMessage = res.data.message;
                const tempId = res.data.tempId || variables.tempId;
                queryClient.setQueriesData({
                    queryKey: [
                        'messages',
                        conversationId
                    ],
                    exact: false
                }, {
                    "useSendMessage.useMutation": (old)=>{
                        if (!old) return old;
                        const withoutTemp = tempId ? old.data.items.filter({
                            "useSendMessage.useMutation": (m)=>m.tempId !== tempId
                        }["useSendMessage.useMutation"]) : old.data.items;
                        if (withoutTemp.some({
                            "useSendMessage.useMutation": (m)=>m._id === serverMessage._id
                        }["useSendMessage.useMutation"])) {
                            return {
                                ...old,
                                data: {
                                    ...old.data,
                                    items: withoutTemp.map({
                                        "useSendMessage.useMutation": (m)=>m._id === serverMessage._id ? serverMessage : m
                                    }["useSendMessage.useMutation"])
                                }
                            };
                        }
                        return {
                            ...old,
                            data: {
                                ...old.data,
                                items: [
                                    ...withoutTemp,
                                    serverMessage
                                ]
                            }
                        };
                    }
                }["useSendMessage.useMutation"]);
            }
        }["useSendMessage.useMutation"]
    });
}
_s1(useSendMessage, "Co//OZoi4ob53LFsNw2NfsnMWAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function markMessageFailed(queryClient, conversationId, tempId) {
    queryClient.setQueriesData({
        queryKey: [
            'messages',
            conversationId
        ],
        exact: false
    }, (old)=>old ? {
            ...old,
            data: {
                ...old.data,
                items: old.data.items.map((m)=>m.tempId === tempId ? {
                        ...m,
                        status: 'failed'
                    } : m)
            }
        } : old);
}
function useEditMessage(conversationId) {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditMessage.useMutation": ({ id, content })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].editMessage(id, content)
        }["useEditMessage.useMutation"],
        onSuccess: {
            "useEditMessage.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'messages',
                        conversationId
                    ]
                });
            }
        }["useEditMessage.useMutation"]
    });
}
_s2(useEditMessage, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteMessage(conversationId) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteMessage.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].deleteMessage(id)
        }["useDeleteMessage.useMutation"],
        onSuccess: {
            "useDeleteMessage.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'messages',
                        conversationId
                    ]
                });
            }
        }["useDeleteMessage.useMutation"]
    });
}
_s3(useDeleteMessage, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMarkAsRead(conversationId) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useMarkAsRead.useMutation": (lastReadMessageId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].markAsRead(conversationId, lastReadMessageId)
        }["useMarkAsRead.useMutation"],
        onSuccess: {
            "useMarkAsRead.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'unread-count',
                        conversationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'conversations'
                    ]
                });
            }
        }["useMarkAsRead.useMutation"]
    });
}
_s4(useMarkAsRead, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUnreadCount(conversationId) {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'unread-count',
            conversationId
        ],
        queryFn: {
            "useUnreadCount.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].getUnreadCount(conversationId)
        }["useUnreadCount.useQuery"],
        enabled: !!conversationId
    });
}
_s5(useUnreadCount, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useDebouncedValue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebouncedValue",
    ()=>useDebouncedValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebouncedValue(value, delayMs = 350) {
    _s();
    const [debounced, setDebounced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedValue.useEffect": ()=>{
            const timer = setTimeout({
                "useDebouncedValue.useEffect.timer": ()=>setDebounced(value)
            }["useDebouncedValue.useEffect.timer"], delayMs);
            return ({
                "useDebouncedValue.useEffect": ()=>clearTimeout(timer)
            })["useDebouncedValue.useEffect"];
        }
    }["useDebouncedValue.useEffect"], [
        value,
        delayMs
    ]);
    return debounced;
}
_s(useDebouncedValue, "33bQBlXg6j7MFSTRBeGy5/ui5G8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const subscribe = (query)=>(callback)=>{
        const mediaQueryList = window.matchMedia(query);
        mediaQueryList.addEventListener('change', callback);
        return ()=>mediaQueryList.removeEventListener('change', callback);
    };
const getServerSnapshot = ()=>false;
const useMediaQuery = (query)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe(query), {
        "useMediaQuery.useSyncExternalStore": ()=>window.matchMedia(query).matches
    }["useMediaQuery.useSyncExternalStore"], getServerSnapshot);
};
_s(useMediaQuery, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
const useIsMobile = ()=>{
    _s1();
    return useMediaQuery('(max-width: 767px)');
};
_s1(useIsMobile, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript) <export default as theme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MutedOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MutedOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MutedOutlined.js [app-client] (ecmascript) <export default as MutedOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InboxOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InboxOutlined.js [app-client] (ecmascript) <export default as InboxOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MoreOutlined.js [app-client] (ecmascript) <export default as MoreOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleFilled$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript) <export default as ExclamationCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const MUTE_FOREVER = '2099-12-31T00:00:00.000Z';
const LIST_PARAMS = {
    page: 1,
    pageSize: 50
};
const formatConversationTime = (isoString)=>{
    const date = new Date(isoString);
    const now = new Date();
    const isSameDay = date.toDateString() === now.toDateString();
    return isSameDay ? date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    }) : date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit'
    });
};
const getDisplayName = (item)=>item.type === 'group' ? item.name || 'Nhóm chat' : item.otherMember?.username || 'Người dùng';
const getAvatarUrl = (item)=>item.type === 'group' ? item.avatar : item.otherMember?.avatar;
const ATTACHMENT_PREVIEW_BY_TYPE = {
    image: '[Hình ảnh]',
    file: '[Tệp đính kèm]',
    video: '[Video]',
    audio: '[Âm thanh]'
};
const getLastMessagePreview = (item, currentUserId)=>{
    const lastMessage = item.lastMessage;
    if (!lastMessage) {
        return item.type === 'group' ? 'Nhóm chat' : 'Trò chuyện riêng tư';
    }
    if (lastMessage.isDeleted) return 'Tin nhắn đã được thu hồi';
    const isMine = lastMessage.senderId._id === currentUserId;
    const prefix = isMine ? 'Bạn: ' : item.type === 'group' ? `${lastMessage.senderId.username}: ` : '';
    const content = ATTACHMENT_PREVIEW_BY_TYPE[lastMessage.type] || lastMessage.content;
    return `${prefix}${content}`;
};
const ConversationsList = ({ selectedConversationId, onSelect, currentUserId })=>{
    _s();
    const { modal } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp();
    const { token } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListConversations"])(LIST_PARAMS);
    const muteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMuteConversation"])();
    const archiveMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArchiveConversation"])();
    const leaveMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaveConversation"])();
    const conversations = data?.data.items ?? [];
    const handleApiError = (err, fallback)=>{
        const axiosErr = err;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || fallback);
    };
    const handleToggleMute = (item)=>{
        const isMuted = !!item.memberSetting?.mutedUntil;
        muteMutation.mutate({
            id: item._id,
            mutedUntil: isMuted ? null : MUTE_FOREVER
        }, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success(isMuted ? 'Đã bỏ tắt thông báo!' : 'Đã tắt thông báo!'),
            onError: (err)=>handleApiError(err, 'Cập nhật thông báo thất bại!')
        });
    };
    const handleToggleArchive = (item)=>{
        const isArchived = !!item.memberSetting?.isArchived;
        archiveMutation.mutate({
            id: item._id,
            isArchived: !isArchived
        }, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success(isArchived ? 'Đã bỏ lưu trữ!' : 'Đã lưu trữ hội thoại!'),
            onError: (err)=>handleApiError(err, 'Cập nhật lưu trữ thất bại!')
        });
    };
    const handleLeave = (item)=>{
        modal.confirm({
            title: 'Rời khỏi hội thoại',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleFilled$3e$__["ExclamationCircleFilled"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            content: `Bạn có chắc chắn muốn rời khỏi "${getDisplayName(item)}"?`,
            okText: 'Rời khỏi',
            okButtonProps: {
                danger: true
            },
            cancelText: 'Hủy',
            onOk: ()=>{
                leaveMutation.mutate(item._id, {
                    onSuccess: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã rời khỏi hội thoại!');
                        if (selectedConversationId === item._id) onSelect?.('');
                    },
                    onError: (err)=>handleApiError(err, 'Rời khỏi hội thoại thất bại!')
                });
            }
        });
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '8px 12px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                    avatar: true,
                    paragraph: {
                        rows: 1
                    },
                    active: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                    avatar: true,
                    paragraph: {
                        rows: 1
                    },
                    active: true,
                    style: {
                        marginTop: 16
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                    avatar: true,
                    paragraph: {
                        rows: 1
                    },
                    active: true,
                    style: {
                        marginTop: 16
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (conversations.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
            description: "Chưa có cuộc trò chuyện nào",
            style: {
                marginTop: 60
            },
            image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: conversations.map((conv)=>{
            const isMuted = !!conv.memberSetting?.mutedUntil;
            const isArchived = !!conv.memberSetting?.isArchived;
            const displayName = getDisplayName(conv);
            const avatarUrl = getAvatarUrl(conv);
            const hasUnread = (conv.unreadCount || 0) > 0;
            const isSelected = selectedConversationId === conv._id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onSelect?.(conv._id),
                className: "chat-list-item",
                style: {
                    padding: '10px 12px',
                    borderRadius: 12,
                    cursor: 'pointer',
                    background: isSelected ? token.colorBgTextActive : 'transparent',
                    transition: 'background 0.2s',
                    marginBottom: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    gap: 12,
                    align: "center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 44,
                            src: avatarUrl || undefined,
                            icon: conv.type === 'group' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                lineNumber: 177,
                                columnNumber: 47
                            }, ("TURBOPACK compile-time value", void 0)) : undefined,
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(conv._id)
                            },
                            children: conv.type === 'private' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(displayName) : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                            lineNumber: 174,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            vertical: true,
                            flex: 1,
                            style: {
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                    align: "center",
                                    gap: 6,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            strong: true,
                                            ellipsis: true,
                                            style: {
                                                maxWidth: 150
                                            },
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isMuted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MutedOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MutedOutlined$3e$__["MutedOutlined"], {
                                            style: {
                                                color: '#9a9ab0',
                                                fontSize: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                            lineNumber: 187,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isArchived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InboxOutlined$3e$__["InboxOutlined"], {
                                            style: {
                                                color: '#9a9ab0',
                                                fontSize: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                            lineNumber: 188,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    type: hasUnread ? undefined : 'secondary',
                                    strong: hasUnread,
                                    ellipsis: true,
                                    style: {
                                        fontSize: 12
                                    },
                                    children: getLastMessagePreview(conv, currentUserId)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            vertical: true,
                            align: "flex-end",
                            gap: 4,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    type: "secondary",
                                    style: {
                                        fontSize: 11
                                    },
                                    children: formatConversationTime(conv.lastMessage?.createdAt || conv.lastMessageAt)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    count: conv.unreadCount,
                                    size: "small",
                                    overflowCount: 99,
                                    color: "#5b5bf6"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                    lineNumber: 204,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                                    menu: {
                                        items: [
                                            {
                                                key: 'mute',
                                                label: isMuted ? 'Bỏ tắt thông báo' : 'Tắt thông báo'
                                            },
                                            {
                                                key: 'archive',
                                                label: isArchived ? 'Bỏ lưu trữ' : 'Lưu trữ'
                                            },
                                            {
                                                key: 'leave',
                                                label: 'Rời khỏi hội thoại',
                                                danger: true
                                            }
                                        ],
                                        onClick: ({ key, domEvent })=>{
                                            domEvent.stopPropagation();
                                            if (key === 'mute') handleToggleMute(conv);
                                            if (key === 'archive') handleToggleArchive(conv);
                                            if (key === 'leave') handleLeave(conv);
                                        }
                                    },
                                    trigger: [
                                        'click'
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__["MoreOutlined"], {
                                        onClick: (e)=>e.stopPropagation(),
                                        style: {
                                            color: '#9a9ab0'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                        lineNumber: 222,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                            lineNumber: 199,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, conv._id, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
                lineNumber: 160,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConversationsList, "lkzgWiacawhihh2uowPqMGLKI4E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListConversations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMuteConversation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useArchiveConversation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaveConversation"]
    ];
});
_c = ConversationsList;
const __TURBOPACK__default__export__ = ConversationsList;
var _c;
__turbopack_context__.k.register(_c, "ConversationsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/checkbox/index.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript) <export default as SearchOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useDebouncedValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
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
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const CreateGroupModal = ({ open, onClose, onCreated })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [memberQuery, setMemberQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"])(memberQuery, 350);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"])({
        q: debouncedQuery,
        page: 1,
        pageSize: 30
    });
    const contacts = data?.data.items ?? [];
    const createGroupMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateGroupConversation"])();
    const toggleMember = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const resetState = ()=>{
        setGroupName('');
        setMemberQuery('');
        setSelectedIds([]);
    };
    const handleClose = ()=>{
        resetState();
        onClose();
    };
    const handleCreate = ()=>{
        createGroupMutation.mutate({
            name: groupName.trim(),
            memberIds: selectedIds
        }, {
            onSuccess: (res)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã tạo nhóm chat!');
                onCreated?.(res.data.conversation._id);
                resetState();
                onClose();
            },
            onError: (err)=>{
                const axiosErr = err;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Tạo nhóm chat thất bại!');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Tạo nhóm chat",
        open: open,
        onCancel: handleClose,
        onOk: handleCreate,
        okText: "Tạo nhóm",
        cancelText: "Hủy",
        confirmLoading: createGroupMutation.isPending,
        okButtonProps: {
            disabled: !groupName.trim() || selectedIds.length === 0
        },
        width: isMobile ? '92%' : 520,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
            vertical: true,
            gap: 16,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            type: "secondary",
                            style: {
                                fontSize: 12
                            },
                            children: "Tên nhóm"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"], {
                                style: {
                                    color: '#9a9ab0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            placeholder: "Nhập tên nhóm...",
                            value: groupName,
                            onChange: (e)=>setGroupName(e.target.value),
                            style: {
                                marginTop: 4
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            type: "secondary",
                            style: {
                                fontSize: 12
                            },
                            children: "Chọn thành viên"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__["SearchOutlined"], {
                                style: {
                                    color: '#9a9ab0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            placeholder: "Tìm kiếm người dùng...",
                            variant: "filled",
                            allowClear: true,
                            value: memberQuery,
                            onChange: (e)=>setMemberQuery(e.target.value),
                            style: {
                                marginTop: 4,
                                marginBottom: 8
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxHeight: 260,
                                overflowY: 'auto'
                            },
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                            avatar: true,
                                            paragraph: {
                                                rows: 1
                                            },
                                            active: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                            avatar: true,
                                            paragraph: {
                                                rows: 1
                                            },
                                            active: true,
                                            style: {
                                                marginTop: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true),
                                !isLoading && contacts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                                    description: memberQuery ? 'Không tìm thấy bạn bè nào phù hợp' : 'Bạn chưa có bạn bè nào',
                                    image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                !isLoading && contacts.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>toggleMember(contact._id),
                                        className: `px-2.5 py-2 mb-1 rounded-[10px] cursor-pointer ${selectedIds.includes(contact._id) ? 'bg-[#eef0ff]' : 'bg-transparent'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                            align: "center",
                                            gap: 10,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                    checked: selectedIds.includes(contact._id)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                    size: 36,
                                                    src: contact.avatar || undefined,
                                                    style: {
                                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(contact._id)
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(contact.username)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                    children: contact.username
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, contact._id, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateGroupModal, "WwqlBSHQ0p2/NJi6mCbxeiPXWe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateGroupConversation"]
    ];
});
_c = CreateGroupModal;
const __TURBOPACK__default__export__ = CreateGroupModal;
var _c;
__turbopack_context__.k.register(_c, "CreateGroupModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript) <export default as SearchOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useDebouncedValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
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
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const AddFriendModal = ({ open, onClose })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"])(query, 350);
    const { data: searchData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchUsers"])({
        q: debouncedQuery,
        page: 1,
        pageSize: 30
    });
    const results = searchData?.data.items ?? [];
    const { data: friendsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"])({
        pageSize: 200
    });
    const { data: incomingData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"])();
    const { data: outgoingData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutgoingFriendRequests"])();
    const friendIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddFriendModal.useMemo[friendIds]": ()=>new Set((friendsData?.data.items ?? []).map({
                "AddFriendModal.useMemo[friendIds]": (u)=>u._id
            }["AddFriendModal.useMemo[friendIds]"]))
    }["AddFriendModal.useMemo[friendIds]"], [
        friendsData
    ]);
    const incomingIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddFriendModal.useMemo[incomingIds]": ()=>new Set((incomingData?.data ?? []).map({
                "AddFriendModal.useMemo[incomingIds]": (r)=>r.user._id
            }["AddFriendModal.useMemo[incomingIds]"]))
    }["AddFriendModal.useMemo[incomingIds]"], [
        incomingData
    ]);
    const outgoingIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddFriendModal.useMemo[outgoingIds]": ()=>new Set((outgoingData?.data ?? []).map({
                "AddFriendModal.useMemo[outgoingIds]": (r)=>r.user._id
            }["AddFriendModal.useMemo[outgoingIds]"]))
    }["AddFriendModal.useMemo[outgoingIds]"], [
        outgoingData
    ]);
    const sendMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendFriendRequest"])();
    const cancelMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelFriendRequest"])();
    const acceptMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAcceptFriendRequest"])();
    const handleError = (err, fallback)=>{
        const axiosErr = err;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || fallback);
    };
    const handleSend = (userId)=>{
        sendMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã gửi lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Gửi lời mời kết bạn thất bại!')
        });
    };
    const handleCancel = (userId)=>{
        cancelMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã hủy lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Hủy lời mời thất bại!')
        });
    };
    const handleAccept = (userId)=>{
        acceptMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã chấp nhận lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Chấp nhận lời mời thất bại!')
        });
    };
    const handleClose = ()=>{
        setQuery('');
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Thêm bạn",
        open: open,
        onCancel: handleClose,
        footer: null,
        width: isMobile ? '92%' : 480,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__["SearchOutlined"], {
                    style: {
                        color: '#9a9ab0'
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                placeholder: "Tìm kiếm theo tên hoặc email...",
                variant: "filled",
                allowClear: true,
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                style: {
                    marginBottom: 12
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxHeight: 360,
                    overflowY: 'auto'
                },
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                avatar: true,
                                paragraph: {
                                    rows: 1
                                },
                                active: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                avatar: true,
                                paragraph: {
                                    rows: 1
                                },
                                active: true,
                                style: {
                                    marginTop: 12
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    !isLoading && results.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                        description: "Không tìm thấy người dùng nào",
                        image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && results.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '8px 4px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                align: "center",
                                gap: 10,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                        size: 40,
                                        src: user.avatar || undefined,
                                        style: {
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(user._id)
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(user.username)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                        vertical: true,
                                        flex: 1,
                                        style: {
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                strong: true,
                                                ellipsis: true,
                                                children: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                ellipsis: true,
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    friendIds.has(user._id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        children: "Bạn bè"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !friendIds.has(user._id) && outgoingIds.has(user._id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        size: "small",
                                        loading: cancelMutation.isPending,
                                        onClick: ()=>handleCancel(user._id),
                                        children: "Hủy lời mời"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !friendIds.has(user._id) && incomingIds.has(user._id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        size: "small",
                                        loading: acceptMutation.isPending,
                                        onClick: ()=>handleAccept(user._id),
                                        children: "Chấp nhận"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !friendIds.has(user._id) && !outgoingIds.has(user._id) && !incomingIds.has(user._id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        size: "small",
                                        loading: sendMutation.isPending,
                                        onClick: ()=>handleSend(user._id),
                                        children: "Kết bạn"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, user._id, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddFriendModal, "KevLSADdBidRsx+g9dwerkcsoU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchUsers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutgoingFriendRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendFriendRequest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelFriendRequest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAcceptFriendRequest"]
    ];
});
_c = AddFriendModal;
const __TURBOPACK__default__export__ = AddFriendModal;
var _c;
__turbopack_context__.k.register(_c, "AddFriendModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const { Text, Title } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const FriendRequestsModal = ({ open, onClose })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { data: incomingData, isLoading: incomingLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"])();
    const { data: outgoingData, isLoading: outgoingLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutgoingFriendRequests"])();
    const incomingRequests = incomingData?.data ?? [];
    const outgoingRequests = outgoingData?.data ?? [];
    const acceptMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAcceptFriendRequest"])();
    const cancelMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelFriendRequest"])();
    const handleError = (err, fallback)=>{
        const axiosErr = err;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || fallback);
    };
    const handleAccept = (userId)=>{
        acceptMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã chấp nhận lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Chấp nhận lời mời thất bại!')
        });
    };
    const handleReject = (userId)=>{
        cancelMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã từ chối lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Từ chối lời mời thất bại!')
        });
    };
    const handleCancelOutgoing = (userId)=>{
        cancelMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã hủy lời mời kết bạn!'),
            onError: (err)=>handleError(err, 'Hủy lời mời thất bại!')
        });
    };
    const renderRow = (request, actions)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
            align: "center",
            gap: 10,
            style: {
                padding: '8px 4px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                    src: request.user.avatar || undefined,
                    style: {
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(request.user._id)
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(request.user.username)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                    lineNumber: 65,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    vertical: true,
                    flex: 1,
                    style: {
                        minWidth: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            strong: true,
                            ellipsis: true,
                            children: request.user.username
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                            lineNumber: 72,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            type: "secondary",
                            ellipsis: true,
                            style: {
                                fontSize: 12
                            },
                            children: request.user.email
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                            lineNumber: 75,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                    lineNumber: 71,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                actions
            ]
        }, request._id, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Lời mời kết bạn",
        open: open,
        onCancel: onClose,
        footer: null,
        width: isMobile ? '92%' : 480,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                level: 5,
                style: {
                    marginTop: 0
                },
                children: "Đã nhận"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            incomingLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                avatar: true,
                paragraph: {
                    rows: 1
                },
                active: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 94,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            !incomingLoading && incomingRequests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                description: "Không có lời mời nào",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !incomingLoading && incomingRequests.map((request)=>renderRow(request, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    gap: 8,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            size: "small",
                            loading: acceptMutation.isPending,
                            onClick: ()=>handleAccept(request.user._id),
                            children: "Chấp nhận"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            loading: cancelMutation.isPending,
                            onClick: ()=>handleReject(request.user._id),
                            children: "Từ chối"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                            lineNumber: 111,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                level: 5,
                children: "Đã gửi"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            outgoingLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                avatar: true,
                paragraph: {
                    rows: 1
                },
                active: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 123,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            !outgoingLoading && outgoingRequests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                description: "Bạn chưa gửi lời mời nào",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !outgoingLoading && outgoingRequests.map((request)=>renderRow(request, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    size: "small",
                    loading: cancelMutation.isPending,
                    onClick: ()=>handleCancelOutgoing(request.user._id),
                    children: "Hủy"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
                    lineNumber: 131,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FriendRequestsModal, "U1OqmVVVr9oNhsqO7HJkCy5pOG4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutgoingFriendRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAcceptFriendRequest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCancelFriendRequest"]
    ];
});
_c = FriendRequestsModal;
const __TURBOPACK__default__export__ = FriendRequestsModal;
var _c;
__turbopack_context__.k.register(_c, "FriendRequestsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/notification.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationService",
    ()=>notificationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const notificationService = {
    listNotifications: async (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/notifications', {
            params
        });
    },
    markAsRead: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/notifications/${id}/read`);
    },
    markAllAsRead: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch('/notifications/read-all');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarkAllNotificationsAsRead",
    ()=>useMarkAllNotificationsAsRead,
    "useMarkNotificationAsRead",
    ()=>useMarkNotificationAsRead,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$notification$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/notification.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
function useNotifications(params) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'notifications',
            params
        ],
        queryFn: {
            "useNotifications.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$notification$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationService"].listNotifications(params)
        }["useNotifications.useQuery"]
    });
}
_s(useNotifications, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMarkNotificationAsRead() {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useMarkNotificationAsRead.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$notification$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationService"].markAsRead(id)
        }["useMarkNotificationAsRead.useMutation"],
        onSuccess: {
            "useMarkNotificationAsRead.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'notifications'
                    ]
                });
            }
        }["useMarkNotificationAsRead.useMutation"]
    });
}
_s1(useMarkNotificationAsRead, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMarkAllNotificationsAsRead() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useMarkAllNotificationsAsRead.useMutation": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$notification$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationService"].markAllAsRead()
        }["useMarkAllNotificationsAsRead.useMutation"],
        onSuccess: {
            "useMarkAllNotificationsAsRead.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'notifications'
                    ]
                });
            }
        }["useMarkAllNotificationsAsRead.useMutation"]
    });
}
_s2(useMarkAllNotificationsAsRead, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/BellOutlined.js [app-client] (ecmascript) <export default as BellOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useNotifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const formatTime = (isoDate)=>new Date(isoDate).toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
const NotificationBell = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const setSelectedConversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "NotificationBell.useChatStore[setSelectedConversationId]": (s)=>s.setSelectedConversationId
    }["NotificationBell.useChatStore[setSelectedConversationId]"]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])({
        page: 1,
        pageSize: 20
    });
    const markAsReadMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkNotificationAsRead"])();
    const markAllAsReadMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkAllNotificationsAsRead"])();
    const items = data?.data.items ?? [];
    const unreadCount = data?.data.meta.unreadCount ?? 0;
    const handleClickItem = (item)=>{
        if (!item.isRead) {
            markAsReadMutation.mutate(item._id);
        }
        if (item.link?.startsWith('/chat/')) {
            setSelectedConversationId(item.link.replace('/chat/', ''));
            router.push('/chat');
        } else if (item.link) {
            router.push(item.link);
        }
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 320,
            maxHeight: 420,
            overflowY: 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        strong: true,
                        children: "Thông báo"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "link",
                        size: "small",
                        loading: markAllAsReadMutation.isPending,
                        onClick: ()=>markAllAsReadMutation.mutate(),
                        children: "Đánh dấu đã đọc tất cả"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                active: true,
                paragraph: {
                    rows: 3
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                lineNumber: 64,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                description: "Không có thông báo nào",
                image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>handleClickItem(item),
                    style: {
                        padding: '10px 8px',
                        borderRadius: 8,
                        cursor: 'pointer',
                        background: item.isRead ? 'transparent' : 'rgba(91,91,246,0.08)',
                        marginBottom: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                display: 'block',
                                fontSize: 13
                            },
                            children: item.content
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            type: "secondary",
                            style: {
                                fontSize: 11
                            },
                            children: formatTime(item.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item._id, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
        content: content,
        trigger: "click",
        placement: "bottomRight",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
            count: unreadCount,
            size: "small",
            offset: [
                -4,
                4
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                type: "text",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__["BellOutlined"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                    lineNumber: 93,
                    columnNumber: 35
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationBell, "GBkyivjBKsBJIZV08jp3Vz5+jdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkNotificationAsRead"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkAllNotificationsAsRead"]
    ];
});
_c = NotificationBell;
const __TURBOPACK__default__export__ = NotificationBell;
var _c;
__turbopack_context__.k.register(_c, "NotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/story.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storyService",
    ()=>storyService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const storyService = {
    createStory: async (file, caption)=>{
        const formData = new FormData();
        formData.append('file', file);
        if (caption) formData.append('caption', caption);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/stories', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    listFeed: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stories/feed');
    },
    getStoriesByUser: async (userId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/user/${userId}`);
    },
    deleteStory: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/stories/${id}`);
    },
    listViewers: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/stories/${id}/viewers`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useStories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateStory",
    ()=>useCreateStory,
    "useDeleteStory",
    ()=>useDeleteStory,
    "useStoryFeed",
    ()=>useStoryFeed,
    "useStoryViewers",
    ()=>useStoryViewers,
    "useUserStories",
    ()=>useUserStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/story.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
function useStoryFeed() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stories',
            'feed'
        ],
        queryFn: {
            "useStoryFeed.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].listFeed()
        }["useStoryFeed.useQuery"]
    });
}
_s(useStoryFeed, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUserStories(userId) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stories',
            'user',
            userId
        ],
        queryFn: {
            "useUserStories.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].getStoriesByUser(userId)
        }["useUserStories.useQuery"],
        enabled: !!userId
    });
}
_s1(useUserStories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateStory() {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateStory.useMutation": ({ file, caption })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].createStory(file, caption)
        }["useCreateStory.useMutation"],
        onSuccess: {
            "useCreateStory.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'stories',
                        'feed'
                    ]
                });
            }
        }["useCreateStory.useMutation"]
    });
}
_s2(useCreateStory, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteStory() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteStory.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].deleteStory(id)
        }["useDeleteStory.useMutation"],
        onSuccess: {
            "useDeleteStory.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'stories'
                    ]
                });
            }
        }["useDeleteStory.useMutation"]
    });
}
_s3(useDeleteStory, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useStoryViewers(storyId, enabled) {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stories',
            storyId,
            'viewers'
        ],
        queryFn: {
            "useStoryViewers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$story$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].listViewers(storyId)
        }["useStoryViewers.useQuery"],
        enabled: enabled && !!storyId
    });
}
_s4(useStoryViewers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/storyPresets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORY_FONTS",
    ()=>STORY_FONTS,
    "STORY_GRADIENTS",
    ()=>STORY_GRADIENTS,
    "STORY_MUSIC_LIST",
    ()=>STORY_MUSIC_LIST,
    "STORY_STICKERS",
    ()=>STORY_STICKERS
]);
const STORY_GRADIENTS = [
    {
        id: 'sunset',
        name: 'Sunset Purple',
        css: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
        colors: [
            '#833ab4',
            '#fcb045'
        ]
    },
    {
        id: 'ocean',
        name: 'Ocean Blue',
        css: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
        colors: [
            '#00c6ff',
            '#0072ff'
        ]
    },
    {
        id: 'emerald',
        name: 'Emerald Mint',
        css: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        colors: [
            '#11998e',
            '#38ef7d'
        ]
    },
    {
        id: 'neon',
        name: 'Neon Cyber',
        css: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        colors: [
            '#0f0c29',
            '#24243e'
        ]
    },
    {
        id: 'rose',
        name: 'Rose Gold',
        css: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
        colors: [
            '#ff758c',
            '#ff7eb3'
        ]
    },
    {
        id: 'fire',
        name: 'Fiery Orange',
        css: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
        colors: [
            '#ff4e50',
            '#f9d423'
        ]
    }
];
const STORY_FONTS = [
    {
        id: 'modern',
        name: 'Hiện đại',
        family: 'system-ui, -apple-system, sans-serif'
    },
    {
        id: 'serif',
        name: 'Trang trọng',
        family: 'Georgia, serif'
    },
    {
        id: 'handwriting',
        name: 'Viết tay',
        family: 'cursive, "Brush Script MT"'
    },
    {
        id: 'headline',
        name: 'Tiêu đề',
        family: '"Impact", "Arial Black", sans-serif'
    },
    {
        id: 'monospace',
        name: 'Mã hóa',
        family: 'monospace'
    }
];
const STORY_STICKERS = [
    '❤️',
    '🔥',
    '🎉',
    '😍',
    '✨',
    '👑',
    '🌟',
    '🎵',
    '💯',
    '🚀'
];
const STORY_MUSIC_LIST = [
    {
        id: 'none',
        title: 'Không dùng nhạc',
        artist: ''
    },
    {
        id: 'chill',
        title: 'Chill Vibes',
        artist: 'Lo-Fi Lounge'
    },
    {
        id: 'acoustic',
        title: 'Acoustic Morning',
        artist: 'Guitar Acoustic'
    },
    {
        id: 'pop',
        title: 'Upbeat Pop',
        artist: 'Summer Beats'
    },
    {
        id: 'energetic',
        title: 'Energy Boost',
        artist: 'Electronic Pulse'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Segmented$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/segmented/index.js [app-client] (ecmascript) <export default as Segmented>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/slider/index.js [app-client] (ecmascript) <export default as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/index.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BgColorsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BgColorsOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/BgColorsOutlined.js [app-client] (ecmascript) <export default as BgColorsOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FontSizeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FontSizeOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/FontSizeOutlined.js [app-client] (ecmascript) <export default as FontSizeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PictureOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PictureOutlined.js [app-client] (ecmascript) <export default as PictureOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript) <export default as PlusOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SmileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmileOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SmileOutlined.js [app-client] (ecmascript) <export default as SmileOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [app-client] (ecmascript) <export default as CheckOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DragOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DragOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/DragOutlined.js [app-client] (ecmascript) <export default as DragOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomInOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomInOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ZoomInOutlined.js [app-client] (ecmascript) <export default as ZoomInOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateLeftOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RotateLeftOutlined.js [app-client] (ecmascript) <export default as RotateLeftOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useStories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/storyPresets.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const { TextArea } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"];
const CreateStoryModal = ({ open, onClose })=>{
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('text');
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGradient, setSelectedGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_GRADIENTS"][0]);
    const [selectedFont, setSelectedFont] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_FONTS"][0]);
    const [selectedStickers, setSelectedStickers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [photoFileList, setPhotoFileList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSynthesizing, setIsSynthesizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Scale state for Photo Zoom
    const [imgScale, setImgScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Position Offsets State (used for React render) & Ref-backed (used for 60fps drag loop)
    const [imgOffset, setImgOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [textOffset, setTextOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [stickerOffset, setStickerOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const imgOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const textOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const stickerOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // DOM Refs for drag performance
    const imgElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickerElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Drag tracking refs
    const draggingTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        startX: 0,
        startY: 0,
        initX: 0,
        initY: 0
    });
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const createStoryMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateStory"])();
    // Derive object URL preview safely without setState inside useEffect
    const photoPreviewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateStoryModal.useMemo[photoPreviewUrl]": ()=>{
            const rawFile = photoFileList[0]?.originFileObj;
            if (!rawFile) return null;
            return URL.createObjectURL(rawFile);
        }
    }["CreateStoryModal.useMemo[photoPreviewUrl]"], [
        photoFileList
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateStoryModal.useEffect": ()=>{
            return ({
                "CreateStoryModal.useEffect": ()=>{
                    if (photoPreviewUrl) {
                        URL.revokeObjectURL(photoPreviewUrl);
                    }
                }
            })["CreateStoryModal.useEffect"];
        }
    }["CreateStoryModal.useEffect"], [
        photoPreviewUrl
    ]);
    const updateElementTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CreateStoryModal.useCallback[updateElementTransforms]": ()=>{
            if (imgElRef.current) {
                imgElRef.current.style.transform = `translate(${imgOffsetRef.current.x}px, ${imgOffsetRef.current.y}px) scale(${imgScale})`;
            }
            if (textElRef.current) {
                textElRef.current.style.transform = `translate(${textOffsetRef.current.x}px, ${textOffsetRef.current.y}px)`;
            }
            if (stickerElRef.current) {
                stickerElRef.current.style.transform = `translate(${stickerOffsetRef.current.x}px, ${stickerOffsetRef.current.y}px)`;
            }
        }
    }["CreateStoryModal.useCallback[updateElementTransforms]"], [
        imgScale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateStoryModal.useEffect": ()=>{
            updateElementTransforms();
        }
    }["CreateStoryModal.useEffect"], [
        updateElementTransforms,
        mode,
        text,
        selectedStickers
    ]);
    const handlePhotoChange = ({ fileList: newList })=>{
        setPhotoFileList(newList.slice(-1));
        setImgScale(1);
        imgOffsetRef.current = {
            x: 0,
            y: 0
        };
        setImgOffset({
            x: 0,
            y: 0
        });
        updateElementTransforms();
    };
    const handleClose = ()=>{
        setText('');
        setPhotoFileList([]);
        setSelectedStickers([]);
        setSelectedGradient(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_GRADIENTS"][0]);
        setSelectedFont(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_FONTS"][0]);
        setMode('text');
        setImgScale(1);
        imgOffsetRef.current = {
            x: 0,
            y: 0
        };
        textOffsetRef.current = {
            x: 0,
            y: 0
        };
        stickerOffsetRef.current = {
            x: 0,
            y: 0
        };
        setImgOffset({
            x: 0,
            y: 0
        });
        setTextOffset({
            x: 0,
            y: 0
        });
        setStickerOffset({
            x: 0,
            y: 0
        });
        updateElementTransforms();
        onClose();
    };
    const resetTransforms = ()=>{
        setImgScale(1);
        imgOffsetRef.current = {
            x: 0,
            y: 0
        };
        textOffsetRef.current = {
            x: 0,
            y: 0
        };
        stickerOffsetRef.current = {
            x: 0,
            y: 0
        };
        setImgOffset({
            x: 0,
            y: 0
        });
        setTextOffset({
            x: 0,
            y: 0
        });
        setStickerOffset({
            x: 0,
            y: 0
        });
        updateElementTransforms();
    };
    const toggleSticker = (sticker)=>{
        if (selectedStickers.includes(sticker)) {
            setSelectedStickers(selectedStickers.filter((s)=>s !== sticker));
        } else {
            if (selectedStickers.length >= 4) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].warning('Tối đa 4 nhãn dán cho mỗi story');
                return;
            }
            setSelectedStickers([
                ...selectedStickers,
                sticker
            ]);
        }
    };
    // 60FPS Dragging via Pointer Events
    const handlePointerDown = (e, target)=>{
        e.preventDefault();
        e.stopPropagation();
        draggingTargetRef.current = target;
        try {
            e.target.setPointerCapture?.(e.pointerId);
        } catch  {
        // Ignore fallback
        }
        let initX = 0;
        let initY = 0;
        if (target === 'img') {
            initX = imgOffsetRef.current.x;
            initY = imgOffsetRef.current.y;
        } else if (target === 'text') {
            initX = textOffsetRef.current.x;
            initY = textOffsetRef.current.y;
        } else if (target === 'stickers') {
            initX = stickerOffsetRef.current.x;
            initY = stickerOffsetRef.current.y;
        }
        dragStartRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            initX,
            initY
        };
    };
    const handlePointerMove = (e)=>{
        if (!draggingTargetRef.current) return;
        const target = draggingTargetRef.current;
        const dx = e.clientX - dragStartRef.current.startX;
        const dy = e.clientY - dragStartRef.current.startY;
        const newX = dragStartRef.current.initX + dx;
        const newY = dragStartRef.current.initY + dy;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(()=>{
            if (target === 'img') {
                imgOffsetRef.current = {
                    x: newX,
                    y: newY
                };
                if (imgElRef.current) {
                    imgElRef.current.style.transform = `translate(${newX}px, ${newY}px) scale(${imgScale})`;
                }
            } else if (target === 'text') {
                textOffsetRef.current = {
                    x: newX,
                    y: newY
                };
                if (textElRef.current) {
                    textElRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
                }
            } else if (target === 'stickers') {
                stickerOffsetRef.current = {
                    x: newX,
                    y: newY
                };
                if (stickerElRef.current) {
                    stickerElRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
                }
            }
        });
    };
    const handlePointerUp = (e)=>{
        if (draggingTargetRef.current) {
            const target = draggingTargetRef.current;
            try {
                e.target.releasePointerCapture?.(e.pointerId);
            } catch  {
            // Ignore fallback
            }
            draggingTargetRef.current = null;
            if (target === 'img') setImgOffset({
                ...imgOffsetRef.current
            });
            else if (target === 'text') setTextOffset({
                ...textOffsetRef.current
            });
            else if (target === 'stickers') setStickerOffset({
                ...stickerOffsetRef.current
            });
        }
    };
    /** Canvas HD Synthesizer */ const generateStoryFile = async ()=>{
        const canvas = canvasRef.current || document.createElement('canvas');
        canvas.width = 1080;
        canvas.height = 1920;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Không thể khởi tạo đồ hoạ canvas');
        const scaleFactor = 1080 / 600;
        if (mode === 'photo' && photoFileList[0]?.originFileObj) {
            const rawFile = photoFileList[0].originFileObj;
            const img = new Image();
            const imgUrl = URL.createObjectURL(rawFile);
            await new Promise((resolve, reject)=>{
                img.onload = ()=>resolve();
                img.onerror = reject;
                img.src = imgUrl;
            });
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            const baseScale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const finalScale = baseScale * imgScale;
            const w = img.width * finalScale;
            const h = img.height * finalScale;
            const centerX = canvas.width / 2 + imgOffsetRef.current.x * scaleFactor;
            const centerY = canvas.height / 2 + imgOffsetRef.current.y * scaleFactor;
            ctx.drawImage(img, centerX - w / 2, centerY - h / 2, w, h);
            ctx.restore();
            URL.revokeObjectURL(imgUrl);
        } else {
            const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            grad.addColorStop(0, selectedGradient.colors[0]);
            grad.addColorStop(1, selectedGradient.colors[1]);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        const activeText = text.trim();
        if (activeText) {
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
            ctx.shadowBlur = 24;
            ctx.shadowOffsetY = 6;
            const fontSize = mode === 'text' ? 90 : 68;
            ctx.font = `700 ${fontSize}px ${selectedFont.family}`;
            const maxLineWidth = 920;
            const words = activeText.split(' ');
            const lines = [];
            let currentLine = '';
            for (const word of words){
                const testLine = currentLine ? `${currentLine} ${word}` : word;
                if (ctx.measureText(testLine).width > maxLineWidth && currentLine) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            }
            if (currentLine) lines.push(currentLine);
            const lineHeight = fontSize * 1.35;
            const textCenterX = canvas.width / 2 + textOffsetRef.current.x * scaleFactor;
            const textCenterY = canvas.height / 2 + textOffsetRef.current.y * scaleFactor;
            const startY = textCenterY - (lines.length - 1) * lineHeight / 2;
            lines.forEach((line, idx)=>{
                ctx.fillText(line, textCenterX, startY + idx * lineHeight);
            });
            ctx.restore();
        }
        if (selectedStickers.length > 0) {
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '120px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
            const spacing = 180;
            const totalWidth = (selectedStickers.length - 1) * spacing;
            const stickerCenterX = canvas.width / 2 + stickerOffsetRef.current.x * scaleFactor;
            const stickerCenterY = canvas.height * 0.8 + stickerOffsetRef.current.y * scaleFactor;
            const startX = stickerCenterX - totalWidth / 2;
            selectedStickers.forEach((stk, idx)=>{
                ctx.fillText(stk, startX + idx * spacing, stickerCenterY);
            });
            ctx.restore();
        }
        return new Promise((resolve, reject)=>{
            canvas.toBlob((blob)=>{
                if (!blob) {
                    reject(new Error('Tạo ảnh story thất bại'));
                    return;
                }
                const file = new File([
                    blob
                ], `story_${Date.now()}.jpg`, {
                    type: 'image/jpeg'
                });
                resolve(file);
            }, 'image/jpeg', 0.92);
        });
    };
    const handleSubmit = async ()=>{
        if (mode === 'photo' && photoFileList.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error('Vui lòng chọn 1 bức ảnh cho photo story!');
            return;
        }
        if (mode === 'text' && !text.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error('Vui lòng nhập nội dung cho text story!');
            return;
        }
        setIsSynthesizing(true);
        try {
            const generatedFile = await generateStoryFile();
            const finalCaption = text.trim();
            createStoryMutation.mutate({
                file: generatedFile,
                caption: finalCaption || undefined
            }, {
                onSuccess: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã đăng story thành công!');
                    handleClose();
                },
                onError: (err)=>{
                    const axiosErr = err;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Đăng story thất bại!');
                }
            });
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(err instanceof Error ? err.message : 'Tạo story thất bại');
        } finally{
            setIsSynthesizing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Tạo Story",
        open: open,
        onCancel: handleClose,
        footer: null,
        width: 1280,
        style: {
            top: 10
        },
        styles: {
            body: {
                padding: 20
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    display: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 24,
                    flexDirection: 'row',
                    height: 'calc(90vh - 80px)',
                    minHeight: 720,
                    maxHeight: 850,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '0 0 600px',
                            height: '100%',
                            borderRadius: 18,
                            background: mode === 'photo' ? '#0f172a' : selectedGradient.css,
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
                            userSelect: 'none',
                            touchAction: 'none'
                        },
                        children: [
                            mode === 'photo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onPointerDown: (e)=>handlePointerDown(e, 'img'),
                                onPointerMove: handlePointerMove,
                                onPointerUp: handlePointerUp,
                                onPointerCancel: handlePointerUp,
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: photoPreviewUrl ? 'grab' : 'default'
                                },
                                children: photoPreviewUrl ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    ref: imgElRef,
                                    src: photoPreviewUrl,
                                    alt: "Story preview",
                                    draggable: false,
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        willChange: 'transform',
                                        transform: `translate(${imgOffset.x}px, ${imgOffset.y}px) scale(${imgScale})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                    lineNumber: 438,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'rgba(255,255,255,0.6)',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PictureOutlined$3e$__["PictureOutlined"], {
                                            style: {
                                                fontSize: 48
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 453,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                marginTop: 8,
                                                fontSize: 13
                                            },
                                            children: "Chưa chọn hình ảnh"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            text.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: textElRef,
                                onPointerDown: (e)=>handlePointerDown(e, 'text'),
                                onPointerMove: handlePointerMove,
                                onPointerUp: handlePointerUp,
                                onPointerCancel: handlePointerUp,
                                style: {
                                    position: 'absolute',
                                    top: '40%',
                                    left: 20,
                                    right: 20,
                                    zIndex: 5,
                                    color: '#fff',
                                    fontFamily: selectedFont.family,
                                    fontSize: mode === 'text' ? 28 : 22,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    textShadow: '0 2px 14px rgba(0,0,0,0.7)',
                                    wordBreak: 'break-word',
                                    cursor: 'grab',
                                    willChange: 'transform',
                                    transform: `translate(${textOffset.x}px, ${textOffset.y}px)`,
                                    border: '1px dashed rgba(255,255,255,0.3)',
                                    borderRadius: 8,
                                    padding: 8
                                },
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedStickers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: stickerElRef,
                                onPointerDown: (e)=>handlePointerDown(e, 'stickers'),
                                onPointerMove: handlePointerMove,
                                onPointerUp: handlePointerUp,
                                onPointerCancel: handlePointerUp,
                                style: {
                                    position: 'absolute',
                                    bottom: 40,
                                    left: 0,
                                    right: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 12,
                                    fontSize: 34,
                                    zIndex: 6,
                                    cursor: 'grab',
                                    willChange: 'transform',
                                    transform: `translate(${stickerOffset.x}px, ${stickerOffset.y}px)`,
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
                                },
                                children: selectedStickers.map((stk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: stk
                                    }, i, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 516,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: 8,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: 10,
                                    pointerEvents: 'none',
                                    zIndex: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DragOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DragOutlined$3e$__["DragOutlined"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Kéo thả ảnh/chữ/icon để di chuyển"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 14,
                            height: '100%',
                            overflowY: 'auto',
                            paddingRight: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$segmented$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Segmented$3e$__["Segmented"], {
                                block: true,
                                value: mode,
                                onChange: (val)=>setMode(val),
                                options: [
                                    {
                                        label: 'Tin văn bản',
                                        value: 'text',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FontSizeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FontSizeOutlined$3e$__["FontSizeOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 554,
                                            columnNumber: 60
                                        }, ("TURBOPACK compile-time value", void 0))
                                    },
                                    {
                                        label: 'Tin hình ảnh',
                                        value: 'photo',
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PictureOutlined$3e$__["PictureOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 555,
                                            columnNumber: 62
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 549,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'photo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#f8fafc',
                                    padding: 12,
                                    borderRadius: 10,
                                    border: '1px solid #e2e8f0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            marginBottom: 8
                                        },
                                        children: "Tải & Điều chỉnh ảnh:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        showUploadList: false,
                                        beforeUpload: ()=>false,
                                        onChange: handlePhotoChange,
                                        accept: "image/png,image/jpeg,image/webp,image/gif",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            size: "middle",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__["PlusOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 577,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            style: {
                                                fontSize: 14
                                            },
                                            children: photoFileList.length > 0 ? 'Đổi ảnh khác' : 'Chọn ảnh từ máy tính'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    photoFileList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: 13,
                                                    color: '#64748b'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ZoomInOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomInOutlined$3e$__["ZoomInOutlined"], {}, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Phóng to / Thu nhỏ:"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            Math.round(imgScale * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 584,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$slider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Slider$3e$__["Slider"], {
                                                min: 0.5,
                                                max: 2.5,
                                                step: 0.05,
                                                value: imgScale,
                                                onChange: (val)=>setImgScale(val)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 597,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            marginBottom: 6
                                        },
                                        children: mode === 'text' ? 'Nội dung Story:' : 'Chú thích đè lên ảnh:'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                        placeholder: "Nhập nội dung story...",
                                        maxLength: 150,
                                        showCount: true,
                                        rows: 3,
                                        style: {
                                            fontSize: 14
                                        },
                                        value: text,
                                        onChange: (e)=>setText(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BgColorsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BgColorsOutlined$3e$__["BgColorsOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 636,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Phông nền (Gradients):"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 626,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 10,
                                            flexWrap: 'wrap'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_GRADIENTS"].map((grad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                title: grad.name,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedGradient(grad),
                                                    style: {
                                                        width: 36,
                                                        height: 36,
                                                        borderRadius: '50%',
                                                        background: grad.css,
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        border: selectedGradient.id === grad.id ? '3px solid #6366f1' : '2px solid #fff',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
                                                    },
                                                    children: selectedGradient.id === grad.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckOutlined$3e$__["CheckOutlined"], {
                                                        style: {
                                                            color: '#fff',
                                                            fontSize: 14
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, grad.id, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 640,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FontSizeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FontSizeOutlined$3e$__["FontSizeOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 678,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Kiểu chữ (Font):"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 668,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                        wrap: true,
                                        size: [
                                            8,
                                            8
                                        ],
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_FONTS"].map((font)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                size: "middle",
                                                type: selectedFont.id === font.id ? 'primary' : 'default',
                                                onClick: ()=>setSelectedFont(font),
                                                style: {
                                                    fontFamily: font.family,
                                                    fontSize: 14
                                                },
                                                children: font.name
                                            }, font.id, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 680,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SmileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmileOutlined$3e$__["SmileOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 706,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Thêm nhãn dán Emoji (Tối đa 4):"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 696,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            flexWrap: 'wrap'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$storyPresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY_STICKERS"].map((stk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleSticker(stk),
                                                style: {
                                                    fontSize: 24,
                                                    padding: '4px 10px',
                                                    borderRadius: 8,
                                                    cursor: 'pointer',
                                                    background: selectedStickers.includes(stk) ? '#e0e7ff' : '#f1f5f9',
                                                    border: selectedStickers.includes(stk) ? '1px solid #6366f1' : '1px solid transparent'
                                                },
                                                children: stk
                                            }, stk, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 'auto',
                                    paddingTop: 8,
                                    display: 'flex',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        size: "middle",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RotateLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateLeftOutlined$3e$__["RotateLeftOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                            lineNumber: 731,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        onClick: resetTransforms,
                                        children: "Đặt lại vị trí"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 731,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        style: {
                                            flex: 1
                                        },
                                        size: "middle",
                                        loading: createStoryMutation.isPending || isSynthesizing,
                                        onClick: handleSubmit,
                                        children: "Chia sẻ lên tin (Story)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                        lineNumber: 734,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                                lineNumber: 730,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateStoryModal, "Ta4ZljLzI+iF+wYedJEegebR8K4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateStory"]
    ];
});
_c = CreateStoryModal;
const __TURBOPACK__default__export__ = CreateStoryModal;
var _c;
__turbopack_context__.k.register(_c, "CreateStoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js [app-client] (ecmascript) <export default as DeleteOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [app-client] (ecmascript) <export default as EyeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SendOutlined.js [app-client] (ecmascript) <export default as SendOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useStories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/conversation.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/message.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
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
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const STORY_DURATION_MS = 5000;
const QUICK_REACTIONS = [
    '❤️',
    '😂',
    '😮',
    '😢',
    '🔥',
    '👏'
];
const StoryViewerModal = ({ open, onClose, userId, currentUserId })=>{
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSendingReply, setIsSendingReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStories"])(open ? userId : '');
    const deleteStoryMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteStory"])();
    const stories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoryViewerModal.useMemo[stories]": ()=>data?.data.stories ?? []
    }["StoryViewerModal.useMemo[stories]"], [
        data
    ]);
    const activeStory = stories[index];
    const isOwn = currentUserId === userId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryViewerModal.useEffect": ()=>{
            if (data && !isOwn) {
                queryClient.invalidateQueries({
                    queryKey: [
                        'stories',
                        'feed'
                    ]
                });
            }
        }
    }["StoryViewerModal.useEffect"], [
        data,
        isOwn,
        queryClient
    ]);
    const { data: viewersData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoryViewers"])(activeStory?._id ?? '', isOwn && open);
    const viewers = viewersData?.data.viewers ?? [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryViewerModal.useEffect": ()=>{
            if (open) {
                setIndex(0);
                setReplyText('');
            }
        }
    }["StoryViewerModal.useEffect"], [
        open,
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryViewerModal.useEffect": ()=>{
            if (!open || stories.length === 0) return;
            const timer = setTimeout({
                "StoryViewerModal.useEffect.timer": ()=>{
                    if (index < stories.length - 1) {
                        setIndex({
                            "StoryViewerModal.useEffect.timer": (i)=>i + 1
                        }["StoryViewerModal.useEffect.timer"]);
                    } else {
                        onClose();
                    }
                }
            }["StoryViewerModal.useEffect.timer"], STORY_DURATION_MS);
            return ({
                "StoryViewerModal.useEffect": ()=>clearTimeout(timer)
            })["StoryViewerModal.useEffect"];
        }
    }["StoryViewerModal.useEffect"], [
        open,
        index,
        stories.length,
        onClose
    ]);
    const handleDelete = ()=>{
        if (!activeStory) return;
        deleteStoryMutation.mutate(activeStory._id, {
            onSuccess: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã xoá story!');
                if (stories.length <= 1) onClose();
                else setIndex((i)=>Math.max(0, i - 1));
            },
            onError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error('Xoá story thất bại!')
        });
    };
    const handleSendReactionOrReply = async (contentToSend)=>{
        if (!contentToSend.trim() || isOwn) return;
        setIsSendingReply(true);
        try {
            // 1. Get or create direct conversation with story creator
            const convRes = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$conversation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationService"].createDirectConversation(userId);
            const conversationId = convRes.data.conversation._id;
            // 2. Send story reply message
            const prefix = activeStory?.caption ? `[Story: "${activeStory.caption}"] ` : '[Story] ';
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageService"].sendMessage(conversationId, {
                content: `${prefix}${contentToSend}`,
                type: 'text'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success(`Đã gửi phản hồi tới tác giả!`);
            setReplyText('');
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error('Không thể gửi phản hồi cho story');
        } finally{
            setIsSendingReply(false);
        }
    };
    const goPrev = ()=>setIndex((i)=>Math.max(0, i - 1));
    const goNext = ()=>index < stories.length - 1 ? setIndex((i)=>i + 1) : onClose();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: open,
        onCancel: onClose,
        footer: null,
        closable: false,
        width: 400,
        styles: {
            body: {
                padding: 0,
                background: '#000',
                borderRadius: 16,
                overflow: 'hidden'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative',
                height: 680,
                background: '#000',
                display: 'flex',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 4,
                        padding: '8px 8px 0',
                        zIndex: 10
                    },
                    children: stories.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                height: 3,
                                borderRadius: 2,
                                background: i < index ? '#fff' : 'rgba(255,255,255,0.35)',
                                overflow: 'hidden'
                            },
                            children: i === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '100%',
                                    width: '100%',
                                    background: '#fff',
                                    animation: `story-progress ${STORY_DURATION_MS}ms linear forwards`
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, s._id, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@keyframes story-progress { from { width: 0% } to { width: 100% } }`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 12px',
                        zIndex: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    size: 34,
                                    style: {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(userId)
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(userId)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    style: {
                                        color: '#fff',
                                        fontSize: 13,
                                        fontWeight: 600
                                    },
                                    children: activeStory?.caption ? activeStory.caption : 'Story'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                isOwn && activeStory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                            trigger: "click",
                                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: 220
                                                },
                                                children: [
                                                    viewers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                        type: "secondary",
                                                        children: "Chưa có lượt xem"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 48
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    viewers.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 8,
                                                                padding: '4px 0'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                                    size: 24,
                                                                    src: v.avatar || undefined,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(v.username)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                                    style: {
                                                                        fontSize: 13
                                                                    },
                                                                    children: v.username
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, v._id, true, {
                                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: iconButtonStyle,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__["EyeOutlined"], {}, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    activeStory.viewerIds.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            style: iconButtonStyle,
                                            onClick: handleDelete,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteOutlined$3e$__["DeleteOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    style: iconButtonStyle,
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 24,
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"].Image, {
                        active: true,
                        style: {
                            width: '100%',
                            height: 480
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                !isLoading && activeStory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#09090b'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: activeStory.attachmentId.url,
                            alt: "story",
                            style: {
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: goPrev,
                            style: {
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '35%',
                                cursor: 'pointer',
                                zIndex: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: goNext,
                            style: {
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '35%',
                                cursor: 'pointer',
                                zIndex: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '8px 12px 14px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '0 4px'
                            },
                            children: QUICK_REACTIONS.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSendReactionOrReply(emoji),
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        fontSize: 24,
                                        cursor: 'pointer',
                                        transition: 'transform 0.15s ease'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.3)',
                                    onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                    children: emoji
                                }, emoji, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                    placeholder: "Gửi tin nhắn phản hồi...",
                                    value: replyText,
                                    onChange: (e)=>setReplyText(e.target.value),
                                    onPressEnter: ()=>handleSendReactionOrReply(replyText),
                                    style: {
                                        borderRadius: 20,
                                        background: 'rgba(255,255,255,0.18)',
                                        borderColor: 'transparent',
                                        color: '#fff'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleSendReactionOrReply(replyText),
                                    disabled: !replyText.trim() || isSendingReply,
                                    style: {
                                        background: replyText.trim() ? '#6366f1' : 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        width: 34,
                                        height: 34,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: replyText.trim() ? 'pointer' : 'default'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__["SendOutlined"], {
                                        style: {
                                            fontSize: 13
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
                    lineNumber: 274,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StoryViewerModal, "ekXoRJ0a1n4Fs/KBnKZOzPVtix8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteStory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoryViewers"]
    ];
});
_c = StoryViewerModal;
const iconButtonStyle = {
    background: 'rgba(255,255,255,0.15)',
    border: 'none',
    color: '#fff',
    borderRadius: 16,
    padding: '4px 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13
};
const __TURBOPACK__default__export__ = StoryViewerModal;
var _c;
__turbopack_context__.k.register(_c, "StoryViewerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript) <export default as PlusOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useStories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$CreateStoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/CreateStoryModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$StoryViewerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/StoryViewerModal.tsx [app-client] (ecmascript)");
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
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const StoryBar = ({ currentUser })=>{
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoryFeed"])();
    const [createOpen, setCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewingUserId, setViewingUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const feed = data?.data.feed ?? [];
    const ownGroup = feed.find((g)=>g.userId === currentUser?._id);
    const friendGroups = feed.filter((g)=>g.userId !== currentUser?._id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            padding: '12px 16px 4px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    cursor: 'pointer'
                },
                onClick: ()=>ownGroup ? setViewingUserId(currentUser._id) : setCreateOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                        count: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setCreateOpen(true);
                            },
                            style: {
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                background: '#5b5bf6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                border: '2px solid #fff',
                                cursor: 'pointer'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__["PlusOutlined"], {
                                style: {
                                    fontSize: 10
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        offset: [
                            -4,
                            40
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 52,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                                lineNumber: 61,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            src: currentUser?.avatar || undefined,
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(currentUser?._id || 'me'),
                                border: ownGroup?.hasUnviewed ? '2px solid #5b5bf6' : '2px solid transparent'
                            },
                            children: currentUser ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(currentUser.username) : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        style: {
                            fontSize: 11
                        },
                        children: "Story của bạn"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            friendGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        cursor: 'pointer'
                    },
                    onClick: ()=>setViewingUserId(group.userId),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 52,
                            src: group.user.avatar || undefined,
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(group.userId),
                                border: group.hasUnviewed ? '2px solid #5b5bf6' : '2px solid #d9d9e3'
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(group.user.username)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                fontSize: 11,
                                maxWidth: 60
                            },
                            ellipsis: true,
                            children: group.user.username
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, group.userId, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$CreateStoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: createOpen,
                onClose: ()=>setCreateOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$StoryViewerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: !!viewingUserId,
                onClose: ()=>setViewingUserId(null),
                userId: viewingUserId || '',
                currentUserId: currentUser?._id
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StoryBar, "iz5dZ9wUi0lemCy2CXpsjwE8uRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useStories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoryFeed"]
    ];
});
_c = StoryBar;
const __TURBOPACK__default__export__ = StoryBar;
var _c;
__turbopack_context__.k.register(_c, "StoryBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript) <export default as theme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript) <export default as SearchOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript) <export default as SettingOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StopOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/StopOutlined.js [app-client] (ecmascript) <export default as StopOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js [app-client] (ecmascript) <export default as LogoutOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MoreOutlined.js [app-client] (ecmascript) <export default as MoreOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UsergroupAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsergroupAddOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UsergroupAddOutlined.js [app-client] (ecmascript) <export default as UsergroupAddOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserAddOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserAddOutlined.js [app-client] (ecmascript) <export default as UserAddOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DashboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/DashboardOutlined.js [app-client] (ecmascript) <export default as DashboardOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SunOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SunOutlined.js [app-client] (ecmascript) <export default as SunOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoonOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MoonOutlined.js [app-client] (ecmascript) <export default as MoonOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useThemeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ConversationsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/ConversationsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$CreateGroupModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/CreateGroupModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$AddFriendModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/AddFriendModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$FriendRequestsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/FriendRequestsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/NotificationBell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$StoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/StoryBar.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const { Text, Title } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const Sidebar = ({ currentUser, contacts, loading, searchValue, onSearchChange, selectedConversationId, onSelectConversation, onSelectContact, contactActionLoadingId, onOpenProfile, onOpenBlocked, onLogout, logoutLoading })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onlineStatusOverrides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "Sidebar.useChatStore[onlineStatusOverrides]": (s)=>s.onlineStatusOverrides
    }["Sidebar.useChatStore[onlineStatusOverrides]"]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('conversations');
    const [createGroupOpen, setCreateGroupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addFriendOpen, setAddFriendOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [friendRequestsOpen, setFriendRequestsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: incomingData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"])();
    const incomingCount = incomingData?.data.length ?? 0;
    const isAdmin = currentUser?.role === 'admin';
    const { isDarkMode, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"])();
    const menuItems = [
        {
            key: 'profile',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 92,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Hồ sơ cá nhân'
        },
        {
            key: 'theme',
            icon: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SunOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunOutlined$3e$__["SunOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 95,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoonOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonOutlined$3e$__["MoonOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 95,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)),
            label: isDarkMode ? 'Chuyển Chế độ Sáng' : 'Chuyển Chế độ Tối'
        },
        {
            key: 'friendRequests',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                count: incomingCount,
                size: "small",
                offset: [
                    8,
                    0
                ],
                children: "Lời mời kết bạn"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            key: 'blocked',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StopOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopOutlined$3e$__["StopOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 107,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Người dùng đã chặn'
        },
        ...isAdmin ? [
            {
                key: 'admin',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DashboardOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardOutlined$3e$__["DashboardOutlined"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                    lineNumber: 108,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0)),
                label: 'Quản trị hệ thống'
            }
        ] : [],
        {
            type: 'divider'
        },
        {
            key: 'logout',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LogoutOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutOutlined$3e$__["LogoutOutlined"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 110,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            label: 'Đăng xuất',
            danger: true
        }
    ];
    const handleMenuClick = (key)=>{
        if (key === 'profile') onOpenProfile();
        if (key === 'theme') toggleTheme();
        if (key === 'friendRequests') setFriendRequestsOpen(true);
        if (key === 'blocked') onOpenBlocked();
        if (key === 'admin') router.push('/admin');
        if (key === 'logout') onLogout();
    };
    const handleGroupCreated = (conversationId)=>{
        onSelectConversation(conversationId);
        setActiveTab('conversations');
    };
    const { token } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full flex-col md:w-85 md:min-w-85",
        style: {
            background: token.colorBgContainer,
            borderRight: `1px solid ${token.colorBorder}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    borderBottom: `1px solid ${token.colorBorderSecondary}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                        size: 44,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                            lineNumber: 148,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        src: currentUser?.avatar || undefined,
                        style: {
                            backgroundColor: currentUser ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(currentUser._id) : '#5b5bf6'
                        },
                        children: currentUser ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(currentUser.username) : undefined
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 5,
                                style: {
                                    margin: 0
                                },
                                ellipsis: true,
                                children: currentUser?.username || 'Đang tải...'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                type: "success",
                                style: {
                                    fontSize: 12
                                },
                                children: "● Đang hoạt động"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$NotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                        menu: {
                            items: menuItems,
                            onClick: ({ key })=>handleMenuClick(key)
                        },
                        trigger: [
                            'click'
                        ],
                        disabled: logoutLoading,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "text",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__["MoreOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                lineNumber: 168,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            loading: logoutLoading
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$StoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                activeKey: activeTab,
                onChange: (key)=>setActiveTab(key),
                style: {
                    padding: '0 16px'
                },
                tabBarExtraContent: activeTab === 'conversations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "text",
                    size: "small",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UsergroupAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsergroupAddOutlined$3e$__["UsergroupAddOutlined"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    onClick: ()=>setCreateGroupOpen(true),
                    title: "Tạo nhóm chat"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                    lineNumber: 180,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "text",
                    size: "small",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserAddOutlined$3e$__["UserAddOutlined"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 191,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    onClick: ()=>setAddFriendOpen(true),
                    title: "Thêm bạn"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                    lineNumber: 188,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                items: [
                    {
                        key: 'conversations',
                        label: 'Trò chuyện'
                    },
                    {
                        key: 'contacts',
                        label: 'Danh bạ'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeTab === 'contacts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '0 16px 14px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                    prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__["SearchOutlined"], {
                        style: {
                            color: '#9a9ab0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 206,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    placeholder: "Tìm kiếm người dùng...",
                    variant: "filled",
                    allowClear: true,
                    value: searchValue,
                    onChange: (e)=>onSearchChange(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 8px 12px'
                },
                children: [
                    activeTab === 'conversations' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ConversationsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedConversationId: selectedConversationId,
                        onSelect: onSelectConversation,
                        currentUserId: currentUser?._id
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'contacts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '8px 12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                        avatar: true,
                                        paragraph: {
                                            rows: 1
                                        },
                                        active: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                        avatar: true,
                                        paragraph: {
                                            rows: 1
                                        },
                                        active: true,
                                        style: {
                                            marginTop: 16
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                        avatar: true,
                                        paragraph: {
                                            rows: 1
                                        },
                                        active: true,
                                        style: {
                                            marginTop: 16
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            !loading && contacts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                                description: searchValue ? 'Không tìm thấy bạn bè nào phù hợp' : 'Bạn chưa có bạn bè nào. Nhấn nút thêm bạn để bắt đầu!',
                                style: {
                                    marginTop: 60
                                },
                                image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            !loading && contacts.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelectContact(user),
                                    className: "chat-list-item",
                                    style: {
                                        padding: '10px 12px',
                                        borderRadius: 12,
                                        cursor: 'pointer',
                                        background: 'transparent',
                                        transition: 'background 0.2s',
                                        marginBottom: 2,
                                        opacity: contactActionLoadingId === user._id ? 0.6 : 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                        gap: 12,
                                        align: "center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                                dot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePresence"])(onlineStatusOverrides, user._id, user.status) === 'online',
                                                color: "green",
                                                offset: [
                                                    -4,
                                                    36
                                                ],
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                    size: 44,
                                                    src: user.avatar || undefined,
                                                    style: {
                                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(user._id)
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(user.username)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                                vertical: true,
                                                flex: 1,
                                                style: {
                                                    minWidth: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                        strong: true,
                                                        ellipsis: true,
                                                        children: user.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                        type: "secondary",
                                                        ellipsis: true,
                                                        style: {
                                                            fontSize: 12
                                                        },
                                                        children: user.bio || user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            contactActionLoadingId === user._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                                                size: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                                lineNumber: 287,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, user._id, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                                    lineNumber: 249,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$CreateGroupModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: createGroupOpen,
                onClose: ()=>setCreateGroupOpen(false),
                onCreated: handleGroupCreated
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$AddFriendModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: addFriendOpen,
                onClose: ()=>setAddFriendOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$FriendRequestsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: friendRequestsOpen,
                onClose: ()=>setFriendRequestsOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "Xl/PB/y/Mu7S4gK3Bz68QXklvfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIncomingFriendRequests"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useThemeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/call.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callService",
    ()=>callService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const callService = {
    getActiveCall: async (conversationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/${conversationId}/active-call`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useCalls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveCall",
    ()=>useActiveCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$call$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/call.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useActiveCall(conversationId) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'calls',
            'active',
            conversationId
        ],
        queryFn: {
            "useActiveCall.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$call$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callService"].getActiveCall(conversationId)
        }["useActiveCall.useQuery"],
        enabled: !!conversationId,
        refetchInterval: 15000
    });
}
_s(useActiveCall, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/attachment.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachmentService",
    ()=>attachmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const attachmentService = {
    listByConversation: async (conversationId, params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/conversations/${conversationId}/attachments`, {
            params
        });
    },
    uploadFiles: async (files)=>{
        const formData = new FormData();
        files.forEach((file)=>formData.append('files', file));
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getAttachment: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/attachments/${id}`);
    },
    deleteAttachment: async (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/attachments/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript) <export default as SearchOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserDeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserDeleteOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserDeleteOutlined.js [app-client] (ecmascript) <export default as UserDeleteOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserAddOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserAddOutlined.js [app-client] (ecmascript) <export default as UserAddOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CopyOutlined.js [app-client] (ecmascript) <export default as CopyOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [app-client] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useDebouncedValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)");
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
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const GroupSettingsModal = ({ open, onClose, conversationId, conversationName, inviteCode, members, currentUserId })=>{
    _s();
    const { modal } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(conversationName || '');
    const [memberQuery, setMemberQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"])(memberQuery, 350);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupSettingsModal.useEffect": ()=>{
            if (open) setName(conversationName || '');
        }
    }["GroupSettingsModal.useEffect"], [
        open,
        conversationName
    ]);
    const { data: searchData, isLoading: searchLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"])({
        q: debouncedQuery,
        page: 1,
        pageSize: 30
    });
    const memberIds = new Set(members.map((m)=>m.userId._id));
    const searchResults = (searchData?.data.items ?? []).filter((u)=>!memberIds.has(u._id));
    const currentMembership = members.find((m)=>m.userId._id === currentUserId);
    const isAdmin = currentMembership?.role === 'admin';
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateConversation"])(conversationId);
    const addMembersMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddMembers"])(conversationId);
    const removeMemberMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemoveMember"])(conversationId);
    const generateInviteCodeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGenerateInviteCode"])(conversationId);
    const inviteLink = inviteCode && ("TURBOPACK compile-time value", "object") !== 'undefined' ? `${window.location.origin}/join/${inviteCode}` : '';
    const handleApiError = (err, fallback)=>{
        const axiosErr = err;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || fallback);
    };
    const handleSaveName = ()=>{
        const trimmed = name.trim();
        if (!trimmed || trimmed === conversationName) return;
        updateMutation.mutate({
            name: trimmed
        }, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã cập nhật tên nhóm!'),
            onError: (err)=>handleApiError(err, 'Cập nhật tên nhóm thất bại!')
        });
    };
    const handleAddMember = (userId)=>{
        addMembersMutation.mutate([
            userId
        ], {
            onSuccess: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã thêm thành viên!');
                setMemberQuery('');
            },
            onError: (err)=>handleApiError(err, 'Thêm thành viên thất bại!')
        });
    };
    const handleGenerateInviteCode = ()=>{
        generateInviteCodeMutation.mutate(undefined, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã tạo mã mời mới!'),
            onError: (err)=>handleApiError(err, 'Tạo mã mời thất bại!')
        });
    };
    const handleCopyInviteLink = async ()=>{
        if (!inviteLink) return;
        await navigator.clipboard.writeText(inviteLink);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã sao chép liên kết mời!');
    };
    const handleRemoveMember = (member)=>{
        modal.confirm({
            title: 'Xóa thành viên',
            content: `Bạn có chắc chắn muốn xóa "${member.userId.username}" khỏi nhóm?`,
            okText: 'Xóa',
            okButtonProps: {
                danger: true
            },
            cancelText: 'Hủy',
            onOk: ()=>{
                removeMemberMutation.mutate(member.userId._id, {
                    onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã xóa thành viên!'),
                    onError: (err)=>handleApiError(err, 'Xóa thành viên thất bại!')
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Quản lý nhóm",
        open: open,
        onCancel: onClose,
        footer: null,
        width: isMobile ? '92%' : 480,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        type: "secondary",
                        style: {
                            fontSize: 12
                        },
                        children: "Tên nhóm"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            marginTop: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                value: name,
                                disabled: !isAdmin,
                                onChange: (e)=>setName(e.target.value),
                                onPressEnter: handleSaveName
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                loading: updateMutation.isPending,
                                disabled: !name.trim() || name.trim() === conversationName,
                                onClick: handleSaveName,
                                children: "Lưu"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        type: "secondary",
                        style: {
                            fontSize: 12
                        },
                        children: [
                            "Thành viên (",
                            members.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8,
                            maxHeight: 220,
                            overflowY: 'auto'
                        },
                        children: members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                align: "center",
                                gap: 10,
                                style: {
                                    padding: '6px 4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                        size: 36,
                                        src: member.userId.avatar || undefined,
                                        style: {
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(member.userId._id)
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(member.userId.username)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                        vertical: true,
                                        flex: 1,
                                        style: {
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                ellipsis: true,
                                                children: [
                                                    member.userId.username,
                                                    member.userId._id === currentUserId && ' (Bạn)'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            member.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                color: "blue",
                                                children: "Quản trị viên"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                                lineNumber: 188,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAdmin && member.userId._id !== currentUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "text",
                                        danger: true,
                                        size: "small",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserDeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserDeleteOutlined$3e$__["UserDeleteOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        loading: removeMemberMutation.isPending && removeMemberMutation.variables === member.userId._id,
                                        onClick: ()=>handleRemoveMember(member)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, member._id, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        type: "secondary",
                        style: {
                            fontSize: 12
                        },
                        children: "Mời qua QR / liên kết"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                        vertical: true,
                        align: "center",
                        gap: 10,
                        style: {
                            marginTop: 8
                        },
                        children: inviteCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: 8,
                                        background: '#fff',
                                        borderRadius: 8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                        value: inviteLink,
                                        size: 160
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                        lineNumber: 217,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                    gap: 8,
                                    style: {
                                        width: '100%'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                            value: inviteLink,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CopyOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyOutlined$3e$__["CopyOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                                lineNumber: 221,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            onClick: handleCopyInviteLink
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                                lineNumber: 223,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            loading: generateInviteCodeMutation.isPending,
                                            onClick: handleGenerateInviteCode
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            loading: generateInviteCodeMutation.isPending,
                            onClick: handleGenerateInviteCode,
                            children: "Tạo mã mời"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                            lineNumber: 230,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        type: "secondary",
                        style: {
                            fontSize: 12
                        },
                        children: "Thêm thành viên"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                        prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__["SearchOutlined"], {
                            style: {
                                color: '#9a9ab0'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        placeholder: "Tìm kiếm người dùng...",
                        variant: "filled",
                        allowClear: true,
                        value: memberQuery,
                        onChange: (e)=>setMemberQuery(e.target.value),
                        style: {
                            marginTop: 4,
                            marginBottom: 8
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: 200,
                            overflowY: 'auto'
                        },
                        children: [
                            searchLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                                avatar: true,
                                paragraph: {
                                    rows: 1
                                },
                                active: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                lineNumber: 256,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)),
                            !searchLoading && debouncedQuery && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                                description: "Không tìm thấy bạn bè nào phù hợp",
                                image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            !searchLoading && searchResults.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        padding: '6px 4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                            size: 32,
                                            src: user.avatar || undefined,
                                            style: {
                                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(user._id)
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(user.username)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            style: {
                                                flex: 1
                                            },
                                            children: user.username
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserAddOutlined$3e$__["UserAddOutlined"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                                lineNumber: 284,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            loading: addMembersMutation.isPending && addMembersMutation.variables?.[0] === user._id,
                                            onClick: ()=>handleAddMember(user._id)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, user._id, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GroupSettingsModal, "yrv7PS7bcMseU9UhjzWR10/ep4I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateConversation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddMembers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemoveMember"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGenerateInviteCode"]
    ];
});
_c = GroupSettingsModal;
const __TURBOPACK__default__export__ = GroupSettingsModal;
var _c;
__turbopack_context__.k.register(_c, "GroupSettingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hook/useAttachments.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConversationAttachments",
    ()=>useConversationAttachments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/attachment.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useConversationAttachments(conversationId, type) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            'conversations',
            conversationId,
            'attachments',
            type
        ],
        queryFn: {
            "useConversationAttachments.useInfiniteQuery": ({ pageParam })=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentService"].listByConversation(conversationId, {
                    type,
                    cursor: pageParam,
                    limit: 30
                })
        }["useConversationAttachments.useInfiniteQuery"],
        initialPageParam: undefined,
        getNextPageParam: {
            "useConversationAttachments.useInfiniteQuery": (lastPage)=>lastPage.data.nextCursor ?? undefined
        }["useConversationAttachments.useInfiniteQuery"],
        enabled: !!conversationId
    });
}
_s(useConversationAttachments, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/index.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/index.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/FileOutlined.js [app-client] (ecmascript) <export default as FileOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAttachments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useAttachments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const formatFileSize = (bytes)=>{
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};
const MediaGrid = ({ conversationId, type })=>{
    _s();
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAttachments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationAttachments"])(conversationId, type);
    const items = data?.pages.flatMap((page)=>page.data.items) ?? [];
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
            active: true,
            paragraph: {
                rows: 4
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
            lineNumber: 38,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
            description: "Chưa có nội dung nào",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
            lineNumber: 42,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (type === 'file') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                items.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: attachment.url,
                        download: attachment.fileName,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            padding: '8px 4px',
                            color: 'inherit'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileOutlined$3e$__["FileOutlined"], {
                                style: {
                                    fontSize: 20,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minWidth: 0,
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        ellipsis: true,
                                        style: {
                                            display: 'block'
                                        },
                                        children: attachment.fileName
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        type: "secondary",
                                        style: {
                                            fontSize: 12
                                        },
                                        children: formatFileSize(attachment.size)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, attachment._id, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    block: true,
                    loading: isFetchingNextPage,
                    onClick: ()=>fetchNextPage(),
                    children: "Tải thêm"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"].PreviewGroup, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 8
                    },
                    children: items.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            src: attachment.thumbnailUrl || attachment.url,
                            preview: {
                                src: attachment.url
                            },
                            alt: attachment.fileName,
                            style: {
                                width: '100%',
                                height: 100,
                                objectFit: 'cover',
                                borderRadius: 8
                            }
                        }, attachment._id, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                block: true,
                style: {
                    marginTop: 12
                },
                loading: isFetchingNextPage,
                onClick: ()=>fetchNextPage(),
                children: "Tải thêm"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MediaGrid, "kBD3Z3q5vRkDa2TvyY1qA2hKRow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAttachments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationAttachments"]
    ];
});
_c = MediaGrid;
const MediaCenterDrawer = ({ open, onClose, conversationId })=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('image');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
        title: "Kho lưu trữ",
        open: open,
        onClose: onClose,
        size: isMobile ? '92%' : 400,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                activeKey: activeTab,
                onChange: (key)=>setActiveTab(key),
                items: [
                    {
                        key: 'image',
                        label: 'Ảnh'
                    },
                    {
                        key: 'video',
                        label: 'Video'
                    },
                    {
                        key: 'file',
                        label: 'Tệp'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGrid, {
                conversationId: conversationId,
                type: activeTab
            }, activeTab, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
                lineNumber: 125,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MediaCenterDrawer, "ETY+L/sQkz2tifwBvxpb74pERmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = MediaCenterDrawer;
const __TURBOPACK__default__export__ = MediaCenterDrawer;
var _c, _c1;
__turbopack_context__.k.register(_c, "MediaGrid");
__turbopack_context__.k.register(_c1, "MediaCenterDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/alert/index.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/dropdown/index.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/image/index.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/popover/index.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/theme/index.js [app-client] (ecmascript) <export default as theme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SendOutlined.js [app-client] (ecmascript) <export default as SendOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SmileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmileOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SmileOutlined.js [app-client] (ecmascript) <export default as SmileOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MoreOutlined.js [app-client] (ecmascript) <export default as MoreOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StopOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/StopOutlined.js [app-client] (ecmascript) <export default as StopOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript) <export default as SettingOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [app-client] (ecmascript) <export default as ArrowLeftOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js [app-client] (ecmascript) <export default as PaperClipOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/FileOutlined.js [app-client] (ecmascript) <export default as FileOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseCircleFilled$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript) <export default as CloseCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PhoneOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PhoneOutlined.js [app-client] (ecmascript) <export default as PhoneOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$VideoCameraOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js [app-client] (ecmascript) <export default as VideoCameraOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PictureOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/PictureOutlined.js [app-client] (ecmascript) <export default as PictureOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RollbackOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RollbackOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/RollbackOutlined.js [app-client] (ecmascript) <export default as RollbackOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/SocketProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useCallStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/CallProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useCalls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/attachment.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$GroupSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/GroupSettingsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$MediaCenterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/MediaCenterDrawer.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
const TYPING_STOP_DELAY_MS = 2500;
const { Text, Title } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const formatMessageTime = (isoDate)=>new Date(isoDate).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    });
const isSameDay = (a, b)=>{
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
};
const formatDateSeparator = (isoDate)=>{
    const date = new Date(isoDate);
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (isSameDay(isoDate, now.toISOString())) return 'Hôm nay';
    if (isSameDay(isoDate, yesterday.toISOString())) return 'Hôm qua';
    return date.toLocaleDateString('vi-VN', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatFileSize = (bytes)=>{
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};
const ACCEPTED_FILE_TYPES = 'image/png,image/jpeg,image/webp,application/pdf,.docx,.xlsx,application/zip';
const MAX_FILES_PER_MESSAGE = 10;
const AttachmentPreview = ({ attachment })=>{
    const isImage = attachment.mimeType.startsWith('image/');
    if (isImage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            src: attachment.thumbnailUrl || attachment.url,
            preview: {
                src: attachment.url
            },
            alt: attachment.fileName,
            style: {
                maxWidth: 240,
                maxHeight: 240,
                borderRadius: 12,
                display: 'block'
            },
            styles: {
                root: {
                    borderRadius: 12,
                    overflow: 'hidden'
                }
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: attachment.url,
        download: attachment.fileName,
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            borderRadius: 10,
            background: 'rgba(0,0,0,0.04)',
            color: 'inherit',
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileOutlined$3e$__["FileOutlined"], {
                style: {
                    fontSize: 18,
                    flexShrink: 0
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        },
                        children: attachment.fileName
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            opacity: 0.7
                        },
                        children: formatFileSize(attachment.size)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AttachmentPreview;
const ChatWindow = ({ conversationId, currentUserId, messages, messagesLoading, onSend, sendLoading, isBlocked, onToggleBlock, blockActionLoading, isMobile, onBack })=>{
    _s();
    const { token } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [groupSettingsOpen, setGroupSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaCenterOpen, setMediaCenterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingAttachments, setPendingAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyResetKey, setReplyResetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(conversationId);
    const [hoveredMessageId, setHoveredMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emojiPickerOpen, setEmojiPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingStopTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevConversationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickToBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const { startTyping, stopTyping, markRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"])();
    const typingMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatWindow.useChatStore[typingMap]": (s)=>conversationId ? s.typingByConversation[conversationId] : undefined
    }["ChatWindow.useChatStore[typingMap]"]);
    const isOtherTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatWindow.useMemo[isOtherTyping]": ()=>Object.keys(typingMap || {}).some({
                "ChatWindow.useMemo[isOtherTyping]": (id)=>id !== currentUserId
            }["ChatWindow.useMemo[isOtherTyping]"])
    }["ChatWindow.useMemo[isOtherTyping]"], [
        typingMap,
        currentUserId
    ]);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationDetail"])(conversationId ?? '');
    const conversation = data?.data.conversation;
    const members = data?.data.members ?? [];
    const blockedByOther = data?.data.blockedByOther ?? false;
    const otherMember = conversation?.type === 'private' ? members.find((m)=>m.userId._id !== currentUserId)?.userId : null;
    const onlineStatusOverrides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatWindow.useChatStore[onlineStatusOverrides]": (s)=>s.onlineStatusOverrides
    }["ChatWindow.useChatStore[onlineStatusOverrides]"]);
    const otherMemberStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePresence"])(onlineStatusOverrides, otherMember?._id, otherMember?.status);
    const isGroup = conversation?.type === 'group';
    const displayName = isGroup ? conversation?.name || 'Nhóm chat' : otherMember?.username;
    const avatarUrl = isGroup ? conversation?.avatar : otherMember?.avatar;
    const canBlock = !isGroup && !!otherMember;
    const cannotSend = isBlocked || blockedByOther;
    const { startCall, joinOngoingCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    const callPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"])({
        "ChatWindow.useCallStore[callPhase]": (s)=>s.phase
    }["ChatWindow.useCallStore[callPhase]"]);
    const canStartCall = callPhase === 'idle';
    const { data: activeCallData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCall"])(conversation?._id);
    const activeCall = activeCallData?.data?.call;
    const isInActiveCall = !!activeCall?.participants.some((p)=>p.userId._id === currentUserId && p.status === 'accepted');
    const [joiningCall, setJoiningCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleJoinActiveCall = async ()=>{
        if (!conversation?._id) return;
        setJoiningCall(true);
        await joinOngoingCall(conversation._id);
        setJoiningCall(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (messagesLoading || isLoading) return;
            const el = messagesContainerRef.current;
            if (!el) return;
            const isNewConversation = prevConversationIdRef.current !== conversationId;
            prevConversationIdRef.current = conversationId;
            if (isNewConversation) {
                stickToBottomRef.current = true;
                el.scrollTop = el.scrollHeight;
            } else if (stickToBottomRef.current) {
                el.scrollTo({
                    top: el.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }["ChatWindow.useEffect"], [
        messages.length,
        messagesLoading,
        isLoading,
        conversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (isLoading) return;
            const contentEl = messagesContentRef.current;
            const containerEl = messagesContainerRef.current;
            if (!contentEl || !containerEl) return;
            const observer = new ResizeObserver({
                "ChatWindow.useEffect": ()=>{
                    if (stickToBottomRef.current) {
                        containerEl.scrollTop = containerEl.scrollHeight;
                    }
                }
            }["ChatWindow.useEffect"]);
            observer.observe(contentEl);
            return ({
                "ChatWindow.useEffect": ()=>observer.disconnect()
            })["ChatWindow.useEffect"];
        }
    }["ChatWindow.useEffect"], [
        conversationId,
        isLoading
    ]);
    const handleMessagesScroll = ()=>{
        const el = messagesContainerRef.current;
        if (!el) return;
        const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
        stickToBottomRef.current = distanceFromBottom < 80;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (!conversationId || isLoading || cannotSend) return;
            messageInputRef.current?.focus();
        }
    }["ChatWindow.useEffect"], [
        conversationId,
        isLoading,
        cannotSend
    ]);
    // Reset the reply target when switching conversations. Adjusting state during
    // render (instead of in an effect) avoids an extra render pass.
    if (replyResetKey !== conversationId) {
        setReplyResetKey(conversationId);
        setReplyingTo(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (!conversationId || messages.length === 0) return;
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.status === 'sending' || lastMessage.status === 'failed') return;
            markRead(conversationId, lastMessage._id);
        }
    }["ChatWindow.useEffect"], [
        conversationId,
        messages,
        markRead
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            return ({
                "ChatWindow.useEffect": ()=>{
                    if (typingStopTimerRef.current) clearTimeout(typingStopTimerRef.current);
                    if (conversationId) stopTyping(conversationId);
                }
            })["ChatWindow.useEffect"];
        }
    }["ChatWindow.useEffect"], [
        conversationId,
        stopTyping
    ]);
    const handleDraftChange = (value)=>{
        setDraft(value);
        if (!conversationId) return;
        startTyping(conversationId);
        if (typingStopTimerRef.current) clearTimeout(typingStopTimerRef.current);
        typingStopTimerRef.current = setTimeout(()=>{
            stopTyping(conversationId);
        }, TYPING_STOP_DELAY_MS);
    };
    const handlePickFile = ()=>{
        fileInputRef.current?.click();
    };
    const handleFileChange = async (e)=>{
        const files = Array.from(e.target.files ?? []);
        e.target.value = '';
        if (files.length === 0) return;
        if (files.length > MAX_FILES_PER_MESSAGE) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(`Chỉ được chọn tối đa ${MAX_FILES_PER_MESSAGE} tệp mỗi lần!`);
            return;
        }
        setUploading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentService"].uploadFiles(files);
            setPendingAttachments((prev)=>[
                    ...prev,
                    ...res.data.attachments
                ]);
        } catch (error) {
            const axiosErr = error;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msg"].error(axiosErr.response?.data?.message || 'Tải tệp lên thất bại!');
        } finally{
            setUploading(false);
        }
    };
    const handleRemovePendingAttachment = (id)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentService"].deleteAttachment(id).catch(()=>{});
        setPendingAttachments((prev)=>prev.filter((a)=>a._id !== id));
    };
    const handleEmojiClick = (emojiData)=>{
        const inputEl = messageInputRef.current?.input;
        const start = inputEl?.selectionStart ?? draft.length;
        const end = inputEl?.selectionEnd ?? draft.length;
        const nextDraft = draft.slice(0, start) + emojiData.emoji + draft.slice(end);
        handleDraftChange(nextDraft);
        requestAnimationFrame(()=>{
            const pos = start + emojiData.emoji.length;
            inputEl?.focus();
            inputEl?.setSelectionRange(pos, pos);
        });
    };
    if (!conversationId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: token.colorBgLayout
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                image: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {
                    style: {
                        fontSize: 64,
                        color: '#c6c9e8'
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                    lineNumber: 368,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                    type: "secondary",
                    children: "Chọn một cuộc trò chuyện ở danh sách bên trái để bắt đầu nhắn tin"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                    lineNumber: 370,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 367,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
            lineNumber: 358,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isLoading || !conversation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                background: token.colorBgLayout,
                padding: 24
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                avatar: true,
                paragraph: {
                    rows: 1
                },
                active: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
            lineNumber: 381,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const handleSend = ()=>{
        if (!draft.trim() && pendingAttachments.length === 0 || cannotSend || uploading) return;
        const messageType = pendingAttachments.length > 0 ? pendingAttachments.every((a)=>a.mimeType.startsWith('image/')) ? 'image' : 'file' : undefined;
        onSend(draft, pendingAttachments.length > 0 ? pendingAttachments.map((a)=>a._id) : undefined, messageType, replyingTo?._id);
        setDraft('');
        setPendingAttachments([]);
        setReplyingTo(null);
        if (typingStopTimerRef.current) clearTimeout(typingStopTimerRef.current);
        if (conversationId) stopTyping(conversationId);
        stickToBottomRef.current = true;
        messageInputRef.current?.focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: token.colorBgLayout
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center justify-between px-3 md:h-18 md:px-6",
                style: {
                    background: token.colorBgContainer,
                    borderBottom: `1px solid ${token.colorBorder}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            minWidth: 0,
                            flex: 1
                        },
                        children: [
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "text",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__["ArrowLeftOutlined"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 425,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                onClick: onBack,
                                style: {
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: 40,
                                src: avatarUrl || undefined,
                                icon: isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 433,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : undefined,
                                style: {
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(conversation._id),
                                    flexShrink: 0
                                },
                                children: !isGroup && displayName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(displayName) : undefined
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                        level: 5,
                                        style: {
                                            margin: 0
                                        },
                                        ellipsis: true,
                                        children: displayName || 'Người dùng'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isOtherTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        type: "secondary",
                                        style: {
                                            fontSize: 12,
                                            fontStyle: 'italic'
                                        },
                                        children: "Đang nhập..."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        type: "secondary",
                                        style: {
                                            fontSize: 12
                                        },
                                        children: [
                                            members.length,
                                            " thành viên"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        type: otherMemberStatus === 'online' ? 'success' : 'secondary',
                                        style: {
                                            fontSize: 12
                                        },
                                        children: otherMemberStatus === 'online' ? '● Đang hoạt động' : 'Ngoại tuyến'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "text",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PhoneOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutlined$3e$__["PhoneOutlined"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                            lineNumber: 462,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        disabled: !canStartCall,
                        onClick: ()=>conversation && startCall(conversation._id, 'audio')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "text",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$VideoCameraOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraOutlined$3e$__["VideoCameraOutlined"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                            lineNumber: 468,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        disabled: !canStartCall,
                        onClick: ()=>conversation && startCall(conversation._id, 'video')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "text",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PictureOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PictureOutlined$3e$__["PictureOutlined"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                            lineNumber: 472,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)),
                        onClick: ()=>setMediaCenterOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    canBlock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                        menu: {
                            items: [
                                {
                                    key: 'block',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StopOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopOutlined$3e$__["StopOutlined"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    danger: !isBlocked,
                                    label: isBlocked ? 'Bỏ chặn người dùng' : 'Chặn người dùng'
                                }
                            ],
                            onClick: onToggleBlock
                        },
                        trigger: [
                            'click'
                        ],
                        disabled: blockActionLoading,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "text",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__["MoreOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 489,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            loading: blockActionLoading
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                        menu: {
                            items: [
                                {
                                    key: 'group-settings',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 498,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label: 'Quản lý nhóm'
                                }
                            ],
                            onClick: ()=>setGroupSettingsOpen(true)
                        },
                        trigger: [
                            'click'
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "text",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoreOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreOutlined$3e$__["MoreOutlined"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 506,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isBlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                type: "warning",
                showIcon: true,
                banner: true,
                title: "Bạn đã chặn người dùng này. Bỏ chặn để có thể tiếp tục nhắn tin."
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 512,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isBlocked && blockedByOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                type: "warning",
                showIcon: true,
                banner: true,
                title: "Người dùng này đã chặn bạn. Bạn không thể nhắn tin cho họ."
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 521,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeCall && !isInActiveCall && callPhase === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$alert$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                type: "info",
                showIcon: true,
                banner: true,
                icon: activeCall.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$VideoCameraOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoCameraOutlined$3e$__["VideoCameraOutlined"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                    lineNumber: 534,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PhoneOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutlined$3e$__["PhoneOutlined"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                    lineNumber: 534,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                title: isGroup ? 'Cuộc gọi nhóm đang diễn ra' : 'Cuộc gọi đang diễn ra',
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    size: "small",
                    type: "primary",
                    loading: joiningCall,
                    onClick: handleJoinActiveCall,
                    children: "Tham gia"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                    lineNumber: 537,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 530,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: messagesContainerRef,
                onScroll: handleMessagesScroll,
                className: "overflow-y-auto flex-1 p-4 md:p-6",
                children: [
                    messagesLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                        paragraph: {
                            rows: 4
                        },
                        active: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 554,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    !messagesLoading && messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                        description: "Chưa có tin nhắn nào. Hãy gửi lời chào đầu tiên!",
                        image: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"].PRESENTED_IMAGE_SIMPLE,
                        style: {
                            marginTop: 40
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 556,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesContentRef,
                        children: !messagesLoading && messages.map((msg, index)=>{
                            const mine = msg.senderId._id === currentUserId;
                            const showSenderInfo = isGroup && !mine;
                            const prevMessage = messages[index - 1];
                            const showDateSeparator = !prevMessage || !isSameDay(prevMessage.createdAt, msg.createdAt);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    showDateSeparator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '16px 0'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            type: "secondary",
                                            style: {
                                                fontSize: 12,
                                                background: token.colorBgTextHover,
                                                padding: '4px 12px',
                                                borderRadius: 12
                                            },
                                            children: formatDateSeparator(msg.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                            lineNumber: 580,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 573,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    msg.type === 'system' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '8px 0'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            type: "secondary",
                                            style: {
                                                fontSize: 12,
                                                background: token.colorBgTextHover,
                                                padding: '4px 12px',
                                                borderRadius: 12,
                                                textAlign: 'center'
                                            },
                                            children: msg.content
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                            lineNumber: 595,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 594,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: mine ? 'flex-end' : 'flex-start',
                                            marginBottom: 16
                                        },
                                        children: [
                                            showSenderInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                style: {
                                                    fontSize: 12,
                                                    marginBottom: 2,
                                                    marginLeft: 36
                                                },
                                                children: msg.senderId.username
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                lineNumber: 618,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-[85%] sm:max-w-[70%]",
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'flex-end',
                                                    gap: 4,
                                                    minWidth: 0,
                                                    flexDirection: mine ? 'row-reverse' : 'row'
                                                },
                                                onMouseEnter: ()=>setHoveredMessageId(msg._id),
                                                onMouseLeave: ()=>setHoveredMessageId((id)=>id === msg._id ? null : id),
                                                children: [
                                                    showSenderInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                        size: 28,
                                                        src: msg.senderId.avatar || undefined,
                                                        style: {
                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(msg.senderId._id),
                                                            flexShrink: 0
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(msg.senderId.username)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0,
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 6,
                                                            padding: !msg.isDeleted && msg.attachmentIds?.length && !msg.content ? 4 : '10px 16px',
                                                            borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                                            background: mine ? '#5b5bf6' : token.colorBgContainer,
                                                            color: mine ? '#fff' : token.colorText,
                                                            boxShadow: '0 2px 6px rgba(20,20,60,0.06)',
                                                            wordBreak: 'break-word',
                                                            fontStyle: msg.isDeleted ? 'italic' : 'normal'
                                                        },
                                                        children: msg.isDeleted ? 'Tin nhắn đã được thu hồi' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                msg.replyToMessageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        borderLeft: `3px solid ${mine ? 'rgba(255,255,255,0.6)' : '#5b5bf6'}`,
                                                                        background: mine ? 'rgba(255,255,255,0.12)' : 'rgba(91,91,246,0.06)',
                                                                        borderRadius: 6,
                                                                        padding: '4px 8px',
                                                                        marginBottom: 2
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                                            strong: true,
                                                                            style: {
                                                                                fontSize: 11,
                                                                                display: 'block',
                                                                                color: mine ? 'rgba(255,255,255,0.85)' : '#5b5bf6'
                                                                            },
                                                                            children: msg.replyToMessageId.senderId.username
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                                            lineNumber: 682,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                                            ellipsis: true,
                                                                            style: {
                                                                                fontSize: 12,
                                                                                display: 'block',
                                                                                color: mine ? 'rgba(255,255,255,0.75)' : token.colorTextSecondary,
                                                                                fontStyle: msg.replyToMessageId.isDeleted ? 'italic' : 'normal'
                                                                            },
                                                                            children: msg.replyToMessageId.isDeleted ? 'Tin nhắn đã được thu hồi' : msg.replyToMessageId.content || 'Tệp đính kèm'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                                            lineNumber: 692,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                msg.attachmentIds?.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttachmentPreview, {
                                                                        attachment: attachment
                                                                    }, attachment._id, false, {
                                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                                        lineNumber: 712,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                                msg.content
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                        lineNumber: 648,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !msg.isDeleted && hoveredMessageId === msg._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                        type: "text",
                                                        size: "small",
                                                        shape: "circle",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RollbackOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RollbackOutlined$3e$__["RollbackOutlined"], {
                                                            style: {
                                                                fontSize: 14
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 35
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        onClick: ()=>{
                                                            setReplyingTo(msg);
                                                            messageInputRef.current?.focus();
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                lineNumber: 625,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: msg.status === 'failed' ? 'danger' : 'secondary',
                                                style: {
                                                    fontSize: 11,
                                                    marginTop: 4,
                                                    marginLeft: showSenderInfo ? 36 : 0
                                                },
                                                children: [
                                                    msg.status === 'sending' && 'Đang gửi...',
                                                    msg.status === 'failed' && 'Gửi thất bại',
                                                    (!msg.status || msg.status === 'sent') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            formatMessageTime(msg.createdAt),
                                                            msg.isEdited && !msg.isDeleted ? ' · Đã chỉnh sửa' : '',
                                                            mine && index === messages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#5b5bf6',
                                                                    marginLeft: 4
                                                                },
                                                                children: "· Đã xem"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                                lineNumber: 746,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                                lineNumber: 731,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 609,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, msg._id, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 571,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 md:p-4 md:px-6",
                style: {
                    background: token.colorBgContainer,
                    borderTop: `1px solid ${token.colorBorder}`
                },
                children: [
                    replyingTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                            padding: '6px 10px',
                            borderRadius: 10,
                            background: token.colorBgTextHover,
                            borderLeft: '3px solid #5b5bf6',
                            marginBottom: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        strong: true,
                                        style: {
                                            fontSize: 12,
                                            display: 'block',
                                            color: '#5b5bf6'
                                        },
                                        children: [
                                            "Đang trả lời",
                                            ' ',
                                            replyingTo.senderId._id === currentUserId ? 'chính mình' : replyingTo.senderId.username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 783,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        ellipsis: true,
                                        style: {
                                            fontSize: 12,
                                            display: 'block',
                                            color: token.colorTextSecondary
                                        },
                                        children: replyingTo.content || 'Tệp đính kèm'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 789,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 782,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "text",
                                size: "small",
                                shape: "circle",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {
                                    style: {
                                        fontSize: 12
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 800,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                onClick: ()=>setReplyingTo(null)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 796,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 769,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    pendingAttachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 8,
                            marginBottom: 10
                        },
                        children: pendingAttachments.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '6px 10px',
                                    borderRadius: 10,
                                    background: '#f4f5fb',
                                    width: 'fit-content',
                                    maxWidth: '100%'
                                },
                                children: [
                                    attachment.mimeType.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        src: attachment.thumbnailUrl || attachment.url,
                                        alt: attachment.fileName,
                                        style: {
                                            width: 36,
                                            height: 36,
                                            objectFit: 'cover',
                                            borderRadius: 6
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 822,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileOutlined$3e$__["FileOutlined"], {
                                        style: {
                                            fontSize: 18
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 828,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        style: {
                                            fontSize: 12,
                                            maxWidth: 200,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: attachment.fileName
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 830,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "text",
                                        size: "small",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseCircleFilled$3e$__["CloseCircleFilled"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                            lineNumber: 844,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        onClick: ()=>handleRemovePendingAttachment(attachment._id)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 841,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, attachment._id, true, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 808,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 806,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                multiple: true,
                                accept: ACCEPTED_FILE_TYPES,
                                style: {
                                    display: 'none'
                                },
                                onChange: handleFileChange
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "text",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PaperClipOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperClipOutlined$3e$__["PaperClipOutlined"], {
                                    style: {
                                        fontSize: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 862,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                shape: "circle",
                                loading: uploading,
                                disabled: cannotSend || pendingAttachments.length >= MAX_FILES_PER_MESSAGE,
                                onClick: handlePickFile
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                ref: messageInputRef,
                                placeholder: isBlocked ? 'Bạn đã chặn người dùng này' : blockedByOther ? 'Bạn không thể nhắn tin cho người dùng này' : 'Nhập tin nhắn...',
                                size: "large",
                                variant: "filled",
                                value: draft,
                                disabled: cannotSend,
                                onChange: (e)=>handleDraftChange(e.target.value),
                                onPressEnter: handleSend,
                                style: {
                                    borderRadius: 20
                                },
                                suffix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                    trigger: "click",
                                    open: emojiPickerOpen,
                                    onOpenChange: setEmojiPickerOpen,
                                    placement: "topRight",
                                    styles: {
                                        content: {
                                            padding: 0
                                        }
                                    },
                                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onEmojiClick: handleEmojiClick
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 891,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SmileOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmileOutlined$3e$__["SmileOutlined"], {
                                        style: {
                                            color: 'rgba(0,0,0,0.35)',
                                            cursor: 'pointer'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                        lineNumber: 893,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 885,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 868,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__["SendOutlined"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                    lineNumber: 899,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                size: "large",
                                shape: "circle",
                                loading: sendLoading,
                                disabled: !draft.trim() && pendingAttachments.length === 0 || cannotSend || uploading,
                                onClick: handleSend
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                                lineNumber: 897,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                        lineNumber: 851,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$GroupSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: groupSettingsOpen,
                onClose: ()=>setGroupSettingsOpen(false),
                conversationId: conversation._id,
                conversationName: conversation.name,
                inviteCode: conversation.inviteCode,
                members: members,
                currentUserId: currentUserId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 910,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$MediaCenterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: mediaCenterOpen,
                onClose: ()=>setMediaCenterOpen(false),
                conversationId: conversation._id
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
                lineNumber: 921,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatWindow, "LlWQu9zJe9zIgw51rmbZ9B2AV+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].useToken,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SocketProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationDetail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$CallProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useCallStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCall"]
    ];
});
_c1 = ChatWindow;
const __TURBOPACK__default__export__ = ChatWindow;
var _c, _c1;
__turbopack_context__.k.register(_c, "AttachmentPreview");
__turbopack_context__.k.register(_c1, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/push.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pushService",
    ()=>pushService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/api/axiosClient.tsx [app-client] (ecmascript)");
;
const pushService = {
    subscribe: async (payload)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/push/subscribe', payload);
    },
    unsubscribe: async (endpoint)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$api$2f$axiosClient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/push/unsubscribe', {
            endpoint
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/push.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentPushSubscription",
    ()=>getCurrentPushSubscription,
    "isPushSupported",
    ()=>isPushSupported,
    "subscribeToPush",
    ()=>subscribeToPush,
    "unsubscribeFromPush",
    ()=>unsubscribeFromPush
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$push$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/push.service.ts [app-client] (ecmascript)");
;
const VAPID_PUBLIC_KEY = ("TURBOPACK compile-time value", "BEI-ArSK5q5Oyg9V2r01MijnVp_H2s7sG0aggKV6cs5IPesNdydvwY-f1mXdzjcwbCN5ncfczsaFosideGx_MaU");
const urlBase64ToUint8Array = (base64String)=>{
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    return Uint8Array.from([
        ...rawData
    ].map((char)=>char.charCodeAt(0)));
};
const isPushSupported = ()=>("TURBOPACK compile-time value", "object") !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window;
const getCurrentPushSubscription = async ()=>{
    if (!isPushSupported()) return null;
    const registration = await navigator.serviceWorker.ready.catch(()=>null);
    return await registration?.pushManager.getSubscription() ?? null;
};
const subscribeToPush = async ()=>{
    if (!isPushSupported() || !VAPID_PUBLIC_KEY) {
        throw new Error('Trình duyệt không hỗ trợ thông báo đẩy!');
    }
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
        throw new Error('Bạn cần cấp quyền thông báo để bật tính năng này!');
    }
    const registration = await navigator.serviceWorker.register('/sw.js');
    let subscription;
    try {
        subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        });
    } catch  {
        // The browser failed to reach its push service (Google FCM for Chrome/Edge,
        // Mozilla autopush for Firefox) — almost always a network/firewall/VPN block
        // or a privacy-focused browser (Brave) disabling Google push services, not
        // something this app can fix client-side.
        throw new Error('Trình duyệt không thể kết nối tới dịch vụ thông báo đẩy. Hãy kiểm tra mạng/VPN, tắt tiện ích chặn quảng cáo, hoặc (nếu dùng Brave) bật "Use Google services for push messaging" trong cài đặt trình duyệt, rồi thử lại.');
    }
    const json = subscription.toJSON();
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$push$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushService"].subscribe({
        endpoint: json.endpoint,
        keys: {
            p256dh: json.keys.p256dh,
            auth: json.keys.auth
        }
    });
    return subscription;
};
const unsubscribeFromPush = async ()=>{
    const subscription = await getCurrentPushSubscription();
    if (!subscription) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$push$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushService"].unsubscribe(subscription.endpoint);
    await subscription.unsubscribe();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/drawer/index.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/switch/index.js [app-client] (ecmascript) <export default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/tabs/index.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/upload/index.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LockOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/LockOutlined.js [app-client] (ecmascript) <export default as LockOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InboxOutlined$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/InboxOutlined.js [app-client] (ecmascript) <export default as InboxOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/attachment.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$push$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/push.ts [app-client] (ecmascript)");
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
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { TextArea } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"];
const ProfileDrawer = ({ open, onClose, currentUser })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [profileForm] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    const [passwordForm] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    const updateProfileMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateProfile"])();
    const changePasswordMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChangePassword"])();
    const [selectedAvatarFile, setSelectedAvatarFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pushEnabled, setPushEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pushLoading, setPushLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const watchedAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useWatch('avatar', profileForm);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileDrawer.useEffect": ()=>{
            if (currentUser && open) {
                profileForm.setFieldsValue({
                    username: currentUser.username,
                    avatar: currentUser.avatar || '',
                    bio: currentUser.bio || ''
                });
            }
        }
    }["ProfileDrawer.useEffect"], [
        currentUser,
        open,
        profileForm
    ]);
    const handleClose = ()=>{
        setSelectedAvatarFile(null);
        setAvatarPreview(null);
        onClose();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileDrawer.useEffect": ()=>{
            if (!open) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$push$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentPushSubscription"])().then({
                "ProfileDrawer.useEffect": (subscription)=>setPushEnabled(!!subscription)
            }["ProfileDrawer.useEffect"]);
        }
    }["ProfileDrawer.useEffect"], [
        open
    ]);
    const handleTogglePush = async (checked)=>{
        setPushLoading(true);
        try {
            if (checked) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$push$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToPush"])();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã bật thông báo đẩy!');
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$push$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsubscribeFromPush"])();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã tắt thông báo đẩy!');
            }
            setPushEnabled(checked);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(err instanceof Error ? err.message : 'Không thể thay đổi thông báo đẩy!');
        } finally{
            setPushLoading(false);
        }
    };
    const handleUpdateProfile = async (values)=>{
        setIsSubmitting(true);
        try {
            let finalAvatarUrl = values.avatar;
            if (selectedAvatarFile) {
                const uploadRes = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$attachment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentService"].uploadFiles([
                    selectedAvatarFile
                ]);
                const uploadedUrl = uploadRes.data.attachments[0]?.url;
                if (uploadedUrl) {
                    finalAvatarUrl = uploadedUrl;
                } else {
                    throw new Error('Không thể tải ảnh lên');
                }
            }
            updateProfileMutation.mutate({
                ...values,
                avatar: finalAvatarUrl
            }, {
                onSuccess: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Cập nhật hồ sơ thành công!');
                    setSelectedAvatarFile(null);
                },
                onError: (err)=>{
                    const axiosErr = err;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Cập nhật hồ sơ thất bại!');
                }
            });
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(err instanceof Error ? err.message : 'Tải ảnh đại diện thất bại!');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChangePassword = (values)=>{
        changePasswordMutation.mutate({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        }, {
            onSuccess: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đổi mật khẩu thành công!');
                passwordForm.resetFields();
            },
            onError: (err)=>{
                const axiosErr = err;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Đổi mật khẩu thất bại!');
            }
        });
    };
    const topHeaderAvatar = currentUser?.avatar || watchedAvatar || undefined;
    const draggerPreview = avatarPreview || watchedAvatar || currentUser?.avatar;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
        title: "Hồ sơ cá nhân",
        open: open,
        onClose: handleClose,
        size: isMobile ? '100%' : 420,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: 24
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                    size: 80,
                    src: topHeaderAvatar,
                    style: {
                        backgroundColor: currentUser ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(currentUser._id) : '#5b5bf6'
                    },
                    children: currentUser ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(currentUser.username) : undefined
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                items: [
                    {
                        key: 'info',
                        label: 'Thông tin',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                            form: profileForm,
                            layout: "vertical",
                            onFinish: handleUpdateProfile,
                            requiredMark: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "username",
                                    label: "Tên hiển thị",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tên hiển thị!'
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                        prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 171,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        placeholder: "Tên hiển thị"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "avatar",
                                    label: "Ảnh đại diện",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                            name: "avatar",
                                            noStyle: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                                type: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"].Dragger, {
                                            name: "file",
                                            accept: "image/*",
                                            showUploadList: false,
                                            beforeUpload: (file)=>{
                                                setSelectedAvatarFile(file);
                                                const localUrl = URL.createObjectURL(file);
                                                setAvatarPreview(localUrl);
                                                return false; // Prevent auto upload
                                            },
                                            style: {
                                                padding: '16px',
                                                background: '#f8fafc',
                                                borderRadius: '12px'
                                            },
                                            children: draggerPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                        size: 64,
                                                        src: draggerPreview
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ant-upload-text",
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 500,
                                                            margin: 0
                                                        },
                                                        children: selectedAvatarFile ? 'Đã chọn ảnh mới' : 'Nhấp hoặc kéo thả ảnh khác để đổi'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ant-upload-hint",
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#888',
                                                            margin: 0
                                                        },
                                                        children: 'Bấm "Lưu thay đổi" phía dưới để áp dụng ảnh mới'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                lineNumber: 190,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ant-upload-drag-icon",
                                                        style: {
                                                            marginBottom: 8
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InboxOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InboxOutlined$3e$__["InboxOutlined"], {
                                                            style: {
                                                                color: '#6f6bff',
                                                                fontSize: 32
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ant-upload-text",
                                                        style: {
                                                            fontSize: 14,
                                                            fontWeight: 500
                                                        },
                                                        children: "Kéo thả ảnh vào đây hoặc nhấp để chọn ảnh"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ant-upload-hint",
                                                        style: {
                                                            fontSize: 12,
                                                            color: '#888'
                                                        },
                                                        children: 'Ảnh mới sẽ được lưu khi bạn bấm "Lưu thay đổi"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "bio",
                                    label: "Giới thiệu bản thân",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                        rows: 3,
                                        maxLength: 200,
                                        showCount: true,
                                        placeholder: "Vài dòng về bạn..."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 222,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        htmlType: "submit",
                                        block: true,
                                        loading: updateProfileMutation.isPending || isSubmitting,
                                        children: "Lưu thay đổi"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    },
                    {
                        key: 'password',
                        label: 'Mật khẩu',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                            form: passwordForm,
                            layout: "vertical",
                            onFinish: handleChangePassword,
                            requiredMark: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "oldPassword",
                                    label: "Mật khẩu hiện tại",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập mật khẩu hiện tại!'
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].Password, {
                                        prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LockOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockOutlined$3e$__["LockOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 253,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        placeholder: "••••••••"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "newPassword",
                                    label: "Mật khẩu mới",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập mật khẩu mới!'
                                        },
                                        {
                                            min: 8,
                                            message: 'Mật khẩu mới phải có ít nhất 8 ký tự!'
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].Password, {
                                        prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LockOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockOutlined$3e$__["LockOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 263,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        placeholder: "••••••••"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 255,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    name: "confirmPassword",
                                    label: "Xác nhận mật khẩu mới",
                                    dependencies: [
                                        'newPassword'
                                    ],
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Vui lòng xác nhận mật khẩu mới!'
                                        },
                                        ({ getFieldValue })=>({
                                                validator (_, value) {
                                                    if (!value || getFieldValue('newPassword') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                                }
                                            })
                                    ],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"].Password, {
                                        prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LockOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockOutlined$3e$__["LockOutlined"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 281,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        placeholder: "••••••••"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 281,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Item, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        type: "primary",
                                        htmlType: "submit",
                                        block: true,
                                        loading: changePasswordMutation.isPending,
                                        children: "Đổi mật khẩu"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                        lineNumber: 284,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    },
                    {
                        key: 'notifications',
                        label: 'Thông báo',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "Thông báo đẩy"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            type: "secondary",
                                            style: {
                                                fontSize: 12
                                            },
                                            children: "Nhận thông báo tin nhắn mới khi không mở ứng dụng"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                            lineNumber: 305,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$switch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__["Switch"], {
                                    checked: pushEnabled,
                                    loading: pushLoading,
                                    disabled: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$push$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPushSupported"])(),
                                    onChange: handleTogglePush
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                            lineNumber: 300,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileDrawer, "k9VVXoCshdq0dFncENJAXbCOSBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChangePassword"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useWatch
    ];
});
_c = ProfileDrawer;
const __TURBOPACK__default__export__ = ProfileDrawer;
var _c;
__turbopack_context__.k.register(_c, "ProfileDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/empty/index.js [app-client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/avatar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const BlockedUsersModal = ({ open, onClose })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetListBlockUser"])({
        page: 1,
        pageSize: 50
    });
    const unblockMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnBlockUser"])();
    const blockedUsers = data?.data.items ?? [];
    const handleUnblock = (userId)=>{
        unblockMutation.mutate(userId, {
            onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã bỏ chặn người dùng!'),
            onError: (err)=>{
                const axiosErr = err;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Bỏ chặn thất bại!');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        title: "Người dùng đã chặn",
        open: open,
        onCancel: onClose,
        footer: null,
        width: isMobile ? '92%' : 440,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                avatar: true,
                paragraph: {
                    rows: 1
                },
                active: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                lineNumber: 44,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && blockedUsers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                description: "Bạn chưa chặn người dùng nào"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && blockedUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    align: "center",
                    gap: 10,
                    style: {
                        padding: '8px 4px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            src: user.avatar || undefined,
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorForId"])(user._id)
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$avatar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOf"])(user.username)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            vertical: true,
                            flex: 1,
                            style: {
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    strong: true,
                                    ellipsis: true,
                                    children: user.username
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    type: "secondary",
                                    ellipsis: true,
                                    style: {
                                        fontSize: 12
                                    },
                                    children: user.email
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            loading: unblockMutation.isPending,
                            onClick: ()=>handleUnblock(user._id),
                            children: "Bỏ chặn"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, user._id, true, {
                    fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlockedUsersModal, "CUTCzazYaXvKY3AjWqbHjpb4rew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetListBlockUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnBlockUser"]
    ];
});
_c = BlockedUsersModal;
const __TURBOPACK__default__export__ = BlockedUsersModal;
var _c;
__turbopack_context__.k.register(_c, "BlockedUsersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/(protected)/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/antd/es/app/index.js [app-client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleFilled$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript) <export default as ExclamationCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useConversations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/store/useChatStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useDebouncedValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hook/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ChatWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/ChatWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ProfileDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/ProfileDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$BlockedUsersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/(protected)/chat/_components/BlockedUsersModal.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
;
const BLOCKED_LIST_PARAMS = {
    page: 1,
    pageSize: 50
};
const ChatPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { modal } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blockedOpen, setBlockedOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingContactId, setPendingContactId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedConversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatPage.useChatStore[selectedConversationId]": (s)=>s.selectedConversationId
    }["ChatPage.useChatStore[selectedConversationId]"]);
    const setSelectedConversationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatPage.useChatStore[setSelectedConversationId]": (s)=>s.setSelectedConversationId
    }["ChatPage.useChatStore[setSelectedConversationId]"]);
    const searchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatPage.useChatStore[searchQuery]": (s)=>s.searchQuery
    }["ChatPage.useChatStore[searchQuery]"]);
    const setSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"])({
        "ChatPage.useChatStore[setSearchQuery]": (s)=>s.setSearchQuery
    }["ChatPage.useChatStore[setSearchQuery]"]);
    const debouncedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"])(searchQuery, 350);
    const { data: meData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"])();
    const currentUser = meData?.data;
    const { data: friendsData, isLoading: friendsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"])({
        q: debouncedQuery,
        page: 1,
        pageSize: 30
    });
    const contacts = friendsData?.data.items ?? [];
    const { data: conversationDetailData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationDetail"])(selectedConversationId ?? '');
    const otherUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPage.useMemo[otherUserId]": ()=>{
            const conversation = conversationDetailData?.data.conversation;
            if (conversation?.type !== 'private') return null;
            const otherMember = conversationDetailData?.data.members.find({
                "ChatPage.useMemo[otherUserId]": (m)=>m.userId._id !== currentUser?._id
            }["ChatPage.useMemo[otherUserId]"]);
            return otherMember?.userId._id ?? null;
        }
    }["ChatPage.useMemo[otherUserId]"], [
        conversationDetailData,
        currentUser?._id
    ]);
    const { data: blockedData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetListBlockUser"])(BLOCKED_LIST_PARAMS);
    const blockedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatPage.useMemo[blockedIds]": ()=>new Set((blockedData?.data.items ?? []).map({
                "ChatPage.useMemo[blockedIds]": (u)=>u._id
            }["ChatPage.useMemo[blockedIds]"]))
    }["ChatPage.useMemo[blockedIds]"], [
        blockedData
    ]);
    const isSelectedBlocked = otherUserId ? blockedIds.has(otherUserId) : false;
    const { data: messagesData, isLoading: messagesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListMessages"])(selectedConversationId ?? '', {
        limit: 30
    });
    const messages = messagesData?.data.items ?? [];
    const sendMessageMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendMessage"])(selectedConversationId ?? '');
    const logoutMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogout"])();
    const blockMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockUser"])();
    const unblockMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnBlockUser"])();
    const createDirectMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateDirectConversation"])();
    const handleLogout = ()=>{
        modal.confirm({
            title: 'Đăng xuất',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleFilled$3e$__["ExclamationCircleFilled"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            content: 'Bạn có chắc chắn muốn đăng xuất khỏi Halo Chat?',
            okText: 'Đăng xuất',
            okButtonProps: {
                danger: true
            },
            cancelText: 'Hủy',
            onOk: ()=>{
                logoutMutation.mutate(undefined, {
                    onSuccess: ()=>{
                        router.push('/signin');
                        router.refresh();
                    },
                    onError: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error('Đăng xuất thất bại. Vui lòng thử lại!');
                    }
                });
            }
        });
    };
    const handleToggleBlock = ()=>{
        if (!otherUserId) return;
        if (isSelectedBlocked) {
            unblockMutation.mutate(otherUserId, {
                onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã bỏ chặn người dùng!'),
                onError: (err)=>{
                    const axiosErr = err;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Bỏ chặn thất bại!');
                }
            });
        } else {
            blockMutation.mutate(otherUserId, {
                onSuccess: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].success('Đã chặn người dùng!'),
                onError: (err)=>{
                    const axiosErr = err;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Chặn người dùng thất bại!');
                }
            });
        }
    };
    const handleSendMessage = (text, attachmentIds, type, replyToMessageId)=>{
        if (!selectedConversationId) return;
        sendMessageMutation.mutate({
            content: text,
            attachmentIds,
            type,
            replyToMessageId
        }, {
            onError: (err)=>{
                const axiosErr = err;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Gửi tin nhắn thất bại!');
            }
        });
    };
    const handleSelectContact = (user)=>{
        setPendingContactId(user._id);
        createDirectMutation.mutate(user._id, {
            onSuccess: (res)=>{
                setSelectedConversationId(res.data.conversation._id);
            },
            onError: (err)=>{
                const axiosErr = err;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notify"].error(axiosErr.response?.data?.message || 'Không thể mở cuộc trò chuyện!');
            },
            onSettled: ()=>setPendingContactId(null)
        });
    };
    const showSidebar = !isMobile || !selectedConversationId;
    const showChatWindow = !isMobile || !!selectedConversationId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            height: '100vh',
            overflow: 'hidden',
            flexDirection: 'row'
        },
        children: [
            showSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentUser: currentUser,
                contacts: contacts,
                loading: friendsLoading,
                searchValue: searchQuery,
                onSearchChange: setSearchQuery,
                selectedConversationId: selectedConversationId,
                onSelectConversation: (id)=>setSelectedConversationId(id || null),
                onSelectContact: handleSelectContact,
                contactActionLoadingId: pendingContactId,
                onOpenProfile: ()=>setProfileOpen(true),
                onOpenBlocked: ()=>setBlockedOpen(true),
                onLogout: handleLogout,
                logoutLoading: logoutMutation.isPending
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showChatWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ChatWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                conversationId: selectedConversationId,
                currentUserId: currentUser?._id,
                messages: selectedConversationId ? messages : [],
                messagesLoading: !!selectedConversationId && messagesLoading,
                onSend: handleSendMessage,
                sendLoading: sendMessageMutation.isPending,
                isBlocked: isSelectedBlocked,
                onToggleBlock: handleToggleBlock,
                blockActionLoading: blockMutation.isPending || unblockMutation.isPending,
                isMobile: isMobile,
                onBack: ()=>setSelectedConversationId(null)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$ProfileDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: profileOpen,
                onClose: ()=>setProfileOpen(false),
                currentUser: currentUser
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f28$protected$292f$chat$2f$_components$2f$BlockedUsersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: blockedOpen,
                onClose: ()=>setBlockedOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/(protected)/chat/page.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatPage, "/qIGtv5cbomHHWwmU7+jcrGhzo8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$store$2f$useChatStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useDebouncedValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFriends"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConversationDetail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetListBlockUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogout"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnBlockUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hook$2f$useConversations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateDirectConversation"]
    ];
});
_c = ChatPage;
const __TURBOPACK__default__export__ = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_1qe-u0f._.js.map