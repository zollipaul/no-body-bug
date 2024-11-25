import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const sharedContract = c.router({
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
});
