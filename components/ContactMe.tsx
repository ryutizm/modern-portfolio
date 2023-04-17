import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from "./Footer";

type Inputs = {
  givenName: string;
  surName: string;
  email: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ryutizm1103@gmail.com?subject={formData.subject}&body=
      Hi,my name is {formData.givenName}. {formData.message} (${formData.email})`;
  };
  return (
    <div
      className="
      h-screen flex relative flex-col text-center top-24 md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute mt-5 ml-6 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3">
        <h4 className="text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3 ml-3">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ryutizm1103@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-screen mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("givenName")}
              placeholder="Given name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("surName")}
              placeholder="Surname"
              className="contactInput"
              type="text"
            />
          </div>

          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
          <Footer />
      </div>
    </div>
  );
};

export default ContactMe;
