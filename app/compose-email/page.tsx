"use client";

import React, { useState, FormEvent } from "react";

export default function ComposeEmail() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Email Sent Successfully!");
        form.reset();
      } else {
        const result = await res.json();
        alert(`Error: ${result.error?.message || "Failed to send"}`);
      }
    } catch (err) {
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Compose Email</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        {/* Full Name Field (Mandatory) */}
        <div>
          <label style={labelStyle}>Your Name:</label>
          <input
            name="senderName"
            type="text"
            placeholder="e.g. Rohan"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Your Email:</label>
          <input
            name="fromEmail"
            type="email"
            placeholder="rohan@gmail.com"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Subject:</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Message:</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message..."
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div>
          <label style={labelStyle}>Attachment:</label>
          <input name="photo" type="file" accept="image/*" />
        </div>

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Sending..." : "Send Email Now"}
        </button>
      </form>
    </div>
  );
}

// Reusable Styles
const containerStyle: React.CSSProperties = {
  maxWidth: "500px",
  margin: "50px auto",
  padding: "30px",
  border: "1px solid #ddd",
  borderRadius: "15px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  padding: "15px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
};
