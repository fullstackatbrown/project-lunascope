'use client';

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/util/FirebaseInit";
import { useTranslation } from "@/i18n/hooks";

const TestimonialForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState(t("Submit"));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "Testimonials");
      await addDoc(collectionRef, {
        name,
        bio,
        message,
      });
      setName("");
      setBio("");
      setMessage("");
      setButtonText("Submitted");
      setTimeout(() => setButtonText("Submit"), 1500);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="flex flex-col gap-2 max-w-lg w-full"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          handleSubmit(e);
          setName("");
          setBio("");
          setMessage("");
        }}
      >
        <label className="w-full">
          <input
            type="text"
            placeholder={t("Enter your name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border-2 rounded-md w-full"
          />
        </label>
        <label className="w-full">
          <textarea
            placeholder={t("Enter your bio")}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            className="p-2 border-2 rounded-md w-full"
          />
        </label>
        <label className="w-full">
          <textarea
            placeholder={t("Enter your message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="p-2 max-w-lg border-2 rounded-md w-full"
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-150"
          onClick={() => setButtonText(t("Submitted"))}
          disabled={buttonText === t("Submitted")}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
