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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { resetSchema } from "@/validators/auth";
import { Link } from "react-router-dom";
import appLogo from "@/assets/fire-safety-logo.svg";

type Input = z.infer<typeof resetSchema>;

export default function ResetPassword() {
  const form = useForm<Input>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: Input) {
    console.log(data);
  }

  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#00274F]">
            Forgot Password
          </CardTitle>
          <CardDescription>
            We'll send you an email to reset your password.
          </CardDescription>
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
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="fredbloggs@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#00274F]">
                Send email
              </Button>
              <Link
                to="/login"
                className="hover:underline underline-offset-2 text-[#00274F] font-medium text-sm block w-full text-center my-0"
              >
                Back to login
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
