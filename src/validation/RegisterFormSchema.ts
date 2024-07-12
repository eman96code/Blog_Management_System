import { z } from "zod";

const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(30, {
        message: "Username must not be longer than 30 characters.",
      }),
    email: z
      .string({
        required_error: "Please select an email to display.",
      })
      .email(),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(10, {
        message: "Password must not be longer than 10 characters.",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(10, {
        message: "Password must not be longer than 10 characters.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export default RegisterFormSchema;
