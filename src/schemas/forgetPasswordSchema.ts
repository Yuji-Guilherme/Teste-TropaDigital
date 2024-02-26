import { z } from 'zod';

const forgetPasswordSchema = z.object({
  email: z.string().email('Insira um e-mail válido')
});

export { forgetPasswordSchema };
