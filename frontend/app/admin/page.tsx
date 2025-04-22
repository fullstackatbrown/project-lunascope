"use client";

import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  bio: string;
  message: string;
  status?: "pending" | "approved" | "rejected";
}

const AdminPage = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([
    {
      id: "1",
      name: "John Doe",
      bio: "Software Engineer",
      message:
        "I've been using LunaScope for a few weeks now and I have to say, it's been a game-changer for me. The ease of use and the features it offers are top-notch.",
      status: "pending",
    },
    {
      id: "2",
      name: "Jane Doe",
      bio: "Marketing Manager",
      message:
        "I was skeptical about using a new scope at first, but LunaScope has exceeded my expectations. The customer support is also very responsive and helpful.",
      status: "pending",
    },
    {
      id: "3",
      name: "Bob Smith",
      bio: "Product Manager",
      message:
        "I've tried several different scopes in the past, but LunaScope is by far the best. The UI is very intuitive and the features are exactly what I need.",
      status: "pending",
    },
  ]);

  const handleStatusChange = (testimonialId: string, newStatus: "approved" | "rejected") => {
    setTestimonials(
      testimonials.map((testimonial) =>
        testimonial.id === testimonialId ? { ...testimonial, status: newStatus } : testimonial
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Testimonial Management</h1>
        <div className="grid gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h2>
              <p className="text-gray-400 mb-2">{testimonial.bio}</p>
              <p className="text-gray-300 mb-4">{testimonial.message}</p>
              <div className="flex gap-4">
                <span className="ml-4 text-gray-400">
                  Status: {testimonial.status || "pending"}
                </span>
                {testimonial.status !== "approved" && (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleStatusChange(testimonial.id, "approved")}
                    >
                      Accept
                    </button>
                    {testimonial.status !== "rejected" && (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleStatusChange(testimonial.id, "rejected")}
                      >
                        Reject
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
