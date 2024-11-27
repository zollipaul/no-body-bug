"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedContractWithCommonResponse = exports.sharedContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const c = (0, core_1.initContract)();
exports.sharedContract = c.router({
    delete: {
        method: "DELETE",
        path: "/my/:id",
        pathParams: zod_1.z.object({
            id: zod_1.z.coerce.number(),
        }),
        responses: {
            204: c.noBody(),
        },
        summary: "Delete a reflection",
    },
});
const cCommonResponse = (0, core_1.initContract)();
exports.sharedContractWithCommonResponse = cCommonResponse.router({
    foo: {
        method: "GET",
        path: "/foo",
        responses: {
            200: zod_1.z.object({
                bar: zod_1.z.string(),
            }),
        },
    },
    // commenting out bar 
    bar: {
        method: "DELETE",
        path: "/bar",
        responses: {
            200: zod_1.z.object({
                bar: zod_1.z.string(),
            }),
        },
    },
}, {
    commonResponses: {
        422: zod_1.z.object({
            message: zod_1.z.enum(["foobar"]),
        }),
    },
});
//# sourceMappingURL=contract.js.map