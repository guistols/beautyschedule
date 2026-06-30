(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/mock/servico.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Servico",
    ()=>Servico
]);
class Servico {
    id;
    descricao;
    tempo;
    preco;
    status;
    constructor(id, descricao, tempo, preco, status){
        this.id = id;
        this.descricao = descricao;
        this.tempo = tempo;
        this.preco = preco;
        this.status = status;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/servicos/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/(admin)/servicos/page.tsx'\n\nExpected a semicolon");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=app_2b92b64c._.js.map