import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const localContract = c.router(
  {
    delete: {
      method: 'DELETE',
      path: '/my/:id',
      pathParams: z.object({
        id: z.coerce.number(),
      }),
      responses: {
        204: c.noBody(),
      },
      summary: 'Delete a reflection',
    },
  },
  {
    commonResponses: {
      422: z.object({
        message: z.string(),
      }),
    },
  },
);
