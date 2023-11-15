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
import { loginSchema } from "@/validators/auth";
import appLogo from "@/assets/fire-safety-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Input = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  async function onSubmit() {
    const formData = form.getValues();

    console.log(formData);

    try {
      const req = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await req.json();
      localStorage.setItem("jwt", res.token);
      console.log(res);

      if (res.error) {
        displayError();
      }

      function displayError() {
        setIsLoginFailed(true);
      }

      if (res.role === "Resident") {
        navigate("/");
      }

      if (res.role === "Admin") {
        navigate("/Admin-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full grid place-items-center w-full">
      <div>
        <img src={appLogo} alt="app logo" className="w-11/12 mb-8 mx-auto" />
        <Card className="w-[420px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#00274F]">
              LOGIN
            </CardTitle>
            <CardDescription>
              Welcome back! Please enter your details.
            </CardDescription>
            {isLoginFailed ? (
              <Alert variant="destructive" className="text-left">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Incorrect Email or Password</AlertDescription>
              </Alert>
            ) : null}
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
                          type="text"
                          placeholder="fredbloggs@gmail.com"
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
                          placeholder="6+ characters"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[#00274F]">
                  Login
                </Button>
                <Link
                  to="/forgotpassword"
                  className="hover:underline underline-offset-2 text-[#00274F] font-medium text-sm block w-full text-center my-0"
                >
                  Forgot password
                </Link>
              </form>
              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-[#00274F] after:ml-4 after:block after:h-px after:flex-grow after:bg-[#00274F]">
                or
              </div>
              <p className="text-[#00274F] text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="hover:underline underline-offset-2 text-[#00274F] font-medium"
                >
                  Sign up
                </Link>
              </p>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
