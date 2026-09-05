"use client";

import { FormEvent, useState } from "react";

export default function ListYourProperty() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const company = (
      form.elements.namedItem("company") as HTMLInputElement
    ).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const property = (
      form.elements.namedItem("property") as HTMLInputElement
    ).value;
    const location = (
      form.elements.namedItem("location") as HTMLInputElement
    ).value;
    const type = (form.elements.namedItem("type") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const googleForm = document.createElement("form");

    googleForm.method = "POST";
    googleForm.action =
      "https://docs.google.com/forms/d/e/1FAIpQLScpz1aPlziClINzFcBniJeSbBK7OWm3Wyed5HfgKrKwRIdHzA/formResponse";
    googleForm.target = "google-property-submit";
    googleForm.style.display = "none";

    const fields = [
      ["entry.1368347809", name],
      ["entry.1759221085
