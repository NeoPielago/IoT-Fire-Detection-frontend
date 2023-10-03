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
import { signUpSchema } from "@/validators/auth";
import appLogo from "@/assets/fire-safety-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

type Input = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");

  const form = useForm<Input>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      streetName: "",
      barangay: "",
      city: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      contactNo: contactNo,
      streetName: streetName,
      barangay: barangay,
      city: city,
      email: email,
      password: password,
    };

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
      console.log(res.role);
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
    <div>
      <img src={appLogo} alt="app logo" className="w-full mb-2" />
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#00274F]">
            Sign Up
          </CardTitle>
          <CardDescription>
            Create an account by filling out this form.
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
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Fred"
                        {...field}
                        className="font-normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Bloggs"
                        {...field}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Contact Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="09xxxxxxxxx"
                        {...field}
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="streetName"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Street Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Main Street"
                        {...field}
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="barangay"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      Barangay
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Signal"
                        {...field}
                        value={barangay}
                        onChange={(e) => setBarangay(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-col justify-start">
                    <FormLabel className="w-full flex h-fit text-[#00274F]">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your city"
                        {...field}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-[#00274F]">
                Sign Up
              </Button>
            </form>
            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-[#00274F] after:ml-4 after:block after:h-px after:flex-grow after:bg-[#00274F]">
              or
            </div>
            <p className="text-[#00274F] text-sm">
              Already have an account?{" "}
              <Link
                to={"/Login"}
                className="hover:underline underline-offset-2 text-[#00274F] font-medium"
              >
                Log in
              </Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
