import { z } from 'zod';
export declare const sharedContract: {
    delete: {
        pathParams: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
        }, {
            id?: number;
        }>;
        summary: "Delete a reflection";
        method: "DELETE";
        path: "/my/:id";
        responses: {
            204: typeof import("@ts-rest/core").ContractNoBody;
        };
    };
};
