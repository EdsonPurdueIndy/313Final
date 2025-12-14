import React from "react";
import Header from "../components/Header"; // make sure the path is correct

const Contact = ({
  title = "Contact Us",
  description = "Reach out to us for support, product questions, or partnerships.",
  email = "support@byteforge.com",
  phone = "+1 (317) xxx-xxxx",
  location = "Indianapolis, IN",
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-emerald-200">
      {/* Header with Inter font and emerald text */}
      <Header
        backgroundPic="/images/contact-bg.jpg" // add your desired header background
        fontFamily="'Inter', sans-serif"
        textColor="text-emerald-200"
      />

      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>

        <p className="text-emerald-300 mb-6">{description}</p>

        <div className="space-y-3 bg-neutral-900 border border-emerald-700/40 rounded-xl p-6">
          <p>
            <span className="font-semibold text-emerald-400">Email:</span>{" "}
            <span>{email}</span>
          </p>

          <p>
            <span className="font-semibold text-emerald-400">Phone:</span>{" "}
            {phone}
          </p>

          <p>
            <span className="font-semibold text-emerald-400">Location:</span>{" "}
            {location}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
