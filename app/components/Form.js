"use client";
import { FaEnvelope } from "react-icons/fa";
import IntlTelInput from "intl-tel-input/reactWithUtils";
const Form = () => {
  return (
    <div className="bg-black px-20 py-10 w-full md:w-[500px]">
      <div>
        <FaEnvelope className="m-auto text-4xl text-white" />
      </div>
      <form className="flex flex-col items-center mail_form">
        <label className="my-3 text-white text-sm">WHATSAPP*</label>
        <div className="w-full">
          <IntlTelInput
            initOptions={{
              initialCountry: "co",
            }}
          />
        </div>
        <label className="my-3 text-white text-sm">E-MAIL*</label>
        <input
          type="email"
          className="w-full"
        />
        <label className="my-3 text-white text-sm">MENSAJE *</label>
        <textarea
          rows={5}
          className="w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-transparent text-white text-sm border p-2 px-6"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
