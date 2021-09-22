import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Heading from "../components/Common/Heading";

export default function Contact() {
  return <div className="contact-us">
    <div className="contact-us__content">
    <Heading text="Get in touch" />
    <p>Do you have any questions regarding booking? Are you property owner who wants to be listed?</p>
    <h2 className="heading-sub">Phone</h2>
    <p>Due to COVID-19, our team is working remotely. Please email us, and we'll get in touch.</p>
    </div>
    <ContactForm />
  </div>;
}
