import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
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

  const onSubmit = async (data: FieldValues) => {
    const emailjs = (await import("@emailjs/browser")).default;
    const templateParams = {
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    };
    toast.promise(
      emailjs.send(
        "service_f5k9vc3",
        "template_rlb8ack",
        templateParams,
        "VCkKV2a40vQcZlQQV"
      ),
      {
        pending: "Sending email...",
        success: "Email sent successfully",
        error: "There was an error sending the email!",
      }
    );
  };

  return (
    <motion.div
      className="pt-20 p-10 flex flex-col gap-24 lg:px-40 lg:h-screen lg:justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Contact</title>
      </Head>
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
              <div className="w-full grid gap-4">
                <input
                  {...register("name", { required: true })}
                  className=" bg-transparent border p-3"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className=" w-full grid gap-4">
                <input
                  {...register("email", { required: true })}
                  className="bg-transparent border p-3"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>
            <textarea
              {...register("message", { required: true })}
              className="bg-transparent border p-3"
              placeholder="Message"
              cols={30}
              rows={7}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Text message is required</span>
            )}
            <button className="bg-transparent p-2 border-2 w-24" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </motion.div>
  );
};

export default Contact;
