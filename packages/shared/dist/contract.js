"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const c = (0, core_1.initContract)();
exports.sharedContract = c.router({
    delete: {
        method: 'DELETE',
        path: '/my/:id',
        pathParams: zod_1.z.object({
            id: zod_1.z.coerce.number(),
        }),
        responses: {
            204: c.noBody(),
        },
        summary: 'Delete a reflection',
    },
});
//# sourceMappingURL=contract.js.map