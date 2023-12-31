import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().min(5),
  message: z.string().min(20),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the data", data);
  };

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      className="pt-20 p-10 flex flex-col gap-24 lg:pl-20"
    >
      <div className="Title">
        <h1 className="text-5xl mb-4 py-8 font-marcellus">Contact Me</h1>
        <hr className="lg:w-1/2" />
      </div>
      <div className="Main grid lg:grid-cols-3 gap-4">
        <div className="left-col flex flex-col gap-10 pb-14 ">
          <p className="text-3xl font-marcellus">Get in touch</p>
          <div className="Email flex gap-2">
            <p className="font-bold">Email:</p>
            <a
              className="border-b"
              href="mailto:younes.khadraoui.pro@gmail.com"
            >
              younes.khadraoui.pro@gmail.com
            </a>
          </div>
          <div className="Phone flex gap-2">
            <p className="font-bold">Phone: </p>
            <p>(+213) 781 041 216</p>
          </div>
          <p className="text">
            Thank you for visiting my portfolio. <br /> I am excited to hear
            from you and discuss potential opportunities or collaborations.{" "}
            <br />
            Please feel free to reach out using the contact information below
          </p>
        </div>
        <div className="right-col lg:col-span-2">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                {...register("name", { required: true })}
                className="bg-black border p-3 w-full"
                placeholder="Name"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
              <input
                {...register("email", { required: true })}
                className="bg-black border p-3 w-full"
                placeholder="Email"
                type="email"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <textarea
              {...register("message", { required: true })}
              className="bg-black border p-3"
              placeholder="Message"
              cols={30}
              rows={7}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Text message is required</span>
            )}
            <button className="bg-black p-2 border-2 w-24" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
