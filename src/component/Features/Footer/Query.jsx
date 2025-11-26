import React, { useState } from "react";

export default function Query() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://nexware-digital-server.vercel.app/api/contact/contact-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Message sent!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send" });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.row}>

        <div style={styles.column}>
          <h2 style={styles.heading}>About Us</h2>
          <p style={styles.text}>
            At Nexware Digital, our mission is to empower businesses by creating visually appealing websites and driving strong online growth with clean UI/UX, modern development, and reliable digital solutions.
          </p>
        </div>

        <div style={styles.column}>
          <h2 style={styles.heading}>Contact Us</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" style={styles.input} required />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" style={styles.input} required />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="4" style={styles.textarea} required />
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p style={{ marginTop: 10, color: status.type === "success" ? "green" : "red" }}>
                {status.message}
              </p>
            )}
          </form>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: { background: "white", padding: "60px 20px", borderTop: "1px solid #eee" },
  row: { display: "flex", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto", gap: "50px", flexWrap: "wrap" },
  column: { flex: 1, minWidth: "320px" },
  heading: { fontSize: "28px", fontWeight: 700, marginBottom: "15px", background: "linear-gradient(to right, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  text: { fontSize: 16, color: "#555", lineHeight: 1.7 },
  form: { display: "flex", flexDirection: "column", gap: 14, marginTop: 10 },
  input: { padding: "12px 14px", borderRadius: 8, border: "1px solid #d0d7e2", fontSize: 15, outline: "none", transition: "0.2s" },
  textarea: { padding: "12px 14px", borderRadius: 8, border: "1px solid #d0d7e2", fontSize: 15, outline: "none", transition: "0.2s" },
  button: { padding: "12px 14px", background: "#1f6bff", color: "white", border: "none", borderRadius: 8, fontSize: 16, cursor: "pointer", marginTop: 10, transition: "0.25s" },
};
