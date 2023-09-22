import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validators/auth";
import appLogo from "@/assets/fire-safety-logo.svg";

type Input = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Input) {
    console.log(data);
  }

  return (
    <div>
      <img src={appLogo} alt="app logo" className="w-full mb-10" />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#00274F]">
            LOGIN
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 text-left"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#00274F]">
                Login
              </Button>
              <a
                href="#"
                className="hover:underline underline-offset-2 text-[#00274F] font-medium text-sm block w-full text-center my-0"
              >
                Forgot password
              </a>
            </form>
            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-[#00274F] after:ml-4 after:block after:h-px after:flex-grow after:bg-[#00274F]">
              or
            </div>
            <p className="text-[#00274F] text-sm">
              Don't have an account?{" "}
              <a
                href="#"
                className="hover:underline underline-offset-2 text-[#00274F] font-medium"
              >
                Sign up
              </a>
            </p>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
