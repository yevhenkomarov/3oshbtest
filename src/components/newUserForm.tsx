// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"


// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "./ui/button"

// const formSchema = z.object({
//     name: z.string().min(2).max(50),
//     email: z.string().min(8),
//     created_at: z.date()
// })

// function NewUserForm() {
//     console.log('new user form')
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             name: "",
//             email: ""
//         },
//     })

//     function onSubmit(values: z.infer<typeof formSchema>) {
//         // Do something with the form values.
//         // ✅ This will be type-safe and validated.
//         console.log(values)
//     }

//     return (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     {/* <Input {...field} /> */}
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     {/* <Input type="email" {...field} /> */}
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="w-full">Submit</Button>
//           </form>
//         </Form>
//       );
//     }

// export default NewUserForm