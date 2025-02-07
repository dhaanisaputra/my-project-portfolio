"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [showPopup, setShowPopup] = useState(false); // ⬅️ Tambahkan ini

  useEffect(() => {
    if (isSuccess !== null) {
      setShowPopup(true);
    }
  }, [isSuccess]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null.");
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_6e0zpm4",
        "template_an489yy",
        form.current,
        { publicKey: "PCuOSdoFxURlXalzg" }
      );
      console.log("SUCCESS!", response);
      setMessage("Email sent successfully!");
      setIsSuccess(true);
      form.current.reset(); // Reset form setelah berhasil
    } catch (error) {
      console.error("FAILED...", error);
      setMessage("Failed to send email. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-[#09101a] pt-[4rem] md:pt-[8rem] flex flex-col justify-center sm:py-12">
      <h1 className="heading pb-[6rem]">
        Contact<span className="text-yellow-400"> Me</span>
      </h1>
      <div data-aos="fade-up" data-aos-delay="100" className="relative py-4 sm:max-w-4xl sm:mx-auto w-full px-4 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl w-full"></div>
        <div className="relative px-6 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-16 flex flex-col md:flex-row md:items-start w-full">
          <div className="md:w-1/2 text-white md:pr-10">
            <h3 className="text-3xl font-semibold mb-4">I`m available for full-time opportunities</h3>
            <p>
              Feel free to directly contact me via
              <a className="hover:text-yellow-400 transition-colors" href="https://www.linkedin.com/in/mochamad-dani-saputra-436531290/">
                <u> LinkedIn</u>
              </a>.
            </p>
          </div>
          <div className="md:w-1/2 w-full mt-8 md:mt-0 mb-8 md:mb-0 sm:mb-10">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" name="from_name" required />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email_sender" required />
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" placeholder="Type your message here..." name="message" required />
              <input className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Send ➤" />
            </form>

            {/* ✅ Render popup hanya jika `showPopup` true */}
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <p className={isSuccess ? "text-green-600" : "text-red-600"}>{message}</p>
                  <button onClick={() => setShowPopup(false)} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;