(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/types/cliente/cliente.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cliente",
    ()=>Cliente
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
'use client';
;
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8080'
});
const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
api.interceptors.request.use((config)=>{
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/clienteService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alterarStatusCliente",
    ()=>alterarStatusCliente,
    "buscarClienteId",
    ()=>buscarClienteId,
    "buscarListaCliente",
    ()=>buscarListaCliente,
    "editarCliente",
    ()=>editarCliente,
    "salvarCliente",
    ()=>salvarCliente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/api.ts [app-client] (ecmascript)");
'use client';
;
async function buscarListaCliente() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/cliente/listar');
    if (response.status === 200) {
        return response.data;
    }
    return [];
}
async function alterarStatusCliente(id, novoStatus) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/cliente/' + id + '/AlterarStatus', {
        status: novoStatus
    });
    if (response.status !== 200) {}
}
async function editarCliente(cliente) {
    var response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/cliente/' + cliente.id, cliente);
    if (response.status !== 200) {}
}
async function salvarCliente(cliente) {
    var response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/cliente/salvar', cliente);
    if (response.status !== 200) {}
}
async function buscarClienteId(id) {
    const clienteResult = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/cliente/' + id);
    return clienteResult.data;
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/DraftContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$cliente$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/cliente/cliente.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clienteService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clienteService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ClientesForm({ clienteExistente }) {
    _s();
    //ele vai trazer o clienteExistente caso não seja para fazer um novo
    const [clientes, setClientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(clienteExistente || new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$cliente$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](null, '', '', '', "ATIVO"));
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { draft, salvarProgresso, limparRascunho, temRascunho } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$DraftContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientesForm.useEffect": ()=>{
            if (temRascunho && draft && !clientes.nome && !clientes.cpf) {
                setClientes({
                    "ClientesForm.useEffect": (prev)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$cliente$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](prev.id, draft.nome || prev.nome, draft.telefone || prev.telefone, draft.cpf || prev.cpf, prev.status)
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
        setClientes((prev)=>new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$cliente$2f$cliente$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cliente"](prev.id, campo === 'nome' ? valor : prev.nome, campo === 'telefone' ? valor : prev.telefone, campo === 'cpf' ? valor : prev.cpf, prev.status));
        // 3. Enviamos os dados ATUALIZADOS para o contexto (não a variável 'clientes' antiga)
        salvarProgresso(dadosAtualizados);
    };
    // salvar os dados do formulario
    const handleSalvar = async (formData)=>{
        if (clienteExistente) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clienteService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editarCliente"])(clientes);
        } else {
            debugger;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clienteService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salvarCliente"])(clientes);
        }
        limparRascunho();
        router.push("/clientes");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                                lineNumber: 102,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500 uppercase tracking-widest mt-1",
                        children: "Preencha os dados para registrar no sistema"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                lineNumber: 100,
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
                                lineNumber: 111,
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
                                    lineNumber: 115,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 110,
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
                                        lineNumber: 130,
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
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 129,
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
                                        lineNumber: 146,
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
                                        lineNumber: 149,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 127,
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
                                lineNumber: 162,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]",
                                children: "Salvar Cadastro"
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                        lineNumber: 161,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(admin)/clientes/components/ClientesForm.tsx",
        lineNumber: 97,
        columnNumber: 13
    }, this);
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

//# sourceMappingURL=app_3e3bfb23._.js.map