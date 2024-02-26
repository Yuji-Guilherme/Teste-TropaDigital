import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Insira um e-mail válido'),
  password: z
    .string()
    .min(5, 'A senha deve conter no mínimo 5 caracteres.')
    .regex(/^\d+$/, 'A senha deve conter apenas números'),
  rememberLogin: z.boolean().optional().default(false)
});

export { loginSchema };
