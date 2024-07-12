import { z } from "zod";

const LoginFormSchema = z.object({
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
});
export default LoginFormSchema;
