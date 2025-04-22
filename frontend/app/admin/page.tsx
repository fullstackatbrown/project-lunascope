"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../backend/util/FirebaseInit";

interface Testimonial {
  id: string;
  name: string;
  bio: string;
  message: string;
  status?: "pending" | "approved" | "rejected";
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "lunascope2024"; // In a real app, this should be stored securely

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const fetchTestimonials = async () => {
    try {
      const collectionRef = collection(db, "Testimonials");
      const snapshot = await getDocs(collectionRef);
      const testimonialData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Testimonial, 'id'>
      }));
      setTestimonials(testimonialData);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchTestimonials();
    }
  }, [isAuthenticated]);

  const handleApproval = async (id: string, approved: boolean) => {
    try {
      const testimonialRef = doc(db, "Testimonials", id);
      await updateDoc(testimonialRef, { status: approved ? "approved" : "rejected" });
      await fetchTestimonials();
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

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
                <button
                  onClick={() => handleApproval(testimonial.id, true)}
                  className={`px-4 py-2 rounded ${
                    testimonial.status === "approved"
                      ? "bg-green-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white transition-colors`}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleApproval(testimonial.id, false)}
                  className={`px-4 py-2 rounded ${
                    testimonial.status === "rejected"
                      ? "bg-red-600"
                      : "bg-red-500 hover:bg-red-600"
                  } text-white transition-colors`}
                >
                  Reject
                </button>
                <span className="ml-4 text-gray-400">
                  Status: {testimonial.status || "pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
