import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <style>
        {`
          .contact-container {
            padding: 2rem;
            background-color: #f9f9f9;
            color: #333;
            font-family: 'Poppins', sans-serif;
          }
          .contact-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .contact-header h1 {
            font-size: 2.5rem;
            color: #f53b57;
          }
          .contact-header p {
            font-size: 1rem;
            color: #555;
          }
          .contact-form {
            max-width: 500px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
          }
          .contact-form input,
          .contact-form textarea {
            margin-bottom: 1rem;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }
          .contact-form button {
            padding: 0.8rem;
            border: none;
            background-color: #f53b57;
            color: #fff;
            font-size: 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .contact-form button:hover {
            background-color: #d7324b;
          }
          @media (max-width: 768px) {
            .contact-form {
              width: 90%;
            }
          }
        `}
      </style>
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below.</p>
      </div>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
