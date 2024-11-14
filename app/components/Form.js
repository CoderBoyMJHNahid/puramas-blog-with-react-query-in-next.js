"use client";
import dynamic from "next/dynamic";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

// Dynamically import the IntlTelInput component
const IntlTelInput = dynamic(() => import("intl-tel-input/react"), {
  ssr: false,
});

const Form = () => {
  const [formData, setFormData] = useState({
    whatsapp: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  // Handle changes for phone number, validity, and error code
  const handlePhoneChange = (value, isValid) => {
    setFormData((prevData) => ({ ...prevData, whatsapp: value }));
    console.log("Phone Value: ", value);
    console.log("Is Valid: ", isValid);
  };

  const handleErrorCodeChange = (errorCode) => {
    console.log("Error Code: ", errorCode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the form data
    const form_data = {
      phone: formData.whatsapp, // The phone is now managed by state
      email: formData.email,
      message: formData.message,
    };

    console.log("Form Data:", form_data);

    try {
      const response = await fetch("https://contact.avimex.co/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_data),
      });

      const result = await response.json();
      console.log("Submission Result:", result);

      if (result.status) {
        setSuccess(true);
        setFormData({ whatsapp: "", email: "", message: "" });
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black px-20 py-10 w-full md:w-[500px]">
      <div>
        <FaEnvelope className="m-auto text-4xl text-white" />
      </div>
      <form
        className="flex flex-col items-center mail_form"
        onSubmit={handleSubmit}
      >
        <label className="my-3 text-white text-sm">WHATSAPP*</label>
        <div className="w-full">
          <IntlTelInput
            initialValue={formData.whatsapp}  // bind the state to the initial value
            onChangeNumber={handlePhoneChange} // Update state on phone number change
            onChangeValidity={(isValid) => console.log("Phone Validity:", isValid)}  // Check phone validity
            onChangeErrorCode={handleErrorCodeChange} // Handle error code if any
            initOptions={{
              initialCountry: "us",
              utilsScript: "/intl-tel-input/js/utils.js?1730730622316",  // Ensure this script path is correct
            }}
          />
        </div>

        <label className="my-3 text-white text-sm">E-MAIL*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          required
        />

        <label className="my-3 text-white text-sm">MENSAJE *</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-transparent text-white text-sm border p-2 px-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {success === true && (
          <p className="text-green-500 text-sm mt-4">
            Mensaje enviado con éxito!
          </p>
        )}
        {success === false && (
          <p className="text-red-500 text-sm mt-4">
            Error al enviar el mensaje.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
