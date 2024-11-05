import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Assets
import "@/assets/styles/pages/sections/contact.section.scss";
import separator from "@/assets/images/separator_black.png";

// Components
import Button from "@/components/shared/Button.component";

interface IFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactSection = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email(),
    message: Yup.string().required("Message is required"),
  });

  const { register, handleSubmit, formState } = useForm<IFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const submitHandler: SubmitHandler<IFormValues> = async (data) => {
    console.log("Submitted data >> ", data);
  };

  return (
    <section className="contact-section flex flex-col items-center">
      <h2 className="subtitle mb-10" id="contact">
        Contact
      </h2>
      <p className="mb-8 text-center open-sans">
        My name is Dmytro Bondar. I'm professional frontend developer with over
        than 4 years of experience in building scalable web applications with
        user-friendly UI & UX.
      </p>
      <img src={separator} alt="separator" className="mb-10" />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-center w-full"
      >
        <div className="mb-8 w-3/5">
          <input
            id="name"
            {...register("name")}
            className="contact-section__input w-full border-black border-b-4 border-l-4 px-3 py-1.5 pt-2 mb-1 placeholder:uppercase placeholder:text-xs placeholder:font-bold placeholder:tracking-wider"
            placeholder="Enter your name*"
          />
          <div className="text-md text-red-600">{errors.name?.message}</div>
        </div>

        <div className="mb-8 w-3/5">
          <input
            id="email"
            {...register("email")}
            className="contact-section__input w-full border-black border-b-4 border-l-4 px-3 py-1.5 pt-2 mb-1 placeholder:uppercase placeholder:text-xs placeholder:font-bold placeholder:tracking-wider"
            placeholder="Enter your email*"
          />
          <div className="text-md text-red-600">{errors.email?.message}</div>
        </div>

        <div className="mb-8 w-3/5">
          <input
            id="phone"
            {...register("phone")}
            className="contact-section__input w-full border-black border-b-4 border-l-4 px-3 py-1.5 pt-2 mb-1 placeholder:uppercase placeholder:text-xs placeholder:font-bold placeholder:tracking-wider"
            placeholder="Phone number"
          />
          <div className="text-md text-red-600">{errors.phone?.message}</div>
        </div>

        <div className="mb-10 w-3/5">
          <textarea
            id="message"
            {...register("message")}
            className="contact-section__input w-full border-black border-b-4 border-l-4 px-3 py-1.5 pt-2 mb-1 placeholder:uppercase placeholder:text-xs placeholder:font-bold placeholder:tracking-wider"
            placeholder="Enter your message*"
            rows={6}
          />
          <div className="text-md text-red-600">{errors.message?.message}</div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default ContactSection;
