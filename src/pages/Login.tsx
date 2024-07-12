import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoginFormSchema from "../validation/LoginFormSchema";
import { Button } from "@/components/ui/button";

const Login = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-lg bg-card p-8 shadow-lg"
        >
          <div className="grid gap-2 py-4">
            <div className="mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-bold text-primary">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-bold text-primary">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
