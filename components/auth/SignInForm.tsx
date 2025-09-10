"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { SignInSchema } from "@/lib/validations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      console.log(res?.status);
      console.log({ ...values });

      if (res?.status === 200) {
        router.push("/");
      }
    } catch {
      console.log("Error in sending axios req");
    }
  };

  return (
    <div className="w-full h-[300px] border border-gray-200 rounded-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          action="#"
          className="p-5 space-y-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" className="w-full" />
                </FormControl>
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" className="w-full" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit"> Sign In</Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
