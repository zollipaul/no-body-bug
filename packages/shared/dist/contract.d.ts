import { z } from "zod";
export declare const sharedContract: {
    delete: {
        pathParams: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        summary: "Delete a reflection";
        method: "DELETE";
        path: "/my/:id";
        responses: {
            204: typeof import("@ts-rest/core").ContractNoBody;
        };
    };
};
export declare const sharedContractWithCommonResponse: {
    foo: {
        method: "GET";
        path: "/foo";
        responses: {
            422: z.ZodObject<{
                message: z.ZodEnum<["foobar"]>;
            }, "strip", z.ZodTypeAny, {
                message: "foobar";
            }, {
                message: "foobar";
            }>;
            200: z.ZodObject<{
                bar: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                bar: string;
            }, {
                bar: string;
            }>;
        };
    };
    bar: {
        method: "DELETE";
        path: "/bar";
        responses: {
            422: z.ZodObject<{
                message: z.ZodEnum<["foobar"]>;
            }, "strip", z.ZodTypeAny, {
                message: "foobar";
            }, {
                message: "foobar";
            }>;
            200: z.ZodObject<{
                bar: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                bar: string;
            }, {
                bar: string;
            }>;
        };
    };
};
//# sourceMappingURL=contract.d.ts.map