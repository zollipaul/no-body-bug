import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const sharedContract = c.router({
  delete: {
    method: "DELETE",
    path: "/my/:id",
    pathParams: z.object({
      id: z.coerce.number(),
    }),
    responses: {
      204: c.noBody(),
    },
    summary: "Delete a reflection",
  },
});


const cCommonResponse = initContract();

export const sharedContractWithCommonResponse = cCommonResponse.router(
  {
    foo: {
      method: "GET",
      path: "/foo",
      responses: {
        200: z.object({
          bar: z.string(),
        }),
      },
    },
    // commenting out this method will remove error in apps/nest/src/app.controller.ts 
    bar: {
      method: "GET",
      path: "/bar",
      responses: {
        200: z.object({
          bar: z.string(),
        }),
      },
    },
  },
  {
    commonResponses: {
      422: z.object({
        message: z.enum(["foobar"]),
      }),
    },
  }
);
