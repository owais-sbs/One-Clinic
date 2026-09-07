"use client";

import React, { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setStatus("success");
      setFeedback("You're on the list. We'll keep you posted.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl flex-grow focus:border-white outline-none transition-all font-medium"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-black hover:text-white border border-white transition-all duration-300 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Subscribe"}
      </button>
      {feedback && (
        <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
};
