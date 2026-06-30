(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/mock/cliente.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cliente",
    ()=>Cliente,
    "ClienteMock",
    ()=>ClienteMock
]);
class Cliente {
    id;
    nome;
    telefone;
    cpf;
    status;
    constructor(id, nome, telefone, cpf, status){
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.status = status;
    }
}
class ClienteMock {
    static clienteDB = [
        new Cliente(1, "Guilherme", "(48)9999-8888", "123.456.789-10", "true"),
        new Cliente(2, "Rogério", "(48)7777-6666", "321.654.789-09", "true"),
        new Cliente(3, "Carlos", "(48)5555-4444", "020.032.689-04", "true")
    ];
    static async listarTodos() {
        return [
            ...this.clienteDB
        ];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/clientes/components/Alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/mock/cliente.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/DraftContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Alert = ({ setClientes })=>{
    _s();
    const { draft, temRascunho, limparRascunho } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"])();
    const [visivel, setVisivel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Se não tiver rascunho ou o alerta já foi fechado, não renderiza nada
    if (!temRascunho || !visivel) return null;
    const handleContinuar = ()=>{
        if (draft) {
            setClientes((prev)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](prev.id, draft.nome || prev.nome, draft.telefone || prev.telefone, draft.cpf || prev.cpf, prev.status));
        }
        setVisivel(false);
    };
    const handleNovo = ()=>{
        limparRascunho();
        setVisivel(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#2B344B] p-8 rounded-[2.5rem] shadow-2xl max-w-md w-full border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-black text-slate-900 dark:text-slate-50 uppercase italic tracking-tighter",
                    children: [
                        "Cadastro ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-amber-500",
                            children: "Incompleto"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                            lineNumber: 38,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed",
                    children: "Notamos que você começou um cadastro recentemente. Deseja recuperar os dados ou prefere iniciar um novo registro do zero?"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNovo,
                            className: "flex-1 px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors order-2 sm:order-1",
                            children: "Descartar"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleContinuar,
                            className: "flex-1 px-8 py-4 bg-amber-500 text-[#2B344B] font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95 order-1 sm:order-2",
                            children: "Continuar"
                        }, void 0, false, {
                            fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(admin)/clientes/components/Alert.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Alert, "h9Jmn2Cr18LGinhIdhAnZYcL6hQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"]
    ];
});
_c = Alert;
var _c;
__turbopack_context__.k.register(_c, "Alert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/clientes/components/ClientesForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientesForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/mock/cliente.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/DraftContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$clientes$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/clientes/components/Alert.tsx [app-client] (ecmascript)");
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
function ClientesForm({ clienteExistente }) {
    _s();
    //ele vai trazer o clienteExistente caso não seja para fazer um novo
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(clienteExistente || new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](null, '', '', '', "ATIVO"));
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { draft, salvarProgresso, limparRascunho, temRascunho } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientesForm.useEffect": ()=>{
            if (temRascunho && draft && !clientes.nome && !clientes.cpf) {
                setClientes({
                    "ClientesForm.useEffect": (prev)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](prev.id, draft.nome || prev.nome, draft.telefone || prev.telefone, draft.cpf || prev.cpf, prev.status)
                }["ClientesForm.useEffect"]);
            }
        }
    }["ClientesForm.useEffect"], []);
    // const handleChange = (campo: 'nome' | 'cpf' | 'telefone', valor: string) => {
    //     setClientes(prev =>
    //         new Cliente(
    //             prev.id,
    //             campo === 'nome' ? valor : prev.nome,
    //             campo === 'telefone' ? valor : prev.telefone,
    //             campo === 'cpf' ? valor : prev.cpf,
    //             prev.status
    //         )
    //     )
    //     salvarProgresso(clientes)
    // }
    const handleChange = (campo, valor)=>{
        // 1. Criamos os dados atualizados primeiro para garantir que temos o valor novo
        const dadosAtualizados = {
            ...clientes,
            [campo]: valor
        };
        // 2. Atualizamos o estado da tela
        setClientes((prev)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$mock$2f$cliente$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](prev.id, campo === 'nome' ? valor : prev.nome, campo === 'telefone' ? valor : prev.telefone, campo === 'cpf' ? valor : prev.cpf, prev.status));
        // 3. Enviamos os dados ATUALIZADOS para o contexto (não a variável 'clientes' antiga)
        salvarProgresso(dadosAtualizados);
    };
    // salvar os dados do formulario
    const handleSalvar = async (formData)=>{
        if (clienteExistente) {
            var response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('http://localhost:8080/cliente/' + clienteExistente.id, clientes);
            if (response.status !== 200) {
                return;
            }
        } else {
            var response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:8080/cliente/salvar', clientes);
            if (response.status !== 200) {
                return;
            }
        }
        limparRascunho();
        router.push("/clientes");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$clientes$2f$components$2f$Alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                setClientes: setClientes
            }, void 0, false, {
                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: handleSalvar,
                className: "max-w-2xl mx-auto space-y-8 bg-white dark:bg-[#2B344B] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-black/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase italic",
                                children: [
                                    "Cadastro de ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-500",
                                        children: "Cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 114,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 uppercase tracking-widest mt-1",
                                children: "Preencha os dados para registrar no sistema"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2",
                                        children: "Nome completo:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            value: clientes.nome,
                                            type: "text",
                                            onChange: (e)=>{
                                                handleChange('nome', e.target.value);
                                            },
                                            placeholder: "Ex: Carlos Silva",
                                            className: "w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2",
                                                children: "CPF:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                                lineNumber: 142,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: clientes.cpf,
                                                type: "text",
                                                maxLength: 14,
                                                onChange: (e)=>{
                                                    handleChange('cpf', e.target.value);
                                                },
                                                placeholder: "000.000.000-00",
                                                className: "w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2",
                                                children: "Telefone:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                value: clientes.telefone,
                                                type: "text",
                                                onChange: (e)=>{
                                                    handleChange('telefone', e.target.value);
                                                },
                                                placeholder: "(00) 00000-0000",
                                                className: "w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-4 mt-4 pt-6 border-t border-slate-100 dark:border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/clientes",
                                        className: "px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors",
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]",
                                        children: "Salvar Cadastro"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(ClientesForm, "rHGJE2RU0IaQyjuqxP4FgnGRshk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"]
    ];
});
_c = ClientesForm;
var _c;
__turbopack_context__.k.register(_c, "ClientesForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_aeb012e2._.js.map