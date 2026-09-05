"use client";

import { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe39rB-2BQufLRfY6Q985S2yrk1jM59-RJaBQzcU2494SrqQQ/viewform?usp=pp_url" +
      "&entry.1461084429=" + encodeURIComponent(name) +
      "&entry.484427673=" + encodeURIComponent(phone) +
      "&entry.660279963=" + encodeURIComponent(email) +
      "&entry.699626368=" + encodeURIComponent(message);

    window.open(googleFormUrl, "_blank");
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 className="serif">Let’s Connect.</h1>
          <p className="muted">
            Have a property enquiry or want to work with SOVARA?
            Send us your details and our team will get in touch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name"
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              required
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              required
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={6}
              required
            />

            <button className="btn dark" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
