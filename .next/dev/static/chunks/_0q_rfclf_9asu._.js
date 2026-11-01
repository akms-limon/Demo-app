(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/promptPacks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/locations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildJsonl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/buildJsonl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlockSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BlockSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LocationSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptPackEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PromptPackEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LocationEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptPreview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PromptPreview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonlOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JsonlOutput.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Home() {
    _s();
    const [packs, setPacks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promptPacks"]);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"]);
    const [selectedBlocks, setSelectedBlocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSelectedBlocks"]);
    const [selectedLocations, setSelectedLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSelectedLocations"]);
    const [activePackKey, setActivePackKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promptPacks"][0]?.key ?? "");
    const [activeLocationKey, setActiveLocationKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"][0]?.key ?? "");
    const activePack = packs.find((p)=>p.key === activePackKey);
    const activeLocation = locations.find((l)=>l.key === activeLocationKey);
    const jobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[jobs]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildJsonl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildJobs"])({
                packs,
                locations,
                selectedBlocks,
                selectedLocations
            })
    }["Home.useMemo[jobs]"], [
        packs,
        locations,
        selectedBlocks,
        selectedLocations
    ]);
    const updatePackField = (key, field, value)=>setPacks((all)=>all.map((p)=>p.key === key ? {
                    ...p,
                    [field]: value
                } : p));
    const updatePackLayer = (key, layer, value)=>setPacks((all)=>all.map((p)=>p.key === key ? {
                    ...p,
                    layers: {
                        ...p.layers,
                        [layer]: value
                    }
                } : p));
    const updateLocation = (key, patch)=>setLocations((all)=>all.map((l)=>l.key === key ? {
                    ...l,
                    ...patch
                } : l));
    const addLocation = ()=>{
        const key = `custom-${Date.now()}`;
        setLocations((all)=>[
                ...all,
                {
                    key,
                    id: "",
                    slugs: [],
                    location: "New location",
                    regions: "",
                    cities: "",
                    count: "4-8"
                }
            ]);
        setSelectedLocations((s)=>[
                ...s,
                key
            ]);
        setActiveLocationKey(key);
    };
    const removeLocation = (key)=>{
        const rest = locations.filter((l)=>l.key !== key);
        setLocations(rest);
        setSelectedLocations((s)=>s.filter((k)=>k !== key));
        if (activeLocationKey === key) setActiveLocationKey(rest[0]?.key ?? "");
    };
    const resetAll = ()=>{
        setPacks(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promptPacks"]);
        setLocations(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"]);
        setSelectedBlocks(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSelectedBlocks"]);
        setSelectedLocations(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSelectedLocations"]);
        setActivePackKey(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promptPacks"][0]?.key ?? "");
        setActiveLocationKey(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$locations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locations"][0]?.key ?? "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Country Page JSONL builder"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Pick blocks and locations, adjust the prompts, then download one file with a line for every pair."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn",
                        onClick: resetAll,
                        children: "Reset to defaults"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rail",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BlockSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                packs: packs,
                                selected: selectedBlocks,
                                onChange: setSelectedBlocks
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                locations: locations,
                                selected: selectedLocations,
                                onChange: setSelectedLocations
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JsonlOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                jobs: jobs,
                                packs: packs,
                                locations: locations
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptPreview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                pack: activePack,
                                location: activeLocation,
                                totalBlocks: packs.length
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromptPackEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                packs: packs,
                                activeKey: activePackKey,
                                onActiveChange: setActivePackKey,
                                onChangeField: updatePackField,
                                onChangeLayer: updatePackLayer
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                locations: locations,
                                activeKey: activeLocationKey,
                                onActiveChange: setActiveLocationKey,
                                onChange: updateLocation,
                                onAdd: addLocation,
                                onRemove: removeLocation
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Home, "vHo27vzZwLsca9sKIPIbitx/V38=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BlockSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlockSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CheckList.js [app-client] (ecmascript)");
"use client";
;
;
function BlockSelector({ packs, selected, onChange }) {
    const sorted = [
        ...packs
    ].sort((a, b)=>a.order - b.order);
    const toggle = (key)=>onChange(selected.includes(key) ? selected.filter((k)=>k !== key) : [
            ...selected,
            key
        ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Content blocks"
            }, void 0, false, {
                fileName: "[project]/components/BlockSelector.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted small",
                children: [
                    selected.length,
                    " of ",
                    packs.length,
                    " selected"
                ]
            }, void 0, true, {
                fileName: "[project]/components/BlockSelector.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: sorted.map((p)=>({
                        key: p.key,
                        label: p.name,
                        hint: p.idMapping.replace("js-ai-content-", "")
                    })),
                selected: selected,
                onToggle: toggle,
                onSelectAll: ()=>onChange(packs.map((p)=>p.key)),
                onClear: ()=>onChange([]),
                emptyText: "No prompt packs in data/promptPacks.js."
            }, void 0, false, {
                fileName: "[project]/components/BlockSelector.js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BlockSelector.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = BlockSelector;
var _c;
__turbopack_context__.k.register(_c, "BlockSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CheckList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
// Small reusable multi-select list. Used by BlockSelector and LocationSelector.
// items: [{ key, label, hint }]
// Layout styles are inline on purpose, so the list looks right even if the CSS file is stale.
const labelStyle = {
    display: "flex",
    alignItems: "start",
    gap: 10,
    width: "100%",
    padding: "6px 4px",
    cursor: "pointer",
    textAlign: "left"
};
const boxStyle = {
    width: 16,
    minWidth: 16,
    maxWidth: 16,
    height: 16,
    margin: 0,
    padding: 0
};
const copyStyle = {
    minWidth: 0,
    flex: "1 1 auto"
};
const textStyle = {
    display: "block",
    fontSize: 14,
    lineHeight: 1.35
};
const hintStyle = {
    display: "block",
    fontFamily: "ui-monospace, Menlo, Consolas, monospace",
    fontSize: 11,
    color: "#7b8896",
    overflowWrap: "anywhere"
};
function CheckList({ items, selected, onToggle, onSelectAll, onClear, emptyText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "link-btn",
                        onClick: onSelectAll,
                        children: "Select all"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckList.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "link-btn",
                        onClick: onClear,
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/components/CheckList.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CheckList.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: emptyText
            }, void 0, false, {
                fileName: "[project]/components/CheckList.js",
                lineNumber: 33,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    width: "100%"
                },
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            display: "block",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    style: boxStyle,
                                    checked: selected.includes(item.key),
                                    onChange: ()=>onToggle(item.key)
                                }, void 0, false, {
                                    fileName: "[project]/components/CheckList.js",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: copyStyle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: textStyle,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckList.js",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        item.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: hintStyle,
                                            children: item.hint
                                        }, void 0, false, {
                                            fileName: "[project]/components/CheckList.js",
                                            lineNumber: 46,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CheckList.js",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CheckList.js",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, item.key, false, {
                        fileName: "[project]/components/CheckList.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CheckList.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CheckList.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = CheckList;
var _c;
__turbopack_context__.k.register(_c, "CheckList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/JsonlOutput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JsonlOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildJsonl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/buildJsonl.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function JsonlOutput({ jobs, packs, locations }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const jsonl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildJsonl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsToJsonl"])(jobs);
    const warnings = jobs.flatMap((j)=>j.warnings);
    const nameOf = (list, key, field)=>list.find((x)=>x.key === key)?.[field] ?? key;
    async function copy() {
        try {
            await navigator.clipboard.writeText(jsonl);
        } catch  {
            const ta = document.createElement("textarea");
            ta.value = jsonl;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(()=>setCopied(false), 1500);
    }
    function download() {
        const blob = new Blob([
            jsonl
        ], {
            type: "application/x-ndjson"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "country-page-batch.jsonl";
        a.click();
        URL.revokeObjectURL(url);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel output",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "JSONL output"
                    }, void 0, false, {
                        fileName: "[project]/components/JsonlOutput.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "head-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "count",
                                children: [
                                    jobs.length,
                                    " ",
                                    jobs.length === 1 ? "line" : "lines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn",
                                onClick: copy,
                                disabled: !jobs.length,
                                children: copied ? "Copied" : "Copy"
                            }, void 0, false, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn primary",
                                onClick: download,
                                disabled: !jobs.length,
                                children: "Download .jsonl"
                            }, void 0, false, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/JsonlOutput.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/JsonlOutput.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            warnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            warnings.length,
                            " problem",
                            warnings.length === 1 ? "" : "s",
                            " to fix before using this file"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/JsonlOutput.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            warnings.slice(0, 6).map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: w
                                }, i, false, {
                                    fileName: "[project]/components/JsonlOutput.js",
                                    lineNumber: 57,
                                    columnNumber: 49
                                }, this)),
                            warnings.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "and ",
                                    warnings.length - 6,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 58,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/JsonlOutput.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/JsonlOutput.js",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            jobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "empty-state",
                children: "Select at least one content block and one location to prepare lines."
            }, void 0, false, {
                fileName: "[project]/components/JsonlOutput.js",
                lineNumber: 64,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "lines",
                children: jobs.map((j, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "line-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-no",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/JsonlOutput.js",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: nameOf(locations, j.locationKey, "location")
                                    }, void 0, false, {
                                        fileName: "[project]/components/JsonlOutput.js",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sep",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JsonlOutput.js",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: nameOf(packs, j.packKey, "name")
                                    }, void 0, false, {
                                        fileName: "[project]/components/JsonlOutput.js",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "line-body",
                                children: j.line
                            }, void 0, false, {
                                fileName: "[project]/components/JsonlOutput.js",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, j.customId + i, true, {
                        fileName: "[project]/components/JsonlOutput.js",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/JsonlOutput.js",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/JsonlOutput.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(JsonlOutput, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = JsonlOutput;
var _c;
__turbopack_context__.k.register(_c, "JsonlOutput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LocationEditor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// slugs are stored as an array but edited as "usa, south-carolina".
// Local draft text keeps the cursor happy while typing commas.
function SlugsInput({ slugs, onChange }) {
    _s();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(slugs.join(", "));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        value: draft,
        placeholder: "usa, south-carolina",
        onChange: (e)=>{
            setDraft(e.target.value);
            onChange(e.target.value.split(",").map((s)=>s.trim()).filter(Boolean));
        }
    }, void 0, false, {
        fileName: "[project]/components/LocationEditor.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(SlugsInput, "K0N6eJY5d4j2fC8FXEnknkQ6wN0=");
_c = SlugsInput;
function LocationEditor({ locations, activeKey, onActiveChange, onChange, onAdd, onRemove }) {
    const loc = locations.find((l)=>l.key === activeKey);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Location data"
                    }, void 0, false, {
                        fileName: "[project]/components/LocationEditor.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "head-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "Location to edit",
                                value: activeKey,
                                onChange: (e)=>onActiveChange(e.target.value),
                                children: locations.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: l.key,
                                        children: l.location || "(unnamed)"
                                    }, l.key, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn",
                                onClick: onAdd,
                                children: "Add location"
                            }, void 0, false, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LocationEditor.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LocationEditor.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            !loc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "No locations yet. Add one to start."
            }, void 0, false, {
                fileName: "[project]/components/LocationEditor.js",
                lineNumber: 43,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "id"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: loc.id,
                                        onChange: (e)=>onChange(loc.key, {
                                                id: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: loc.location,
                                        onChange: (e)=>onChange(loc.key, {
                                                location: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "slugs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlugsInput, {
                                        slugs: loc.slugs,
                                        onChange: (slugs)=>onChange(loc.key, {
                                                slugs
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Count"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: loc.count,
                                        onChange: (e)=>onChange(loc.key, {
                                                count: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Regions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: loc.regions,
                                        onChange: (e)=>onChange(loc.key, {
                                                regions: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Cities"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: loc.cities,
                                        onChange: (e)=>onChange(loc.key, {
                                                cities: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/LocationEditor.js",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationEditor.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LocationEditor.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "link-btn danger",
                        onClick: ()=>onRemove(loc.key),
                        children: "Remove this location"
                    }, void 0, false, {
                        fileName: "[project]/components/LocationEditor.js",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, loc.key, true, {
                fileName: "[project]/components/LocationEditor.js",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LocationEditor.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = LocationEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "SlugsInput");
__turbopack_context__.k.register(_c1, "LocationEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LocationSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CheckList.js [app-client] (ecmascript)");
"use client";
;
;
function LocationSelector({ locations, selected, onChange }) {
    const toggle = (key)=>onChange(selected.includes(key) ? selected.filter((k)=>k !== key) : [
            ...selected,
            key
        ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Locations"
            }, void 0, false, {
                fileName: "[project]/components/LocationSelector.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted small",
                children: [
                    selected.length,
                    " of ",
                    locations.length,
                    " selected"
                ]
            }, void 0, true, {
                fileName: "[project]/components/LocationSelector.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CheckList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: locations.map((l)=>({
                        key: l.key,
                        label: l.location || "(unnamed)",
                        hint: l.id
                    })),
                selected: selected,
                onToggle: toggle,
                onSelectAll: ()=>onChange(locations.map((l)=>l.key)),
                onClear: ()=>onChange([]),
                emptyText: "No locations in data/locations.js."
            }, void 0, false, {
                fileName: "[project]/components/LocationSelector.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LocationSelector.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = LocationSelector;
var _c;
__turbopack_context__.k.register(_c, "LocationSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PromptPackEditor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptPackEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/promptPacks.js [app-client] (ecmascript)");
"use client";
;
;
function PromptPackEditor({ packs, activeKey, onActiveChange, onChangeField, onChangeLayer }) {
    const sorted = [
        ...packs
    ].sort((a, b)=>a.order - b.order);
    const pack = packs.find((p)=>p.key === activeKey);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Prompt pack"
            }, void 0, false, {
                fileName: "[project]/components/PromptPackEditor.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabs",
                role: "tablist",
                "aria-label": "Content block",
                children: sorted.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": p.key === activeKey,
                        className: p.key === activeKey ? "tab active" : "tab",
                        onClick: ()=>onActiveChange(p.key),
                        children: p.name
                    }, p.key, false, {
                        fileName: "[project]/components/PromptPackEditor.js",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PromptPackEditor.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            !pack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Pick a content block."
            }, void 0, false, {
                fileName: "[project]/components/PromptPackEditor.js",
                lineNumber: 30,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "ID Mapping"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: pack.idMapping,
                                        onChange: (e)=>onChangeField(pack.key, "idMapping", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPackEditor.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Model"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: pack.model,
                                        onChange: (e)=>onChangeField(pack.key, "model", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPackEditor.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Max tokens"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        inputMode: "numeric",
                                        placeholder: "1000 (default)",
                                        value: pack.maxTokens ?? "",
                                        onChange: (e)=>onChangeField(pack.key, "maxTokens", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPackEditor.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Temperature"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        inputMode: "decimal",
                                        placeholder: "1 (default)",
                                        value: pack.temperature ?? "",
                                        onChange: (e)=>onChangeField(pack.key, "temperature", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPackEditor.js",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Placeholders this block needs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chips",
                                        children: pack.placeholders.map((ph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "chip",
                                                children: ph
                                            }, ph, false, {
                                                fileName: "[project]/components/PromptPackEditor.js",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPackEditor.js",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPackEditor.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromptPackEditor.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER_FIELDS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        f.label,
                                        f.key === "task" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "req",
                                            children: " main instruction"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PromptPackEditor.js",
                                            lineNumber: 74,
                                            columnNumber: 38
                                        }, this),
                                        !(pack.layers[f.key] || "").trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "empty",
                                            children: " empty, skipped"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PromptPackEditor.js",
                                            lineNumber: 75,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PromptPackEditor.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: f.rows,
                                    value: pack.layers[f.key] || "",
                                    onChange: (e)=>onChangeLayer(pack.key, f.key, e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/PromptPackEditor.js",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, f.key, true, {
                            fileName: "[project]/components/PromptPackEditor.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                ]
            }, pack.key, true, {
                fileName: "[project]/components/PromptPackEditor.js",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPackEditor.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = PromptPackEditor;
var _c;
__turbopack_context__.k.register(_c, "PromptPackEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PromptPreview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/buildPrompt.js [app-client] (ecmascript)");
"use client";
;
;
function PromptPreview({ pack, location, totalBlocks }) {
    if (!pack || !location) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Prompt preview"
                }, void 0, false, {
                    fileName: "[project]/components/PromptPreview.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "Pick a content block and a location to see the prompt."
                }, void 0, false, {
                    fileName: "[project]/components/PromptPreview.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PromptPreview.js",
            lineNumber: 9,
            columnNumber: 7
        }, this);
    }
    const { segments, missing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assemblePrompt"])(pack, location, totalBlocks);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Prompt preview"
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPreview.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "muted small",
                        children: [
                            pack.name,
                            " for ",
                            location.location || "(unnamed)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromptPreview.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPreview.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            missing.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "alert",
                children: [
                    "Missing values: ",
                    missing.join(", "),
                    ". Fill them in Location data."
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPreview.js",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "prompt",
                children: segments.map((s, i)=>s.kind === "plain" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: s.text
                    }, i, false, {
                        fileName: "[project]/components/PromptPreview.js",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                        className: s.kind,
                        children: s.text
                    }, i, false, {
                        fileName: "[project]/components/PromptPreview.js",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PromptPreview.js",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPreview.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PromptPreview;
var _c;
__turbopack_context__.k.register(_c, "PromptPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/locations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Fixed placeholder data. One record = one location.
// To add a location: copy an object, change the values. The UI picks it up automatically.
//
//   id        -> first part of custom_id
//   slugs     -> page path pieces, last part of custom_id (e.g. ['usa', 'south-carolina'])
//   location  -> fills {Location}
//   regions   -> fills {Regions}
//   cities    -> fills {Cities} and {cities}
//   count     -> fills {Count}
__turbopack_context__.s([
    "defaultSelectedLocations",
    ()=>defaultSelectedLocations,
    "locations",
    ()=>locations
]);
const locations = [
    {
        key: "usa",
        id: "242",
        slugs: [
            "usa"
        ],
        location: "USA",
        regions: "Florida, Texas, California",
        cities: "Naples, Orlando, Kissimmee, Panama City",
        count: "4-8"
    },
    {
        key: "italy",
        id: "310",
        slugs: [
            "italy"
        ],
        location: "Italy",
        regions: "Lazio, Tuscany, Veneto, Lombardy",
        cities: "Rome, Florence, Venice, Milan",
        count: "4-8"
    },
    {
        key: "spain",
        id: "315",
        slugs: [
            "spain"
        ],
        location: "Spain",
        regions: "Catalonia, Andalusia, Community of Madrid, Valencia",
        cities: "Barcelona, Seville, Madrid, Valencia",
        count: "4-8"
    },
    {
        key: "france",
        id: "320",
        slugs: [
            "france"
        ],
        location: "France",
        regions: "Ile-de-France, Provence-Alpes-Cote d'Azur, Auvergne-Rhone-Alpes, Nouvelle-Aquitaine",
        cities: "Paris, Nice, Lyon, Bordeaux",
        count: "4-8"
    },
    {
        key: "japan",
        id: "402",
        slugs: [
            "japan"
        ],
        location: "Japan",
        regions: "Kanto, Kansai, Kyushu, Hokkaido",
        cities: "Tokyo, Osaka, Fukuoka, Sapporo",
        count: "4"
    }
];
const defaultSelectedLocations = [
    "usa",
    "italy"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/promptPacks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Prompt packs for the Country Page content blocks.
// Source: "CK Prompt library - Country Page" sheet.
// Each pack = settings + text layers for ONE content block.
// To add a block: copy one object below, change `key`, `idMapping`, `name`, and the layers.
// The UI picks it up automatically (no component changes needed).
// Order in which layers are joined into the system prompt.
__turbopack_context__.s([
    "LAYER_FIELDS",
    ()=>LAYER_FIELDS,
    "defaultSelectedBlocks",
    ()=>defaultSelectedBlocks,
    "promptPacks",
    ()=>promptPacks
]);
const LAYER_FIELDS = [
    {
        key: "introduction",
        label: "Introduction",
        rows: 3
    },
    {
        key: "task",
        label: "Task",
        rows: 6
    },
    {
        key: "audience",
        label: "Audience",
        rows: 2
    },
    {
        key: "formatting",
        label: "Formatting Details",
        rows: 3
    },
    {
        key: "perspective",
        label: "Perspective",
        rows: 3
    },
    {
        key: "seo",
        label: "SEO Optimization",
        rows: 3
    },
    {
        key: "negative",
        label: "Negative Prompts",
        rows: 5
    },
    {
        key: "brandVoice",
        label: "Brand Voice",
        rows: 4
    },
    {
        key: "cot",
        label: "Chain-of-Thought Approach",
        rows: 3
    },
    {
        key: "sequencing",
        label: "Content Block Sequencing Context",
        rows: 2
    },
    {
        key: "originalText",
        label: "Original Text",
        rows: 2
    }
];
// Layers that are identical for every block in the sheet.
// Each pack gets its own copy, so each one can still be edited separately.
const SHARED = {
    introduction: "You are an expert SEO travel blogger who creates content for high-performing travel accommodation booking websites that are search engine optimized.",
    audience: "Travelers looking for design-led, apartment-style stays and boutique hotels in city centers.",
    perspective: "Maintain an engaging second-person perspective. Ensure high sentence opening variety across all outputs by balancing imperative action verbs, noun-first descriptors, and varied lead-ins.",
    seo: "The text should be SEO optimized towards the keywords: relating to the location. Write the sentences subtly, so that the keyword has the highest NLP Salience Score. Incorporate the location naturally within the content. Use pronouns or alternative references when the location has been established.",
    negative: 'Do not invent facts, places, attractions, amenities, statistics, or distances. If uncertain, omit. Avoid superlatives, exaggerated claims, generic AI phrases, clichés, keyword stuffing, and unnatural wording. Never use: vacation rental, holiday home, rental, cabin, hidden gem, nestled, vibrant, bustling, charming, must-see. No em dashes, emojis, exclamation marks, rhetorical questions, or unnecessary symbols. Use local place names naturally; avoid repeating cities or mentioning states and countries unless required. Do not assume amenities; qualify unconfirmed features with "where available". Avoid repetitive descriptions, destination stereotypes, copied content, and outdated Sonder text. Do not start with generic promotional phrases or second-person introductions. Use only supplied facts, keep language natural and concise, and follow the exact requested output format without Markdown, disclaimers, or commentary.',
    brandVoice: "Maintain an informational, simple tone with a subtle Sonder influence: a curated guide to design-led urban stays, helping travelers choose apartments, aparthotels, and boutique hotels in walkable neighborhoods. Write with calm confidence, clear city context, and practical details that help travelers find the stay that fits their trip.",
    cot: "",
    sequencing: "",
    originalText: ""
};
const COT_PRONOUNS = "Before writing, identify opportunities to use pronouns or contextual references instead of repeating the location name. Use variations like 'the area', 'this destination', 'the country', or 'here' in subsequent mentions.";
// #X = position of the block on the page, Y = total number of blocks. Filled in by lib/buildPrompt.js.
const SEQUENCING = "This is content block #X of Y on the page. Previous sections have already mentioned {Location} multiple times.";
const promptPacks = [
    {
        key: "title",
        order: 1,
        name: "Editorial line",
        idMapping: "js-ai-content-title",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: 0.85,
        placeholders: [
            "{Location}"
        ],
        layers: {
            ...SHARED,
            task: "Generate one concise, SEO-friendly editorial line for a landing page targeting {Location}. Keep it editorial and evocative—6 to 12 words that express a felt truth about the destination’s urban rhythm, a remembered moment, or an old/new or day/night contrast. Example: “New York Nights Move Fast, Mornings Take Their Time”",
            formatting: "The output must be in plain text"
        }
    },
    {
        key: "subtitle",
        order: 2,
        name: "Editorial SubText",
        idMapping: "js-ai-content-subtitle",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: null,
        placeholders: [
            "{Location}"
        ],
        layers: {
            ...SHARED,
            task: "Write one sentence of 15-20 words describing {Location} through its cities, regions, or everyday character, naming at least one place, then introduce Sonder apartment-style stays and boutique hotels.",
            formatting: "The output must be in HTML markup. The text must contain exactly ONE HTML paragraph. Wrap the entire content inside a single <p>...</p> tag. Do not include any text or HTML elements outside this one <p> tag."
        }
    },
    {
        key: "regions",
        order: 3,
        name: "Region cards",
        idMapping: "js-ai-content-regions",
        model: "gpt-5.1-mini",
        maxTokens: null,
        temperature: null,
        placeholders: [
            "{Regions}",
            "{Location}",
            "{Count}"
        ],
        layers: {
            ...SHARED,
            task: "Write an title of 5–10 words that gives a sensory, place-specific snapshot of {Location}’s regional range. Then write a 60–90 word country-level subtext explaining how {Location}’s ` {Regions} ` differ in mood and trip type, without detailed city descriptions, and end by encouraging travelers to start with the region whose cities best match their desired trip. Use only the provided data. Do not add or assume information. Then Prepare a list of {Count} regions from the provided list for {Location}, featuring only regions with at least one city from the list: ` {Regions} `. For each region, use the region name and write 25–40 words beginning with the trip mood, followed by one named, verifiable anchor, walkable district, or reason to stay. Focus on mood and rhythm, not activities. If region list is less just provide the matching one,",
            formatting: 'The output must be in JSON. Format: {"Title": "", "Subtext": "", Cards:[{"name": "", "slug": "", "description": ""}, {"name": "", "slug": "", "description": ""}]}.',
            cot: COT_PRONOUNS,
            sequencing: SEQUENCING
        }
    },
    {
        key: "citiesBestFor",
        order: 4,
        name: "Trip-intent groups with linked cities",
        idMapping: "js-ai-content-cities-best-for",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: null,
        placeholders: [
            "{Cities}",
            "{Location}",
            "{Count}"
        ],
        layers: {
            ...SHARED,
            task: "Prepare a list of {Count} “Best For” quick-picks for {Location}, using only cities: {Cities}. Start with an Title of 5–10 words inviting travelers to choose by trip intent. Then add groups with a concise “BestFor” label of 4–8 words in the format “Best for [intent]” followed by 3–5 relevant cities. Use urban trip intents only: city breaks, food, art and architecture, work trips and workations, longer stays, walkable historic centers, nightlife and late dinners, neighborhood and design. Assign each city only to intents it genuinely fits.",
            formatting: 'The output must be valid JSON only:{"Title":"","BestFor":[{"BestFor":"","Cities":[{"Name":"", "Slug":""}]},{"BestFor":"","Cities":[{"Name":"", "Slug":""}]}]}'
        }
    },
    {
        key: "cityCards",
        order: 5,
        name: "City cards: what you do there",
        idMapping: "js-ai-content-city-cards",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: 0.5,
        placeholders: [
            "{Cities}",
            "{Location}",
            "{Count}"
        ],
        layers: {
            ...SHARED,
            task: "Write an urban-focused Title of 5–10 words referencing streets, downtowns, or city light, not sea or beaches for {Location}. Then write a 20–35 word subtext naming 2–3 lead cities from the {Cities} list, and {Count} city cards for {Location}, using only cities from that list. Each card should describe what visitors do in the city - neighborhoods, walkability, food, design, activity and texture or nightlife in 15–25 words.",
            formatting: 'The output must be a valid JSON only: {"Title":"","Subtext":"","Cities":[{"Name":"","Slug":"","Description":"","Count":""},{"Name":"","Slug":"","Description":"","Count":""}]}',
            cot: COT_PRONOUNS,
            sequencing: SEQUENCING
        }
    },
    {
        key: "feedTitle",
        order: 6,
        name: "Feed framing: H2",
        idMapping: "js-ai-content-feed-title",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: 0.5,
        placeholders: [
            "{Location}"
        ],
        layers: {
            ...SHARED,
            task: "Write one SEO-Friendly title with 5–10 words for the {Location} representative property feed. Focus on the urban feeling of staying in the curated range below, rather than the country’s general appeal.",
            formatting: "The output must be in plain text"
        }
    },
    {
        key: "feedSubtitle",
        order: 7,
        name: "Feed framing: SubTitle",
        idMapping: "js-ai-content-feed-subtitle",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: 0.5,
        placeholders: [
            "{Location}"
        ],
        layers: {
            ...SHARED,
            task: "Write a 20–30 word paragraph describing the experience of staying in the curated properties in {Location}. Focus on the atmosphere, character, and feeling of these stays rather than the broader country’s appeal. Keep the tone inviting, specific, and editorial, avoiding generic travel language or promotional claims.",
            formatting: "The output must be in plain text"
        }
    },
    {
        key: "faqs",
        order: 8,
        name: "FAQ",
        idMapping: "js-ai-content-faqs-structured",
        model: "gpt-5.1-mini",
        maxTokens: 1000,
        temperature: 0.5,
        placeholders: [
            "{Location}",
            "{cities}",
            "{Count}"
        ],
        layers: {
            ...SHARED,
            task: "Write {Count} country-level FAQs for {Location}, using cities with live Sonder inventory: {Cities}. Each FAQ should include a conversational question and a 35–60 word answer that directly recommends the right city for a trip type, season, transport route, stay length, or preference.",
            formatting: 'The output must be valid JSON format, matching the exact structure below with no extra text:  [{"question": "","answer": ""},{"question": "","answer": ""}]'
        }
    }
];
const defaultSelectedBlocks = [
    "title",
    "subtitle",
    "feedTitle"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/buildJsonl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCustomId",
    ()=>buildCustomId,
    "buildJob",
    ()=>buildJob,
    "buildJobs",
    ()=>buildJobs,
    "jobsToJsonl",
    ()=>jobsToJsonl,
    "stringifySlugs",
    ()=>stringifySlugs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/buildPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-client] (ecmascript)");
;
;
function stringifySlugs(slugs) {
    return `[${slugs.map((s)=>`'${s}'`).join(", ")}]`;
}
function buildCustomId(location, pack) {
    return [
        location.id,
        pack.idMapping,
        stringifySlugs(location.slugs)
    ].join(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOM_ID_SEPARATOR"]);
}
function toNumber(value, fallback) {
    if (value === null || value === undefined || String(value).trim() === "") return fallback;
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
}
function buildJob(pack, location, totalBlocks) {
    const { text, missing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assemblePrompt"])(pack, location, totalBlocks);
    const warnings = missing.map((p)=>`${p} has no value for ${location.location || location.key}`);
    if (!String(location.id).trim()) warnings.push(`id is empty for ${location.location || location.key}`);
    if (!pack.idMapping.trim()) warnings.push(`ID Mapping is empty for ${pack.name}`);
    const object = {
        custom_id: buildCustomId(location, pack),
        method: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_METHOD"],
        url: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_URL"],
        body: {
            model: pack.model,
            messages: [
                {
                    role: "system",
                    content: text
                },
                {
                    role: "user",
                    content: ""
                }
            ],
            temperature: toNumber(pack.temperature, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TEMPERATURE"]),
            max_completion_tokens: toNumber(pack.maxTokens, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MAX_TOKENS"]),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTRA_BODY"]
        }
    };
    return {
        packKey: pack.key,
        locationKey: location.key,
        customId: object.custom_id,
        line: JSON.stringify(object),
        warnings
    };
}
function buildJobs({ packs, locations, selectedBlocks, selectedLocations }) {
    const activePacks = [
        ...packs
    ].filter((p)=>selectedBlocks.includes(p.key)).sort((a, b)=>a.order - b.order);
    const activeLocations = locations.filter((l)=>selectedLocations.includes(l.key));
    const jobs = [];
    for (const location of activeLocations){
        for (const pack of activePacks){
            jobs.push(buildJob(pack, location, packs.length));
        }
    }
    return jobs;
}
function jobsToJsonl(jobs) {
    return jobs.map((j)=>j.line).join("\n") + (jobs.length ? "\n" : "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/buildPrompt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assemblePrompt",
    ()=>assemblePrompt,
    "joinLayers",
    ()=>joinLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/promptPacks.js [app-client] (ecmascript)");
;
// Matches {Location}, {Regions}, {Cities}, {cities}, {Count}.
// Letters only, so JSON such as {"Title": ""} is never touched.
const PLACEHOLDER = /\{([A-Za-z_]+)\}/g;
// Placeholder name (lowercase) -> field on the location record.
const FIELD_FOR = {
    location: "location",
    regions: "regions",
    cities: "cities",
    count: "count"
};
function joinLayers(pack, order, total) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$promptPacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER_FIELDS"].map((f)=>(pack.layers[f.key] || "").trim()).filter(Boolean).join("\n").replace(/#X of Y/g, `#${order} of ${total}`);
}
function assemblePrompt(pack, location, totalBlocks) {
    const template = joinLayers(pack, pack.order, totalBlocks);
    const segments = [];
    const missing = [];
    let last = 0;
    let m;
    PLACEHOLDER.lastIndex = 0;
    while((m = PLACEHOLDER.exec(template)) !== null){
        if (m.index > last) segments.push({
            text: template.slice(last, m.index),
            kind: "plain"
        });
        const field = FIELD_FOR[m[1].toLowerCase()];
        const value = field && location ? String(location[field] ?? "").trim() : "";
        if (value) {
            segments.push({
                text: value,
                kind: "filled"
            });
        } else {
            segments.push({
                text: m[0],
                kind: "missing"
            });
            if (!missing.includes(m[0])) missing.push(m[0]);
        }
        last = m.index + m[0].length;
    }
    if (last < template.length) segments.push({
        text: template.slice(last),
        kind: "plain"
    });
    return {
        text: segments.map((s)=>s.text).join(""),
        segments,
        missing
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Fallbacks used when a prompt pack leaves a setting blank (as in the sheet).
__turbopack_context__.s([
    "CUSTOM_ID_SEPARATOR",
    ()=>CUSTOM_ID_SEPARATOR,
    "DEFAULT_MAX_TOKENS",
    ()=>DEFAULT_MAX_TOKENS,
    "DEFAULT_TEMPERATURE",
    ()=>DEFAULT_TEMPERATURE,
    "EXTRA_BODY",
    ()=>EXTRA_BODY,
    "REQUEST_METHOD",
    ()=>REQUEST_METHOD,
    "REQUEST_URL",
    ()=>REQUEST_URL
]);
const DEFAULT_MAX_TOKENS = 1000;
const DEFAULT_TEMPERATURE = 1;
const REQUEST_METHOD = "POST";
const REQUEST_URL = "/v1/chat/completions";
const EXTRA_BODY = {
    frequency_penalty: 0,
    top_p: 1,
    reasoning_effort: "low"
};
const CUSTOM_ID_SEPARATOR = "~*~";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);})()

//# sourceMappingURL=_0q_rfclf_9asu._.js.map