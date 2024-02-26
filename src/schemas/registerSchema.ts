import { z } from 'zod';

const registerSchema = z
  .object({
    name: z.string().min(3, 'Por favor insira um nome válido de usuário.'),
    email: z.string().email('Insira um e-mail válido'),
    password: z
      .string()
      .min(5, 'A senha deve conter no mínimo 5 caracteres.')
      .regex(/^\d+$/, 'A senha deve conter apenas números'),
    confirmPassword: z.string(),
    conditionsTerms: z.literal(true, {
      errorMap: () => ({
        message: 'Para se registar é necessário aceitar os termos e condições'
      })
    }),
    rememberLogin: z.boolean().optional().default(false)
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais.'
  });

export { registerSchema };
