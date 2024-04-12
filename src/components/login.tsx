import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useForm } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Login = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(32)
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formSchemaRegister = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(32),
    email:z.string().min(13).max(16),
    address:z.string().min(10).max(20),

  });

  const formRegister = useForm<z.infer<typeof formSchemaRegister>>({
    resolver: zodResolver(formSchemaRegister),
    defaultValues: {
      username: "",
      email:"",
      password: "",
      address:"",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onSubmitRegister(values: z.infer<typeof formSchemaRegister>) {
    console.log(values);
  }

  return (
    <Tabs defaultValue="sign-in" className="w-[400px] mx-auto mt-[3rem] mb-8">
      <TabsList className="w-full">
        <TabsTrigger value="sign-in" className="w-full">
          Sign In
        </TabsTrigger>
        <TabsTrigger value="sign-up" className="w-full">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in" className="border-solid rounded-md h-[40vh] mt-[1rem]  border-2">
        <div className="px-4 py-2 w-full flex-col flex items-center">
          <h1 className="flex text-1xl text-black font-bold">Login</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </TabsContent>
      <TabsContent value="sign-up" className="border-solid rounded-md h-full mt-[1rem]  border-2">
        <div className="px-4 py-2 w-full h-full flex-col flex items-center">
          <h1 className="flex text-1xl text-black font-bold">Register</h1>
          <Form {...formRegister}>
            <form onSubmit={formRegister.handleSubmit(onSubmitRegister)} className="space-y-2 w-full">
              <FormField
                control={formRegister.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formRegister.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="shadcn@gmailc.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formRegister.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formRegister.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Login;
