import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_49pixw6",      // Your Service ID
        "template_zj9jooe",     // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "0DS6hSo-c2thhAHbI"          // Replace with your actual User ID / Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Location:</strong> Guntur, AP, India</p>
          <p><strong>Phone:</strong> +91-9381498784</p>
          <p><strong>Email:</strong> vamsikrishnagamidi@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/gamidivamsikrishna"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gamidivamsikrishna
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/vamsi764" target="_blank" rel="noopener noreferrer">
              github.com/vamsi764
            </a>
          </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">Send Message</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Guntur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.814367948685!2d80.43991257499999!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f2d2b8c7e4bb%3A0x964c9f3a48aef5c2!2sGuntur%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1697315000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
